---
title: "Content as Code: Writing Like Code"
description: >-
  Treat content like code, version it, review changes, and manage it alongside your projects. This post explores the benefits and practicalities of a content as code workflow.
date: "2026-11-04T19:22:00Z"
draft: false
tags:
  - contenu en tant que code
  - docs comme code
  - contenu dans git
  - Markdown workflow
  - contenu contrôlé par la version
isCJKLanguage: false
headless: false
serial: 47
preview: /og-image.png
slug: content-as-code
---

**Content as code** Is the practice of storing writing the way developers store source: plain text files in a repository, reviewed in pull requests, validated by automated checks, and deployed by a pipeline.

"Docs as code" est le nom plus ancien. Les équipes de documentation technique l'ont commencé, et il s'est propagé aux blogs, aux changelogs, copie marketing, et tout ce qui était utilisé pour vivre dans un wiki ou une base de données CMS.

## Les trois engagements

Le contenu sous forme de code se résume à trois choix :

1. **Le texte brut est le format.** Les fichiers Markdown ou AsciiDoc, YAML ou TOML, UTF-8. Rien de propriétaire, rien qui ait besoin de l'outil original pour s'ouvrir.
2. **Le dépôt est le système d'enregistrement.** Pas une base de données, pas un wiki, pas un lecteur partagé. Si elle n'est pas dans Git, elle n'existe pas.
3. **Le pipeline traite le contenu comme une construction.** Les Linters vérifient les liens et le style, les aperçus rendent chaque demande de pull et les déploiements de fusion.

Une fois celles-ci conservées, la plupart des avantages suivent automatiquement.

### Ce que vous héritez de la pratique logicielle

### Réviser cela signifie quelque chose

Une pull request sur un document donne des commentaires au niveau de la ligne sur la phrase exacte, une approbation explicite et une fusion. La revue éditoriale se produit dans la demande d'ajout au lieu d'un message contenant des pièces jointes.

### Historique qui répond aux questions

`git log` On a file shows every change, author, and timestamp. « Quand avons-nous modifié la demande de prix ? » est une recherche et non une enquête.

### Automatisation

L'orthographe, la vérification des liens, les règles de style, la validation de la première matière et l'aperçu compilent toutes les versions exécutées sur la même CI que celles qui compilent du code. Les métadonnées brisées échouent dans le pipeline au lieu du site en direct.

### Travail parallèle

Deux auteurs sur deux fichiers fusionnent proprement. Les conflits sont rares par construction, car l'unité de contenu est un fichier.

### Back up and portability

Chaque clone est une copie complète. Moving platforms is a `git clone` Away from succeeding.

### Là où il y a du mal

La liste honnête, parce que ce n'est pas libre:

- **Nontechnical writers need an interface.** Raw Git is a cliff. Le contenu en tant que code fonctionne en pratique lorsque vous associez le référentiel à un outil d'édition qui masque les commits, qui est le remplissage des outils CMS basés sur Git.
- **Rich media est maladroit.** Les images et les documents signifient des fichiers binaires dans le référentiel : clones plus grands, diffs maladroits, LFS occasionnels.
- **La structure est limitée.** Les fichiers ne se joignent pas. Lorsque le contenu devient relationnel, une base de données gagne sa complexité.
- **Les conflits de fusion existent toujours.** Rare quand les fichiers sont par document, douloureux quand deux personnes modifient le même fichier long.
- **La recherche et la prévisualisation nécessitent un outil.** Un wiki vous permet de rechercher instantanément ; un site statique a besoin d'une étape d'index.

Aucun de ces éléments n'est disqualifiant pour une publication. Elles sont toutes réelles pour d'autres formes de travail.

## La pile pratique

Une configuration typique de content-as-code pour une publication ressemble à ceci :

```text
contenu/
── posts/
── 2026-10-16-shipping-notes.md
文<unk> ─ 2026-10-02-release-1-4.md
── pages/
文<unk> ─ about.md
<unk> ─ _index.md 
 <unk> ─ _index.md
```

- **Files** Carry Markdown and front matter.
- **CI** Validates front matter, checks links, and builds previews per pull request.
- **A CMS tool** Provides the writing surface for anyone who is not comfortable in an editor.
- **Deploy** Publishes the built output on merge.

Le dépôt reste reconnaissable à un développeur et invisible pour un écrivain. Cet équilibre est tout à fait la peine.

## Pourquoi ça dure

Le contenu en tant que code gagne à temps. Les bases de données ont besoin de leur schéma, de leur version serveur et de leur vendeur. Les Wikis ont besoin de leur vendeur. Les documents propriétaires ont besoin de leur vendeur.

Un répertoire de fichiers Markdown a besoin d'un éditeur de texte, et il sera toujours ouvert dans un dans vingt ans peu importe ce qui arrive à n'importe quel outil de la chaîne. Pour le contenu destiné à survivre à la plate-forme sur laquelle il a été écrit, il s'agit de la gestion des risques plutôt que de la nostalgie.

The same premise runs through every Git based CMS: [LightCMS](/blog/what-is-lightcms/) Adds the writing surface, and the repository keeps the permanence. See [drafts, revisions, and rollbacks](/blog/lightcms-drafts-and-versioning/) For the workflow in detail.

### Foire aux questions

### Le contenu en tant que code est-il le même qu'un CMS basé sur Git ?

C'est la philosophie, un CMS basé sur Git est une implémentation. Vous pouvez pratiquer le contenu en tant que code avec rien d'autre qu'un éditeur, et un CMS basé sur Git donne un moyen aux non-développeurs.

Should writers be familiar with Git?

Pas si l'outillage est correct. Les écrivains devraient voir un éditeur et un bouton de publication; les commits, les branches et les revues se produisent en dessous.
