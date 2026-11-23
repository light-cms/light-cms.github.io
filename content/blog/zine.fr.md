---
title: "Zine, The zig based Static Site Generator"
description: >-
  Zine is a fast, young static site generator written in Zig, with its own Super templating language and near instant builds a profile of the minimalist SSG.
draft: false
tags:
  - générateur de site statique zine
  - zine ssg
  - générateur statique de site
  - zine ssg vs hugo
  - ssg zig le plus rapide
isCJKLanguage: false
headless: false

slug: zine
date: "2026-11-22T12:05:23.705Z"
---

[Zine](https://zine-ssg.io) Is a new static site generator Zine is fast, opinionated, and refreshingly unconventional. C'est un projet jeune qui gère déjà facilement des sites personnels et des blogs, et il récompense les auteurs désireux d'apprendre leur propre façon de faire.

## Ce qui rend Zine différente

Zine stands out from other static site generators in several ways:

- \*\*Écrit en Zig, de zéro. \* Pas de temps d'exécution JavaScript, pas de Ruby, pas de zone de confort pour la bibliothèque standard : le moteur de rendu Markdown, le moteur de gabarit et l'orchestration sont tous construits. Les temps de construction sont effectivement instantanés.
- **Son propre script de langage de modèle.** Zine utilise SuperHTML et SuperMD: et le système de template de scripty conçu pour le projet plutôt que emprunté à un écosystème.
- **Scripty**, son calque de script, ajoute une logique programmable où seuls les modèles sont courts.
- \*\*Contenu en tant que collection de fichiers et de mises en page. \* Zine transforme les fichiers de contenu en HTML, applique vos mises en page, et copie le résultat dans un répertoire de sortie, le modèle statique classique s'exécute rapidement.

## Le commerce le plus honnête

Le dépôt de Zine le dit clairement : le projet est jeune et n'est pas encore à la parité avec des alternatives populaires comme Hugo. Et parce que Super est la propre langue de Zine, il y a une courbe d'apprentissage: les thèmes et les connaissances de la communauté sont plus petits, ce qui rend le soutien plus important pour vous !

Pour un site web personnel avec un blog (la zone de confort du projet), Zine est plus que capable, et l'expérience de l'auteur est rapide et agréable une fois Super clic.

## Compatibilité contenu et CMS

Zine does not consume CommonMark Markdown with front matter the same way most static site generators do, so a typical Git based CMS workflow does not apply directly.

Zine attend ses propres formats de contenu, y compris [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/), et [Ziggy](https://ziggy-lang.io/). If you already have Markdown content, [md2smd](https://github.com/light-cms/md2smd) can help convert between [CommonMark](https://commonmark.org/) And Zine's formats.

![Zine build pipeline](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png)

Vous avez besoin de deux référentiels : un pour le frontend et un pour le contenu.

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_template), the frontend repository
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/zine_content), the content repository

Déclencher une expédition de référentiel lorsque de nouveaux contenus sont poussés dans le référentiel de contenu.

## Là où il convient

- Si vous voulez essayer quelque chose d'alpha.

[Essayez les modèles de notre organisation pour plus d'informations.] (https://github.com/light-cms)
