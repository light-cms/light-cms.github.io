---
title: "Un recorrido por el Editor de LightCMS: WYSIWYG que sale de una marca limpia"
description: "Dentro de la superficie de escritura de LightCMS: Edición visual impulsada por TipTap, con matemáticas, resaltado de código, tablas, listas de tareas y medios que todavía producen Markdown editable a mano."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
keywords:
  - editor de faros
  - wysiwyg markdown editor
  - editor visual para markdown
  - tiptap editor
  - markdown wysiwyg
preview: /og-image.webp
taxonomies:
  tags:
    - luces
    - editor
    - markdown
    - escribir
---

La mayoría de los "editores de Markdown" son un área de texto con un panel de vista previa colocado al lado. Escribes sintaxis cruda, mira el resultado, y esperas que el anidamiento sea correcto. El editor lightCMS funciona al revés. **Escribes y el editor escribe la parte inferior de Markdown.**

Este es un recorrido por esa superficie escrita: lo que hace, por qué funciona de esa manera, y lo que se niega deliberadamente a hacer.

---

## El núcleo de Idea: ver el documento, no la sintaxis

El editor está basado en [TipTap](https://tiptap.dev), un framework de texto enriquecido basado en ProseMirror. configurado para serializar todo lo que produce en Markdown estándar más materia frontal YAML.

Eso significa:

- **Bold** es un botón de barra de herramientas o `Cmd+B`, y escribe `**negrita**` en el archivo.
- Un encabezado es un desplegable, y escribe `## Encabezado`.
- Una tabla es insertada, arrastrada y editada como una tabla, y aterriza como una tabla de tuberías en su repositorio.

Usted obtiene la inmediatez de un procesador de textos con la durabilidad de texto plano. No hay formato de documento propio, no hay blobs binarios y no hay paso de conversión al salir.

---

## Lo que puedes soltar en un post

### Texto estructurado
Encabezados, cotizaciones de bloques, listas ordenadas y no ordenadas, reglas horizontales y listas de tareas: el esqueleto completo de un artículo técnico, todo accesible por teclado.

### Bloques de código con resaltado
Inserta un bloque vallado, elige el idioma y el editor mantiene intacta la etiqueta de cerca e idioma. Su publicación renderiza con la misma sintaxis resaltando su SSG ya aplica.

### Matemáticas con KaTeX
Escribe ecuaciones en línea o muestra ecuaciones y verlas en directo. Para publicaciones técnicas tales como entradas ML, notas de física, y escrituras de algoritmo, esto elimina el bucle "compilar para comprobar la fórmula".

### Tablas
Insertar filas y columnas visualmente. Las tablas de Markdown son miserables de escribir a mano; aquí son sólo celdas.

### Medios
Arrastra imágenes a la página. [LightCMS](https://lightcms.me) almacena el archivo, genera la referencia y la escribe en tu contenido, por lo que una captura de pantalla va desde el portapapeles a publicado sin un viaje a través de su sistema de archivos.

---

## Material delantero sin YAML

La otra mitad de cualquier publicación estática es su asunto principal, y es donde la edición manual suele ir mal: una pestaña perdida, una fecha en el formato incorrecto, una comilla no cerrada, y la compilación se rompe.

En [LightCMS](https://lightcms.me), la parte delantera es una forma: título, descripción, fecha, etiquetas, palabras clave y cualquier otra cosa que tu esquema declare. El editor valida a medida que escribes y escribe correctamente YAML formateado en la publicación. Los escritores nunca ven la sintaxis, y el repositorio todavía recibe lo que el SSG espera.

Una gran parte de "mi construcción está fallando" los hilos de soporte en las comunidades del sitio estático se remontan a una materia frontal mal formada, y una forma visual elimina esa clase de error.

---

## Temas construidos para sesiones largas

El editor viene con modos claros y oscuros. Eso suena cosmético hasta que has escrito durante tres horas: un fondo puro `#ffffff` a la 1am es hostil y la mayoría de los paneles de administración no importa. [LightCMS](https://lightcms.me) elige sus paletas para leer y escribir en largas sesiones, no para una captura de pantalla en una página de destino.

---

## Qué no hará el editor

Dos límites son intencionales:

1. **No te permitirá romper el formato.** Cada mapa de acción a Markdown válido. No hay ningún estado en el que el editor guarde algo que su SSG no puede leer.
2. **No es una herramienta de diseño.** Diseño, tema y presentación pertenecen a sus plantillas: el CMS posee contenido, el repositorio posee código. Mantener esa línea limpia es lo que permite a los diseñadores y escritores trabajar en el mismo repositorio sin pisar el uno al otro.

---

## ¿Por qué no usar un editor de código?

Puedes hacerlo, y los desarrolladores a menudo lo hacen. Pero tan pronto como una segunda persona toque el repositorio, "just edit the Markdown" se convierte en una carga de soporte: mala materia delantera, tablas desordenadas, expresiones accidentales en blanco. Corregir un error tipográfico significa entonces instalar un editor, clonar un repositorio y aprender un flujo de trabajo de ramas.

El editor [LightCMS](https://lightcms.me) deja el flujo de trabajo del desarrollador sin tocar y elimina esas barreras para todos los demás.

---

## Preguntas frecuentes

### ¿Produce el editor Markdown desordenado?

No. Se serializa en Markdown estándar con la materia principal YAML, la misma salida que un humano cuidadoso escribiría. Abra cualquier entrada publicada en el código VS y lea normalmente.

### ¿Puedo seguir editando los archivos por Mano?

Siempre que lo haga. [LightCMS](https://lightcms.me) se compromete a su repositorio como lo haría cualquier otro. Edición de manos, ediciones del editor, y AI edita todos los terrenos que los mismos archivos `.md`.

### ¿Soporta los códigos cortos de Markdown?

Los códigos cortos de su SG viven en el contenido como texto plano y se pasan sin tocar; el editor no intenta interpretarlos ni reformularlos.

### ¿Qué hay de las imágenes?

Arrastra y suelta. [LightCMS](https://lightcms.me) coloca el activo y escribe la referencia para que la ruta coincida con lo que espera tu construcción.

---

Siguiente: [el copilot IA](/blog/lightcms-ai-copilot/) que vive al lado de este editor, y [dictar un borrador con tu voz](/blog/lightcms-voice-to-text/) al escribir es la parte lenta.
