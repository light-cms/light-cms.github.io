---
title: Getting Started with LightCMS
description: "Get started with LightCMS in minutes: sign in with GitHub, connect a repository, write in the visual editor, and publish clean Markdown to your own Git repo."
keywords:
  - getting started with lightcms
  - lightcms setup
  - connect github repository cms
  - publish markdown to git
  - visual markdown editor
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - getting-started
    - github
    - markdown
---

[LightCMS](https://www.lightcms.me) is a Git based content management system for static sites. You edit Markdown in a visual editor, and LightCMS commits the files to your repository.

## What you get

- **A writer-first editor.** LightCMS uses the [TipTap](https://tiptap.dev) WYSIWYG editor, so formatting feels like a document app instead of a code editor.
- **An AI copilot.** Draft, rewrite, and fix grammar without leaving the editor.
- **Voice dictation.** Speak a draft and transcription turns it into Markdown.
- **Light and dark themes.** Read and write in the theme you prefer.
- **Newsletters without a third-party service.** [Newsy](https://github.com/light-cms/newsy) turns each newly published post into a GitHub announcement your readers can subscribe to.

Your content stays in your repository as Markdown with front matter. Git keeps the history, so every change is reviewable, auditable, and reversible.

## How it works

1. **Sign in** with your GitHub account.
2. **Choose a repository.** Install the LightCMS app on the repo that holds your site. It works with static site generators that use front matter in Markdown files.
3. **Write.** The editor handles formatting and uploads images as you add them.
4. **Publish.** LightCMS commits the change to your repository. Your CI/CD pipeline builds and deploys to the host you choose: GitHub Pages, Cloudflare Pages, Netlify, Vercel, [Surge.sh](https://surge.sh), or any S3-compatible object storage.

## Read next

- [Why LightCMS?](/blog/why-this/): the design reasoning behind Git based publishing.
- [How to start a blog in 2026](/blog/how-to-start-a-blog/): the full Markdown and static site guide.
- [Start from a template](/blog/start-with-a-lightcms-template/): starter repositories with the build already configured.
- [Self hosting LightCMS](/blog/selfhost/): run your own instance.
- [Newsletter automation](/blog/newsletter-email-automation/): how Newsy delivers posts without a third-party email service.
