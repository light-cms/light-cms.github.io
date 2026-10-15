---
title: What Is Markdown? The Plain-Text Format Powering the Web
description: Markdown explained — what it is, why it has lasted, the syntax you actually need, and how Git-backed CMS tools turn plain text into a publishing format.
serial: 25
date: 2026-10-14T15:00:00Z
draft: false
keywords:
  - what is markdown
  - markdown tutorial
  - markdown syntax guide
  - why use markdown
  - markdown for writers
preview: /og-image.png
taxonomies:
  tags:
    - markdown
    - writing
    - content
---

Markdown is plain text with a small set of formatting symbols. Created by John Gruber in 2004, it is the simplest possible way to write formatted documents. Two decades later it has quietly become the lingua franca of the web: documentation, README files, notes, newsletters, and the content layer of millions of sites run on Markdown.

---

## Why Markdown Won

- **It never breaks**. A `.md` file from 2004 opens perfectly in any text editor, forever. Proprietary document formats rot; plain text does not.
- **It diffs beautifully**. Because it is text, Git can track every change, which is why every Git-backed CMS stores content as Markdown.
- **It is effortless to learn**. The core syntax is five minutes of symbols.
- **It separates content from presentation**. Write structure; let the theme handle looks.
- **It is everywhere**. GitHub, Notion exports, static site generators, AI tools — the whole modern toolchain speaks it.

## The Syntax You Actually Need

```markdown
# Heading 1
## Heading 2

A paragraph with **bold** and *italic* text.

- A bullet point
- Another one

1. A numbered list
2. And the next item

> A blockquote for asides.

[A link](https://example.com)
![An image](/images/photo.jpg)

`inline code` and fenced code blocks:

```js
console.log("hello, web");
```
```

That covers the vast majority of real-world writing. Tables, task lists, and footnotes round out the extended syntax that GitHub-flavored Markdown adds.

## The Missing Piece: Front Matter

Static sites add a small metadata header to each file:

```markdown
---
title: My First Post
date: 2026-10-14T10:00:00Z
tags:
  - blogging
---

The article begins here.
```

This YAML front matter is where the CMS lives: titles, dates, drafts, and taxonomies ride along with the Markdown body.

## Writing Markdown Without the Syntax

Here is the industry secret: **you do not have to write Markdown by hand anymore**. Modern Git-backed editors, [LightCMS](/getting-started/) among them, provide a full visual editor with images, tables, and formatting shortcuts, then serialize your writing to clean Markdown underneath. You get plain-text durability with a comfortable writing experience.

That combination (visual editing on top of Markdown in Git) is what powers the whole [Git-backed CMS category](/blog/git-cms-vs-traditional-cms/), and it is how the static sites in [best static site generators](/blog/best-static-site-generators/) get their content.

---

## Frequently Asked Questions

### Is Markdown dead?

The opposite. After 20+ years it is more central than ever. It is the content format of GitHub, documentation toolchains, and AI-era writing.

### What is the difference between Markdown and HTML?

Markdown is the authoring format (plain text, human-writable); HTML is the rendering format (what browsers display). Generators convert the former into the latter.

### Do I need to learn Markdown to blog?

Not with a visual Git-backed CMS: you write normally, and the tool produces Markdown for you. Learning the basics still helps for quick edits.

### Where is Markdown stored?

As `.md` files, ideally in a Git repository, which gives you version history, review, and portable ownership of everything you write.
