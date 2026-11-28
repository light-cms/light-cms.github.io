---
title: "Qu'est-ce qu'un CMS basé sur Git ?"
description: "Un CMS basé sur Git stocke le contenu en tant que fichiers dans un dépôt Git et transforme les actions de l'éditeur en commits."
date: "2026-10-16T10:50:00.000Z"
draft: false
tags:
  - git
  - cms
  - sites statiques
  - markdown

slug: Git based-cms-explained
---

Un CMS basé sur Git stocke le contenu en tant que fichiers dans un dépôt Git au lieu des lignes dans une base de données. Les auteurs modifient le contenu dans une interface visuelle, et le CMS les enregistre au fur et à mesure que Git communique ces changements. Un générateur de site statique ou un pipeline de construction lit ensuite les fichiers et produit le site.

## Comment fonctionne une architecture CMS basée sur Git

Dans un CMS traditionnel, le contenu vit généralement dans une base de données et l'application affiche des pages à l'heure de la demande. Dans un CMS basé sur Git, la création est séparée de la livraison.

```text
Écrivain -> Éditeur Visuel -> commit Git (Markdown + front matter)
                                文
                                Ω
                        Git repository
                                Ω
                                Ω
                   CI/CD build (Astro, Hugo, Zola, etc.
                                ★
                                ★
                  Fichiers statiques -> CDN -> Reader
```

| Composant              | Rôle dans un CMS basé sur Git                                                    |
| :--------------------- | :------------------------------------------------------------------------------- |
| Dépôt Git              | Stocke les fichiers de contenu, l'historique et les métadonnées de collaboration |
| Éditeur CMS            | Fournit une interface d'écriture et crée des commits ou des pull requests        |
| Construire un pipeline | Convertit les fichiers source en sortie statique déployable                      |
| CDN/hôte               | Servir les fichiers construits aux lecteurs                                      |

## Que se passe-t-il lorsque vous publiez

Publier dans un CMS basé sur Git écrit généralement un fichier Markdown avec une première matière et le communique dans le référentiel.

```md
---
title: "Expédier le nouveau tableau de bord"
date: 2026-10-16T09:00:00Z
brouillon : faux
tags:
  - produit
---

Notre tableau de bord redessiné est maintenant en ligne pour tous les utilisateurs.
```

Cette validation peut fournir la persistance du contenu, une piste d'audit, une sauvegarde à distance via votre hôte Git et un déclencheur de déploiement pour CI/CD. Le comportement exact dépend du flux de travail CMS et du référentiel.

## Avantages du stockage du contenu dans Git

Git fournit des fonctionnalités de workflows de contenu que les CMS de base de données implémentent souvent séparément :

- Historique des révisions : Les différences montrent ce qui a changé dans un fichier, qui l'a changé et quand.
- Rollback : Vous pouvez annuler un commit spécifique ou restaurer un fichier sans revenir en arrière du contenu.
- Flux de travail de révision : Les succursales et les demandes de fusion peuvent appuyer la revue éditoriale avant la publication.
- Portabilité : Les fichiers Markdown peuvent se déplacer entre les générateurs de sites statiques et les fournisseurs d'hébergement avec moins d'étapes de migration que les exportations de bases de données propriétaires.

## Echanges et limites

Les CMS basés sur Git conviennent parfaitement aux blogs, à la documentation et aux sites de marketing. Ils ne sont pas adaptés à chaque produit.

- Aucune requête de contenu exécutée : les compilations statiques ne fournissent pas par requête de base de données par requête. Le contenu spécifique à l'utilisateur ou hautement relationnel a généralement besoin d'un CMS de base de données ou d'un backend d'application.
- latence de construction : La publication nécessite une étape de construction et de déploiement. Pour de nombreux sites, c'est acceptable, mais il est plus lent que l'édition d'une base de données en direct.
- Conflit de fusion : Deux personnes éditant le même fichier peuvent créer des conflits. Les flux de travail par dossier réduisent le risque.
- Granularité des permissions : les permissions Git sont généralement orientées vers le référentiel ou la branche, pas vers le niveau de champ.

Mon opinion est que la gestion de contenu basée sur Git est la meilleure valeur par défaut pour les sites éditoriaux où le contenu devrait être portable, modifiable, et déployable en tant que fichiers statiques. Le contre-argument est opérationnel : les équipes qui ont besoin d'une collaboration en temps réel, d'autorisations complexes ou de données dynamiques peuvent passer plus de temps à travailler autour de Git que d'en bénéficier.

## Ce qu'il faut évaluer dans un CMS basé sur Git

1. Qualité de l'éditeur : Vérifiez si les rédacteurs peuvent éditer confortablement sans toucher aux commandes Git brutes.
2. Gestion de la matière première: Confirmez que le CMS préserve vos champs et formats existants.
3. Modèle de publication : Décidez si vous avez besoin d'engagements directs, de demandes de tirage ou de branches brouillons.
4. Risque de verrouillage : Assurez-vous que votre contenu reste utilisable comme fichiers simples si vous arrêtez d'utiliser le CMS.

Pour des comparaisons de produits, voir [Plateformes CMS basées sur Git] (/comparison/top-git-cms) et [CMS traditionnels Git](/blog/headless-vs-Git based-cms/).
