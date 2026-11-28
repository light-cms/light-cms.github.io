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

[LightCMS](https://lightcms.me) es un CMS para sitios estáticos. Edite Markdown en su navegador y envíelo a GitHub. Su pipeline de construcción y despliegue existente lo lleva de ahí.

## Antes de empezar

Necesita:

- Un repositorio de GitHub que contiene un sitio estático que utiliza contenido de Markdown.
- Un pipeline de despliegue como Acciones de GitHub, Páginas de Cloudflare, Netlify, o Vercel.
- Acceso al repositorio para que LightCMS pueda leer y confirmar archivos de contenido.

## Configurar pasos

1. Inicia sesión con un proveedor compatible con LightCMS.
2. Otorgue acceso a [LightCMS](https://lightcms.me) al repositorio que contiene el contenido de su sitio.
3. Elige dónde viven tus mensajes, páginas y activos.
4. Cree o edite un post, incluyendo la materia principal que su generador de sitio necesita.
5. Publique el cambio, luego compruebe que su pipeline de CI/CD construya y despliegue el sitio.

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
