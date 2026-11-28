---
title: "Qu'est-ce qu'un générateur de site statique?"
description: "Un générateur de site statique compile le contenu et les modèles en fichiers statiques HTML, CSS et JavaScript avant le déploiement."
date: "2026-11-16T08:58:17.908Z"
draft: false
tags:
  - quel est un générateur de site statique
  - générateur de site statique
  - ssg expliqué
  - comment fonctionnent les sites statiques
  - prérendu html
slug: what-is-a-static-site-generator
---

Un générateur de site statique (SSG) compile les fichiers de contenu, les modèles et les actifs en HTML statique, CSS et JavaScript avant le déploiement. Au lieu de rendre chaque page à chaque requête, l'étape de compilation produit des fichiers qu'un CDN ou un serveur web peut livrer directement.

## Comment fonctionne un générateur de site statique

```text
Contenu (Markdown + Front matter)
Modèles et composants
Actifs et configuration

        Ω
   SSG build
        文

 public/ ou dist/
        文
        ★
   CDN / hôte statique
```

Une version typique fait quatre choses:

1. Lit le contenu : analyse le Markdown et les métadonnées de la matière première telles que le titre, la date, les balises et le statut du brouillon.
2. Applique les modèles : Maps de contenu aux mises en page des pages, des listes, des taxonomies et des flux.
3. Génère une sortie : Écrit des pages HTML, des flux RSS, des plans de site et des index de recherche.
4. Copie les ressources : Déplace les images, les polices et les fichiers statiques dans le répertoire de sortie.

## Avantages et compromis

| Avantages                         | Pourquoi cela compte-t-il                                                                                  | Remboursement                                                                                |
| :-------------------------------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| Livraison rapide                  | Les fichiers préconstruits peuvent être servis à partir des caches des bords                               | Étape de compilation requise avant que les modifications ne soient en cours de mise en ligne |
| Surface de course plus petite     | Aucune application exécutée ou base de données pour chaque requête n'est requise pour les pages de contenu | Les fonctionnalités dynamiques ont besoin d'API ou de JavaScript côté client                 |
| Portabilité                       | Le contenu vit souvent comme des fichiers Markdown simples                                                 | Les écosystèmes de modèles et de plugins varient selon le générateur                         |
| Ajustement du contrôle de version | Le contenu et le code peuvent vivre dans Git                                                               | Les workflows éditoriaux peuvent avoir besoin d'une couche CMS                               |

Les générateurs de sites statiques fonctionnent bien pour les blogs, la documentation, les sites de marketing et les portefeuilles. Elles sont moins adaptées lorsque chaque requête nécessite un rendu personnalisé côté serveur ou des requêtes en temps réel de base de données.

## Générateurs de sites statiques communs

Les SSG populaires sont Astro, Hugo, Zola, Eleventy, Jekyll et SvelteKit en mode statique. Pour une comparaison, voir [les meilleurs générateurs de sites statiques en 2026](/blog/best-static-site-generators/).

## Où un CMS basé sur Git s'adapte

Un SSG gère le rendu. Un CMS basé sur Git gère la création en donnant aux éditeurs une interface de navigateur qui communique Markdown dans le dépôt. Cette combinaison maintient l'architecture de livraison statique tout en rendant l'édition de contenu accessible aux non-développeurs. Voir [Qu'est-ce qu'un CMS basé sur Git ?](/blog/Git based-cms-explained/).
