---
title: "Lume : Le Générateur de Site Statique pour Deno"
description: "Le générateur statique de sites de Deno a expliqué : formats supportés, architecture de plugins, comment il se compare à Jekyll, Hugo et Eleventy, et comment il convient à un flux de travail Git CMS."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false
keywords:
  - générateur de site statique lume
  - deno ssg
  - lume vs eleventy
  - lume deno cms
  - terre de lume
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - lume
    - deno
    - sites statiques
---

[Lume](https://lume.land) (Galicien pour "feu") est le générateur de site statique au centre de l'écosystème Dro. Inspiré par Jekyll, Hugo et Eleventy, il vise à être plus simple à configurer que n'importe lequel d'eux tout en restant aussi flexible, et il fonctionne nativement sur Deno, sans aucun `node_modules` en vue.

---

## Ce qu'est Lume

Un générateur de site statique rapide et extensible écrit en Deno. Vous l'indiquez dans un répertoire source de contenu, il traite vos fichiers à travers un pipeline de plugins, et il écrit du HTML statique pur prêt pour n'importe quel CDN. La philosophie : valeurs par défaut sensibles, configuration minimale, et chaque étape swappable.

## Formats et modèles

La fonction de titre de Lume est la flexibilité du format. Hors de la boite il gère :

- **Markdown** (avec des plugins pour la syntaxe aromatisée de GitHub, notes de bas de page et plus)
- **Fichiers de données JSON et YAML**
- **Modules JavaScript et TypeScript** en tant que pages ou sources de données
- **JSX** (composants préactifs rendus en HTML statique)
- **Nunjucks** et d'autres langages de template via des plugins

Ce dernier point est important : un site Lume peut mélanger des articles Markdown avec des composants JSX dans la même version, de sorte que les sites lourds de contenu avec des sections interactives occasionnelles se sentent naturels.

## Écosystème

- Les **Plugins** couvrent tout ce qui va de la coloration syntaxique (Prism, Shiki) à la transformation d'image, aux plans de site et aux flux : le modèle "Montez votre propre pipeline" de style Élevage, avec l'ergonomie Deno-native.
- **Deno toolchain** : inclus dans TypeScript, exécution sécurisée par défaut, et environnements reproductibles sans rituel de gestionnaire de paquets.
- **Prise en charge par Deno**: utilisée dans les tutoriels officiels, c'est la réponse de fait à "que dois-je utiliser pour faire un site statique sur Deno?"

## Là où il convient

Lume occupe la même niche que [Eleventy](/blog/eleventy-vs-astro/) : sortie minimale, liberté de template, pas de cadre client imposé. Choisissez-le si votre monde est Deno/TypeScript; choisissez Eleventy si votre monde est Node; choisissez [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) si vous voulez construire des îles composantes. Le champ plus large est étudié dans [les meilleurs générateurs de site statique] (/blog/best-static-site-generators/).

## Flux de travail contenu et CMS

Lume lit Markdown avec la matière frontale de votre référentiel comme chaque générateur de cette catégorie. Associez-la à un CMS basé sur Git ([LightCMS](/getting-started/) ou au [champ plus large](/comparison/top-git-cms/)) et les écrivains publient visuellement pendant que Lume compile les commits en HTML. Les cibles de déploiement sont les hôtes statiques libres habituels ([comparison](/blog/cloudflare-pages-vs-github-pages/)).

---

## Foire aux questions

### Lume est-il un CMS ou un générateur de site statique?

Un générateur de site statique. Pour la couche d'édition, associez-la à un CMS basé sur Git qui communique Markdown dans son répertoire source.

### Quelle est la différence entre Lume et Eleventy?

Très peu philosophiquement : les deux produisent une sortie statique zéro-JS avec une liberté de template. Lume est Deno-native avec TypeScript intégré; Eleventy fonctionne sur Node avec l'écosystème plus grand.

### Lume supporte-t-il JSX ?

« Oui. » Les composants Preact peuvent être rendus en HTML statique aux côtés des pages Markdown, l'une de ses fonctionnalités les plus appréciées.

### Lume est-il rapide ?

« Oui. » Comme tous les générateurs mono-processus produisant des sorties statiques, les compilations sont mesurées en quelques secondes; les visiteurs reçoivent le même cache HTML que chaque SSG produit.
