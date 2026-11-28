+++
title = "LightCMS: Publicación basada en Git para sitios estáticos"
description = "Guías sobre flujos de trabajo CMS basados en Git, generadores estáticos de sitios y publicación de Markdown con LightCMS."
+++

[LightCMS](https://www.lightcms.me) es un sistema de gestión de contenido para generadores estáticos de sitios. Mantiene tu contenido como Markdown en Git, donde puedes editarlo en un navegador, revisa los cambios y publica a través del pipeline CI/CD que ya utilizas.

## Lo que puedes hacer con LightCMS

| Capacidad                  | Cómo funciona                                                                                                             |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| Edición visual             | Escribe y edita Markdown en tu navegador.                                                                                 |
| Publicación de Git         | Guardar cambios como commits en su repositorio en lugar de en una base de datos CMS separada.                             |
| Revisión                   | Utilice ramas, solicitudes de extracción e historial de Git para revisar los cambios.                                     |
| Actualizaciones del Lector | Enviar actualizaciones a través de workflows de GitHub con herramientas como [Newsy](https://github.com/light-cms/newsy). |

## Cómo funciona la publicación

1. Iniciar sesión con GitHub.
2. Elija el repositorio que contenga el contenido de su sitio.
3. Escriba o edite un post en el navegador, incluyendo cualquier asunto frontal que su sitio necesite.
4. Publicar el cambio a Git.
5. Permite que su pipeline existente, como Acciones de GitHub, Páginas de Cloudflare, Vercel, o Netlify, construir y desplegar el sitio.

## Empezar con estas guías

- [¿Por qué publicación basada en Git?](/blog/why-this/) cubre los intercambios entre CMS dinámicos basados en Git y bases de datos.
- [Auto hosting LightCMS](/blog/selfhost/) explica cómo desplegar tu propia instancia de [lightcms](https://github.com/light-cms/lightcms).
- [Cómo funciona News](/blog/newsletter-automation/) describe los flujos de trabajo basados en git.

## Comparaciones y arquitectura

- [Git CMS vs. CMS tradicional](/blog/git-cms-vs-traditional-cms/)
- [Sitios estáticos vs. dinámicos](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Páginas de Cloudflare vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Plataformas CMS basadas en mejores Git](/comparison/top-git-cms/)
