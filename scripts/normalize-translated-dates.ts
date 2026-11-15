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
	"canonical",
	"created",
	"date",
	"draft",
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

function splitKeyValue(line: string): { key: string; prefix: string; value: string } | null {
	const match = line.match(/^([A-Za-z_][\w.-]*)(\s*[:=]\s*)(.*)$/);
	if (!match) return null;
	return { key: match[1], prefix: `${match[1]}${match[2]}`, value: match[3] };
}

function sourceStructuralValues(source: string): Map<string, string> {
	const values = new Map<string, string>();
	const frontMatter = parseFrontMatter(source);
	if (!frontMatter) return values;

	for (const line of frontMatter.lines) {
		const parsed = splitKeyValue(line);
		if (parsed && structuralKeys.has(parsed.key)) {
			values.set(parsed.key, parsed.value.trimEnd());
		}
	}

	return values;
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

let updated = 0;

for (const translatedPath of await walk(contentDir)) {
	const match = translatedPath.match(translatedNamePattern);
	if (!match) continue;

	const [, stem, locale] = match;
	const sourcePath = join(translatedPath.slice(0, -`${locale}.md`.length) + "md");
	const source = await readFile(sourcePath, "utf8").catch(() => null);
	if (!source) continue;

	const values = sourceStructuralValues(source);
	if (values.size === 0) continue;

	const translated = await readFile(translatedPath, "utf8");
	const frontMatter = parseFrontMatter(translated);
	if (!frontMatter) continue;

	const lines: (string | null)[] = [...frontMatter.lines];
	const seen = new Set<string>();

	for (let index = 0; index < lines.length; index += 1) {
		const line = lines[index];
		if (line === null) continue;

		const parsed = splitKeyValue(line);
		if (!parsed || !structuralKeys.has(parsed.key)) continue;

		seen.add(parsed.key);
		const value = values.get(parsed.key);
		if (value === undefined) {
			lines[index] = null;
			continue;
		}
		lines[index] = `${parsed.prefix}${value}`;
	}

	// Add structural keys that Crowdin dropped entirely.
	for (const [key, value] of values) {
		if (seen.has(key)) continue;
		const separator = frontMatter.delimiter === "+++" ? " = " : ": ";
		lines.push(`${key}${separator}${value}`);
	}

	const body = translated.split("\n");
	const next = [
		frontMatter.delimiter,
		...lines.filter((line): line is string => line !== null),
		frontMatter.delimiter,
		...body.slice(frontMatter.end + 1),
	].join("\n");

	if (next === translated) continue;

	await writeFile(translatedPath, next);
	updated += 1;
}

console.log(`Normalized front matter in ${updated} translated page(s).`);
