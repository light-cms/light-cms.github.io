---
title: Qu'est-ce que la Jamstack?
description: "Jamstack est une architecture web qui sert de balisage précompilé, utilise des API pour des capacités dynamiques, et ajoute JavaScript pour l'interactivité si nécessaire."
serial: 20
date: 2026-10-14T14:10:00Z
draft: false
tags:
  - jamstack
  - architecture
  - sites statiques
  - api
---
Jamstack est une architecture web qui combine les balises précompilées, les API et le JavaScript. Au lieu de rendre chaque page d'un serveur d'application à chaque requête, un site Jamstack sert des fichiers précompilés à partir d'un CDN et utilise des API ou du JavaScript côté client pour des fonctionnalités dynamiques.

## The three Jamstack components| Component | Role | Example |

\| :--- | :--- | :--- | | Markup | Prebuilt HTML generated during a build | Static site generator output | | APIs | Dynamic capabilities outside the page render | Forms, search, payments, auth | | JavaScript | Client-side interactivity | Search UI, comments, personalization |

L'architecture n'est pas la même que "pas de JavaScript" ou "pas de comportement dynamique". Cela signifie que le chemin de livraison par défaut est préconstruit et mis en cache, tandis que le comportement dynamique est ajouté délibérément.

## Pourquoi les équipes utilisent Jamstack

Les sites de Jamstack peuvent être rapides, cacheables et opérationnels pour les projets lourds de contenu. They also fit well with Git based workflows: content changes trigger builds, and deployments produce immutable assets.

Le compromis est une complexité à la limite. L'authentification, les aperçus, la personnalisation et les données en temps réel nécessitent souvent des services tiers, des fonctions sans serveur ou un rendu hybride.

## Jamstack dans la pratique moderne

Les cadres modernes brouillent la ligne entre statique et dynamique. Astro, Next.js, SvelteKit, et d'autres peuvent prédominer certaines routes et rendre d'autres dynamiquement. Cela fait que "Jamstack" est moins une règle stricte et plus une valeur par défaut utile : préconstruisez ce que vous pouvez, utilisez des services dynamiques si nécessaire.

Pour une lecture liée, voir [Static vs. Dynamic Sites](/blog/static-vs-dynamic/) et [What Is a Static Site Generator?](/blog/what-is-a-static-site-generator/).
