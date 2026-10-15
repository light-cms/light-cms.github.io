---
title: Getting Started with LightCMS
description: Learn how LightCMS pairs a modern WYSIWYG editor with Git-backed storage so publishing to static sites is simple.
serial: 1
date: 2026-09-01T16:44:00Z
draft: false
keywords:
  - lightcms
  - getting started
  - wysiwyg
  - markdown
  - git-backed
preview: /og-image.png
taxonomies:
  tags:
    - lightcms
    - cms
    - git
    - ssg
---

**LightCMS** is a lightweight, Git-backed content workspace built for focused writing on the modern web. It pairs the power of static site generators with a distraction-free visual WYSIWYG editor.

---

## Core Pillars

LightCMS is built on one principle: **Nothing should stand between you and your craft.**

### 1. Git-Backed Storage (Zero Lock-In)

Your content belongs to you. Every draft, post, and revision is stored as Markdown and front matter files in your own GitHub repository. No proprietary database exports, no vendor lock-in, and full version history through Git branches, commits, and pull requests.

### 2. Modern WYSIWYG and Markdown

Built on [TipTap](https://tiptap.dev), the editor gives you real-time visual formatting while generating clean, semantic Markdown and YAML front matter. It supports rich typography, math equations (KaTeX), syntax-highlighted code blocks, tables, task lists, and drag-and-drop media.

### 3. Integrated AI Copilot

An integrated AI writing companion speeds up drafting and editing. Ask it to outline articles, rephrase paragraphs, expand ideas, or fix grammar. It works with any OpenAI-compatible provider (OpenAI, OpenRouter, Groq, NVIDIA NIM).

### 4. Voice-to-Text Transcription

Record your thoughts in the editor and let Whisper (powered by Groq) transcribe them into structured text in seconds.

### 5. First-Class Themes

Curated light and dark modes that are easy on the eyes during late-night sessions or bright daytime writing.

### 6. Automated Newsletter Dispatch

Built-in support for [Newsy](https://github.com/light-cms/newsy) turns newly published Markdown files into email newsletters sent straight to your audience, with no monthly third-party subscriptions.

---

## How LightCMS Works

The LightCMS workflow hides technical complexity while preserving developer control:

1. **Sign In**: Log into your LightCMS instance with your GitHub account.
2. **Select Repository**: Pick the GitHub repository containing your static blog or website (Astro, Hugo, SvelteKit, Jekyll, Next.js, etc.).
3. **Write & Format**: Create new articles or edit existing posts with real-time visual feedback, asset uploads, and front matter management.
4. **Publish**: LightCMS creates a commit or pull request to your chosen branch.
5. **Automated Deployment**: Your existing CI/CD pipeline (e.g. GitHub Actions) builds and deploys your static site to Vercel, Cloudflare Pages, Netlify, or your host.

---

## Next Steps

Follow these guides to tailor LightCMS to your stack:

- [Configuring Your Repository](/blog/configuring-your-repository-cicd/): Connect your SSG and set up automated deployments.
- [Why LightCMS?](/blog/why-this/): Read the design philosophy behind Git-backed publishing.
- [Self-Hosting LightCMS](/blog/selfhost/): Deploy your own private instance of LightCMS.
- [Newsletter Automation](/blog/newsletter-email-automation/): Distribute posts to subscribers automatically.

### Comparisons and Deep Dives

- [Static Sites vs Dynamic Sites](/blog/static-vs-dynamic/): Why the static architecture wins for content sites.
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/): Picking a static site generator.
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): Choosing where to host.
- [Git-Backed CMS vs Traditional CMS](/blog/git-cms-vs-traditional-cms/): Why Git-backed editing beats the database route.
- [Top Git-Backed CMS Platforms](/comparison/top-git-cms/): How LightCMS compares to Decap, TinaCMS, Keystatic, and more.
- [How to Start a Blog](/blog/how-to-start-a-blog/): The complete Markdown blogging guide.
