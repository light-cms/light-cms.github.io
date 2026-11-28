---
title: Static Sites and ecofriendly web building a less polluting web
description: >-
  How static sites, and efficient asset handling can reduce energy use and
  carbon emissions.
date: '2026-10-14T13:30:00.000Z'
draft: false
tags:
  - co2
  - carbon
  - oxide
  - energy
  - website
  - carbon
  - footprint
  - sharing
slug: greener-web-static-sites
---
Static sites can reduce the energy required to serve web pages by moving work from every request to build time and by serving cached files from a CDN. They are not automatically low-carbon, but for content-heavy sites they often avoid unnecessary server-side computation.

## Why static delivery can use less energy

Dynamic websites typically execute application code, query a database, and generate HTML for each request.

Static sites generate HTML during a build and serve the resulting files repeatedly.


| **Factor**               | **Dynamic request path**                       | **Static cached path**                                  |
| :------------------------ | :---------------------------------------------- | :------------------------------------------------------- |
| Per-request work         | Application logic and database queries may run | A file can be served from cache                         |
| Always-on infrastructure | An app server and database are often required  | Builds run on demand; hosting can be file- or CDN-based |
| Caching                  | Possible, but often more complex               | A natural fit for immutable or static assets            |
| Payload control          | Depends on the app and client bundle           | Depends on build output and asset choices               |




The actual impact depends on traffic, cache hit rate, hosting energy sources, page weight, and client-side JavaScript.

## How to measure website carbon impact

Estimates are useful for direction, not precise accounting. Use multiple tools and track changes over time.

- [Website Carbon Calculator](https://www.websitecarbon.com/) estimates emissions per page view.
- [Ecograder](https://ecograder.com/) provides sustainability-oriented scoring and recommendations.
- Browser performance metrics such as Largest Contentful Paint, total transfer size, and JavaScript execution cost help identify technical drivers of page weight.

A practical baseline is to measure your top landing pages, record transfer size and key performance metrics, then repeat after optimizations.

## Practices that reduce page impact

1. Serve static files from a CDN: Cache HTML, CSS, JS, and images close to users.
2. Reduce JavaScript: Ship only the client side code needed for the page.
3. Optimize media: Compress images, use modern formats where appropriate, and size assets correctly.
4. Set cache headers: Long cache lifetimes reduce repeated transfers.
5. Choose hosting carefully: Data center energy sourcing affects footprint.
6. Keep content durable: Plain Markdown in Git reduces rebuild and migration waste over time.

## Trade offs to keep in mind

Static architecture is not a complete sustainability strategy. A static site with large images, autoplay video, heavy third-party scripts, or poor caching can have a larger footprint than a carefully optimized dynamic site. The useful question is not "static or dynamic?" but "how much work and data does each page view require?"

For related architecture guidance, see [Static Sites vs. Dynamic Sites](/blog/static-vs-dynamic/) and [Why LightCMS](/blog/why-this/).
