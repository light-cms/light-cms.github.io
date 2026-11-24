---
title: 'Newsletter Automation Without a Paid subscription'
description: >-
  Utilisez GitHub et Newsy pour informer les lecteurs des nouveaux messages sans plateforme de marketing par e-mail.
date: '2026-09-18T01:50:00.000Z'
draft: Faux
tags:
  - Newsletter
  - Nouvelles
  - github
  - Publication
slug: newsletter-email-automation
---

Vous pouvez informer les lecteurs de nouveaux messages à partir d'un blog basé sur Git sans avoir à utiliser une plate-forme de marketing électronique distincte. [Newsy](https://github.com/light-cms/newsy) Uses GitHub repository activity and issue subscriptions to deliver post updates through GitHub notifications.

## Là où les outils traditionnels de newsletter ajoutent des frais généraux

Les plateformes de newsletter par e-mail peuvent être utiles, mais elles ajoutent du travail opérationnel pour les petits blogs techniques :

1. Gestion des listes : Vous maintenez les données des abonnés dans un système séparé.
2. Publication en double : vous copiez souvent un message Markdown dans un éditeur d'e-mail ou un modèle.
3. Opérations de livrabilité : Vous surveillez les rebondissements, les plaintes relatives au spam, la réputation de l'expéditeur et les enregistrements d'authentification tels que SPF, DKIM, et DMARC.
4. Décisions de suivi et de confidentialité : De nombreuses plates-formes incluent le suivi ouvert, le suivi des clics et la gestion des désinscriptions que vous devez configurer et divulguer.

Pour un blog axé sur les développeurs, ces fonctionnalités peuvent être plus que les besoins du workflow. Le compromis est que vous renoncez à l'automatisation du marketing, à la segmentation et à l'analyse.

## Comment Newsy utilise les notifications GitHub

Newsy connecte des événements de publication dans un dépôt GitHub à un sujet d'abonnement. Le workflow ci-dessous décrit le modèle prévu ; vérifiez chaque étape par rapport à l'implémentation actuelle de Newsy avant de le traiter comme une documentation produit.

```text
Écrivain publie dans LightCMS
 <unk>
 <unk>
 Commit poussé sur le dépôt GitHub
 <unk>
 <unk>
Newsy détecte un nouveau post A ou nouvellement publié
 <unk>
 <unk>
publie un commentaire sur un problème d'annonce
 <unk>
 <unk>
GitHub informe les utilisateurs inscrits à ce ticket
```

### Étapes de livraison

1. Détection de commit : Une action de publication crée ou met à jour un fichier Markdown dans le référentiel. Newsy can watch for a new post or a `draft: false` Change.
2. Announcement thread: Newsy posts the update to a designated GitHub issue, such as an `announcement` issue with a `newsletter` Label.
3. Abonnement à un lecteur : les lecteurs s'abonnent en regardant ou en s'abonnant à ce problème GitHub.
4. Livraison des notifications : GitHub envoie des notifications en fonction des paramètres de notification GitHub de chaque abonné.

## Les compromis à considérer

Cette approche convient mieux aux publics techniques qu'aux publics généraux.

- Exigences de compte GitHub : les lecteurs ont besoin d’un compte GitHub pour s’abonner. That is reasonable for many developer blogs, but it can block nontechnical readers.
- Format de notification simple : les notifications GitHub ne remplacent pas les e-mails de marketing de marque. Vous avez un contrôle limité sur la mise en page et le style.
- Analyses limitées: Vous ne recevez pas de métriques typiques de marketing par courriel telles que le taux d'ouverture ou le taux de clic. Vous pouvez inspecter la participation aux émissions, mais ce n'est pas la même chose que les analyses de campagne.

## Configurer la liste de contrôle

1. Install Newsy: Add the [Newsy GitHub App](https://github.com/apps/newsletter-newsy/installations/select_target) To the repository that contains your blog.
2. Créez le point d’entrée d’abonnement: Générez ou créez un lien/bouton d’abonnement qui pointe les lecteurs vers le numéro d’annonce.
3. Ajoutez le lien vers votre site : placez le lien d'inscription dans la mise en page de votre blog, pied de page, ou modèle de poste.
4. Tester le flux : Publier un brouillon de message, confirmer la livraison, confirmer le commentaire du problème, et vérifier qu'un compte abonné reçoit une notification.

For related setup details, see [Self-hosting LightCMS](/blog/selfhost/), [Drafts, revisions, and publishing](/blog/lightcms-drafts-and-versioning/), and [Getting started with LightCMS](/getting-started/).
