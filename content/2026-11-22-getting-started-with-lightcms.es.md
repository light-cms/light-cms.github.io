---
title: Comenzando con LightCMS
description: Conecte un repositorio de GitHub a LightCMS, edite el contenido de Markdown en un navegador, y publique a través de su flujo de trabajo de implementación basado en Git.
slug: getting-started-with-lightcms
date: 2026-11-22T11:47:03.315Z
tags:
  - luces
  - git
  - github
  - sitios estáticos
draft: falso
---

[LightCMS](https://lightcms.me) is a CMS for static sites. Edit Markdown in your browser and commit it to GitHub. Your existing build and deployment pipeline takes it from there.

## Antes de empezar

Necesita:

- Un repositorio de GitHub que contiene un sitio estático que utiliza contenido de Markdown.
- Un pipeline de despliegue como Acciones de GitHub, Páginas de Cloudflare, Netlify, o Vercel.
- Acceso al repositorio para que LightCMS pueda leer y confirmar archivos de contenido.

## Configurar pasos

1. Sign in with a provider LightCMS supports.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choose where your posts, pages, and assets live.
4. Create or edit a post, including the front matter your site generator needs.
5. Publish the change, then check that your CI/CD pipeline builds and deploys the site.

## Qué verificar después de la configuración

| Comprobar                  | Resultado esperado                                              |
|:-------------------------- |:--------------------------------------------------------------- |
| Ruta de contenido          | LightCMS lee y escribe los archivos Markdown correctos          |
| Cuadro frontal             | Los campos requeridos coinciden con su tema/plantillas SSG      |
| Activos                    | Imágenes subidas al directorio estático/multimedia esperado     |
| Desplegar pipeline         | Un commit activa una compilación exitosa del sitio              |
| Comportamiento de borrador | Los mensajes borradores se comportan como se esperaba en tu SSG |

## Siguientes pasos

- [Por qué LightCMS existe](/blog/why-this/)
- [Empezar con una plantilla de LightCMS](/blog/start-with-a-lightcms-template/)
- [Autoalojando LightCMS](/blog/selfhost/)
- [Configurar su repositorio y CI/CD](/blog/configuring-your-repository-cicd/)
