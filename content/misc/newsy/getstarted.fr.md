---
title: "Newsy A GitHub Powered Newsletter Platform"
description: "Newsy is a serverless, GitHub-powered newsletter platform where subscribers and issues live in your repository, without mailing lists, SMTP, or a database."
keywords:
  - Nouvelles
  - github newsletter
  - serverless newsletter
  - newsletter platform
  - github issues newsletter

taxonomies:
  tags:
    - Nouvelles
    - Newsletter
    - github
    - golang
    - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

Introduction à [Newsy](https://newsy.lightcms.me), une plateforme de newsletter open-source propulsée par GitHub.

Newsy follows tools like Utterances, Giscus, and Gitalk, which changed commenting for static sites with GitHub Issues.
Newsy uses the same GitHub approach for newsletters:
instead of using outside services or running a separate mailing list,
your newsletter lives next to your code in your GitHub repository.

Why GitHub?

1. Votre newsletter vit à côté de votre code dans votre dépôt GitHub.
2. No mailing list work. GitHub tracks subscribers and updates.
3. No costly email APIs. You do not need a separate email signup service.
4. No email send setup. You do not need to manage SMTP, spam filters, or domain trust.
5. No signup database. You do not need a separate database for signups and unsubscribes.
6. Vous vous concentrez sur l'écriture. GitHub et Newsy s'occupent du reste.

Publishing should be easy for everyone. There is no need to pay high SaaS fees or spend hours setting up email systems just to share updates with your readers.

- Runs on serverless platforms (e.g., Vercel, AWS Lambda) for live use.
- Prise en charge de WebAssembly : Compiler le binaire Go vers WebAssembly avec [TinyGo](https://tinygo.org/) et l'exécuter sur des plates-formes sans serveur qui prennent en charge les exécutions JavaScript ou TypeScript.

A video walkthrough of the local setup is available in the [video guide](/misc/newsy/video/).

## Héberger votre Bot

Suivez ces étapes pour exécuter Newsy et le connecter à vos dépôts GitHub.

### 1. Cloner le dépôt

```bash
git clone git@github.com:light-cms/newsy.git
newsy cd
```

### 2. Mettre en place l'environnement

We use [mise](https://mise.jdx.dev) to keep the dev setup
steady and easy to manage:

```bash
mise deps
```

### 3. Construire et exécuter

Construire et exécuter le binaire Go :

```bash
allez construire
./newsy
```

### 4. Configure the GitHub App

1. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.
2. If you need to expose your local server, use a tunnel service such as [ngrok](https://ngrok.com),
   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

1. Ouvrez l'URL de votre tunnel (par exemple, `https://xyz.localhost.run`) dans votre navigateur:

[![newsy a github issues backed newsletter platform](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(If you run into issues, refer to the [video guide](/misc/newsy/video/) or try another tunnel provider.)_

1. Choose an **App name** (use a unique one).
2. Collez l'URL du tunnel dans le champ **Webhook URL** et soumettez-le.
3. A `.env` file with your app's secrets will be created in your project root. Garder ce fichier en sécurité.

Le fichier `.env` généré devrait ressembler à ceci :

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

## Déployer sur Vercel

![Deploy with Vercel](https://vercel.com/button)

Once deployed, change your GitHub App's Webhook URL from `*.localhost.run` to your live domain: `https://<your-app>.vercel.app`.

> \[!WARNING\]
> Only use the deploy button if you have already set up a GitHub App and have its keys ready. Sinon, suivez les étapes de [Self-Host Your Bot](#self-host-your-bot) pour en créer un.

## Operating Costs &amp; Usage

Vercel et de nombreux autres fournisseurs de cloud offrent des tiers gratuits pour des charges de travail sans serveur. You can also host Newsy on JavaScript or TypeScript runtimes by building the Go binary as WebAssembly with [TinyGo](https://tinygo.org/).

As a Go binary:

- **Low memory use**, staying well within serverless memory and run limits.

## S'abonner à la Newsletter

Abonnez-vous pour voir les Newsy en action :

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

## Create Your Subscription Button

Create an inline subscription button for your account at [newsy.lightcms.me](https://newsy.lightcms.me/).

You can change and style the button using [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Security tip:** After the bot posts its first newsletter message, lock the chat to stop unwanted actions.

![locked convo](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![newsy bypassing](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)

For more access details, refer to the [required permissions](/misc/newsy/list-of-all-permission/) guide.
