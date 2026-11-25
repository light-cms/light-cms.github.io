---
title: Getting Started with LightCMS
description: Connect a GitHub repository to LightCMS, edit Markdown content in a browser, and publish through your existing Git based deployment workflow.
slug: getting-started-with-lightcms
date: 2026-11-22T11:47:03.315Z
tags:
  - lightcms
  - git
  - github
  - static-sites
draft: false
---

[LightCMS](https://lightcms.me) is a CMS for static sites. Edit Markdown in your browser and commit it to GitHub. Your existing build and deployment pipeline takes it from there.

## Before you start

You need:

- A GitHub repository containing a static site that uses Markdown content.
- A deployment pipeline such as GitHub Actions, Cloudflare Pages, Netlify, or Vercel.
- Repository access so LightCMS can read and commit content files.

## Setup steps

1. Sign in with a provider LightCMS supports.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choose where your posts, pages, and assets live.
4. Create or edit a post, including the front matter your site generator needs.
5. Publish the change, then check that your CI/CD pipeline builds and deploys the site.

## What to verify after setup

| Check           | Expected result                                      |
| :-------------- | :--------------------------------------------------- |
| Content path    | LightCMS reads and writes the correct Markdown files |
| Front matter    | Required fields match your SSG theme/templates       |
| Assets          | Images upload to the expected static/media directory |
| Deploy pipeline | A commit triggers a successful site build            |
| Draft behavior  | Draft posts behave as expected in your SSG           |

## Next steps

- [Why LightCMS Exists](/blog/why-this/)
- [Start with a LightCMS Template](/blog/start-with-a-lightcms-template/)
- [Self Hosting LightCMS](/blog/selfhost/)
- [Configuring Your Repository and CI/CD](/blog/configuring-your-repository-cicd/)
