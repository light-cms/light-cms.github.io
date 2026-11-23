---
title: "Self-Hosting LightCMS"
description: "How to self-host LightCMS with a GitHub App, PostgreSQL, environment variables, and a deployment target for SvelteKit."
section: Get Started
badge: Deploy
date: "2026-09-18T01:45:00.000Z"
draft: false
tags:
  - lightcms
  - self-hosting
  - github_app
  - vercel
  - sveltekit
preview: /og-image.png
slug: selfhost
---

You can self-host LightCMS by running the SvelteKit application, connecting a PostgreSQL database, and configuring a GitHub App for repository access. The steps below describe the expected setup; verify each command, environment variable, and permission against the current LightCMS repository before using it in production. [VERIFY: confirm current self-hosting steps, required env vars, and deployment requirements in the LightCMS repo/docs.]

## Components you need

| Component | Purpose | Required |
| :--- | :--- | :--- |
| **PostgreSQL** | Stores application data such as users, sessions, and installations [VERIFY] | Yes |
| **GitHub App** | Handles GitHub authentication and repository access [VERIFY] | Yes |
| **SMTP provider** | Sends magic-link sign-in emails [VERIFY] | Depends on auth setup |
| **OpenAI-compatible API** | Powers AI copilot features [VERIFY] | No |
| **Speech-to-text API** | Powers voice dictation [VERIFY] | No |
| **Image/CDN storage** | Stores uploaded media [VERIFY] | Depends on media setup |

## Prerequisites

- **Node.js/Bun/runtime tools:** Use the versions required by the current LightCMS repository. [VERIFY]
- **PostgreSQL with TLS:** The app expects a TLS-capable database connection. [VERIFY: confirm current `DATABASE_URL` and SSL requirements.]
- **GitHub account:** Needed to create and install a GitHub App.
- **SMTP credentials:** Needed if you enable magic-link email sign-in. [VERIFY]

## Create and configure the GitHub App

Create a GitHub App in your GitHub account or organization settings. Configure the callback, setup, and webhook URLs to match your deployed domain. [VERIFY: confirm exact URL paths and required webhook events.]

| Setting | Example value |
| :--- | :--- |
| **Homepage URL** | `https://<your-domain>` |
| **Callback URL** | `https://<your-domain>/api/auth/callback/github` [VERIFY] |
| **Setup URL** | `https://<your-domain>/github/setup` [VERIFY] |
| **Webhook URL** | `https://<your-domain>/api/github/webhook` [VERIFY] |

Grant only the repository permissions LightCMS needs. [VERIFY: confirm current required permissions and event subscriptions.] After creation, record the App ID, client ID, client secret, webhook secret, and private key.

## Configure environment variables

Create a `.env` file or configure environment variables in your hosting platform. The exact variable names can change, so use the repository's current configuration reference as the source of truth. [VERIFY]

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

Add optional variables only for features you enable, such as SMTP, AI providers, speech-to-text, analytics, or image storage. [VERIFY]

## Deploy and verify

1. **Install dependencies:** Use the repository's documented package manager and install command. [VERIFY]
2. **Run database migrations:** Apply the current schema/migration command before first launch. [VERIFY]
3. **Start the app locally:** Confirm sign-in, repository access, and content editing work.
4. **Deploy to a host:** Use a SvelteKit-compatible deployment target. [VERIFY: confirm supported adapters/hosts.]
5. **Test the full flow:** Sign in, connect a repository, edit a file, commit a change, and confirm your site build runs.

Self-hosting gives you control over infrastructure and data flow, but it also makes you responsible for updates, backups, secrets, and uptime. If you only need to evaluate LightCMS, start with a local or staging deployment before exposing it to production users.

Images pasted or uploaded in the editor are sent to a [Chevereto](https://chevereto.com)-compatible upload API.
Hosted options include [FreeImage.host](https://freeimage.host) and [ImgBB](https://imgbb.com), or you can run
your own Chevereto instance.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` is sent as the `key` query parameter unless `CDN_URL` Already contains one. If the upload fails or the
variables are unset, [LightCMS](https://lightcms.me) Falls back to embedding the image in the document as a base64 `data:` URL. This works,
but it makes your Markdown files much larger, so configure a CDN for real use.

### Local webhook forwarding (development only)

```bash
WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"
```

This is read by Probot, not by the SvelteKit app. See [Testing webhooks locally](#testing-webhooks-locally).

### Generating secrets

Use any of these to generate `BETTER_AUTH_SECRET` and `GITHUB_WEBHOOK_SECRET`:

```bash
openssl rand -hex 32
# or
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 4. Set up the database

[LightCMS](https://lightcms.me) uses [Drizzle ORM](https://orm.drizzle.team). The schema lives in `src/lib/server/db/schema.ts`, and migrations
are generated into the `drizzle` directory. With `DATABASE_URL` set, apply the migrations:

```bash
bun run db:migrate
```

During local development you can instead push the schema straight to the database, without migration files:

```bash
bun run db:push
```

Other database scripts:


| Command               | Description                                   |
| --------------------- | --------------------------------------------- |
| `bun run db:generate` | Generate a migration after editing the schema |
| `bun run db:studio`   | Browse and edit your data in Drizzle Studio   |


## 5. Run locally

```bash
bun run dev
```

![imagebot](https://i.ibb.co/Jw1bjLrr/image.png)

![permissions detailed](https://i.ibb.co/0p7tk88V/image.png)

[LightCMS](https://lightcms.me) is now available at `http://localhost:5173`. Set `BETTER_AUTH_URL` to this address, and sign in with GitHub for the first time.

### Testing webhooks locally

GitHub cannot deliver webhooks to `localhost`, so forward them through [smee.io](https://smee.io):

1. Create a channel at [smee.io](https://smee.io) and copy its URL.
2. Set `WEBHOOK_PROXY_URL` in `.env` to that URL.
3. Set the **Webhook URL** in your GitHub App settings to the same URL.
4. Run the bot in a second terminal:
   ```bash
    bun run bot:start
   ```

The bot registers the same handlers as the production endpoint: content validation on `push`, review comments and
labels on `pull_request`, and `installation` Logging.

## 6. Production deployment

The project is configured with sveltekit which is very vendor agnostic, so
[Vercel](https://vercel.com) [Netlify](https://www.netlify.com/) [Cloudflare workers](https://www.cloudflare.com/) All are supported deployment targets out of the box.

1. Import your Git repository into deployment platform.
2. Add every environment variable from [step 3](#3-configure-environment-variables) in **Project Settings → Environment
 Variables**. Set `BETTER_AUTH_URL` to your production URL.
3. Deploy.

To verify the production build locally:

```bash
bun run build
bun run preview
```

## Troubleshooting

Make a account with [Wit.ai](https://wit.ai/) it's a free service by meta |
And any openai compatible API for transcription. |
One can use [groq](https://groq.com/) or [assemblyai](https://assemblyai.com/) or |
[elevenlabs](https://elevenlabs.io/) or [deepgram](https://deepgram.com/) or [sarvam](https://sarvam.ai/). |

## For development purpose you can use the following credentials for posthog

PUBLIC\_POSTHOG\_KEY = "phc\_AS2JXQsqEwNNreH5kra5Eefd5TijExE5eiLfwdzXLhPg"
PUBLIC\_POSTHOG\_URL = "[https://us.i.posthog.com](https://us.i.posthog.com)"

```bash
PUBLIC_POSTHOG_KEY=phc_AS2JXQsqEwNNreH5kra5Eefd5TijExE5eiLfwdzXLhPg
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

[https://wit.ai](https://wit.ai)

![wit.ai](https://i.ibb.co/MySskPTt/image.png)

```bash
WIT_AI_TOKEN="Server access token"
WIT_AI_CLIENT_TOKEN="Client access token"
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

![configuration for the bot](https://i.ibb.co/jP5tgcJH/image.png)
