---
title: LightCMS vs Pages CMS Rich Writing vs a Form Over GitHub
description: >-
  LightCMS gives writers a full editor with AI, dictation, and newsletter. An editor which makes one a writer again
serial: 41
date: "2026-10-15T20:09:55.000Z"
draft: false
tags:
  - lightcms vs pages cms
  - alternatives de pages cms
  - Revue des pages cms
  - Comparaison de github cms
  - meilleur cms pour markdown
preview: /og-image.png
slug: 2026-10-15-lightcms-vs-pagescms
---

[Pages CMS](/comparison/pagescms) Earned its reputation by doing one thing cleanly: it puts a well designed form on top of a GitHub repository and hides Git from the person using it. Pour les équipes qui voulaient "un CMS pour notre repo" sans infrastructure fonctionnelle, cela a suffi.

[LightCMS](https://www.lightcms.me) Starts from the same goal and pushes further into the writing itself. The comparison is less about storage (both commit files to your repository) and more about **What the person publishing actually experiences**.

## Comparaison

|                         | LightCMS                                                        | Pages CMS                                        |
| :---------------------- | :-------------------------------------------------------------- | :----------------------------------------------- |
| **Modèle**              | Espace de travail d'écriture auto-hébergé                       | Tableau de bord basé sur Git                     |
| **Boutique de contenu** | Your GitHub repository                                          | Your GitHub repository                           |
| **Édition**             | Astuce Complète Tapez sur l'éditeur de document WYSIWYG         | Champs de formulaire par type de contenu         |
| **Important avant**     | Géré en tant que formulaire validé                              | Défini dans une configuration YAML dans le dépôt |
| **Médias**              | Glisser-déposer dans le document                                | Médiathèque avec affectation de champ            |
| **Copilote d'IA**       | Inclus dans : contour, rephrase, extension, grammaire           | Non groupé                                       |
| **Voix contre texte**   | Inclus (Whisper)                                                | Non groupé                                       |
| **Newsletters**         | Intégrée via Newsy : GitHub-backed, aucun service de messagerie | Non groupé                                       |
| **Hébergement**         | Auto-hôte sur n'importe quel hôte Node.js                       | Application hébergée ou auto-hébergée            |
| **Licence**             | Apache 2.0                                                      | Open source                                      |

## Là où les pages CMS gagnent

- **Vitesse à la première édition.** Connectez le référentiel, et les formulaires générés sont utilisables presque immédiatement, sans aucune conversation de modélisation de contenu.
- **Enregistrements structurés.** Si votre contenu est des répertoires, des événements ou des entrées de produit, une forme de champ par valeur est l'interface correcte, et l'édition de prose n'est pas pertinente.
- **Familiarité.** Un tableau de bord en forme de CMS n'a pas besoin d'explication pour quiconque en a utilisé un auparavant.
- **Surface minimale.** Moins de pièces mobiles signifie moins à configurer et moins à entretenir.

## Où LightCMS gagne

- **The article is a document.** Headings, block quotes, tables, task lists, syntax-highlighted code, KaTeX math, and drag-and-drop media, edited in place and serialized to clean Markdown. Un formulaire avec une petite zone de texte ne peut pas correspondre à cela pour une écriture de forme longue.
- **Metadata without YAML.** Front matter fields are configured in the app rather than declared in a configuration file, so adding a field never means editing configuration and redeploying.
- \*\*Les extras sont le point. \* L'assistance à la rédaction, la dictée et la newsletter soutenue par GitHub transforment un outil de contenu en un pipeline de publication, sans abonnement de tierce partie.
- **De bout en bout hébergé auto-hébergé.** Apache 2.0, votre infrastructure, votre clé API, vos données.

## La Différence des paroles

Ouvrez les deux outils et écrivez le même article de 1 200 mots.

Dans le CMS des pages, vous complétez une entrée structurée : collez ou tapez Markdown dans le champ du corps, Remplissez les champs de métadonnées ci-dessus et au-dessous, enregistrez. Il fonctionne, et pour un éditeur de champ, il est bon.

Dans LightCMS, vous écrivez. Vous choisissez un niveau d'en-tête dans un menu, faites glisser dans une capture d'écran et insérez un tableau. Vous pouvez dicter un paragraphe en cas de fatigue ou demander au copilote de resserrer l'intro. Pendant ce temps, la première question reste valide car il s'agit d'une forme plutôt que d'un fichier texte fragile.

La différence des composés. La fréquence de publication est fonction de la quantité de frottement que chaque publication coûte, et les écrivains répondent à cette friction plus que toute autre variable de la pile.

## Lorsque les pages CMS sont les bons appels

- Votre contenu est **des enregistrements en forme de champ** plutôt que de prose.
- Vous voulez le plus petit outil possible sans services additionnels.
- Votre équipe travaille déjà confortablement avec Markdown et n'a besoin que d'une interface graphique pour accéder aux fichiers.

## When [LightCMS](https://lightcms.me) Is the Right Call

- La sortie principale est **articles, docs ou newsletters**.
- Les contributeurs sont des écrivains plutôt que des développeurs.
- Vous voulez rédiger, transcrire et distribuer dans un seul outil auto-hébergé.

## Migration

Tous les deux écrivez sur GitHub Markdown avec la première question YAML donc se déplacer entre eux est un changement de configuration plutôt qu'une migration de données : connectez le référentiel, associez les champs, et votre archive est livrée avec vous. Lightcms is configuration independent.

## Foire aux questions

### Does [LightCMS](https://lightcms.me) Store content outside my repository?

1. The repository is the source of truth; [LightCMS](https://lightcms.me) Commits like any other contributor.

### Le CMS des pages est-il gratuit ?

Il a un noyau open source avec des options hébergées. Confirmez la licence actuelle et la tarification par rapport à sa documentation avant de décider.

### Puis-je héberger les deux ?

« Oui. » LightCMS fonctionne sur n'importe quel hôte Node.js, et Pages CMS prend en charge le déploiement auto-hébergé.

### Which is better for a nontechnical writer?

LightCMS, car l'interface principale est un document plutôt qu'une forme de schéma.

### Est-ce que l'un ou l'autre affecte les performances de mon site ?

Les deux produisent des fichiers statiques que votre SSG construit. Les performances sont décidées par votre générateur, votre thème et votre hôte.

Relatif : [LightCMS vs Decap CMS](/comparison/lightcms-vs-decap-cms), [LightCMS vs Keystatic](/comparison/lightcms-vs-keystatic), et [top Git based CMS platforms](/comparison/top-git-cms).
