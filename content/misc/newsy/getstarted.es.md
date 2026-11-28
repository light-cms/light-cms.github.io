---
title: "Nuevo: Una plataforma de boletines de GitHub"
description: "Newsy es una plataforma de boletines sin servidores, GitHub donde los suscriptores y los emiten viven en su repositorio, sin listas de correo, SMTP, o una base de datos."
tags:
  - nuevo
  - boletín de noticias
  - github
  - golang
  - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

Ejecutar un boletín de correo electrónico para un blog estático normalmente le obliga a administrar servidores SMTP, manejo de rebotes y una base de datos de suscriptores. [Newsy](https://newsy.lightcms.me) salta que sobrecarga al ejecutar su boletín de noticias dentro de su repositorio de GitHub.

Utterances, Gisco y Gitalk usaron problemas de GitHub para traer comentarios a sitios estáticos sin backend. Newsy aplica la misma idea a los boletines informativos: suscriptores y anuncios publicados en directo junto a tu código. La compensación es que los lectores necesitan una cuenta de GitHub para suscribirse.

## Qué cambia ejecutar un boletín de noticias en GitHub

1. Su boletín de noticias vive junto a su código de sitio en el mismo repositorio.
2. GitHub rastrea a los suscriptores y notificaciones sin una base de datos separada.
3. No administra servidores de correo, registros SPF/DKIM o cuotas de API de correo electrónico.
4. Puede ejecutar el binario Go en plataformas sin servidor como Vercel o AWS Lambda, o compilarlo a WebAssembly con [TinyGo](https://tinygo.org/) para los tiempos de ejecución de JavaScript y TypeScript.

Si prefieres ver la lectura, hay un paseo en la [videoguía] (/misc/newsy/video/).

## Autoalojar tu bot

Siga estos pasos para ejecutar Newsy localmente y conectarlo a sus repositorios de GitHub.

### 1. Clonar el repositorio

```bash
git clonar git@github.com:light-cms/newsy.git
cd newsy
```

### 2. Configurar el entorno

Newsy usa [mise](https://mise.jdx.dev) para gestionar las dependencias de toolchaine:

```bash
mise deps
```

### 3. Construir y ejecutar

Construye y ejecuta el binario:

```bash
ir a construir
./newsy
```

### 4. Configure the GitHub App

1. Abre `http://localhost:3000` en tu navegador.
2. Si necesitas exponer tu servidor local, usa un servicio de túnel como [ngrok](https://ngrok.com), [Túnel de Cloudflare](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), o Túnel SSH vía [localhost.run](https://localhost.run/):

   ```bash
   ssh -R 80:localhost:3000 localhost.run
   ```

3. Abre la URL del túnel (por ejemplo, `https://xyz.localhost.run`) en tu navegador.

   [![Caminata de configuración novedosa](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

   Si tienes problemas, revisa la [videoguía](/misc/newsy/video/) o cambia a otro proveedor de túneles.

4. Elija un nombre de aplicación único.
5. Pegue la URL del túnel en el campo URL de Webhook y envíe.
6. Mantén seguro el archivo `.env` generado en la raíz de tu proyecto. Debería verse así:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> [!IMPORTANTE]
> Instale la aplicación de GitHub solo en los repositorios seleccionados, en lugar de en "Todos los repositorios".

Puede compartir una única instancia de Newsy en varios repositorios o usuarios.

> [!NOTA]
> Por defecto, Newsy crea anuncios cuando agregas nuevos archivos de contenido (`.html`, `.md`, `.mdx`), no cuando edites los existentes.

## Pruebe Newsy con el sitio alojado

Puedes probar la instancia alojada en [newsy.lightcms.me](https://newsy.lightcms.me) antes de autoalojamiento.

[![Demo novedoso](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## Desplegando a Vercel o a tiempo de ejecución sin servidor

Puede desplegar el repositorio Newsy directamente en Vercel o en cualquier host sin servidor que soporte binarios Go . Si tu tiempo de ejecución objetivo solo ejecuta JavaScript o TypeScript, compile Newsy to WebAssembly con [TinyGo](https://tinygo.org/). Los niveles gratuitos en Vercel y plataformas similares son típicamente suficientes para blogs personales.

## Suscríbete al boletín de demostración

Puedes probar el flujo de lector suscribiéndote en el repositorio demo: [Suscríbete en GitHub](https://github.com/Pratyay360/blogs_md/issues/1).

## Crea tu botón de suscripción

Genera un botón de suscripción en línea para tu cuenta en [newsy.lightcms.me](https://newsy.lightcms.me/), y escríbelo con [Primer CSS](https://cdnjs.com/libraries/Primer) si es necesario.

> [!TIP]
> Después de que el bot publique su primer número de boletín, bloquea la conversación para que los lectores puedan suscribirse sin añadir comentarios fuera del tema.

![Conversación de problema bloqueada en GitHub](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![Flujo de trabajo de suscripción reciente](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)
