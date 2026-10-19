---
title: Getting Started with LightCMS
description: >-
  Connect a GitHub repository, write Markdown in a visual editor, and publish
  by committing to Git.
date: '2026-09-01T16:44:00Z'
draft: false
weight: 0
keywords:
  - lightcms
  - getting started
  - wysiwyg
  - markdown
  - git-backed
isCJKLanguage: false
headless: false
---
**LightCMS** is a Git-backed writing workspace for static sites. You edit Markdown in a visual editor, and LightCMS commits the files to your own GitHub repository.

---

## What You Get

**Your files, in your repository.** Every draft and post lives as Markdown with YAML front matter. Git provides the history, the diffs, and the rollback. You can clone the repository and keep working in any editor you like.

**A visual editor that writes clean Markdown.** The editor runs on [TipTap](https://tiptap.dev). You format text visually and get semantic Markdown and YAML front matter as output. Math equations (KaTeX), syntax-highlighted code blocks, tables, task lists, and drag-and-drop images all work.

**An AI copilot.** Ask it to outline a post, rephrase a paragraph, expand an idea, or fix grammar. It talks to any OpenAI-compatible provider, including OpenAI, OpenRouter, Groq, and NVIDIA NIM.

**Voice dictation.** Speak and let Whisper (through Groq) or [Wit.ai](https://wit.ai) write the text for you.

**Light and dark themes.** Pick the one you find easier on the eyes.

**Newsletters without a newsletter service.** [Newsy](https://github.com/light-cms/newsy) turns each newly published post into an announcement on GitHub. Your readers subscribe there. You pay nothing per subscriber and debug no deliverability.

---

## How It Works

1. **Sign in** with your GitHub account.
2. **Choose a repository.** Point LightCMS at the repo that holds your site. It works with Astro, Hugo, SvelteKit, Jekyll, Next.js, and any generator that reads Markdown files.
3. **Write.** The editor handles formatting and uploads images to your CDN as you add them.
4. **Publish.** LightCMS commits the change. Your host builds and deploys as it always does.

You keep your hosting: GitHub Pages, Cloudflare Pages, Netlify, Vercel, [Surge.sh](https://surge.sh), or S3-compatible storage.

---

## Read Next

- [Why LightCMS?](/blog/why-this/): the design reasoning behind Git-backed publishing.
- [Self-Hosting LightCMS](/blog/selfhost/): run your own instance.
- [Newsletter Automation](/blog/newsletter-email-automation/): how Newsy delivers posts without an email vendor.

### Comparisons and Explainers

- [Static Sites vs Dynamic Sites](/blog/static-vs-dynamic/): why static wins for content sites.
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/): choosing a static site generator.
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): choosing where to host.
- [Git-Backed CMS vs Traditional CMS](/blog/git-cms-vs-traditional-cms/): how the two models differ.
- [Top Git-Backed CMS Platforms](/comparison/top-git-cms/): LightCMS next to Decap, TinaCMS, Keystatic, and others.
- [How to Start a Blog](/blog/how-to-start-a-blog/): the full Markdown blogging guide.
