---
title: "Lume: Un generador de sitios estáticos para Deno"
description: "Una visión general de Lume, un generador de sitios estáticos creado para Deno."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false

tags:
  - ssg
  - lume
  - deno
  - sitios estáticos
---

[Lume](https://lume.land) es un generador estático de sitios construido para el ecosistema de Deno. Genera HTML estático a partir de archivos de contenido, plantillas y datos, haciéndolo adecuado para blogs documentación, y otros sitios de contenido que pueden ser desplegados en un CDN.

## Qué proporciona Lume

| Área                  | Qué esperar                                                           | Desplazamiento                                             |
| :-------------------- | :-------------------------------------------------------------------- | :--------------------------------------------------------- |
| Tiempo de ejecución   | Ejecuta en Deno                                                       | ecosistema más pequeño que los generadores basados en Node |
| Formatos de contenido | Markdown, archivos de datos, plantillas; los plugins amplían formatos | Plugin/opciones de configuración añaden complejidad        |
| Plantilla             | Soporta múltiples motores de plantillas y JSX a través de plugins     | El equipo necesita elegir las convenciones temprano        |
| Salida                | Archivos estáticos para CDN/hosting estático                          | Características dinámicas requieren servicios separados    |

## Cuando Lume es un buen ajuste

Lume es una opción razonable si su equipo ya utiliza Deno y quiere un generador estático de sitios con plantillas flexibles y un pipeline de plugin. Es menos convincente si su equipo depende del ecosistema Node/npm, los flujos de trabajo existentes/Hugo/Astro o un gran mercado temático.

## Edición de Lume y contenido

Lume maneja la generación del sitio, no la edición de contenido. Si los escritores necesitan una interfaz basada en el navegador, emparejar Lume con un CMS basado en Git que commits Markdown o archivos de contenido compatibles con el repositorio.

Para comparaciones de SSG más amplias, consulte [Los mejores generadores estáticos de sitios en 2026](/blog/best-static-site-generators/) y [Astro](/blog/eleventy-vs-astro/).
