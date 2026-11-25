+++
title = "LightCMS: Git based Publishing for Static Sites"
description = "Guides on Git based CMS workflows, static site generators, and Markdown publishing with LightCMS."
+++

[LightCMS](https://www.lightcms.me) is a content management system for static site generators. It keeps your content as Markdown in Git, where you can edit it in a browser, review changes, and publish through the CI/CD pipeline you already use.

## 您可以在 LightCMS 中做什么

| 能力             | 它的工作方式                                                                                             |
| :------------- | :------------------------------------------------------------------------------------------------- |
| 视觉编辑           | Write and edit Markdown in your browser.                                                           |
| Git publishing | Save changes as commits in your repository rather than in a separate CMS database.                 |
| Review         | Use branches, pull requests, and Git history to review changes.                                    |
| 阅读器更新          | Send updates through GitHub workflows with tools like [Newsy](https://github.com/light-cms/newsy). |

## 发布工作方式

1. Sign in with GitHub.
2. Choose the repository that holds your site content.
3. Write or edit a post in the browser, including any front matter your site needs.
4. Publish the change to Git.
5. Let your existing pipeline, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, build and deploy the site.

## 从这些指南开始

- [Why Git based publishing?](/blog/why-this/) covers trade offs between Git based and database based dynamic CMSs.
- [Self hosting LightCMS](/blog/selfhost/) explains how to deploy your own instance of [lightcms](https://github.com/light-cms/lightcms).
- [Newsy 如何工作](/blog/newsletter-automation/) 描述基于 git 的工作流。

## 比较和架构

- [Git CMS vs. Traditional CMS](/blog/git-cms-vs-traditional-cms/)
- [静态对动态站点](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Cloudflare Pages vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Top Git based CMS Platforms](/comparison/top-git-cms/)
