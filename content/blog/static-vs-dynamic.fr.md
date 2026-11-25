---
title: "Static vs. Dynamic Sites: Which Fits Your Project?"
description: "Comparez les architectures statiques et dynamiques des sites Web par flux de requêtes, surface de sécurité, coût opérationnel, performances et compromis de flux de contenu."
serial: 7
date: 2026-10-14T12:00:00Z
draft: false
tags:
  - sites statiques
  - architecture
  - jamstack
---

Les sites statiques servent des fichiers précompilés à partir d'un CDN; les sites dynamiques génèrent des réponses à la demande en utilisant le code de l'application et souvent une base de données. Pour les blogs, la documentation, les pages de marketing et la plupart des sites de publication, la livraison statique est généralement plus simple et moins coûteuse à utiliser. La livraison dynamique est la plus adaptée lorsque chaque demande dépend de l'état de l'utilisateur ou des données qui changent fréquemment.

## Comparaison de flux de requête

| Étape                | Site dynamique                                                       | Site statique                                                           |
| :------------------- | :------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| Temps de compilation | Modèles et code déployés pour l'exécution.                           | Générateur construit des fichiers HTML/CSS/JS                           |
| Heure de la demande  | L'application peut interroger la base de données et afficher le HTML | CDN sert le fichier précompilé                                          |
| Personnalisation     | Option native côté serveur                                           | Habituellement gérée avec des fonctions JS côté client ou arête/serveur |
| Surface d'échec      | Exécution de l'application, base de données, cache, plugins          | Construire un pipeline, un CDN, des intégrations côté client            |

Une requête dynamique de page peut impliquer le routage, les requêtes de base de données, le rendu du modèle et la logique de cache. Une requête statique de page retourne généralement un fichier existant depuis le stockage des périphériques. La différence affecte la latence, le coût et la complexité opérationnelle.

## Echanges à évaluer

### Sécurité

Les sites dynamiques exposent un temps d'exécution de l'application, des interfaces d'administration et souvent une base de données. Cela crée des responsabilités de rectification et de contrôle. Les sites statiques réduisent la surface d'attaque de runtime, mais ils ont toujours besoin d'un accès sécurisé aux Git, de la gestion des secrets CI/CD et des mises à jour des dépendances dans le pipeline de construction.

### Performance et coût

Les fichiers statiques sont faciles à mettre en cache sur le bord, ce qui rend la livraison rapide et prévisible pour les sites de contenu. Les sites dynamiques peuvent aussi être rapides avec une bonne mise en cache, mais ils nécessitent plus de réglages d'infrastructure.

### Workflow de contenu

Les sites statiques ont historiquement demandé des flux de travail de développeurs pour la publication. Git based CMS tools reduce that barrier by giving editors a browser interface while keeping content in Git. Les plates-formes CMS dynamiques fournissent souvent des workflows éditoriaux mûrs, en particulier pour des autorisations complexes et du contenu structuré.

## Quand choisir chaque modèle

Choisissez un site statique quand :

- Le contenu est généralement le même pour chaque visiteur.
- Vous voulez des fichiers Markdown portables dans Git.
- Vous pouvez accepter la publication de temps de construction au lieu de mises à jour instantanées.
- Vous voulez de faibles frais d'exploitation pour un site axé sur le contenu.

Choisissez un site dynamique quand:

- Les utilisateurs se connectent et voient les données personnalisées.
- Le contenu ou l'état change constamment.
- Vous avez besoin de requêtes relationnelles complexes à l'heure de la requête.
- Le comportement de l'application est le produit, pas seulement la couche de publication.

Une approche hybride est courante : des pages statiques pour le contenu, plus des fonctions sans serveur ou des API pour les formulaires, la recherche, les commentaires ou les fonctionnalités authentifiées. For implementation details, see [What Is a Git based CMS?](/blog/Git based-cms-explained/) and [Static Sites and Carbon Emissions](/blog/greener-web-static-sites/).
