---
title: "What Is the Jamstack?"
description: "Jamstack is a web architecture that serves prebuilt markup, uses APIs for dynamic capabilities, and adds JavaScript for interactivity where needed."
serial: 20
date: 2026-10-14T14:10:00Z
draft: false
keywords:
  - what is jamstack
  - jamstack explained
  - jamstack vs traditional
  - jamstack 2026
  - headless architecture

taxonomies:
  tags:
    - jamstack
    - architecture
    - static-sites
    - api
---

Jamstack is a web architecture that combines prebuilt markup, APIs, and JavaScript. Instead of rendering every page from an application server on each request, a Jamstack site serves prebuilt files from a CDN and uses APIs or client-side JavaScript for dynamic features.

## The three Jamstack components

| Component | Role | Example |
| :--- | :--- | :--- |
| **Markup** | Prebuilt HTML generated during a build | Static site generator output |
| **APIs** | Dynamic capabilities outside the page render | Forms, search, payments, auth |
| **JavaScript** | Client-side interactivity | Search UI, comments, personalization |

The architecture is not the same as "no JavaScript" or "no dynamic behavior." It means the default delivery path is prebuilt and cached, while dynamic behavior is added deliberately.

## Why teams use Jamstack

Jamstack sites can be fast, cacheable, and operationally simple for content-heavy projects. They also fit well with Git-based workflows: content changes trigger builds, and deployments produce immutable assets. [VERIFY: support performance, security, or cost claims with current data before publishing.]

The trade-off is complexity at the edges. Authentication, previews, personalization, and real-time data often require third-party services, serverless functions, or hybrid rendering.

## Jamstack in modern practice

Modern frameworks blur the line between static and dynamic. Astro, Next.js, SvelteKit, and others can prerender some routes and render others dynamically. [VERIFY: confirm current framework capabilities before naming specific rendering modes.] That makes "Jamstack" less of a strict rule and more of a useful default: prebuild what you can, use dynamic services where needed.

For related reading, see [Static vs. Dynamic Sites](/blog/static-vs-dynamic/) and [What Is a Static Site Generator?](/blog/what-is-a-static-site-generator/).
