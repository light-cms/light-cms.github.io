---
title: LightCMS Self-Hosting
description: "Self-host LightCMS avec SvelteKit, PostgreSQL, et une application GitHub : étapes de configuration, variables d'environnement, migrations de bases de données et déploiement."
section: Commencer
badge: Déployer
date: 2026-09-18T01:45:00.000Z
draft: false
tags:
  - lightcms
  - auto-hébergeur
  - github_app
  - vercel
  - sveltekit
preview: /og-image.png
slug: selfhost
fmContentType: default
---

L'auto-hébergement LightCMS nécessite l'exécution d'une application SvelteKit, la connexion d'une base de données PostgreSQL et la configuration d'une application GitHub pour l'accès au dépôt. L'auto-hébergement vous donne un contrôle total sur votre infrastructure et votre flux de données, mais il vous rend également responsable des mises à jour, des sauvegardes, des secrets et des temps de disponibilité.

Vérifiez chaque commande et variable d'environnement par rapport au [référentiel LightCMS] actuel (https://github.com/light-cms/lightcms) avant de le déployer en production.

## Composants dont vous avez besoin

| Composant               | Objectif                                                                                           | Requis                                        |
| :---------------------- | :------------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| PostgreSQL              | Stocke les données de l'application telles que les utilisateurs, les sessions et les installations | Oui                                           |
| GitHub App              | Gère l'accès à l'authentification GitHub et au dépôt                                               | Oui                                           |
| Fournisseur SMTP        | Envoie des e-mails de connexion de lien magique                                                    | Dépend de la configuration d'authentification |
| API compatible OpenAI   | Fonctionnalités de pilotage de l'IA                                                                | Non                                           |
| API de synthèse à texte | Pouvoir dicter la voix                                                                             | Non                                           |
| Stockage Image/CDN      | Stocke les médias téléchargés                                                                      | Dépend de la configuration du média           |

## 1. Pré-requis

- **Runtime:** Node.js ou Bun correspondant aux versions requises par le référentiel LightCMS.
- **PostgreSQL avec TLS:** Une connexion PostgreSQL compatible TLS.
- **Compte GitHub :** Nécessaire pour créer et installer votre application GitHub.
- **Identifiants SMTP :** Optionnels, requis uniquement si vous activez la connexion par e-mail de lien magique.

## 2. Créer et configurer l'application GitHub

Créez une application GitHub dans les paramètres de votre compte GitHub ou de votre organisation. Configurez les URL de callback, de configuration et de webhook pour correspondre à votre domaine déployé :

| Réglages                 | Valeur de l'exemple                              |
| :----------------------- | :----------------------------------------------- |
| URL de la page d'accueil | `https://<your-domain>`                          |
| Callback URL             | `https://<your-domain>/api/auth/callback/github` |
| Setup URL                | `https://<your-domain>/github/setup`             |
| URL du Webhook           | `https://<your-domain>/api/github/webhook`       |

Accorder uniquement les autorisations de dépôt dont LightCMS a besoin. Après la création, enregistrez l'ID de l'application, l'ID du client, le secret du client, le secret du webhook et la clé privée.

## 3. Configurer les variables d'environnement

Créez un fichier `.env` localement ou configurez les variables d'environnement sur votre plateforme d'hébergement :

```bash
# Authentification
BETTER_AUTH_SECRET="<random-secret>"
BETTER_AUTH_URL="https://<your-domain>"

# Base de données
DATABASE_URL="postgresql://user:password@host:5432/lightcms?sslmode=require"

# Application GitHub
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1. xxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----"
```

### Génération des secrets

Générer `BETTER_AUTH_SECRET` et `GITHUB_WEBHOOK_SECRET` en utilisant soit OpenSSL soit Node.js:

```bash
openssl rand -hex 32
# ou
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Téléversements d'images et de CDN

Les images collées ou téléchargées dans l'éditeur sont envoyées à une API de téléchargement compatible Chevereto. Les options hébergées incluent [FreeImage.host](https://freeimage.host) et [ImgBB](https://imgbb.com), ou vous pouvez gérer votre propre instance de Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` est envoyé en tant que paramètre de requête `key` sauf si `CDN_URL` en contient déjà un. Si le téléchargement échoue ou que les variables sont dédéfinies, LightCMS retombe à intégrer l'image dans le document en tant qu'URL `data:` base64. Cela fonctionne pour des tests rapides, mais cela bloque vos fichiers Markdown, donc configurez un CDN pour une utilisation réelle.

### Optionnel : Voix au texte, IA et analyses

Vous pouvez activer la dictée vocale en utilisant [Wit.ai](https://wit.ai/) ou n'importe quelle API de transcription compatible OpenAI (comme [Groq](https://groq.com/), [AssemblyAI](https://assemblyai.com/), [ElevenLabs](https://elevenlabs.io/), [Deepgram](https://deepgram.com/), ou [Sarvam](https://sarvam.ai/)).

```bash
# Wit.ai
WIT_AI_TOKEN="<server-access-token>"
WIT_AI_CLIENT_TOKEN="<client-access-token>"

# OpenAI-compatible AI & Speech
OPEN_AI_ENDPOINT=""
OPEN_AI_MODEL=""
OPEN_AI_APIKEY=""
SPEECH_ENDPOINT=""
SPEECH_MODEL=""
SPEECH_API_KEY=""

# PostHog Analytics (optional)
PUBLIC_POSTHOG_KEY="<your-posthog-project-key>"
PUBLIC_POSTHOG_HOST="<your-posthog-host>"
```

## 4. Configurer la base de données

LightCMS utilise [Drizzle ORM](https://orm.drizzle.team). Le schéma vit dans `src/lib/server/db/schema.ts`, et les migrations sont générées dans le répertoire `drizzle`. Avec le set `DATABASE_URL`, appliquez les migrations :

```bash
bun run db:migrate
```

Pendant le développement local, vous pouvez pousser le schéma directement dans la base de données sans fichiers de migration :

```bash
exécuter bun db:push
```

Autres scripts de base de données:

| Commandes             | Libellé                                             |
| :-------------------- | :-------------------------------------------------- |
| `bun run db:generate` | Générer une migration après modification du schéma  |
| `bun run db:studio`   | Parcourir et éditer vos données dans Drizzle Studio |

## 5. Exécuter localement

```bash
exécuter le développeur bun
```

![LightCMS GitHub App permissions](https://i.ibb.co/Jw1bjLrr/image.png)

![Permissions détaillées du dépôt](https://i.ibb.co/0p7tk88V/image.png)

LightCMS sera disponible à `http://localhost:5173`. Définissez `BETTER_AUTH_URL` à cette adresse et connectez-vous avec GitHub pour la première fois.

### Test des webhooks localement

GitHub ne peut pas délivrer des webhooks à `localhost`, donc transférez-les via [smee.io](https://smee.io):

1. Créez un salon à [smee.io](https://smee.io) et copiez son URL.
2. Définissez `WEBHOOK_PROXY_URL` dans `.env` à cette URL (`WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"`).
3. Définissez l'URL du Webhook dans les paramètres de votre application GitHub à la même URL.
4. Exécuter le bot dans un second terminal :

   ```bash
   bun run bot:start
   ```

Le bot enregistre les mêmes gestionnaires que le point de terminaison de production: validation de contenu sur `push`, revue des commentaires et des étiquettes sur `pull_request`, et log `installation`.

## 6. Déploiement de production

LightCMS est construit avec SvelteKit, donc [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), et [Cloudflare Workers](https://www.cloudflare.com/) sont des cibles de déploiement supportées :

1. Importez votre dépôt Git dans votre plateforme de déploiement.
2. Ajoutez toutes les variables d'environnement requises depuis [l'étape 3](#3-configure-environment-variables) dans les paramètres de votre projet, et définissez `BETTER_AUTH_URL` à votre URL de production.
3. Déployez et testez le flux complet : connectez-vous, connectez un référentiel, éditez un fichier, livrez un changement et confirmez vos exécutions statiques de construction du site.

Pour vérifier la construction de production localement avant le déploiement:

```bash
bun run build
bun run preview
```
