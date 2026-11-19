---
title: Configuration de votre référentiel & CI/CD
description: Connectez un référentiel statique de site (Hugo, Astro, Jekyll, SvelteKit) à LightCMS et automatisez les déploiements avec CI/CD.
serial: 3
date: 2026-09-18T01:42:00Z
draft: false
keywords:
  - configuration du dépôt
  - Actions github
  - générateur de site statique
  - astro
  - hugo
preview: /og-image.png
taxonomies:
  tags:
    - paramétrage
    - github
    - cicatrice
    - lightcms
---

La connexion de votre site statique à [LightCMS](https://lightcms.me) ne nécessite que deux ingrédients : un dépôt GitHub contenant vos fichiers de contenu et un flux automatisé CI/CD qui construit et déploie votre site Web chaque fois que des modifications sont livrées.

Suivez ce guide pour structurer votre dépôt, installer l'application GitHub [LightCMS](https://lightcms.me) et configurer des déploiements automatisés.

---

## 1. Structurez votre dépôt de contenu

[LightCMS](https://lightcms.me) fonctionne nativement avec n'importe quel générateur de site statique (SSG) qui stocke le contenu en tant que fichiers Markdown (`.md` ou `.mdx`) avec la matière première YAML.

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

[LightCMS](https://lightcms.me) lit et écrit les métadonnées YAML en haut de vos fichiers Markdown. Un en-tête standard comprend:

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

---

## 2. Installez l'application [LightCMS](https://lightcms.me) GitHub

Pour permettre à [LightCMS](https://lightcms.me) de lire vos fichiers et de livrer des articles nouvellement écrits :

1. Connectez-vous à votre instance [LightCMS](https://lightcms.me) en utilisant votre compte GitHub.
2. Naviguez vers votre tableau de bord et cliquez sur **Connecter le dépôt** (ou **Installer l'application GitHub**).
3. GitHub vous demandera de sélectionner le compte ou l'organisation sur lequel installer l'application.
4. Vous pouvez accorder l'accès à **Tous les dépôts** ou sélectionner **Seulement sélectionner les dépôts** pour limiter l'accès strictement à votre dépôt de blog.
5. Une fois autorisé, votre dépôt apparaîtra dans votre tableau de bord [LightCMS](https://lightcms.me).

---

## 3. Configurer les déploiements automatisés de CI/CD

Chaque fois que vous appuyez sur **Publier** ou **Enregistrer** dans [LightCMS](https://lightcms.me), l'application communique le contenu en tant que fichier Markdown directement dans votre dépôt Git. Pour transformer ces commits en mises à jour de sites web, configurez un flux de travail GitHub Actions.

### Exemple : Déploiement Astro (GitHub Pages / Hôte statique)

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
4. Chaque fois que [LightCMS](https://lightcms.me) envoie un nouveau message vers `main`, la plate-forme d'hébergement régénère automatiquement et déploie votre site globalement en quelques secondes.

---

## 4. Recommandations de la plateforme d'hébergement

Plusieurs plates-formes fiables offrent de généreux tiers gratuits pour l'hébergement de sites statiques:

- **[Vercel](https://vercel.com)** : Déploiement de configuration zéro pour les frameworks JS modernes, SSL automatique, URL d'aperçu pour les demandes de fusion d'ébauche.
- **[Pages Cloudflare](https://pages.cloudflare.com)**: Réseau mondial dans plus de 300 villes, bande passante illimitée sur le niveau gratuit.
- **[Netlify](https://www.netlify.com)**: Pioneer d'hébergement Jamstack avec une forme riche et une gestion d'actif.
- **[GitHub Pages](https://pages.github.com)**: Hébergement direct pour les dépôts libres et personnels.
- **[Déploiement de Deno](https://deno.com/deploy)**: Hébergement de tranches légères pour les actifs web statiques et JavaScript.

---

## 5. Vérifier la boucle de publication

Une fois que votre dépôt est configuré et que le CI/CD est en place :

1. Ouvrez votre éditeur [LightCMS](https://lightcms.me) et créez un nouveau message.
2. Ajoutez votre contenu et cliquez sur **Publier**.
3. Vérifiez l'onglet **Actions** sur votre dépôt GitHub. Votre workflow CI/CD s'exécute sur la livraison [LightCMS](https://lightcms.me).
4. Dans une minute ou deux, votre nouveau message est en direct sur votre site Web.
