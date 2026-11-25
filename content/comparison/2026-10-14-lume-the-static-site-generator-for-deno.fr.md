---
title: "Lume : Générateur de Site Statique pour Deno"
description: "An overview of Lume, a static site generator built for Deno."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false

tags:
  - ssg
  - lume
  - deno
  - sites statiques
---

[Lume](https://lume.land) est un générateur de site statique construit pour l'écosystème Deno. Il génère du HTML statique à partir de fichiers de contenu, de modèles et de données, ce qui le rend adapté aux blogs, , et d'autres sites de contenu qui peuvent être déployés sur un CDN.

## Ce que Lume fournit

| Zone de stockage   | À quoi s'attendre                                                        | Remboursement                                                   |
| :----------------- | :----------------------------------------------------------------------- | :-------------------------------------------------------------- |
| Temps d'exécution  | Exécute sur Deno                                                         | Plus petit écosystème que les générateurs basés sur des nœuds   |
| Formats du contenu | Markdown, fichiers de données, modèles; les plugins étendent les formats | Les options de plugin/configuration ajoutent de la complexité   |
| Templating         | Supporte plusieurs moteurs de gabarits et JSX via des plugins            | L'équipe a besoin de choisir les conventions plus tôt           |
| Sortie             | Fichiers statiques pour l'hébergement CDN/statique                       | Les fonctionnalités dynamiques nécessitent des services séparés |

## Quand le Lume est en bon état

Lume est un choix raisonnable si votre équipe utilise déjà Deno et veut un générateur de site statique avec des modèles flexibles et un pipeline de plugin. Il est moins convaincant que votre équipe dépend de l'écosystème Node/npm, des flux de travail Eleventy/Hugo/Astro existants ou d'un grand marché de thèmes.

## Lume et édition de contenu

Lume gère la génération du site, pas l'édition de contenu. If writers need a browser-based interface, pair Lume with a Git based CMS that commits Markdown or compatible content files to the repository.

Pour des comparaisons plus larges entre les SNG, voir [les meilleurs générateurs de sites statiques en 2026] (/blog/best-static-site-generators/) et [Eleventy vs. Astro] (/blog/eleventy-vs-astro/).
