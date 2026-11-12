---
title: Самохостинг LightCMS
description: Руководство по самому хосту LightCMS.
serial: 4
section: Начать работу
badge: Развертывание
date: 2026-09-18T01:45:00Z
draft: false
tags:
  - selfhost
  - молнии
  - postgresql
  - развертывание
keywords:
  - молнии
  - пробот
  - самохостинг
  - github_app
  - вершина
  - sveltekit
preview: /og-image.png
canonical: https://www.lightcms.me/docs
---

Want [LightCMS](https://lightcms.me) fully under your control? [LightCMS](https://lightcms.me) это [SvelteKit](https://svelte.dev) приложение, поэтому оно может быть развернуто где угодно, поддерживается базой данных postgre и GitHub App(octokit). Ваш контент никогда не оставляет свои репозитории на GitHub.

Это руководство рассказывает о том, что вам нужно запустить свой собственный экземпляр: создание GitHub приложения, подготовка
PostgreSQL, настройка переменных среды и развертывание.

## Как все фигуры укладываются вместе

| Компонент              | Цель                                                                                           | Требуется                        |
| ---------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------- |
| PostgreSQL             | Хранит пользователей, сеансов, паролей и установок GitHub                                      | Да                               |
| GitHub App             | Читает и записывает содержимое в ваши репозитории и подписывает пользователей с помощью GitHub | Да                               |
| SMTP провайдер         | Отправлять сообщения о входе в систему                                                         | Да, для входа в волшебную ссылку |
| OpenAI-совместимый API | Усиляет копилот ИИ                                                                             | Опционально                      |
| API речи               | Усиляет диктовку голоса                                                                        | Опционально                      |
| CDN изображения        | Изображения узлов, загруженных в редактор                                                      | Опционально                      |
| Постхог                | Аналитика продуктов и наблюдение ИИ                                                            | Требуется только для развития    |

## Предпосылки

- **[mise](https://mise.jdx.dev)**: устанавливает и управляет зависимостями задач. Я буду предполагать, что вы установили его.
- **PostgreSQL**: база данных, которая принимает TLS соединения. Облачные поставщики, такие как [Neon](https://neon.tech),
  [Supabase](https://supabase.com) или [Nile](https://thenile.dev) работают хорошо. See
  [awesome-free-postgres](https://github.com/alexeyfv/awesome-free-postgres) for free options.
- **GitHub аккаунт**: необходимо для регистрации GitHub.
- **SMTP провайдер** (для волшебных ссылок): Если у вас есть домен, то [Resend](https://resend.com) будет иметь потрясающий опыт,
  если нет, то [Zoho Mail](https://www.zoho.com/mail) не забудьте создать пароль приложения.

> **TLS является обязательным.** Приложение подключается к PostgreSQL с помощью `ssl: "require"`. Локальная копия PostgreSQL
> без TLS будет отклонена, поэтому используйте размещенную базу данных или настройте TLS на вашем собственном сервере.

## 1. Форкнуть репозиторий и установить зависимости

Клонировать репозиторий и установить зависимости:

```bash
cd lightcms
mise trust
mise deps
mise run install
```

Установите инструментальную цепь и зависимости проекта:

```bash
mise trust
deps
mise run install
```

## 2. Create the GitHub App

[LightCMS](https://lightcms.me) использует GitHub для двух вещей: вход пользователей в GitHub (OAuth) и выполнение от вашего имени
через установки. Вы можете создать его с помощью встроенного мастера настройки Пробота или вручную.

### Вариант А: Мастер установки Пробота

начать бот:

```bash
пропущенный бот
```

Не имея учётных данных в `.env`, Пробот запускает установочный сервер в `http://localhost:3000`:

1. Откройте `http://localhost:3000` и нажмите **Register GitHub App**.
2. Выберите свой личный аккаунт или организацию.
3. Подтвердить. Пробот создает приложение и записывает его учетные данные в ваш файл `.env`.

Мастер устанавливает URL-адрес веб-хука приложения на канал Smee (или `http://localhost:3000/`), а не на [LightCMS](https://lightcms.mewebhook
конечную точку. Обновите его в настройках приложения GitHub перед началом эксплуатации (см. [Установка производства](#6-production-deployment)).

### Вариант В: Ручная настройка

Создайте приложение в **GitHub Settings → Настройки разработчика → GitHub Apps → New GitHub App** с этими значениями:

| Настройка            | Значение                                                         |
| -------------------- | ---------------------------------------------------------------- |
| URL главной страницы | `https://<your-domain>`                                          |
| Callback URL         | `https://<your-domain>/api/auth/callback/github`                 |
| Setup URL            | `https://<your-domain>/github/setup`                             |
| URL вебхука          | `https://<your-domain>/api/github/webhook`                       |
| Секрет Webhook       | Случайный секрет (см. [Генерация секретов](#generating-secrets)) |

**Разрешения репозитория**

| Разрешение          | Доступ          | Используется для                              |
| ------------------- | --------------- | --------------------------------------------- |
| `Содержимое`        | Чтение и запись | Чтение и фиксация файлов содержимого          |
| `Проблемы`          | Чтение и запись | Просмотр комментариев и меток pull-request'ов |
| `Pull requests`     | Только чтение   | Список файлов изменен в Pull Request          |
| `Фиксация статусов` | Чтение и запись | Отчеты об валидации содержимого на pushes     |
| «Метаданные»        | Только чтение   | Обязательный для каждого приложения GitHub    |

**Подпишитесь на события:** `Push` и `Pull request`. События по установке автоматически передаются в GitHub приложения.

После создания приложения, обратите внимание на **App ID**, сгенерируйте **клиентский секрет**, и скачайте **приватный ключ**
(`.pem`).

## 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта. Репозиторий не предоставляет пригодный для использования пример файл, поэтому используйте ссылку ниже.

### Требуется

```bash
# -----------------------------------------------------------------------------------
# Аутентификация (Better Auth)
# ---------------------------------------------------------------------------
BETTER_AUTH_SECRET="<output of: openssl rand -hex 32>"
# публичный URL этого экземпляра. Должен совпадать с посещаемым пользователем URL-адресом.
BETTER_AUTH_URL="http://localhost:5173"

# -------------------------------------------------------------------------------------------
# База данных (PostgreSQL, TLS необходимая)
# -----------------------------------------------------------------------------------
DATABASE_URL="postgresql://user:password@host:5432/lightcms? slmode=require"

# -----------------------------------------------------------------------------------
# GitHub App
# -------------------------------------------------------------------------------------------
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1. xxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----"
```

`GITHUB_PRIVATE_KEY` — полное содержимое PEM. Держите строку разрыва и оберните значение в двойные кавычки, вот как
пишет её мастером.

### Требуется для разработки

[LightCMS](https://lightcms.me) сообщает аналитику и ошибки [PostHog](https://posthog.com). Когда ключи отсутствуют, приложение **бросает в разработку** для того, чтобы остановить события молчания. В производстве они являются необязательными, а телеметрия пропускается, когда они отключены.

```bash
PUBLIC_POSTHOG_KEY="phc_xxxxxxxxxx"
PUBLIC_POSTHOG_HOST="https://us.i.posthog.com"
```

### E-mail: требуется для входа в систему magic-link

Магические ссылки отправляются через SMTP с помощью [Nodemailer](https://nodemailer.com). Отправка не удалась с ошибкой конфигурации, когда отсутствует файл
`MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` или `MAIL_FROM`.

```bash
MAIL_HOST="smtp.resend.com"
# По умолчанию до 587 при пропускании
MAIL_PORT="465"
# "true", "1", "да" или "в" позволяет неявным TLS. Когда omitted, TLS включен только для порта 465.
MAIL_SECURE="1"
MAIL_USER="resend"
MAIL_PASS="<smtp-password-or-api-key>"
MAIL_FROM="LightCMS <noreply@yourdomain.com>"
```

### Необязательно: AI Copilot

Copilot использует любой API дополнений OpenAI-совместимого чата. Все три переменные необходимы для работы.

```bash
OPEN_AI_ENDPOINT="https://api.openai.com/v1"
OPEN_AI_APIKEY="sk-..."
OPEN_AI_MODEL="gpt-4o-mini"
```

Любой поставщик, который открывает совместимый с OpenAI, работает, например, [OpenAI](https://platform.openai.com),
[OpenRouter](https://openrouter.ai) (`https://openrouter.ai/api/v1`) или [NVIDIA NIM](https://build.nvidia.com).

### Необязательно: диктование речи к тексту

[LightCMS](https://lightcms.me) поддерживает два транскрипта. При настройке используется OpenAI-совместимый бэкэнд.

**OpenAI-совместимые транскрипции.** Выбрано, когда установлен файл `SPEECH_API_KEY`, а также требуется `SPEECH_MODEL`:

```bash
SPEECH_API_KEY="<api-key>"
SPEECH_MODEL="whisper-1"
# Базовый URL-адрес провайдера. Или используйте OpenAI по умолчанию.
SPEECH_ENDPOINT="https://api.openai.com/v1"
```

Наведите `SPEECH_ENDPOINT` на любого поставщика, который реализует API `/audio/transcriptions`, и установите модель `SPEECH_MODEL` на
модель, предлагаемую поставщиком. В конечной точке автоматически удаляется завершающая `/audio/transcriptions`.

**[Wit.ai](https://wit.ai)** используется, когда не установлен `SPEECH_API_KEY`:

```bash
WIT_AI_TOKEN="<wit-ai-server-access-token>"
```

Если ни один из них не настроен, продиктование недоступно.

### Опционально: загрузка изображений (CDN)

Изображения, вставленные или загруженные в редактор, отправляются на [Chevereto](https://chevereto.com)-совместимый API для загрузки файлов.
Размещенные опции включают [FreeImage.host](https://freeimage.host) и [ImgBB](https://imgbb.com), или вы можете запустить
свой собственный экземпляр Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` передается в качестве параметра запроса `key`, если `CDN_URL` уже содержит параметр. Если загрузка не удалась, или переменные
не заданы, [LightCMS](https://lightcms.me) возвращается к встраиванию изображения в документ как `data:` URL. Это работает,
но делает файлы Markdown значительно больше, поэтому настройте CDN для реального использования.

### Переадресация веб-хуков (только для разработки)

```bash
WEBHOOK_PROXY_URL="https://smee.io/<your-channel>
```

Это читается Probot, а не приложением SvelteKit. См. [Тестирование вебхуков](#testing-webhooks-locally).

### Генерация секретов

Используйте любой из них для генерации `BETTER_AUTH_SECRET` и `GITHUB_WEBHOOK_SECRET`:

```bash
openssl rand -hex 32
# или
узел -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 4. Настройка базы данных

[LightCMS](https://lightcms.me) использует [Ворот ORM](https://orm.drizzle.team). Схема живет в `src/lib/server/db/schema.ts`, а миграция
генерируется в каталог `drizzle`. С `DATABASE_URL` выполните миграцию:

```bash
bun run db:migrate
```

Во время локального развития вы можете вместо этого отправлять схему прямо в базу данных, без миграционных файлов:

```bash
bun run db:push
```

Другие скрипты базы данных:

| Команда               | Описание                                          |
| --------------------- | ------------------------------------------------- |
| `bun run db:generate` | Генерировать миграцию после редактирования схемы  |
| `bun run db:studio`   | Просмотр и редактирование данных в Drizzle Studio |

## 5. Локальный запуск

```bash
bun run dev
```

![imagebot](https://i.ibb.co/Jw1bjLrr/image.png)

![подробные права](https://i.ibb.co/0p7tk88V/image.png)

[LightCMS](https://lightcms.me) теперь доступен по адресу `http://localhost:5173`. Установите на этот адрес `BETTER_AUTH_URL` и впервые войдите в GitHub.

### Тестирование вебхуков локально

GitHub не может доставлять веб-хуки в `localhost`, поэтому пересылайте их через [smee.io](https://smee.io):

1. Создайте канал на [smee.io](https://smee.io) и скопируйте его URL.
2. Установите `WEBHOOK_PROXY_URL` в `.env` в `.env`.
3. Установил **URL-адрес вебхука** в настройках приложения на GitHub.
4. Запустите бота во втором терминале:

   ```bash
   bun run bot:start
   ```

Бот регистрирует те же обработчики, что и конечная точка продукта: проверка содержимого на `push`, комментарии к рассмотрению и
метки в журнале `pull_request`, и `installation`.

## 6. Направление производства

Проект сконфигурирован с sveltekit, очень вендор агностик, so
[Vercel](https://vercel.com) [netlify](https://www.netlify.com/) [cloudflare workers](https://www.cloudflare.com/) are supported deployment targets from the box.

1. Импортируйте ваш Git-репозиторий в платформу установки.
2. Добавьте каждую переменную окружения из [шаг 3](#3-configure-environment-variables) в **Настройки проекта → Окружающая среда
   переменных**. Установите `BETTER_AUTH_URL` в ваш URL-адрес продукта.
3. Развертывание.

Для проверки производительности сборки локально:

```bash
bun run build
bun preview
```

## Устранение проблем

Создайте учетную запись с [Wit.ai](https://wit.ai/) это бесплатный сервис meta |
И любой openai совместимый API для транскрипции. |
Один может использовать [groq](https://groq.com/) или [assemblyai](https://assemblyai.com/) или |
[elevenlabs](https://elevenlabs.io/) или [deepgram](https://deepgram.com/) или [sarvam](https://sarvam.ai/). |

## Для разработки используйте следующие полномочия для posthog

PUBLIC_POSTHOG_KEY = "phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg"
PUBLIC_POSTHOG_URL = "https://us.i.posthog.com"

```bash
PUBLIC_POSTHOG_KEY=phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

https://wit.ai

![wit.ai](https://i.ibb.co/MySskPTt/image.png)

```bash
WIT_AI_TOKEN="Код доступа к серверу"
WIT_AI_CLIENT_TOKEN="Токен доступа к клиенту"
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

![конфигурация для бота](https://i.ibb.co/jP5tgcJH/image.png)
