---
title: "What Is LightCMS? The Git based CMS for Static Sites"
description: "LightCMS is a self-hosted, Git based CMS with a visual WYSIWYG editor. It commits plain Markdown to your repository and lets your existing CI/CD deploy it."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
keywords:
  - what is lightcms
  - lightcms
  - Git based cms
  - markdown cms
  - visual editor for markdown
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - cms
    - git
    - markdown
---

**LightCMS** is a content management system that keeps your content in your Git repository as plain Markdown files.

No database. No lock-in. Sign in with GitHub, pick a repository, write, and publish. [LightCMS](https://lightcms.me) commits the changes for you.

## The problem [LightCMS](https://lightcms.me) solves

Static site generators make publishing fast, cheap, and secure. But writing a post in a code editor can feel difficult if you are not used to that workflow.

That workflow suits developers. It does not suit everyone who wants to write.

[LightCMS](https://lightcms.me) removes that friction without removing Git. Developers keep content in the repository, and writers get a browser-based editor for drafting and publishing.

---

## How [LightCMS](https://lightcms.me) works

1. **Sign in with GitHub.** LightCMS uses GitHub OAuth, so you do not need a separate account system.
2. **Connect a repository.** Choose any repo that contains Markdown content, including sites built with Astro, Hugo, Zola, Eleventy, Jekyll, SvelteKit, or Next.js.
3. **Write visually.** The TipTap-based editor supports headings, links, lists, tables, task lists, math, syntax-highlighted code, and drag-and-drop media.
4. **Publish.** [LightCMS](https://lightcms.me) writes the file and front matter, then commits it directly or opens a pull request if you want review.
5. **Deploy.** GitHub Actions, Cloudflare Pages, Vercel, or Netlify can rebuild and deploy your site. Writers stay in the browser, and maintainers keep their Git workflow.

Step 4 creates a normal commit. If you stop using [LightCMS](https://lightcms.me), your site still builds because your content already lives in your repository.

---

## What makes it different

There are several capable Git-based CMS options ([Decap CMS](/comparison/netlifycms), TinaCMS, Keystatic, Pages CMS), and [LightCMS](https://lightcms.me) takes a different approach in a few areas:

|                   | [LightCMS](https://lightcms.me)                                                                 |
| :---------------- | :---------------------------------------------------------------------------------------------- |
| **Storage**       | Your GitHub repository (Markdown + YAML front matter)                                           |
| **Editor**        | TipTap-based WYSIWYG editor with math (KaTeX), code highlighting, tables, task lists, and media |
| **AI**            | Built-in copilot for outlines, rewrites, and grammar, using any OpenAI-compatible provider      |
| **Voice**         | Whisper-powered dictation in the editor                                                         |
| **Newsletters**   | Publish Markdown and send updates with Newsy from GitHub                                        |
| **Hosting model** | Self-hosted, Apache 2.0 licensed, runs on any Node.js host                                      |
| **Lock-in**       | None: your content stays in files you own                                                       |

[LightCMS](https://lightcms.me) covers drafting, editing, publishing, and newsletter distribution without adding a separate database.

---

## What [LightCMS](https://lightcms.me) is not

- **It is not a database-first CMS.** If you need relational content, complex roles and permissions, or an app-shaped content API, a headless platform like [Payload](/comparison/lightcms-vs-payload-cms) may fit better.
- **It is not a hosting service.** [LightCMS](https://lightcms.me) manages content; your host (Cloudflare Pages, Vercel, Netlify, GitHub Pages) serves the site. See [static site hosting compared](/misc/top-static-site-hosting).
- **It is not a theme or a site generator.** It commits content into whatever static site generator you already run.

---

## Who it is for

- **Solo writers and bloggers** who want to own their content without running extra infrastructure.
- **Teams** where developers maintain the site and non-developers write and publish content.
- **Static site projects** that have outgrown editing Markdown in a code editor but still want a Git-based workflow.

If that sounds like you, you can [copy a starter template](/blog/start-with-a-lightcms-template/) to get a repository, build setup, and deployment workflow ready for your first post.

---

## Frequently asked questions

### Is [LightCMS](https://lightcms.me) free?

[LightCMS](https://lightcms.me) is open source under the Apache 2.0 license and designed to be self-hosted. You do not pay per seat, and you can host it wherever you run Node.js.

### Does [LightCMS](https://lightcms.me) work with Hugo and Astro?

Yes. Hugo and Astro read Markdown files with YAML front matter from a repository, which is what [LightCMS](https://lightcms.me) writes. The same applies to Zola, Eleventy, Jekyll, and SvelteKit.

### Where does my content live?

In your repository as `.md` files with front matter. There is no separate database and no export step.

### Do writers need to know Git?

No. Writers use the editor and publish button. Commits, branches, and pull requests happen in the background.

### How is this different from WordPress?

WordPress stores content in MySQL and renders pages with PHP at request time. [LightCMS](https://lightcms.me) writes static files that a CDN can serve. For a deeper comparison, see [static vs dynamic sites](/blog/static-vs-dynamic/) and [WordPress alternatives](/blog/wordpress-alternatives/).
