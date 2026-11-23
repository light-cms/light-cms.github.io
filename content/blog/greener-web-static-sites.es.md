---
title: Static Sites and carbon emission building a Greener Web
description: >-
  Explore how static sites and CDN caching can reduce the energy demands of serving web pages, how to estimate your site’s carbon footprint, and what a greener web could look like.
serial: 16
date: "2026-10-14T13:30:00.000Z"
draft: false
tags:
  - sitio web de bajo carbono
  - sitio estático co2
  - web verdeal
  - diseño web sostenible
  - huella de carbono del sitio web

slug: greener-web-static-sites
---

Cada vista de página cuesta energía. En algún lugar donde un servidor está, un caché perdido, una consulta de base de datos se ejecuta y la electricidad medida en gramos de CO2 se gasta entregando un párrafo de texto. Las estimaciones que se citan comun sitúan la red en alrededor del 2–4% de las emisiones globales de electricidad, comparables a la industria de la aviación. The architecture of your site determines where on that spectrum you land, and **Static sites sit at the clean end**.

Dynamic sites do work every time someone visits. They run code, talk to a database, and build the page. The servers have to stay on all the time, even when nobody is there.

Static sites do that work just once, when they are built. The finished HTML files are put on CDN edge servers around the world and served from cache.

- No work for each visit: Serving a stored file uses far less energy than creating a page on the spot.
- No always‑on database: Databases and app servers use power all the time; static sites don’t need them.
- Already cache‑friendly: If a request hits an edge cache, only a small network hop is needed.
- Small files: HTML made from markdown is naturally small, and no extra JavaScript runtime is sent unless you add it.

When you multiply these savings by every visitor, every month, for the whole life of the site, the energy difference is big.

## El efecto colapso: La durabilidad es sostenibilidad

Los sitios estáticos también envejecen bien. A Hugo or Astro site built in 2026 can still be rebuilt and served in 2036: the content is plain Markdown, the entire toolchain is open source, and the output is a folder of files. Sitios que se abandonan debido al cierre de su plataforma o a que su instalación de WordPress se convirtió en reconstrucciones de fuerza inmantenerables: reescribir el mismo contenido en nuevas infraestructuras es su propio tipo de residuos.

Poseer su contenido como Markdown in Git es la opción duradera y de bajo desperdicio.

### Cómo medir el carbono de su sitio web

No se puede mejorar lo que no se mide:

- [**Website Carbon Calculator**](https://www.websitecarbon.com/): Estimates the grams of Carbon emitted per page view and compares your site to others.
- [**Ecograder**](https://ecograder.com/) Gives a comparable estimate, alongside performance and accessibility scoring.
- Importan también las métricas del usuario real: la pintura de contenido más grande y los bytes totales transferidos correlacionan directamente con la energía por vista.

The [LightCMS](https://lightcms.me) Site displays a live carbon rating in its footer, using the same measurement approach this guide recommends.

## Cómo construir una web verde

1. **Serve statically from a CDN**: The biggest lever for content sites.
2. **Choose green hosting**: Providers that power data centers with renewable energy (several major providers now publish their energy sourcing).
3. **Ship less JavaScript**: Every kilobyte is parsed, executed, and paid for on the visitor's battery.
4. **Comprimir y guardar imágenes**: los medios suelen ser la parte más pesada de una página, así que sirven formatos modernos con largas vidas de caché.
5. **Keep content durable**: Plain Markdown and open formats mean a site never needs a rebuild from scratch.
6. **Publish deliberately**: A small, high-value site that people return to beats a sprawling one nobody reads.

## Where [LightCMS](https://lightcms.me) Fits

[LightCMS](https://lightcms.me) Follows these principles: it commits your content as Markdown to your own repository, a static site generator publishes it, and your host's edge network serves the result as cached files. El CMS sólo se ejecuta mientras escribe. Ninguna base de datos de producción sirve a los lectores; el CDN sí.

- [Static sites vs dynamic sites](/blog/static-vs-dynamic/) Covers the architecture in depth.
- [Top static site hosting platforms](/misc/top-static-site-hosting/) Compares where to host sustainably.
- [Why LightCMS](/blog/why-this/) Explains the philosophy behind durable, lightweight publishing.

## Preguntas frecuentes

**How much CO₂ does a typical website emit?**  
A page view usually releases 0.1–1 g CO₂; heavy, un‑cached pages emit more. Static, cached pages are at the low end.

**Does green hosting matter?**  
Yes. Data‑center energy dominates a site’s footprint; renewable‑powered hosting cuts emissions substantially.

**Is a static blog eco‑friendly?**  
Yes. Cached files on an edge network, no always‑on database, and long‑lasting, rebuildable content make it one of the greenest options.

**What is sustainable web by design?**  
Design that minimizes web energy use: lean pages, efficient code, renewable hosting, durable content, and measured impact. La arquitectura estática es la base.
