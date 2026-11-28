---
title: "Newsy: A GitHub Powered Newsletter Platform"
description: "Newsy 是一个无服务器的 GitHub 驱动的通讯平台，订阅者和问题可以在您的资源库中生活，而不需要邮件列表、SMTP或数据库。"
tags:
  - 新闻
  - 新闻通讯
  - github
  - golang
  - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

为静态博客运行电子邮件通讯通常迫使您管理SMTP服务器，退信处理和订阅者数据库。 [Newsy](https://newsy.lightcms.me) 通过在您的 GitHub 仓库中运行您的通讯来管理您的跳板。

Utterances、Giscus和Gitalk使用GitHub Issues将评论带到没有后端的静态站点。新系统将同样的想法应用于新闻通讯：订阅者和帖子公告与你的代码并行。折衷是读者需要一个GitHub 帐户才能订阅。

## 在 GitHub 更改时运行新闻的内容

1. 您的通讯与您的站点代码在同一仓库中并存。
2. GitHub 在没有单独数据库的情况下跟踪订阅者和通知。
3. 您不管理邮件服务器，SPF/DKIM记录，或者电子邮件API配额。
4. 您可以在无服务器平台上运行 Go 二进制文件，如Vercel 或 AWS Lambda。 或在 JavaScript 和 TypeScript 运行时使用 [TinyGo](https://tinygo.org/编译到 WebAssembly。

If you prefer watching over reading, there is a walkthrough in the [video guide](/misc/newsy/video/).

## 自动托管你的机器人

按照这些步骤在本地运行 Newsys，并将其连接到您的 GitHub 仓库中。

### 1. 复制资源库

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

### 2. 设置环境

新系统使用 [mise](https://mise.jdx.dev) 来管理工具链依赖：

```bash
mise deps
```

### 3. 构建并运行

构建并运行 Go 二进制：

```bash
去Building
./newsy
```

### 4. Configure the GitHub App

1. 在您的浏览器中打开 `http://localhost:3000` 。
2. 如果您需要曝光本地服务器，请使用诸如 [ngrok](https://ngrok.com) 的隧道服务。 [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/)，或通过 [localhost.run](https://localhost.run/ 的 SSH 隧道：

   ```bash
   ssh -R 80:localhost:3000 localhost.run
   ```

3. 在您的浏览器中打开您的隧道URL(例如，`https://xyz.localhost.run`)。

   [![Newsy setup walkthrough](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

   If you run into issues, check the [video guide](/misc/newsy/video/) or switch to another tunnel provider.

4. 选择唯一的应用程序名称。
5. 将隧道网址粘贴到Webhook 网址并提交。
6. 保持你项目根生成的 `.env` 文件的安全。看起来像这样：

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> [!IMPORTANT]
> 只在选定的仓库中安装GitHub 应用程序，而不是在“所有仓库”。

您可以在多个仓库或用户之间共享单个Newsy 实例。

> [!注意]
> 默认情况下，当您添加新内容文件(`.html`, `.md`, `.mdx`)时，新建通知，而不是在您编辑现有文件时。

## 尝试使用托管网站

You can test the hosted instance at [newsy.lightcms.me](https://newsy.lightcms.me) before self-hosting.

[![新降级](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## 部署到 Vercel 或 serverless 运行时间

您可以将Newsy 仓库直接部署到 Vercel 或任何支持Go binaries的服务器主机中。如果您的目标运行时间只能运行 JavaScript 或 TypeScript, 用 [TinyGo]编译Newsy 到 WebAssembly (https://tinygo.org/)。 Vercel和类似平台上的免费层级通常足以提供个人博客。

## 订阅演示通讯

您可以通过在演示仓库上订阅来测试阅读器流: [在 GitHub 上订阅](https://github.com/Pratyay360/blogs_md/issues/1)。

## 创建您的订阅按钮

生成您账户的 [newsy.lightcms.me](https://newsy.lightcms.me/)内联订阅按钮，并在需要时使用 [Primer CSS ](https://cdnjs.com/libraries/Primer样式。

> [!提示]
> 在机器人发布其第一个通讯问题后，锁定对话，以便阅读者可以订阅而不添加主题外的评论。

![Locked GitHub issue conversation](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![新订阅工作流程](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)
