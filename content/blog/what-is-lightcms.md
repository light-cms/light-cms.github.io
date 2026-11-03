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

**LightCMS** is a content management system that keeps your content where your site is lives and stores them as plain Markdown files in your repo.

No database. No lock ins.
just,
 Sign in with GitHub, pick a repository, write, hit publish, and [LightCMS](https://lightcms.me)will be handling the rest.

## The Problem [LightCMS](https://lightcms.me)Solves

Static site generators made publishing fast, cheap, and secure. But to write a post opening a code editor is not that friendly towards some one who isn't techy.  

That works for the person who is a developer. Not for some one who is not used to with code editors,

[LightCMS](https://lightcms.me)removes that friction without removing Git. The content stays where developers want it the repository  and the writer gets a distraction free page that looks and feels like a modern editor.

---

## How [LightCMS](https://lightcms.me)Works

1. **Sign in with GitHub.** OAuth, no separate account system to maintain.
2. **Connect a repository.** Choose any repo containing Markdown content: Astro, Hugo, Zola, Eleventy, Jekyll, SvelteKit, Next.js, or a plain folder of `.md` files.
3. **Write visually.** A TipTap-powered WYSIWYG editor with headings, links, lists, tables, task lists, math, syntax-highlighted code, and drag-and-drop media. What you see is what the Markdown will be.
4. **Publish.** [LightCMS](https://lightcms.me)writes the file and front matter and commits it, directly or as a pull request if you want review.
5. **Deploy.** GitHub Actions, Cloudflare Pages, Vercel, or Netlify rebuilds and ships. You never leave the browser as a writer; you never leave Git as a maintainer.

The output of step 4 is a normal commit. If you delete [LightCMS](https://lightcms.me)tomorrow, your site still builds, because nothing about your content lived outside the repository.

---

## What Makes It Different

There are several capable Git based CMS options ([Decap CMS](/comparison/netlifycms), TinaCMS, Keystatic, Pages CMS), and [LightCMS](https://lightcms.me)competes with all of them. The differences are deliberate:

| | [LightCMS](https://lightcms.me)|
| :--- | :--- |
| **Storage** | Your GitHub repository (Markdown + YAML front matter) |
| **Editor** | Full TipTap WYSIWYG: math (KaTeX), code highlighting, tables, task lists, media |
| **AI** | built in copilot for outlines, rewrites, and grammar, on any OpenAI-compatible provider |
| **Voice** | Whisper-powered dictation straight into the draft |
| **Newsletters** | Publish Markdown → send via Newsy, running on GitHub instead of a newsletter platform |
| **Hosting model** | Self-hosted, Apache 2.0 licensed, runs on any Node.js host |
| **Lock-in** | None: the content is files you already own |

Most competitors do one of these well. [LightCMS](https://lightcms.me)bundles the whole writing-to-distribution path: draft, edit, publish, and send, without ever introducing a database.

---

## What [LightCMS](https://lightcms.me)Is Not

Being honest about the boundaries saves everyone time:

- **It is not a database-first CMS.** If you need relational content, roles and permissions for hundreds of editors, or an app-shaped content API, a headless platform like [Payload](/comparison/lightcms-vs-payload-cms) is the better tool.
- **It is not a hosting service.** [LightCMS](https://lightcms.me)manages content; your host (Cloudflare Pages, Vercel, Netlify, GitHub Pages) serves it. See [static site hosting compared](/misc/top-static-site-hosting).
- **It is not a theme or a generator.** It commits content into whatever SSG you already run.

---

## Who It Is For

- **Solo writers and bloggers** who want ownership without DevOps.
- **Developer-adjacent teams** where engineers own the pipeline and non-engineers own the words.
- **Static site projects** that have outgrown editing Markdown in a code editor but have not outgrown Git.

If that sounds like you, the fastest path is to [copy a starter template](/blog/start-with-a-lightcms-template/): a repository with the build, the content folder, and the deployment already wired for your first post.

---

## Frequently Asked Questions

### Is [LightCMS](https://lightcms.me)free?

[LightCMS](https://lightcms.me)is open source under the Apache 2.0 license and is designed to be self-hosted, so there is no per-seat subscription and no content hostage situation. You pay for whatever host you already use.

### Does [LightCMS](https://lightcms.me)work with Hugo and Astro?

Yes. Both read Markdown files with YAML front matter from your repository, which is what [LightCMS](https://lightcms.me)writes. The same is true of Zola, Eleventy, Jekyll, and SvelteKit.

### Where does my content live?

In your repository, as `.md` files with front matter. No separate database, no export step, no lock-in.

### Do my writers need to know Git?

No. They see an editor and a publish button. Commits, branches, and pull requests happen underneath.

### How is this different from WordPress?

WordPress stores content in MySQL and renders it with PHP at request time. [LightCMS](https://lightcms.me)writes static files that a CDN serves: faster, cheaper, and harder to break. The trade-offs are covered in [static vs dynamic sites](/blog/static-vs-dynamic/) and [WordPress alternatives](/blog/wordpress-alternatives/).
