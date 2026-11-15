---
title: ¿Qué es Markdown? El formato de texto plano potenciando la web
description: "Markdown explicó: ¿qué es, por qué ha durado, la sintaxis que necesitas, y cómo las herramientas CMS basadas en Git convierten el texto plano en un formato de publicación."
serial: 25
date: 2026-10-14T15:00:00Z
draft: false
keywords:
  - qué es markdown
  - tutorial de markdown
  - guía de sintaxis de markdown
  - por qué usar markdown
  - markdown para escritores
preview: /og-image.webp
taxonomies:
  tags:
    - markdown
    - escribir
    - contenido
---

Markdown es texto plano con un pequeño conjunto de símbolos de formato. John Gruber lo creó en 2004 como la manera más sencilla de escribir documentos formateados. Dos décadas más tarde se ha convertido en la lingua franca de la web: documentación, Archivos README, notas, boletines y millones de sitios mantienen su contenido en él.

---

## Por qué Markdown ganó

- **No rota**. Un archivo `.md` de 2004 todavía se abre en cualquier editor de texto. Los formatos de documentos propietarios caducan; texto plano no.
- **Difiere hermosamente**. Debido a que se trata de texto, Git puede rastrear cada cambio, razón por la cual cada CMS basado en Git almacena contenido como Markdown.
- **Es fácil de aprender**. La sintaxis básica tarda cinco minutos.
- **Separa el contenido de la presentación**. Escribir estructura; deje que el tema se vea manejado.
- **Está en todas partes**. GitHub, Notion exporta, generadores estáticos de sitios y herramientas de IA hablan de ello.

## La sintaxis que necesitas

````markdown
# Encabezado 1
## Encabezado 2

Un párrafo con texto **negrita** y *cursiva*.

- Un punto
- Otro

1. Una lista numerada
2. Y el siguiente elemento

> Una cita de bloques para asides.

[Un enlace](https://example.com)
![Una imagen](/images/photo.jpg)

`código en línea` y bloques de código cercados:

```js
console.log("hola, web");
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

---

## Preguntas frecuentes

### ¿Está muerto Markdown?

Lo contrario. Después de más de 20 años es más central que nunca. Es el formato de contenido de GitHub, herramientas de documentación y escritura de la era de AI.

### ¿Cuál es la diferencia entre Markdown y HTML?

Markdown es el formato de autor (texto plano, escritura humana); HTML es el formato de representación (lo que los navegadores muestran). Los generadores convierten el primero en el segundo.

### ¿Necesito aprender Markdown a blog?

No con un CMS visual basado en Git: escribes normalmente, y la herramienta produce Markdown para ti. Aprender lo básico sigue ayudando a editar rápidamente.

### ¿Dónde está almacenado Markdown?

Como archivos `.md`, idealmente en un repositorio Git, que le da historial de versiones, revisión y propiedad portable de todo lo que escribes.
