---
title: Automatisation de la newsletter sans paiement
description: "Comment gérer une newsletter de blog directement depuis votre dépôt Git avec Newsy: pas de liste de diffusion à gérer, pas de relais SMTP, pas de frais sass"
serial: 5
date: 2026-09-18T01:50:00Z
draft: false
keywords:
  - automatisation de la newsletter
  - github newsletter
  - Nouvelles
  - newsletter statique du site
preview: /og-image.webp
taxonomies:
  tags:
    - Newsletter
    - Nouvelles
    - github
    - Publication
---
Le courrier électronique est l'un des moyens les plus efficaces de construire un public dédié. La manière traditionnelle de le faire est cependant devenue lourde et coûteuse.

[LightCMS](https://lightcms.me) takes a different route: **Git-driven newsletters** powered by [Newsy](https://github.com/light-cms/newsy), where the repository you already have _is_ the backend, so you can drop the newsletter service entirely.

---

## Problème de newsletter traditionnelle

Avec des plates-formes conventionnelles comme Mailchimp, Substack ou Brévo, votre flux de travail nécessite généralement :

1. S'inscrire à un service externe avec des niveaux d'abonnement rigides.
2. Gestion de listes de diffusion fragmentées à travers des tableaux de bord tiers.
3. Copie et collage manuels de votre article de blog dans des constructeurs de courriels propriétaires de texte riche.
4. Traitement des scripts de suivi, des cookies et des exigences en matière de respect de la vie privée.
5. Payer des frais mensuels substantiels au fur et à mesure que le nombre d'abonnés augmente.

Chacune de ces étapes existe parce qu'un service de messagerie se trouve entre vous et vos lecteurs. Les Newsy enlèvent cette couche plutôt que de l'améliorer.

---

## L’approche Git Driven : Newsy

La philosophie de **Newsy** est simple : **votre dépôt Git est le gestionnaire de newsletter.**

[Newsy](https://github.com/light-cms/newsy) est un service de newsletter open-source pour les sites statiques, inspiré par [utterances](https://utteranc.es), et il ne garde délibérément aucune liste de diffusion, aucun relais SMTP, et aucun fournisseur d'email dans la boucle:

1. **Publier** : Vous cliquez sur Publier dans [LightCMS](https://lightcms.me), et le fichier Markdown est validé dans votre dépôt.
2. **Détecter** : Les actualités regardent les événements push. Un fichier de publication récemment ajouté (ou un message existant retourné de `draft: true` à `false`) déclenche une annonce. Les modifications et les suppressions courantes sont ignorées, de sorte que le travail quotidien ne spamme jamais vos lecteurs.
3. **Upsert**: Newsy crée ou met à jour un problème ouvert par dépôt intitulé `announcement` avec le label `newsletter`. Il contient le résumé de la livraison, la liste des fichiers et le contenu du post; chaque post ultérieur tombe comme un commentaire sur cette question. Les tickets peuvent être verrouillés et déverrouillés comme les autres.
4. **S'abonner**: Vous déposez un bouton d'abonnement intégré dans votre site statique; [newsy.lightcms.me](https://newsy.lightcms.me) génère le snippet depuis votre `owner/repo`. Il pointe les lecteurs sur le problème, où ils cliquent sur **S'abonner** pour obtenir des notifications GitHub pour chaque nouveau poste.

Parce que la livraison passe par le système de notification de GitHub, il n'y a pas de liste à exporter, pas de prix par abonné, pas de débogage de livraison, et pas de plate-forme de messagerie tierce à renouveler.

---

## Pourquoi cela s'adapte à un site statique

Un site statique a déjà un pipeline : le contenu est validé, les constructions de CI et le CDN servent. Les slots Newsy dans le même flux : le commit qui publie la page l'annonce aussi. Rien n'est dupliqué dans un éditeur propriétaire, et rien n'a besoin d'être synchronisé.

Il est également gratuit dans la façon dont l'hébergement statique est gratuit : open source, auto-hostable (Go plus une petite table Postgres), et il fonctionne heureusement sur des plates-formes sans serveur. Il n’y a pas de forfait mensuel qui s’adapte à votre audience.

---

## Commencer

1. Installez l'application **Newsy GitHub** sur le dépôt depuis lequel vous publiez : [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Poussez un nouveau message, depuis [LightCMS](https://lightcms.me) ou votre terminal.
3. Générez le bouton Abonnement à [newsy.lightcms.me](https://newsy.lightcms.me) et collez-le sur votre site.

Les lecteurs abordent le problème de l’annonce et s’y abonnent ; chaque poste futur leur parviendra automatiquement.

---

## Lecture ultérieure

- [Source des news et documents](https://github.com/light-cms/newsy)
- [Self-hosting LightCMS](/blog/selfhost/): la référence complète de l'environnement
- [Brouillons, révisions et annulations](/blog/lightcms-drafts-and-versioning/) : comment fonctionne la publication
- [Commencer avec LightCMS](/getting-started/): le flux de travail plus large