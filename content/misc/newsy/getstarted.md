---
title: "Newsy: A GitHub-Powered Newsletter Platform"
description: "Newsy is a serverless, GitHub-powered newsletter platform where subscribers and issues live in your repository, without mailing lists, SMTP, or a database."
keywords:
  - newsy
  - github newsletter
  - serverless newsletter
  - newsletter platform
  - github issues newsletter

taxonomies:
  tags:
    - newsy
    - newsletter
    - github
    - golang
    - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

Running an email newsletter for a static blog usually forces you to manage SMTP servers, bounce handling, and a subscriber database. [Newsy](https://newsy.lightcms.me) skips that overhead by running your newsletter inside your GitHub repository.

Utterances, Giscus, and Gitalk used GitHub Issues to bring comments to static sites without a backend. Newsy applies the same idea to newsletters: subscribers and post announcements live alongside your code. The trade-off is that readers need a GitHub account to subscribe.

## What running a newsletter on GitHub changes

1. Your newsletter lives alongside your site code in the same repository.
2. GitHub tracks subscribers and notifications without a separate database.
3. You don't manage mail servers, SPF/DKIM records, or email API quotas.
4. You can run the Go binary on serverless platforms like Vercel or AWS Lambda, or compile it to WebAssembly with [TinyGo](https://tinygo.org/) for JavaScript and TypeScript runtimes.

If you prefer watching over reading, there is a walkthrough in the [video guide](/misc/newsy/video/).

## Self-host your bot

Follow these steps to run Newsy locally and connect it to your GitHub repositories.

### 1. Clone the repository

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

### 2. Set up the environment

Newsy uses [mise](https://mise.jdx.dev) to manage toolchain dependencies:

```bash
mise deps
```

### 3. Build and run

Build and run the Go binary:

```bash
go build
./newsy
```

### 4. Configure the GitHub App

1. Open `http://localhost:3000` in your browser.
2. If you need to expose your local server, use a tunnel service such as [ngrok](https://ngrok.com), [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), or SSH tunneling via [localhost.run](https://localhost.run/):

   ```bash
   ssh -R 80:localhost:3000 localhost.run
   ```

3. Open your tunnel URL (for example, `https://xyz.localhost.run`) in your browser.

   [![Newsy setup walkthrough](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

   If you run into issues, check the [video guide](/misc/newsy/video/) or switch to another tunnel provider.

4. Choose a unique App name.
5. Paste the tunnel URL into the Webhook URL field and submit.
6. Keep the `.env` file generated in your project root safe. It should look like this:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> [!IMPORTANT]
> Install the GitHub App on selected repositories only, rather than on "All repositories".

You can share a single Newsy instance across multiple repositories or users.

> [!NOTE]
> By default, Newsy creates announcements when you add new content files (`.html`, `.md`, `.mdx`), not when you edit existing ones.

## Try Newsy with the hosted site

You can test the hosted instance at [newsy.lightcms.me](https://newsy.lightcms.me) before self-hosting.

[![Newsy Demo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## Deploying to Vercel or serverless runtimes

You can deploy the Newsy repository directly to Vercel or any serverless host that supports Go binaries. If your target runtime only runs JavaScript or TypeScript, compile Newsy to WebAssembly with [TinyGo](https://tinygo.org/). Free tiers on Vercel and similar platforms are typically enough for personal blogs.

## Subscribe to the demo newsletter

You can test the reader flow by subscribing on the demo repository: [Subscribe on GitHub](https://github.com/Pratyay360/blogs_md/issues/1).

## Create your subscription button

Generate an inline subscription button for your account at [newsy.lightcms.me](https://newsy.lightcms.me/), and style it with [Primer CSS](https://cdnjs.com/libraries/Primer) if needed.

> [!TIP]
> After the bot posts its first newsletter issue, lock the conversation so readers can subscribe without adding off-topic comments.

![Locked GitHub issue conversation](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![Newsy subscription workflow](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)
