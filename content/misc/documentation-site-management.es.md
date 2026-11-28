---
title: Cómo administrar un sitio de documentación en 2026
description: >-
  Una guía práctica para administrar un sitio de documentación con Markdown, un generador estático de sitios, Git y un flujo de trabajo de edición basado en navegadores.
date: '2026-10-30T11:53:00Z'
draft: falso
tags:
  - documentación
  - luces
  - código abierto
slug: gestión de documentación-sitio
---

![](https://i.ibb.co/m5hMx50G/image-png.png)

Un buen sitio de documentación es fácil de leer, fácil de actualizar y difícil de dejar pudrir. Las herramientas importan menos que el flujo de trabajo: mantenga los documentos cerca del código, escribir en un formato que su equipo pueda revisar, y hacer que la publicación sea una parte normal del envío.

## Usa una pila estática amigable de documentos

La mayoría de los sitios de documentación funcionan bien como sitios estáticos. Usted escribe en Markdown, almacena los archivos en Git, construye con un generador estático de sitios y despliega en un CDN o host estático. Esto le da historial de versiones, pull request review y páginas rápidas.

Los generadores de documentación más comunes incluyen las herramientas de estilo Astro Starlight, Hugo, VitePress, Pacífico y Docusaurus. Elige una que coincida con la estructura de contenido y la pila de tu equipo. Si tus ingenieros ya usan Astro, Starlight es un ajuste natural. Si desea velocidad y binarios simples, merece la pena echar un vistazo.

## Mantener los documentos en el mismo flujo de trabajo que el código

Los documentos se desvían cuando viven lejos del producto. Manteniéndolos en el mismo repositorio, o al menos en el mismo flujo de trabajo basado en Git, hace que las actualizaciones sean más fáciles de revisar. Un cambio de código y su cambio de documentos pueden pasar por la misma pull request.

Esto no significa que los escritores necesiten usar una terminal. Un CMS o editor de navegadores basado en Git puede dar a los no desarrolladores un lugar cómodo para editar Markdown mientras se comprometen con el repositorio.

## Hacer el mantenimiento aburrido

Los mejores sistemas de documentación son un poco aburridos. Tienen una propiedad clara, una estructura de carpetas sencilla, plantillas para tipos de página comunes y un proceso de revisión. También tienen el hábito de eliminar o actualizar páginas antiguas.

Ayuda de algunos cheques:

- Cada página tiene un propietario o equipo.
- Los ejemplos y las capturas de pantalla se revisan cuando el producto cambia.
- Enlaces rotos y comandos desactualizados son chequeados en CI.
- Los escritores pueden actualizar documentos sin necesidad de una configuración local de dev.

Para una lectura relacionada, consulta [Hugo vs Astro Starlight](/blog/hugo-vs-astro-starlight/), [¿Qué es la materia delantera?](/blog/what-is-front-matter/), y [CMS basado en Git vs Traditional CMS](/blog/git-cms-vs-traditional-cms/).
