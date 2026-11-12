---
title: Selbst-Hosting LightCMS
description: Leitfaden zum Selbst-Host LightCMS.
serial: 4
section: Los geht's
badge: Deploy
date: 18.09.20T01:45:00Z
draft: false
tags:
  - selfhost
  - hellcms
  - postgresql
  - einrichten
keywords:
  - hellcms
  - probot
  - selbst-Hosting
  - github_app
  - Paket
  - sveltekit
preview: /og-image.png
canonical: https://www.lightcms.me/docs
---

Willst du [LightCMS](https://lightcms.me) vollständig unter deiner Kontrolle? [LightCMS](https://lightcms.me) ist eine [SvelteKit](https://svelte.dev) Anwendung, damit sie überall eingesetzt werden kann unterstützt durch eine postgre Datenbank und eine GitHub App(octokit). Dein Inhalt hinterlässt niemals deine eigenen GitHub Repositories.

Diese Anleitung führt Sie durch alles, was Sie benötigen, um Ihre eigene Instanz auszuführen: Erstellen der GitHub App, Bereitstellung von
PostgreSQL, Konfigurieren von Umgebungsvariablen und Bereitstellen.

## Wie die Teile zusammen passen

| Komponente            | Zweck                                                                              | Benötigt                            |
| --------------------- | ---------------------------------------------------------------------------------- | ----------------------------------- |
| PostgreSQL            | Speichert Benutzer, Sitzungen, Passkeys und GitHub Installationen                  | Ja                                  |
| GitHub App            | Liest und schreibt Inhalte in deinen Repositories und signiert Benutzer mit GitHub | Ja                                  |
| SMTP-Anbieter         | Sendet Magic-Link-Anmeldemails                                                     | Ja, für Magic-Link-Anmeldung        |
| OpenAI-kompatible API | Macht den KI Copilot                                                               | Optional                            |
| Sprach-zu-Text API    | Diktation der Mächte                                                               | Optional                            |
| Bild CDN              | Hosts Bilder im Editor hochgeladen                                                 | Optional                            |
| PostHog               | Produktanalytik und KI-Beobachtung                                                 | Nur in der Entwicklung erforderlich |

## Voraussetzungen

- **[mise](https://mise.jdx.dev)**: Installiert und verwaltet Abhängigkeiten von Aufgaben. Ich nehme an, Sie haben es installiert.
- **PostgreSQL**: eine Datenbank, die TLS-Verbindungen akzeptiert. Cloud-Anbieter wie [Neon](https://neon.tech),
  [Supabase](https://supabase.com) oder [Nile](https://thenile.dev) funktionieren gut. Siehe
  [awesome-free-postgres](https://github.com/alexeyfv/awesome-free-postgres) für kostenlose Optionen.
- **GitHub Konto**: benötigt um die GitHub App zu registrieren.
- **SMTP-Provider** (für magische Links): Wenn du eine Domain hast, wird [Resend](https://resend.com) eine tolle Erfahrung haben
  wenn nicht, dann [Zoho Mail](https://www.zoho.com/mail) Denken Sie daran, ein App-Passwort zu erstellen.

> **TLS ist obligatorisch.** Die Anwendung verbindet sich mit PostgreSQL mit `ssl: "require"`. Eine lokale PostgreSQL-Instanz
> ohne TLS aktiviert wird abgelehnt, also verwenden Sie eine gehostete Datenbank oder konfigurieren Sie TLS auf Ihrem eigenen Server.

## 1. Projektarchiv forken und Abhängigkeiten installieren

Repository klonen und Abhängigkeiten installieren:

```bash
cd lightcms
mise trust
mise deps
mise run install
```

Installieren Sie die Toolchain und die Projektabhängigkeiten:

```bash
mise trust
mise deps
mise run install
```

## 2. Create the GitHub App

[LightCMS](https://lightcms.me) verwendet eine GitHub App für zwei Dinge: die Anmeldung von Benutzern mit GitHub (OAuth) und das Handeln in Ihrem Namen
durch Installationen. Sie können es mit dem eingebauten Probot Installationsassistenten oder von Hand erstellen.

### Option A: Probot Einrichtungsassistent

starte den Bot mit:

```bash
mise run Bot
```

Ohne Anmeldedaten in `.env`, startet Probot einen Setup-Server unter `http://localhost:3000`:

1. Öffne `http://localhost:3000` und klicke auf **GitHub App**.
2. Wählen Sie Ihr persönliches Konto oder eine Organisation.
3. Bestätigen. Probot erstellt die App und schreibt ihre Anmeldedaten in deine `.env`-Datei.

Der Assistent setzt die Webhook URL der App auf einen Smee Kanal (oder `http://localhost:3000/`), nicht auf [LightCMS](https://lightcms.me)'s Webhook
Endpunkt. Aktualisieren Sie es in den GitHub App-Einstellungen bevor Sie live gehen (siehe [Produktionsverteilung](#6-production-deployment)).

### Option B: Manuelles Setup

Erstelle die App in **GitHub Einstellungen → Entwicklereinstellungen → GitHub Apps → Neue GitHub App** mit diesen Werten:

| Einstellung       | Wert                                                                           |
| ----------------- | ------------------------------------------------------------------------------ |
| Homepage URL      | `https://<your-domain>`                                                        |
| Callback URL      | `https://<your-domain>/api/auth/callback/github`                               |
| Setup URL         | `https://<your-domain>/github/setup`                                           |
| Webhook-URL       | `https://<your-domain>/api/github/webhook`                                     |
| Webhook Geheimnis | Ein zufälliges Geheimnis (siehe [Geheimnisse generieren](#generating-secrets)) |

**Repository-Berechtigungen**

| Berechtigung     | Zugang              | Verwendet für                                              |
| ---------------- | ------------------- | ---------------------------------------------------------- |
| `Inhalte`        | Lesen und schreiben | Dateien lesen und übertragen                               |
| "Probleme"       | Lesen und schreiben | Kommentare und Beschriftungen bei Pull-Requests überprüfen |
| `Ziehe Anfragen` | Nur lesen           | Liste der geänderten Dateien in einem Pull-Request         |
| `Commit status`  | Lesen und schreiben | Inhaltsüberprüfung bei Pushes melden                       |
| `Metadaten`      | Nur lesen           | Pflichtfeld für jede GitHub App                            |

**Abonniere Ereignisse:** `Push` und `Pull request`. Installationsereignisse werden automatisch an GitHub Apps ausgeliefert.

Nach dem Erstellen der App beachte die **App ID**, generiere ein **Client Geheimnis**, und generiere und lade einen **privaten Schlüssel**
(`.pem`).

## 3. Umgebungsvariablen konfigurieren

Erstelle eine `.env`-Datei im Projekt-Root. Das Projektarchiv liefert keine verwendbare Beispieldatei. Verwenden Sie daher die nachfolgende Referenz .

### Benötigt

```bash
# ---------------------------------------------------------------------------
# Authentifizierung (Better Auth)
# ---------------------------------------------------------------------------
BETTER_AUTH_SECRET="<output of: openssl rand -hex 32>"
# Public URL of this instance. Muss mit dem Besuch von URL-Benutzern übereinstimmen.
BETTER_AUTH_URL="http://localhost:5173"

# ---------------------------------------------------------------------------
# Database (PostgreSQL, TLS erforderlich)
# ---------------------------------------------------------------------------
DATABASE_URL="postgresql://user:password@host:5432/lightcms? slmode=require"

# ---------------------------------------------------------------------------
# GitHub App
# -----------------------------------------------------------
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1. xxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----"
```

`GITHUB_PRIVATE_KEY` ist der vollständige PEM-Inhalt. Behalte die Zeilenumbrüche und wickele den Wert in doppelte Anführungszeichen. So schreibt
der Probot-Assistent.

### Für die Entwicklung erforderlich

[LightCMS](https://lightcms.me) meldet Analysen und Fehler an [PostHog](https://posthog.com). Wenn die Schlüssel fehlen, wird die App **in die Entwicklung** geworfen, um zu verhindern, dass die Ereignisse stillschweigend fallen gelassen werden. In der Produktion sind sie optional, und die Telemetrie wird übersprungen, wenn sie nicht gesetzt sind.

```bash
PUBLIC_POSTHOG_KEY="phc_xxxxxxxxxx"
PUBLIC_POSTHOG_HOST="https://us.i.posthog.com"
```

### E-Mail: erforderlich für Magic-Link-Anmeldung

Magic Links werden über SMTP mit [Nodemailer]gesendet (https://nodemailer.com). Senden fehlgeschlagen mit einem Konfigurationsfehler, wenn
`MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` oder `MAIL_FROM` fehlen.

```bash
MAIL_HOST="smtp.resend.com"
# Standardwerte 587, wenn
MAIL_PORT="465"
# "true", "1", "yes" oder "on" aktiviert implizites TLS. Wenn weggelassen, ist TLS nur für Port 465 aktiviert.
MAIL_SECURE="1"
MAIL_USER="Weitersenden"
MAIL_PASS="<smtp-password-or-api-key>"
MAIL_FROM="LightCMS <noreply@yourdomain.com>"
```

### Optional: KI Copilot

Das Copilot verwendet jede OpenAI-kompatible Chat-Vervollständigungs-API. Alle drei Variablen werden benötigt, damit es funktioniert.

```bash
OPEN_AI_ENDPOINT="https://api.openai.com/v1"
OPEN_AI_APIKEY="sk-..."
OPEN_AI_MODEL="gpt-4o-mini"
```

Jeder Provider, der eine OpenAI-kompatible API aufdeckt, zum Beispiel [OpenAI](https://platform.openai.com),
[OpenRouter](https://openrouter.ai) (`https://openrouter.ai/api/v1`) oder [NVIDIA NIM](https://build.nvidia.com).

### Optional: Sprach-zu-Text Diktation

[LightCMS](https://lightcms.me) unterstützt zwei Transkriptions-Backends. Wenn beide konfiguriert sind, wird das OpenAI-kompatible Backend verwendet.

**OpenAI-kompatible Transkription.** Es wird ausgewählt, wenn `SPEECH_API_KEY` gesetzt ist und auch `SPEECH_MODEL` benötigt:

```bash
SPEECH_API_KEY="<api-key>"
SPEECH_MODEL="whisper-1"
# Basis-URL des Providers. Erlaube ihn, den OpenAI-Standard zu verwenden.
SPEECH_ENDPOINT="https://api.openai.com/v1"
```

Zeigen Sie `SPEECH_ENDPOINT` auf jeden Provider, der die API `/audio/transcriptions` implementiert, und setzen Sie `SPEECH_MODEL` auf ein
-Modell, das der Provider anbietet. Eine nachfolgende `/audio/transcriptions` im Endpunkt wird automatisch entfernt.

**[Wit.ai](https://wit.ai)** wird verwendet, wenn `SPEECH_API_KEY` nicht gesetzt ist:

```bash
Mit AI_TOKEN="<wit-ai-server-access-token>"
```

Wenn keiner der beiden konfiguriert ist, ist Diktation nicht verfügbar.

### Optional: Bild-Uploads (CDN)

Die im Editor eingefügten oder hochgeladenen Bilder werden an eine [Chevereto](https://chevereto.com)-kompatible Upload-API gesendet.
Die Hosted-Optionen beinhalten [FreeImage.host](https://freeimage.host) und [ImgBB](https://imgbb.com), oder Sie können
Ihre eigene Chevereto-Instanz ausführen.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` wird als Abfrageparameter `key` gesendet, es sei denn, `CDN_URL` enthält bereits einen. Wenn der Upload fehlgeschlagen ist oder die
Variablen nicht gesetzt sind [LightCMS](https://lightcms.me) fällt zurück auf das Einbetten des Bildes als Base64 `data:` URL. Dies funktioniert,
, aber es macht Ihre Markdown-Dateien viel größer, so konfigurieren Sie eine CDN für den echten Gebrauch.

### Lokale Webhook-Weiterleitung (nur Entwicklung)

```bash
WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"
```

Dies wird von Probot gelesen und nicht von der SvelteKit App. Siehe [Testing webhooks locally](#testing-webhooks-locally).

### Generiere Geheimnisse

Verwende eines dieser Elemente, um `BETTER_AUTH_SECRET` und `GITHUB_WEBHOOK_SECRET` zu generieren:

```bash
openssl rand -hex 32
# oder
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 4. Datenbank einrichten

[LightCMS](https://lightcms.me) benutzt [Drizzle ORM](https://orm.drizzle.team). Das Schema lebt in `src/lib/server/db/schema.ts`, und Migrationen
werden in das Verzeichnis `drizzle` generiert. Wenn `DATABASE_URL` gesetzt ist, wenden Sie die Migration an:

```bash
bun run db:migrate
```

Während der lokalen Entwicklung können Sie stattdessen das Schema direkt in die Datenbank schieben, ohne Migrationsdateien:

```bash
bun ausführen db:push
```

Andere Datenbank-Skripte:

| Befehl                | Beschreibung                                                |
| --------------------- | ----------------------------------------------------------- |
| `bun run db:generate` | Eine Migration nach dem Bearbeiten des Schemas generieren   |
| `bun run db:studio`   | Durchsuchen und bearbeiten Sie Ihre Daten in Drizzle Studio |

## 5. Lokal ausführen

```bash
bun run dev
```

![imagebot](https://i.ibb.co/Jw1bjLrr/image.png)

![Berechtigungen detailliert](https://i.ibb.co/0p7tk88V/image.png)

[LightCMS](https://lightcms.me) ist jetzt unter `http://localhost:5173` verfügbar. Setze `BETTER_AUTH_URL` auf diese Adresse und melde dich zum ersten Mal mit GitHub an.

### Webhooks lokal testen

GitHub kann Webhooks nicht an `localhost` übergeben, also leiten Sie sie über [smee.io](https://smee.io):

1. Erstelle einen Kanal unter [smee.io](https://smee.io) und kopiere seine URL.
2. Setze `WEBHOOK_PROXY_URL` in `.env` auf diese URL.
3. Setze die **Webhook URL** in den GitHub App-Einstellungen auf die gleiche URL.
4. Den Bot in einem zweiten Terminal ausführen:

   ```bash
   bun run bot:start
   ```

Der Bot registriert die gleichen Handler wie der Produktions-Endpunkt: Inhaltsvalidierung auf `Push`, Überprüfungskommentare und
Beschriftungen auf `pull_request` und `installation` Protokollierung.

## 6. Produktionseinsatz

Das Projekt ist mit sveltekit konfiguriert, das sehr vendor agnostisch ist so
[Vercel](https://vercel.com) [netlify](https://www.netlify.com/) [cloudflare workers](https://www.cloudflare.com/) alle werden Bereitstellungsziele aus der Box unterstützt.

1. Importieren Sie Ihr Git-Repository in die Bereitstellungsplattform.
2. Fügen Sie jede Umgebungsvariable aus [Schritt 3](#3-configure-environment-variables) in **Projekteinstellungen → Umwelt
   Variablen hinzu.** Setze `BETTER_AUTH_URL` auf deine Produktions-URL.
3. Deploy.

Um die Produktion lokal zu überprüfen:

```bash
bun run build
bun run Vorschau
```

## Fehlerbehebung

Erstellen Sie ein Konto mit [Wit.ai](https://wit.ai/), es ist ein kostenloser Dienst von Meta |
und jeder Openai-kompatiblen API für die Transkription. |
Man kann [groq](https://groq.com/) oder [assemblyai](https://assemblyai.com/) oder |
[elevenlabs](https://elevenlabs.io/) oder [deepgram](https://deepgram.com/) oder [sarvam](https://sarvam.ai/). |

## Zu Entwicklungszwecken können Sie folgende Anmeldeinformationen für posthog verwenden

PUBLIC_POSTHOG_KEY = "phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg"
PUBLIC_POSTHOG_URL = "https://us.i.posthog.com"

```bash
PUBLIC_POSTHOG_KEY=phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

https://wit.ai

![wit.ai](https://i.ibb.co/MySskPTt/image.png)

```bash
WIT_AI_TOKEN="Server-Zugangs-Token"
WIT_AI_CLIENT_TOKEN="Client Zugangs-Token"
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

![Konfiguration für den Bot](https://i.ibb.co/jP5tgcJH/image.png)
