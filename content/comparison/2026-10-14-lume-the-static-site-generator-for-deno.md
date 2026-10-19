---
title: "Lume: The Static Site Generator for Deno"
description: "Deno's static site generator, explained: supported formats, plugin architecture, how it compares to Jekyll, Hugo, and Eleventy, and how it fits a Git CMS workflow."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false
keywords:
  - lume static site generator
  - deno ssg
  - lume vs eleventy
  - lume deno cms
  - lume land
preview: /og-image.png
taxonomies:
  tags:
    - ssg
    - lume
    - deno
    - static-sites
---

[Lume](https://lume.land) (Galician for "fire") is the static site generator at the center of the Deno ecosystem. Inspired by Jekyll, Hugo, and Eleventy, it aims to be simpler to configure than any of them while staying just as flexible, and it runs natively on Deno, with no `node_modules` in sight.

---

## What Lume Is

A fast, composable, extensible static site generator written in Deno. You point it at a source directory of content, it processes your files through a pipeline of plugins, and it writes pure static HTML ready for any CDN. The philosophy: sensible defaults, minimal configuration, and every stage swappable.

## Formats and Templating

Lume's headline feature is format flexibility. Out of the box it handles:

- **Markdown** (with plugins for GitHub-flavored syntax, footnotes, and more)
- **YAML and JSON data files**
- **JavaScript and TypeScript modules** as pages or data sources
- **JSX** (Preact components rendered to static HTML)
- **Nunjucks** and other template languages via plugins

That last point matters: a Lume site can mix Markdown articles with JSX components in the same build, so content-heavy sites with occasional interactive sections feel natural.

## Ecosystem

- **Plugins** cover everything from syntax highlighting (Prism, Shiki) to image transformation, sitemaps, and feeds: the Eleventy-style "assemble your own pipeline" model, with Deno-native ergonomics.
- **Deno toolchain**: built-in TypeScript, secure-by-default execution, and reproducible environments without a package manager ritual.
- **Backed by Deno**: used in official tutorials, it is the de-facto answer to "what do I use to make a static site on Deno?"

## Where It Fits

Lume occupies the same niche as [Eleventy](/blog/eleventy-vs-astro/): minimal output, templating freedom, no client-side framework imposed. Choose it if your world is Deno/TypeScript; choose Eleventy if your world is Node; choose [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) if you want component islands built in. The wider field is surveyed in [best static site generators](/blog/best-static-site-generators/).

## Content and CMS Workflow

Lume reads Markdown with front matter from your repository like every generator in this category. Pair it with a Git-backed CMS ([LightCMS](/getting-started/) or the [wider field](/comparison/top-git-cms/)) and writers publish visually while Lume compiles the commits into HTML. Deployment targets are the usual free static hosts ([comparison](/blog/cloudflare-pages-vs-github-pages/)).

---

## Frequently Asked Questions

### Is Lume a CMS or a static site generator?

A static site generator. For the editing layer, pair it with a Git-backed CMS that commits Markdown into its source directory.

### What is the difference between Lume and Eleventy?

Very little philosophically: both produce zero-JS static output with templating freedom. Lume is Deno-native with TypeScript built in; Eleventy runs on Node with the larger ecosystem.

### Does Lume support JSX?

Yes. Preact components can render to static HTML alongside Markdown pages, one of its most loved features.

### Is Lume fast?

Yes. Like all single-process generators producing static output, builds are measured in seconds; visitors receive the same cached HTML every SSG produces.
