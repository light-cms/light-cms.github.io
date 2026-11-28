---
title: "Qu'est-ce que LightCMS ?"
description: "LightCMS est un CMS basé sur Git avec un éditeur visuel. Il communique Markdown à votre dépôt et déclenche le déploiement via votre CI/CD existant."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - lightcms
  - cms
  - git
  - markdown
---

[LightCMS](https://lightcms.me) is a content management system for publishing Markdown from Git. Vous écrivez dans un éditeur visuel dans votre navigateur, et [LightCMS](https://lightcms.me) communique le fichier Markdown et sa première matière dans votre dépôt. Votre pipeline CI/CD actuel peut alors construire et déployer le site.

## Le problème des adresses LightCMS

Les générateurs de sites statiques peuvent faciliter la construction et le déploiement d'un site. Écrire pour un seul est moins pratique si vous devez éditer le Markdown brut, formater la matière première, ou régler les conflits Git à la main.

[LightCMS](https://lightcms.me) gives authors a visual editor, while keeping the content in Git. Cela convient aux équipes qui veulent la propriété et la révision de Git. C'est un choix différent d'une base de données supportée CMS avec une collaboration en temps réel.

## Comment LightCMS publie du contenu

1. Connectez-vous avec GitHub.
2. Connecter un dépôt avec du contenu Markdown. Il peut s'agir d'un site construit avec Astro, Hugo, Zola, 11ty, Jekyll, ou Next.js.
3. Écrivez dans l'éditeur, qui prend en charge les en-têtes, liens, tableaux, listes de contrôle, blocs de code et médias.
4. Publier le changement. [LightCMS](https://lightcms.me) formate le Markdown, met à jour le front, et soit commite dans votre succursale, soit ouvre une pull request pour vérification.
5. Votre flux de travail CI/CD existant, tels que GitHub Actions, Cloudflare Pages, Vercel, ou Netlify, peut alors construire et déployer le site.

Parce que la publication crée une livraison Git standard, votre site peut toujours construire à partir du référentiel si vous arrêtez d'utiliser LightCMS.

## Profil technique

| Attribut                 | Implémentation LightCMS                                                       |
| :----------------------- | :---------------------------------------------------------------------------- |
| Stockage                 | Dépôt Git avec fichiers Markdown et première matière                          |
| Interface de l'éditeur   | Éditeur visuel dans votre navigateur                                          |
| Assistance IA            | Aide à l'écriture dans l'éditeur                                              |
| Transcription vocale     | Dictée vocale dans l'éditeur                                                  |
| Mises à jour des abonnés | Intégration d'annonces GitHub via [Newsy](https://github.com/light-cms/newsy) |
| Licence et hébergement   | Open source et auto-hostable                                                  |
| Portabilité              | Le contenu reste dans les fichiers de dépôt que vous contrôlez                |

## Lorsque LightCMS n'est pas adapté

LightCMS s'adapte aux sites qui conservent leur contenu dans Git et utilisent déjà CI/CD pour publier. Considérez un outil différent si:

- Vous avez besoin de requêtes relationnelles, d'autorisations utilisateur ou d'une API de contenu à l'exécution. Une base de données gérée par un CMS sans tête tel que [Payload](/comparison/lightcms-vs-payload-cms) ou Strapi peut mieux s'ajuster.
- Vous voulez qu'un service héberge le site public. LightCMS ne l'héberge pas. Cloudflare Pages, Vercel, Netlify, ou S3 peuvent servir le site construit.
- Vous avez besoin d'un outil pour afficher vos modèles HTML. LightCMS ne le fait pas; votre générateur de site statique, tel que Hugo, Astro, ou Zola, gère la compilation.

Si vous avez besoin d'une gestion de contenu Git et d'un éditeur visuel, la prochaine étape est de connecter un référentiel de test et de confirmer que LightCMS écrit la première matière et Markdown dans le format attendu par le générateur de site statique.
