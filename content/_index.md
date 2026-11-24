+++
title = "LightCMS: Git-Backed Publishing for Static Sites"
description = "Guides on Git-based CMS workflows, static site generators, and Markdown publishing with LightCMS."
+++

[LightCMS](https://www.lightcms.me) is a Git based content management system for static site generators. It stores content as Markdown files in your Git repository so one can edit in a browser, review changes with version controlled git, and publish websites through your existing CI/CD pipeline.

## What you can do with LightCMS

| Capability            | How it works in a Git based workflow                                                                                  |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Visual editing        | Draft and edit Markdown in a browser based editor.                                                                    |
| Git-backed publishing | Save content as commits in your repository instead of storing posts in a separate CMS database.                       |
| Git workflow          | Use branches, pull requests, and history as part of your normal review process.                                       |
| Reader updates        | Send update notifications through GitHub based workflows with tools like [Newsy](https://github.com/light-cms/newsy). |

## How publishing works

1. Connect GitHub: Authenticate with your GitHub account.
2. Select a repository: Choose the repository that contains your static site content.
3. Edit content: Draft posts and update front matter in the browser.
4. Publish to Git: LightCMS commits Markdown changes to your repository.
5. Deploy with CI/CD: Your existing build pipeline, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, builds and deploys the site.

## Start with these guides

- [Why Git-based publishing?](/blog/why-this/) covers trade offs between Git based and database based dynamic CMSs.
- [Self-hosting LightCMS](/blog/selfhost/) explains how to deploy your own instance of [lightcms](https://github.com/light-cms/lightcms).
- [How Newsy works](/blog/newsletter-automation/) describes git based workflows.

## Comparisons and architecture

- [Git CMS vs. Traditional CMS](/blog/git-cms-vs-traditional-cms/)
- [Static vs. Dynamic Sites](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Cloudflare Pages vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Top Git-Backed CMS Platforms](/comparison/top-git-cms/)
