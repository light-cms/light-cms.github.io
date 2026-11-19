---
title: "LightCMS vs Sanity: Fichiers dans Git vs une plateforme de contenu hébergé"
description: "Sanity est une plate-forme de contenu structurée avec un lac de contenu hébergé ; LightCMS écrit Markdown dans votre dépôt. Où chaque approche gagne pour les blogs et les sites statiques."
serial: 48
date: 2026-10-16T11:40:00Z
draft: false
keywords:
  - lightcms vs sanité
  - alternatives de santé
  - alternatives de tarification des cms de santé
  - git basé sur cms vs sanity
  - bonne santé pour les blogs
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - bonne santé
    - cms
    - Comparaison
    - sans tête
---

[Sanity](https://www.sanity.io) is one of the strongest headless platforms available: a flexible schema, GROQ queries, a customizable React Studio, real-time collaboration, and a hosted content lake that serves any frontend you point at it.

LightCMS résout un problème adjacent mais différent : publier des documents sur un site statique depuis un référentiel que vous possédez. La comparaison n'a de sens qu'une fois que vous séparez ce pour quoi chaque architecture est optimisée.

---

## La différence architecturale

**Sanity** stocke le contenu en tant que documents structurés dans le nuage de Sanity's (lac de contenu), interrogé au moment de l'exécution par GROQ et livré via leur CDN. Votre frontend récupère le contenu; Sanity gère l'infrastructure.

**LightCMS** stocke le contenu en tant que fichiers Markdown avec la face principale YAML dans votre dépôt GitHub. Votre générateur de site statique les lit au moment de la compilation et émet du HTML.

|                       | LightCMS                                 | Sanité                                               |
| :-------------------- | :--------------------------------------- | :--------------------------------------------------- |
| **Stockage**          | Votre dépôt Git                          | Contenance sanitaire du lac (hébergé)                |
| **Livraison**         | HTML statique pré-rendu                  | API à l'heure de la demande (GROQ)                   |
| **Modèle de contenu** | Documents + recto                        | Schémas personnalisés dans le code                   |
| **Exécution**         | Aucun: build + CDN                       | Application client + API                             |
| **Facturation**       | Libre (Apache 2.0), auto-hébergé         | Service hébergé basé sur l'utilisation/le siège      |
| **Portabilité**       | Cloner le dépôt                          | Exporter et convertir                                |
| **Éditeur**           | Éditeur de document TipTap               | Studio personnalisable                               |
| **Extras**            | AI copilote, vocale-to-text, newsletters | Applications écosystème, collaboration en temps réel |

---

## Là où la santé gagne

- **Livraison multi-canal.** Une source de contenu alimentant un site Web, une application et une intégration, avec des requêtes en temps réel, est la villa de Sanity.
- **Modèle de contenu personnalisé.** Les schémas définis dans le code vous donnent la validation, les références et les champs conditionnels que le contenu basé sur des fichiers ne peut pas exprimer.
- **Collaboration en temps réel.** Éditeurs multiples sur le même document, en direct. Git vous donne un examen, pas une simultanéité.
- **Mises à jour instantanées.** Les changements de contenu sont en direct sans attendre une compilation.
- **Un écosystème riche d'application** et un puissant outil de développement autour de Studio.

## Où LightCMS gagne

- **Pas de siège pour chaque appel, par API.** L'outil est gratuit et auto-hébergé; votre seul coût est l'hôte que vous avez déjà.
- **Aucun vendeur dans le chemin de contenu.** Le contenu se trouve dans votre référentiel, lisible, forkable et portable dans dix ans. Le contenu hébergé vit là où le vendeur le dit.
- **Zero runtime.** Aucune API à interroger par requête, aucune limite de taux, aucune panne sur la page de statut de quelqu'un d'autre. Voir [les sites statiques vs dynamiques] (/blog/static-vs-dynamic/).
- \*\*Construit pour l'écriture. \* Un éditeur de document complet avec [AI drafting] (/blog/lightcms-ai-copilot/), [dictation](/blog/lightcms-voice-to-text/), et [newsletter dispatch](/blog/newsletter-email-automation/), où Sanity's Studio est configuré pour la modélisation de contenu plutôt que pour la création à long terme.
- **Configuration mesurée en minutes.** Connectez un dépôt et écrivez ; il n'y a pas de phase de conception de schéma avant votre premier post.

---

## La forme du coût, Concrètement

Le niveau gratuit de Sanity est généreux, et la tarification varie avec l'utilisation et les sièges, beaucoup jusqu'à ce que le trafic et la taille de l'équipe augmente. La sortie statique d'un dépôt Git coûte le même coût pour un lecteur et un million : minutes de construction (déjà payées par votre CI) et bande passante CDN (près de zéro).

Pour une publication, c'est une courbe structurellement moins chère. Pour un produit financé ayant des besoins en contenu multi-canaux, Sancy achète une véritable capacité.

---

## Migration

Sanity exporte vers JSON/NDJSON ; convertir des documents en Markdown avec la première matière est un script, avec des références et des types de blocs personnalisés nécessitant une attention manuelle. L'inverse (poussant Markdown dans des documents structurés) est généralement la direction la plus difficile. Les deux chemins existent; plus votre contenu est proche de la prose, moins le déplacement vers des fichiers est coûteux.

---

## Que devriez-vous choisir?

- **Choisissez Sanity** lorsque le contenu est structuré, multi-canal et interrogé lors de l'exécution par les applications.
- **Choisissez LightCMS** lorsque la sortie est un site statique, le contenu est des documents, et la propriété plus le contrôle des coûts.

---

## Foire aux questions

### La santé est-elle gratuite ?

Sanity offre un niveau gratuit avec des limites, puis des prix basés sur l'utilisation. LightCMS est sous licence Apache 2.0 et auto-hébergé, donc il n'y a pas de frais de licence à n'importe quelle échelle.

### LightCMS peut-il collaborer en temps réel ?

Non. LightCMS optimise pour des sessions d'écriture simple ciblées et une revue basée sur Git. La coédition en direct simultanée est une force de Sanity.

### Est-ce que Sanity génère des sites statiques?

Vous pouvez pré-extraire de Sanity au moment de la compilation (les architectures fonctionnent de l'une ou de l'autre), mais Sanity reste la source hébergée des records, et ses prix s'appliquent toujours.

### Est-ce que je peux héberger Sanity?

Sanity est un service hébergé ; l'auto-hébergement n'est pas le modèle pris en charge. C'est une différence significative si la résidence de données ou les plafonds de coût importent.

### Quelle est la meilleure solution pour le référencement ?

Les deux peuvent être tout aussi bien classées ; la sortie statique tend à aider Web Vitals du noyau. Voir [le meilleur CMS pour les sites statiques] (/blog/best-cms-for-static-sites/).

---

Plus : [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/), [LightCMS vs Payload CMS](/comparison/lightcms-vs-payload-cms), [headless vs Git based CMS](/blog/headless-vs-git-based-cms/).
