---
title: Auto-hébergement LightCMS
description: Guide pour l'auto-hôte LightCMS.
serial: 4
section: Commencer
badge: Déployer
date: 2026-09-18T01:45:00Z
draft: false
tags:
  - selfhost
  - lightcms
  - postgresql
  - déploiement
keywords:
  - lightcms
  - probot
  - auto-hébergeur
  - github_app
  - vercel
  - sveltekit
preview: /og-image.png
canonical: https://www.lightcms.me/docs
---

Vous voulez [LightCMS](https://lightcms.me) entièrement sous votre contrôle ? [LightCMS](https://lightcms.me) est une application [SvelteKit](https://svelte.dev) donc elle peut être déployée n'importe où, soutenu par une base de données postgre et une application GitHub (octokit). Votre contenu ne quitte jamais vos propres dépôts GitHub.

Ce guide vous guide à travers tout ce dont vous avez besoin pour exécuter votre propre instance : création de l'application GitHub, provisioning
PostgreSQL, configuration des variables d'environnement et déploiement.

## Comment les pièces s'adaptent ensemble

| Composant               | Objectif                                                                             | Requis                                     |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------ |
| PostgreSQL              | Stocke les utilisateurs, les sessions, les mots de passe et les installations GitHub | Oui                                        |
| GitHub App              | Lit et écrit du contenu dans vos dépôts et signe les utilisateurs avec GitHub        | Oui                                        |
| Fournisseur SMTP        | Envoie des e-mails de connexion de lien magique                                      | Oui, pour vous connecter à un lien magique |
| API compatible OpenAI   | Pouvoir le Copilot de l'IA                                                           | Optionnel                                  |
| API de synthèse à texte | Pouvoir dicter la voix                                                               | Optionnel                                  |
| CDN de l'image          | Hôtes les images téléchargées dans l'éditeur                                         | Optionnel                                  |
| PosteHog                | Analyse des produits et observabilité de l'IA                                        | Requis dans le développement seulement     |

## Pré-requis

- **[mise](https://mise.jdx.dev)** : installe et gère les dépendances de tâches. Je vais supposer que vous l'avez installé.
- **PostgreSQL** : une base de données qui accepte les connexions TLS. Les fournisseurs de cloud tels que [Neon](https://neon.tech),
  [Supabase](https://supabase.com) ou [Nile](https://thenile.dev) fonctionnent bien. Voir
  [awesome-free-postgres](https://github.com/alexeyfv/awesome-free-postgres) pour des options gratuites.
- **Compte GitHub**: nécessaire pour enregistrer l'application GitHub.
- **Fournisseur SMTP** (pour les liens magiques) : Si vous avez un domaine, alors [Resend](https://resend.com) aura une expérience géniale,
  sinon [Zoho Mail](https://www.zoho.com/mail) n'oubliez pas de créer un mot de passe de l'application.

> **TLS est obligatoire.** L'application se connecte à PostgreSQL avec `ssl: "require"`. Une instance locale PostgreSQL
> sans TLS activée sera rejetée, donc utilisez une base de données hébergée ou configurez TLS sur votre propre serveur.

## 1. Fork the repository and install dependencies

Cloner le dépôt et installer les dépendances :

```bash
cd lightcms
mise à jour trust
mise à jour deps
mise à jour install
```

Installez la toolchain et les dépendances du projet:

```bash
mise en place
mise deps
mise run install
```

## 2. Create the GitHub App

[LightCMS](https://lightcms.me) utilise une application GitHub pour deux choses : connecter des utilisateurs avec GitHub (OAuth), et agir en votre nom
à travers des installations. Vous pouvez le créer avec l'assistant d'installation de Probot, ou à la main.

### Option A : Assistant d'installation du Probot

démarrer le bot avec :

```bash
bot mis run
```

N'ayant aucun identifiant dans `.env`, Probot démarre un serveur d'installation à `http://localhost:3000`:

1. Ouvrez `http://localhost:3000` et cliquez sur **Register GitHub App**.
2. Choisissez votre compte personnel ou une organisation.
3. Confirmez. Probot crée l'application et écrit ses identifiants dans votre fichier `.env`.

L'assistant définit l'URL du webhook de l'application à un canal Smee (ou `http://localhost:3000/`), pas au point de terminaison [LightCMS](https://lightcms.me) du webhook
. Mettre à jour dans les paramètres de l'application GitHub avant de passer en direct (voir [Déploiement de production](#6-production-deployment)).

### Option B : Configuration manuelle

Créez l'application dans **Paramètres GitHub → Paramètres du développeur → Applications GitHub → Nouvelle application GitHub** avec ces valeurs :

| Réglages                 | Valeur                                                                |
| ------------------------ | --------------------------------------------------------------------- |
| URL de la page d'accueil | `https://<your-domain>`                                               |
| Callback URL             | `https://<your-domain>/api/auth/callback/github`                      |
| Setup URL                | `https://<your-domain>/github/setup`                                  |
| URL du Webhook           | `https://<your-domain>/api/github/webhook`                            |
| Secret du Webhook        | Un secret aléatoire (voir [Générer des secrets](#generating-secrets)) |

**Permissions du dépôt**

| Permission            | Accès          | Utilisé pour                                                    |
| --------------------- | -------------- | --------------------------------------------------------------- |
| `Contents`            | Lire et écrire | Lecture et livraison des fichiers de contenu                    |
| `Problèmes`           | Lire et écrire | Revoir les commentaires et les étiquettes sur les pull requests |
| `Demandes de tirage`  | Lecture seule  | Liste des fichiers modifiés dans une pull request               |
| `Statuts des commits` | Lire et écrire | Signalement de la validation du contenu sur les Push            |
| \`Métadonnées         | Lecture seule  | Obligatoire pour chaque application GitHub                      |

**Abonnez-vous aux événements:** `Push` et `Pull request`. Les événements d'installation sont livrés automatiquement aux applications GitHub.

Après avoir créé l'application, notez le **ID de l'application**, générez un **secret client**, et générez et téléchargez une **clé privée**
(`.pem`).

## 3. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet. Le référentiel ne fournit pas de fichier d'exemple utilisable, donc utilisez la référence ci-dessous.

### Requis

```bash
# ---------------------------------------------------------------------------
# Authentification (Better Auth)
# ---------------------------------------------------------------------------
BETTER_AUTH_SECRET="<output of: openssl rand -hex 32>"
# URL publique de cette instance. Doit correspondre à la visite des utilisateurs de l'URL.
BETTER_AUTH_URL="http://localhost:5173"

# ---------------------------------------------------------------------------
# Base de données (PostgreSQL, TLS requis)
# -----------------------------------------------------------
DATABASE_URL="postgresql://user:password@host:5432/lightcms? slmode=require"

# -----------------------------------------------------------
# App GitHub
# ---------------------------------------------------------------------------
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1. xxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----"
```

`GITHUB_PRIVATE_KEY` est le contenu complet de PEM. Gardez les sauts de ligne et enveloppez la valeur entre guillemets, ce qui est la façon dont
l'assistant Probot l'écrire.

### Requis pour le développement

[LightCMS](https://lightcms.me) reports analytics and errors to [PostHog](https://posthog.com). Lorsque les clés sont manquantes, l'application **lance en développement** pour empêcher que les événements ne soient supprimés silencieusement. En production, elles sont optionnelles et la télémétrie est ignorée quand elles sont désactivées.

```bash
PUBLIC_POSTHOG_KEY="phc_xxxxxxxxxxxx"
PUBLIC_POST_HOST="https://us.i.posthog.com"
```

### E-mail: requis pour la connexion par lien magique

Des liens magiques sont envoyés par SMTP avec [Nodemailer](https://nodemailer.com). L'envoi échoue avec une erreur de configuration quand
`MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` ou `MAIL_FROM` est manquant.

```bash
MAIL_HOST="smtp.resend.com"
# Par défaut 587 si omis
MAIL_PORT="465"
# "true", "1", "oui" ou "on" active implicitement TLS. Lorsqu'il est omis, TLS n'est activé que pour le port 465.
MAIL_SECURE="1"
MAIL_USER="resend"
MAIL_PASS="<smtp-password-or-api-key>"
MAIL_FROM="LightCMS <noreply@yourdomain.com>
```

### Optionnel: Copilot AI

Le Copilot utilise n'importe quelle API de chat compatible avec OpenAI. Les trois variables sont nécessaires pour que cela fonctionne.

```bash
OPEN_AI_ENDPOINT="https://api.openai.com/v1"
OPEN_AI_APIKEY="sk-..."
OPEN_AI_MODEL="gpt-4o-mini"
```

N'importe quel fournisseur qui expose une API compatible OpenAI fonctionne, par exemple [OpenAI](https://platform.openai.com),
[OpenRouter](https://openrouter.ai) (`https://openrouter.ai/api/v1`) ou [NVIDIA NIM](https://build.nvidia.com).

### Facultatif : dictée vocale à texte

[LightCMS](https://lightcms.me) supporte deux backends de transcription. Lorsque les deux sont configurées, le backend compatible OpenAI est utilisé.

**Transcription compatible OpenAI.** Il est sélectionné lorsque `SPEECH_API_KEY` est défini, et a également besoin de `SPEECH_MODEL`:

```bash
SPEECH_API_KEY="<api-key>"
SPEECH_MODEL="whisper-1"
# URL de base du fournisseur. Omettre pour utiliser OpenAI par défaut.
SPEECH_ENDPOINT="https://api.openai.com/v1"
```

Pointez `SPEECH_ENDPOINT` sur n'importe quel fournisseur qui implémente l'API `/audio/transcriptions`, et définissez `SPEECH_MODEL` sur un modèle
que le fournisseur offre. Un `/audio/transcriptions` suivant dans l'extrémité est automatiquement supprimé.

**[Wit.ai](https://wit.ai)** est utilisé lorsque `SPEECH_API_KEY` n'est pas défini :

```bash
WIT_AI_TOKEN="<wit-ai-server-access-token>"
```

Si aucun des deux n'est configuré, la dictée n'est pas disponible.

### Optionnel: téléversements d'images (CDN)

Les images collées ou téléchargées dans l'éditeur sont envoyées à une API de téléchargement compatible [Chevereto](https://chevereto.com).
Les options hébergées incluent [FreeImage.host](https://freeimage.host) et [ImgBB](https://imgbb.com), ou vous pouvez exécuter
votre propre instance de Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` est envoyé en tant que paramètre de requête `key` sauf si `CDN_URL` en contient déjà un. Si le téléchargement échoue ou que les variables
sont supprimées, [LightCMS](https://lightcms.me) revient à intégrer l'image dans le document en tant qu'URL `data:` base64. Cela marche,
mais cela rend vos fichiers Markdown beaucoup plus grands, donc configurez un CDN pour un usage réel.

### Redirection du webhook local (développement uniquement)

```bash
WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"
```

Ceci est lu par Probot, pas par l'application SvelteKit. Voir [Test des webhooks localement] (#testing-webhooks-locally).

### Génération des secrets

Utilisez l'un d'entre eux pour générer `BETTER_AUTH_SECRET` et `GITHUB_WEBHOOK_SECRET`:

```bash
openssl rand -hex 32
# ou
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 4. Configurer la base de données

[LightCMS](https://lightcms.me) utilise [Drizzle ORM](https://orm.drizzle.team). Le schéma vit dans `src/lib/server/db/schema.ts`, et les migrations
sont générées dans le répertoire `drizzle`. Avec le set `DATABASE_URL`, appliquez les migrations :

```bash
bun run db:migrate
```

Lors du développement local, vous pouvez plutôt pousser le schéma directement dans la base de données, sans fichiers de migration :

```bash
exécuter bun db:push
```

Autres scripts de base de données:

| Commandes             | Libellé                                             |
| --------------------- | --------------------------------------------------- |
| `bun run db:generate` | Générer une migration après modification du schéma  |
| `bun run db:studio`   | Parcourir et éditer vos données dans Drizzle Studio |

## 5. Exécuter localement

```bash
exécuter le développeur bun
```

![imagebot](https://i.ibb.co/Jw1bjLrr/image.png)

![permissions détaillées](https://i.ibb.co/0p7tk88V/image.png)

[LightCMS](https://lightcms.me) est maintenant disponible sur `http://localhost:5173`. Définissez `BETTER_AUTH_URL` à cette adresse et connectez-vous avec GitHub pour la première fois.

### Test des webhooks localement

GitHub ne peut pas délivrer des webhooks à `localhost`, donc transférez-les via [smee.io](https://smee.io):

1. Créez un salon à [smee.io](https://smee.io) et copiez son URL.
2. Définissez `WEBHOOK_PROXY_URL` dans `.env` à cette URL.
3. Définissez l'URL **Webhook** dans les paramètres de votre application GitHub à la même URL.
4. Exécuter le bot dans un second terminal :

   ```bash
   bun run bot:start
   ```

Le bot enregistre les mêmes gestionnaires que le point de terminaison de production: la validation de contenu sur `push`, les commentaires de revue et les étiquettes
sur `pull_request`, et la journalisation `installation`.

## 6. Déploiement de production

Le projet est configuré avec sveltekit qui est très agnostique de vendeur, donc
[Vercel](https://vercel.com) [netlify](https://www.netlify.com/) [travailleurs de la fusée nuageuse](https://www.cloudflare.com/) sont tous des cibles de déploiement prises en charge.

1. Importez votre dépôt Git dans la plate-forme de déploiement.
2. Ajoute chaque variable d'environnement de [étape 3](#3-configure-environment-variables) dans \*\*Paramètres du projet → Variables d'environnement
   . Définissez `BETTER_AUTH_URL` à votre URL de production.
3. Déploiez.

Pour vérifier la construction de la production localement:

```bash
bun run build
bun run preview
```

## Dépannage

Créez un compte avec [Wit.ai](https://wit.ai/) c'est un service gratuit par meta |
et n'importe quelle API openai compatible pour la transcription. |
On peut utiliser [groq](https://groq.com/) ou [assemblyai](https://assemblyai.com/) ou |
[elevenlabs](https://elevenlabs.io/) ou [deepgram](https://deepgram.com/) ou [sarvam](https://sarvam.ai/). |

## À des fins de développement, vous pouvez utiliser les informations d'identification suivantes pour posthog

PUBLIC_POSTHOG_KEY = "phc_AS2JXQsqEwNNNN5kra5Eefd5TijExE5eiLfwdzXLhPg"
PUBLIC_POSTHOG_URL = "https://us.i.posthog.com"

```bash
PUBLIC_POSTHOG_KEY=phc_AS2JXQsqEwNNNreH5kra5Eefd5TijExE5eiLfwdzXLhPg
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

https://wit.ai

![wit.ai](https://i.ibb.co/MySskPTt/image.png)

```bash
WIT_AI_TOKEN="Jeton d'accès au serveur"
WIT_AI_CLIENT_TOKEN="Jeton d'accès au client"
```

```bash
APP_ID=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
CDN_KEY=
CDN_URL=
DATABASE_URL=
GITHUB_APP_ID=
GITHUB_APP_NAME=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=
MAIL_FROM=
MAIL_HOST=
MAIL_PASS=
MAIL_PORT=
MAIL_SECURE=
MAIL_USER=
OPEN_AI_ENDPOINT=
OPEN_AI_MODEL=
OPEN_AI_APIKEY=
ORIGIN=
PRIVATE_KEY=
PUBLIC_POSTHOG_HOST=
PUBLIC_POSTHOG_KEY=
SPEECH_API_KEY=
SPEECH_ENDPOINT=
SPEECH_MODEL=
WEBHOOK_SECRET=
WIT_AI_CLIENT_TOKEN=
WIT_AI_TOKEN=
```

![configuration pour le bot](https://i.ibb.co/jP5tgcJH/image.png)
