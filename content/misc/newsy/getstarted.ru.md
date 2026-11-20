---
title: 'Getting Started with Newsy: A GitHub Powered Newsletter Platform'
description: 'Newsy is a serverless, GitHub powered newsletter platform: subscribers and issues live in your repository, with no mailing list service, SMTP, or database to run.'
keywords:
  - новость
  - github newsletter
  - serverless newsletter
  - newsletter platform
  - github issues newsletter
preview: /og-image.webp
taxonomies:
  tags:
    - новость
    - рассылка
    - github
    - golang
    - webassembly
slug: getstarted
date: '2026-11-19T10:59:17.693Z'
---

Представляем [Newsy](https://newsy.lightcms.me), платформу с открытыми исходными кодами на GitHub.

Newsy в значительной мере вдохновляет такие инструменты, как Utterances, Giscus, и Gitalk, которые представляют собой комментарии на статические сайты, использующие проблемы с GitHub.
Newsy takes the same GitHub driven approach and brings it to newsletters:
instead of relying on external services or maintaining a separate mailing list,
your newsletter lives right alongside your code in your GitHub repository.

Why GitHub?

1. Ваш информационный бюллетень живет вместе с вашим кодом в репозитории GitHub.
2. Нет управления списками рассылки. Подписчики и обновления отслеживаются в GitHub.
3. Нет дорогих API электронной почты. Вам не нужна отдельная служба подписки на рассылку.
4. Доставка электронной почты не настроена. Вам не нужно управлять SMTP, фильтрами спама или репутацией домена.
5. Нет базы данных подписки. Вам не нужна отдельная база данных для подписок и отписки.
6. Вы просто сосредоточились на написании. GitHub и Newsy обрабатывают остальные.

Публикация должна быть доступна всем. Нет необходимости платить тяжелую плату платной платформе SaaS или часы борьбы с почтовой инфраструктурой, чтобы просто поделиться обновлениями с читателями.

- Deploys on server less (e.g., Vercel, AWS Lambda) for production.
- Web Assembly support: Compile the Go binary to Web Assembly with [TinyGo](https://tinygo.org/) and run it on server less platforms that support JavaScript or Type Script runtime.

A video walkthrough of the local setup is available in the [video guide](/misc/newsy/video/).

## Само-хост своего бота

Выполните следующие шаги, чтобы запустить Newsy и подключить его к репозиториям GitHub.

#### 1. Клонировать репозиторий

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

#### 2. Настройка окружения

We use [mise](https://mise.jdx.dev) To keep the development environment
consistent and easy to manage:

```bash
mise deps
```

#### 3. Создание и запуск

Создайте и запустите двоичный файл:

```bash
перейти к сборке
./newsy
```

#### 4. Configure the GitHub App

1. Откройте [http://localhost:3000](http://localhost:3000) в браузере.
2. If you need to expose your local server, use a tunneling service such as [ngrok](https://ngrok.com),
   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. Откройте URL туннеля (например, `https://xyz.localhost.run`) в вашем браузере:

[![рассылка новостей на Gitthub с поддержкой новостной платформы](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(If you run into issues, refer to the [video guide](/misc/newsy/video/) or try an alternative tunneling provider.)_

4. Выберите **Имя приложения** (желательно уникально).
5. Вставьте URL туннеля в поле **URL-адрес Webhook** и отправьте его.
6. Файл `.env`, содержащий секреты вашего приложения, будет сгенерирован в корне вашего проекта. Сохраняйте этот файл в безопасности.

Сгенерированный файл `.env` должен выглядеть следующим образом:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!IMPORTANT\]
> Install the GitHub App on **specific repositories only**, rather than on "All repositories".

Каждый экземпляр Newsy может быть передан нескольким репозиториям или пользователям.

> \[!NOTE\]
> By default, Newsy only triggers comments and issues upon the creation of new content files (`.html`, `.md`, `.mdx`, etc.), rather than on subsequent edits.

---

## Попробуйте Newsy через Hosted Instance

Вы можете протестировать Ньюси напрямую, используя хостинг-версию [https://newsy.lightcms.me](https://newsy.lightcms.me)

[![Ньюси Демо](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

---

## Развертывание на Vercel

![Развертывание с помощью Vercel](https://vercel.com/button)

После развертывания обновите URL-адрес вашего приложения GitHub с `*.localhost.run` на ваш производственный домен: `https://<your-app>.vercel.app`.

> \[!WARNING\]
> Only use the deploy button if you already have a configured GitHub App and have its credentials ready. В противном случае выполните [Self-Host Your Bot](#self-host-your-bot) чтобы создать его.

---

## Эксплуатационные расходы &amp; Использование ресурсов

Версель и многие другие облачные провайдеры предлагают бесплатные уровни для безсерверной рабочей нагрузки. You can also host Newsy on JavaScript or TypeScript-only runtimes by compiling the Go binary to WebAssembly with [TinyGo](https://tinygo.org/).

Потому что это скомпилированный файл Go:

- **Низкий объем памяти** удобно оставаться в пределах безсерверной памяти и исполнения.

---

## Подписаться на рассылку

Подписаться, чтобы увидеть новость в действии:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

---

## Сгенерировать кнопку подписки

Генерируйте встроенную кнопку подписки для вашей учетной записи на [newsy.lightcms.me](https://newsy.lightcms.me/).

Вы можете настроить стиль кнопки с помощью [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Security tip:** После того, как бот публикует свое первое сообщение рассылки, заблокируйте разговор, чтобы предотвратить непреднамеренное поведение.

![](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)

For further details on permissions, refer to the [required permissions](/misc/newsy/list-of-all-permission/) documentation.
