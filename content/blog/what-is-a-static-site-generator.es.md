---
title: "¿Qué es un Generador Estático de Sitios?"
description: "Un generador de sitio estático compila contenido y plantillas en archivos HTML, CSS y JavaScript estáticos antes de su implementación."
date: "2026-11-16T08:58:17.908Z"
draft: false
tags:
  - qué es un generador de sitio estático
  - generador de sitio estático
  - ssg explicado
  - cómo funcionan los sitios estáticos
  - pre-renderizado html
slug: what-is-a-static-site-generator
---

Un generador estático de sitios (SSG) compila archivos de contenido, plantillas y activos en HTML estático, CSS y JavaScript antes de su implementación. En lugar de renderizar cada página en cada petición, el paso de construcción produce archivos que un CDN o un servidor web pueden entregar directamente.

## Cómo funciona un generador de sitio estático

```text
Content (Markdown + front matter)
Templates and components
Assets and configuration
        │
        ▼
   SSG build
        │
        ▼
 public/ or dist/
        │
        ▼
   CDN / static host
```

Una construcción típica hace cuatro cosas:

1. Contenido de lectura: Analiza Markdown y metadatos de materia frontal como título, fecha, etiquetas y estado de borrador.
2. Plantillas de aplicación: Mapas de contenido para diseños de páginas, listas, taxonomías y feeds.
3. Genera la salida: Escribe páginas HTML, RSS feeds, sitemaps, e índices de búsqueda.
4. Copia activos: Mueve imágenes, fuentes y archivos estáticos en el directorio de salida.

## Beneficios y compensaciones

| Beneficio                           | Por qué importa                                                                                                 | Desplazamiento                                                            |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| Entrega rápida                      | Archivos precompilados pueden ser servidos desde cachés de bordes                                               | Crear paso necesario antes de que los cambios se realicen                 |
| Superficie de ejecución más pequeña | No se requiere tiempo de ejecución de la aplicación por solicitud o base de datos para las páginas de contenido | Características dinámicas necesitan API o JavaScript del lado del cliente |
| Portabilidad                        | El contenido a menudo vive como archivos Markdown simples                                                       | Los ecosistemas de plantillas y plugins varían según el generador         |
| Control de versiones ajustado       | Contenido y código pueden vivir en Git                                                                          | Flujos de trabajo editoriales pueden necesitar una capa CMS               |

Los generadores estáticos de sitios funcionan bien para blogs, documentación, sitios de marketing y portafolios. Son menos apropiados cuando cada petición necesita representación personalizada en el lado del servidor o consultas de bases de datos en tiempo real.

## Generadores comunes de sitios estáticos

Los SSGs populares incluyen Astro, Hugo, Zola, Pacífico, Jekyll y SvelteKit en modo estático. Para una comparación, vea [Los mejores generadores estáticos de sitio en 2026] (/blog/best-static-site-generators/).

## Donde cabe un CMS basado en Git

Un SSG maneja el renderizado. Un CMS basado en Git maneja la creación dando a los editores una interfaz de navegador que commits Markdown en el repositorio. Esa combinación mantiene la arquitectura de entrega estática al mismo tiempo que hace que la edición de contenido sea accesible para no desarrolladores. Ver [¿Qué es un CMS basado en Git?](/blog/Git based-cms-explained/).
