+++
title = "Commencer avec LightCMS"
description = "Apprenez comment fonctionne le workflow Git-native avec LightCMS."
+++

## [LightCMS](https://lightcms.me) est un système de gestion de contenu basé sur Git pour les sites statiques

**Vos messages restent dans votre dépôt en tant que fichiers Markdown.** Chaque brouillon et chaque publication vit comme Markdown avec la première question. Git conserve l'historique des versions afin que vous puissiez revoir les changements, revenir en arrière et continuer à travailler dans n'importe quel éditeur que vous aimez.

1. **Un éditeur visuel.** [LightCMS](https://lightcms.me) utilise l'éditeur [TipTap](https://tiptap.dev) pour écrire et formater dans le navigateur.
2. **Un pilote IA.** Utilisez-le pour réviser et améliorer les brouillons.
3. **Condictions vocales.** Parlez et laissez Whisper ou [Wit.ai](http://Wit.ai) transformer vos mots en texte.
4. **Thèmes clairs et sombres.** Choisissez le thème qui vous convient.
5. **Newsletters sans service tiers.** [Newsy](https://github.com/light-cms/newsy) transforme chaque nouveau message en une annonce sur GitHub, afin que les lecteurs puissent s'y abonner.

---

## Comment ça marche

1. **Se connecter** avec votre compte GitHub.
2. **Choisissez un dépôt.** Installez l'application LightCMS sur le dépôt qui contient votre site. Il fonctionne avec les générateurs de sites statiques qui utilisent la matière première dans les fichiers Markdown.
3. **Écrire.** L'éditeur gère la mise en forme et télécharge des images au fur et à mesure que vous les ajoutez.
4. **Publier.** [LightCMS](https://lightcms.me) communique la modification dans votre dépôt. Votre pipeline CI/CD construit et déploie le site sur l'hôte que vous choisissez, comme les pages GitHub, Pages Cloudflare, Netlify, Vercel, [Surge.sh](https://surge.sh), ou tout stockage d'objets compatibles S3.

---

## Lire le suivant

- [Pourquoi LightCMS?](/blog/why-this/): le raisonnement de conception qui sous-tend la publication basée sur Git.
- [Self-hosting LightCMS](/blog/selfhost/): exécutez votre propre instance.
- [Newsletter automation](/blog/newsletter-email-automation/) : comment Newsy publie des messages sans service de messagerie tiers.

### Comparaisons et expliqueurs

- [Sites statiques vs sites dynamiques](/blog/static-vs-dynamic/): pourquoi les sites statiques fonctionnent bien pour le contenu.
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/): choisir un générateur de site statique.
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): choisir où héberger.
- [Git-based CMS vs traditional CMS](/blog/git-cms-vs-traditional-cms/): comment les deux modèles diffèrent.
- [Plateformes CMS Top Git-backed CMS](/comparison/top-git-cms/): LightCMS comparé à Decap, TinaCMS, Keystatic, et autres.
- [Comment démarrer un blog](/blog/how-to-start-a-blog/): un guide pour blogging avec Markdown et un site statique.
