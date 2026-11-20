---
title: 'Zine: El Generador Estático del Sitio'
description: 'Zine is a fast, young static site generator written in Zig, with its own Super templating language and near-instant builds — a profile of the minimalist SSG.'
draft: false
keywords:
  - generador de sitio estático zine
  - ssg zine
  - generador de sitio estático zig
  - zine ssg vs hugo
  - ssg zig más rápido
isCJKLanguage: false
headless: false
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - zine
    - zig
    - sitios estáticos
---

[Zine](https://zine-ssg.io) Es un nuevo generador estático de sitios Zine es rápido, opinionado y refrescantemente no convencional. Es un proyecto joven que ya maneja los sitios y blogs personales con facilidad, y premia a los autores dispuestos a aprender su propia manera de hacer las cosas.

## Lo que hace a Zine diferente

Zine stands out from other static site generators in several ways:

- \*\*Escrito en Zig, desde cero. \* Sin tiempo de ejecución JavaScript, sin Ruby, sin zona de confort estándar de biblioteca: el renderizador Markdown, motor de plantillas y orquestación están construidos con propósito. Los tiempos de construcción son instantáneos efectivamente.
- **Su propia escritura del lenguaje de plantilla.** Zine utiliza el sistema de plantillas SuperHTML y SuperMD: y el sistema de plantillas de scripty diseñado para el proyecto en lugar de tomar prestado de un ecosistema.
- **Scripty**, su capa de scripting agrega lógica programable donde las plantillas por sí solas se quedan cortas.
- \*\*Contenido como una colección de archivos y diseños. \* Zine convierte los archivos de contenido en HTML, aplica sus diseños y copia el resultado en un directorio de salida, el modelo estático clásico se ejecuta rápidamente.
- **Extras de primera clase**: Sitios web multilingües (i18n), soporte para editor y objetivos documentados de implementación: páginas de GitHub, páginas de Cloudflare, páginas de Codeberg y páginas de chot de origen.
-

## El trueque más honesto

El repositorio Zine lo dice claramente: el proyecto es joven y todavía no está en paridad con alternativas populares como Hugo. Y debido a que Super es el propio lenguaje de plantillas de Zine, hay una curva de aprendizaje: los temas y el conocimiento de la comunidad son más pequeños, haciendo que el apoyo sea mayormente, descubra usted mismo.

Para un sitio web personal con un blog (la zona de confort del proyecto), Zine es más que capaz, y la experiencia del autor es rápida y agradable una vez que el Super click.

## Compatibilidad con contenido y CMS

Zine no consume CommonMark Markdown con materia frontal del mismo modo que lo hacen la mayoría de los generadores estáticos de sitios por lo que un flujo de trabajo típico basado en Git no se aplica directamente.

Zine espera sus propios formatos de contenido, incluyendo [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/) y [Ziggy](https://ziggy-lang.io/). If you already have Markdown content, [md2smd](https://github.com/light-cms/md2smd) can help convert between [CommonMark](https://commonmark.org/) and Zine's formats.

![Zine build pipeline](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png)

Necesita dos repositorios: uno para el frontend y otro para el contenido.

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_template), the frontend repository
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/zine_content), the content repository

Desplegar un repositorio cuando se presiona contenido nuevo en el repositorio de contenidos.

## Donde encaja

- Si quieres probar algo alfa.

[Prueba las plantillas de nuestro org para más información.](https://github.com/light-cms)
