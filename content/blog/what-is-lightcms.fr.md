---
title: "Qu'est-ce que LightCMS ? Le CMS Git pour les sites statiques"
description: "LightCMS est un CMS auto-hébergé basé sur Git avec un éditeur visuel WYSIWYG. Il communique Markdown à votre dépôt et permet à votre CI/CD de le déployer."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
keywords:
  - ce qui est lightcms
  - lightcms
  - Cms à base de Git
  - markdown cms
  - éditeur visuel pour markdown
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - cms
    - git
    - markdown
---

**LightCMS** est un système de gestion de contenu qui conserve votre contenu dans votre dépôt Git en tant que fichiers Markdown.

Aucune base de données. Pas de verrouillage. Connectez-vous avec GitHub, choisissez un dépôt, écrivez et publiez. [LightCMS](https://lightcms.me) commits the changes for you.

## Le problème [LightCMS](https://lightcms.me) résout

Les générateurs de sites statiques rendent la publication rapide, peu coûteuse et sécurisée. Mais écrire un message dans un éditeur de code peut se sentir difficile si vous n'êtes pas habitué à ce workflow.

Ce workflow convient aux développeurs. Cela ne convient pas à tous ceux qui veulent écrire.

[LightCMS](https://lightcms.me) removes that friction without removing Git. Les développeurs gardent le contenu dans le référentiel et les rédacteurs obtiennent un éditeur basé sur le navigateur pour la rédaction et la publication.

---

## Comment [LightCMS](https://lightcms.me) fonctionne

1. **Connectez-vous avec GitHub.** LightCMS utilise GitHub OAuth, donc vous n'avez pas besoin d'un système de compte séparé.
2. **Connectez un dépôt.** Choisissez n'importe quel dépôt qui contient du contenu Markdown, y compris des sites construits avec Astro, Hugo, Zola, Eleventy, Jekyll, SvelteKit, ou Next.js.
3. **Écrire visuellement.** L'éditeur basé sur TipTap prend en charge les en-têtes, les liens, les listes, les tables, les listes de tâches, les mathématiques, le code surligné par la syntaxe et les médias par glisser-déposer.
4. **Publier.** [LightCMS](https://lightcms.me) écrit le fichier et le dossier frontal, puis le communique directement ou ouvre une pull request si vous voulez un commentaire.
5. **Déployer.** GitHub Actions, Cloudflare Pages, Vercel, ou Netlify peuvent reconstruire et déployer votre site. Les rédacteurs restent dans le navigateur, et les responsables gardent leur flux de travail Git.

L'étape 4 crée une validation normale. Si vous arrêtez d'utiliser [LightCMS](https://lightcms.me), votre site se construit toujours parce que votre contenu est déjà présent dans votre dépôt.

---

## Ce qui le rend différent

Il y a plusieurs options CMS basées sur Git ([Decap CMS](/comparison/netlifycms), TinaCMS, Keystatic, Pages CMS), et [LightCMS](https://lightcms.me) adopte une approche différente dans quelques domaines :

|                          | [LightCMS](https://lightcms.me)                                                                                          |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Stockage**             | Votre dépôt GitHub (Markdown + YAML)                                                                                     |
| **Éditeur**              | Éditeur WYSIWYG basé sur TipTap avec des mathématiques (KaTeX), surlignage de code, tableaux, listes de tâches et médias |
| **AI**                   | Copilot intégré pour contours, réécritures et grammaires en utilisant n'importe quel fournisseur compatible OpenAI       |
| **Voix**                 | dictée par Whisper dans l'éditeur                                                                                        |
| **Newsletters**          | Publier Markdown et envoyer des mises à jour avec Newsy depuis GitHub                                                    |
| **Modèle d'hébergement** | Autohébergé, Apache 2.0 sous licence, fonctionne sur n'importe quel hôte Node.js                                         |
| **Verrouillage**         | Aucun: votre contenu reste dans des fichiers que vous possédez                                                           |

[LightCMS](https://lightcms.me) covers drafting, editing, publishing, and newsletter distribution without adding a separate database.

---

## Ce que [LightCMS](https://lightcms.me) n'est pas

- \*\*Ce n'est pas un CMS de base de données. \* Si vous avez besoin de contenu relationnel, de rôles et de permissions complexes ou d'une API de contenu en forme d'application, une plateforme sans tête comme [Payload](/comparison/lightcms-vs-payload-cms) peut mieux s'ajuster.
- **Ce n'est pas un service d'hébergement.** [LightCMS](https://lightcms.me) gère le contenu ; votre hôte (Cloudflare Pages, Vercel, Netlify, GitHub Pages) dessert le site. Voir [l'hébergement statique du site comparé] (/misc/top-static-site-hosting).
- **Ce n'est pas un thème ou un générateur de sites.** Il communique du contenu dans n'importe quel générateur de site statique que vous exécutez déjà.

---

## Pour qui c'est pour

- **Écrivains solos et blogueurs** qui veulent posséder leur contenu sans avoir d'infrastructure supplémentaire.
- **Équipes** où les développeurs maintiennent le site et les non-développeurs écrivent et publient du contenu.
- Les **projets de site statique** qui ont dépassé l'édition de Markdown dans un éditeur de code, mais qui veulent quand même un flux de travail basé sur Git.

Si cela vous semble, vous pouvez [copier un modèle de démarrage] (/blog/start-with-a-lightcms-template/) pour obtenir un dépôt, construire la configuration et le déploiement du workflow prêt pour votre premier poste.

---

## Foire aux questions

### [LightCMS](https://lightcms.me) est-il gratuit ?

[LightCMS](https://lightcms.me) est open source sous la licence Apache 2.0 et conçu pour être auto-hébergé. Vous ne payez pas par siège, et vous pouvez l'héberger partout où vous exécutez Node.js.

### Est-ce que [LightCMS](https://lightcms.me) fonctionne avec Hugo et Astro?

« Oui. » Hugo et Astro ont lu les fichiers Markdown avec la matière frontale YAML à partir d'un référentiel, ce qui est écrit par [LightCMS](https://lightcms.me). Il en va de même pour Zola, Eleventy, Jekyll et SvelteKit.

### Où se trouve mon contenu?

Dans votre dépôt en tant que fichiers `.md` avec la première question. Il n'y a pas de base de données séparée et aucune étape d'exportation.

### Les écrivains ont-ils besoin de connaître Git?

Non. Les écrivains utilisent l'éditeur et publient le bouton. Les engagements, les branches et les demandes de fusion se produisent en arrière-plan.

### En quoi cela est-il différent de WordPress?

WordPress stocke le contenu en MySQL et affiche les pages avec PHP à la demande. [LightCMS](https://lightcms.me) writes static files that a CDN can serve. Pour une comparaison plus approfondie, voir [static vs dynamic sites] (/blog/static-vs-dynamic/) et [WordPress alternatives] (/blog/wordpress-alternatives/).
