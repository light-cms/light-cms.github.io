---
title: "Начало работы с Новостью: Новостные рассылки GitHub-Powered"
description: "Развертывание и создание новостей, безсерверной новостной платформы, основанной на Go, WebAssembly и GitHub."
label: "Начало работы"
tags:
  - новость
  - рассылка
  - современное решение
  - бесплатная рассылка
  - github
  - golang
  - webassembly
isCJKLanguage: false
---

Представляем [Newsy](https://newsy.lightcms.me), платформу с открытыми исходными кодами на GitHub.

Newsy в значительной мере вдохновляет такие инструменты, как Utterances, Giscus, и Gitalk, которые представляют собой комментарии на статические сайты, использующие проблемы с GitHub.
Ньюси придерживается того же подхода, основанного на GitHub, и приносит его в информационные бюллетени:
вместо того, чтобы полагаться на внешние сервисы или вести отдельный список рассылки,
ваш бюллетень живет вместе с вашим кодом в репозитории GitHub.

Why GitHub?

1. Ваш информационный бюллетень живет вместе с вашим кодом в репозитории GitHub.
2. Нет управления списками рассылки. Подписчики и обновления отслеживаются в GitHub.
3. Нет дорогих API электронной почты. Вам не нужна отдельная служба подписки на рассылку.
4. Доставка электронной почты не настроена. Вам не нужно управлять SMTP, фильтрами спама или репутацией домена.
5. Нет базы данных подписки. Вам не нужна отдельная база данных для подписок и отписки.
6. Вы просто сосредоточились на написании. GitHub и Newsy обрабатывают остальные.

Публикация должна быть доступна всем. Нет необходимости платить тяжелую плату платной платформе SaaS или часы борьбы с почтовой инфраструктурой, чтобы просто поделиться обновлениями с читателями.

- Развертывает на безсерверные (например, Vercel, AWS Lambda) для производства.
- Поддержка WebAssembly — компилирование бинарного файла Go в WebAssembly с [TinyGo](https://tinygo.org/) и запуск его на безсерверных платформах, поддерживающих выполнение JavaScript или TypeScript.

Видеосъемка локальной настройки доступна в [видео руководстве](/content/misc/newsy/video.md).

## Само-хост своего бота

Выполните следующие шаги, чтобы запустить Newsy и подключить его к репозиториям GitHub.

#### 1. Клонировать репозиторий

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

#### 2. Настройка окружения

We use [mise](https://mise.jdx.dev) to keep the development environment
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
2. Если вам нужно раскрыть локальный сервер, используйте сервис туннелирования, такой как [ngrok](https://ngrok.com),
   [Туннель с фланцами](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   или SSH туннелирование через [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. Откройте URL туннеля (например, `https://xyz.localhost.run`) в вашем браузере:

[![рассылка новостей на Gitthub с поддержкой новостной платформы](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(Если вы столкнулись с проблемами, обратитесь к [видео гиду](/guides/newsy/video/) или попробуйте альтернативный провайдер туннелирования.)_

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

![Заблокирование разговора](/static/newsy-lock.png)

![newsy unlock](/static/newsy-unlock.png)

Для получения дополнительной информации о разрешениях обратитесь к [требуемым разрешениям](/guides/newsy/list-of-all-permission/).
