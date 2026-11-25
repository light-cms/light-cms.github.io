---
title: "¿Qué es LightCMS?"
description: "LightCMS is a Git based CMS with a visual editor. Compromete Markdown simple en su repositorio y desencadena el despliegue a través de su CI/CD existente."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - luces
  - cms
  - git
  - markdown
---

[LightCMS](https://lightcms.me) is a content management system for publishing Markdown from Git. You write in a visual editor in your browser, and [LightCMS](https://lightcms.me) commits the Markdown file and its front matter to your repository. Your existing CI/CD pipeline can then build and deploy the site.

## El problema de las direcciones de LightCMS

Static site generators can make it easy to build and deploy a site. Writing for one is less convenient if you have to edit raw Markdown, format front matter, or sort out Git conflicts by hand.

[LightCMS](https://lightcms.me) gives authors a visual editor, while keeping the content in Git. That suits teams that want Git ownership and review. It is a different choice from a database backed CMS with real time collaboration.

## Cómo publica LightCMS el contenido

1. Sign in with GitHub.
2. Connect a repository with Markdown content. It can be a site built with Astro, Hugo, Zola, 11ty, Jekyll, or Next.js.
3. Write in the editor, which supports headings, links, tables, checklists, code blocks, and media.
4. Publish the change. [LightCMS](https://lightcms.me) formats the Markdown, updates front matter, and either commits to your branch or opens a pull request for review.
5. Your existing CI/CD workflow, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, can then build and deploy the site.

Debido a que la publicación crea un commit estándar de Git, su sitio todavía puede construir desde el repositorio si deja de usar LightCMS.

## Perfil técnico

| Atributo                        | Implementación LightCMS                                                                   |
| :------------------------------ | :---------------------------------------------------------------------------------------- |
| Almacenamiento                  | Repositorio Git con archivos Markdown y materia frontal                                   |
| Interfaz del editor             | Visual editor in your browser                                                             |
| Ayuda IA                        | Asistencia de escritura en editor                                                         |
| Transcripción de voz            | Dictado de voz en el editor                                                               |
| Actualizaciones de suscriptores | Integración de anuncios de GitHub a través de [Newsy](https://github.com/light-cms/newsy) |
| Licencia y alojamiento          | Código abierto y autohostable                                                             |
| Portabilidad                    | El contenido permanece en los archivos del repositorio que controlas                      |

## Cuando LightCMS no es el ajuste correcto

LightCMS fits sites that keep their content in Git and already use CI/CD to publish. Consider a different tool if:

- You need relational queries, user permissions, or a content API at runtime. A database backed headless CMS such as [Payload](/comparison/lightcms-vs-payload-cms) or Strapi may fit better.
- You want one service to host the public site. LightCMS does not host it. Cloudflare Pages, Vercel, Netlify, or S3 can serve the built site.
- You need a tool to render your HTML templates. LightCMS does not do that; your static site generator, such as Hugo, Astro, or Zola, handles the build.

If you need Git based content management and a visual editor, the next step is to connect a test repository and confirm that LightCMS writes front matter and Markdown in the format your static site generator expects.
