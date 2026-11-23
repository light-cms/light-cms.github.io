---
title: Configuring Repository & CI/CD for Lightcms
description: >-
  Connect a Hugo, Astro, Jekyll, or SvelteKit repository to LightCMS, then automate builds and deployments with CI/CD for a streamlined static site publishing workflow.
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - repository-Konfiguration
  - github-Aktionen
  - statische Site-Generator
  - Astros
  - hugo
preview: og-image.png
slug: 2026-09-18-configuring-your-repository-cicd
---

Connecting your static site to [LightCMS](https://www.lightcms.me) Requires only two ingredients: a GitHub repository containing your content files and an automated CI/CD workflow that builds and deploys your website whenever changes are committed.

Follow this guide to structure your repository, install the [LightCMS](https://www.lightcms.me) GitHub App, and set up automated deployments.

---

## 1. Organize Your Content Repository

LightCMS integrates seamlessly with any static site generator (SSG) that manages content as Markdown (.md or .mdx) files using YAML front matter.

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

[LightCMS](https://lightcms.me) Reads and writes YAML front matter metadata at the top of your Markdown files. Eine Standard-Kopfzeile enthält:

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

## 2. Install the LightCMS GitHub App

To let LightCMS read your files and automatically commit new articles:

1. Sign in to your LightCMS instance using your GitHub account.
2. In the dashboard, click **Connect Repository** (or **Install GitHub App**).
3. GitHub, will prompt you to choose the account or organization where you want to install the app.
4. Choose either **All repositories** or **Only selected repositories** To restrict access to just your blog repo.
5. After authorizing, your repository will appear in the LightCMS dashboard.

## 3. Automatische CI/CD Deployments konfigurieren

Each time you click **Publish** or **Save** in LightCMS, the platform automatically commits the content as a Markdown file to your Git repository. To convert those commits into live website updates, set up a GitHub Actions workflow.

### Example A: Deploying an Astro Site to GitHub Pages (Static Host)

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
4. Whenever [LightCMS](https://lightcms.me) pushes a new post to `main`, the hosting platform automatically regenerates and deploys your site globally in seconds.

---

## 4. Hosting-Plattform-Empfehlungen

Mehrere zuverlässige Plattformen bieten großzügige kostenlose Stufen für das Hosting statischer Sites:

- [**Vercel**](https://vercel.com): Zero configuration deployments for modern JS frameworks, automatic SSL, preview URLs for draft pull requests.
- [**Cloudflare Pages**](https://pages.cloudflare.com): Global edge network in 300+ cities, unlimited bandwidth on the free tier.
- [**Netlify**](https://www.netlify.com): Pioneer of Jamstack hosting with rich form and asset handling.
- [**GitHub Pages**](https://pages.github.com): Direct built in hosting for open source and personal repositories.
- [**Deno Deploy**](https://deno.com/deploy): Lightweight edge hosting for JavaScript and static web assets.

---

## 5. Verifiziere die Publishing-Schleife

Sobald Ihr Repository konfiguriert ist und CI/CD vorhanden ist:

1. Open your [LightCMS](https://lightcms.me) Editor and create a new post.
2. Füge deinen Inhalt hinzu und klicke auf **Veröffentlichen**.
3. Check the **Actions** Tab on your GitHub repository. Your CI/CD workflow runs on the [LightCMS](https://lightcms.me) Commit.
4. Innerhalb von ein oder zwei Minuten ist Ihr neuer Beitrag live auf Ihrer Website.
