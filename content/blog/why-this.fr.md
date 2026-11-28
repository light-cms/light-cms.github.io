---
title: "Pourquoi LightCMS existe"
description: "Pourquoi LightCMS utilise Markdown basé sur Git et un éditeur visuel pour faciliter la publication statique de sites sans renoncer au contrôle de version."
serial: 2
date: 2026-09-18T00:41:00Z
draft: false
tags:
  - cms
  - philosophie
  - lightcms
---

Nous sommes en train de construire [LightCMS](https://lightcms.me) parce que la publication sur un site statique ne devrait pas obliger chaque auteur à suivre un flux de travail de développement. Vous pouvez écrire dans un éditeur de navigateur, alors que votre contenu reste dans Git en tant que fichiers Markdown.

## Le problème avec les flux de travail de publication statique

Les générateurs de sites statiques facilitent la construction et le déploiement d'un site. Écrire pour un seul peut toujours être synonyme de clonage d'un dépôt, d'édition de Markdown, de gestion du frontal, de livraison, et d'attente du CI/CD.

C'est un territoire familier pour les développeurs. Pour les écrivains et les éditeurs, il peut faire obstacle à la publication.

## Pourquoi le contenu basé sur Git compte toujours

Garder du contenu dans Git vous donne quelques trucs pratiques :

- Un historique des modifications que vous pouvez examiner, comparer ou annuler.
- Les fichiers Markdown que vous pouvez déplacer entre les générateurs, les hôtes et les éditeurs.
- Un chemin direct vers les workflows de construction et de déploiement basés sur Git que de nombreux sites statiques utilisent déjà.
- Une copie de votre contenu dans votre propre référentiel, plutôt qu'une base de données CMS propriétaire.

## Ce que LightCMS abandonne

LightCMS est construit autour de la publication à partir de Git, pas en temps réel des fonctionnalités de l'application. Cela fonctionne bien pour les blogs, la documentation et les sites de marketing. Si vous avez besoin de personnalisation, de relations complexes entre contenu ou de requêtes de base de données à l'exécution, un autre type de CMS peut vous convenir.

Vous écrivez dans un éditeur visuel, alors que les fichiers Markdown et Git historique restent la source de la vérité. Pour en savoir plus sur le produit, voir [What Is LightCMS?](/blog/what-is-lightcms/).
