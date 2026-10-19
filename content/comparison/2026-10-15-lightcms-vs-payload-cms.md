---
title: "LightCMS vs Payload CMS: Files in Git vs a Database-First Headless CMS"
description: "Payload CMS is a powerful headless CMS built on a database; LightCMS writes static Markdown into your repository. Two content architectures, two very different use cases."
serial: 42
date: 2026-10-15T20:10:16.452Z
draft: false
keywords:
  - lightcms vs payload
  - payload cms alternatives
  - headless cms vs git based cms
  - cms without database
  - static site cms
preview: /og-image.png
taxonomies:
  tags:
    - lightcms
    - payload
    - cms
    - comparison
    - headless
---

This comparison starts with an admission: **[Payload CMS](https://payloadcms.com) and LightCMS are not competing for the same job.** Payload is a serious, TypeScript-native headless CMS with a database, an admin panel, access control, and API endpoints. LightCMS is a Git-backed writing workspace that commits Markdown to your repository.

Knowing which architecture your project actually needs is more useful than a feature matrix, so that is where this starts.

---

## The Architectural Split

**Database-first (Payload).** Content lives in structured records (MongoDB or Postgres) behind an admin panel, served through REST or GraphQL. Pages are assembled at request time, or fetched into a framework at build time. Relations, drafts, versions, and access control are first-class because the data model is first-class.

**File-first (LightCMS).** Content lives as Markdown files with YAML front matter in your repository. Your static site generator reads them at build time and emits HTML to a CDN. There is no runtime, no query layer, and no content API, because the site does not need one.

The consequences are structural:

| Concern | Payload CMS | LightCMS |
| :--- | :--- | :--- |
| **Storage** | Postgres or MongoDB | Your Git repository |
| **Serving** | Node.js server + database | Static files on a CDN |
| **Scaling cost** | Scales with runtime + DB load | Scales with CDN pricing (near zero) |
| **Security surface** | API, auth, DB, dependencies | None at runtime |
| **Versioning** | Document versions in the DB | Git history, diffs, revert, blame |
| **Portability** | Export and convert | Clone the repository |
| **Editing** | Polished admin panel | TipTap document editor |
| **Extras** | Hooks, jobs, blocks, field-level control | AI copilot, voice-to-text, newsletters |

---

## When Payload Is the Right Answer

Choose Payload when your project is an *application* rather than a publication:

- Content has **relationships**: products to variants, authors to books, episodes to seasons.
- You need a **content API** consumed by something other than a website: a mobile app, an IoT display, a personalization engine.
- **Roles and permissions** must be enforced per field and per operation.
- Content changes must appear **instantly without a rebuild**, or the admin needs live workflows, approvals, and localization.
- You want the content model and admin UI defined in TypeScript alongside your application code.

For those requirements, a file-based tool is the wrong shape, and no amount of editor polish changes that.

## When LightCMS Is the Right Answer

Choose LightCMS when your project is a *site that publishes*:

- A blog, docs site, changelog, portfolio, or marketing pages built on Astro, Hugo, Zola, Eleventy, or similar.
- The content is **documents**, not relational records.
- You want **zero runtime**: no server to patch, no database to back up, no per-request compute.
- Contributors should publish **without a developer**, while content stays in a repository you own.
- Longevity matters: in ten years, plain Markdown files still open in any text editor, while a database dump needs the exact schema that produced it.

This is the same reasoning behind [static vs dynamic sites](/blog/static-vs-dynamic/), applied to where the content itself lives.

---

## The Cost Difference Nobody Prices In

Database-first architectures accumulate operational cost: the hosting tier that keeps a Node process warm, the managed database, the backups, the security patches, the monitoring, the outage at 3am.

Static-plus-CDN output accumulates none of it. A build runs on push, the output is cacheable forever, and traffic spikes cost approximately nothing. For a publication, where traffic is spiky and the content is mostly written rather than queried, that is a structurally cheaper shape. See [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/) and the wider [hosting comparison](/misc/top-static-site-hosting/) for what that looks like in practice.

---

## The Counter-Argument, Fairly Stated

File-based content has real limits: no joins, awkward partial updates, rebuilds to reflect changes, and coarser collaboration when many editors touch the same files. If two hundred editors publish concurrently across thirty content types, Git will feel like the wrong database, because it is.

LightCMS's answer is scope: it is built for publications, not for platforms. If you recognize your project in the Payload column above, use Payload. If you recognize it in the LightCMS column, a database is overhead you are paying for nothing.

---

## Frequently Asked Questions

### Is LightCMS a headless CMS?

Not in the usual sense. There is no content API to query: the output is static HTML generated by your SSG. LightCMS is the authoring layer in front of that build.

### Can Payload build a static site?

Yes. Payload can be used as a source that renders static output, but it still requires the server and database to exist. The runtime cost does not disappear.

### Which is better for SEO?

Both can produce excellent SEO. Static output tends to help: fast, cacheable pages with no render-blocking server work.

### Can I migrate from Payload to LightCMS?

You can export Payload content to Markdown and commit it. The work is in flattening relational structure into documents, since the two models express content differently.

### Does LightCMS handle versions and drafts?

Yes, via Git. Drafts are `draft: true` in front matter, history is commit history, and rollback is a revert.

---

More comparisons: [LightCMS vs Pages CMS](/comparison/lightcms-vs-pagescms), [LightCMS vs Decap CMS](/comparison/lightcms-vs-decap-cms), [headless CMS explained](/blog/headless-cms-explained/), and [Git-backed CMS vs traditional CMS](/blog/git-cms-vs-traditional-cms/).
