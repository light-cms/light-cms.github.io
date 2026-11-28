---
title: "Newsy: Une plateforme de newsletter gérée par GitHub"
description: "Newsy est une plateforme de newsletter sans serveur, gérée par GitHub, où les abonnés et les tickets vivent dans votre référentiel, sans listes de diffusion, sans SMTP ou une base de données."
tags:
  - Nouvelles
  - Newsletter
  - github
  - golang
  - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

L'exécution d'une newsletter par courriel pour un blog statique vous oblige généralement à gérer les serveurs SMTP, la gestion des rebonds et une base de données d'abonnés. [Newsy](https://newsy.lightcms.me) skips that overhead by running your newsletter inside your GitHub repository.

Utterances, Giscu et Gitalk ont utilisé GitHub Issues pour apporter des commentaires sur des sites statiques sans backend. Newsy applique la même idée aux bulletins d'information : les abonnés et les annonces de publication en direct à côté de votre code. Le compromis est que les lecteurs ont besoin d'un compte GitHub pour s'abonner.

## Qu'est-ce qui gère une newsletter sur les changements de GitHub

1. Votre newsletter vit à côté du code de votre site dans le même dépôt.
2. GitHub suit les abonnés et les notifications sans base de données séparée.
3. Vous ne gérez pas les serveurs de messagerie, les enregistrements SPF/DKIM ou les quotas d'API d'email.
4. Vous pouvez exécuter le binaire Go sur des plates-formes sans serveur comme Vercel ou AWS Lambda, ou compilez-le en WebAssembly avec [TinyGo](https://tinygo.org/) pour l'exécution de JavaScript et TypeScript.

Si vous préférez regarder la lecture, il y a une promenade dans le [guide vidéo](/misc/newsy/video/).

## Héberger votre bot

Suivez ces étapes pour exécuter Newsy localement et le connecter à vos dépôts GitHub.

### 1. Cloner le dépôt

```bash
git clone git@github.com:light-cms/newsy.git
newsy cd
```

### 2. Configurer l'environnement

Newsy utilise [mise](https://mise.jdx.dev) pour gérer les dépendances de la chaîne de compilation :

```bash
mise deps
```

### 3. Construire et exécuter

Construire et exécuter le binaire Go :

```bash
allez construire
./newsy
```

### 4. Configure the GitHub App

1. Ouvrez `http://localhost:3000` dans votre navigateur.
2. Si vous avez besoin d'exposer votre serveur local, utilisez un service de tunnel tel que [ngrok](https://ngrok.com), [Tunnel de Fusée nuageuse](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), ou tunnel SSH via [localhost.run](https://localhost.run/) :

   ```bash
   ssh -R 80:localhost:3000 localhost.run
   ```

3. Ouvrez l'URL de votre tunnel (par exemple, `https://xyz.localhost.run`) dans votre navigateur.

   [![Newsy setup walkthrough](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

   Si vous rencontrez des problèmes, consultez le [guide vidéo](/misc/newsy/video/) ou passez à un autre fournisseur de tunnel.

4. Choisissez un nom unique pour l'application.
5. Collez l'URL du tunnel dans le champ URL du Webhook et soumettez-le.
6. Gardez le fichier `.env` généré dans la sécurité racine de votre projet. Cela devrait ressembler à ceci:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> [!IMPORTANT]
> Installez l'application GitHub uniquement sur les dépôts sélectionnés, plutôt que sur "Tous les dépôts".

Vous pouvez partager une seule instance Newsy entre plusieurs dépôts ou utilisateurs.

> [!NOTE]
> Par défaut, Newsy crée des annonces lorsque vous ajoutez de nouveaux fichiers de contenu (`.html`, `.md`, `.mdx`), pas lorsque vous éditez des fichiers existants.

## Essayez Newsy avec le site hébergé

Vous pouvez tester l'instance hébergée à [newsy.lightcms.me](https://newsy.lightcms.me) avant l'auto-hébergement.

[![Newsy Demo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## Déploiement vers Vercel ou les exécutions sans serveur

Vous pouvez déployer le dépôt Newsy directement sur Vercel ou n'importe quel hôte sans serveur qui supporte les binaires Go. Si votre runtime cible exécute seulement JavaScript ou TypeScript, compilez Newsy sur WebAssembly avec [TinyGo](https://tinygo.org/). Les niveaux gratuits sur Vercel et les plates-formes similaires sont généralement suffisants pour les blogs personnels.

## S'abonner à la newsletter de démonstration

Vous pouvez tester le flux du lecteur en vous abonnant sur le dépôt de démonstration : [Abonnez-vous sur GitHub](https://github.com/Pratyay360/blogs_md/issues/1).

## Créez votre bouton d'abonnement

Générez un bouton d'abonnement en ligne pour votre compte à [newsy.lightcms.me](https://newsy.lightcms.me/), et créez-le avec [Primer CSS](https://cdnjs.com/libraries/Primer) si nécessaire.

> [!TIP]
> Une fois que le bot a publié son premier problème de newsletter, verrouillez la conversation pour que les lecteurs puissent s'abonner sans ajouter de commentaires hors-sujet.

![Conversation de problèmes GitHub verrouillé](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![Flux de travail de l'abonnement aux nouvelles](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)
