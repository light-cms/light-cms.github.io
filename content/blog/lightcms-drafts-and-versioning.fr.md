---
title: "Drafts, Revisions, and Rollbacks in a Git Based CMS"
description: "How Git based content workflows handle drafts, commit history, pull request review, and rollbacks for static site publishing."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
tags:
  - lightcms
  - git
  - flux de travail
  - collaboration
---

A Git based CMS can handle drafts, revisions, and rollbacks by storing content as files in a repository and using Git history as the audit trail. La valeur pratique est simple : vous pouvez enregistrer du travail sans le publier, inspecter ce qui a changé et annuler un mauvais montage sans restaurer une base de données entière.

## Brouillons en tant qu'état du fichier

Dans de nombreux workflows statiques de site, un brouillon est représenté par la matière frontale comme `draft: true`. Le fichier peut exister dans le référentiel alors que le générateur statique de site le saute lors des compilations de production.

```yaml
---
title: "Brouillon public"
date: 2026-10-16T09:40:00Z
Brouillon: true
---
```

Cette approche maintient l'état d'ébauche proche du contenu. Le compromis est visible : toute personne ayant un accès au dépôt peut voir le fichier brouillon, même si le site public ne le rend pas.

## Révisions via des commits

Chaque modification enregistrée ou publiée peut créer une livraison Git. Cela vous donne un historique lisible pour les fichiers Markdown, y compris les diffs, les métadonnées de l'auteur et les timestamps.

| Besoin                       | Git based workflow                                   | Remboursement                                                    |
| :--------------------------- | :--------------------------------------------------- | :--------------------------------------------------------------- |
| Voir les modifications       | `git diff` ou diff pull request                      | Nécessite la suppression des messages de commit pour être utile  |
| Historique des vérifications | Journal de commit et blâmer                          | Le modèle d'accès au dépôt contrôle qui peut l'inspecter         |
| Récupérer le contenu         | Annuler le commit ou restaurer la version du fichier | Rétablir peut nécessiter une résolution de conflit               |
| Réviser avant de publier     | Branche et pull request                              | Ajoute une surcharge de processus pour les petites modifications |

Pour les équipes, les pull requests fournissent une porte d'examen éditorial. Pour les auteurs en solo, les commits directs vers une branche principale peuvent être plus rapides, mais ils suppriment l'étape de revue.

## Revenir en arrière en opération Git normale

Lorsqu'un message publié a une erreur, Git vous permet d'annuler le commit qui l'a introduit ou de restaurer une version précédente du fichier. Une fois le correctif validé, votre pipeline CI/CD reconstruit et déploie le site.

Une annulation au niveau du fichier est plus étroite qu'une restauration de la base de données. Il peut annuler un message tout en laissant intacts les autres changements récents.

## Choix d'un workflow

Utilisez des commits directs lorsque la vitesse est importante et que le risque d'erreur est faible. Utilisez les directions générales et les demandes d'ajout lorsque le contenu a besoin d'être revu, d'approbation légale ou de mise à jour coordonnée. Le meilleur workflow est le plus léger qui donne à votre équipe le contrôle dont elle a besoin.

For related reading, see [The LightCMS Editor Tour](/blog/lightcms-editor-tour/) and [What Is a Git based CMS?](/blog/Git based-cms-explained/).
