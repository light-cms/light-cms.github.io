+++
title = "LightCMS：基于Git的静态站点发布"
description = "基于 Git 的 CMS 工作流、静态站点生成器和使用 LightCMS 的 Markdown 发布指南。"
+++

[LightCMS](https://www.lightcms.me) 是静态站点生成器的内容管理系统。它将您的内容保持为 Markdown 在 Git 中，您可以在浏览器中编辑它。 审核更改，并通过您已经使用的 CI/CD 管道发布。

## 您可以在 LightCMS 中做什么

| 能力     | 它的工作方式                                                             |
| :----- | :----------------------------------------------------------------- |
| 视觉编辑   | 在您的浏览器中写入和编辑 Markdown                                              |
| Git 发布 | 将更改另存放在您的存储库中而不是单独的 CMS 数据库中。                                      |
| 审查     | 使用分支、拉取请求和 Git 历史记录来审查更改。                                          |
| 阅读器更新  | 通过 GitHub 工作流发送更新，工具如 [Newsy](https://github.com/light-cms/newsy)。 |

## 发布工作方式

1. 使用 GitHub 登录。
2. 选择存放您网站内容的存储库。
3. 在浏览器中写或编辑一个帖子，包括您网站所需的任何前缀。
4. 将更改发布到Git。
5. 让您现有的管道，如GitHub 行动、云层页面、Vercel或Netlify，构建和部署网站。

## 从这些指南开始

- [为什么基于 Git 的发布？](/blog/why-this/) 涵盖基于 Git 的 Git 和 基于数据库的动态CMS 之间的交易交易。
- [Self hosting LightCMS](/blog/selfhost/) explains how to deploy your own instance of [lightcms](https://github.com/light-cms/lightcms).
- [Newsy 如何工作](/blog/newsletter-automation/) 描述基于 git 的工作流。

## 比较和架构

- [Git CMS vs. Traditional CMS](/blog/git-cms-vs-traditional-cms/)
- [静态对动态站点](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Cloudflare Pages vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Top Git based CMS Platforms](/comparison/top-git-cms/)
