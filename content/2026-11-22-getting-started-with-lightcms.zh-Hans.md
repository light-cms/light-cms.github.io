---
title: 开始使用 LightCMS
description: "在几分钟内从 LightCMS 开始：使用 GitHub 登录，连接一个仓库， 在视觉编辑器中写入，然后将清理Markdown 发布到您自己的Git仓库中。"
keywords:
  - 开始使用 lightcms
  - lightcms设置
  - 连接 github 版本库 cms
  - 发布Markdown 到 git
  - 视觉标记编辑器
preview: /og-image.webp
taxonomies:
  tags:
    - 闪光
    - 正在开始
    - github
    - markdown
---

[LightCMS](https://www.lightcms.me) 是一个基于Git的静态站点内容管理系统。您在一个视觉编辑器中编辑 Markdown 和 LightCMS 将文件提交到您的资源库。

## 你得到了什么

- **一个作者第一编辑器。** LightCMS 使用 [Tiptap](https://tiptap.dev) WYSIWYG 编辑器，因此格式化感觉像一个文档应用而不是代码编辑器。
- **是一个 AI 副本。** 起草、重写和修复语法而不留下编辑器。
- **Voice dictation.** Speak a draft and transcription turns it into Markdown.
- **Light and dark themes.** Read and write in the theme you prefer.
- **Newsletters without a third-party service.** [Newsy](https://github.com/light-cms/newsy) turns each newly published post into a GitHub announcement your readers can subscribe to.

您的内容以Markdown 的身份停留在您的仓库中，头部事项。它保存着历史，因此每一种变化都是可以审查、可审计和可逆转的。

## 它的工作方式

1. **使用您的 GitHub 帐户登录**
2. **Choose a repository.** Install the LightCMS app on the repo that holds your site. 它适用于在Markdown文件中使用前缀的静态站点发电机。
3. **Write.** The editor handles formatting and uploads images as you add them.
4. **出版。** LightCMS 将更改提交给您的资源库。您的 CI/CD 管道构建并部署到您选择的主机：GitHub 页面、Cloudflare页面、Netlify、Vercel、 [浪费。 h](https://surge.sh)或任意S3兼容的对象存储。

## 阅读下一页

- [为什么是 LightCMS?](/blog/why-this/): 基于 Git 发布的设计推理。
- [如何在2026](/blog/how-to-start-a-blog/)开始一个博客：完整的Markdown和静态网站指南。
- [从模板](/blog/start-with-a-lightcms-template/)开始：已配置构建的启动仓库.
- [自托管LightCMS](/blog/selfhost/): 运行您自己的实例。
- [通讯自动化](/blog/newsletter-email-automation/): 新系统如何在没有第三方电子邮件服务的情况下发送帖子。
