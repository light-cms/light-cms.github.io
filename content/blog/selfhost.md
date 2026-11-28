---
title: Self-Hosting LightCMS
description: "Self-host LightCMS with SvelteKit, PostgreSQL, and a GitHub App: setup steps, environment variables, database migrations, and deployment."
section: Get Started
badge: Deploy
date: 2026-09-18T01:45:00.000Z
draft: false
tags:
  - lightcms
  - self-hosting
  - github_app
  - vercel
  - sveltekit
preview: /og-image.png
slug: selfhost
fmContentType: default
---

Self-hosting LightCMS requires running a SvelteKit application, connecting a PostgreSQL database, and configuring a GitHub App for repository access. Self-hosting gives you full control over your infrastructure and data flow, but it also makes you responsible for updates, backups, secrets, and uptime.

Verify each command and environment variable against the current [LightCMS repository](https://github.com/light-cms/lightcms) before deploying to production.

## Components you need

| Component             | Purpose                                                            | Required               |
| :-------------------- | :----------------------------------------------------------------- | :--------------------- |
| PostgreSQL            | Stores application data such as users, sessions, and installations | Yes                    |
| GitHub App            | Handles GitHub authentication and repository access                | Yes                    |
| SMTP provider         | Sends magic-link sign-in emails                                    | Depends on auth setup  |
| OpenAI-compatible API | Powers AI copilot features                                         | No                     |
| Speech-to-text API    | Powers voice dictation                                             | No                     |
| Image/CDN storage     | Stores uploaded media                                              | Depends on media setup |

## 1. Prerequisites

- **Runtime:** Node.js or Bun matching the versions required by the LightCMS repository.
- **PostgreSQL with TLS:** A TLS-capable PostgreSQL connection.
- **GitHub account:** Needed to create and install your GitHub App.
- **SMTP credentials:** Optional, required only if you enable magic-link email sign-in.

## 2. Create and configure the GitHub App

Create a GitHub App in your GitHub account or organization settings. Configure the callback, setup, and webhook URLs to match your deployed domain:

| Setting      | Example value                                    |
| :----------- | :----------------------------------------------- |
| Homepage URL | `https://<your-domain>`                          |
| Callback URL | `https://<your-domain>/api/auth/callback/github` |
| Setup URL    | `https://<your-domain>/github/setup`             |
| Webhook URL  | `https://<your-domain>/api/github/webhook`       |

Grant only the repository permissions LightCMS needs. After creation, record the App ID, client ID, client secret, webhook secret, and private key.

## 3. Configure environment variables

Create a `.env` file locally or configure environment variables in your hosting platform:

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

### Generating secrets

Generate `BETTER_AUTH_SECRET` and `GITHUB_WEBHOOK_SECRET` using either OpenSSL or Node.js:

```bash
openssl rand -hex 32
# or
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Image and CDN uploads

Images pasted or uploaded in the editor are sent to a Chevereto-compatible upload API. Hosted options include [FreeImage.host](https://freeimage.host) and [ImgBB](https://imgbb.com), or you can run your own Chevereto instance.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` is sent as the `key` query parameter unless `CDN_URL` already contains one. If the upload fails or the variables are unset, LightCMS falls back to embedding the image in the document as a base64 `data:` URL. This works for quick testing, but it bloats your Markdown files, so configure a CDN for real use.

### Optional: Voice-to-text, AI, and analytics

You can enable voice dictation using [Wit.ai](https://wit.ai/) or any OpenAI-compatible transcription API (such as [Groq](https://groq.com/), [AssemblyAI](https://assemblyai.com/), [ElevenLabs](https://elevenlabs.io/), [Deepgram](https://deepgram.com/), or [Sarvam](https://sarvam.ai/)).

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

## 4. Set up the database

LightCMS uses [Drizzle ORM](https://orm.drizzle.team). The schema lives in `src/lib/server/db/schema.ts`, and migrations are generated into the `drizzle` directory. With `DATABASE_URL` set, apply the migrations:

```bash
bun run db:migrate
```

During local development you can push the schema straight to the database without migration files:

```bash
bun run db:push
```

Other database scripts:

| Command               | Description                                   |
| :-------------------- | :-------------------------------------------- |
| `bun run db:generate` | Generate a migration after editing the schema |
| `bun run db:studio`   | Browse and edit your data in Drizzle Studio   |

## 5. Run locally

```bash
bun run dev
```

![LightCMS GitHub App permissions](https://i.ibb.co/Jw1bjLrr/image.png)

![Detailed repository permissions](https://i.ibb.co/0p7tk88V/image.png)

LightCMS will be available at `http://localhost:5173`. Set `BETTER_AUTH_URL` to this address and sign in with GitHub for the first time.

### Testing webhooks locally

GitHub cannot deliver webhooks to `localhost`, so forward them through [smee.io](https://smee.io):

1. Create a channel at [smee.io](https://smee.io) and copy its URL.
2. Set `WEBHOOK_PROXY_URL` in `.env` to that URL (`WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"`).
3. Set the Webhook URL in your GitHub App settings to the same URL.
4. Run the bot in a second terminal:

   ```bash
   bun run bot:start
   ```

The bot registers the same handlers as the production endpoint: content validation on `push`, review comments and labels on `pull_request`, and `installation` logging.

## 6. Production deployment

LightCMS is built with SvelteKit, so [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), and [Cloudflare Workers](https://www.cloudflare.com/) are supported deployment targets:

1. Import your Git repository into your deployment platform.
2. Add every required environment variable from [step 3](#3-configure-environment-variables) in your project settings, and set `BETTER_AUTH_URL` to your production URL.
3. Deploy and test the full flow: sign in, connect a repository, edit a file, commit a change, and confirm your static site build runs.

To verify the production build locally before deploying:

```bash
bun run build
bun run preview
```
