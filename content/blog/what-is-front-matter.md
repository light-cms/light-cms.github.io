---
title: "What Is Front Matter in Markdown?"
description: "Front matter is YAML, TOML, or JSON metadata at the top of a Markdown file that static site generators use for titles, dates, tags, and templates."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false

tags:
  - markdown
  - explainers
  - static-sites
  - cms
---

Front matter is a metadata block at the top of a content file that describes the page to a static site generator. It typically contains fields such as title, description, date, tags, draft status, and template information.

## Common front matter formats

Most static site generators support YAML front matter, and some also support TOML or JSON.

```md
---
title: "Notes on Static Site Generators"
description: "A short summary used in metadata and previews."
date: 2026-10-16T09:00:00Z
draft: false
tags:
 - static-sites
 - tooling
---
```

The metadata sits between delimiters at the top of the file. The Markdown body follows below it.

## What front matter controls

| Field         | Common use                      | Build impact                                    |
| :------------ | :------------------------------ | :---------------------------------------------- |
| `title`       | Page title and heading          | Missing titles can break templates or listings  |
| `date`        | Sorting and publishing metadata | Invalid dates can cause build errors            |
| `draft`       | Draft/published state           | Drafts may be excluded from production builds   |
| `tags`        | Taxonomy pages and filters      | Invalid structure can break taxonomy generation |
| `slug`        | URL path override               | Can change canonical URLs                       |
| `description` | Metadata and previews           | Affects snippets and social previews            |

## Common mistakes

Front matter errors are a frequent cause of static site build failures. Common problems include invalid YAML indentation, incorrect date formats, missing quotes around special characters, and inconsistent field names across files.

A Git based CMS can reduce these errors by exposing front matter as form fields and validating values before saving. Even with a visual editor, keep the underlying front matter format consistent across your content repository.

For related reading, see [What Is Markdown?](/blog/what-is-markdown/) and [The LightCMS Editor Tour](/blog/lightcms-editor-tour/).
