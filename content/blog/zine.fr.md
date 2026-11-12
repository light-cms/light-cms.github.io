---
title: 'Zine : Le Générateur de Site Statique'
description: 'Ce que Zine est : un générateur de site statique rapide et jeune écrit en Zig'
date: '111111-11T11:11:00Z'
draft: false
keywords:
  - générateur de site statique zine
  - zine ssg
  - générateur statique de site
  - zine ssg vs hugo
  - ssg zig le plus rapide
tags:
  - zine
  - zig
  - Ziggy
  - ssg
  - lightcms
isCJKLanguage: false
headless: false
serial: 28
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - zine
    - zig
    - sites statiques
slug: zine
---
[Zine](https://zine-ssg.io) Is a new static site generator Zine is fast, opinionated, and refreshingly unconventional. C'est un projet jeune qui gère déjà facilement des sites personnels et des blogs, et il récompense les auteurs désireux d'apprendre leur propre façon de faire.

## Ce qui rend Zine différente

- \*\*Écrit en Zig, de zéro. \* Pas de temps d'exécution JavaScript, pas de Ruby, pas de zone de confort pour la bibliothèque standard : le moteur de rendu Markdown, le moteur de gabarit et l'orchestration sont tous construits. Les temps de construction sont effectivement instantanés.
- **Son propre script de langage de modèle.** Zine utilise SuperHTML et SuperMD: et le système de template de scripty conçu pour le projet plutôt que emprunté à un écosystème.
- **Scripty**, son calque de script, ajoute une logique programmable où seuls les modèles sont courts.
- \*\*Contenu en tant que collection de fichiers et de mises en page. \* Zine transforme les fichiers de contenu en HTML, applique vos mises en page, et copie le résultat dans un répertoire de sortie, le modèle statique classique s'exécute rapidement.
- **Extras de première classe** : sites Web multilingues (i18n), support de l'éditeur et cibles de déploiement documentées : Pages GitHub, Pages Cloudflare, Pages Codeberg et pages hutte source.

## Le commerce le plus honnête

Le dépôt de Zine le dit clairement : le projet est jeune et n'est pas encore à la parité avec des alternatives populaires comme Hugo. Et parce que Super est la propre langue de Zine, il y a une courbe d'apprentissage: les thèmes et les connaissances de la communauté sont plus petits, ce qui rend le soutien plus important pour vous !

Pour un site web personnel avec un blog (la zone de confort du projet), Zine est plus que capable, et l'expérience de l'auteur est rapide et agréable une fois Super clic.

## Compatibilité contenu et CMS

Zine ne consomme pas CommonMark Markdown avec la matière frontale de la même manière que la plupart des générateurs de site statiques, donc un workflow typique basé sur Git-based CMS ne s'applique pas directement.

Zine attend ses propres formats de contenu, y compris [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/), et [Ziggy](https://ziggy-lang.io/). Si vous avez déjà du contenu Markdown, [md2smd](https://github.com/Pratyay360/md2smd) peut vous aider à convertir entre [CommonMark](https://commonmark.org/) et les formats de Zine.

![](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png "Zine build pipeline")

Vous avez besoin de deux référentiels : un pour le frontend et un pour le contenu.

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_site), le dépôt frontend
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/blogs_md), le dépôt de contenu

Déclencher une expédition de référentiel lorsque de nouveaux contenus sont poussés dans le référentiel de contenu.

## Là où il convient

- Si vous voulez essayer quelque chose d'alpha.

[Essayez les modèles de notre organisation pour plus d'informations.] (https://github.com/light-cms)
