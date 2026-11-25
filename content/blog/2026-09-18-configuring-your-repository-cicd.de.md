---
title: "Konfigurieren Sie Ihr Repository und CI/CD für LightCMS"
description: "Verbinden Sie ein statisches Site-Repository mit LightCMS und konfigurieren Sie CI/CD, so dass Git Ihre Seite automatisch bereitstellt."
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - repository
  - konfiguration
  - github
  - statisch
  - site
  - generator
  - Astros
  - hugo
preview: og-image.png
slug: configuring-your-repository-cicd
---

Mit LightCMS veröffentlichen Sie benötigen ein Git-Repository, das Ihre Markdown-Inhalte und einen CI/CD-Workflow enthält, der die Website beim Eintreffen von Commits baut und bereitstellt. LightCMS behandelt die Bearbeitung von Inhalten und Git Commits; Ihre Pipeline verarbeitet Rendering und Hosting.

## Repository-Struktur LightCMS erwartet

LightCMS arbeitet mit statischen Site-Generatoren, die Markdown-Dateien mit Frontmatter wie Astro, Hugo, Zola, Jekyl oder Elevent lesen.

```text
my-blog-repo/
├── content/ # or src/content/blog/ in Astro
│ ├── hello-world.md
│ └── my-second-post.md
├──.github/
│ └── workflows/
│ └── deploy.yml # Build and deploy pipeline
├── package.json # For Node tools like Astro
└── hugo.toml # Or astro.config.mjs, zola.toml
```

Das genaue Inhaltsverzeichnis hängt von Ihrem Generator ab. Zum Beispiel verwenden viele Hugo-Sites `content/`, während Astro Content Sammlungen häufig `src/content/` verwenden.

## Front-Matrix Format

LightCMS liest und schreibt Metadaten an der Spitze von Markdown Dateien. Ein allgemeiner YAML-Frontblock sieht so aus:

```yaml
---
Titel: "Mein erster Artikel"
Beschreibung: "Eine kurze Zusammenfassung des Artikels für Vorschaukarten und Suchergebnisse.
Datum: 2026-10-14T10:00:00Z
Entwurf: Falsche
Tags:
  - Technologie
  - Engineering
---
```

Wenn Ihre Website TOML oder ein anderes Frontmatter Format verwendet, bestätigen Sie, dass LightCMS es unterstützt, bevor Sie das Repository verbinden.

## GitHub Repository verbinden

When possible, use a scoped GitHub App installation instead of a long lived personal access token. Eine eingebaute Installation beschränkt den Zugriff auf das Projektarchiv und ist einfacher zu prüfen.

1. Melden Sie sich im [LightCMS Dashboard](https://www.lightcms.me).
2. Wählen Sie die Option, um ein Repository zu verbinden.
3. Wählen Sie das GitHub Konto oder die Organisation, die das Projektarchiv besitzt.
4. Gewähren Sie Zugriff nur auf das Repository, das Sie mit LightCMS bearbeiten möchten.
5. Bestätigen Sie, dass der erwartete Zweig und der Inhaltsordner in LightCMS erscheinen.

## Automatische Deployment konfigurieren

Wenn Sie in LightCMS veröffentlichen, wird die Änderung zu einem Git-Commit. Ihre Bereitstellungsplattform muss die Seite von diesem Commit aus bauen.

### Example: GitHub Actions for GitHub Pages

This example shows an Astro build deployed to GitHub Pages. Passen Sie die Installations-/Build-Befehle und das Ausgabeverzeichnis für Ihren Generator an.

```yaml
name: Deploy Website

on:
  push:
    branches:
      - Haupt-

Berechtigungen:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    Schritte:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node. s
        verwendet: actions/setup-node@v4
        mit:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build static site
        run: npm run build

      - name: Upload Pages Artefakt
        uses: actions/upload-pages-artifact@main
        mit:
          path: . dist

  deploy:
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@main
```

### Option: verwaltetes Kanten-Hosting

Cloudflare Seiten, Vercel, und Netlify können auch aus Repository-Commits erstellt werden. Typische Erstellungseinstellungen sind:

| Plattform | Beispiel-Build-Befehl | Beispiel Ausgabeverzeichnis |
| :-------- | :-------------------- | :-------------------------- |
| Henning   | `hugo --minify`       | "öffentlich"                |
| Astros    | `npm run build`       | `dist`                      |
| Tila      | "zola build"          | "öffentlich"                |

Verwaltete Plattformen reduzieren die CI-Konfiguration, aber sie fügen Ihrem Veröffentlichungspfad einen weiteren Dienst hinzu. GitHub Actions behält die Build-Definition in deinem Projektarchiv, was Audits und Migrationen erleichtern kann.

## Verifiziere die Publikationsschleife

Once LightCMS is connected and deployment is configured, test the whole publishing path:

1. Erstellen Sie einen Beitragsentwurf in LightCMS.
2. Veröffentlichen Sie den Beitrag.
3. Bestätigen Sie, dass ein Commit in Ihrem GitHub Repository erscheint.
4. Bestätigen Sie, dass Ihr CI/CD-Workflow oder Ihre Hosting-Plattform eine Build für diesen Commit startet.
5. Öffnen Sie die Produktions-URL und überprüfen Sie die neue Seite.

Wenn der Commit erscheint, aber die Site nicht aktualisiert, ist das Problem normalerweise in der Build- oder Deploy-Konfiguration, nicht im Markdown Commit selbst. Beginnen Sie mit der Überprüfung der CI-Protokolle, des Build-Befehls, des Ausgabeverzeichnisses und der Branch-Einstellungen.
