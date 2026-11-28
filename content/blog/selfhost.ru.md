---
title: Самостоятельный LightCMS
description: "LightCMS с SvelteKit, PostgreSQL и GitHub: шаги установки, переменные среды, миграция баз данных и развертывание."
section: Начать работу
badge: Развертывание
date: 2026-09-18T01:45:00.000Z
draft: false
tags:
  - молнии
  - самохостинг
  - github_app
  - вершина
  - sveltekit
preview: /og-image.png
slug: selfhost
fmContentType: default
---

Для самостоятельной хостинговой LightCMS требуется запустить приложение SvelteKit, подключив базу данных PostgreSQL и сконфигурировав приложение GitHub для доступа к хранилищу. Самохостинг дает вам полный контроль над вашей инфраструктурой и потоком данных, но он также несет ответственность за обновления, резервные копии, секреты и задержки.

Проверить каждую переменную команды и окружения по отношению к текущему [LightCMS репозиторию](https://github.com/light-cms/lightcms) перед развертыванием в производстве.

## Компоненты, которые вам нужны

| Компонент                | Цель                                                                    | Требуется                        |
| :----------------------- | :---------------------------------------------------------------------- | :------------------------------- |
| PostgreSQL               | Сохраняет данные приложения, такие как пользователи, сеансы и установки | Да                               |
| GitHub App               | Обрабатывает аутентификацию на GitHub и доступ к репозиторию            | Да                               |
| SMTP провайдер           | Отправлять сообщения о входе в систему                                  | Зависит от настройки авторизации |
| OpenAI-совместимый API   | Powers AI copilot функции                                               | Нет                              |
| API речи                 | Усиляет диктовку голоса                                                 | Нет                              |
| Хранилище изображения/DN | Хранилища загруженных файлов                                            | Зависит от настройки медиа       |

## 1. Предпосылки

- **Runtime:** Node.js или Bun соответствуют версиям, требуемым репозиторием LightCMS .
- **PostgreSQL с TLS:** соединение с PostgreSQL с TLS.
- **GitHub аккаунт:** Требуется создать и установить GitHub приложение.
- **SMTP учетные данные:** Необязательно, требуется только если вы включите вход по электронной почте.

## 2. Создание и настройка приложения GitHub

Создайте приложение GitHub в настройках вашей учетной записи или организации. Настройте обратный вызов, настройку и URL-адреса webhook в соответствии с развернутым доменом:

| Настройка            | Пример значения                                  |
| :------------------- | :----------------------------------------------- |
| URL главной страницы | `https://<your-domain>`                          |
| Callback URL         | `https://<your-domain>/api/auth/callback/github` |
| Setup URL            | `https://<your-domain>/github/setup`             |
| URL вебхука          | `https://<your-domain>/api/github/webhook`       |

Предоставить только разрешения на хранилище LightCMS нужды. После создания, запишите App ID, ID клиента, секретный ключ клиента, webhook и приватный ключ.

## 3. Настройка переменных окружения

Создайте файл `.env` локально или настройте переменные среды на вашей хостинговой платформе:

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

### Генерация секретов

Сгенерируйте `BETTER_AUTH_SECRET` и `GITHUB_WEBHOOK_SECRET`, используя OpenSSL или Node.js:

```bash
openssl rand -hex 32
# или
узел -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Изображение и CDN загрузки

Изображения, вставленные или загруженные в редактор, отправляются на Chevereto-совместимый API загрузки. Размещенные опции включают [FreeImage.host](https://freeimage.host) и [ImgBB](https://imgbb.com), или вы можете запустить свой собственный экземпляр Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` передается в качестве параметра запроса `key`, если `CDN_URL` уже содержит параметр. Если загрузка не удалась, или переменные будут удалены, LightCMS вернется к встраиванию изображения в документ как URL-адрес `data:` в формате base64. Это работает для быстрого тестирования, но он bloats ваших Markdown файлов, поэтому настройте CDN для реального использования.

### Опционально: голос и текст, ИИ, и аналитика

Вы можете включить голосовые диктограммы, используя [Wit.ai](https://wit.ai/) или любой API транскрипций, совместимый с OpenAI (например, [Groq](https://groq.com/), [AssemblyAI](https://assemblyai.com/), [ElevenLabs](https://elevenlabs.io/), [Deepgram](https://deepgram.com/), или [Sarvam](https://sarvam.ai/)).

```bash
# Wit.ai
WIT_AI_TOKEN="<server-access-token>"
WIT_AI_CLIENT_TOKEN="<client-access-token>"

# OpenAI-compatible AI & Speech
OPEN_AI_ENDPOINT=""
OPEN_AI_MODEL=""
OPEN_AI_APIKEY=""
SPEECH_ENDPOINT=""
SPEECH_MODEL=""
SPEECH_API_KEY=""

# PostHog Analytics (optional)
PUBLIC_POSTHOG_KEY="<your-posthog-project-key>"
PUBLIC_POSTHOG_HOST="<your-posthog-host>"
```

## 4. Настройка базы данных

LightCMS использует [Drizzle ORM](https://orm.drizzle.team). Схема живет в папке `src/lib/server/db/schema.ts`, а миграция генерируется в каталог `drizzle`. С `DATABASE_URL` выполните миграцию:

```bash
bun run db:migrate
```

Во время локальной разработки вы можете нажать схему прямо в базу данных без миграционных файлов:

```bash
bun run db:push
```

Другие скрипты базы данных:

| Команда               | Описание                                          |
| :-------------------- | :------------------------------------------------ |
| `bun run db:generate` | Генерировать миграцию после редактирования схемы  |
| `bun run db:studio`   | Просмотр и редактирование данных в Drizzle Studio |

## 5. Локальный запуск

```bash
bun run dev
```

![LightCMS GitHub App permissions](https://i.ibb.co/Jw1bjLrr/image.png)

![Детали разрешения репозитория](https://i.ibb.co/0p7tk88V/image.png)

LightCMS будет доступен по адресу `http://localhost:5173`. Установите этот адрес `BETTER_AUTH_URL` и войдите в GitHub впервые.

### Тестирование вебхуков локально

GitHub не может доставлять веб-хуки в `localhost`, поэтому пересылайте их через [smee.io](https://smee.io):

1. Создайте канал на [smee.io](https://smee.io) и скопируйте его URL.
2. Установите `WEBHOOK_PROXY_URL` в `.env` на этот URL (`WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"`).
3. Установите URL вебхука в настройках приложения GitHub на тот же URL.
4. Запустите бота во втором терминале:

   ```bash
   bun run bot:start
   ```

Бот регистрирует те же обработчики, что и конечная точка продукта: проверка содержимого на `push`, комментарии и метки в журнале `pull_request` и `installation`.

## 6. Направление производства

LightCMS построена на SvelteKit, поэтому [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), и [Cloudflare Workers](https://www.cloudflare.com/) являются поддерживаемыми целями развертывания:

1. Импортируйте репозиторий Git в вашу платформу установки.
2. Добавьте каждую требуемую переменную окружения из [шаг 3](#3-configure-environment-variables) в настройках вашего проекта и установите `BETTER_AUTH_URL` на ваш рабочий URL.
3. Развертывание и проверка полного потока: войдите, подключите репозиторий, отредактируйте файл, зафиксируйте изменения и подтвердите запуск статического сборки сайта.

Для проверки производственной сборки локально перед развертыванием:

```bash
bun run build
bun preview
```
