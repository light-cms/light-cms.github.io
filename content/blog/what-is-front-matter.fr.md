---
title: "Qu’est-ce qui compte au premier plan dans Markdown?"
description: "La matière première est les métadonnées YAML, TOML ou JSON en haut d'un fichier Markdown que les générateurs de site statiques utilisent pour les titres, dates, tags et modèles."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false

tags:
  - markdown
  - expliqueurs
  - sites statiques
  - cms
---

La matière frontale est un bloc de métadonnées en haut d'un fichier de contenu qui décrit la page à un générateur de site statique. Il contient généralement des champs tels que le titre, la description, la date, les étiquettes, l'état du brouillon et les informations du modèle.

## Formats communs de la face avant

La plupart des générateurs de sites statiques supportent la matière frontale YAML, et certains supportent également TOML ou JSON.

```md
---
title: "Notes sur les générateurs de sites statiques"
description: "Un court résumé utilisé dans les métadonnées et les aperçus.
date: 2026-10-16T09:00:00Z
ébauche : balise fausse
:
 - sites statiques
 - outil
---
```

Les métadonnées se trouvent entre les délimiteurs en haut du fichier. Le corps du Markdown suit au-dessous.

## Contrôle de la matière avant

| Champ         | Utilisation courante               | Impact de la construction                                       |
| :------------ | :--------------------------------- | :-------------------------------------------------------------- |
| `title`       | Titre et en-tête de la page        | Les titres manquants peuvent casser des modèles ou des annonces |
| `date`        | Tri et publication des métadonnées | Les dates invalides peuvent causer des erreurs de compilation   |
| `brouillon`   | État du brouillon/publié           | Les projets peuvent être exclus des constructions de production |
| `tags`        | Pages et filtres de taxonomie      | La structure non valide peut casser la génération de taxonomie  |
| `slug`        | Remplacer le chemin d'URL          | Peut changer les URL canoniques                                 |
| `description` | Métadonnées et aperçus             | Affecte les snippets et les aperçus sociaux                     |

## Erreurs courantes

Les erreurs de front-matter sont une cause fréquente de défaillances de construction de sites statiques. Les problèmes courants incluent l'indentation YAML invalide, les formats de date incorrects, les guillemets manquants autour des caractères spéciaux et les noms de champs incohérents entre les fichiers.

Un CMS basé sur Git peut réduire ces erreurs en exposant la matière frontale comme des champs de formulaire et en validant les valeurs avant de sauvegarder. Même avec un éditeur visuel, gardez le format sous-jacent du front matter cohérent dans votre référentiel de contenu.

Pour une lecture liée, voir [Qu'est-ce que Markdown ?](/blog/what-is-markdown/) et [The LightCMS Editor Tour](/blog/lightcms-editor-tour/).
