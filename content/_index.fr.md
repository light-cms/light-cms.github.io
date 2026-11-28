+++
title = "LightCMS: Publication basée sur Git pour les sites statiques"
description = "Guides sur les flux de travail CMS basés sur Git, les générateurs de sites statiques et la publication Markdown avec LightCMS."
+++

[LightCMS](https://www.lightcms.me) is a content management system for static site generators. Il conserve votre contenu en tant que Markdown in Git, où vous pouvez le modifier dans un navigateur, examinez les changements et publiez par l'intermédiaire du pipeline CI/CD que vous utilisez déjà.

## Ce que vous pouvez faire avec LightCMS

| Capacités               | Comment ça marche                                                                                                           |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| Édition visuelle        | Écrivez et éditez Markdown dans votre navigateur.                                                                           |
| Publication Git         | Enregistrez les modifications sous forme de commits dans votre référentiel plutôt que dans une base de données CMS séparée. |
| Évaluer                 | Utilisez des branches, des demandes de fusion et de l'historique Git pour examiner les changements.                         |
| Mises à jour de lecture | Envoyez des mises à jour via les workflows GitHub avec des outils comme [Newsy](https://github.com/light-cms/newsy).        |

## Comment fonctionne la publication

1. Connectez-vous avec GitHub.
2. Choisissez le référentiel qui contient le contenu de votre site.
3. Écrivez ou éditez un message dans le navigateur, y compris toute question de front dont votre site a besoin.
4. Publier le changement sur Git.
5. Laissez votre pipeline existant, tels que GitHub Actions, Cloudflare Pages, Vercel, ou Netlify, construire et déployer le site.

## Commencez par ces tutoriels

- [Pourquoi la publication basée sur Git ?](/blog/why-this/) couvre les échanges entre les CMS dynamiques basés sur Git et les bases de données.
- [Self hosting LightCMS](/blog/selfhost/) explique comment déployer votre propre instance de [lightcms](https://github.com/light-cms/lightcms).
- [How Newsy works] (/blog/newsletter-automation/) décrit les flux de travail basés sur git.

## Comparaisons et architecture

- [Git CMS vs. Traditional CMS](/blog/git-cms-vs-traditional-cms/)
- [Static vs. Dynamic Sites](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Pages de Fusée nuageuse vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Plateformes CMS basées sur Git] (/comparison/top-git-cms/)
