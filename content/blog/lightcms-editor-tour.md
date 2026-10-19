---
title: "A Tour of the LightCMS Editor: WYSIWYG That Outputs Clean Markdown"
description: "Inside the LightCMS writing surface: TipTap-powered visual editing with math, code highlighting, tables, task lists, and media that still produces hand-editable Markdown."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
keywords:
  - lightcms editor
  - wysiwyg markdown editor
  - visual editor for markdown
  - tiptap editor
  - markdown wysiwyg
preview: /og-image.png
taxonomies:
  tags:
    - lightcms
    - editor
    - markdown
    - writing
---

Most "Markdown editors" are a text area with a preview pane stapled to the side. You write raw syntax, glance at the result, and hope the nesting is right. The LightCMS editor works the other way. **You write, and the editor writes Markdown underneath.**

This is a tour of that writing surface: what it does, why it works that way, and what it deliberately refuses to do.

---

## The Core Idea: See the Document, Not the Syntax

The editor is built on [TipTap](https://tiptap.dev), a ProseMirror-based rich text framework, configured to serialize everything it produces into standard Markdown plus YAML front matter.

That means:

- **Bold** is a toolbar button or `Cmd+B`, and it writes `**bold**` to the file.
- A heading is a dropdown, and it writes `## Heading`.
- A table is inserted, dragged, and edited as a table, and lands as a pipe table in your repository.

You get the immediacy of a word processor with the durability of plain text. There is no proprietary document format, no binary blob, and no conversion step when you leave.

---

## What You Can Drop Into a Post

### Structured text
Headings, blockquotes, ordered and unordered lists, horizontal rules, and task lists — the full skeleton of a technical article, all keyboard-reachable.

### Code blocks with highlighting
Insert a fenced block, pick the language, and the editor keeps the fence and language tag intact. Your published post renders with the same syntax highlighting your SSG already applies.

### Math with KaTeX
Write inline math or display equations and see them typeset live. For technical publishing such as ML posts, physics notes, and algorithm write-ups, this removes the "compile to check the formula" loop.

### Tables
Insert rows and columns visually. Markdown tables are miserable to author by hand; here they are just cells.

### Media
Drag images onto the page. LightCMS stores the file, generates the reference, and writes it into your content, so a screenshot goes from clipboard to published without a trip through your file system.

---

## Front Matter Without the YAML

The other half of any static-site post is its front matter, and it is where hand-editing usually goes wrong: a stray tab, a date in the wrong format, an unclosed quote, and the build breaks.

In LightCMS, front matter is a form: title, description, date, tags, keywords, and whatever else your schema declares. The editor validates as you type and writes correctly formatted YAML on publish. Writers never see the syntax; the repository still receives exactly what the SSG expects.

A large share of "my build is failing" support threads in static-site communities trace back to malformed front matter, and a visual form removes that class of error.

---

## Themes Built for Long Sessions

The editor ships with light and dark modes. That sounds cosmetic until you have written for three hours: a pure `#ffffff` background at 1am is hostile, and most admin dashboards do not care. LightCMS picks its palettes for reading and writing over long sessions, not for a screenshot on a landing page.

---

## What the Editor Will Not Do

Two boundaries are intentional:

1. **It will not let you break the format.** Every action maps to valid Markdown. There is no state where the editor saves something your SSG cannot read.
2. **It is not a design tool.** Layout, theme, and presentation belong to your templates: the CMS owns content, the repository owns code. Keeping that line clean is what lets designers and writers work in the same repository without stepping on each other.

---

## Why Not Just Use a Code Editor?

You can, and developers often do. But as soon as a second person touches the repository, "just edit the Markdown" becomes a support burden: wrong front matter, mangled tables, accidental whitespace commits. Fixing a typo then means installing an editor, cloning a repo, and learning a branch workflow.

The LightCMS editor leaves the developer's workflow untouched and removes those barriers for everyone else.

---

## Frequently Asked Questions

### Does the editor produce messy Markdown?

No. It serializes to standard Markdown with YAML front matter, the same output a careful human would write. Open any published post in VS Code and it reads normally.

### Can I still edit the files by hand?

Always. LightCMS commits to your repository like anyone else would. Hand edits, editor edits, and AI edits all land as the same `.md` files.

### Does it support Markdown shortcodes?

Your SSG's shortcodes live in the content as plain text and are passed through untouched; the editor does not attempt to interpret or reformat them.

### What about images?

Drag and drop. LightCMS places the asset and writes the reference so the path matches what your build expects.

---

Next: [the AI copilot](/blog/lightcms-ai-copilot/) that lives beside this editor, and [dictating a draft with your voice](/blog/lightcms-voice-to-text/) when typing is the slow part.
