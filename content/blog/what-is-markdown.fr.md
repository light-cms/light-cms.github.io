---
title: Qu'est-ce que Markdown ? The Plain Text Format for the Web
description: >-
  Discover what Markdown is, how it works, its basic syntax, popular flavours, and why it has become an essential format for modern documentation, blogging, and static site generation.
date: "2026-10-14T15:00:00.000Z"
draft: false
keywords:
  - ce qui est markdown
  - tutoriel markdown
  - Guide de syntaxe de markdown
  - pourquoi utiliser markdown
  - markdown pour les écrivains

slug: what-is-markdown
---

Markdown est un texte en clair avec un petit ensemble de symboles de mise en forme. John Gruber l'a créé en 2004 comme la manière la plus simple d'écrire des documents formatés. Deux décennies plus tard, il est devenu la lingua franca du web : la documentation, Les fichiers README, les notes, les bulletins d'information et des millions de sites y conservent leur contenu.

## Pourquoi Markdown Won

- **Il ne fait pas rotation**. A `.md` File from 2004 still opens in any text editor. Les formats de documents propriétaires expirent; le texte brut ne le fait pas.
- **Il diffuse magnifiquement**. Parce qu'il s'agit de texte, Git peut suivre chaque changement, c'est pourquoi chaque CMS Git stocke le contenu en tant que Markdown.
- **C'est facile à apprendre**. La syntaxe de base prend cinq minutes.
- **Il sépare le contenu de la présentation**. Ecrire la structure ; laisser le thème gérer les apparences.
- **Il est partout**. GitHub, les exportations de notion, les générateurs de sites statiques et les outils IA le disent tous.

## La syntaxe dont vous avez besoin

````markdown
# Heading 1

## Heading 2

A paragraph with **bold** and _italic_ text.

- A bullet point
- Another one

1. A numbered list
2. And the next item

> A blockquote for asides.

[A link](https://example.com)
![An image](/images/photo.jpg)

`inline code` and fenced code blocks:

```js
console.log("hello, web");
```
````

````

Cela couvre la grande majorité des écritures du monde réel. Les tableaux, listes de tâches et notes de bas de page complètent la syntaxe étendue que Markdown ajouté à GitHub.

## The Missing Piece: Front Matter

Static sites add a small metadata header to each file:

```markdown
---
title: My First Post
date: 2026-10-14T10:00:00Z
tags:
  - blogging
---

L'article commence ici.
````

Cette première question YAML est l'endroit où vit le CMS : titres, dates, brouillons et taxonomies montent avec le corps Markdown.

## Écriture de Markdown sans la syntaxe

\*\*Vous n'avez plus à écrire Markdown à la main. \* Éditeurs basés sur Git modernes, [LightCMS](/getting-started/) parmi eux, vous donne un éditeur visuel complet avec des images, , et les raccourcis de formatage, puis sérialisez vos écritures pour nettoyer Markdown en dessous. Vous obtenez une durabilité en texte clair avec une expérience d'écriture confortable.

Cette combinaison (édition visuelle au dessus de Markdown dans Git) est ce qui alimente l'ensemble de la [catégorie CMS Git] (/blog/git-cms-vs-traditional-cms/), et c'est comment les sites statiques dans [les meilleurs générateurs de site statique] (/blog/best-static-site-generators/) obtiennent leur contenu.

## Foire aux questions

### Markdown est-il mort ?

Au contraire. Après plus de 20 ans, il est plus central que jamais. It is the content format of GitHub, documentation tool chains, and AI-era writing.

### Quelle est la différence entre Markdown et HTML ?

Markdown est le format de création (texte brut, accessible en écriture humaine) ; HTML est le format de rendu (quel type de navigateur). Les générateurs convertissent les premiers en deuxième.

### Ai-je besoin d'apprendre Markdown au blog ?

Pas avec un CMS visuel basé sur Git : vous écrivez normalement, et l'outil produit Markdown pour vous. Apprendre les bases aide toujours à modifier rapidement.

### Où est stocké Markdown ?

En tant que fichiers `.md`, idéalement dans un dépôt Git, qui vous donne l'historique des versions, la revue et la propriété portable de tout ce que vous écrivez.
