---
title: "What Is Markdown?"
description: "Markdown is a plain-text markup format that uses simple symbols for headings, lists, links, and code, making it portable for docs, blogs, and static sites."
date: "2026-10-14T15:00:00.000Z"
draft: false
keywords:
  - what is markdown
  - markdown tutorial
  - markdown syntax guide
  - why use markdown
  - markdown for writers

slug: what-is-markdown
---

Markdown is a plain-text markup format for writing structured documents with simple symbols. It is commonly used for documentation, README files, notes, and static site content because the source remains readable as text and can be converted to HTML.

## Basic Markdown syntax

````md
# Heading 1

## Heading 2

A paragraph with bold and _italic_ text.

- A bullet item
- Another bullet item

1. A numbered item
2. Another numbered item

[Link text](https://example.com)
![Alt text](/images/photo.jpg)

`inline code`

```js
console.log("hello, web");
```
````

Different Markdown flavors add features such as tables, task lists, footnotes, and fenced code attributes. Common flavors include CommonMark and GitHub Flavored Markdown.

## Why Markdown works well for static sites

| Property        | Practical benefit                             | Trade-off                                    |
| :-------------- | :-------------------------------------------- | :------------------------------------------- |
| Plain text      | Easy to store, diff, and version in Git       | Limited layout control without extensions    |
| Readable source | Authors can edit without a proprietary editor | Complex documents may need MDX or shortcodes |
| HTML conversion | Static site generators render it to web pages | Output depends on generator and theme        |
| Portability     | Files can move between tools and platforms    | Flavor differences can affect rendering      |

## Markdown and front matter

Static site generators often pair Markdown with front matter, a metadata block at the top of the file.

```md
---
title: "My First Post"
date: 2026-10-14T10:00:00Z
tags:
  - blogging
---

The article body starts here.
```

Front matter stores metadata; Markdown stores content. Together, they form a portable content format for Git-based publishing workflows. For more detail, see [What Is Front Matter in Markdown?](/blog/what-is-front-matter/) and [What Is a Git-Based CMS?](/blog/git-based-cms-explained/).
