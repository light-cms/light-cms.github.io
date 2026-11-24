---
title: Commencer avec LightCMS
description: "Commencez avec LightCMS en quelques minutes: connectez-vous avec GitHub, connectez un dépôt, écrivez dans l'éditeur visuel, et publiez Markdown propre à votre propre dépôt Git."
keywords:
  - commencer avec lightcms
  - Configuration de lightcms
  - connecter le cms du dépôt github
  - publier markdown sur git
  - éditeur de markdown visuel
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - débutant
    - github
    - markdown
---

[LightCMS](https://www.lightcms.me) est un système de gestion de contenu basé sur Git pour les sites statiques. Vous éditez Markdown dans un éditeur visuel et LightCMS communique les fichiers dans votre dépôt.

## Ce que vous obtenez

- **Un éditeur rédacteur.** LightCMS utilise l'éditeur [TipTap](https://tiptap.dev) WYSIWYG, donc le formatage ressemble à une application de document au lieu d'un éditeur de code.
- **Un pilote IA.** Brouillon, réécrire, et corriger la grammaire sans quitter l'éditeur.
- **dictée vocale.** Parler une ébauche et transcription la transforme en Markdown.
- **Thèmes clairs et sombres.** Lisez et écrivez dans le thème que vous préférez.
- **Newsletters sans service tiers.** [Newsy](https://github.com/light-cms/newsy) transforme chaque nouvelle publication en une annonce GitHub à laquelle vos lecteurs peuvent s'abonner.

Votre contenu reste dans votre référentiel en tant que Markdown avec la première question. Git conserve l’histoire, donc chaque changement est révisable, vérifiable et réversible.

## Comment ça marche

1. **Connectez-vous** avec votre compte GitHub.
2. **Choisissez un dépôt.** Installez l'application LightCMS sur le dépôt qui contient votre site. Il fonctionne avec les générateurs de sites statiques qui utilisent la matière première dans les fichiers Markdown.
3. **Écrire.** L'éditeur gère la mise en forme et télécharge des images au fur et à mesure que vous les ajoutez.
4. **Publier.** LightCMS communique la modification dans votre dépôt. Votre pipeline CI/CD construit et déploie sur l'hôte que vous avez choisi : GitHub Pages, Cloudflare Pages, Netlify, Vercel, [Surge. h](https://surge.sh), ou tout stockage d'objet compatible S3.

## Lire le suivant

- [Why LightCMS?](/blog/why-this/): the design reasoning behind Git based publishing.
- [How to start a blog in 2026](/blog/how-to-start-a-blog/): the full Markdown and static site guide.
- [Commencer à partir d'un modèle](/blog/start-with-a-lightcms-template/): démarrer des dépôts avec la version déjà configurée.
- [Self hosting LightCMS](/blog/selfhost/): exécutez votre propre instance.
- [Automatisation Newsletter](/blog/newsletter-email-automation/): comment Newsy publie des messages sans service de messagerie tiers.
