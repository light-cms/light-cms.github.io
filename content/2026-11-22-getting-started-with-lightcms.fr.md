---
title: Commencer avec LightCMS
description: Connectez un dépôt GitHub à LightCMS, modifiez le contenu Markdown dans un navigateur, et publiez à travers votre flux de travail de déploiement basé sur Git.
slug: getting-started-with-lightcms
date: 2026-11-22T11:47:03.315Z
tags:
  - lightcms
  - git
  - github
  - sites statiques
draft: Faux
---

[LightCMS](https://lightcms.me) is a CMS for static sites. Edit Markdown in your browser and commit it to GitHub. Your existing build and deployment pipeline takes it from there.

## Avant de commencer

Vous avez besoin de :

- Un dépôt GitHub contenant un site statique qui utilise du contenu Markdown.
- Un pipeline de déploiement tel que GitHub Actions, Cloudflare Pages, Netlify, ou Vercel.
- Accès au dépôt afin que LightCMS puisse lire et valider les fichiers de contenu.

## Étapes de configuration

1. Sign in with a provider LightCMS supports.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choose where your posts, pages, and assets live.
4. Create or edit a post, including the front matter your site generator needs.
5. Publish the change, then check that your CI/CD pipeline builds and deploys the site.

## Que vérifier après l'installation

| Contrôler                 | Résultat attendu                                                |
|:------------------------- |:--------------------------------------------------------------- |
| Chemin du contenu         | LightCMS lit et écrit les bons fichiers Markdown                |
| Marchandise avant         | Les champs obligatoires correspondent à votre thème/modèle SSG  |
| Actifs                    | Téléchargement d'images dans le répertoire static/media attendu |
| Déployer le pipeline      | Un commit déclenche une construction de site réussie            |
| Comportement du brouillon | Les brouillons se comportent comme prévu dans votre SSG         |

## Étapes suivantes

- [Pourquoi LightCMS existe](/blog/why-this/)
- [Démarrer avec un modèle LightCMS](/blog/start-with-a-lightcms-template/)
- [Auto-hébergement LightCMS](/blog/selfhost/)
- [Configuration de votre dépôt et de votre CI/CD](/blog/configuring-your-repository-cicd/)
