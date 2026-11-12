---
title: "LightCMS vs Storyblok : Édition de pages visuelles vs Écriture de documents"
description: "L'éditeur visuel de Storyblok est conçu pour les pages marketing; LightCMS est un éditeur de documents basé sur Git. Où chacun s'adapte et comment il stocke le contenu."
serial: 51
date: 2026-10-16T12:10:00Z
draft: false
keywords:
  - lightcms vs storyblok
  - alternatives à storyblok
  - éditeur visuel cms
  - alternative de prix storyblok
  - Cms basés sur les composants
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - storyblok
    - cms
    - Comparaison
    - sans tête
---

[Storyblok](https://www.storyblok.com) built its reputation on one good idea: edit the page while looking at the page. Son éditeur visuel, avec des blocs de glisser-déposer et une prévisualisation en direct, convient parfaitement aux sites de marketing axés sur les composants.

LightCMS partage l'ambition "visuelle" mais l'applique à un objet différent : le document. Là où Storyblok édite des pages composées, LightCMS modifie la prose.

---

## Que fait chaque outil

**Storyblok** est un CMS hébergé sans tête avec un système de composants (bloc). Le contenu est modelé comme des histoires imbriquées faites de blocs, édité dans un éditeur visuel avec un aperçu en direct, livré par le biais d'une API, et facturé par plan et par utilisation.

**LightCMS** est un espace de travail auto-hébergé basé sur Git. Le contenu est des fichiers Markdown qui sont en tête dans votre référentiel, édités dans un éditeur de document WYSIWYG, livrés en HTML statique par votre build.

|                       | LightCMS                              | Storyblok                                 |
| :-------------------- | :------------------------------------ | :---------------------------------------- |
| **Stockage**          | Fichiers dans votre dépôt             | Nuage de Storyblok (hébergé)              |
| **Livraison**         | Version statique → CDN                | API de contenu à l'heure de la demande    |
| **Édition du modèle** | Document (prose d'abord)              | Visuel, composant/bloc basé sur           |
| **Modèle de contenu** | Champs de la matière première         | Schémas de blocs imbriqués                |
| **Aperçu**            | Le message rendu après la compilation | Prévisualisation en direct dans l'éditeur |
| **Prix**              | Libre (Apache 2.0), auto-hébergé      | SaaS à base de plan                       |
| **Portabilité**       | Cloner le dépôt                       | Exportation requise                       |
| **Extras**            | Copilote d'IA, voix, newsletters      | Éditeur visuel, applications marketplace  |

---

## Où gagne Storyblok

- **Édition visuelle des pages composées.** Faites glisser un héros, une grille, et un CTA en place et voyez le résultat immédiatement. Pour les pages de destination construites à partir de composants, c'est l'interface correcte.
- **Aperçu en direct sans build.** Ce que vous voyez est l'histoire comme rendue par leur API de prévisualisation, mise à jour lorsque vous tapez.
- **Une autonomie favorable au marketing.** Les équipes non techniques réorganisent les sections de la page sans toucher à un développeur.
- **Hébergé et géré.** Aucune infrastructure à gérer, avec une organisation de soutien derrière elle.
- **Réutilisation des composants** entre les pages, avec validation du schéma sur chaque bloc.

## Où LightCMS gagne

- **Aucune facture qui soit adaptée au succès.** Logiciel libre, votre hôte, votre CDN.
- **Propriété du contenu.** Le référentiel est la source de vérité; rien ne doit être exporté. Voir le [contenu en tant que code](/blog/content-as-code/).
- **Construit pour une forme longue.** Les articles, la documentation et le journal des modifications sont des documents (en-têtes, listes, tableaux, tableaux, code, mathématiques) édités directement. Un arbre de bloc est une surface pauvre pour 2 000 mots.
- **Sortie statique.** Les pages pré-affichées à partir d'un CDN sont meilleures sur [Core Web Vitals](/blog/static-vs-dynamic/) que celles assemblées par API.
- **Les extras sont groupés.** [AI drafting](/blog/lightcms-ai-copilot/), [dictée par la voix](/blog/lightcms-voice-to-text/), et [newsletter dispatch](/blog/newsletter-email-automation/).

---

## Le test de la parole

Prenez une vraie tâche: publier un article de 1 500 mots avec un tableau, trois captures d'écran, et un bloc de code.

- Dans Storyblok, vous l'assemblez à partir de blocs, un groupe de champs à la fois, à l'intérieur d'un volet d'aperçu.
- Dans LightCMS, vous l'écrivez, déposez les images et publiez.

Maintenant, prenez la tâche opposée : reconstruire une page d'atterrissage à partir d'un héros, d'une grille de fonctionnalités et d'un carrousel de témoignage.

- Storyblok le fait visuellement, en quelques minutes.
- LightCMS ne tente pas : la composition des pages appartient à vos modèles et composants, pas à votre outil de contenu.

La bonne réponse est généralement "les deux, pour différents emplois". Les publications ont tendance à nécessiter plus de l'opposé de la deuxième tâche qu'elles ne l'admettent.

---

## Migration

Storyblok exporte des histoires en JSON. Aplanir des blocs imbriqués dans Markdown avec la première matière est mécanique pour le contenu en forme de blog et perdue pour les pages lourdement composées. Ce sont des conceptions de pages, et elles appartiennent de toute façon à votre frontend.

---

## Que devriez-vous choisir?

- **Choisissez Storyblok** pour les pages de marketing basées sur des composants éditées par une équipe non technique qui a besoin d'une infrastructure hébergée et gérée.
- **Choisissez LightCMS** pour une publication statique lourde de contenu écrite par des personnes qui se soucient de la prose.

---

## Foire aux questions

### Est-ce que Storyblok est gratuit ?

Storyblok offre un niveau gratuit pour les petits projets; les plans de production sont basés sur des abonnements. LightCMS est Apache 2.0 sans sièges ni niveaux.

### LightCMS supporte-t-il les constructeurs de pages ?

Non, et délibérément. LightCMS gère le contenu; la mise en page vit dans vos modèles et composants.

### Storyblok peut-il servir des pages statiques ?

Vous pouvez prérendre depuis Storyblok au moment de la compilation, mais la plate-forme hébergée reste la source du record et la facture restante.

### Quelle est la meilleure solution pour le référencement ?

Les deux travaux ont été effectués. La sortie pré-rendu statique a le chemin plus facile sur les métriques de vitesse, la qualité du contenu décide des classements. Voir [le meilleur CMS pour les sites statiques] (/blog/best-cms-for-static-sites/).

### Puis-je héberger un Storyblok?

Non, il s'agit d'un service hébergé. L'auto-hébergement est un avantage LightCMS et basé sur Git.

---

Plus : [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/), [LightCMS vs Sanity](/comparison/lightcms-vs-sanity), [headless vs Git based CMS](/blog/headless-vs-git-based-cms/).
