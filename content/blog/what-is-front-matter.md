---
title: "What Is Front Matter? The Metadata Block at the Top of Your Content"
description: "Front matter is the YAML or TOML block at the top of a Markdown file that tells your site its title, date, tags, and draft status — explained with examples."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false
keywords:
  - what is front matter
  - front matter markdown
  - yaml front matter
  - static site metadata
  - markdown metadata
preview: /og-image.png
taxonomies:
  tags:
    - markdown
    - explainers
    - static-sites
    - cms
---

**Front matter** is the block of metadata at the top of a content file, fenced off from the article itself. It is where a Markdown file declares what it *is* (title, date, tags, author, draft status), so that your site generator can render, sort, and filter it.

If Markdown is the body of a post, front matter is its label.

---

## What It Looks Like

```markdown
---
title: Notes on Static Site Generators
description: A short summary used for SEO and social cards.
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - static-sites
  - tooling
keywords:
  - static site generators
  - ssg comparison
preview: /og-image.png
---

The article body starts here, after the closing `---`.
```

Three things are worth noticing:

1. **The fences.** A line of three dashes opens and closes the block. Everything between belongs to metadata; everything after belongs to the article.
2. **The format.** That example is YAML — the default for most generators. TOML (`+++`) and JSON (`{...}`) are also used; Zola accepts all three, for instance.
3. **The fields.** Standard keys like `title` and `date` are understood by generators; custom keys like `keywords` or `preview` are available to your templates.

---

## What Front Matter Actually Does

Each field drives a concrete behavior in the build:

| Field | Effect |
| :--- | :--- |
| `title` | Page `<title>`, headings, and lists |
| `description` | Meta description, cards, list summaries |
| `date` | Sorting, "published on" display, feeds |
| `tags` / `categories` | Taxonomy pages and cross-linking |
| `draft` | Excluded from the build when `true` |
| `slug` | Overrides the URL derived from the filename |
| `template` | Chooses which layout renders the page |
| `weight` | Manual ordering within a section |

This is why a typo in front matter can break a build: `date: 2026-13-45` or a stray tab under `tags:` is invalid YAML, and the generator fails before it writes a single page.

---

## Why Front Matter Exists

Static site generators cannot ask a database "what is this page?" — there is no database. They need metadata to live **with** the content, in a form both a machine and a human can read. Front matter solves that:

- **Self-describing files.** A post carries everything needed to render it. Move the file, and its identity moves with it.
- **Diffable metadata.** Changing a title is a one-line commit you can review and revert like any other change.
- **Tool-friendly.** Editors, linters, and CI scripts can validate metadata before the build.
- **Portable.** The same block works across generators, with minor key differences.

---

## Common Conventions

Enough conventions exist that consistency is worth more than cleverness:

- **Dates in ISO 8601** — `2026-10-16T09:00:00Z`. Unambiguous across locales, sorts correctly.
- **Tags as a list**, not a comma-separated string, so a tag containing a space does not split in half.
- **Slugs lowercase with hyphens.** Filenames become URLs, so `my-great-post` beats `My Great Post.md`.
- **`draft: true` for unfinished work.** The safe way to save without publishing.
- **A real `description`.** The one field most often left empty and then regretted when the link gets shared.

---

## Where a CMS Fits

Front matter is exactly the part of Markdown that non-technical writers should never have to see. It is syntax with sharp edges: indentation matters, quotes matter, date formats matter.

A Git-backed CMS handles it as a **form** (fill in the title, pick the date, click tags) and serializes valid YAML on save. Writers never think about the fence; the repository still receives what the generator expects. That single feature eliminates one of the most common failure modes in static-site publishing.

LightCMS, for example, validates front matter as you type and writes it on commit (see [the editor tour](/blog/lightcms-editor-tour/)), so metadata stays correct no matter who is publishing.

---

## Frequently Asked Questions

### Is front matter required?

For pages in a date-sorted section, effectively yes — generators expect at least a title and a date. The exact requirements depend on your generator's schema.

### YAML vs TOML vs JSON — which should I use?

Whichever your generator defaults to. Consistency inside a repository matters more than the format itself.

### Can front matter contain lists and objects?

Yes. Nested maps and lists are normal: image galleries, authors with roles, and alternate titles all fit.

### How long should the description be?

Aim for roughly 140–160 characters: long enough to make sense in search results, short enough not to be truncated.

### Does front matter affect SEO?

Directly: it is where the title and meta description come from, so it is one of the highest-leverage small things in a static site.

---

Related: [what is Markdown?](/blog/what-is-markdown/), [the LightCMS editor](/blog/lightcms-editor-tour/), and [what a static site generator does](/blog/what-is-a-static-site-generator/).
