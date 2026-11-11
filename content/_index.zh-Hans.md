+++
title = "Getting Started with LightCMS"
description = "Learn how the Git-native workflow works with LightCMS."
+++

## [LightCMS](https://lightcms.me) is a Git-based content management system for static sites

**Your posts stay in your repository as Markdown files.** Every draft and post lives as Markdown with front matter. Git keeps the version history, so you can review changes, roll back, and keep working in any editor you like.

1. **A visual editor.** [LightCMS](https://lightcms.me) uses the [TipTap](https://tiptap.dev) editor for writing and formatting in the browser.
2. **An AI copilot.** Use it to revise and improve drafts.
3. **Voice dictation.** Speak and let Whisper or [Wit.ai](http://Wit.ai) turn your words into text.
4. **Light and dark themes.** Pick the theme that suits you.
5. **Newsletters without a third-party service.** [Newsy](https://github.com/light-cms/newsy) turns each newly published post into an announcement on GitHub, so readers can subscribe there.

---

## How it works

1. **Sign in** with your GitHub account.
2. **Choose a repository.** Install the LightCMS app on the repo that holds your site. It works with static site generators that use front matter in Markdown files.
3. **Write.** The editor handles formatting and uploads images as you add them.
4. **Publish.** [LightCMS](https://lightcms.me) commits the change to your repository. Your CI/CD pipeline builds and deploys the site to the host you choose, such as GitHub Pages, Cloudflare Pages, Netlify, Vercel, [Surge.sh](https://surge.sh), or any S3-compatible object storage.

---

## Read next

- [Why LightCMS?](/blog/why-this/): the design reasoning behind Git-based publishing.
- [Self-hosting LightCMS](/blog/selfhost/): run your own instance.
- [Newsletter automation](/blog/newsletter-email-automation/): how Newsy delivers posts without a third-party email service.

### Comparisons and explainers

- [Static sites vs dynamic sites](/blog/static-vs-dynamic/): why static sites work well for content.
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/): choosing a static site generator.
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): choosing where to host.
- [Git-based CMS vs traditional CMS](/blog/git-cms-vs-traditional-cms/): how the two models differ.
- [Top Git-backed CMS platforms](/comparison/top-git-cms/): LightCMS compared with Decap, TinaCMS, Keystatic, and others.
- [How to start a blog](/blog/how-to-start-a-blog/): a guide to blogging with Markdown and a static site.
