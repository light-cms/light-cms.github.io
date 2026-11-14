---
title: Konfigurieren Ihres Repository & CI/CD
description: Verbinden Sie ein statisches Site-Repository (Hugo, Astro, Jekyll, SvelteKit) mit LightCMS und automatisieren Sie Installationen mit CI/CD.
serial: 3
date: 18.09.20T01:42:00Z
draft: false
keywords:
  - repository-Konfiguration
  - github-Aktionen
  - statische Site-Generator
  - Astros
  - hugo
preview: /og-image.png
taxonomies:
  tags:
    - konfiguration
    - github
    - cicd
    - hellcms
---

Die Verbindung deiner statischen Website mit [LightCMS](https://lightcms.me) erfordert nur zwei Zutaten: ein GitHub-Repository mit deinen Inhaltsdateien und einen automatisierten CI/CD-Workflow, der deine Website erstellt und bereitstellt, wenn Änderungen vorgenommen werden.

Folgen Sie dieser Anleitung, um Ihr Projektarchiv zu strukturieren, installieren Sie die [LightCMS](https://lightcms.me) GitHub App und richten Sie automatisierte Deployment ein.

---

## 1. Strukturieren Sie Ihr Inhalts-Repository

[LightCMS](https://lightcms.me) arbeitet nativ mit jedem statischen Site-Generator (SSG) zusammen, der Inhalte als Markdown (`.md` oder `.mdx`) Dateien mit YAML-Frontmasse speichert.

Ein typisches Repository-Layout sieht folgendermaßen aus:

```text
my-blog-repo/
<unk> content/ # oder src/content/blog/ in Astro
<unk> <unk> <unk> hello-world. d
<unk> <unk> <unk> <unk> my-second-post.md
<unk> <unk> . ithub/
<unk> <unk> <unk> <unk> Workflows/
<unk> <unk> <unk> Deploy. ml # Automatisches Build & Deploy Pipeline
<unk> -Paket. Sohn
<unk> 本<unk> astro.config.mjs # oder config.toml für Hugo
```

### Standard Front-Matter-Header

[LightCMS](https://lightcms.me) liest und schreibt YAML Front-Matrix Metadaten oben in deinen Markdown-Dateien. Eine Standard-Kopfzeile enthält:

```markdown
---
Titel: Mein erster Artikel
Beschreibung: Eine kurze Übersicht des Artikels für SEO und Karten.
Datum: 2026-10-14T10:00:00Z
Entwurf: false
tags:
  - technology
  - blogging
---

Ihr Artikel Inhalt beginnt hier...
```

---

## 2. Installiere die [LightCMS](https://lightcms.me) GitHub App

Um [LightCMS](https://lightcms.me) zu erlauben, Ihre Dateien zu lesen und neu geschriebene Artikel zu übertragen:

1. Melde dich mit deinem GitHub-Konto bei deiner [LightCMS](https://lightcms.me) Instanz an.
2. Navigiere zum Dashboard und klicke auf **Connect Repository** (oder **Installiere GitHub App**).
3. GitHub wird Sie dazu auffordern auszuwählen, auf welchem Konto oder welcher Organisation die App installiert werden soll.
4. Du kannst den Zugriff auf **alle Repositories** gewähren oder **Nur Repositories** auswählen, um den Zugriff streng auf dein Blog Repo zu beschränken.
5. Einmal autorisiert, wird dein Projektarchiv in deinem [LightCMS](https://lightcms.me) Dashboard erscheinen.

---

## 3. Automatische CI/CD Deployments konfigurieren

Jedes Mal, wenn du **Veröffentlichen** oder **Speichern** in [LightCMS](https://lightcms.me) drückst, wird der Inhalt als Markdown-Datei direkt in dein Git-Repository übertragen. Um diese in Live-Website-Updates zu verwandeln, konfigurieren Sie einen GitHub Actions Workflow.

### Beispiel: Astro Einsatz (GitHub Pages / Static Host)

Erstelle `.github/workflows/deploy.yml` in deinem Projektarchiv:

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
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload Pages Artefakt
        uses: actions/upload-pages-artifact@v3
        mit:
          path: . dist

  deploy:
    environment:
      name: github-pages
      url: ${% raw %}{{ steps.deployment.outputs.page_url }}{% endraw %}
    runs-on: ubuntu-latest
    needs: build
    Schritte:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Beispiel B: Hugo Deployment (Cloudflare Seiten oder Vercel)

Wenn du [Hugo](https://gohugo.io), Plattformen wie **Cloudflare Seiten**, **Netlify**, oder **Vercel** kann dein Projektarchiv automatisch bauen, wenn sie ein GitHub Push-Ereignis erhalten:

1. Verbinden Sie Ihr GitHub Repository direkt mit [Cloudflare Seiten](https://pages.cloudflare.com) oder [Vercel](https://vercel.com).
2. Setze den Build-Befehl auf `hugo --minify`.
3. Setze das Build-Ausgabeverzeichnis auf `public`.
4. Immer wenn [LightCMS](https://lightcms.me) einen neuen Beitrag nach `main` schickt, wird die Hosting-Plattform automatisch in Sekunden neu generiert und installiert.

---

## 4. Hosting-Plattform-Empfehlungen

Mehrere zuverlässige Plattformen bieten großzügige kostenlose Stufen für das Hosting statischer Sites:

- **[Vercel](https://vercel.com)**: Null-Konfigurationseinstellungen für moderne JS-Frameworks, automatische SSL, Vorschau-URLs für Entwürfe von Pull-Requests.
- **[Cloudflare Seiten](https://pages.cloudflare.com)**: Globales Kantennetz in 300+ Städten, unbegrenzte Bandbreite auf der freien Ebene.
- **[Netlify](https://www.netlify.com)**: Pioneer of Jamstack hosting with rich form and asset handling.
- **[GitHub Seiten](https://pages.github.com)**: Direkt im Hosting für Open Source und persönliche Repositories gebaut.
- **[Deno Deploy](https://deno.com/deploy)**: Leichte Kantenversorgung für JavaScript und statische Web-Assets.

---

## 5. Verifiziere die Publishing-Schleife

Sobald Ihr Repository konfiguriert ist und CI/CD vorhanden ist:

1. Öffne deinen [LightCMS](https://lightcms.me) Editor und erstelle einen neuen Beitrag.
2. Füge deinen Inhalt hinzu und klicke auf **Veröffentlichen**.
3. Überprüfen Sie die Registerkarte **Aktionen** in Ihrem GitHub Repository. Ihr CI/CD Workflow läuft auf der [LightCMS](https://lightcms.me) Commit.
4. Innerhalb von ein oder zwei Minuten ist Ihr neuer Beitrag live auf Ihrer Website.
