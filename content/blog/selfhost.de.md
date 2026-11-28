---
title: Selbst-Hosting LightCMS
description: "Self-Host LightCMS mit SvelteKit, PostgreSQL und einer GitHub App: Setup Schritte, Umgebungsvariablen, Datenbankmigrationen und Deployment."
section: Los geht's
badge: Deploy
date: 2026-09-18T01:45:00.000Z
draft: false
tags:
  - hellcms
  - selbst-Hosting
  - github_app
  - Paket
  - sveltekit
preview: /og-image.png
slug: selfhost
fmContentType: default
---

Selbst-Hosting von LightCMS erfordert das Ausführen einer SvelteKit-Anwendung, das Verbinden einer PostgreSQL-Datenbank und die Konfiguration einer GitHub App für den Zugriff auf das Projektarchiv. Selbst-Hosting gibt Ihnen die volle Kontrolle über Ihre Infrastruktur und den Datenfluss, aber es macht Sie auch verantwortlich für Updates, Backups, Geheimnisse und Uptime.

Überprüfen Sie jede Befehls- und Umgebungsvariable mit dem aktuellen [LightCMS Repository](https://github.com/light-cms/lightcms) bevor Sie in die Produktion verteilen.

## Komponenten, die Sie benötigen

| Komponente            | Zweck                                                                | Benötigt                        |
| :-------------------- | :------------------------------------------------------------------- | :------------------------------ |
| PostgreSQL            | Speichert Anwendungsdaten wie Benutzer, Sitzungen und Installationen | Ja                              |
| GitHub App            | Umgang mit GitHub Authentifizierung und Repository-Zugriff           | Ja                              |
| SMTP-Anbieter         | Sendet Magic-Link-Anmeldemails                                       | Abhängig vom Auth Setup         |
| OpenAI-kompatible API | Powers KI Copilot Features                                           | Nein                            |
| Sprach-zu-Text API    | Diktation der Mächte                                                 | Nein                            |
| Bild/CDN-Speicher     | Hochgeladene Medien speichern                                        | Abhängig von Medien-Einrichtung |

## 1. Voraussetzungen

- **Runtime:** Node.js oder Bun entspricht den vom LightCMS Repository benötigten Versionen.
- **PostgreSQL mit TLS:** Eine TLS-fähige PostgreSQL-Verbindung.
- **GitHub Konto:** Benötigt um die GitHub App zu erstellen und zu installieren.
- **SMTP Anmeldeinformationen:** Optional, wird nur benötigt, wenn du die Anmeldung per E-Mail mit magic-link aktivierst.

## 2. Erstelle und konfiguriere die GitHub App

Erstellen Sie eine GitHub App in Ihren GitHub Konto- oder Organisationseinstellungen. Konfigurieren Sie die Callback, Setup und Webhook-URLs auf Ihre angegebene Domain:

| Einstellung  | Beispielwert                                     |
| :----------- | :----------------------------------------------- |
| Homepage URL | `https://<your-domain>`                          |
| Callback URL | `https://<your-domain>/api/auth/callback/github` |
| Setup URL    | `https://<your-domain>/github/setup`             |
| Webhook-URL  | `https://<your-domain>/api/github/webhook`       |

Gewähren Sie nur die Berechtigungen LightCMS Anforderungen. Nach der Erstellung tragen Sie die App ID, Client-ID, Client-Geheimnis, Webhook Geheimnis und privaten Schlüssel auf.

## 3. Umgebungsvariablen konfigurieren

Erstelle eine `.env`-Datei lokal oder konfiguriere Umgebungsvariablen in deiner Hosting-Plattform:

```bash
# Authentifizierung
BETTER_AUTH_SECRET="<random-secret>"
BETTER_AUTH_URL="https://<your-domain>"

# Datenbank
DATABASE_URL="postgresql://user:password@host:5432/lightcms?sslmode=require"

# GitHub App
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1. xxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----"
```

### Generiere Geheimnisse

Generiere `BETTER_AUTH_SECRET` und `GITHUB_WEBHOOK_SECRET` mit OpenSSL oder Node.js:

```bash
openssl rand -hex 32
# oder
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Image und CDN hochladen

Im Editor eingefügte oder hochgeladene Bilder werden an eine Chevereto-kompatible Upload-API gesendet. Die Hosted-Optionen beinhalten [FreeImage.host](https://freeimage.host) und [ImgBB](https://imgbb.com), oder Sie können Ihre eigene Chevereto-Instanz ausführen.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` wird als Abfrageparameter `key` gesendet, es sei denn, `CDN_URL` enthält bereits einen. Wenn der Upload fehlgeschlagen ist oder die Variablen nicht gesetzt sind, fällt LightCMS zurück auf das Einbetten des Bildes als Base64 `data:` URL. Dies funktioniert für schnelle Tests, aber es aufgebläht Ihre Markdown-Dateien, so konfigurieren Sie eine CDN für den echten Gebrauch.

### Optional: Voice-to-text, KI und Analyse

Du kannst Sprachdiktatur mit [Wit.ai](https://wit.ai/) oder einer OpenAI-kompatiblen Transkriptions-API (wie [Groq](https://groq.com/), aktivieren [AssemblyAI](https://assemblyai.com/), [ElevenLabs](https://elevenlabs.io/), [Deepgram](https://deepgram.com/), oder [Sarvam](https://sarvam.ai/)).

```bash
# Wit. i
WIT_AI_TOKEN="<server-access-token>"
WIT_AI_CLIENT_TOKEN="<client-access-token>"

# OpenAI-kompatible AI & Sprache
OPEN_AI_ENDPOINT=""
OPEN_AI_MODEL=""
OPEN_AI_APIKEY=""
SPEECH_ENDPOINT=""
SPEECH_MODEL=""
SPEECH_API_KEY=""

# PostHog Analytics (optional)
PUBLIC_POSTHOG_KEY="<your-posthog-project-key>"
" 
 PUBLIC_POSTHOG_HOST="<your-posthog-host>
```

## 4. Datenbank einrichten

LightCMS verwendet [Drizzle ORM](https://orm.drizzle.team). Das Schema lebt in `src/lib/server/db/schema.ts`, und Migrationen werden in das Verzeichnis `drizzle` generiert. Wenn `DATABASE_URL` gesetzt ist, wenden Sie die Migration an:

```bash
bun run db:migrate
```

Während der lokalen Entwicklung können Sie das Schema direkt in die Datenbank ohne Migrationsdateien verschieben:

```bash
bun ausführen db:push
```

Andere Datenbank-Skripte:

| Befehl                | Beschreibung                                                |
| :-------------------- | :---------------------------------------------------------- |
| `bun run db:generate` | Eine Migration nach dem Bearbeiten des Schemas generieren   |
| `bun run db:studio`   | Durchsuchen und bearbeiten Sie Ihre Daten in Drizzle Studio |

## 5. Lokal ausführen

```bash
bun run dev
```

![LightCMS GitHub App permissions](https://i.ibb.co/Jw1bjLrr/image.png)

![Detaillierte Repository-Berechtigungen](https://i.ibb.co/0p7tk88V/image.png)

LightCMS wird unter `http://localhost:5173` verfügbar sein. Setze `BETTER_AUTH_URL` auf diese Adresse und melde dich zum ersten Mal mit GitHub an.

### Webhooks lokal testen

GitHub kann Webhooks nicht an `localhost` übergeben, also leiten Sie sie über [smee.io](https://smee.io):

1. Erstelle einen Kanal unter [smee.io](https://smee.io) und kopiere seine URL.
2. Setze `WEBHOOK_PROXY_URL` in `.env` auf diese URL (`WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"`).
3. Legen Sie die Webhook-URL in den GitHub App-Einstellungen auf die gleiche URL fest.
4. Den Bot in einem zweiten Terminal ausführen:

   ```bash
   bun run bot:start
   ```

Der Bot registriert die gleichen Handler wie der Produktionsendpunkt: Inhaltsvalidierung auf `push`, Kommentare und Etiketten auf `pull_request` und `installation` Protokollierung.

## 6. Produktionseinsatz

LightCMS ist mit SvelteKit gebaut, also werden [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/) und [Cloudflare Workers](https://www.cloudflare.com/) unterstützte Bereitstellungsziele:

1. Importieren Sie Ihr Git-Repository in Ihre Bereitstellungsplattform.
2. Füge jede benötigte Umgebungsvariable aus [Schritt 3](#3-configure-environment-variables) in deine Projekteinstellungen hinzu und setze `BETTER_AUTH_URL` auf deine Produktions-URL.
3. Deploy and test the full flow: login in, connect a repository, edit a file, commit a change and confirm your static site build runs.

Um das Produktions-Build vor dem Deployment lokal zu überprüfen:

```bash
bun run build
bun run Vorschau
```
