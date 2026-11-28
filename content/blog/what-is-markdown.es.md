---
title: "¿Qué es Markdown?"
description: "Markdown es un formato de marcado que utiliza símbolos simples para formatear texto."
date: "2026-10-14T15:00:00.000Z"
draft: false

slug: what-is-markdown
---

Markdown es un formato de marcado de texto plano para escribir documentos estructurados con símbolos simples. Se utiliza comúnmente para la documentación, archivos README, notas, y contenido estático del sitio porque la fuente sigue siendo legible como texto y puede ser convertida a HTML.

## Sintaxis básica de Markdown

````md
# Encabezado 1

## Encabezado 2

Un párrafo con negrita y _cursiva_ texto.

- Un artículo
- Otro artículo

1. Un elemento numerado
2. Otro elemento numerado

[Link text](https://example.com)
![Alt text](/images/photo.jpg)

`inline code`

```js
console.log("hola, web");
```
````

Diferentes sabores de Markdown añaden características como tablas, listas de tareas, notas al pie de página y atributos de código vallado. Los sabores comunes incluyen CommonMark y GitHub Saborado Markdown.

## Por qué Markdown funciona bien para sitios estáticos

| Propiedad       | Beneficio práctico                                           | Desplazamiento                                             |
| :-------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| Texto simple    | Fácil de almacenar, diferir y versión en Git                 | Control de diseño limitado sin extensiones                 |
| Fuente Legible  | Los autores pueden editar sin un editor propietario          | Documentos complejos pueden necesitar MDX o códigos cortos |
| Conversión HTML | Generadores estáticos de sitios lo renderizan a páginas web  | La salida depende del generador y del tema                 |
| Portabilidad    | Los archivos pueden moverse entre herramientas y plataformas | Las diferencias de sabor pueden afectar al renderizado     |

## Markdown y materia frontal

Los generadores estáticos de sitios a menudo emparejan Markdown con la materia delantera, un bloque de metadatos en la parte superior del archivo.

```md
---
title: "Mi primera entrada"
data: 2026-10-14T10:00:00Z
etiquetas:
  - blogging
---

El cuerpo del artículo comienza aquí.
```

Metadatos de la materia delantera; contenido de las tiendas Markdown. Juntos, forman un formato de contenido portátil para los flujos de trabajo de publicación basados en Git. Para más detalles, ve [¿Qué es la materia frontal en Markdown?](/blog/what-is-front-matter/) y [¿Qué es un CMS basado en Git?](/blog/Git based-cms-explained/).
