---
title: ¿Qué es el Jamstack?
description: "Jamstack es una arquitectura web que sirve etiquetas precompiladas, utiliza APIs para capacidades dinámicas y añade JavaScript para interactividad cuando sea necesario."
serial: 20
date: 2026-10-14T14:10:00Z
draft: false
tags:
  - jamstack
  - arquitectura
  - sitios estáticos
  - api
---
Jamstack es una arquitectura web que combina etiquetas precompiladas, API y JavaScript. En lugar de renderizar cada página desde un servidor de aplicaciones en cada solicitud, un sitio Jamstack sirve archivos precompilados de un CDN y utiliza APIs o JavaScript del lado del cliente para funciones dinámicas.

## The three Jamstack components| Component | Role | Example |

\| :--- | :--- | :--- | | Markup | Prebuilt HTML generated during a build | Static site generator output | | APIs | Dynamic capabilities outside the page render | Forms, search, payments, auth | | JavaScript | Client-side interactivity | Search UI, comments, personalization |

La arquitectura no es lo mismo que "sin JavaScript" o "sin comportamiento dinámico". Significa que la ruta de entrega por defecto está precompilada y almacenada en caché, mientras que el comportamiento dinámico se añade deliberadamente.

## Por qué los equipos usan Jamstack

Los sitios web de Jamstack pueden ser rápidos, cacheables y operativamente sencillos para proyectos pesados en contenidos. They also fit well with Git based workflows: content changes trigger builds, and deployments produce immutable assets.

La compensación es complejidad a la raya. La autenticación, las vistas previas, la personalización y los datos en tiempo real a menudo requieren servicios de terceros, funciones sin servidor o representación híbrida.

## Jamstack en la práctica moderna

Los marcos modernos desdibujan la línea entre estática y dinámica. Astro, Next.js, SvelteKit y otros pueden apuntar algunas rutas y hacer otras dinámicamente. Esto hace que "Jamstack" sea menos de una regla estricta y más de un valor predeterminado útil: preconstruir lo que pueda, usar servicios dinámicos donde sea necesario.

Para la lectura relacionada, vea [Sitios estáticos vs. Dinámicos](/blog/static-vs-dynamic/) y [¿Qué es un Generador de Sitios Estáticos?](/blog/what-is-a-static-site-generator/).
