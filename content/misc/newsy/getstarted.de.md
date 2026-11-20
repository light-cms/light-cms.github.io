---
title: 'Getting Started with Newsy: A GitHub Powered Newsletter Platform'
description: 'Newsy is a serverless, GitHub powered newsletter platform: subscribers and issues live in your repository, with no mailing list service, SMTP, or database to run.'
keywords:
  - neugierig
  - github newsletter
  - serverless newsletter
  - newsletter platform
  - github issues newsletter
preview: /og-image.webp
taxonomies:
  tags:
    - neugierig
    - Newsletter
    - github
    - golang
    - webassembly
slug: getstarted
date: '2026-11-19T10:59:17.693Z'
---

Einführung von [Newsy](https://newsy.lightcms.me), einer Open-Source-Newsletter-Plattform powered by GitHub.

Newsy ist stark inspiriert von Tools wie Utterances, Giscus und Gitalk, die sich neue Kommentare für statische Sites mit GitHub Issues vorstellten.
Newsy takes the same GitHub driven approach and brings it to newsletters:
instead of relying on external services or maintaining a separate mailing list,
your newsletter lives right alongside your code in your GitHub repository.

Why GitHub?

1. Dein Newsletter lebt direkt neben deinem Code in deinem GitHub Repository.
2. Keine Verwaltung der Mailingliste. Abonnenten und Updates werden in GitHub verfolgt.
3. Keine teuren E-Mail-APIs. Sie benötigen keinen separaten E-Mail-Abonnement-Service.
4. Keine E-Mail-Zustellung. Sie müssen keine SMTP, Spamfilter oder Domain-Reputation verwalten.
5. Keine Abonnement-Datenbank. Sie benötigen keine separate Datenbank für Abonnements und Abmeldungen.
6. Sie konzentrieren sich nur auf das Schreiben. GitHub und Newsy kümmern sich um den Rest.

Veröffentlichungen sollten für jeden zugänglich sein. Es ist nicht nötig, eine hohe Gebühr an eine SaaS-Plattform zu zahlen oder stundenlang mit der E-Mail-Infrastruktur zu kämpfen, nur um Updates mit Ihren Lesern zu teilen.

- Deploys on server less (e.g., Vercel, AWS Lambda) for production.
- Web Assembly support: Compile the Go binary to Web Assembly with [TinyGo](https://tinygo.org/) and run it on server less platforms that support JavaScript or Type Script runtime.

A video walkthrough of the local setup is available in the [video guide](/misc/newsy/video/).

## Self-Host dein Bot

Folgen Sie diesen Schritten, um Newsy auszuführen und mit Ihren GitHub Repositories zu verbinden.

#### 1. Das Repository klonen

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

#### 2. Umgebung einrichten

We use [mise](https://mise.jdx.dev) To keep the development environment
consistent and easy to manage:

```bash
mise deps
```

#### 3. Bauen und ausführen

Erstelle und führe das Go-Programm aus:

```bash
gehe Build
./newsy
```

#### 4. Configure the GitHub App

1. Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.
2. If you need to expose your local server, use a tunneling service such as [ngrok](https://ngrok.com),
   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. Öffne deine Tunnel URL (z.B. `https://xyz.localhost.run`) in deinem Browser:

[![Newsletter-github-Issues unterstützt](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(If you run into issues, refer to the [video guide](/misc/newsy/video/) or try an alternative tunneling provider.)_

4. Wähle einen **App Name** (vorzugsweise einzigartig).
5. Fügen Sie die Tunneladresse in das Feld **Webhook URL** ein und senden Sie es ab.
6. Eine `.env`-Datei, die die Geheimnisse deiner App enthält, wird in deinem Projekt-Root generiert. Behalte diese Datei sicher.

Die generierte `.env` sollte so aussehen:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!WICHTIG\]
> Installieren Sie die GitHub App nur auf **bestimmten Repository**, anstatt auf "Alle Repositories".

Jede Instanz von Newsy kann über mehrere Repositories oder Benutzer geteilt werden.

> \[!NOTE\]
> Standardmäßig löst Newsy nur Kommentare und Probleme beim Erstellen neuer Inhaltsdateien (`. tml`, `.md`, `.mdx`, etc.), und nicht auf nachfolgende Bearbeitungen.

---

## Newsy über die gehostete Instanz testen

Du kannst Newsy direkt mit der gehosteten Version testen: [https://newsy.lightcms.me](https://newsy.lightcms.me)

[![Newsy Demo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

---

## Deploy on Vercel

![Deploy with Vercel](https://vercel.com/button)

Aktualisiere die Webhook-URL deiner GitHub App von `*.localhost.run` auf deine Produktionsdomain: `https://<your-app>.vercel.app`.

> \[!WARNUNG\]
> Verwenden Sie nur die Deploy-Schaltfläche, wenn Sie bereits eine konfigurierte GitHub App haben und ihre Anmeldedaten bereit sind. Andernfalls folgen Sie den [Self-Host Your Bot](#self-host-your-bot) Schritten zuerst, um einen zu erstellen.

---

## Betriebskosten &amp; Ressourcennutzung

Vercel und viele andere Cloud-Anbieter bieten kostenlose Stufen für serverlose Arbeitsbelastungen. Sie können auch Newsy auf JavaScript oder nur TypeScript-Laufzeiten hosten, indem Sie die Go-Binärdatei in WebAssembly mit [TinyGo]kompilieren (https://tinygo.org/).

Weil es ein kompiliertes Go-Programm ist:

- **Niedriger Speicherauslastung**, bequem im serverlosen Speicher- und Ausführungslimit zu bleiben.

---

## Newsletter abonnieren

Abonnieren, um Newsy in Aktion zu sehen:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

---

## Abonnement-Button generieren

Erzeugen Sie einen eingebetteten Abonnement-Button für Ihr Konto bei [newsy.lightcms.me](https://newsy.lightcms.me/).

Sie können den Button mit [Primer CSS]anpassen und stilisieren. (https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Sicherheitstipp:** Nachdem der Bot seine erste Newsletter-Nachricht veröffentlicht hat, sperren Sie die Unterhaltung, um unbeabsichtigtes Verhalten zu verhindern.

![](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)

For further details on permissions, refer to the [required permissions](/misc/newsy/list-of-all-permission/) documentation.
