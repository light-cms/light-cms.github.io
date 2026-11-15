---
title: "Lume: Generador de sitios estáticos para Deno"
description: "El generador estático de sitios de Deno, explicó: formatos soportados, arquitectura de plugins, cómo se compara con Jekyll, Hugo, y la funcionalidad, y cómo se ajusta a un flujo de trabajo CMS de Git."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false
keywords:
  - generador de sitio estático de lume
  - deno ssg
  - lume vs eleventy
  - lume deso cms
  - tierra de lume
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - lume
    - deno
    - sitios estáticos
---

[Lume](https://lume.land) (Galiciano por "fuego") es el generador estático de sitios en el centro del ecosistema de Deno. Inspirado por Jekyll, Hugo, y umbrentía, apunta a ser más sencillo de configurar que cualquiera de ellos mientras permanece igual de flexible, y se ejecuta nativamente en Deno, sin `node_modules` en sight.

---

## Qué Lume es

Un generador de sitios estáticos rápido, compuesto y extensible escrito en Deno. Usted lo apunta a un directorio de origen de contenido, que procesa sus archivos a través de una pipeline de plugins, y escribe HTML estático puro listo para cualquier CDN. La afición: los valores por defecto, la configuración mínima, y cada etapa intercambiable.

## Formatos y plantillas

La característica de la línea de cabecera de Lum es la flexibilidad del formato. Fuera de la caja que maneja:

- **Markdown** (con plugins para sintaxis con sabor a GitHub, notas a pie de página y más)
- **Archivos de datos YAML y JSON**
- **Módulos JavaScript y TypeScript** como páginas o fuentes de datos
- **JSX** (componentes preactivos renderizados a HTML estático)
- **Nunjucks** y otros idiomas de plantilla a través de plugins

Ese último punto importa: un sitio de Lume puede mezclar artículos de Markdown con componentes JSX en la misma construcción, para que sitios pesados de contenido con secciones interactivas ocasionales se sientan naturales.

## Ecosistema

- Los **Plugins** cubren todo, desde el resaltado de sintaxis (Prisma, Shiki) hasta la transformación de imágenes, los sitemaps y los feeds: el estilo venezolano "ensamblar tu propio tubería" modelo, con ergonómica Deno-nativa.
- **Deno toolchain**: compilado en TypeScript, ejecución segura por defecto y entornos reproducibles sin un ritual del gestor de paquetes.
- **Backed by Deno**: used in official tutorials, it is the de-facto answer to "what do I use to make a static site on Deno?"

## Donde encaja

Lume ocupa el mismo niche que [Eleventy](/blog/eleventy-vs-astro/): producción mínima, libertad de plantilla, no se impone un marco de trabajo del lado del cliente. Elige si tu mundo es Deno/TypeScript; elige entusiasta si tu mundo es Nodo; elige [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) si quieres incluir islas de componentes. El campo más ancho es encuestado en [los mejores generadores estáticos de sitios](/blog/best-static-site-generators/).

## Contenido y flujo de trabajo CMS

Lume lee Markdown con materia frontal de su repositorio como todos los generadores de esta categoría. Empareje con un CMS basado en Git ([LightCMS](/getting-started/) o el [campo más amplio](/comparison/top-git-cms/)) y los escritores publiquen visualmente mientras Lume compila los commits en HTML. Los objetivos de despliegue son los hosts estáticos habituales gratuitos ([comparison](/blog/cloudflare-pages-vs-github-pages/)).

---

## Preguntas frecuentes

### ¿Es Lume un CMS o un generador estático de sitios?

Un generador de sitio estático. Para la capa de edición, emparejarla con un CMS basado en Git que compromete Markdown en su directorio de fuentes.

### ¿Cuál es la diferencia entre Lume y el Pacífico?

Muy poco de forma ófica: ambos producen salida estática cero JS con libertad de plantilla. Lume es Deno-native con TypeScript incorporado; enty funciona en Node con el ecosistema más grande.

### ¿Soporta Lume JSX?

Sí. Los componentes Preact pueden renderizar a HTML estático junto a páginas Markdown, una de sus características más queridas.

### ¿Es Lume rápido?

Sí. Al igual que todos los generadores de procesos individuales que producen salida estática, las construcciones se miden en segundos; los visitantes reciben el mismo HTML en caché que cada SSG produce.
