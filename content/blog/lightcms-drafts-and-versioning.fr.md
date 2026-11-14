---
title: "Brouillons, révisions et annulations : Contrôle de version pour les écrivains"
description: "LightCMS transforme l'historique de Git en un flux de travail éditorial : brouillons, commits, demandes de fusion et retour en arrière en un clic, sans demander à un auteur d'apprendre Git."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
keywords:
  - git versioning content
  - flux de travail brouillon cms
  - content rollback
  - historique des versions de markdown
  - brouillons lightcms
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - git
    - flux de travail
    - collaboration
---

Le contrôle de version est le meilleur argument pour un CMS basé sur Git, et celui qui est le plus mal expliqué. Les écrivains ne veulent pas entendre parler d'engagements, de vitesses ou d'arbres. Ils veulent savoir trois choses: **puis-je sauvegarder ceci sans le publier, voir ce qui a changé, et annuler si je me suis trompé(e) ?**

Git répond aux trois sans avoir à apprendre Git.

---

## Le brouillon reste un brouillon

`draft: true` dans le devant de la scène est tout le mécanisme. Lorsque vous créez ou modifiez un message dans [LightCMS](https://lightcms.me), le drapeau vit dans la matière frontale du fichier, et votre SSG le saute pendant la compilation. Le post se trouve dans le référentiel, consultable et sécurisé, et ne se rend jamais sur le site en direct.

Retournez-le à `false` lors de la publication et la prochaine version le ramasse. Aucune "base de données brouillon" séparée ne peut dériver de ce qui se trouve dans votre référentiel, et un brouillon ne peut pas se propager car deux systèmes ne sont pas d'accord sur son état.

Parce qu'un brouillon n'est qu'un fichier, tout le reste y travaille aussi: il peut s'asseoir sur une branche, vivre derrière une pull request, être édité par quelqu'un d'autre, et être différé ligne par ligne avant qu'il ne soit en production.

---

## Chaque sauvegarde est un commit

Chaque publication en [LightCMS](https://lightcms.me) crée un commit avec un message cohérent, qui vous donne :

- **Historique complet.** Qui a changé quoi, et quand. Aucun plugin requis.
- **True diffs.** Les diffs Markdown sont lisibles, contrairement aux lignes dans une colonne `post_content`.
- **Blame that means something.** You can ask when a paragraph changed and get a answer.
- **Sauvegardes gratuites.** Chaque clone du dépôt est une copie complète de votre contenu.

Pour un écrivain seul, il s'agit d'une infrastructure invisible. Pour une équipe, c'est la piste d'audit que la plupart des CMS commerciaux facturent.

---

## Branches et demandes d'ajout : revue éditoriale, correctement

[LightCMS](https://lightcms.me) can publish in two modes, and choosing between them is choosing your editorial process:

| Mode                   | Flux                                          | Meilleur pour                                                  |
| :--------------------- | :-------------------------------------------- | :------------------------------------------------------------- |
| **Validation directe** | Publier → commit → CI builds → live           | Écrivains seuls, montages à faible risque, corrections rapides |
| **Demande de tirage**  | Publier → PR → revoir → fusionner → builds CI | Équipes, brouillons avec surveillance, modifications sensibles |

Le mode pull request mérite l'attention. Il vous donne une véritable porte éditoriale: un collègue lit le Markdown proposé, laisse un commentaire sur la phrase à laquelle ils s'opposent, et fusionne quand elle est correcte. Cette porte fonctionne sur les outils de révision natifs de GitHub plutôt que sur un système d'approbation sur mesure qui verrouille votre contenu à un fournisseur.

Activer la protection des branches et "publier" signifie "soumettre pour vérification". Désactivez-le et "publier" signifie "publier".

---

## Rollback : La fonctionnalité que les gens oublient de demander

Chaque CMS devrait répondre rapidement à une question : **quelque chose de mal est en ligne, comment puis-je le corriger ?**

Avec le contenu basé sur Git, la réponse est un reversement:

1. Ouvrir l'historique du fichier dans GitHub (ou [LightCMS](https://lightcms.me)).
2. Choisissez la dernière bonne version.
3. Revert.

La correction communique comme n'importe quel autre montage, vos recompilations de pipeline, et la mauvaise version est terminée, généralement en une minute sur un hôte moderne. Restaurer une sauvegarde de base de données à 2h annule également toutes les _autres_ modifications effectuées entre-temps. Avec l'historique par fichier, vous annulez un post, pas tout le site.

---

## Pourquoi ne pas utiliser juste des mots et des courriels?

Parce que cette aller-retour perd du contenu. La version dans la pièce jointe n'est pas la version sur le site, personne ne sait quel fichier est canonique, et éventuellement quelqu'un publie `final-v3-USE-THIS.md`. Un dépôt partagé avec un éditeur visuel réduit la boucle : un fichier, un historique, un bouton.

---

## Une configuration d'équipe pratique

Pour une petite équipe, l'arrangement qui tend à rester :

- **La branche principale est toujours déployable.** Seules les fusions l'atteignent.
- **Fonctionnalités et brouillons sur les branches.** Le travail de forme longue en cours reste en dehors de main sans être caché.
- **Requêtes de tirage pour quoi que ce soit de sensible au niveau éditorial**, des commits directs pour les corrections de typo, car la nécessité d'une revue sur une correction par des virgules garantit que les gens travailleront tout au long du processus.
- **Étiqueter ou publier un jalon** si vous publiez sur un planning ; un déploiement échoué peut ensuite être suivi d'un ensemble de changements connus.

Rien de tout cela n'est configuré à l'intérieur de [LightCMS](https://lightcms.me). C'est la pratique standard de GitHub, qui est le point : le CMS hérite d'un workflow que votre dépôt a déjà.

---

## Foire aux questions

### Les écrivains ont-ils besoin d'apprendre Git ?

Non. Ils utilisent l'éditeur et un bouton de publication. Les branches, les livraisons et les demandes de fusion existent sous et ne sont surmontées que lorsque vous choisissez de les utiliser.

### Puis-je restaurer une ancienne version d'un post ?

« Oui. » Revenir à un commit précédent restaure le contenu de ce fichier, et la prochaine version le publie.

### Les ébauches sont-elles visibles pour le public?

Non. Un message avec `draft: true` est exclu de la construction, donc il n'atteint jamais le site déployé. Il est visible pour toute personne ayant un accès au référentiel, ce qui est le point.

### Que se passe-t-il si deux personnes modifient le même message ?

Le second conflit de livraison, et Git le signale explicitement plutôt que de l'écraser silencieusement. Pour la plupart des équipes, publier dans une branche et passer en revue avec une pull request supprime le problème avant qu'il ne se produise.

### Est-ce que [LightCMS](https://lightcms.me) conserve sa propre copie de mon contenu ?

Non. Le référentiel est la source de la vérité, le même [principe de verrouillage zéro] (/blog/what-is-lightcms/) qui fait que l'approche vaut la peine d'être choisie.

---

Voir [à partir d'un modèle de démarrage](/blog/start-with-a-lightcms-template/) pour configurer un dépôt avec ce workflow déjà filaire, ou [la visite de l'éditeur](/blog/lightcms-editor-tour/) pour voir le côté d'écriture de celui-ci.
