---
title: Static Sites and carbon emission building a Greener Web
description: >-
  Explore how static sites and CDN caching can reduce the energy demands of serving web pages, how to estimate your site’s carbon footprint, and what a greener web could look like.
serial: 16
date: "2026-10-14T13:30:00.000Z"
draft: false
tags:
  - site internet à faible teneur en carbone
  - site statique co2
  - Toile verte
  - web design durable
  - Site internet de l'empreinte carbone

slug: greener-web-static-sites
---

Chaque page de vue coûte de l'énergie. Quelque part un serveur se réveille, une cache manquante, une requête de base de données s'exécute, et l'électricité mesurée en grammes de CO2 est dépensée pour produire un paragraphe de texte. Les estimations couramment citées placent le Web à environ 2 à 4 % des émissions mondiales d’électricité, comparables à l’industrie de l’aviation. The architecture of your site determines where on that spectrum you land, and **Static sites sit at the clean end**.

Dynamic sites do work every time someone visits. They run code, talk to a database, and build the page. The servers have to stay on all the time, even when nobody is there.

Static sites do that work just once, when they are built. The finished HTML files are put on CDN edge servers around the world and served from cache.

- No work for each visit: Serving a stored file uses far less energy than creating a page on the spot.
- No always‑on database: Databases and app servers use power all the time; static sites don’t need them.
- Already cache‑friendly: If a request hits an edge cache, only a small network hop is needed.
- Small files: HTML made from markdown is naturally small, and no extra JavaScript runtime is sent unless you add it.

When you multiply these savings by every visitor, every month, for the whole life of the site, the energy difference is big.

## L'effet d'ondulation: La durabilité est la durabilité

Les sites statiques vieillissent également bien. A Hugo or Astro site built in 2026 can still be rebuilt and served in 2036: the content is plain Markdown, the entire toolchain is open source, and the output is a folder of files. Les sites qui sont abandonnés parce que leur plate-forme fermée ou leur installation WordPress sont devenus des reconstructions de force non maintenables : la réécriture du même contenu sur une nouvelle infrastructure est son propre type de déchets.

Posséder votre contenu en tant que Markdown in Git est l'option durable et peu coûteuse.

### Comment mesurer le carbone de votre site Web

Vous ne pouvez pas améliorer ce que vous ne mesurez pas:

- [**Website Carbon Calculator**](https://www.websitecarbon.com/): Estimates the grams of Carbon emitted per page view and compares your site to others.
- [**Ecograder**](https://ecograder.com/) Gives a comparable estimate, alongside performance and accessibility scoring.
- Les métriques de l'utilisateur réel aussi importent : la plus grande peinture de contenu et le total d'octets transférés corrélent directement avec l'énergie par vue.

The [LightCMS](https://lightcms.me) Site displays a live carbon rating in its footer, using the same measurement approach this guide recommends.

## Comment construire un Web plus vert

1. **Serve statically from a CDN**: The biggest lever for content sites.
2. **Choose green hosting**: Providers that power data centers with renewable energy (several major providers now publish their energy sourcing).
3. **Ship less JavaScript**: Every kilobyte is parsed, executed, and paid for on the visitor's battery.
4. **Compresser et mettre en cache**: les médias sont généralement la partie la plus lourde d'une page, donc servir les formats modernes avec de longues durées de cache.
5. **Keep content durable**: Plain Markdown and open formats mean a site never needs a rebuild from scratch.
6. **Publish deliberately**: A small, high-value site that people return to beats a sprawling one nobody reads.

## Où [LightCMS](https://lightcms.me) correspond

[LightCMS](https://lightcms.me) Follows these principles: it commits your content as Markdown to your own repository, a static site generator publishes it, and your host's edge network serves the result as cached files. Le CMS ne fonctionne que pendant que vous écrivez. Aucune base de données de production ne dessert les lecteurs; le CDN le fait.

- [Static sites vs dynamic sites](/blog/static-vs-dynamic/) Covers the architecture in depth.
- [Top static site hosting platforms](/misc/top-static-site-hosting/) Compares where to host sustainably.
- [Why LightCMS](/blog/why-this/) Explains the philosophy behind durable, lightweight publishing.

## Foire aux questions

**How much CO₂ does a typical website emit?**  
A page view usually releases 0.1–1 g CO₂; heavy, un‑cached pages emit more. Static, cached pages are at the low end.

**Does green hosting matter?**  
Yes. Data‑center energy dominates a site’s footprint; renewable‑powered hosting cuts emissions substantially.

**Is a static blog eco‑friendly?**  
Yes. Cached files on an edge network, no always‑on database, and long‑lasting, rebuildable content make it one of the greenest options.

**What is sustainable web by design?**  
Design that minimizes web energy use: lean pages, efficient code, renewable hosting, durable content, and measured impact. L'architecture statique est la fondation.
