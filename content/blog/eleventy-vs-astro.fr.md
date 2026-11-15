---
title: "Eleventy vs Astro: Minimal JavaScript vs Islands of Interactivity"
description: Eleventy et Astro ont comparé la philosophie de sortie, le modèle, les collections de contenu, les écosystèmes de plugins, et le générateur zéro JS correspond à votre projet.
serial: 27
date: 2026-10-14T15:20:00Z
draft: false
keywords:
  - eleventy vs astro
  - astro vs eleventy
  - 11ty vs astro
  - site statique javascript zéro
  - le meilleur ssg minimal
preview: /og-image.webp
taxonomies:
  tags:
    - élévation
    - astro
    - ssg
    - sites statiques
---

Eleventy et Astro s'accordent sur le principe le plus important du développement web moderne (**envoyez moins de JavaScript**) et ne sont pas d'accord sur le chemin à parcourir. Il en résulte des fichiers statiques générés par des gabarits JavaScript, sans aucun temps d'exécution client. Astro fournit également zéro JavaScript par défaut, mais garde les composants React/Svelte/Vue à distance. Choisir entre eux, c'est choisir entre le purisme et la portée.

---

## Philosophie

- **Eleventy (11ty)** est un exécuteur de template : il prend vos modèles et Markdown et produit du HTML statique. Il n'y a pas de cadre client à opter, car il n'y en a jamais eu. Les langages sont votre choix : Nunjucks, Liquid, Markdown, HTML, etc.
- **Astro** est un framework de composants : les pages sont des composants `.astro`, le contenu provient de collections tapées, et l'interactivité arrive en tant qu'îles hydratées en utilisant de véritables frameworks UI.

## Templating and Content

La flexibilité d’Eleventy est sa signature : mixer les langages de gabarits par projet, structurer les données avec des fichiers de données globaux et minimiser la configuration. Les collections de contenu d'Astro, ajoutent ce qu'Eleventy laisse à la convention : **la première question validée par le schéma** qui échoue sur la base de données mal formées.

Tous deux consomment de la matière première de Markdown avec YAML depuis votre référentiel, ce qui rend les deux citoyens de première classe pour la [publication CMS basée sur Git] (/blog/git-cms-vs-traditional-cms/).

## Quand vous avez besoin d'interactivité

Voici la fourche dans la route:

- Sur Eleventy, les widgets interactifs signifient le câblage main de JavaScript vanilla ou l'intégration d'un autre outil : un processus délibéré et manuel.
- Sur Astro, déposer `<Button client:visible />` dans une page est tout ce qu'il faut ; le framework gère les limites d'hydratation pour vous.

Si un site de documentation ou une publication peut développer un widget de recherche, un thème bascule avec l'état, ou un exemple interactif, les îles d'Astro's sont le chemin le plus souple. (Pour les docs spécifiquement, Starlight va plus loin ; voir [Hugo vs Astro Starlight](/blog/hugo-vs-astro-starlight/).)

## Adaptation de l'écosystème

Eleventy est populaire dans le monde du web indépendant et de la petite publication : minimal, stable et composable. Astro a le dynamisme, avec plus de nouveaux modèles, un écosystème de composants plus profond et la voie la plus claire pour les équipes de contenu. Le contexte plus large est dans [les meilleurs générateurs de site statique] (/blog/best-static-site-generators/).

---

## Que devriez-vous choisir?

- **Eleventy** si vous voulez le plus petit outil possible entre votre Markdown et votre HTML, appréciez de choisir votre propre langue de gabarit, et soyez confiant que le site restera presque statique.
- **Astro** si vous voulez que des collections de contenu tapées, la création basée sur des composants et des haches d'échappement interactifs soient intégrées, la valeur par défaut pour la plupart des nouveaux projets en 2026.

Les deux déploiements gratuits sur [Pages Cloudflare ou Pages GitHub] (/blog/cloudflare-pages-vs-github-pages/), et tous deux émettent le carbone faible, sortie statique en cache décrite dans [Sites statiques et CO2](/blog/greener-web-static-sites/).

---

## Foire aux questions

### Est-ce que Eleventy est plus rapide que Astro?

Les comparaisons temps de construction favorisent la présence de Eleventy sur les petits sites ; les deux produisent une sortie de qualité identique pour les visiteurs : HTML statique sans exécution client.

### Est-ce que 70 composants sont pris en charge ?

Non pas en tant que concept de cadre; il est basé sur des templates. Les composants interactifs nécessitent du JS à la vanille ou de l’incorporation, tandis qu’Astro les traite comme des composants de première classe.

### Quelle est la meilleure solution pour les blogs ?

Tous deux sont excellents. Elevée pour le puriste minimaliste; Astro pour les écrivains qui peuvent vouloir des éléments interactifs ou des composants partagés plus tard.

### Un CMS basé sur Git peut-il être publié aux deux ?

Oui, tous les deux lisent Markdown avec la matière frontale directement depuis votre référentiel, donc n'importe quel CMS basé sur Git ne fonctionne pas avec non plus avec cela.
