---
title: "¿Qué es la materia frontal en Markdown?"
description: "La materia frontal es los metadatos YAML, TOML o JSON en la parte superior de un archivo Markdown que los generadores estáticos de sitios utilizan para los títulos, fechas, etiquetas y plantillas."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false

tags:
  - markdown
  - explicadores
  - sitios estáticos
  - cms
---

La materia frontal es un bloque de metadatos en la parte superior de un archivo de contenido que describe la página a un generador de sitio estático. Típicamente contiene campos como título, descripción, fecha, etiquetas, estado de borrador e información de plantilla.

## Formatos comunes de materia frontal

La mayoría de los generadores de sitios estáticos soportan la materia frontal YAML, y algunos también soportan TOML o JSON.

```md
---
título: "Notas en los generadores estáticos de sitios"
descripción: "Un breve resumen utilizado en metadatos y vistas previas.
fecha: 2026-10-16T09:00:00Z
borrador: falsa
etiquetas:
 - sitios estáticos
 - herramientas
---
```

Los metadatos se sitúan entre delimitadores en la parte superior del archivo. El cuerpo de Markdown sigue por debajo de él.

## Qué control de la materia frontal

| Campo         | Uso común                      | Construir impacto                                                       |
| :------------ | :----------------------------- | :---------------------------------------------------------------------- |
| `title`       | Título de página y encabezado  | Los títulos que faltan pueden romper plantillas o listados              |
| `fecha`       | Ordenar y publicar metadatos   | Las fechas no válidas pueden causar errores de construcción             |
| `borrador`    | Borrador/estado publicado      | Los borradores pueden ser excluidos de las construcciones de producción |
| `etiquetas`   | Filtros y páginas de taxonomía | La estructura no válida puede romper la generación de taxonomía         |
| `slug`        | Sobreescribir ruta de URL      | Puede cambiar URLs canónicas                                            |
| `descripción` | Metadatos y previsualizaciones | Afecta fragmentos y previsualizaciones sociales                         |

## Errores comunes

Los errores de la materia frontal son una causa frecuente de fallos estáticos en la compilación del sitio. Los problemas comunes incluyen sangría YAML no válida, formatos de fecha incorrectos, comillas faltantes alrededor de caracteres especiales y nombres de campos inconsistentes en todos los archivos.

Un CMS basado en Git puede reducir estos errores al exponer la materia frontal como campos de formulario y validar los valores antes de guardar. Incluso con un editor visual, mantenga el formato de materia frontal subyacente consistente en su repositorio de contenido.

Para la lectura relacionada, vea [¿Qué es Markdown?](/blog/what-is-markdown/) y [La gira del editor LightCMS](/blog/lightcms-editor-tour/).
