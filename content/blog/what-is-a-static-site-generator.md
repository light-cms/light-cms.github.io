---
title: "What Is a Static Site Generator?"
description: "A static site generator compiles content and templates into static HTML, CSS, and JavaScript files before deployment."
date: "2026-11-16T08:58:17.908Z"
draft: false
tags:
  - what is a static site generator
  - static site generator
  - ssg explained
  - how static sites work
  - pre rendered html
slug: what-is-a-static-site-generator
---

A static site generator (SSG) compiles content files, templates, and assets into static HTML, CSS, and JavaScript before deployment. Instead of rendering each page on every request, the build step produces files that a CDN or web server can deliver directly.

## How a static site generator works

```text
Content (Markdown + front matter)
Templates and components
Assets and configuration
        │
        ▼
   SSG build
        │
        ▼
 public/ or dist/
        │
        ▼
   CDN / static host
```

A typical build does four things:

1. **Reads content:** Parses Markdown and front matter metadata such as title, date, tags, and draft status.
2. **Applies templates:** Maps content to layouts for pages, lists, taxonomies, and feeds.
3. **Generates output:** Writes HTML pages, RSS feeds, sitemaps, and search indexes. [VERIFY: confirm which outputs your specific SSG generates by default.]
4. **Copies assets:** Moves images, fonts, and static files into the output directory.

## Benefits and trade-offs

| Benefit | Why it matters | Trade-off |
| :--- | :--- | :--- |
| **Fast delivery** | Prebuilt files can be served from edge caches | Build step required before changes go live |
| **Smaller runtime surface** | No per-request app runtime or database required for content pages | Dynamic features need APIs or client-side JavaScript |
| **Portability** | Content often lives as plain Markdown files | Template and plugin ecosystems vary by generator |
| **Version control fit** | Content and code can live in Git | Editorial workflows may need a CMS layer |

Static site generators work well for blogs, documentation, marketing sites, and portfolios. They are less suitable when every request needs personalized server-side rendering or real-time database queries.

## Common static site generators

Popular SSGs include Astro, Hugo, Zola, Eleventy, Jekyll, and SvelteKit in static mode. [VERIFY: confirm current positioning/capabilities before describing specific generators in detail.] For a comparison, see [Best Static Site Generators in 2026](/blog/best-static-site-generators/).

## Where a Git-based CMS fits

An SSG handles rendering. A Git-based CMS handles authoring by giving editors a browser interface that commits Markdown to the repository. That combination keeps the delivery architecture static while making content editing accessible to non-developers. See [What Is a Git-Based CMS?](/blog/git-based-cms-explained/).
