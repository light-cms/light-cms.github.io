---
title: 自我托管的 LightCMS
description: "自机的 LightCMS 与 SwelteKit, PostgreSQL 和 GitHub 应用程序：设置步骤，环境变量，数据库迁移和部署。"
section: 开始
badge: 部署
date: 2026-09-18T01:45:00.000Z
draft: false
tags:
  - 闪光
  - 自主机
  - github_app
  - 脊椎骨
  - sveltekit
preview: /og-image.png
slug: selfhost
fmContentType: default
---

自托管的 LightCMS 需要运行一个 SwelteKit 应用程序，连接一个 PostgreSQL 数据库，并配置一个 GitHub 应用程序进行存储库访问。自托管可以让您完全控制您的基础设施和数据流，但它也使您负责更新、备份、保密和定期更新。

在部署到生产前验证每个命令和环境变量与当前的 [LightCMS 仓库](https://github.com/light-cms/lightcms)。

## 您需要的组件

| 组件            | 目的                   | 必填      |
| :------------ | :------------------- | :------ |
| PostgreSQL    | 存储应用程序数据，如用户、会话和安装   | 否       |
| GitHub App    | 处理 GitHub 身份验证和资源库访问 | 否       |
| SMTP 提供商      | 发送魔法链接登录邮件           | 依赖认证设置  |
| OpenAI兼容的 API | 权力 AI 拷贝功能           | 否       |
| 语音到文本 API     | 授权语音听音               | 否       |
| 图像/CDN 存储     | 存储上传的媒体              | 取决于媒体设置 |

## 1. 必备条件

- **Runtime:** Node.js 或 Bun 匹配LightCMS 仓库所需的版本。
- **PostgreSQL 与 TLS：** 一个 TLS-able PostgreSQL 连接。
- **GitHub 帐户：** 需要创建和安装您的GitHub 应用程序。
- **SMTP 凭据：** 可选，仅当您启用魔法链接电子邮件登录时才需要。

## 2. 创建和配置 GitHub 应用程序

在您的 GitHub 帐户或组织设置中创建 GitHub 应用。配置调用、设置和Webhook URL以匹配您部署的域：

| 设置           | 示例值                                              |
| :----------- | :----------------------------------------------- |
| 主页 URL       | `https:///<your-domain>`                         |
| Callback URL | `https://<your-domain>/api/auth/callback/github` |
| Setup URL    | `https://<your-domain>/github/setup`             |
| Webhook URL  | `https://<your-domain>/api/github/webhook`       |

只授予版本库权限 LightCMS 需要。创建后，录制App ID、客户端ID、客户端机密、webhook 秘密和私钥。

## 3. 配置环境变量

在本地创建一个 `.env` 文件，或在您的主机平台中配置环境变量：

```bash
# Authentication
BETTER_AUTH_SECRET="<random-secret>"
BETTER_AUTH_URL="https://<your-domain>"

# Database
DATABASE_URL="postgresql://user:password@host:5432/lightcms?sslmode=require"

# GitHub App
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1.xxxxxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----"
```

### 正在生成密钥

使用 OpenSSL 或 Node.j: 生成`BETTER_AUTH_SECRET` 和 `GITHUB_WEBHOOK_SECRET`

```bash
openssl rand -hex 32
# 或
节点 -e "console.log(require('crypto').randomBytes(32).toString('hex')"
```

### 图片和 CDN 上传

粘贴或上传到编辑器中的图像将被发送到与Chevereto兼容的上传API。托管选项包括 [FreeImage.host](https://freeimage.host和 [ImgBB](https://imgbb.com)，或您可以运行自己的Cheverto 实例。

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>
```

`CDN_KEY`被作为`key`查询参数发送，除非`CDN_URL`已经包含一个。如果上传失败或变量未设置，LightCMS返回到将图像嵌入到文件中作为Base64`data:`URL。这可用于快速测试，但它会使您的Markdown文件大量增加，所以配置一个 CDN 供真正使用。

### 可选：语音对文本、AI和分析

您可以使用 [Wit.ai](https://wit.ai/)或任何 OpenAI兼容的翻译 API (例如 [Groq](https://groq.com/), 启用语音口述功能。 [AssemblyAI](https://assemblyai.com/), [ElevenLabs](https://elevenlabs.io/), [Deepgram](https://deepgram.com/), or [Sarvam](https://sarvam.ai/))。

```bash
# 通道。 i
Wit_AI_TOKEN="<server-access-token>
WIT_AI_CLIENT_TOKEN="<client-access-token>

# OpenAI-compatible AI & Speech
OPEN_AI_ENDPOINT=""
OPEN_AI_MODEL=""
OPEN_AI_APIKEY=""
SPEECH_ENDPOINT=""
SPEECH_MODEL=""
SPEECH_API_KEY=""

# PostHog分析(option)
PUBLIC_POSTHOG_KEY="<your-posthog-project-key>
PUBLIC_POSTHOST="<your-posthog-host>"
```

## 4. 设置数据库

LightCMS uses [Drizzle ORM](https://orm.drizzle.team). schema生活在`src/lib/server/db/schema.ts`中，迁移将生成到 `drizzle` 目录。使用 "DATABASE_URL" 设置，应用迁移：

```bash
bun 运行 db:迁移
```

在本地开发过程中，您可以直接将架构推送到数据库，而无需迁移文件：

```bash
bun 运行 db:put
```

其他数据库脚本：

| 命令                   | 描述                         |
| :------------------- | :------------------------- |
| `bun 运行 db:generate` | 编辑schema后生成迁移              |
| `bun 运行 db:studio`   | 在 Drizzle Studio 浏览并编辑您的数据 |

## 5. 本地运行

```bash
bun 运行开发
```

![LightCMS GitHub App permissions](https://i.ibb.co/Jw1bjLrr/image.png)

![详细的仓库权限](https://i.ibb.co/0p7tk88V/image.png)

LightCMS将可在 `http://localhost:5173`上查阅。设置 `BETTER_AUTH_URL` 为此地址，并首次使用 GitHub 登录。

### 本地测试网络钩子

GitHub 无法将 webhooks 传输到 `localhost` ，所以请通过 [smee.io](https://smee.io)：

1. 在 [smee.io](https://smee.io创建频道并复制其URL。
2. 设置`.env`中的`WEBHOOK_PROXY_URL`为该URL(`WEBHOOK_PROXY_URL="https://sme.io/<your-channel>`)。
3. 将您的GitHub App 设置中的 Webhook URL 设置为相同的 URL。
4. 在第二个终端运行机器人：

   ```bash
   运行bun bot :start
   ```

机器人注册了与生产端点相同的处理程序：`pub`, 审查`pull_request`, 和 `installation`日志中的内容验证。

## 6. 生产部署

LightCMS由 SwelteKit 构建，所以 [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), 和 [Cloudflare Workers] (https://www.cloudflare.com/) 支持部署目标：

1. 将您的Git仓库导入到您的部署平台。
2. 在您的项目设置中从[步骤 3](#3-configure-environment-variables)添加每个必填的环境变量，并将 `BETTER_AUTH_URL` 设置为您生产的 URL。
3. 部署并测试全部流程：登录、连接仓库、编辑文件、提交更改并确认您的静态站点构建运行。

为了在部署前核查生产构建：

```bash
bun 运行 building
bun 运行预览
```
