---
title: Why LightCMS?
description: "The philosophy behind LightCMS: why writing should be frictionless, why Git-backed content matters, and why complexity stays away from the writer."
serial: 2
date: 2026-09-18T00:41:00Z
draft: false
keywords:
  - why lightcms
  - gitbacked cms
  - static sites
  - carbon footprint
preview: /og-image.png
taxonomies:
  tags:
    - cms
    - philosophy
    - lightcms
---

I’ve tried dozens of CMSs over the years, and most felt a little pale. They worked, but they often missed the mark on the human experience of writing and managing a publication.

The closest thing I found to a pleasant developer workflow was Front Matter in VS Code. It makes managing content files easier, but the barrier remains: opening a whole code editor, pulling remote Git branches, resolving formatting conflicts, and debugging local tools is a lot of friction for a three-paragraph reflection.

Writing should be the easy part.

---

## The Imperative to Share

There is real value in owning your publishing space on the web:

1. **If you learned something over the years, share it.**
2. **If you built something intriguing, write about it.**
3. **If you solved a tricky bug that took you three days to understand, document it.** Six months from now, someone will search for that exact error and find your solution.

Everyone deserves their own little corner of the internet. Publishing essays and technical insights shouldn't depend on proprietary social platforms that manipulate reach or lock your content behind algorithmic walls.

Yet getting started shouldn't require you to be a senior DevOps engineer or full-stack web developer.

---

## The Static Site Paradox

Static sites are the simplest, fastest, and most durable way to publish content on the web:

- **Fast**: Pre-rendered HTML and CSS served globally from edge CDNs.
- **Secure**: No server-side runtime or vulnerable database listeners exposed to the public.
- **Eco-Friendly**: Minimal computational overhead and zero database queries per page view dramatically reduce digital carbon emissions (tools like [Website Carbon](https://www.websitecarbon.com/) highlight just how impactful this is).

There is no shortage of capable static site generators: [Astro](https://astro.build), [Hugo](https://gohugo.io), [Jekyll](https://jekyllrb.com), [SvelteKit](https://svelte.dev), and [Eleventy](https://www.11ty.dev).

**The paradox is that while running a static site is simple, managing it is not.**

You shouldn't need to understand Git rebase flags, Markdown terminal linters, front matter YAML schema validators, or GitHub token scopes to publish your thoughts. Asking a non-technical writer or a tired developer to navigate VS Code at midnight is too much friction.

---

## A Greener Web Is a Static Web

Static publishing wins on energy. A dynamic site burns electricity on every request; a static site does the work once and serves the result from cache, close to the reader, at a fraction of the energy. No always-on database, no per-view computation, no runtime shipped to the visitor's battery.

Durable content is sustainable content, too: plain Markdown files in your own repository remain readable and rebuildable for decades, while platforms shut down and WordPress installs rot. Every blog that moves from database-driven hosting to a static architecture is a permanent, measurable reduction in its carbon footprint.

More: [Static Sites and CO2: Building a Greener Web](/blog/greener-web-static-sites/).

---

## A CMS That Stays Out of Your Way

The goal of LightCMS is to make writing and publishing effortless without sacrificing the benefits of modern developer tooling:

- **Content Lives in Git**: Your articles remain pure Markdown in your own GitHub repository.
- **Automated CI/CD**: Your existing build pipelines (GitHub Actions, Vercel, Cloudflare Pages) continue to build and deploy your site automatically.
- **Frictionless Writing**: The author opens a distraction-free visual editor in their browser, writes, formats, and hits publish.

You get all the auditability, rollback safety, and ownership of a Git-backed repository, while the author gets a distraction-free environment built for writing.

---

## TL;DR

Writing a blog post should not feel like a high-stakes engineering task. Getting your ideas into words should be the easy part.
