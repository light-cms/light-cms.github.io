---
title: "Newsy A GitHub Powered Newsletter Platform"
description: "Newsy is a serverless, GitHub-powered newsletter platform where subscribers and issues live in your repository, without mailing lists, SMTP, or a database."
keywords:
  - 新闻
  - github newsletter
  - serverless newsletter
  - newsletter platform
  - github issues newsletter

taxonomies:
  tags:
    - 新闻
    - 新闻通讯
    - github
    - golang
    - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

介绍 [Newsy](https://newsy.lightcms.me)，一个由 GitHub 驱动的开源新闻平台。

Newsy follows tools like Utterances, Giscus, and Gitalk, which changed commenting for static sites with GitHub Issues.
Newsy uses the same GitHub approach for newsletters:
instead of using outside services or running a separate mailing list,
your newsletter lives next to your code in your GitHub repository.

Why GitHub?

1. 您的通讯正好与您的 GitHub 仓库中的代码并存。
2. No mailing list work. GitHub tracks subscribers and updates.
3. No costly email APIs. You do not need a separate email signup service.
4. No email send setup. You do not need to manage SMTP, spam filters, or domain trust.
5. No signup database. You do not need a separate database for signups and unsubscribes.
6. 你只关注写作。 GitHub 和Newsy 负责处理其余事务。

Publishing should be easy for everyone. There is no need to pay high SaaS fees or spend hours setting up email systems just to share updates with your readers.

- Runs on serverless platforms (e.g., Vercel, AWS Lambda) for live use.
- WebAssembly支持：使用 [TinyGo](https://tinygo.org/编译二进制到WebAssembly，并在支持JavaScript 或 TypeScript 运行时间的无服务器平台上运行。

A video walkthrough of the local setup is available in the [video guide](/misc/newsy/video/).

## 自己主持你的机器人

按照这些步骤运行 Newsy 并将其连接到您的 GitHub 仓库中。

### 1. 克隆仓库

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

### 2. 设置环境

We use [mise](https://mise.jdx.dev) to keep the dev setup
steady and easy to manage:

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

1. 在您的浏览器中打开 [http://localhost:3000](http://localhost:3000)。
2. If you need to expose your local server, use a tunnel service such as [ngrok](https://ngrok.com),
   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

1. 在您的浏览器中打开您的隧道URL(例如，`https://xyz.localhost.run`)：

[![新闻一个 github 问题支持的通讯平台](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)(https://youtu.be/sfjo6ZVgC9w)

_(If you run into issues, refer to the [video guide](/misc/newsy/video/) or try another tunnel provider.)_

1. Choose an **App name** (use a unique one).
2. 将隧道URL粘贴到 **Webhook URL** 字段并提交。
3. A `.env` file with your app's secrets will be created in your project root. 保持此文件安全。

生成的 `.env` 应该看起来像这样：

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!IMPORTANT\]
> Install the GitHub App on **selected repositories only**, rather than on "All repositories".

You can share each Newsy copy across several repositories or users.

> \[!NOTE\]
> By default, Newsy adds comments and issues when you add new content files (`.html`, `.md`, `.mdx`, etc.), not when you edit them later.

## Try Newsy with the Hosted Site

You can test Newsy with the hosted site: [https://newsy.lightcms.me](https://newsy.lightcms.me)

[![新降级](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## 在Vercel 上部署

![使用 Vercel 部署](https://vercel.com/button)

Once deployed, change your GitHub App's Webhook URL from `*.localhost.run` to your live domain: `https://<your-app>.vercel.app`.

> \[!WARNING\]
> Only use the deploy button if you have already set up a GitHub App and have its keys ready. 否则，请先按照[你自己的机器人](#self-host-your-bot)步骤创建一个。

## Operating Costs &amp; Usage

Vercel和其他许多云端供应商为无服务器工作量提供免费等级。 You can also host Newsy on JavaScript or TypeScript runtimes by building the Go binary as WebAssembly with [TinyGo](https://tinygo.org/).

As a Go binary:

- **Low memory use**, staying well within serverless memory and run limits.

## 订阅时事通讯

订阅以查看新的行动:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

## Create Your Subscription Button

Create an inline subscription button for your account at [newsy.lightcms.me](https://newsy.lightcms.me/).

You can change and style the button using [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Security tip:** After the bot posts its first newsletter message, lock the chat to stop unwanted actions.

![locked convo](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![newsy bypassing](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)

For more access details, refer to the [required permissions](/misc/newsy/list-of-all-permission/) guide.
