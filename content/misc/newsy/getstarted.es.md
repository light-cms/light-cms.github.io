---
title: "Comenzando con Newsy: Boletines de GitHub-Powered"
description: "Desplegar y autoanfitrión Newsy, una plataforma de boletín sin servidor creada enteramente por Go, WebAssembly y GitHub Issues."
label: "Comenzando"
tags:
  - nuevo
  - boletín de noticias
  - solución moderna
  - newsletter gratis
  - github
  - golang
  - webassembly
isCJKLanguage: false
---

Presentando [Newsy](https://newsy.lightcms.me), una plataforma de boletín de código abierto desarrollado por GitHub.

Newsy está muy inspirado en herramientas como Utterances, Gisco y Gitalk, que reimaginaron comentarios para sitios estáticos usando GitHub Issues.
Newsy adopta el mismo enfoque dirigido por GitHub y lo lleva a los boletines:
en lugar de depender de servicios externos o mantener una lista de correo separada,
su boletín de noticias vive justo al lado de su código en su repositorio de GitHub.

Why GitHub?

1. Su boletín de noticias vive justo al lado de su código en su repositorio de GitHub.
2. No hay gestión de listas de correo. Los suscriptores y actualizaciones son rastreados en GitHub.
3. No hay API de correo electrónico caras. No necesita un servicio de suscripción por correo electrónico.
4. No hay configuración de envío de correo. No necesita administrar SMTP, filtros de spam o reputación de dominio.
5. No hay base de datos de suscripción. No necesita una base de datos separada para suscripciones y darse de baja.
6. Ustedes se centran en la escritura. GitHub y Newsy manejan el resto.

La publicación debería ser accesible para todos. No hay necesidad de pagar una fuerte cuota a una plataforma SaaS o pasar horas luchando con la infraestructura de correo electrónico sólo para compartir actualizaciones con sus lectores.

- Despliega en sin servidor (por ejemplo, Vercel, AWS Lambda) para la producción.
- Soporte para WebAssembly: Compila el binario Go a WebAssembly con [TinyGo](https://tinygo.org/) y ejecutalo en plataformas sin servidor que soporten los tiempos de ejecución de JavaScript o TypeScript.

Un recorrido por vídeo de la configuración local está disponible en la [videguía] (/content/misc/newsy/video.md).

## Auto anfitrión tu bola

Siga estos pasos para ejecutar Newsy y conectarlo a sus repositorios de GitHub.

#### 1. Clonar el repositorio

```bash
git clonar git@github.com:light-cms/newsy.git
cd newsy
```

#### 2. Configurar el entorno

Utilizamos [mise](https://mise.jdx.dev) para mantener el entorno de desarrollo
consistente y fácil de gestionar:

```bash
mise deps
```

#### 3. Construir y ejecutar

Construye y ejecuta el binario:

```bash
ir a construir
./newsy
```

#### 4. Configure the GitHub App

1. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.
2. Si necesita exponer su servidor local, utilice un servicio de túnelado como [ngrok](https://ngrok.com),
   [Túnel Cloudflare](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   o Túnel SSH a través de [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. Abre la URL de tu túnel (por ejemplo, `https://xyz.localhost.run`) en tu navegador:

[![newsy a github issue supported newsletter platform](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(Si encuentras problemas, consulta la [videoguía](/guides/newsy/video/) o prueba un proveedor alternativo de túnelo.)_

4. Elige un **nombre de aplicación** (preferiblemente único).
5. Pegue la URL del túnel en el campo **Webhook URL** y envíe.
6. Se generará un archivo `.env` que contiene los secretos de tu aplicación en la raíz de tu proyecto. Mantener este archivo a salvo.

El `.env` generado debe verse así:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!IMPORTANT\]
> Instala la aplicación de GitHub solo en **repositorios específicos**, en lugar de en "Todos los repositorios".

Cada instancia de Newsy puede ser compartida en múltiples repositorios o usuarios.

> \[!NOTA\]
> Por defecto, Newsy solo activa comentarios y problemas sobre la creación de nuevos archivos de contenido (`. tml`, `.md`, `.mdx`, etc.), en lugar de en ediciones posteriores.

---

## Prueba Newsy a través de la Instancia Hosted

Puedes probar Newsy directamente usando la versión alojada: [https://newsy.lightcms.me](https://newsy.lightcms.me)

[![Demo novedoso](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

---

## Desplegar en Vercel

![Desplegar con Vercel](https://vercel.com/button)

Una vez desplegado, actualice la URL del Webhook de su aplicación de GitHub desde `*.localhost.run` a su dominio de producción: `https://<your-app>.vercel.app`.

> \[!ADVERTENCIA\]
> Solo use el botón de despliegue si ya tiene una aplicación de GitHub configurada y tiene sus credenciales listas. De lo contrario, sigue los pasos [Auto Hospedaje Tu Bot](#self-host-your-bot) primero para crear uno.

---

## Costos operativos &amp; Uso de recursos

Vercel y muchos otros proveedores de nube ofrecen niveles gratuitos para cargas de trabajo sin servidor. También puede alojar a Newsy en JavaScript o TypeScript-only compilando el binario Go a WebAssembly con [TinyGo](https://tinygo.org/).

Porque es un binario de Go compilado:
- **Baja huella de memoria**, permaneciendo cómodamente dentro de los límites de ejecución y memoria sin server.

---

## Suscribirse al boletín de noticias

Suscríbete para ver Newsy en acción:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

---

## Generar tu botón de suscripción

Genera un botón de suscripción incrustado para tu cuenta en [newsy.lightcms.me](https://newsy.lightcms.me/).

Puedes personalizar y dar estilo al botón usando [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Consejo de seguridad:** Después de que el bot publique su primer mensaje del boletín, bloquea la conversación para prevenir cualquier comportamiento no deseado.

![Bloquear la conversación](/static/newsy-lock.png)

![newsy unlock](/static/newsy-unlock.png)

Para obtener más información sobre los permisos, consulte la documentación de [permisos requeridos](/guides/newsy/list-of-all-permission/).
