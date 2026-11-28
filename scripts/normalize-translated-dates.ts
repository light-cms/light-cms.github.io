#!/usr/bin/env bun
/**
 * Crowdin can localize or otherwise rewrite structural front matter while
 * translating a page. Zola needs those values to match the source page, so
 * copy them back after every pull. The name of this script is kept for the
 * existing build task, but it normalizes every structural key, not just dates.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const contentDir = new URL("../content", import.meta.url).pathname;
const translatedNamePattern = /^(.*)\.([A-Za-z]{2}(?:-[A-Za-z]{2,4})?)\.md$/;

// Keep in sync with `excluded_front_matter_elements` in crowdin.yml.
const structuralKeys = new Set([
	"author",
	"canonical",
	"comments",
	"created",
	"date",
	"draft",
	"extra",
	"fmContentType",
	"headless",
	"id",
	"in_search_index",
	"isCJKLanguage",
	"page_template",
	"preview",
	"serial",
	"slug",
	"sort_by",
	"tags",
	"template",
	"visibility",
	"weight",
]);

type FrontMatter = {
	delimiter: string;
	lines: string[];
	start: number;
	end: number;
};

// A top-level `key:` / `key =` line (no indentation, not a list item).
const keyPattern = /^([A-Za-z_][\w.-]*)\s*[:=]\s*(.*)$/;
const listItemPattern = /^\s*-\s+/;

function parseFrontMatter(text: string): FrontMatter | null {
	const lines = text.split("\n");
	const delimiter = lines[0]?.trim();
	if (delimiter !== "---" && delimiter !== "+++") return null;

	for (let index = 1; index < lines.length; index += 1) {
		if (lines[index].trim() === delimiter) {
			return { delimiter, lines: lines.slice(1, index), start: 0, end: index };
		}
	}

	return null;
}

function isTopLevelKey(line: string): boolean {
	if (line.startsWith(" ") || line.startsWith("\t")) return false;
	if (listItemPattern.test(line)) return false;
	return keyPattern.test(line);
}

function keyOf(line: string): string | null {
	const match = line.match(keyPattern);
	return match ? match[1] : null;
}

// End index (exclusive) of a key's block: nested lines and list items that
// belong to `start`, stopping at the next top-level key or end of front matter.
function blockEnd(lines: string[], start: number): number {
	let end = start + 1;
	while (end < lines.length) {
		const line = lines[end];
		if (line.trim() === "") {
			end += 1;
			continue;
		}
		if (isTopLevelKey(line)) break;
		end += 1;
	}
	// Drop trailing blank lines from the block.
	while (end - 1 > start && lines[end - 1].trim() === "") end -= 1;
	return end;
}

// Collect the full block (key line + nested/list lines) for every top-level
// structural key. Nested keys such as `extra.comments` are not structural.
function structuralBlocks(lines: string[]): Map<string, string[]> {
	const blocks = new Map<string, string[]>();

	for (let index = 0; index < lines.length; ) {
		const key = isTopLevelKey(lines[index]) ? keyOf(lines[index]) : null;

		if (key && structuralKeys.has(key)) {
			const end = blockEnd(lines, index);
			blocks.set(key, lines.slice(index, end));
			index = end;
			continue;
		}

		index += 1;
	}

	return blocks;
}

async function walk(dir: string): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const path = join(dir, entry.name);
			return entry.isDirectory() ? walk(path) : Promise.resolve([path]);
		}),
	);
	return files.flat();
}

// Re-emit front matter, restoring structural keys from the source page in
// place and dropping translated variants; source-only keys are appended.
function rebuildFrontMatter(
	frontMatter: FrontMatter,
	sourceBlocks: Map<string, string[]>,
): string[] {
	const output: string[] = [];
	const restored = new Set<string>();
	const lines = frontMatter.lines;

	for (let index = 0; index < lines.length; ) {
		const key = isTopLevelKey(lines[index]) ? keyOf(lines[index]) : null;

		if (key && structuralKeys.has(key)) {
			const end = blockEnd(lines, index);
			const source = sourceBlocks.get(key);
			if (source) {
				output.push(...source);
				restored.add(key);
			}
			// If the source lacks this key, drop the translated one.
			index = end;
			continue;
		}

		output.push(lines[index]);
		index += 1;
	}

	for (const [key, block] of sourceBlocks) {
		if (restored.has(key)) continue;
		output.push(...block);
	}

	return output;
}

let updated = 0;

for (const translatedPath of await walk(contentDir)) {
	const match = translatedPath.match(translatedNamePattern);
	if (!match) continue;

	const [, _stem, locale] = match;
	const sourcePath = join(
		`${translatedPath.slice(0, -`${locale}.md`.length)}md`,
	);
	const source = await readFile(sourcePath, "utf8").catch(() => null);
	if (!source) continue;

	const sourceFrontMatter = parseFrontMatter(source);
	if (!sourceFrontMatter) continue;

	const sourceBlocks = structuralBlocks(sourceFrontMatter.lines);
	if (sourceBlocks.size === 0) continue;

	const translated = await readFile(translatedPath, "utf8");
	const frontMatter = parseFrontMatter(translated);
	if (!frontMatter) continue;

	const output = rebuildFrontMatter(frontMatter, sourceBlocks);

	const body = translated.split("\n");
	const next = [
		frontMatter.delimiter,
		...output,
		frontMatter.delimiter,
		...body.slice(frontMatter.end + 1),
	].join("\n");

	if (next === translated) continue;

	await writeFile(translatedPath, next);
	updated += 1;
}

console.log(`Normalized front matter in ${updated} translated page(s).`);
