---
title: "What Is LightCMS? The Git-Backed CMS for Static Sites"
description: "LightCMS is a self-hosted, Git-backed CMS with a visual WYSIWYG editor. It commits plain Markdown to your repository and lets your existing CI/CD deploy it."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
keywords:
  - what is lightcms
  - lightcms
  - git-backed cms
  - markdown cms
  - visual editor for markdown
preview: /og-image.png
taxonomies:
  tags:
    - lightcms
    - cms
    - git
    - markdown
---

**LightCMS** is a content management system that keeps your content where a developer wants it (plain Markdown files in your own GitHub repository) while giving writers the thing developers rarely provide: a visual editor to work in.

No database. No proprietary export. No vendor lock-in. Sign in with GitHub, pick a repository, write, hit publish, and LightCMS commits the Markdown and front matter for you. Your existing pipeline does the rest.

---

## The Problem LightCMS Solves

Static site generators made publishing fast, cheap, and secure. They also moved the hard part onto the author: to publish a post you need to know what front matter is, how the repository is laid out, which branch the build watches, and how to resolve a merge conflict at midnight.

That arrangement works for the person who built the site. It does not work for:

- The **co-founder** who wants to publish an announcement.
- The **writer** you hired who has never opened a terminal.
- **You**, six months in, at 11pm, wanting to fix a paragraph without opening an IDE and pulling branches.

LightCMS removes that friction without removing Git. The complexity stays where developers want it (in the repository and the pipeline) and the writer gets a distraction-free page that looks and feels like a modern editor.

---

## How LightCMS Works

1. **Sign in with GitHub.** OAuth, no separate account system to maintain.
2. **Connect a repository.** Choose any repo containing Markdown content: Astro, Hugo, Zola, Eleventy, Jekyll, SvelteKit, Next.js, or a plain folder of `.md` files.
3. **Write visually.** A TipTap-powered WYSIWYG editor with headings, links, lists, tables, task lists, math, syntax-highlighted code, and drag-and-drop media. What you see is what the Markdown will be.
4. **Publish.** LightCMS writes the file and front matter and commits it, directly or as a pull request if you want review.
5. **Deploy.** GitHub Actions, Cloudflare Pages, Vercel, or Netlify rebuilds and ships. You never leave the browser as a writer; you never leave Git as a maintainer.

The output of step 4 is a normal commit. If you delete LightCMS tomorrow, your site still builds, because nothing about your content lived outside the repository.

---

## What Makes It Different

There are several capable Git-backed CMS options ([Decap CMS](/comparison/netlifycms), TinaCMS, Keystatic, Pages CMS), and LightCMS competes with all of them. The differences are deliberate:

| | LightCMS |
| :--- | :--- |
| **Storage** | Your GitHub repository (Markdown + YAML front matter) |
| **Editor** | Full TipTap WYSIWYG: math (KaTeX), code highlighting, tables, task lists, media |
| **AI** | Built-in copilot for outlines, rewrites, and grammar, on any OpenAI-compatible provider |
| **Voice** | Whisper-powered dictation straight into the draft |
| **Newsletters** | Publish Markdown → send via Newsy, running on GitHub instead of a newsletter platform |
| **Hosting model** | Self-hosted, Apache 2.0 licensed, runs on any Node.js host |
| **Lock-in** | None: the content is files you already own |

Most competitors do one of these well. LightCMS bundles the whole writing-to-distribution path: draft, edit, publish, and send, without ever introducing a database.

---

## What LightCMS Is Not

Being honest about the boundaries saves everyone time:

- **It is not a database-first CMS.** If you need relational content, roles and permissions for hundreds of editors, or an app-shaped content API, a headless platform like [Payload](/comparison/lightcms-vs-payload-cms) is the better tool.
- **It is not a hosting service.** LightCMS manages content; your host (Cloudflare Pages, Vercel, Netlify, GitHub Pages) serves it. See [static site hosting compared](/misc/top-static-site-hosting).
- **It is not a theme or a generator.** It commits content into whatever SSG you already run.

---

## Who It Is For

- **Solo writers and bloggers** who want ownership without DevOps.
- **Developer-adjacent teams** where engineers own the pipeline and non-engineers own the words.
- **Static site projects** that have outgrown editing Markdown in a code editor but have not outgrown Git.

If that sounds like you, the fastest path is to [copy a starter template](/blog/start-with-a-lightcms-template/): a repository with the build, the content folder, and the deployment already wired for your first post.

---

## Frequently Asked Questions

### Is LightCMS free?

LightCMS is open source under the Apache 2.0 license and is designed to be self-hosted, so there is no per-seat subscription and no content hostage situation. You pay for whatever host you already use.

### Does LightCMS work with Hugo and Astro?

Yes. Both read Markdown files with YAML front matter from your repository, which is what LightCMS writes. The same is true of Zola, Eleventy, Jekyll, and SvelteKit.

### Where does my content live?

In your repository, as `.md` files with front matter. No separate database, no export step, no lock-in.

### Do my writers need to know Git?

No. They see an editor and a publish button. Commits, branches, and pull requests happen underneath.

### How is this different from WordPress?

WordPress stores content in MySQL and renders it with PHP at request time. LightCMS writes static files that a CDN serves: faster, cheaper, and harder to break. The trade-offs are covered in [static vs dynamic sites](/blog/static-vs-dynamic/) and [WordPress alternatives](/blog/wordpress-alternatives/).
