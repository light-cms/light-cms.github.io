---
title: "Static vs Dynamic Sites: Lequel choisir et quand?"
description: "Une comparaison pratique des sites Web statiques et dynamiques : performance, coût, sécurité, et quand un site statique avec un CMS basé sur Git est le meilleur choix."
serial: 7
date: 2026-10-14T12:00:00Z
draft: false
keywords:
  - site statique vs site dynamique
  - site statique vs site web dynamique
  - avantages statiques du site
  - jamstack vs dynamique
  - cms statique du site
preview: /og-image.webp
taxonomies:
  tags:
    - sites statiques
    - architecture
    - jamstack
---

Choisir entre un site statique et un site dynamique est l'une des premières décisions architecturales que vous allez prendre pour un blog, site de documentation, ou site Web de l'entreprise. La version courte: **statique gagne sur la vitesse, le coût, la sécurité et la durabilité**. Le rendu dynamique a encore une place, un plus petit qu'il y a dix ans.

---

## Qu'est-ce qu'un site statique ?

Un site statique est une collection de fichiers HTML, CSS, JavaScript et média. Les pages sont générées une fois, lors de la compilation, et servies comme elles sont. Chaque visiteur reçoit les mêmes octets, généralement à partir d'un nœud de bord CDN global proche d'eux.

Les générateurs de sites statiques populaires incluent [Astro](https://astro.build), [Hugo](https://gohugo.io), [Eleventy](https://www.11ty.dev), [Jekyll](https://jekyllrb.com), et [SvelteKit](https://svelte.dev). [zine](https://zine-ssg.io) is a new static site generator that combines the speed of static sites with the editing experience of a CMS.

## Qu'est-ce qu'un site dynamique ?

Un site dynamique affiche chaque requête sur le serveur (ou dans un worker fonctionnel/edge worker), en interrogeant souvent une base de données en premier. Les systèmes de gestion de contenu comme WordPress puissance ce modèle: PHP exécute, une base de données répond, et le HTML final est assemblé par visite.

---

## Comparaison de la tête à tête

| Facteur                    | Site statique                                                            | Site dynamique                                                          |
| :------------------------- | :----------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| Performances               | Pré-rendu, desservi par CDN, presque instantané                          | Dépend de la charge du serveur et de la latence de la base de données   |
| Sécurité                   | Aucune base de données ou administration n'est exposée                   | Mise à jour constante, vulnérabilités de plugin, risque d'injection SQL |
| Coûts                      | Les tiers gratuits couvrent facilement la plupart des sites              | Serveurs, bases de données et coûts de mise à l'échelle                 |
| Évolutivité                | Écailles par réplication CDN                                             | Nécessite une mise à l'échelle verticale ou horizontale                 |
| Durabilité                 | Fichiers Outlive frameworks et vendeurs                                  | Lié à un runtime, base de données et hôte                               |
| Mises à jour du contenu    | Reconstruire en secondes via CI/CD                                       | Instantané, mais avec une surface opérationnelle plus lourde            |
| Fonctionnalités dynamiques | Ajouté via des formulaires, des fonctions ou des travailleurs à distance | Natif, au prix de la complexité                                         |

---

## Là où les sites statiques gagnent

- **Vitesse**: Le prérendu HTML servi à partir du bord donne de forts scores Web Vitals, que les moteurs de recherche récompensent directement.
- **Sécurité** : Il n'y a pas de base de données de production, pas de panneau de connexion exposé à Internet, et beaucoup moins de surfaces d'attaque.
- **Coût**: Un blog personnel ou un site de documentation s'adapte confortablement à l'intérieur de niveaux gratuits de plates-formes d'hébergement modernes.
- **Simplicité des opérations** : Votre "serveur" est un dossier de fichiers. Si votre hôte disparaît, vous pouvez servir les mêmes fichiers n'importe où.
- **Réduire les émissions** : Servir un fichier statique mis en cache utilise une fraction de l'énergie du rendu d'une page à la demande, sans base de données permanente et sans calcul par requête. Voir [Sites statiques et CO2](/blog/greener-web-static-sites/) pour la photo complète.

## Là où les sites dynamiques font toujours sens

- Pages fortement personnalisées (tableaux de bord, zones de compte)
- Contenu qui doit changer en milliseconde par milliseconde (tableaux de bord de trading, enchères en direct)
- Applications où chaque page est une requête de base de données unique

Même ainsi, le modèle moderne commun est un **frontend statique avec des îles dynamiques** : un site statique et des fonctions sans serveur, ou des API tierces utilisées uniquement lorsque nécessaire.

---

## La pièce manquante : Modifier le contenu statique

La plainte historique concernant les sites statiques était en cours d'édition, pas de rendement. Demander aux rédacteurs d'extraire les branches Git et éditer les fichiers Markdown à la main est une friction que la plupart des gens n'accepteront pas.

Un CMS basé sur Git ferme cette lacune : les auteurs écrivent dans un éditeur visuel, et les commits CMS nettoient Markdown et la première question dans votre référentiel. Votre pipeline CI/CD reconstruit et redéploie automatiquement le site. Vous gardez l'architecture statique ; les écrivains obtiennent une expérience d'édition normale.

- (/blog/why-this/) explique la philosophie qui sous-tend ce modèle.
- [Commencer avec LightCMS](/getting-started/) traverse la fin du workflow jusqu'à la fin.
- [Plateformes d'hébergement de sites statiques](/misc/top-static-site-hosting/) compare où servir votre site statique.

---

## Foire aux questions

### Les sites statiques sont-ils bons pour le SEO?

« Oui. » Les sites statiques se chargent généralement plus rapidement et ont de meilleurs sites Web vitaux de base que les sites rendus dynamiquement, qui sont tous deux des facteurs de classement. Ils facilitent également le contrôle des données sémantiques et structurées en HTML propre.

### Un site statique peut-il avoir un formulaire de contact ou des commentaires ?

« Oui. » JavaScript côté client, fonctions sans serveur ou services tiers gèrent les formulaires et interactivité, et la page elle-même reste statique.

### Un site statique est-il moins cher à courir?

Pour les sites axés sur le contenu, presque toujours. Les fichiers statiques peuvent être servis à partir d'hébergeurs gratuits avec une bande passante généreuse, tandis que les sites dynamiques ont besoin de serveurs en cours d'exécution et de bases de données gérées.

### Les sites statiques ont-ils besoin d'un CMS ?

Pas nécessairement, mais si plus d'une personne publie, ou si vous voulez écrire depuis votre téléphone, un CMS basé sur Git vous donne l'expérience d'édition de WordPress avec l'architecture d'un site statique.
