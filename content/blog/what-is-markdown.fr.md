---
title: "Qu'est-ce que Markdown ?"
description: "Markdown is a markup format that uses simple symbols for formatting text."
date: "2026-10-14T15:00:00.000Z"
draft: false

slug: what-is-markdown
---

Markdown est un format de balisage en texte brut pour écrire des documents structurés avec des symboles simples. Il est couramment utilisé pour la documentation, les fichiers README, les notes, et le contenu statique du site parce que la source reste lisible comme du texte et peut être converti en HTML.

## Syntaxe basique de Markdown

````md
# Heading 1

## Heading 2

A paragraph with bold and _italic_ text.

- A bullet item
- Another bullet item

1. A numbered item
2. Another numbered item

[Link text](https://example.com)
![Alt text](/images/photo.jpg)

`inline code`

```js
console.log("hello, web");
```
````

Les différentes saveurs de Markdown ajoutent des fonctionnalités telles que des tableaux, des listes de tâches, des notes de bas de page et des attributs de code clôturés. Les saveurs communes incluent CommonMark et GitHub Flavored Markdown.

## Pourquoi Markdown fonctionne bien pour les sites statiques

| Propriété       | Avantages pratiques                                                    | Remboursement                                                        |
| :-------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------- |
| Texte brut      | Facile à stocker, diff, et version dans Git                            | Contrôle de mise en page limité sans extensions                      |
| Source lisible  | Les auteurs peuvent éditer sans éditeur propriétaire                   | Les documents complexes peuvent avoir besoin de MDX ou de shortcodes |
| Conversion HTML | Les générateurs de sites statiques le rendent aux pages web            | La sortie dépend du générateur et du thème                           |
| Portabilité     | Les fichiers peuvent se déplacer entre les outils et les plates-formes | Les différences de saveur peuvent affecter le rendu                  |

## Markdown et première matière

Les générateurs de sites statiques associent souvent Markdown à la matière frontale, un bloc de métadonnées en haut du fichier.

```md
---
title: "Mon premier post"
date: 2026-10-14T10:00:00Z
tags:
  - blogging
---

Le corps de l'article commence ici.
```

Les métadonnées sont stockées sur le devant; Markdown stocke le contenu. Together, they form a portable content format for Git based publishing workflows. For more detail, see [What Is Front Matter in Markdown?](/blog/what-is-front-matter/) and [What Is a Git based CMS?](/blog/Git based-cms-explained/).
