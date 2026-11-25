---
title: "Was ist LightCMS?"
description: "LightCMS is a Git based CMS with a visual editor. Es überträgt schlicht Markdown in Ihr Projektarchiv und löst die Bereitstellung über Ihre bestehende CI/CD aus."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - hellcms
  - cms
  - git
  - markdown
---

[LightCMS](https://lightcms.me) is a content management system for publishing Markdown from Git. You write in a visual editor in your browser, and [LightCMS](https://lightcms.me) commits the Markdown file and its front matter to your repository. Your existing CI/CD pipeline can then build and deploy the site.

## Das Problem LightCMS Adressen

Static site generators can make it easy to build and deploy a site. Writing for one is less convenient if you have to edit raw Markdown, format front matter, or sort out Git conflicts by hand.

[LightCMS](https://lightcms.me) gives authors a visual editor, while keeping the content in Git. That suits teams that want Git ownership and review. It is a different choice from a database backed CMS with real time collaboration.

## Wie LightCMS Inhalte veröffentlicht

1. Sign in with GitHub.
2. Connect a repository with Markdown content. It can be a site built with Astro, Hugo, Zola, 11ty, Jekyll, or Next.js.
3. Write in the editor, which supports headings, links, tables, checklists, code blocks, and media.
4. Publish the change. [LightCMS](https://lightcms.me) formats the Markdown, updates front matter, and either commits to your branch or opens a pull request for review.
5. Your existing CI/CD workflow, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, can then build and deploy the site.

Da das Publizieren einen Standard-Git-Commit erzeugt, kann Ihre Website immer noch aus dem Projektarchiv erstellt werden, wenn Sie mit LightCMS aufhören.

## Technisches Profil

| Attribut                 | LightCMS Implementierung                                                       |
| :----------------------- | :----------------------------------------------------------------------------- |
| Speicher                 | Git Repository mit Markdown Dateien und Frontmatter                            |
| Editor-Schnittstelle     | Visual editor in your browser                                                  |
| AI-Hilfe                 | Hilfe im Editor schreiben                                                      |
| Sprachtranskription      | Sprach-Diktation im Editor                                                     |
| Abonnenten-Updates       | GitHub Ankündigung Integration via [Newsy](https://github.com/light-cms/newsy) |
| Lizenzierung und Hosting | Open Source und selbst hostable                                                |
| Portabilität             | Inhalt bleibt in Repository-Dateien, die Sie steuern                           |

## Wenn LightCMS nicht die richtige Passform ist

LightCMS fits sites that keep their content in Git and already use CI/CD to publish. Consider a different tool if:

- You need relational queries, user permissions, or a content API at runtime. A database backed headless CMS such as [Payload](/comparison/lightcms-vs-payload-cms) or Strapi may fit better.
- You want one service to host the public site. LightCMS does not host it. Cloudflare Pages, Vercel, Netlify, or S3 can serve the built site.
- You need a tool to render your HTML templates. LightCMS does not do that; your static site generator, such as Hugo, Astro, or Zola, handles the build.

If you need Git based content management and a visual editor, the next step is to connect a test repository and confirm that LightCMS writes front matter and Markdown in the format your static site generator expects.
