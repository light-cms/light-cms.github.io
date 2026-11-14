---
title: "LightCMS是什么？基于 Git 的静态站点CMS"
description: "LightCMS 是一个自托的 Git 基于 WYSIWYG 编辑器的 CMS。它将普通Markdown 提交给你的仓库，并允许你现有的 CI/CD 部署它。"
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
keywords:
  - 什么是 Lightcms
  - 闪光
  - 基于 Git 的cms
  - markdown cms
  - Markdown的视觉编辑器
preview: /og-image.webp
taxonomies:
  tags:
    - 闪光
    - 厘米
    - git
    - markdown
---

**LightCMS** 是一个内容管理系统，在您的 Git 仓库中将您的内容保存为普通Markdown文件。

没有数据库。没有锁定. 使用 GitHub 登录，选择一个仓库，写入和发布。 [LightCMS](https://lightcms.me) 为您提交变更。

## 问题 [LightCMS](https://lightcms.me) 解决

静态场地发电机能够快速、便宜和安全地出版产品。但在代码编辑器中写一个帖子可能会感到很困难，如果你不被用于那个工作流。

此工作流程适合开发者。它不适合每一个想写作的人。

[LightCMS](https://lightcms.me) 在不移除Git的情况下移除摩擦。开发者将内容保留在仓库中，作者将获得一个基于浏览器的编辑器来起草和发布。

---

## [LightCMS](https://lightcms.me) 如何工作

1. **使用 GitHub 登录。** LightCMS 使用 GitHub OAutth，所以您不需要一个单独的帐户系统。
2. **连接一个仓库。** 选择包含Markdown内容的任何仓库，包括通过 Astro、Hugo、Zola、Eleventy、Jekyl、SwelteKit 或 Next.js 构建的网站。
3. **可视写入。** 基于 TipTapp 的编辑器支持标题、链接、列表、表格、任务列表、数学、语法高亮代码和拖放媒体。
4. **发布。** [LightCMS](https://lightcms.me) 写入文件和前端，然后直接提交，或者打开拉取请求，如果您想要审核的话。
5. **部署。** GitHub Actions, Cloudflare页面, Vercel, 或 Netlify 可以重建和部署您的网站。作者留在浏览器中，维护者保持他们的 Git 工作流程。

步骤4创建正常提交。如果您停止使用 [LightCMS](https://lightcms.me)，您的网站仍然是构建的，因为您的内容已经存在于您的仓库中。

---

## 是什么使它不同的

有几个基于 Git的 CMS 选项 ([Decap CMS](/comparison/netlifycms), TinaCMS, Keystatic, 页面CMS和 [LightCMS](https://lightcms.me) 在几个领域采取不同的方法：

|                 | [LightCMS](https://lightcms.me)                  |
| :-------------- | :----------------------------------------------- |
| **存储**          | 您的 GitHub 仓库(Markdown + YAML 前端事项)               |
| **编辑**          | 基于 Tapp 的 WYSIWYG 编辑器包含数学(KaTeX)，代码高亮、表格、任务列表和媒体 |
| **AI**          | 使用任何 OpenAI兼容的提供商，为大纲、重写和语法内置的 copilot           |
| **语音**          | 编辑器中的由Whisper驱动的口述法                              |
| **Newsletters** | 发布Markdown 并从GitHub 发送更新信息                       |
| **托管模型**        | 自托管，Apache 2.0 许可，运行任意Node.js 主机                 |
| **锁定**          | 无：您的内容留在您自己的文件中                                  |

[LightCMS](https://lightcms.me) 涵盖起草、编辑、发布和通讯发布，而不添加一个单独的数据库。

---

## [LightCMS](https://lightcms.me) 不是

- \*\*它不是数据库第一的 CMS。 \* 如果您需要关系内容、复杂的角色和权限，或应用程序形状的内容 API， 像 [Payload](/comparison/lightcms-vs-payload-cms) 这样的无头平台可能更好地适应。
- **它不是托管服务。** [LightCMS](https://lightcms.me)管理内容；您的主机 (Cloudflare页面、Vercel、Netlify、GitHub 页面) 服务于网站。查看[静态站点主机比较](/misc/top-static-site-hosting)。
- **它不是一个主题或站点生成器。** 它将内容提交到您已经运行的静态站点生成器中。

---

## 谁是

- **单人作家和博客** 想要拥有自己的内容而不需要额外的基础设施。
- **团队** 由开发人员维护网站，非开发人员撰写和发布内容。
- **静态站点项目** 在代码编辑器中编辑Markdown 但仍然需要基于 Git 的工作流。

如果你喜欢这个声音，你可以[复制一个启动模板](/blog/start-with-a-lightcms-template/)获取一个仓库， 构建设置，部署工作流程准备好为您的第一篇帖子。

---

## 常见问题

### [LightCMS](https://lightcms.me)是否免费？

[LightCMS](https://lightcms.me) 是在 Apache 2.0 许可下开源的，并被设计为自动托管。你不支付每个座位的费用，你可以在运行Node.js的任何地方托管它。

### [LightCMS](https://lightcms.me)能够与 Hugo 和 Astro共用吗？

是。 Hugo 和 Astro 从一个仓库读取带有YAML 前缀的 Markdown 文件，这是 [LightCMS](https://lightcms.me) 写的。 Zola、Eleventy、Jekyl和SvelteKit也是如此。

### 我的内容住在哪里？

作为".md"文件存放在你的仓库里，有前缀。没有单独的数据库，也没有导出步骤。

### 作者需要知道G吗？

否。作者使用编辑器并发布按钮。提交、分支和拉取请求在后台发生。

### 这与WordPress有何不同？

WordPress 在 MySQL 中存储内容，请求时使用 PHP 打开页面。 [LightCMS](https://lightcms.me) 写入一个 CDN 可以服务的静态文件。 For a deeper comparison, see [static vs dynamic sites](/blog/static-vs-dynamic/) and [WordPress alternatives](/blog/wordpress-alternatives/).
