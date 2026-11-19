---
title: Autoalojando LightCMS
description: Guía a LightCMS auto alojamiento.
serial: 4
section: Empezar
badge: Desplegar
date: 2026-09-18T01:45:00Z
draft: false
tags:
  - selfhost
  - luces
  - postgresql
  - despliegue
keywords:
  - luces
  - probot
  - auto alojamiento
  - github_app
  - vértice
  - sveltekit
preview: /og-image.png
canonical: https://www.lightcms.me/docs
---

¿Quieres [LightCMS](https://lightcms.me) completamente bajo tu control? [LightCMS](https://lightcms.me) es una aplicación [SvelteKit](https://svelte.dev) para que pueda ser desplegada en cualquier lugar, respaldado por una base de datos postgre y una aplicación de GitHub (octokit). Su contenido nunca abandona sus propios repositorios de GitHub.

Esta guía le guiará a través de todo lo que necesita para ejecutar su propia instancia: crear la aplicación de GitHub, provisionando
PostgreSQL, configurar variables de entorno y desplegar.

## Cómo encajan las piezas juntas

| Componente                | Propósito                                                               | Requerido                                    |
| ------------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| PostgreSQL                | Almacena instalaciones de usuarios, sesiones, claves de acceso e GitHub | Sí                                           |
| GitHub App                | Lee y escribe contenido en tus repositorios y firma usuarios con GitHub | Sí                                           |
| Proveedor SMTP            | Envía correos electrónicos de inicio de sesión de enlaces mágicos       | Sí, para inicio de sesión de enlaces mágicos |
| API compatible con OpenAI | Potenciar el Copilote de IA                                             | Opcional                                     |
| API de voz a texto        | Poder dictado de voz                                                    | Opcional                                     |
| Imagen CDN                | Imágenes de hosts cargadas en el editor                                 | Opcional                                     |
| PostHog                   | Análisis de productos y observabilidad de IA                            | Requerido sólo en el desarrollo              |

## Prerrequisitos

- **[mise](https://mise.jdx.dev)**: instala y gestiona las dependencias de tareas. Supondré que lo tienes instalado.
- **PostgreSQL**: una base de datos que acepta conexiones TLS. Proveedores de nube como [Neon](https://neon.tech),
  [Supabase](https://supabase.com) o [Nile](https://thenile.dev) funcionan bien. Ver
  [awesome-free-postgres](https://github.com/alexeyfv/awesome-free-postgres) para opciones gratis.
- **Cuenta de GitHub**: necesaria para registrar la aplicación de GitHub.
- **Proveedor SMTP** (para enlaces mágicos): Si tienes un dominio entonces [Resend](https://resend.com) tendrá una experiencia increíble,
  si no es entonces [Zoho Mail](https://www.zoho.com/mail) recuerda crear una contraseña de la aplicación.

> **TLS es obligatorio.** La aplicación se conecta a PostgreSQL con `ssl: "require"`. Una instancia local de PostgreSQL
> sin activar TLS será rechazada, así que utilice una base de datos alojada o configure TLS en su propio servidor.

## 1. Fork el repositorio e instalar dependencias

Clonar el repositorio e instalar dependencias:

```bash
cd lightcms
mise trust
mise deps
mise run install install
```

Instalar la toolchain y las dependencias del proyecto:

```bash
mise trust
mise deps
mise run install install
```

## 2. Create the GitHub App

[LightCMS](https://lightcms.me) usa una aplicación de GitHub para dos cosas: firmar usuarios con GitHub (OAuth), y actuar en tu nombre
a través de instalaciones. Puedes crearlo con el asistente de configuración de Probot, o a mano.

### Opción A: Asistente de configuración de Probot

inicia el bot con:

```bash
bot de ejecución mise
```

Sin credenciales en `.env`, Probot inicia un servidor de configuración en `http://localhost:3000`:

1. Abre `http://localhost:3000` y haz clic en **Registrar aplicación de GitHub**.
2. Elige tu cuenta personal o una organización.
3. Confirmar. Probot crea la aplicación y escribe sus credenciales en tu archivo `.env`.

El asistente establece la URL del webhook de la aplicación a un canal Smee (o `http://localhost:3000/`), no a [LightCMS](https://lightcms.me)'s webhook
endpoint. Actualízalo en la configuración de la aplicación de GitHub antes de ir en vivo (ver [despliegue de producción](#6-production-deployment)).

### Opción B: Configuración manual

Crear la aplicación en **Configuración de GitHub → Configuración del desarrollador → Aplicaciones de GitHub → Nueva aplicación de GitHub** con estos valores:

| Ajustes            | Valor                                                                |
| ------------------ | -------------------------------------------------------------------- |
| URL de la página   | `https://<your-domain>`                                              |
| Callback URL       | `https://<your-domain>/api/auth/callback/github`                     |
| Setup URL          | `https://<your-domain>/github/setup`                                 |
| URL de Webhook     | `https://<your-domain>/api/github/webhook`                           |
| Secreto de Webhook | Un secreto aleatorio (ver [Generando secretos](#generating-secrets)) |

**Permisos del repositorio**

| Permiso             | Acceder         | Usado para                                       |
| ------------------- | --------------- | ------------------------------------------------ |
| `Contenido`         | Leer y escribir | Leyendo y confirmando archivos de contenido      |
| `Problemas`         | Leer y escribir | Revisar comentarios y etiquetas en pull requests |
| `Pull requests`     | Sólo lectura    | Listar los archivos cambiados en un pull request |
| `Estado del commit` | Leer y escribir | Reportando validación de contenido en push       |
| `Metadata`          | Sólo lectura    | Mandatorio para cada aplicación de GitHub        |

**Suscríbete a los eventos:** `Push` y `Pull request`. Los eventos de instalación se entregan automáticamente a las aplicaciones de GitHub.

Después de crear la aplicación, ten en cuenta el **ID de la aplicación**, genera un **secreto del cliente**, y genera y descarga una **clave privada**
(`.pem`).

## 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto. El repositorio no envía un archivo de ejemplo utilizable, así que utilice la referencia a continuación.

### Requerido

```bash
# -------------------------------------------------------------------
# Autenticación (Mejor Autoridad)
# -------------------------------------------------------------------
BETER_AUTH_SECRET="<output of: openssl rand -hex 32>"
# URL pública de esta instancia. Debe coincidir con la visita de los usuarios de URL.
BETTER_AUTH_URL="http://localhost:5173"

# ---------------------------------------------------------------------------
# Base de datos (PostgreSQL, TLS requerido)
# ---------------------------------------------------
DATABASE_URL="postgresql://user:password@host:5432/lightcms? slmode=require"

# -------------------------------------------------------------------
# GitHub App
# -------------------------------------------------------------------
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1. xxxxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----"
```

`GITHUB_PRIVATE_KEY` es el contenido PEM completo. Mantenga los saltos de línea y envuelva el valor en comillas dobles, que es como lo escribe
el asistente de Probot.

### Requerido para el desarrollo

[LightCMS](https://lightcms.me) reporta análisis y errores a [PostHog](https://posthog.com). Cuando las claves faltan, la aplicación **arroja en desarrollo** para evitar que los eventos se eliminen silenciosamente. En la producción son opcionales, y la telemetría se omite cuando no están configuradas.

```bash
PUBLIC_POSTHOG_KEY="phc_xxxxxxxxxxxxxxxx"
PUBLIC_POSTHOG_HOST="https://us.i.posthog.com"
```

### Correo electrónico: requerido para inicio de sesión mágico

Los enlaces mágicos se envían sobre SMTP con [Nodemailer](https://nodemailer.com). El envío falla con un error de configuración cuando falta
`MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` o `MAIL_FROM`.

```bash
MAIL_HOST="smtp.resend.com"
# Por defecto es 587 cuando se omite
MAIL_PORT="465"
# "true", "1", "yes" o "on" habilita TLS implícito. Cuando se omite, TLS solo está habilitado para el puerto 465.
MAIL_SECURE="1"
MAIL_USER="resend"
MAIL_PASS="<smtp-password-or-api-key>"
MAIL_FROM="LightCMS <noreply@yourdomain.com>"
```

### Opcional: Copilot de IA

El Copilot utiliza cualquier API de terminación de chat compatible con OpenAI. Las tres variables son necesarias para que funcione.

```bash
OPEN_AI_ENDPOINT="https://api.openai.com/v1"
OPEN_AI_APIKEY="sk-..."
OPEN_AI_MODEL="gpt-4o-mini"
```

Cualquier proveedor que exponga una API compatible con OpenAI funciona, por ejemplo [OpenAI](https://platform.openai.com),
[OpenRouter](https://openrouter.ai) (`https://openrouter.ai/api/v1`) o [NVIDIA NIM](https://build.nvidia.com).

### Opcional: dictado de voz a texto

[LightCMS](https://lightcms.me) soporta dos backends de transcripción. Cuando ambos están configurados, se utiliza el backend compatible con OpenAI.

**Transcripción compatible con OpenAI.** Se selecciona cuando se establece `SPEECH_API_KEY`, y también necesita `SPEECH_MODEL`:

```bash
SPEECH_API_KEY="<api-key>"
SPEECH_MODEL="whisper-1"
# URL base del proveedor. Omitir para utilizar el valor predeterminado de OpenAI.
SPEECH_ENDPOINT="https://api.openai.com/v1"
```

Apunte `SPEECH_ENDPOINT` a cualquier proveedor que implemente la API `/audio/transcriptions`, y establezca `SPEECH_MODEL` en un modelo
que ofrezca el proveedor. Un `/audio/transcriptions` final en el punto final es eliminado automáticamente.

**[Wit.ai](https://wit.ai)** se utiliza cuando `SPEECH_API_KEY` no está definido:

```bash
► _AI_TOKEN="<wit-ai-server-access-token>"
```

Si ninguna de las dos está configurada, la dictación no está disponible.

### Opcional: subidas de imágenes (CDN)

Las imágenes pegadas o cargadas en el editor se envían a una API de subida [Chevereto](https://chevereto.com).
Las opciones alojadas incluyen [FreeImage.host](https://freeimage.host) y [ImgBB](https://imgbb.com), o puedes ejecutar
tu propia instancia de Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>"
```

`CDN_KEY` es enviado como el parámetro de consulta `key` a menos que `CDN_URL` ya contenga uno. Si la carga falla o las variables
no están configuradas, [LightCMS](https://lightcms.me) vuelve a incrustar la imagen en el documento como una URL base64 `data:` . Esto funciona,
pero hace que tus archivos Markdown sean mucho más grandes, así que configura un CDN para uso real.

### Desvío local de webhook (sólo desarrollo)

```bash
WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"
```

Esto es leído por Probot, no por la aplicación SvelteKit. Ver [Probando webhooks localmente](#testing-webhooks-locally).

### Generando secretos

Usa cualquiera de estos para generar `BETER_AUTH_SECRET` y `GITHUB_WEBHOOK_SECRET`:

```bash
openssl rand -hex 32
# o
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 4. Configurar la base de datos

[LightCMS](https://lightcms.me) usa [Drizzle ORM](https://orm.drizzle.team). El esquema vive en `src/lib/server/db/schema.ts`, y las migraciones
se generan en el directorio `drizzle`. Con el conjunto `DATABASE_URL`, aplicar las migraciones:

```bash
ejecutar db:migrate
```

Durante el desarrollo local puede empujar el esquema directamente a la base de datos, sin archivos de migración:

```bash
ejecutar db:push
```

Otros scripts de base de datos:

| Comando               | Descripción                                        |
| --------------------- | -------------------------------------------------- |
| `bun run db:generate` | Generar una migración después de editar el esquema |
| `bun run db:studio`   | Navega y edita tus datos en Drizzle Studio         |

## 5. Ejecutar localmente

```bash
ejecutar dev
```

![imagebot](https://i.ibb.co/Jw1bjLrr/image.png)

![permisos detallados](https://i.ibb.co/0p7tk88V/image.png)

[LightCMS](https://lightcms.me) ahora está disponible en `http://localhost:5173`. Establece `BETTER_AUTH_URL` a esta dirección e inicia sesión con GitHub por primera vez.

### Probando webhooks localmente

GitHub no puede entregar webhooks a `localhost`, así que reenvíalos a través de [smee.io](https://smee.io):

1. Crear un canal en [smee.io](https://smee.io) y copiar su URL.
2. Establece `WEBHOOK_PROXY_URL` en `.env` a esa URL.
3. Estableció la **URL Webhook** en la configuración de la aplicación de GitHub a la misma URL.
4. Ejecutar el bot en una segunda terminal:

   ```bash
   ejecutar bun bot:start
   ```

El bot registra los mismos manejadores que el punto final de producción: validación de contenido en `push`, comentarios de revisión y etiquetas
en `pull_request`, y registro de `installation`.

## 6. Despliegue de producción

El proyecto está configurado con sveltekit que es muy agnostico vendor, así
[Vercel](https://vercel.com) [netlify](https://www.netlify.com/) [cloudflare workers](https://www.cloudflare.com/) todos son blancos de despliegue soportados de serie.

1. Importe su repositorio Git en la plataforma de implementación.
2. Agrega cada variable de entorno desde [paso 3](#3-configure-environment-variables) en **Configuración del proyecto → Entorno
   Variables**. Establece `BETTER_AUTH_URL` a tu URL de producción.
3. Desplegar.

Para verificar la construcción de producción localmente:

```bash
bun run build
bun run preview
```

## Solución de problemas

Hacer una cuenta con [Wit.ai](https://wit.ai/) es un servicio gratuito por meta |
Y cualquier API de transcripción compatible con openai. |
Uno puede usar [groq](https://groq.com/) o [assemblyai](https://assemblyai.com/) o |
[elevenlabs](https://elevenlabs.io/) o [deepgram](https://deepgram.com/) o [sarvam](https://sarvam.ai/). |

## Para propósitos de desarrollo puedes usar las siguientes credenciales para posthog

PUBLIC_POSTHOG_KEY = "phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg"
PUBLIC_POSTHOG_URL = "https://us.i.posthog.com"

```bash
PUBLIC_POSTHOG_KEY=phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

https://wit.ai

![wit.ai](https://i.ibb.co/MySskPTt/image.png)

```bash
► _AI_TOKEN="Token de acceso al servidor"
a_AI_CLIENT_TOKEN="Token de acceso al cliente"
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

![configuración para el bot](https://i.ibb.co/jP5tgcJH/image.png)
