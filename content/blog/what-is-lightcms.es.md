---
title: "¿Qué es LightCMS?"
description: "LightCMS es un CMS basado en Git con un editor visual. Compromete Markdown simple en su repositorio y desencadena el despliegue a través de su CI/CD existente."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - luces
  - cms
  - git
  - markdown
---

[LightCMS](https://lightcms.me) es un sistema de gestión de contenido para publicar Markdown desde Git. Escribe en un editor visual en su navegador, y [LightCMS](https://lightcms.me) envía el archivo Markdown y su asunto principal a su repositorio. Su pipeline de CI/CD existente entonces puede construir y desplegar el sitio.

## El problema de las direcciones de LightCMS

Los generadores estáticos de sitios pueden facilitar la construcción y el despliegue de un sitio. Escribir por uno es menos conveniente si tienes que editar Markdown crudo, formatear la materia frontal o resolver conflictos de Git a mano.

[LightCMS](https://lightcms.me) da a los autores un editor visual, manteniendo el contenido en Git. Eso conviene a los equipos que quieren Git propiedad y revisión. Es una opción diferente de una base de datos respaldada CMS con colaboración en tiempo real.

## Cómo publica LightCMS el contenido

1. Iniciar sesión con GitHub.
2. Conectar un repositorio con contenido de Markdown. Puede ser un sitio construido con Astro, Hugo, Zola, 11ty, Jekyll, o Next.js.
3. Escriba en el editor, que soporta encabezados, enlaces, tablas, listas de verificación, bloques de código y medios.
4. Publicar el cambio. [LightCMS](https://lightcms.me) formats the Markdown, updates front matter, and either commits to your branch or opens a pull request for review.
5. Su flujo de trabajo CI/CD existente, como Acciones de GitHub, Páginas de Cloudflare, Vercel, o Netlify, puede entonces construir e implementar el sitio.

Debido a que la publicación crea un commit estándar de Git, su sitio todavía puede construir desde el repositorio si deja de usar LightCMS.

## Perfil técnico

| Atributo                        | Implementación LightCMS                                                                   |
| :------------------------------ | :---------------------------------------------------------------------------------------- |
| Almacenamiento                  | Repositorio Git con archivos Markdown y materia frontal                                   |
| Interfaz del editor             | Editor visual en su navegador                                                             |
| Ayuda IA                        | Asistencia de escritura en editor                                                         |
| Transcripción de voz            | Dictado de voz en el editor                                                               |
| Actualizaciones de suscriptores | Integración de anuncios de GitHub a través de [Newsy](https://github.com/light-cms/newsy) |
| Licencia y alojamiento          | Código abierto y autohostable                                                             |
| Portabilidad                    | El contenido permanece en los archivos del repositorio que controlas                      |

## Cuando LightCMS no es el ajuste correcto

LightCMS se ajusta a los sitios que mantienen su contenido en Git y ya utilizan CI/CD para publicar. Considere una herramienta diferente si:

- Necesitas consultas relacionales, permisos de usuario o una API de contenido en tiempo de ejecución. Un CMS sin cabeceras respaldado por la base de datos como [Payload](/comparison/lightcms-vs-payload-cms) o Strapi puede encajar mejor.
- Quieres un servicio para alojar el sitio público. LightCMS no lo aloja. Las páginas de Cloudflare, Vercel, Netlify o S3 pueden servir el sitio construido.
- Necesita una herramienta para renderizar sus plantillas HTML. LightCMS no hace eso; su generador estático de sitios como Hugo, Astro, o Zola, se encarga de la compilación.

Si necesita una gestión de contenido basada en Git y un editor visual, el siguiente paso es conectar un repositorio de pruebas y confirmar que LightCMS escribe la materia frontal y Markdown en el formato que espera su generador estático de sitios.
