---
title: "开始使用Newsy: GitHub-Powered Newsletters"
description: "部署和自封新闻，这是一个完全由Go、WebAssembly和GitHub Issues提供动力的无服务器新闻平台。"
label: "正在开始"
tags:
  - 新闻
  - 新闻通讯
  - 现代解决办法
  - 免费通讯
  - github
  - golang
  - webassembly
isCJKLanguage: false
---

介绍 [Newsy](https://newsy.lightcms.me)，一个由 GitHub 驱动的开源新闻平台。

新药在很大程度上受Utters、Giscus和Gitalk等工具的启发，这些工具使用GitHub Issues对静态站点进行了重新映像。
Newsy采用了同样的GitHub驱动方法，并将其带到新闻通讯中：
而不是依赖外部服务或单独维持一个邮寄列表。
您的通讯与您的 GitHub 仓库中的代码一起正常生活。

Why GitHub?

1. 您的通讯正好与您的 GitHub 仓库中的代码并存。
2. 没有邮件列表管理。在 GitHub 上跟踪订阅者和更新。
3. 无昂贵的电子邮件 API。您不需要单独的电子邮件订阅服务。
4. 没有邮件发送设置。您无需管理 SMTP ，垃圾邮件过滤器或域名信誉积分。
5. 没有订阅数据库。您不需要单独的订阅和取消订阅数据库。
6. 你只关注写作。 GitHub 和Newsy 负责处理其余事务。

每个人都应该能够获得出版物。无需向SaaS平台支付高额费用，或只需与您的阅读者分享更新，就可以花费几个小时与电子邮件基础设施连线。

- 在无服务器上部署（如Vercel，AWS Lambda）进行生产。
- WebAssembly支持：使用 [TinyGo](https://tinygo.org/编译二进制到WebAssembly，并在支持JavaScript 或 TypeScript 运行时间的无服务器平台上运行。

本地设置的视频直播可在 [视频指南](/content/misc/newsy/video.md)中访问。

## 自己主持你的机器人

按照这些步骤运行 Newsy 并将其连接到您的 GitHub 仓库中。

#### 1. 克隆仓库

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

#### 2. 设置环境

我们使用 [mise](https://mise.jdx.dev) 来保持开发环境
的连贯性和易于管理：

```bash
mise deps
```

#### 3. 构建并运行

构建并运行 Go 二进制：

```bash
去Building
./newsy
```

#### 4. Configure the GitHub App

1. 在您的浏览器中打开 [http://localhost:3000](http://localhost:3000)。
2. If you need to expose your local server, use a tunneling service such as [ngrok](https://ngrok.com),
   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. 在您的浏览器中打开您的隧道URL(例如，`https://xyz.localhost.run`)：

[![新闻一个 github 问题支持的通讯平台](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)(https://youtu.be/sfjo6ZVgC9w)

_(如果您遇到了问题，请参阅[视频指南](/guides/newsy/video/)，或尝试替代隧道提供商。)_

4. 选择一个 **应用程序名称** (最好是唯一的)。
5. 将隧道URL粘贴到 **Webhook URL** 字段并提交。
6. 将在你的项目根目录中生成一个包含你的应用机密的`.env`文件。保持此文件安全。

生成的 `.env` 应该看起来像这样：

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!IMPORTANT\]
> 只在 **特定仓库**上安装GitHub 应用程序，而不是在 "所有仓库"上。

Newsy 的每个实例可以在多个仓库或用户之间共享。

> \[!Note\]
> 默认情况下，新系统只能在创建新内容文件时触发评论和问题 (`.'。 tml`、`.md`、`.mdx`等)，而不是随后的编辑。

---

## 尝试通过托管实例进行新

您可以直接使用托管版本测试新系统：[https://newsy.lightcms.me](https://newsy.lightcms.me)

[![新降级](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

---

## 在Vercel 上部署

![使用 Vercel 部署](https://vercel.com/button)

一旦部署，将你的GitHub App的 Webhook URL 从 `*.localhost.run` 更新到你的生产域：`https:///<your-app>.vercel.app`。

> \[!警告\]
> 只在您已经配置了 GitHub 应用程序并准备好它的凭据时才使用部署按钮。否则，请先按照[你自己的机器人](#self-host-your-bot)步骤创建一个。

---

## 操作成本 &amp; 资源使用

Vercel和其他许多云端供应商为无服务器工作量提供免费等级。您也可以在 JavaScript 或 TypeScript-only 运行时通过使用 [TinyGo]编译到WebAssembly 来托管Newsy (https://tinygo.org/)。

因为它是编译的 Go 二进制：
- **低内存足迹**，舒适地保持在无服务器内存和执行限制。

---

## 订阅时事通讯

订阅以查看新的行动:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

---

## 生成您的订阅按钮

在 [newsy.lightcms.me](https://newsy.lightcms.me/)为您的帐户生成嵌入式订阅按钮。

您可以使用 [Primer CSS ](https://cdnjs.com/libraries/Primer)定制和样式按钮。

> \[!提示\]
> **安全提示:** 在机器人发布其第一个新闻消息后，锁定对话以防止任何意外行为。

![锁定对话](/static/newsy-lock.png)

![newsy unlock](/static/newsy-unlock.png)

欲了解更多权限详情，请参阅[所需权限](/guides/newsy/list-of-all-permission/)文档。
