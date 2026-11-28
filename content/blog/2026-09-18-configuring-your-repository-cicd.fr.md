---
title: "Configuration de votre dépôt et de votre CI/CD pour LightCMS"
description: "Connectez un référentiel statique de site à LightCMS et configurez CI/CD pour que Git déploie automatiquement votre site."
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - référentiel
  - paramétrage
  - github
  - statique
  - site
  - générateur
  - astro
  - hugo
preview: og-image.png
slug: configuring-your-repository-cicd
---

Publier avec LightCMS, vous avez besoin d'un référentiel Git qui contient votre contenu Markdown et un flux de travail CI/CD qui construit et déploie le site quand les commits arrivent. LightCMS gère l'édition de contenu et les livraisons Git ; votre pipeline de construction gère le rendu et l'hébergement.

## Structure du dépôt LightCMS attendue

LightCMS fonctionne avec les générateurs de sites statiques qui lisent les fichiers Markdown avec la matière première, comme Astro, Hugo, Zola, Jekyll, ou Eleventy.

```text
my-blog-repo/
── content/ # or src/content/blog/ in Astro
── hello-world.md
文<unk> ─ my-second-post.md
── bah. ithub/
文<unk> ─ workflows/
文<unk> ─ deploy.yml # Construire et déployer le pipeline
── package. fils # Pour les outils Node comme Astro
<unk> ─ hugo.toml # Ou astro.config.mjs, zola.toml
```

Le répertoire de contenu exact dépend de votre générateur. Par exemple, de nombreux sites Hugo utilisent `content/`, tandis que les collections de contenu Astro utilisent généralement `src/content/`.

## Format de la matière première

LightCMS lit et écrit les métadonnées en haut des fichiers Markdown. Un bloc de matière frontale YAML commun ressemble à ceci :

```yaml
---
title: "Mon premier article"
description: "Un bref résumé de l'article pour les cartes de prévisualisation et les résultats de recherche.
date: 2026-10-14T10:00:00Z
draft: false
tags:
  - technology
  - engineering
---
```

Si votre site utilise TOML ou un autre format de la matière frontale, confirmez que LightCMS le prend en charge avant de connecter le dépôt.

## Connecter le dépôt GitHub

Dans la mesure du possible, utilisez une installation étendue de l'application GitHub au lieu d'un jeton d'accès personnel de longue durée. Une installation étendue limite l'accès aux dépôts et est plus facile à vérifier.

1. Connectez-vous au [tableau de bord LightCMS] (https://www.lightcms.me).
2. Sélectionnez l'option pour connecter un dépôt.
3. Choisissez le compte GitHub ou l'organisation propriétaire du dépôt.
4. Accorder l'accès uniquement au référentiel que vous voulez que LightCMS modifie.
5. Confirmez que la branche et le dossier de contenu attendu apparaissent dans LightCMS.

## Configurer les déploiements automatisés

Lorsque vous publiez dans LightCMS, le changement devient une livraison Git. Votre plateforme de déploiement a besoin de construire le site à partir de cette commit.

### Example: GitHub Actions for GitHub Pages

Cet exemple montre une version d'Astro déployée sur GitHub Pages. Ajustez les commandes install/build et le répertoire de sortie de votre générateur.

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

      - nom: Installer les dépendances
        run: npm install

      - nom: Build static site
        run: npm run build

      - nom: Télécharger pages artefact
        uses: actions/upload-pages-artifact@main
        avec:
          path: . dist

  déploiement:
    environment:
      nom: github-pages
    runs-on: ubuntu-latest
    besoins: build
    étapes :
      - nom: Déployer sur GitHub Pages
        id : déploiement
        utilisations : actions/deploy-pages@main
```

### Option : hébergement de bord géré

Cloudflare Pages, Vercel, et Netlify peuvent également construire à partir de livraisons de référentiel. Les paramètres de compilation typiques incluent :

| Plateforme | Exemple de commande de construction | Répertoire de sortie d'exemple |
| :--------- | :---------------------------------- | :----------------------------- |
| Hugo       | `hugo --minify`                     | `public`                       |
| Astro      | `npm run build`                     | `dist`                         |
| Zola       | `Version Zola`                      | `public`                       |

Les plates-formes gérées réduisent la configuration CI, mais elles ajoutent un autre service à votre chemin de publication. Les actions GitHub conservent la définition de construction dans votre référentiel, ce qui peut faciliter les audits et les migrations.

## Vérifier la boucle de publication

Une fois que LightCMS est connecté et que le déploiement est configuré, testez l'ensemble du chemin de publication:

1. Créer un brouillon dans LightCMS.
2. Publier le message.
3. Confirmez qu'un commit apparaît dans votre dépôt GitHub.
4. Confirmez que votre flux de travail CI/CD ou votre plate-forme d'hébergement démarre une version pour cette livraison.
5. Ouvrez l'URL de production et vérifiez la nouvelle page.

Si le commit apparaît mais que le site ne se met pas à jour, le problème est généralement dans la configuration de compilation ou de déploiement, pas dans le commit Markdown lui-même. Commencez par vérifier les logs CI, la commande de compilation, le répertoire de sortie et les paramètres de branches.
