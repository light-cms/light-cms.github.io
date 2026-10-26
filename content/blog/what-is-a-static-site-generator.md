---
title: "What Is a Static Site Generator? How SSGs Turn Content Into HTML"
description: "A static site generator builds pages ahead of time from templates and content files, producing plain HTML that a CDN serves, with no server runtime and no database."
serial: 46
date: 2026-10-16T11:20:00Z
draft: false
keywords:
  - what is a static site generator
  - static site generator
  - ssg explained
  - how static sites work
  - pre rendered html
preview: /og-image.webp
taxonomies:
  tags:
    - static-sites
    - ssg
    - explainers
    - web
---

A **static site generator (SSG)** is a program that takes content and templates and produces a complete website as plain HTML, CSS, and JavaScript files, before anyone visits.

Instead of assembling a page per request, the work happens once, at build time. What ships to the reader is the finished artifact.

---

## The Model in One Diagram

```text
Content (Markdown + front matter)   ┐
Templates (HTML / JSX / Go templates)├─> SSG build ─> public/ ─> CDN ─> Browser
Configuration, data, styles          ┘
```

Run the build, and a `public/` directory appears containing every page of the site. Deploy that directory anywhere that can serve files, and the site is live.

---

## What the Build Actually Does

1. **Reads content.** Markdown files with [front matter](/blog/what-is-front-matter/): titles, dates, tags, draft flags.
2. **Applies templates.** Each content type maps to a layout: post page, listing, tag index, home page.
3. **Generates every page.** Article pages, paginated lists, tag archives, RSS feeds, and sitemaps, all pre-rendered.
4. **Copies assets.** Images, fonts, styles, scripts.
5. **Emits `public/`.** A folder of files with no runtime attached.

Some generators do this in milliseconds; some in seconds. None of it happens while a reader is waiting.

---

## Why the Difference Matters

A dynamic site (WordPress, Rails, most server-rendered frameworks) does work on every request: run code, query a database, assemble HTML, respond. A static site did that work already.

The consequences are structural:

- **Speed.** The nearest CDN edge already has the page. There is no query, no render, no cold start.
- **Security.** No server-side code executes per request, no database listening on a port, no admin login to brute-force. The attack surface is a folder of files.
- **Reliability.** Nothing to crash at 3 a.m. The most common failure mode is a bad deploy, which is undone by redeploying the previous one.
- **Cost.** Bandwidth is cheap; always-on compute is not. Static sites cost a rounding error at almost any traffic level.
- **Longevity.** Files stay readable. The build tooling may age, but the output does not rot.

There is also an environmental argument worth taking seriously: serving cached files close to the reader uses a fraction of the energy of executing code per view. [Static sites and CO₂](/blog/greener-web-static-sites/) goes into the numbers.

---

## What SSGs Are Good At, and Where They Struggle

**Excellent for:** blogs, documentation, marketing sites, portfolios, changelogs, and any site where content changes occasionally and reading happens constantly.

**Awkward for:** content that must update without a rebuild, per-user personalization, complex search over frequently changing data, or anything requiring per-request logic. Those workloads want a server; see [static vs dynamic sites](/blog/static-vs-dynamic/) for the full trade-off.

Interactivity is not off-limits. The modern pattern pre-renders everything and attaches small islands of JavaScript where needed (forms, search, dark-mode toggles), the idea behind [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) and similar tools.

---

## The Options in Brief

| Generator | Language / templating | Signature strength |
| :--- | :--- | :--- |
| **Hugo** | Go templates | Raw build speed, huge theme ecosystem |
| **Astro** | `.astro` components | Islands architecture, content collections |
| **Eleventy** | Nunjucks, Liquid, and more | Zero-JS minimalism, full control |
| **Jekyll** | Liquid | GitHub Pages heritage, simplicity |
| **Zola** | Tera | Single binary, batteries included |
| **SvelteKit / Next.js** | React/Svelte | Sites that grow into applications |

The full survey is in [best static site generators](/blog/best-static-site-generators/). All of them consume the same input: Markdown with front matter.

---

## Where the CMS Fits

An SSG solves *rendering*; it says nothing about *authoring*. Left alone, publishing means editing files in a code editor and pushing commits: workable for developers, a barrier for everyone else.

A Git-backed CMS fills that gap: it writes Markdown and front matter into the repository through a visual editor, and the SSG does what it always did. The generator never changes; the writer's experience does. That is the whole premise behind [LightCMS](/blog/what-is-lightcms/), and the fastest way to see it is to [copy a starter template](/blog/start-with-a-lightcms-template/) with the build already configured.

---

## Frequently Asked Questions

### Is an SSG the same as a framework?

No. A framework handles requests at runtime; a generator runs at build time and produces files. Some tools blur the line: SvelteKit and Next.js can do both.

### Do static sites support comments, forms, or search?

Yes, through third-party services or client-side JavaScript: form endpoints, comment providers, and browser-side search indexes are all common.

### How often do I need to rebuild?

Only when content or code changes. A typical blog builds on every publish, a process measured in seconds.

### Is a static site good for SEO?

Very. Fast load, strong Core Web Vitals, clean crawlable HTML, and no duplicate-rendering issues.

### Can a static site handle high traffic?

Yes. Traffic is served from cache, so spikes are cheap. A dynamic site works the other way, where spikes cost money.

---

Related: [static vs dynamic sites](/blog/static-vs-dynamic/), [what is the Jamstack?](/blog/what-is-jamstack/), and [where to host a static site](/misc/top-static-site-hosting/).
