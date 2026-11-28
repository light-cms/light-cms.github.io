---
title: "Newsy: Eine GitHub Powered Newsletter-Plattform"
description: "Newsy ist eine Serverless, GitHub unterstützte Newsletter-Plattform, auf der Abonnenten und Ausgaben ohne Mailinglisten, SMTP oder eine Datenbank in Ihrem Repository leben."
tags:
  - neugierig
  - Newsletter
  - github
  - golang
  - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

Das Ausführen eines E-Mail-Newsletters für einen statischen Blog zwingt Sie in der Regel dazu, SMTP-Server, Bounce-Behandlung und eine Abonnentendatenbank zu verwalten. [Newsy](https://newsy.lightcms.me) überspringt diesen Overhead, indem du deinen Newsletter in deinem GitHub Repository ausführst.

Utterances, Giscus und Gitalk nutzten GitHub Issues, um Kommentare auf statische Seiten ohne Backend zu bringen. Newsy wendet die gleiche Idee für Newsletter an: Abonnenten und Post-Ankündigungen leben neben Ihrem Code. Der Trade-off ist, dass Leser ein GitHub Konto benötigen, um sich zu abonnieren.

## Was ändert ein Newsletter auf GitHub

1. Ihr Newsletter lebt neben Ihrem Website-Code im selben Repository.
2. GitHub verfolgt Abonnenten und Benachrichtigungen ohne eine separate Datenbank.
3. Sie verwalten keine Mail-Server, SPF/DKIM-Datensätze oder E-Mail-API-Quoten.
4. Sie können die Go-Binärdatei auf serverlosen Plattformen wie Vercel oder AWS Lambda ausführen oder kompilieren Sie es in WebAssembly mit [TinyGo](https://tinygo.org/) für JavaScript und TypeScript Laufzeiten.

Wenn du lieber beim Lesen schaust, gibt es einen Durchgang in der [Video-Anleitung](/misc/newsy/video/).

## Self-Hosting Deinen Bot

Folgen Sie diesen Schritten, um Newsy lokal auszuführen und mit Ihren GitHub Repositories zu verbinden.

### 1. Repository klonen

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

### 2. Umgebung einrichten

Newsy verwendet [mise](https://mise.jdx.dev) um Toolchain-Abhängigkeiten zu verwalten:

```bash
mise deps
```

### 3. Bauen und ausführen

Erstelle und führe das Go-Programm aus:

```bash
gehe Build
./newsy
```

### 4. Configure the GitHub App

1. Öffne `http://localhost:3000` in deinem Browser.
2. Wenn du deinen lokalen Server freigeben musst, nutze einen Tunneldienst wie [ngrok](https://ngrok.com), [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), oder SSH-Tunneling über [localhost.run](https://localhost.run/):

   ```bash
   ssh -R 80:localhost:3000 localhost.run
   ```

3. Öffne deine Tunnel URL (zum Beispiel `https://xyz.localhost.run`) in deinem Browser.

   [![Newsy Setup durchgehen](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

   Wenn du Probleme hast, überprüfe die [Videoanleitung](/misc/newsy/video/) oder wechsele zu einem anderen Tunnelanbieter.

4. Wähle einen eindeutigen App-Namen.
5. Fügen Sie die Tunnel URL in das Webhook URL-Feld ein und senden Sie es ab.
6. Behalte die `.env` Datei in deinem Projekt root sicher. Es sollte so aussehen:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> [!WICHTIG]
> Installieren Sie die GitHub App nur auf ausgewählten Repositories statt auf "Alle Repositories".

Sie können eine einzelne Newsy-Instanz in mehreren Repositories oder Benutzern teilen.

> [!HINWEIS]
> Newsy erstellt standardmäßig Ankündigungen, wenn Sie neue Inhaltsdateien hinzufügen (`.html`, `.md`, `.mdx`), nicht wenn Sie existierende Dateien bearbeiten.

## Newsy mit der gehosteten Seite testen

Du kannst die gehostete Instanz unter [newsy.lightcms.me](https://newsy.lightcms.me) testen, bevor du dich selbst Hosting.

[![Newsy Demo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## Deployment auf Vercel oder serverlose Laufzeiten

Sie können das Newsy-Projektarchiv direkt auf Vercel oder jeden serverlosen Host bereitstellen, der Go-Binärdateien unterstützt. Wenn Ihre Ziellaufzeit nur JavaScript oder TypeScript ausführt, kompilieren Sie Newsy in WebAssembly mit [TinyGo](https://tinygo.org/). Kostenlose Stufen auf Vercel und ähnlichen Plattformen sind typischerweise genug für persönliche Blogs.

## Den Demo-Newsletter abonnieren

Sie können den Leserfluss testen, indem Sie sich im Demo-Repository anmelden: [Auf GitHub](https://github.com/Pratyay360/blogs_md/issues/1).

## Erstelle deinen Abonnement-Button

Erzeugen Sie einen Inline-Abonnement-Button für Ihr Konto bei [newsy.lightcms.me](https://newsy.lightcms.me/) und gestalten Sie ihn bei Bedarf mit [Primer CSS](https://cdnjs.com/libraries/Primer).

> [!TIPP]
> Nachdem der Bot seine erste Newsletter-Ausgabe veröffentlicht hat, sperren Sie die Unterhaltung, so dass die Leser abonnieren können, ohne off-topic Kommentare hinzuzufügen.

![GitHub Ticket Unterhaltung](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![Newsy-Abonnement-Workflow](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)
