---
title: "LightCMS vs Storyblok : Écriture de documents vs pages de construction"
description: "Comparer LightCMS et Storyblok : un éditeur de documents basé sur Git pour les sites statiques par rapport à un CMS visuel hébergé pour les pages basées sur des composants."
serial: 51
date: 2026-10-16T12:10:00Z
draft: false

tags:
  - lightcms
  - storyblok
  - cms
  - Comparaison
  - sans tête
slug: lightcms-vs-storyblok
---

Storyblok et LightCMS s'appellent tous deux des éditeurs visuels, mais ils sont visuels de différentes manières. Storyblok vous permet de construire des pages à partir de blocs et de voir la mise en page en cours d'édition. LightCMS vous donne un éditeur de document propre pour écrire des articles qui finissent comme Markdown dans votre dépôt Git.

Le bon choix dépend de ce que vous faites. Une page de destination construite à partir de composants réutilisables a besoin d'un outil différent de celui d'un blog de 1 500 mots avec des échantillons de code et des captures d'écran.

## Comment ils fonctionnent

Storyblok est un CMS hébergé sans tête. Le contenu est modelé comme des blocs, édités dans une prévisualisation visuelle, et livré via une API. Votre frontend récupère ce contenu et le rendu.

LightCMS est un espace de travail d'écriture basé sur Git. Le contenu est stocké en tant que fichiers Markdown avec une première question dans votre référentiel. Vous écrivez dans un éditeur de document, livrez les changements et votre générateur statique construit le site.

|                     | LightCMS                                | Storyblok                                       |
| ------------------- | --------------------------------------- | ----------------------------------------------- |
| Stockage du contenu | Fichiers dans votre dépôt Git           | CMS hébergés                                    |
| Envoi               | Version statique vers CDN               | Content API                                     |
| Édition du style    | Première écriture du document           | Édition de pages visuelles basées sur des blocs |
| Meilleur pour       | Articles, docs et notes de modification | Pages d'accueil, sites avec composants          |
| Aperçu              | Après la construction/l'aperçu du site  | Aperçu visuel en direct                         |
| Tarification        | Auto-hébergé, sans frais de licence     | SaaS à base de plan                             |

## Quand Storyblok a plus de sens

Storyblok brille quand la page elle-même est le produit. Si les marketeurs ont besoin de se déplacer sur un héros, une grille de fonctionnalités, des témoignages ou de l'ATC sans demander à un développeur, un éditeur visuel basé sur un bloc a un sens. L'aperçu en direct aide lorsque la mise en page est aussi importante que la copie.

## Lorsque LightCMS a plus de sens

LightCMS brille lorsque l'écriture est le produit. De longs articles dans un éditeur de blocs peuvent se sentir clunky. Dans un éditeur de document, vous écrivez simplement : en-têtes, listes, tables, images, code, tout dans le flux. Le résultat est simple Markdown in Git, qui garde votre contenu portable et votre site facile à publier sous forme de fichiers statiques.

## Choix entre eux

Choisissez Storyblok si votre équipe a besoin de construire et de réorganiser les pages visuellement. Choisissez LightCMS si votre équipe publie principalement des articles et des documentations et veut une expérience d'écriture plus tranquille.

Si vous êtes sur la clôture, regardez vos dix dernières pages publiées. Si la plupart d'entre eux sont des pages de marketing structuré, Storyblok convient. Si la plupart sont des articles ou des docs, LightCMS se sentira probablement mieux. Voir aussi [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/) et [LightCMS vs Sanity](/comparison/lightcms-vs-sanity).
