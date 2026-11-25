---
title: "LightCMS是什么？"
description: "LightCMS is a Git based CMS with a visual editor. 它将普通Markdown 提交给您的仓库，并通过您现有的 CI/CD 触发了部署。"
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - 闪光
  - 厘米
  - git
  - markdown
---

[LightCMS](https://lightcms.me) is a content management system for publishing Markdown from Git. You write in a visual editor in your browser, and [LightCMS](https://lightcms.me) commits the Markdown file and its front matter to your repository. Your existing CI/CD pipeline can then build and deploy the site.

## 问题地址 LightCMS

Static site generators can make it easy to build and deploy a site. Writing for one is less convenient if you have to edit raw Markdown, format front matter, or sort out Git conflicts by hand.

[LightCMS](https://lightcms.me) gives authors a visual editor, while keeping the content in Git. That suits teams that want Git ownership and review. It is a different choice from a database backed CMS with real time collaboration.

## LightCMS如何发布内容

1. Sign in with GitHub.
2. Connect a repository with Markdown content. It can be a site built with Astro, Hugo, Zola, 11ty, Jekyll, or Next.js.
3. Write in the editor, which supports headings, links, tables, checklists, code blocks, and media.
4. Publish the change. [LightCMS](https://lightcms.me) formats the Markdown, updates front matter, and either commits to your branch or opens a pull request for review.
5. Your existing CI/CD workflow, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, can then build and deploy the site.

由于发布创建标准的 Git 提交，您的站点仍然可以从仓库构建，如果您停止使用 LightCMS。

## 技术简介

| 属性    | LightCMS实现                                                |
| :---- | :-------------------------------------------------------- |
| 存储    | 使用 Markdown 文件和 front 的 Git 仓库                            |
| 编辑器界面 | Visual editor in your browser                             |
| AI 协助 | 编辑内书写帮助                                                   |
| 语音翻译  | 编辑器内语音听音                                                  |
| 订阅者更新 | 通过 [Newsy]GitHub 集成公告(https://github.com/light-cms/newsy) |
| 许可和主机 | 开源和自置主机                                                   |
| 可携带性  | 内容保留在您控制的仓库文件中                                            |

## 当LightCMS不合适时

LightCMS fits sites that keep their content in Git and already use CI/CD to publish. Consider a different tool if:

- You need relational queries, user permissions, or a content API at runtime. A database backed headless CMS such as [Payload](/comparison/lightcms-vs-payload-cms) or Strapi may fit better.
- You want one service to host the public site. LightCMS does not host it. Cloudflare Pages, Vercel, Netlify, or S3 can serve the built site.
- You need a tool to render your HTML templates. LightCMS does not do that; your static site generator, such as Hugo, Astro, or Zola, handles the build.

If you need Git based content management and a visual editor, the next step is to connect a test repository and confirm that LightCMS writes front matter and Markdown in the format your static site generator expects.
