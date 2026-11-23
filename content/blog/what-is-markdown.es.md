---
title: ¿Qué es Markdown? The Plain Text Format for the Web
description: >-
  Discover what Markdown is, how it works, its basic syntax, popular flavours, and why it has become an essential format for modern documentation, blogging, and static site generation.
date: "2026-10-14T15:00:00.000Z"
draft: false
keywords:
  - qué es markdown
  - tutorial de markdown
  - guía de sintaxis de markdown
  - por qué usar markdown
  - markdown para escritores

slug: what-is-markdown
---

Markdown es texto plano con un pequeño conjunto de símbolos de formato. John Gruber lo creó en 2004 como la manera más sencilla de escribir documentos formateados. Dos décadas más tarde se ha convertido en la lingua franca de la web: documentación, Archivos README, notas, boletines y millones de sitios mantienen su contenido en él.

## Por qué Markdown ganó

- **No rota**. A `.md` File from 2004 still opens in any text editor. Los formatos de documentos propietarios caducan; texto plano no.
- **Difiere hermosamente**. Debido a que se trata de texto, Git puede rastrear cada cambio, razón por la cual cada CMS basado en Git almacena contenido como Markdown.
- **Es fácil de aprender**. La sintaxis básica tarda cinco minutos.
- **Separa el contenido de la presentación**. Escribir estructura; deje que el tema se vea manejado.
- **Está en todas partes**. GitHub, Notion exporta, generadores estáticos de sitios y herramientas de IA hablan de ello.

## La sintaxis que necesitas

````markdown
# Heading 1

## Heading 2

A paragraph with **bold** and _italic_ text.

- A bullet point
- Another one

1. A numbered list
2. And the next item

> A blockquote for asides.

[A link](https://example.com)
![An image](/images/photo.jpg)

`inline code` and fenced code blocks:

```js
console.log("hello, web");
```
````

````

Eso cubre la gran mayoría de la escritura en el mundo real. Tablas, listas de tareas y notas al pie de página completan la sintaxis extendida que añade Markdown con sabor a GitHub.

## The Fissing Piece: Front Matter

Static sites add a small metadata header to each file:

```markdown
---
title: My First Post
date: 2026-10-14T10:00:00Z
tags:
  - blogging
---

The article starts here.
````

Esta materia frontal YAML es donde vive el CMS: títulos, fechas, borradores y taxonomías conducen junto con el cuerpo Markdown.

## Escribir Markdown sin la sintaxis

\*\*Ya no tienes que escribir Markdown a mano. \* Los modernos editores basados en Git, [LightCMS](/getting-started/) entre ellos, te dan un editor visual completo con imágenes, , y los atajos de formateo, luego serializa tu escritura para limpiar Markdown por debajo. Consigue una durabilidad de texto simple con una experiencia de escritura cómoda.

Esa combinación (edición visual en la parte superior de Markdown in Git) es la que potencia a todo [categoría CMS basada en Git](/blog/git-cms-vs-traditional-cms/), y es cómo los sitios estáticos en [los mejores generadores estáticos de sitios](/blog/best-static-site-generators/) obtienen su contenido.

## Preguntas frecuentes

### ¿Está muerto Markdown?

Lo contrario. Después de más de 20 años es más central que nunca. It is the content format of GitHub, documentation tool chains, and AI-era writing.

### ¿Cuál es la diferencia entre Markdown y HTML?

Markdown es el formato de autor (texto plano, escritura humana); HTML es el formato de representación (lo que los navegadores muestran). Los generadores convierten el primero en el segundo.

### ¿Necesito aprender Markdown a blog?

No con un CMS visual basado en Git: escribes normalmente, y la herramienta produce Markdown para ti. Aprender lo básico sigue ayudando a editar rápidamente.

### ¿Dónde está almacenado Markdown?

Como archivos `.md`, idealmente en un repositorio Git, que le da historial de versiones, revisión y propiedad portable de todo lo que escribes.
