---
title: LightCMS vs. Pages CMS Visual Writing vs. Form Based Editing
description: >-
  Comparez LightCMS et Pages CMS pour la publication par Git : l'édition visuelle de Markdown par rapport aux champs de formulaire basés sur la configuration dans votre référentiel.
serial: 41
date: '15T20:09:55.000Z'
draft: Faux
tags:
  - lightcms vs pages cms
  - alternatives de pages cms
  - Revue des pages cms
  - Comparaison de github cms
  - meilleur cms pour markdown
preview: /og-image.png
slug: lightcms-vs-pagescms
---

LightCMS et Pages CMS stockent votre contenu sous forme de fichiers dans Git, de sorte que vous ne perdez jamais la propriété de votre dépôt. La véritable scission réside dans ce que vous passez le plus de votre temps à éditer : des articles Markdown de forme longue ou des champs structurés de première matière.

Les pages CMS mettent d'abord les champs de formulaire et les schémas de collection, tandis que LightCMS met d'abord un éditeur de document visuel.

## Comparer les modèles d'édition


| Zone de stockage     | LightCMS                                                                  | Pages CMS                                                                   |
|:-------------------- |:------------------------------------------------------------------------- |:--------------------------------------------------------------------------- |
| Interface principale | TipTap Éditeur visuel Markdown                                            | Éditeur de formulaire de configuration                                      |
| Meilleure forme      | Articles de forme longue, docs et essais                                  | Enregistrements structurés, catalogues et métadonnées lourdes               |
| Stockage du contenu  | Markdown avec la première matière dans GitHub                             | Fichiers et médias sur GitHub                                               |
| Configuration        | Connexion à l'application GitHub (PostgreSQL requis si auto-hébergé)      | Fichier de configuration du dépôt définissant les collections et les champs |
| Workflow d'écriture  | Brouillons, mise en forme, collage d'image, rédaction d'IA, dictée vocale | Validation de champ, sélections, dates et entrées de texte riche            |


Cette différence apparaît au moment où vous ouvrez un message : LightCMS ressemble à un bureau d'écriture, alors que les pages CMS se sentent comme un formulaire d'administration sur votre dépôt.

## Lorsque le CMS des pages est le meilleur choix

Les pages CMS ont plus de sens lorsque votre site est construit autour d'enregistrements structurés plutôt que de prose de forme longue. Si vous maintenez des répertoires, des changelogs, des listes de produits ou des pages où des dates personnalisées, sélectionnent, booléens, et les champs imbriqués de la matière frontale sont les plus importants, la définition de ces schémas dans un fichier de configuration empêche les éditeurs de briser votre compilation.

Il est également plus léger à adopter si vous ne voulez pas exécuter une base de données d'application pour le CMS lui-même.

## Lorsque LightCMS est le meilleur choix

LightCMS s'adapte mieux lorsque le travail principal est d'écrire et de modifier des articles. Si vous ou vos écrivains passez la plupart de la journée à rédiger 1 000 messages de mots avec des en-têtes, des blocs de code, des tableaux, et les images en ligne, un éditeur de documents basé sur le navigateur est plus rapide qu'une pile d'entrées de formulaire.

Avant de choisir l'un de ces outils, testez à la fois la configuration de votre référentiel, le format de la face avant et les conventions du dossier d'image. Pour les options Git à proximité, voir [LightCMS vs. Decap CMS](/comparison/lightcms-vs-decap-cms/) et [LightCMS vs. Keystatic](/comparison/lightcms-vs-keystatic/).
