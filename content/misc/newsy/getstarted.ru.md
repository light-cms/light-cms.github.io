---
title: "Newsy A GitHub Powered Newsletter Platform"
description: "Newsy is a serverless, GitHub-powered newsletter platform where subscribers and issues live in your repository, without mailing lists, SMTP, or a database."
keywords:
  - новость
  - github newsletter
  - serverless newsletter
  - newsletter platform
  - github issues newsletter

taxonomies:
  tags:
    - новость
    - рассылка
    - github
    - golang
    - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

Представляем [Newsy](https://newsy.lightcms.me), платформу с открытыми исходными кодами на GitHub.

Newsy follows tools like Utterances, Giscus, and Gitalk, which changed commenting for static sites with GitHub Issues.
Newsy uses the same GitHub approach for newsletters:
instead of using outside services or running a separate mailing list,
your newsletter lives next to your code in your GitHub repository.

Why GitHub?

1. Ваш информационный бюллетень живет вместе с вашим кодом в репозитории GitHub.
2. No mailing list work. GitHub tracks subscribers and updates.
3. No costly email APIs. You do not need a separate email signup service.
4. No email send setup. You do not need to manage SMTP, spam filters, or domain trust.
5. No signup database. You do not need a separate database for signups and unsubscribes.
6. Вы просто сосредоточились на написании. GitHub и Newsy обрабатывают остальные.

Publishing should be easy for everyone. There is no need to pay high SaaS fees or spend hours setting up email systems just to share updates with your readers.

- Runs on serverless platforms (e.g., Vercel, AWS Lambda) for live use.
- Поддержка WebAssembly — компилирование бинарного файла Go в WebAssembly с [TinyGo](https://tinygo.org/) и запуск его на безсерверных платформах, поддерживающих выполнение JavaScript или TypeScript.

A video walkthrough of the local setup is available in the [video guide](/misc/newsy/video/).

## Само-хост своего бота

Выполните следующие шаги, чтобы запустить Newsy и подключить его к репозиториям GitHub.

### 1. Клонировать репозиторий

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

### 2. Настройка окружения

We use [mise](https://mise.jdx.dev) to keep the dev setup
steady and easy to manage:

```bash
mise deps
```

### 3. Создание и запуск

Создайте и запустите двоичный файл:

```bash
перейти к сборке
./newsy
```

### 4. Configure the GitHub App

1. Откройте [http://localhost:3000](http://localhost:3000) в браузере.
2. If you need to expose your local server, use a tunnel service such as [ngrok](https://ngrok.com),
   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

1. Откройте URL туннеля (например, `https://xyz.localhost.run`) в вашем браузере:

[![рассылка новостей на Gitthub с поддержкой новостной платформы](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(If you run into issues, refer to the [video guide](/misc/newsy/video/) or try another tunnel provider.)_

1. Choose an **App name** (use a unique one).
2. Вставьте URL туннеля в поле **URL-адрес Webhook** и отправьте его.
3. A `.env` file with your app's secrets will be created in your project root. Сохраняйте этот файл в безопасности.

Сгенерированный файл `.env` должен выглядеть следующим образом:

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

[![Ньюси Демо](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## Развертывание на Vercel

![Развертывание с помощью Vercel](https://vercel.com/button)

Once deployed, change your GitHub App's Webhook URL from `*.localhost.run` to your live domain: `https://<your-app>.vercel.app`.

> \[!WARNING\]
> Only use the deploy button if you have already set up a GitHub App and have its keys ready. В противном случае выполните [Self-Host Your Bot](#self-host-your-bot) чтобы создать его.

## Operating Costs &amp; Usage

Версель и многие другие облачные провайдеры предлагают бесплатные уровни для безсерверной рабочей нагрузки. You can also host Newsy on JavaScript or TypeScript runtimes by building the Go binary as WebAssembly with [TinyGo](https://tinygo.org/).

As a Go binary:

- **Low memory use**, staying well within serverless memory and run limits.

## Подписаться на рассылку

Подписаться, чтобы увидеть новость в действии:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

## Create Your Subscription Button

Create an inline subscription button for your account at [newsy.lightcms.me](https://newsy.lightcms.me/).

You can change and style the button using [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Security tip:** After the bot posts its first newsletter message, lock the chat to stop unwanted actions.

![locked convo](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![newsy bypassing](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)

For more access details, refer to the [required permissions](/misc/newsy/list-of-all-permission/) guide.
