---
title: Static Sites and carbon emission building a Greener Web
description: >-
  Explore how static sites and CDN caching can reduce the energy demands of
  serving web pages, how to estimate your site’s carbon footprint, and what a
  greener web could look like.
serial: 16
date: '2026-10-14T13:30:00.000Z'
draft: false
tags:
  - low carbon website
  - static site co2
  - greener web
  - sustainable web design
  - website carbon footprint
preview: /og-image.webp
slug: greener-web-static-sites
---
Every page view costs energy. Somewhere a server wakes, a cache misses, a database query runs, and electricity measured in grams of CO2 gets spent delivering a paragraph of text. Commonly cited estimates put the web at roughly 2–4% of global electricity emissions, comparable to the aviation industry. The architecture of your site determines where on that spectrum you land, and **Static sites sit at the clean end**.

Dynamic sites do work every time someone visits. They run code, talk to a database, and build the page. The servers have to stay on all the time, even when nobody is there.

Static sites do that work just once, when they are built. The finished HTML files are put on CDN edge servers around the world and served from cache.

- No work for each visit: Serving a stored file uses far less energy than creating a page on the spot.  
- No always‑on database: Databases and app servers use power all the time; static sites don’t need them.  
- Already cache‑friendly: If a request hits an edge cache, only a small network hop is needed.  
- Small files: HTML made from markdown is naturally small, and no extra JavaScript runtime is sent unless you add it.

When you multiply these savings by every visitor, every month, for the whole life of the site, the energy difference is big.

## The Ripple Effect: Durability Is Sustainability

Static sites also age well. A Hugo or Astro site built in 2026 can still be rebuilt and served in 2036: the content is plain Markdown, the entire toolchain is open source, and the output is a folder of files. Sites that get abandoned because their platform shut down or their WordPress install became unmaintainable force rebuilds: rewriting the same content on new infrastructure is its own kind of waste.

Owning your content as Markdown in Git is the durable, low-waste option.

### How to Measure Your Website's Carbon

You cannot improve what you do not measure:

- [**Website Carbon Calculator**](https://www.websitecarbon.com/): Estimates the grams of Carbon emitted per page view and compares your site to others.
- [**Ecograder**](https://ecograder.com/) Gives a comparable estimate, alongside performance and accessibility scoring.
- Real-user metrics matter too: Largest Contentful Paint and total bytes transferred correlate directly with energy per view.

The [LightCMS](https://lightcms.me) Site displays a live carbon rating in its footer, using the same measurement approach this guide recommends.

## How to Build a Greener Web

1. **Serve statically from a CDN**: The biggest lever for content sites.
2. **Choose green hosting**: Providers that power data centers with renewable energy (several major providers now publish their energy sourcing).
3. **Ship less JavaScript**: Every kilobyte is parsed, executed, and paid for on the visitor's battery.
4. **Compress and cache images**: media is usually the heaviest part of a page, so serve modern formats with long cache lifetimes.
5. **Keep content durable**: Plain Markdown and open formats mean a site never needs a rebuild from scratch.
6. **Publish deliberately**: A small, high-value site that people return to beats a sprawling one nobody reads.

## Where [LightCMS](https://lightcms.me) Fits

[LightCMS](https://lightcms.me) Follows these principles: it commits your content as Markdown to your own repository, a static site generator publishes it, and your host's edge network serves the result as cached files. The CMS runs only while you write. No production database serves readers; the CDN does.

- [Static sites vs dynamic sites](/blog/static-vs-dynamic/) Covers the architecture in depth.
- [Top static site hosting platforms](/misc/top-static-site-hosting/) Compares where to host sustainably.
- [Why LightCMS](/blog/why-this/) Explains the philosophy behind durable, lightweight publishing.

---

## Frequently Asked Questions

### How much CO2 does a typical website emit?

Estimates vary by method, but a typical page view emits anywhere from a fraction of a gram to about a gram of CO2; heavy, poorly cached pages emit considerably more. Static, cached pages sit at the low end.

### Does green hosting matter?

Yes. Data-center energy is the dominant factor in a site's footprint; hosting on renewable-powered infrastructure reduces it substantially.

### Is a static blog eco friendly?

Among the greenest options available: cached files served from an edge network, no always-on database, and content that remains readable and rebuildable for decades.

### What is sustainable web design?

A practice of minimizing the energy cost of the web: lean pages, efficient code, renewable hosting, durable content, and measured impact. Static architecture is the foundation.
