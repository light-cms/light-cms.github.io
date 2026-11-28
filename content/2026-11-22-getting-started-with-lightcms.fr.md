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

[LightCMS](https://lightcms.me) est un CMS pour les sites statiques. Modifiez Markdown dans votre navigateur et validez-le sur GitHub. Votre pipeline de construction et de déploiement actuel le prend à partir de là.

## Avant de commencer

Vous avez besoin de :

- Un dépôt GitHub contenant un site statique qui utilise du contenu Markdown.
- Un pipeline de déploiement tel que GitHub Actions, Cloudflare Pages, Netlify, ou Vercel.
- Accès au dépôt afin que LightCMS puisse lire et valider les fichiers de contenu.

## Étapes de configuration

1. Connectez-vous avec un fournisseur de support LightCMS.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choisissez où vivent vos publications, vos pages et vos ressources.
4. Créez ou éditez un post, y compris la première question dont votre générateur de site a besoin.
5. Publiez le changement, puis vérifiez que votre pipeline CI/CD compile et déploie le site.

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
