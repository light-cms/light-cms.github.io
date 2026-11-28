---
title: "Por qué LightCMS existe"
description: "Por qué LightCMS utiliza Markdown basado en Git y un editor visual para facilitar la publicación estática del sitio sin renunciar al control de versiones."
serial: 2
date: 2026-09-18T00:41:00Z
draft: false
tags:
  - cms
  - filosofía
  - luces
---

Estamos construyendo [LightCMS](https://lightcms.me) porque publicar en un sitio estático no debería requerir que todos los escritores sigan un flujo de trabajo para desarrolladores. Puede escribir en un editor de navegador, mientras que su contenido permanece en archivos Git como Markdown.

## El problema con los flujos de trabajo de publicación estática

Los generadores estáticos de sitios hacen fácil construir y desplegar un sitio. Escribir por uno puede significar clonar un repositorio, editar Markdown, administrar la materia delantera, confirmar y esperar a que CI/CD.

Es un territorio familiar para los desarrolladores. Para los escritores y editores, puede obstaculizar la publicación.

## Por qué el contenido basado en Git sigue siendo importante

Mantener contenido en Git te da algunas cosas prácticas:

- Un historial de cambios que puede revisar, comparar o revertir.
- Archivos Markdown que puede mover entre generadores, hosts y editores.
- Una ruta directa a los flujos de trabajo basados en Git y de despliegue de muchos sitios estáticos ya utilizados.
- Una copia de su contenido en su propio repositorio, en lugar de una base de datos CMS propia.

## Qué LightCMS renuncia

LightCMS se construye alrededor de la publicación de Git, no de características de aplicación en tiempo real. Eso funciona bien para blogs, documentación y sitios de marketing. Si usted necesita personalización, relaciones complejas entre el contenido o consultas de base de datos en tiempo de ejecución, otro tipo de CMS puede convencerle mejor.

Escribes en un editor visual, mientras que los archivos Markdown y el historial de Git siguen siendo la fuente de la verdad. Para más información sobre el producto, vea [¿Qué es LightCMS?](/blog/what-is-lightcms/).
