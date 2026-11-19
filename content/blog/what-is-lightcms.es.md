---
title: "¿Qué es LightCMS? El CMS basado en Git para sitios estáticos"
description: "LightCMS es un CMS autoalojado, basado en Git con un editor visual WYSIWYG. Compromete Markdown simple en su repositorio y permite que su CI/CD existente lo implemente."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
keywords:
  - qué son las luces
  - luces
  - Git basado en cms
  - markdown cms
  - editor visual para markdown
preview: /og-image.webp
taxonomies:
  tags:
    - luces
    - cms
    - git
    - markdown
---

**LightCMS** es un sistema de gestión de contenido que mantiene su contenido en su repositorio Git como archivos Markdown sencillos.

Sin base de datos. Sin bloqueo. Inicia sesión con GitHub, elige un repositorio, escribe y publica. [LightCMS](https://lightcms.me) confirma los cambios por ti.

## El problema [LightCMS](https://lightcms.me) resuelve

Los generadores estáticos de sitios hacen que la publicación sea rápida, barata y segura. Pero escribir un post en un editor de código puede sentirse difícil si usted no está acostumbrado a ese flujo de trabajo.

Ese flujo de trabajo se adapta a los desarrolladores. No conviene a todos los que quieran escribir.

[LightCMS](https://lightcms.me) elimina esa fricción sin quitar Git. Los desarrolladores mantienen contenido en el repositorio y los escritores obtienen un editor basado en el navegador para redactar y publicar.

---

## Cómo funciona [LightCMS](https://lightcms.me)

1. **Inicia sesión con GitHub.** LightCMS usa GitHub OAuth, por lo que no necesitas un sistema de cuentas separado.
2. **Conecte un repositorio.** Elija cualquier repositorio que contenga contenido de Markdown, incluyendo sitios construidos con Astro, Hugo, Zola, Representante, Jekyll, SvelteKit o Next.js.
3. **Escribe visualmente.** El editor basado en TipTap, soporta encabezados, enlaces, listas, tablas, listas de tareas, matemáticas, código resaltado por sintaxis y medios de arrastrar y soltar.
4. **Publicar.** [LightCMS](https://lightcms.me) escribe el archivo y la materia delantera y luego la confirma directamente o abre una pull request si quieres revisar.
5. **Despliega.** Acciones de GitHub, páginas de Cloudflare, Vercel, o Netlify pueden reconstruir e implementar su sitio. Los escritores permanecen en el navegador y los mantenedores mantienen su flujo de trabajo de Git.

El paso 4 crea un commit normal. Si dejas de usar [LightCMS](https://lightcms.me), tu sitio todavía se construye porque tu contenido ya vive en tu repositorio.

---

## Lo que la hace diferente

Hay varias opciones de CMS basadas en Git ([Decap CMS](/comparison/netlifycms), TinaCMS, Keystatic, Páginas CMS), y [LightCMS](https://lightcms.me) adopta un enfoque diferente en algunas áreas:

|                           | [LightCMS](https://lightcms.me)                                                                                  |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------- |
| **Almacenamiento**        | Su repositorio de GitHub (Markdown + YAML frontal)                                                               |
| **Editor**                | Editor WYSIWYG basado en TipTapc con matemáticas (KaTeX), resaltado de código, tablas, listas de tareas y medios |
| **AI**                    | Copilot integrado para contornos, reescritos y gramática utilizando cualquier proveedor compatible con OpenAI    |
| **Voica**                 | Dicción generada por susurros en el editor                                                                       |
| **Boletines de noticias** | Publicar Markdown y enviar actualizaciones con Newsy desde GitHub                                                |
| **Modelo de alojamiento** | Autoalojado, con licencia Apache 2.0, se ejecuta en cualquier host de Node.js                                    |
| **Bloquear**              | Ninguno: tu contenido permanece en archivos que tengas                                                           |

[LightCMS](https://lightcms.me) cubre la distribución de borradores, ediciones, publicaciones y boletines sin añadir una base de datos separada.

---

## Qué [LightCMS](https://lightcms.me) no es

- \*\*No es una base de datos CMS primero. \* Si necesita contenido relacional, roles y permisos complejos, o una API de contenido en forma de app, una plataforma sin cabeza como [Payload](/comparison/lightcms-vs-payload-cms) puede encajar mejor.
- **No es un servicio de alojamiento.** [LightCMS](https://lightcms.me) administra contenido; tu host (páginas de Cloudflare, Vercel, Netlify, páginas de GitHub) sirve al sitio. Ver [sitio estático de alojamiento comparado](/misc/top-static-site-hosting).
- **No es un tema o un generador de sitios.** Compromete contenido en cualquier generador estático de sitios que ya ejecuta.

---

## Quién es para

- **Escritores en solitario y bloggers** que quieren poseer su contenido sin tener una infraestructura adicional.
- **Equipos** donde los desarrolladores mantienen el sitio y los no desarrolladores escriben y publiquen contenido.
- **Proyectos estáticos** que han superado a la edición de Markdown en un editor de código pero todavía quieren un flujo de trabajo basado en Git.

Si eso suena como tú, puedes [copiar una plantilla de inicio](/blog/start-with-a-lightcms-template/) para obtener un repositorio, construir la configuración y el flujo de trabajo de implementación listo para su primera publicación.

---

## Preguntas frecuentes

### ¿Es [LightCMS](https://lightcms.me) gratis?

[LightCMS](https://lightcms.me) es de código abierto bajo la licencia Apache 2.0 y diseñado para ser autoalojado. Usted no paga por asiento, y puede alojarlo dondequiera que ejecute Node.js.

### ¿ [LightCMS](https://lightcms.me) trabaja con Hugo y Astro?

Sí. Hugo y Astro leen archivos Markdown con materia principal YAML desde un repositorio, que es lo que escribe [LightCMS](https://lightcms.me). Lo mismo se aplica a Zola, Pacífico, Jekyll y SvelteKit.

### ¿Dónde se encuentra mi contenido?

En tu repositorio como archivos `.md` con materia frontal. No hay una base de datos separada ni un paso de exportación.

### ¿Los escritores necesitan conocer Git?

No. Los escritores usan el editor y el botón de publicar. Los comités, las ramas y las solicitudes de extracción ocurren en segundo plano.

### ¿Cómo es esto diferente de WordPress?

WordPress almacena contenido en MySQL y renderiza páginas con PHP a petición del momento. [LightCMS](https://lightcms.me) writes static files that a CDN can serve. Para una comparación más profunda, consulta [sitios dinámicos vs estáticos](/blog/static-vs-dynamic/) y [alternativas de WordPress](/blog/wordpress-alternatives/).
