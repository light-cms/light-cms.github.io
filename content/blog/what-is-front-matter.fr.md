---
title: "Qu’est-ce qui compte au premier plan? Le bloc de métadonnées en haut de votre contenu"
description: "La question principale est le bloc YAML ou TOML en haut d'un fichier Markdown qui indique à votre site son titre, date, tags, et statut brouillon, avec des exemples."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false
keywords:
  - quelle est la première question
  - markdown de la matière première
  - matière frontale du yaml
  - métadonnées statiques du site
  - markdown metadata
preview: /og-image.webp
taxonomies:
  tags:
    - markdown
    - expliqueurs
    - sites statiques
    - cms
---

**La première matière** est le bloc de métadonnées en haut d'un fichier de contenu, clôturé de l'article lui-même. C'est là où un fichier Markdown déclare ce qu'il _est_ (titre, date, tags, auteur, l'état brouillon), afin que votre générateur de site puisse le rendre, le trier et le filtrer.

Si Markdown est le corps d'un poste, la matière première est son étiquette.

---

## Ce qui ressemble à

```markdown
---
title: Notes sur les générateurs de site statiques
description: Un court résumé utilisé pour le référencement et les cartes sociales.
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - static-sites
  - tooling
keywords :
  - static site generators
  - ssg comparison
preview: /og-image. ebp
---

Le corps de l'article commence ici, après la fermeture `---`.
```

Il convient de noter trois choses:

1. **Les clôtures.** Une ligne de trois tirets s'ouvre et ferme le bloc. Tout ce qui se trouve entre les métadonnées; tout ce qui suit appartient à l'article.
2. **Le format.** Cet exemple est YAML, par défaut pour la plupart des générateurs. TOML (`+++`) et JSON (`{...}`) sont également utilisés; Zola accepte les trois, par exemple.
3. **Les champs.** Les clés standard comme `title` et `date` sont comprises par les générateurs; les clés personnalisées comme `keywords` ou `preview` sont disponibles pour vos modèles.

---

## Ce qui compte le plus en ce moment

Chaque champ conduit un comportement concret dans la construction :

| Champ                 | Effet                                         |
| :-------------------- | :-------------------------------------------- |
| `title`               | Page `<title>`, en-têtes et listes            |
| `description`         | Meta description, cartes, résumés de la liste |
| `date`                | Tri de l'affichage, "publié sur", flux        |
| `tags` / `categories` | Pages de taxonomie et liens croisés           |
| `brouillon`           | Exclus de la compilation lorsque `true`       |
| `slug`                | Remplace l'URL dérivée du nom du fichier      |
| `template`            | Choisit quelle mise en page rend la page      |
| `poids`               | Tri manuel dans une section                   |

C'est pourquoi une faute de frappe en avant peut briser une construction: `date: 2026-13-45` ou un onglet errant sous `tags:` est invalide YAML, et le générateur échoue avant d'écrire une seule page.

---

## Pourquoi la matière première existe-t-elle

Les générateurs de sites statiques ne peuvent pas demander à une base de données "quelle est cette page?" parce qu'il n'y a pas de base de données. Ils ont besoin de métadonnées pour vivre **avec** le contenu sous une forme qu'une machine et un humain peuvent lire. La question frontale résout ceci:

- **Des fichiers qui décrivent soi-même.** Un message contient tout ce dont vous avez besoin pour le rendre. Déplacez le fichier et son identité se déplace avec lui.
- **Métadonnées Difficiles.** Changer un titre est un commit à une ligne que vous pouvez revoir et annuler comme tout autre changement.
- Les scripts **outils** et les scripts CI peuvent valider les métadonnées avant la compilation.
- **Portable.** Le même bloc fonctionne entre les générateurs, avec de petites différences de clés.

---

## Conventions communes

Il existe suffisamment de conventions pour que la cohérence soit plus que intelligente :

- **Dates en ISO 8601**: `2026-10-16T09:00:00Z`. Unambiguous à travers les régions, trie correctement.
- **Tags comme une liste**, pas une chaîne séparée par des virgules, donc une balise contenant un espace ne se divise pas en deux.
- **Slugs minuscules avec des traits d'union.** Les noms de fichiers deviennent des URL, donc `my-great-post` bat `My Great Post.md`.
- **`draft: true` pour les travaux non terminés.** La façon sûre de sauvegarder sans publier.
- **Une vraie `description`.** Le champ le plus souvent laissé vide puis regretté quand le lien est partagé.

---

## Où un CMS s'adapte

La question de front est la partie de Markdown que les écrivains non techniques ne devraient pas voir. Il s'agit d'une syntaxe avec des bords pointus : l'indentation est importante, les guillemets sont importants, les formats de date.

Un CMS basé sur Git le gère comme un **formulaire** (remplissez le titre, choisissez la date, cliquez sur les balises) et sérialise le YAML valide à la sauvegarde. Les écrivains ne pensent jamais à la clôture; le référentiel reçoit toujours ce que le générateur attend. Cette fonctionnalité unique élimine l'un des modes d'échec les plus courants dans la publication statique des sites.

LightCMS, par exemple, valide la première question lorsque vous tapez et l'écrit sur commit (voir [la visite de l'éditeur](/blog/lightcms-editor-tour/)), donc les métadonnées restent correctes, peu importe qui est en train de publier.

---

## Foire aux questions

### La question préliminaire est-elle nécessaire?

Pour les pages dans une section triée par date, oui : les générateurs attendent au moins un titre et une date. Les exigences exactes dépendent du schéma de votre générateur.

### YAML vs TOML vs JSON : que dois-je utiliser ?

Quelle que soit la valeur par défaut de votre générateur. La cohérence à l'intérieur d'un référentiel est plus importante que le format lui-même.

### La matière première peut-elle contenir des listes et des objets ?

« Oui. » Les cartes imbriquées et les listes sont normales : galeries d’images, auteurs avec rôles, et titres alternatifs sont adaptés.

### Combien de temps doit être la description ?

Visez approximativement 140 à 160 caractères: assez long pour avoir un sens dans les résultats de recherche, assez court pour ne pas être tronqué.

### Le front important affecte-t-il le référencement ?

Directement : c'est d'où viennent le titre et la méta description, donc c'est l'une des petites choses les plus précieuses dans un site statique.

---

Relatif : [qu'est-ce que Markdown?](/blog/what-is-markdown/), [l'éditeur LightCMS](/blog/lightcms-editor-tour/), et [ce qu'un générateur de site statique] (/blog/what-is-a-static-site-generator/).
