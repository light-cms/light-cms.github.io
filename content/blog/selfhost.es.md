---
title: Autoalojando LightCMS
description: "Autoalojar LightCMS con SvelteKit, PostgreSQL, y una aplicación de GitHub: pasos de configuración, variables de entorno, migraciones de bases de datos e implementación."
section: Empezar
badge: Desplegar
date: 2026-09-18T01:45:00.000Z
draft: false
tags:
  - luces
  - auto alojamiento
  - github_app
  - vértice
  - sveltekit
preview: /og-image.png
slug: selfhost
fmContentType: default
---

LightCMS de autoalojamiento requiere ejecutar una aplicación SvelteKit, conectar una base de datos PostgreSQL y configurar una aplicación GitHub para acceso al repositorio. El autohosting te da control total sobre tu infraestructura y flujo de datos, pero también te hace responsable de actualizaciones, copias de seguridad, secretos y tiempo de actividad.

Verificar cada comando y variable de entorno contra el [repositorio LightCMS] actual (https://github.com/light-cms/lightcms) antes de desplegar en producción.

## Componentes que necesitas

| Componente                   | Propósito                                                              | Requerido                                    |
| :--------------------------- | :--------------------------------------------------------------------- | :------------------------------------------- |
| PostgreSQL                   | Almacena datos de aplicaciones como usuarios, sesiones e instalaciones | Sí                                           |
| GitHub App                   | Maneja la autenticación de GitHub y el acceso al repositorio           | Sí                                           |
| Proveedor SMTP               | Envía correos electrónicos de inicio de sesión de enlaces mágicos      | Depende de la configuración de autenticación |
| API compatible con OpenAI    | Funciones de copilot AI de Powers                                      | Nu                                           |
| API de voz a texto           | Poder dictado de voz                                                   | Nu                                           |
| Almacenamiento de imagen/CDN | Almacenes subidos                                                      | Depende de la configuración de medios        |

## 1. Prerrequisitos

- **Tiempo de ejecución:** Node.js o Bun que coincida con las versiones requeridas por el repositorio de LightCMS.
- **PostgreSQL con TLS:** Una conexión PostgreSQL capaz de TLS.
- **Cuenta de GitHub:** Necesita crear e instalar su aplicación de GitHub.
- **Credenciales SMTP:** Opcionales, requeridas sólo si activas el inicio de sesión de correo electrónico de enlace mágico.

## 2. Crear y configurar la aplicación de GitHub

Crea una aplicación de GitHub en tu cuenta de GitHub u configuración de la organización. Configure las URLs de callback, configuración y webhook para que coincidan con su dominio desplegado:

| Ajustes          | Valor de ejemplo                                 |
| :--------------- | :----------------------------------------------- |
| URL de la página | `https://<your-domain>`                          |
| Callback URL     | `https://<your-domain>/api/auth/callback/github` |
| Setup URL        | `https://<your-domain>/github/setup`             |
| URL de Webhook   | `https://<your-domain>/api/github/webhook`       |

Otorgar sólo los permisos de repositorio que LightCMS necesita. Después de la creación, grabe el ID de la aplicación, el ID del cliente, el secreto del cliente, el secreto del webhook y la clave privada.

## 3. Configurar variables de entorno

Crea un archivo `.env` localmente o configura variables de entorno en tu plataforma de alojamiento:

```bash
# Authentication
BETTER_AUTH_SECRET="<random-secret>"
BETER_AUTH_URL="https://<your-domain>"

# Database
DATABASE_URL="postgresql://user:password@host:5432/lightcms?sslmode=require"

# GitHub App
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1. xxxxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----"
```

### Generando secretos

Genera `BETTER_AUTH_SECRET` y `GITHUB_WEBHOOK_SECRET` usando OpenSSL o Node.js:

```bash
openssl rand -hex 32
# o
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Subidas de imágenes y CDN

Las imágenes pegadas o cargadas en el editor se envían a una API de subida compatible con Chevereto. Las opciones alojadas incluyen [FreeImage.host](https://freeimage.host) y [ImgBB](https://imgbb.com), o puedes ejecutar tu propia instancia de Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` es enviado como el parámetro de consulta `key` a menos que `CDN_URL` ya contenga uno. Si la carga falla o las variables no están definidas, LightCMS vuelve a incrustar la imagen en el documento como una URL base64 `data:` . Esto funciona para pruebas rápidas, pero infla los archivos Markdown, así que configure un CDN para uso real.

### Opcional: Voice-a-texto, IA y análisis

Puedes habilitar la dicción de voz usando [Wit.ai](https://wit.ai/) o cualquier API de transcripción compatible con OpenAI (como [Groq](https://groq.com/), [AssemblyAI](https://assemblyai.com/), [ElevenLabs](https://elevenlabs.io/), [Deepgram](https://deepgram.com/), o [Sarvam](https://sarvam.ai/)).

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

## 4. Configurar la base de datos

LightCMS usa [Drizzle ORM](https://orm.drizzle.team). El esquema vive en `src/lib/server/db/schema.ts`, y las migraciones se generan en el directorio `drizzle`. Con el conjunto `DATABASE_URL`, aplicar las migraciones:

```bash
ejecutar db:migrate
```

Durante el desarrollo local puede empujar el esquema directamente a la base de datos sin archivos de migración:

```bash
ejecutar db:push
```

Otros scripts de base de datos:

| Comando               | Descripción                                        |
| :-------------------- | :------------------------------------------------- |
| `bun run db:generate` | Generar una migración después de editar el esquema |
| `bun run db:studio`   | Navega y edita tus datos en Drizzle Studio         |

## 5. Ejecutar localmente

```bash
ejecutar dev
```

![LightCMS GitHub App permissions](https://i.ibb.co/Jw1bjLrr/image.png)

![Permisos detallados del repositorio](https://i.ibb.co/0p7tk88V/image.png)

LightCMS estará disponible en `http://localhost:5173`. Establece `BETTER_AUTH_URL` a esta dirección e inicia sesión con GitHub por primera vez.

### Probando webhooks localmente

GitHub no puede entregar webhooks a `localhost`, así que reenvíalos a través de [smee.io](https://smee.io):

1. Crear un canal en [smee.io](https://smee.io) y copiar su URL.
2. Establece `WEBHOOK_PROXY_URL` en `.env` a esa URL (`WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"`).
3. Establezca la URL de Webhook en la configuración de la aplicación de GitHub a la misma URL.
4. Ejecutar el bot en una segunda terminal:

   ```bash
   ejecutar bun bot:start
   ```

El bot registra los mismos manejadores que el punto final de producción: validación de contenido en `push`, revisar comentarios y etiquetas en `pull_request`, y registro de `installation`.

## 6. Despliegue de producción

LightCMS está construido con SvelteKit, así que [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), y [Cloudflare Workers](https://www.cloudflare.com/) son objetivos de despliegue soportados:

1. Importe su repositorio Git a su plataforma de implementación.
2. Añade cada variable de entorno requerida desde [paso 3](#3-configure-environment-variables) en la configuración de tu proyecto, y establece `BETTER_AUTH_URL` a tu URL de producción.
3. Despliegue y pruebe el flujo completo: inicie sesión, conecte un repositorio, edite un archivo, confirme un cambio y confirme que se ejecuta su compilación estática.

Para verificar la construcción de producción localmente antes de desplegar:

```bash
bun run build
bun run preview
```
