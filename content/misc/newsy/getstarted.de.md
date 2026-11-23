---
title: "Newsy A GitHub Powered Newsletter Platform"
description: "Newsy is a serverless, GitHub-powered newsletter platform where subscribers and issues live in your repository, without mailing lists, SMTP, or a database."
keywords:
  - neugierig
  - github newsletter
  - serverless newsletter
  - newsletter platform
  - github issues newsletter

taxonomies:
  tags:
    - neugierig
    - Newsletter
    - github
    - golang
    - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

Einführung von [Newsy](https://newsy.lightcms.me), einer Open-Source-Newsletter-Plattform powered by GitHub.

Newsy follows tools like Utterances, Giscus, and Gitalk, which changed commenting for static sites with GitHub Issues.
Newsy uses the same GitHub approach for newsletters:
instead of using outside services or running a separate mailing list,
your newsletter lives next to your code in your GitHub repository.

Why GitHub?

1. Dein Newsletter lebt direkt neben deinem Code in deinem GitHub Repository.
2. No mailing list work. GitHub tracks subscribers and updates.
3. No costly email APIs. You do not need a separate email signup service.
4. No email send setup. You do not need to manage SMTP, spam filters, or domain trust.
5. No signup database. You do not need a separate database for signups and unsubscribes.
6. Sie konzentrieren sich nur auf das Schreiben. GitHub und Newsy kümmern sich um den Rest.

Publishing should be easy for everyone. There is no need to pay high SaaS fees or spend hours setting up email systems just to share updates with your readers.

- Runs on serverless platforms (e.g., Vercel, AWS Lambda) for live use.
- WebAssembly Support: Kompilieren Sie die Go-Binärdatei in WebAssembly mit [TinyGo](https://tinygo.org/) und starten Sie sie auf serverlosen Plattformen, die JavaScript oder TypeScript Laufzeiten unterstützen.

A video walkthrough of the local setup is available in the [video guide](/misc/newsy/video/).

## Self-Host dein Bot

Folgen Sie diesen Schritten, um Newsy auszuführen und mit Ihren GitHub Repositories zu verbinden.

### 1. Das Repository klonen

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

### 2. Umgebung einrichten

We use [mise](https://mise.jdx.dev) to keep the dev setup
steady and easy to manage:

```bash
mise deps
```

### 3. Bauen und ausführen

Erstelle und führe das Go-Programm aus:

```bash
gehe Build
./newsy
```

### 4. Configure the GitHub App

1. Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.
2. If you need to expose your local server, use a tunnel service such as [ngrok](https://ngrok.com),
   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

1. Öffne deine Tunnel URL (z.B. `https://xyz.localhost.run`) in deinem Browser:

[![Newsletter-github-Issues unterstützt](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(If you run into issues, refer to the [video guide](/misc/newsy/video/) or try another tunnel provider.)_

1. Choose an **App name** (use a unique one).
2. Fügen Sie die Tunneladresse in das Feld **Webhook URL** ein und senden Sie es ab.
3. A `.env` file with your app's secrets will be created in your project root. Behalte diese Datei sicher.

Die generierte `.env` sollte so aussehen:

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

[![Newsy Demo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## Deploy on Vercel

![Deploy with Vercel](https://vercel.com/button)

Once deployed, change your GitHub App's Webhook URL from `*.localhost.run` to your live domain: `https://<your-app>.vercel.app`.

> \[!WARNING\]
> Only use the deploy button if you have already set up a GitHub App and have its keys ready. Andernfalls folgen Sie den [Self-Host Your Bot](#self-host-your-bot) Schritten zuerst, um einen zu erstellen.

## Operating Costs &amp; Usage

Vercel und viele andere Cloud-Anbieter bieten kostenlose Stufen für serverlose Arbeitsbelastungen. You can also host Newsy on JavaScript or TypeScript runtimes by building the Go binary as WebAssembly with [TinyGo](https://tinygo.org/).

As a Go binary:

- **Low memory use**, staying well within serverless memory and run limits.

## Newsletter abonnieren

Abonnieren, um Newsy in Aktion zu sehen:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

## Create Your Subscription Button

Create an inline subscription button for your account at [newsy.lightcms.me](https://newsy.lightcms.me/).

You can change and style the button using [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Security tip:** After the bot posts its first newsletter message, lock the chat to stop unwanted actions.

![locked convo](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![newsy bypassing](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)

For more access details, refer to the [required permissions](/misc/newsy/list-of-all-permission/) guide.
