---
title: "LightCMS vs Sanity: Fichiers Git vs une plateforme de contenu hébergé"
description: "Comparez LightCMS et Sanity pour la publication : Markdown in Git avec des compilations statiques contre une plate-forme de contenu hébergée avec des API et une collaboration en temps réel."
serial: 48
date: 2026-10-16T11:40:00Z
draft: false

tags:
  - lightcms
  - bonne santé
  - cms
  - Comparaison
  - sans tête
slug: lightcms-vs-sanity
---

Sanity et LightCMS vous aident tous deux à publier du contenu, mais ils partent de différents endroits. Sanity est une plate-forme de contenu hébergée : votre contenu vit dans le lac de contenu de Sanity, vous le modélisez en schémas, et votre frontend le récupère à travers des API. LightCMS is a Git based editor: your content lives as Markdown files in your repository, and your static site generator builds HTML from those files.

Si vous construisez un blog, un site de documentation ou un site de marketing, la vraie question est simple: avez-vous besoin d'une API de contenu, ou avez-vous besoin d'un bon endroit pour écrire et publier?

## Comment le modèle de stockage change les choses

Avec Sanity, le contenu est structuré dans un service hébergé. Vous le demandez avec GROQ, et les changements peuvent être disponibles immédiatement via l'API. Cela a un sens lorsque le même contenu alimente un site web, une application et d'autres clients.

Avec LightCMS, le contenu est un fichier dans votre dépôt. Vous le modifiez, le livrez, et votre pipeline de construction le publie. Il n'y a pas d'API de contenu d'exécution pour continuer à fonctionner. Cela a un sens quand la sortie est un site statique et que vous voulez que l'historique du contenu vive dans Git.

|                             | LightCMS                               | Sanité                                 |
| --------------------------- | -------------------------------------- | -------------------------------------- |
| Stockage du contenu         | Fichiers Markdown dans votre dépôt Git | Lac de contenu hébergé                 |
| Envoi                       | Version statique vers CDN              | API à l'heure de la demande            |
| Content modeling            | Champs de la matière première          | Schémas personnalisés dans le code     |
| Collaboration en temps réel | Workflow de révision Git               | Collaboration en temps réel du Studio  |
| Tarification                | Auto-hébergé, sans frais de licence    | Plans basés sur l'utilisation/le siège |
| Portabilité                 | Cloner le dépôt                        | Exporter et convertir                  |

## Quand la santé a plus de sens

Sanity gagne son fort quand le contenu est plus que des pages. Si le même contenu doit apparaître sur un site web, une application et ailleurs, le modèle structuré et les API de Sanity sont utiles. Il gère également les schémas, les références et la collaboration en temps réel dans l'éditeur.

## Lorsque LightCMS a plus de sens

LightCMS s’adapte lorsque vous publiez principalement des documents sur un site statique. Vous écrivez dans un éditeur, le contenu vit dans votre dépôt, et le site est intégré dans des fichiers statiques. Il n'y a pas d'API de contenu à exécuter à chaque requête et pas de magasin de contenu hébergé assis au milieu.

Pour les écrivains, cette différence se fait jour après jour. LightCMS est mis en place pour la rédaction et la publication d'articles. Sanity Studio est puissant, mais il est construit autour de la modélisation du contenu en premier.

## Choix entre eux

Si votre contenu a besoin de se comporter comme des données de produit (structuré, interrogé, réutilisé et mis à jour en temps réel), Sanity est le choix le plus fort. Si la plupart de votre travail est composé d'articles et de pages, LightCMS est plus simple à utiliser : fichiers en Git, livraison statique, moins de pièces en mouvement.

Une bonne façon de décider est de regarder votre contenu. If it’s mostly long-form posts with front matter, start with the Git based path. Si vous continuez à rencontrer des relations, des requêtes en direct ou plusieurs frontends, c’est quand une plateforme sans tête comme Sanity commence à gagner sa complexité. See also [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/) and [Headless vs Git based CMS](/blog/headless-vs-Git based-cms/).
