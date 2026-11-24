---
title: "Getting Started with LightCMS"
description: "Connect a GitHub repository to LightCMS, edit Markdown content in a browser, and publish through your existing Git-based deployment workflow."
keywords:
 - getting started with lightcms
 - lightcms setup
 - connect github repository cms
 - publish markdown to git
 - visual markdown editor
slug: getting-started
tags:
 - lightcms
 - getting-started
 - github
 - markdown
 - git
date: "2026-11-22T11:47:03.315Z"
---

LightCMS is a Git based CMS for static sites. It lets you edit Markdown content in a browser and commit changes to a GitHub repository, so your existing static site build and deployment pipeline can publish the site.

## Before you start

You need:

- A GitHub repository containing a static site that uses Markdown content.
- A deployment pipeline such as GitHub Actions, Cloudflare Pages, Netlify, or Vercel.
- Repository access so LightCMS can read and commit content files.

## Setup steps

1. Sign in: Authenticate with the Git provider supported by LightCMS.
2. Install/grant access: Authorize LightCMS to access the repository that contains your site content.
3. Select content paths: Identify where posts, pages, and assets live in the repository.
4. Edit content: Create or update a post, including front matter fields required by your static site generator.
5. Publish: Commit the change and confirm your CI/CD pipeline builds and deploys the site.

## What to verify after setup

| Check | Expected result |
| :--- | :--- |
| Content path | LightCMS reads and writes the correct Markdown files |
| Front matter | Required fields match your SSG theme/templates |
| Assets | Images upload to the expected static/media directory |
| Deploy pipeline | A commit triggers a successful site build |
| Draft behavior | Draft posts behave as expected in your SSG |

## Next steps

- [Why LightCMS Exists](/blog/why-this/)
- [Start with a LightCMS Template](/blog/start-with-a-lightcms-template/)
- [Self-Hosting LightCMS](/blog/selfhost/)
- [Configuring Your Repository and CI/CD](/blog/configuring-your-repository-cicd/)
