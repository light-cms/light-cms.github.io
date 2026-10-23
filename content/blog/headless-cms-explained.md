---
title: What Is a Headless CMS? (And Why Git-Based Ones Matter)
description: "Headless CMS explained: how decoupled content delivery works, where traditional headless platforms fall short, and why developers favor Git-backed CMS tools."
serial: 26
date: 2026-10-14T15:10:00Z
draft: false
keywords:
  - what is headless cms
  - headless cms explained
  - headless cms vs traditional
  - git based headless cms
  - headless cms examples
preview: /og-image.png
taxonomies:
  tags:
    - cms
    - headless
    - api
    - jamstack
---

A **headless CMS** is a content system with no front end of its own: it stores and structures content, then delivers it through an API to any consumer (a website, an app, a kiosk, a newsletter). The "head" (the website) is severed from the "body" (the content store). It is how most modern content stacks are built. It is also where an important distinction gets lost: **not all headless CMSs store content the same way**.

---

### How a Traditional CMS Works

WordPress renders pages itself: content in MySQL, templates in PHP, output assembled per request on the same server. Presentation and content are welded together. That is powerful, but the site's performance, security, and uptime all ride on that runtime.

### How a Headless CMS Works

A headless platform decouples the two:

1. Editors write in the platform's admin interface.
2. Content sits as structured data in the provider's database.
3. Frontends fetch it via API (REST or GraphQL) at build time or runtime.
4. The same content can feed a website, a mobile app, and an IoT screen simultaneously.

This is the model behind Contentful, Sanity, Strapi, and Prismic. For multi-channel, application-heavy organizations, it is the right model.

### The Trade-offs Developers Discovered

Headless solved WordPress's problems but introduced new ones:

- **Content lock-in**: your articles live in a proprietary database behind an API. Leaving means exporting and reformatting everything.
- **Per-seat pricing**: costs scale with editors, not value.
- **A second infrastructure**: the CMS becomes a SaaS dependency between your writers and your site, with outages, plan limits, and schema migrations of its own.
- **Build-time fetching complexity**: the frontend must model content as API data rather than files.

### The Git-backed Headless CMS

A Git-backed CMS is headless in delivery: any static site generator can consume its output. But it stores content where developers want it: as Markdown files with YAML front matter in your own repository.

- No lock-in: the content is a folder of plain-text files you own.
- No per-seat SaaS bill: self-hosted and open source options like [LightCMS](/getting-started/), [Pages CMS](/comparison/pagescms/), and [Decap CMS](/comparison/netlifycms/).
- The publishing pipeline is the same everywhere: commit → CI/CD → CDN.
- Version history, review, and rollback, because it is Git.

For the full field, see [Git-backed CMS platforms compared](/comparison/top-git-cms/); for the architecture it feeds, [what is the Jamstack](/blog/what-is-jamstack/).

---

### Frequently Asked Questions

#### Is a headless CMS better than WordPress?

For new projects, usually. Decoupled delivery is faster, safer, and more flexible. The remaining question is where the content itself is stored.

#### What is the best headless CMS for developers?

Depends on the trade-off you want: hosted API platforms (Contentful, Sanity) for multi-channel SaaS; Git-backed CMSs (LightCMS, Pages CMS, TinaCMS) for ownership and zero lock-in.

#### Does a headless CMS need an API?

A hosted headless CMS serves content via API. A Git-backed one serves content as static files from your CDN, often the fastest "API" there is, since it's just a cached HTTP request.

#### Can I move from a hosted headless CMS to a Git-backed one?

Yes. Export to Markdown, commit to a repository, and point your generator at the files. The migration typically removes a monthly bill.
