---
title: "LightCMS Editor Tour: Visual Editing with Markdown Output"
description: "A practical look at the LightCMS editor, including visual editing, front matter handling, media, and the trade-offs of WYSIWYG Markdown workflows."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
keywords: "newsy setup"

taxonomies:
  tags:
    - lightcms
    - editor
    - markdown
    - writing
---

The LightCMS editor is designed to give writers a visual editing interface while saving content as Markdown and front matter in a Git repository. The main goal is to reduce formatting errors without taking content out of a file based workflow.

## What the editor handles

| Editor task | What to check | Why it matters |
| :--- | :--- | :--- |
| Rich text formatting | Headings, lists, links, quotes, code blocks | Writers should not need to debug Markdown syntax |
| Front matter | Title, date, tags, description, draft status | Invalid metadata can break static site builds |
| Media | Image upload, paths, alt text | Asset handling often causes broken links in static sites |
| Structured content | Tables, task lists, embeds, math | Feature support varies by editor and SSG |
| Markdown output | Clean, diffable Markdown in Git | Output quality affects long-term portability |

A good WYSIWYG Markdown editor should make common writing tasks easier while preserving predictable file output. If the editor produces noisy Markdown or rewrites front matter unexpectedly, it creates friction for developers reviewing diffs.

## Front matter and build safety

Front matter errors are a common source of static site build failures. A form-based front matter editor can reduce mistakes such as invalid dates, missing required fields, or malformed YAML.

The trade-off is flexibility. Strict forms prevent errors, but they can also block custom fields unless the editor allows schema or custom key support.

## Visual editing trade-offs

Visual editors are helpful for writers who do not want to manage raw Markdown syntax. They are less helpful when a team needs precise control over custom shortcodes, unusual Markdown extensions, or framework-specific components. In those cases, the editor should preserve raw blocks rather than rewriting them.

My judgment is that a visual editor is valuable for Git based publishing when it keeps Markdown clean and predictable. If it hides too much or generates proprietary output, it undermines the portability benefit of using Git in the first place.

For related features, see [LightCMS AI Copilot](/blog/lightcms-ai-copilot/) and [Voice to Text Dictation in LightCMS](/blog/lightcms-voice-to-text/).
