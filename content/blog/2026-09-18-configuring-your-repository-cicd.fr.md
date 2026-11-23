---
title: Configuring Repository & CI/CD for Lightcms
description: >-
  Connect a Hugo, Astro, Jekyll, or SvelteKit repository to LightCMS, then automate builds and deployments with CI/CD for a streamlined static site publishing workflow.
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - configuration du dépôt
  - Actions github
  - générateur de site statique
  - astro
  - hugo
preview: og-image.png
slug: 2026-09-18-configuring-your-repository-cicd
---

Connecting your static site to [LightCMS](https://www.lightcms.me) Requires only two ingredients: a GitHub repository containing your content files and an automated CI/CD workflow that builds and deploys your website whenever changes are committed.

Follow this guide to structure your repository, install the [LightCMS](https://www.lightcms.me) GitHub App, and set up automated deployments.

---

## 1. Organize Your Content Repository

LightCMS integrates seamlessly with any static site generator (SSG) that manages content as Markdown (.md or .mdx) files using YAML front matter.

Une mise en page typique du dépôt ressemble à ceci :

```text
mon-blog-repo/
── content/ # ou src/content/blog/ dans Astro
── hello-world. d
文<unk> ─ mon-seconde.md
── . ithub/
文<unk> ── workflows/
文<unk> ─ déploiement. ml # Construction et déploiement automatisés du pipeline
─ paquet. fils
<unk> ─ astro.config.mjs # ou config.toml pour Hugo
```

### En-tête standard

[LightCMS](https://lightcms.me) Reads and writes YAML front matter metadata at the top of your Markdown files. Un en-tête standard comprend:

```markdown
---
title: Mon premier article
description: Un bref aperçu de l'article pour le référencement et les cartes.
date: 2026-10-14T10:00:00Z
ébauche : Balises de faux
:
  - technologie
  - blog
---

Le contenu de votre article commence ici...
```

## 2. Install the LightCMS GitHub App

To let LightCMS read your files and automatically commit new articles:

1. Sign in to your LightCMS instance using your GitHub account.
2. In the dashboard, click **Connect Repository** (or **Install GitHub App**).
3. GitHub, will prompt you to choose the account or organization where you want to install the app.
4. Choose either **All repositories** or **Only selected repositories** To restrict access to just your blog repo.
5. After authorizing, your repository will appear in the LightCMS dashboard.

## 3. Configurer les déploiements automatisés de CI/CD

Each time you click **Publish** or **Save** in LightCMS, the platform automatically commits the content as a Markdown file to your Git repository. To convert those commits into live website updates, set up a GitHub Actions workflow.

### Example A: Deploying an Astro Site to GitHub Pages (Static Host)

Créez `.github/workflows/deploy.yml` dans votre dépôt :

```yaml
Nom : Deploy Website

sur:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node. s
        utilisations : actions/setup-node@v4
        avec:
          node-version: 20

      - nom: Installer des dépendances
        run: npm ci

      - nom: Build static site
        run: npm run build

      - nom: Télécharger des pages artefact
        uses: actions/upload-pages-artifact@v3
        avec:
          path: . dist

  déploiement:
    Environnement:
      nom: 
 pages github-
      url: ${% raw %}{{ steps.deployment.outputs.page_url }}{{ steps.deployment.outputs.page_url }}{% endraw %}
    runs-on: ubuntu-latest
    besoins: build
    étapes:
      - name: Déploiement sur GitHub Pages
        id : déploiement
        uses: actions/deploy-pages@v4
```

### Exemple B : Déploiement Hugo (Cloudflare Pages ou Vercel)

Si vous utilisez [Hugo](https://gohugo.io), des plateformes comme **Cloudflare Pages**, **Netlify**, ou **Vercel** peut construire votre dépôt automatiquement quand ils reçoivent un événement push GitHub :

1. Connectez votre dépôt GitHub directement à [Pages Cloudflare](https://pages.cloudflare.com) ou [Vercel](https://vercel.com).
2. Définissez la commande build à `hugo --minify`.
3. Définissez le répertoire de sortie de compilation à `public`.
4. Whenever [LightCMS](https://lightcms.me) pushes a new post to `main`, the hosting platform automatically regenerates and deploys your site globally in seconds.

---

## 4. Recommandations de la plateforme d'hébergement

Plusieurs plates-formes fiables offrent de généreux tiers gratuits pour l'hébergement de sites statiques:

- [**Vercel**](https://vercel.com): Zero configuration deployments for modern JS frameworks, automatic SSL, preview URLs for draft pull requests.
- [**Cloudflare Pages**](https://pages.cloudflare.com): Global edge network in 300+ cities, unlimited bandwidth on the free tier.
- [**Netlify**](https://www.netlify.com): Pioneer of Jamstack hosting with rich form and asset handling.
- [**GitHub Pages**](https://pages.github.com): Direct built in hosting for open source and personal repositories.
- [**Deno Deploy**](https://deno.com/deploy): Lightweight edge hosting for JavaScript and static web assets.

---

## 5. Vérifier la boucle de publication

Une fois que votre dépôt est configuré et que le CI/CD est en place :

1. Open your [LightCMS](https://lightcms.me) Editor and create a new post.
2. Ajoutez votre contenu et cliquez sur **Publier**.
3. Check the **Actions** Tab on your GitHub repository. Your CI/CD workflow runs on the [LightCMS](https://lightcms.me) Commit.
4. Dans une minute ou deux, votre nouveau message est en direct sur votre site Web.
