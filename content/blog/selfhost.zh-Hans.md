---
title: 自我托管的 LightCMS
description: 自我主机 LightCMS 指南。
serial: 4
section: 开始
badge: 部署
date: 2026-09-18T01:45:00Z
draft: false
tags:
  - selfhost
  - 闪光
  - postgresql
  - 部署
keywords:
  - 闪光
  - probot
  - 自主机
  - github_app
  - 脊椎骨
  - sveltekit
preview: /og-image.png
canonical: https://www.lightcms.me/docs
---

想要 [LightCMS](https://lightcms.me)完全在您的控制下吗？ [LightCMS](https://lightcms.me) 是一个 [SvelteKit](https://svelte.dev)应用程序，因此它可以在任何地方部署。 得到一个邮政数据库和一个GitHub App(octokit)的支持。您的内容永远不会离开您自己的 GitHub 仓库。

本指南使您走遍运行自己实例所需的一切：创建 GitHub 应用程序，提供
PostgreSQL，配置环境变量和部署。

## 区块如何一起适合的

| 组件            | 目的                           | 必填          |
| ------------- | ---------------------------- | ----------- |
| PostgreSQL    | 存储用户、会话、密钥和 GitHub 安装        | 否           |
| GitHub App    | 读取和写入你的仓库中的内容，并使用GitHub 签署用户 | 否           |
| SMTP 提供商      | 发送魔法链接登录邮件                   | 是的，用于魔法链接登录 |
| OpenAI兼容的 API | 授权 AI 复制器                    | 可选的         |
| 语音到文本 API     | 授权语音听音                       | 可选的         |
| 图像 CDN        | 上传到编辑器中的主机图像                 | 可选的         |
| Posthog       | 产品分析和 AI 可观测性                | 仅在开发中需要     |

## 必备条件

- **[mise](https://mise.jdx.dev)**：安装和管理任务依赖关系。我将假定你已经安装了。
- **PostgreSQL**：接受TLS连接的数据库。云端提供商如 [Neon](https://neon.tech),
  [Supabase](https://supabase.com) 或 [Nile](https://thenile.dev) 运作良好。请参阅
  [awesome-free-postgres](https://github.com/alexeyfv/awesome-free-postgres) 免费选项。
- **GitHub 帐户**: 需要注册 GitHub 应用程序。
- **SMTP provider** (for magic links): If you have a domain then [Resend](https://resend.com) will be having an awesome experience,
  if not then [Zoho Mail](https://www.zoho.com/mail) remember to create a app password.

> **TLS 是强制性的。** 应用程序连接到 PostgreSQL 与 \`ssl : "require"。没有启用TLS的本地PostgreSQL 实例
> 将被拒绝，因此使用托管数据库或在您自己的服务器上配置TL。

## 1. 解锁仓库并安装依赖项

复制仓库并安装依赖：

```bash
cd lightcms
mise trust
mise deps
mise 运行安装
```

安装工具链和项目依赖：

```bash
mise support
mise deps
mise 运行安装
```

## 2. Create the GitHub App

[LightCMS](https://lightcms.me) 使用一个 GitHub 应用来处理两件事：使用 GitHub (OAuth) 签名用户，通过安装
来代表您行事。您可以使用Probot 安装向导或手工创建它。

### 备选案文A：Probot 安装向导

启动机器人：

```bash
mise 运行机器人
```

在`.env`中没有凭据，Probot在`http://localhost:3000`上启动一个设置服务器：

1. 打开 `http://localhost:3000` 并点击 **注册 GitHub 应用程序**。
2. 选择您的个人帐户或组织。
3. 确认. 无人机创建应用并将其凭据写入你的 `.env` 文件。

向导将应用的 webhook URL 设置为 Smee 频道 (或`http://localhost:3000/`)，不是 [LightCMS](https://lightcms.me)的 webhook
端点。在运行前在 GitHub 应用程序设置中更新它 (见[生产部署](#6-production-deployment))。

### 选项B：手动设置

在 **GitHub 设置 -> 开发者设置 -> GitHub 应用程序 -> 新 GitHub 应用程序** 中创建应用程序，带有这些值：

| 设置           | 值                                                |
| ------------ | ------------------------------------------------ |
| 主页 URL       | `https:///<your-domain>`                         |
| Callback URL | `https://<your-domain>/api/auth/callback/github` |
| Setup URL    | `https://<your-domain>/github/setup`             |
| Webhook URL  | `https://<your-domain>/api/github/webhook`       |
| Webhook 密钥   | 随机私密(见[生成密钥](#generating-secrets))               |

**仓库权限**

| 权限         | 访问权限 | 用于：               |
| ---------- | ---- | ----------------- |
| `Contents` | 读写   | 读取和提交内容文件         |
| `Issues`   | 读写   | 查看合并请求的评论和标签      |
| `Pull 请求`  | 只读   | 在拉取请求中列出更改的文件     |
| `提交状态`     | 读写   | 推送时报告内容验证         |
| `Metadata` | 只读   | 每个GitHub 应用程序的必填性 |

**订阅事件：** `推送` 和 `Pull request` 。安装事件自动发送至 GitHub 应用程序。

在创建应用后，注意**App ID**，生成**客户端密钥**，生成并下载**私有密钥**
(.pem\`)。

## 3. 配置环境变量

在项目根创建一个 `.env` 文件。版本库不会装载可用的示例文件，因此请使用下面的引用。

### 必填

```bash
# ---------------------------------------------------------------------------
# Authentication (Better Auth)
# ---------------------------------------------------------------------------
BETTER_AUTH_SECRET="<output of: openssl rand -hex 32>"
# Public URL of this instance. Must match the URL users visit.
BETTER_AUTH_URL="http://localhost:5173"

# ---------------------------------------------------------------------------
# Database (PostgreSQL, TLS required)
# ---------------------------------------------------------------------------
DATABASE_URL="postgresql://user:password@host:5432/lightcms?sslmode=require"

# ---------------------------------------------------------------------------
# GitHub App
# ---------------------------------------------------------------------------
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1.xxxxxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----"
```

`GITHUB_PRIVATE_KEY` 是PEM 的全部内容。 Keep the line breaks and wrap the value in double quotes, which is how
the Probot wizard writes it.

### 开发所需的

[LightCMS](https://lightcms.me) 报告分析和错误到 [PostHog](https://posthog.com)。当密钥丢失时，应用程序**扔进开发中** 以停止事件被静默丢弃。在生产过程中，它们是可选的，当它们未设定时，它们会跳过遥测。

```bash
PUBLIC_POSTHOG_KEY="phc_xxxxxxxxxxxxxxxxxxxxxx"
PUBLIC_POSTHOST="https://us.i.posthog.com"
```

### 电邮：魔法链接登录需要

通过SMTP发送魔法链接并使用 [Nodemailer](https://nodemailer.com)。当
`MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` 或 `MAIL_FROM` 丢失时，发送失败.

```bash
MAIL_HOST="smtp.resend.com"
# Defaults to 587 when omitted
MAIL_PORT="465"
# "true", "1", "yes" or "on" enables implicit TLS. When omitted, TLS is enabled only for port 465.
MAIL_SECURE="1"
MAIL_USER="resend"
MAIL_PASS="<smtp-password-or-api-key>"
MAIL_FROM="LightCMS <noreply@yourdomain.com>"
```

### 可选：AI 复制器

Copilot 使用任何 OpenAI兼容的聊天完成 API。所有这三个变量都是使其发挥作用所需要的。

```bash
OPEN_AI_ENDPOINT="https://api.openai.com/v1"
OPEN_AI_APIKEY="sk-..."
OPEN_AI_MODEL="gpt-4o-mini"
```

显示一个 OpenAI-compatible API 工作的任何提供商，例如 [OpenAI](https://platform.openai.com),
[OpenRouter](https://openrouter.ai) (`https://openrouter.ai/api/v1`) 或 [NVIDIA NIM](https://build.nvidia.com)。

### 可选：语音字幕

[LightCMS](https://lightcms.me) 支持两个翻译后端。当两者都被配置时，将使用OpenAI兼容的后端。

**OpenAI兼容的抄本。** 它是在`SPEECH_API_KEY`设置时选择的，并且也需要 `SPEECH_MODEL`：

```bash
SPEECH_API_KEY="<api-key>"
SPEECH_MODEL="whisper-1"
# Base URL of the provider. Omit it to use the OpenAI default.
SPEECH_ENDPOINT="https://api.openai.com/v1"
```

在实现`/audio/transcriptions`API，并将 `SPEECH_MODEL` 设置为提供商提供的
模型的任何提供商上，点`SPEECH_ENDPOINT` 指向这些提供商。端点的尾随`/audio/transcriptions`会被自动擦除。

**[Wit.ai](https://wit.ai)** 未设置 `SPEECH_API_KEY` 时使用：

```bash
WIT_AI_TOKEN="<wit-ai-server-access-token>"
```

如果两者均未配置，则口述不可用。

### 可选：图像上传 (CDN)

粘贴或上传到编辑器中的图像被发送到一个 [Chevereto](https://chevereto.com)-兼容的上传 API。托管的选项包括 [FreeImage.host](https://freeimage.host) 和 [ImgBB](https://imgbb.com)，或您可以运行
您自己的Cheverto 实例。

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>
```

`CDN_KEY`被作为`key`查询参数发送，除非`CDN_URL`已经包含一个。如果上传失败或
变量未设置。 [LightCMS](https://lightcms.me) 返回到将图像嵌入到文件中作为Base64 `data:` URL。此作品，
但它使得您的Markdown文件更大，所以配置一个 CDN 供真正使用。

### 本地Web 钩子转发(仅开发)

```bash
WEBHOOK_PROXY_URL="https://sme.io/<your-channel>"
```

这是由 Probot 而不是 SwelteKit 应用程序读取的。请参阅[本地测试Webhooks](#testing-webhooks-locally)。

### 正在生成密钥

使用其中任何一种生成`BETTER_AUTH_SECRET`和`GITHUB_WEBHOOK_SECRET`：

```bash
openssl rand -hex 32
# 或
节点 -e "console.log(require('crypto').randomBytes(32).toString('hex')"
```

## 4. 设置数据库

[LightCMS](https://lightcms.me) 使用 [细雨矿物](https://orm.drizzle.team)。 schema位于`src/lib/server/db/schema.ts`，迁移
生成到 `drizzle` 目录。使用 "DATABASE_URL" 设置，应用迁移：

```bash
bun 运行 db:迁移
```

在本地开发过程中，您可以直接将架构推送到数据库，而无需迁移文件：

```bash
bun 运行 db:put
```

其他数据库脚本：

| 命令                   | 描述                         |
| -------------------- | -------------------------- |
| `bun 运行 db:generate` | 编辑schema后生成迁移              |
| `bun 运行 db:studio`   | 在 Drizzle Studio 浏览并编辑您的数据 |

## 5. 本地运行

```bash
bun 运行开发
```

![imagebot](https://i.ibb.co/Jw1bjLrr/image.png)

![permissions detailed](https://i.ibb.co/0p7tk88V/image.png)

[LightCMS](https://lightcms.me现在可在 `http://localhost:5173`上查找。设置 `BETTER_AUTH_URL` 为此地址，并首次使用 GitHub 登录。

### 本地测试网络钩子

GitHub 无法将 webhooks 传输到 `localhost` ，所以请通过 [smee.io](https://smee.io)：

1. 在 [smee.io](https://smee.io创建频道并复制其URL。
2. 设置`.env`中的`WEBHOOK_PROXY_URL`为该URL。
3. 在您的 GitHub 应用程序设置中设置**Webhook URL** 到相同的URL。
4. 在第二个终端运行机器人：

   ```bash
   运行bun bot :start
   ```

机器人注册了与生产端点相同的处理程序：`pub`, 审阅`pull_request`, 和 `installation`日志`上的内容验证，`pull_request\`上的
标签。

## 6. 生产部署

这个项目是用svelteket配置的，它很有供应商的耐久性。 所以
[Vercel](https://vercel.com) [netlify](https://www.netlify.com/) [云端工人](https://www.cloudflare.com/) 所有的部署目标都被支持在方框中使用

1. 将您的Git仓库导入到部署平台。
2. 在 **Project 设置 -> Environment
   变量**中添加每个环境变量 [步骤 3] (#3-configure-environment-variables) 设置`BETTER_AUTH_URL`为您的生产URL。
3. 2\. 痛惜。

要验证本地生产版本：

```bash
bun 运行 building
bun 运行预览
```

## 故障排除

使用 [Wit.ai](https://wit.ai/创建帐户是免费的服务 |
和任何兼容的 API 来翻译。 |
可以使用 [groq](https://groq.com/) 或 [assemblyai](https://assemblyai.com/) 或 |
[elevenlabs](https://elevenlabs.io/) 或 [deepgram](https://deepgram.com/) 或 [sarvam](https://sarvam.ai/)。 |

## 为了开发目的，您可以使用以下凭据进行后台操作

PUBLIC_POSTHOG_KEY = "phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg"
PUBLIC_POSTHOG_URL = "https://us.i.posthog.com"

```bash
PUBLIC_POSTHOG_KEY=phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

https://wit.ai

![wit.ai](https://i.ibb.co/MySskPTt/image.png)

```bash
WIT_AI_TOKEN="服务器访问令牌"
Wit_AI_CLIENT_TOKEN="客户端访问令牌"
```

```bash
APP_ID=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
CDN_KEY=
CDN_URL=
DATABASE_URL=
GITHUB_APP_ID=
GITHUB_APP_NAME=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=
MAIL_FROM=
MAIL_HOST=
MAIL_PASS=
MAIL_PORT=
MAIL_SECURE=
MAIL_USER=
OPEN_AI_ENDPOINT=
OPEN_AI_MODEL=
OPEN_AI_APIKEY=
ORIGIN=
PRIVATE_KEY=
PUBLIC_POSTHOG_HOST=
PUBLIC_POSTHOG_KEY=
SPEECH_API_KEY=
SPEECH_ENDPOINT=
SPEECH_MODEL=
WEBHOOK_SECRET=
WIT_AI_CLIENT_TOKEN=
WIT_AI_TOKEN=
```

![box的配置](https://i.ibb.co/jP5tgcJH/image.png)
