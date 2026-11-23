---
title: "Content as Code: Writing Like Code"
description: >-
  Treat content like code, version it, review changes, and manage it alongside your projects. This post explores the benefits and practicalities of a content as code workflow.
date: "2026-11-04T19:22:00Z"
draft: false
tags:
  - contenido como código
  - documentos como código
  - contenido en git
  - flujo de trabajo markdown
  - contenido controlado por versión
isCJKLanguage: false
headless: false
serial: 47
preview: /og-image.png
slug: content-as-code
---

**Content as code** Is the practice of storing writing the way developers store source: plain text files in a repository, reviewed in pull requests, validated by automated checks, and deployed by a pipeline.

"Documentos como código" es el nombre antiguo. Los equipos de documentación técnica lo iniciaron, y se ha extendido a blogs, registros de cambios, una copia de marketing, y todo lo que solía vivir en un wiki o una base de datos CMS.

## Las tres comisiones

El contenido como código se reduce a tres opciones:

1. **El texto sin formato es el formato.** Markdown o AsciiDoc, YAML o TOML, archivos UTF-8. Nada propietario, nada que necesite la herramienta original para abrir.
2. **El repositorio es el sistema de registro.** No es una base de datos, ni una wiki, ni una unidad compartida. Si no está en Git, no existe.
3. **El pipeline trata el contenido como una construcción.** Los internos revisan los enlaces y el estilo, las vistas previas renderizan cada solicitud de pull y los despliegue de fusión.

Una vez que se sostienen, la mayoría de los beneficios siguen automáticamente.

### Lo que heredas de la práctica del software

### Revisión que significa algo

Una solicitud de extracción de un documento da comentarios a nivel de línea sobre la frase exacta, una aprobación explícita y una fusión. La revisión editorial ocurre en la pull request en lugar de un hilo de correo electrónico con archivos adjuntos.

### Historial que responde a preguntas

`git log` On a file shows every change, author, and timestamp. "¿Cuándo cambiamos el reclamo de precios?" es una búsqueda, no una investigación.

### Automatización

La ortografía, la verificación de enlaces, las reglas de estilo, la validación de la materia frontal y la vista previa construyen todos en el mismo CI que construye código. Los metadatos rotos falla la tubería en lugar del sitio en vivo.

### Trabajo paralelo

Dos escritores en dos archivos se fusionan limpiamente. Los conflictos son raros por construcción, porque la unidad de contenido es un archivo.

### Back up and portability

Cada clon es una copia completa. Moving platforms is a `git clone` Away from succeeding.

### Donde se hace difícil

La lista honesta, porque no es gratis:

- **Nontechnical writers need an interface.** Raw Git is a cliff. Contenido como código funciona en la práctica cuando emparejas el repositorio con una herramienta de edición que oculta confirmaciones, que es el vacío que tienen las herramientas CMS basadas en Git.
- **Los medios ricos están torpados.** Imágenes y documentos significan archivos binarios en el repositorio: clones más grandes, extraños difiere, LFS ocasional.
- **La estructura es limitada.** Los archivos no se unen. Cuando el contenido se vuelve relacional, una base de datos gana su complejidad.
- **Todavía existen conflictos de fusiones.** Rara vez cuando los archivos son por documento, dolorosos cuando dos personas editan el mismo archivo largo.
- **La búsqueda y la vista previa necesitan herramientas.** Un wiki te da la búsqueda al instante; un sitio estático necesita un paso de índice.

Ninguno de ellos se descalifica para una publicación. Todas ellas son reales para otras formas de trabajo.

## La pila de prácticas

Una configuración típica de contenido como código para una publicación se ve así:

```text
contenido/
→ Postos/
Ninguno→ 2026-10-16-shipping-notes.md
mañanos-2026-10-02-release-1-4.md
Ningunes/
Ningunos-about.md
aunario_index.md
```

- **Files** Carry Markdown and front matter.
- **CI** Validates front matter, checks links, and builds previews per pull request.
- **A CMS tool** Provides the writing surface for anyone who is not comfortable in an editor.
- **Deploy** Publishes the built output on merge.

El repositorio sigue siendo reconocible para un desarrollador e invisible para un escritor. Ese equilibrio es todo el engaño.

## Por qué dura

Contenido como código gana a tiempo. Las bases de datos necesitan su esquema, su versión del servidor y su proveedor. Los Wikis necesitan su proveedor. Los documentos propietarios necesitan su proveedor.

Un directorio de archivos Markdown necesita un editor de texto, y seguirá abierto en uno en veinte años, independientemente de lo que le pase a cualquier herramienta de la cadena. Para el contenido destinado a sobrevivir a la plataforma en la que fue escrito, es decir, gestión de riesgos en lugar de nostalgia.

The same premise runs through every Git based CMS: [LightCMS](/blog/what-is-lightcms/) Adds the writing surface, and the repository keeps the permanence. See [drafts, revisions, and rollbacks](/blog/lightcms-drafts-and-versioning/) For the workflow in detail.

### Preguntas frecuentes

### ¿El contenido como código es el mismo que un CMS basado en Git?

Es la diópoda; un CMS basado en Git es una de las implementaciones. Puedes practicar el contenido como código con nada más que un editor, y un CMS basado en Git da un paso a los no desarrolladores.

Should writers be familiar with Git?

No si la herramienta es correcta. Los escritores deberían ver un editor y un botón de publicación; los commits, ramas y reseñas ocurren debajo de él.
