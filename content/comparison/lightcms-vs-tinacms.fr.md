---
title: "LightCMS vs TinaCMS: Un bureau d'écriture vs Édition sur Page"
description: "Compare LightCMS and TinaCMS for Git based content: a focused document editor versus editing content directly on the rendered page."
serial: 39
date: 2026-10-16T10:30:00Z
draft: false

tags:
  - lightcms
  - tinacms
  - cms
  - Comparaison
slug: lightcms-vs-tinacms
---

TinaCMS et LightCMS enregistrent tous deux du contenu en tant que Markdown dans votre dépôt Git. La grande différence est l'endroit où vous faites l'édition. TinaCMS vous permet de cliquer sur la page rendue et de l'éditer dans le contexte. LightCMS vous donne un espace d'écriture séparé où le document est le focus.

Aucune des deux approches n'est mauvaise. Cela dépend si vous corrigez un titre sur une page de destination ou si vous écrivez un article de 2 000 mots.

## Deux façons de modifier

Avec TinaCMS, vous éditez sur la page elle-même. C’est parfait quand la mise en page est importante : vous pouvez voir immédiatement si un titre est trop long pour sa boîte ou si une courte description correspond à une carte.

Avec LightCMS, vous éditez dans un espace de travail de documents. C’est plus calme pour l’écriture longue parce que vous ne faites pas défiler les images de héros et les blocs de mise en page pour atteindre le paragraphe quatorze. Vous écrivez, formatez, ajoutez des images et publiez.

|                     | LightCMS                                | TinaCMS                                                      |
| ------------------- | --------------------------------------- | ------------------------------------------------------------ |
| Édition du modèle   | Éditeur de document autonome            | Édition On-page/contextuelle                                 |
| Stockage du contenu | Dépôt Git                               | Dépôt Git                                                    |
| Schéma              | Géré dans l'application                 | Défini dans code/config                                      |
| Meilleur pour       | Articles, docs et notes de modification | Pages d'accueil, copie de page, sites pilotés par composants |
| Rédaction IA        | Inclus dans                             | Non groupé                                                   |
| Dictée vocale       | Inclus dans                             | Non groupé                                                   |

## Quand TinaCMS a plus de sens

TinaCMS est pratique lorsque le contenu se trouve dans une page conçue. Si vous éditez des copies de marketing, des accessoires de composants ou des sections de page où la mise en page est importante, voir la page réelle pendant que vous éditez est utile. Son modèle de schéma en code convient également aux équipes de développeurs qui veulent que la structure du contenu soit révisée comme du code.

## Lorsque LightCMS a plus de sens

LightCMS est mieux quand l'écriture elle-même est la tâche. Écrire des articles, des documents et des notes de publication est plus facile dans un éditeur de document que dans une page pleine de composants de mise en page. Cela permet également de gérer la question des devants pour les non-développeurs, donc un écrivain n’a pas besoin d’ouvrir une pull request simplement pour ajouter un champ.

## Choix entre eux

Choisissez TinaCMS si votre équipe pense en pages et composants et est à l'aise de gérer le schéma de contenu dans le code. Choisissez LightCMS si votre équipe pense en articles et veut que les écrivains travaillent sans aide aux développeurs. Tina vous donne le contexte; LightCMS vous donne le focus.

Un test facile : essayez de modifier le même élément de contenu dans les deux styles. Si vous continuez à vouloir voir la mise en page, le modèle de Tina s'adapte. Si vous continuez à vouloir moins de distractions, LightCMS le fait. Voir [LightCMS vs Keystatic](/comparison/lightcms-vs-keystatic/) ou [LightCMS vs Decap CMS](/comparison/lightcms-vs-decap-cms).
