---
title: Getting Started with LightCMS
description: >-
  Learn how git based workflow works with lightcms. And how to connect a GitHub
  repository and publish by committing to Git tree.
date: '2026-09-01T16:44:00Z'
draft: false
weight: 0
keywords:
  - lightcms
  - getting started
  - wysiwyg
  - markdown
  - git-backed
tags:
  - Light
  - Cms
  - Lightcms
  - Git
  - Based
  - ssg
  - static
  - site
  - blog
isCJKLanguage: false
headless: false
---
### LightCMS is a Git based content management system for static sites. One can edit Markdown in the visual editor, and LightCMS commits the files to your Git repository.

> ### What You Get

**Posts are stored as files and in they stays in repository.** Every draft and post lives as Markdown with frontmatter schema.

Git provides the version history and makes the entire process auditable, and you have the option to roll back. You can clone the repository and keep working in any editor you like.

1. **An editor that makes you a writer again.** LightCMS uses the [TipTap](https://tiptap.dev) wysiwyg editor. Which is very closely resembles Notion.
2. **An AI copilot.** An AI copilot for modifying and enhancing your writing.
3. **Voice dictation.** Speak and let Whisper (openai compatible model) or [Wit.ai](http://Wit.ai) write the text for you.
4. **Light and dark themes.** Pick the one you find easier on the eyes. [LightCMS](https://www.lightcms.me) covers you.
5. **Newsletters without a 3rd-party service.** [Newsy](https://github.com/light-cms/newsy) turns each newly published post into an announcement on GitHub. Your readers subscribe there. You pay nothing per subscriber and debug no deliver ability. Git provides the version history and makes the entire process auditable, and you have an option to roll back. You can clone the repository and keep working in any editor you like.

---

## How It Works

1. **Sign in** with your GitHub account.
2. **Choose a repository.** Install lightcms app at the repo that holds your site. It works with all major static site generators, if it’s compatible with frontmater Lightcms covers you.
3. **Write.** The editor handles formatting and uploads images to CDN as you add them.
4. **Publish.** LightCMS commits the change on behalf of user, building and deploys are handled by CI as it always does. Lightcms uses the model bring your own hosting provider; GitHub Pages, Cloudflare Pages, Netlify, Vercel, [Surge.sh](https://surge.sh), or any S3 compatible object storage.

---

## Read Next

- [Why LightCMS?](/blog/why-this/): the design reasoning behind Git based publishing.
- [Self Hosting LightCMS](/blog/selfhost/): run your own instance.
- [Newsletter Automation](/blog/newsletter-email-automation/): how Newsy delivers posts without any 3rd party service.

### Comparisons and Explainers

- [Static Sites vs Dynamic Sites](/blog/static-vs-dynamic/): why static wins for content sites.
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/): choosing a static site generator.
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): choosing where to host.
- [Git-Backed CMS vs Traditional CMS](/blog/git-cms-vs-traditional-cms/): how the two models differ.
- [Top Git Backed CMS Platforms](/comparison/top-git-cms/): LightCMS next to Decap, TinaCMS, Keystatic, and others.
- [How to Start a Blog](/blog/how-to-start-a-blog/): the full Markdown blogging guide.
