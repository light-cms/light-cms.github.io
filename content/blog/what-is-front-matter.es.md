---
title: "¿Qué es lo que importa? El bloque de metadatos en la parte superior de su contenido"
description: "La materia frontal es el bloque YAML o TOML en la parte superior de un archivo Markdown que le indica el título de su sitio fecha, etiquetas y estado de borrador, con ejemplos."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false
keywords:
  - qué es materia frontal
  - markdown de materia frontal
  - materia frontal yaml
  - metadatos estáticos del sitio
  - markdown metadata
preview: /og-image.webp
taxonomies:
  tags:
    - markdown
    - explicadores
    - sitios estáticos
    - cms
---

**Cuestión** es el bloque de metadatos en la parte superior de un archivo de contenido, cercado del propio artículo. Es donde un archivo Markdown declara lo que _es_ (título, fecha, etiquetas, autor, ), para que su generador de sitio pueda render, ordenar y filtrar.

Si Markdown es el cuerpo de un puesto, la materia frontal es su etiqueta.

---

## Lo que parece

```markdown
---
title: Notes on Static Site Generators
description: A short summary used for SEO and social cards.
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - static-sites
  - tooling
keywords:
  - static site generators
  - ssg comparison
preview: /og-image.webp
---

The article body starts here, after the closing `---`.
```

Tres cosas vale la pena notar:

1. **Las ventilaciones.** Una línea de tres guiones abre y cierra el bloque. Todo entre los metadatos pertenece; todo después pertenece al artículo.
2. **El formato.** Ese ejemplo es YAML, el predeterminado para la mayoría de los generadores. También se utilizan TOML (`+++`) y JSON (`{...}`); Zola acepta los tres, por ejemplo.
3. **Los campos.** Claves estándar como `title` y `date` son entendidas por los generadores; claves personalizadas como `keywords` o `preview` están disponibles para tus plantillas.

---

## Qué es lo que importa actualmente

Cada campo conduce un comportamiento concreto en la construcción:

| Campo                      | Efecto                                           |
| :------------------------- | :----------------------------------------------- |
| `title`                    | Página `<title>`, encabezados y listas           |
| `descripción`              | Meta-descripción, tarjetas, lista de resúmenes   |
| `fecha`                    | Ordenar, mostrar "publicado en", feeds           |
| `etiquetas` / `categorías` | Páginas de taxonomía y enlaces cruzados          |
| `borrador`                 | Excluir de la construcción cuando es `true`      |
| `slug`                     | Reemplaza la URL derivada del nombre del archivo |
| `plantilla`                | Elige qué diseño procesa la página               |
| `peso`                     | Pedido manual dentro de una sección              |

Esta es la razón por la que un error tipográfico en la materia frontal puede romper una construcción: `date: 2026-13-45` o una pestaña perdida bajo `etiquetas:` no es válida YAML, y el generador falla antes de escribir una sola página.

---

## Por qué el Front Matter existe

Los generadores estáticos de sitios no pueden preguntar a una base de datos "¿Qué es esta página?" porque no hay base de datos. Necesitan metadatos para vivir **con** el contenido de una forma tanto una máquina como una persona puede leer. La materia delantera resuelve que:

- **Archivos autodescriptivos.** Una publicación lleva todo lo necesario para renderizarla. Mueve el archivo y su identidad se mueve con él.
- **Diferentes metadatos.** Cambiar un título es un commit de una línea que puedes revisar y revertir como cualquier otro cambio.
- **Facilidad de herramientas.** Los editores, linteros y scripts de CI pueden validar metadatos antes de la compilación.
- **Portable.** El mismo bloque funciona a través de generadores, con pequeñas diferencias de clave.

---

## Convenciones comunes

Existen suficientes convenciones que valen más la consistencia que la inteligencia:

- **Fechas en ISO 8601**: `2026-10-16T09:00:00Z`. Unambiguoso en las localidades, se ordena correctamente.
- **Etiquetas como una lista**, no como una cadena separada por comas, por lo que una etiqueta que contiene un espacio no se divide a la mitad.
- **Slugs minúsculas con guiones.** Los nombres de los archivos se convierten en URL, así que `my-great-post` supera a `My Great Post.md`.
- **`draft: true` para el trabajo inacabado.** La forma segura de guardar sin publicar.
- **Una verdadera `descripción`.** El único campo más a menudo dejó vacío y luego se lamenta cuando el enlace es compartido.

---

## Donde cabe un CMS

La cuestión principal es la parte de Markdown que los escritores no técnicos no deberían tener que ver. Es una sintaxis con bordes definidos: materia de sangría, comillas materiales, los formatos de fecha importan.

Un CMS basado en Git lo maneja como un **formulario** (rellene el título, elija la fecha, haga clic en etiquetas) y serializa YAML válido al guardar. Los escritores nunca piensan en la valla; el repositorio todavía recibe lo que el generador espera. Esa única característica elimina uno de los modos de fallo más comunes en la publicación del sitio estático.

LightCMS, por ejemplo, valida la materia frontal a medida que escribes y lo escribe en commit (ver [la gira del editor](/blog/lightcms-editor-tour/)), por lo que los metadatos permanecen correctos sin importar quién esté publicando.

---

## Preguntas frecuentes

### ¿Es necesaria una cuestión de frente?

Para páginas en una sección clasificada por fecha, sí: los generadores esperan al menos un título y una fecha. Los requisitos exactos dependen del esquema de su generador.

### YAML vs TOML vs JSON: ¿Qué debo usar?

Cualquiera que sea el valor predeterminado del generador. La coherencia dentro de un repositorio importa más que el propio formato.

### ¿Puede la materia frontal contener listas y objetos?

Sí. Los mapas anidados y las listas son normales: galerías de imágenes, autores con roles y títulos alternos que encajen.

### ¿Cuánto tiempo debe durar la descripción?

Aim para aproximadamente 140–160 caracteres: suficiente tiempo para tener sentido en los resultados de búsqueda, lo suficientemente corto como para no ser truncado.

### ¿Afecta la materia frontal al SEO?

Directamente: es de donde provienen el título y la meta descripción, por lo que es una de las cosas pequeñas más valiosas en un sitio estático.

---

Relacionado: [¿Qué es Markdown?](/blog/what-is-markdown/), [el editor LightCMS](/blog/lightcms-editor-tour/), y [qué hace un generador estático de sitios](/blog/what-is-a-static-site-generator/).
