---
title: "What Is LightCMS?"
description: "LightCMS is a Git-based CMS with a visual editor. It commits plain Markdown to your repository and triggers deployment through your existing CI/CD."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
keywords:
  - what is lightcms
  - lightcms
  - Git based cms
  - markdown cms
  - visual editor for markdown

taxonomies:
  tags:
    - lightcms
    - cms
    - git
    - markdown
---

[LightCMS](https://lightcms.me) is a Git-based content management system that stores content as Markdown files in a Git repository. You write in a browser-based visual editor, and LightCMS commits the file and front matter directly to your repository so your existing CI/CD pipeline can build and deploy the site.

## The problem LightCMS addresses

Static site generators produce fast, secure websites, but the writing workflow can slow teams down. Editing raw Markdown in a code editor, formatting front matter by hand, and resolving Git conflicts adds friction for writers who do not work in Git every day.

LightCMS keeps content in Git while giving authors a visual editing interface. That trade-off favors Git-based ownership and review workflows over the real-time collaboration features found in database-backed CMS platforms.

## How LightCMS publishes content

1. Sign in with GitHub: Authenticate with your GitHub account. 
2. Connect a repository: Point LightCMS to a repository that contains Markdown files, such as a site built with Astro, Hugo, Zola, 11ty, Jekyll, or Next.js. 
3. Draft in the visual editor: The editor supports headings, links, tables, checklists, code blocks, and media.
4. Publish changes: LightCMS formats the Markdown document, updates front matter, and commits to your branch or opens a pull request for review.
5. Deploy automatically: Your existing CI/CD workflow, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, detects the commit, builds the site, and deploys it.

Because publishing creates a standard Git commit, your site can still build from the repository if you stop using LightCMS.

## Technical profile

| Attribute | LightCMS implementation |
| :--- | :--- |
| Storage | Git repository with Markdown files and front matter |
| Editor interface | Browser-based visual editor |
| AI assistance | In-editor writing assistance |
| Voice transcription | In-editor voice dictation |
| Subscriber updates | GitHub announcement integration via [Newsy](https://github.com/light-cms/newsy) |
| Licensing and hosting | Open source and self-hostable |
| Portability | Content remains in repository files you control |

## When LightCMS is not the right fit

LightCMS is a good fit when your site content belongs in Git and your publishing flow already runs through CI/CD. It is a weaker fit in these cases:

- Complex relational content: If your project needs relational queries, dynamic user permissions, or a runtime content API, a database-backed headless CMS such as [Payload](/comparison/lightcms-vs-payload-cms) or Strapi may be a better fit.
- Managed web hosting: LightCMS does not host your public website. A hosting provider such as Cloudflare Pages, Vercel, Netlify, or S3 serves the built site.
- Site generation: LightCMS does not render HTML templates. Your static site generator, such as Hugo, Astro, or Zola, handles that build step.

If your team wants Git-based content ownership and a visual editor, the next step is to connect a test repository and confirm that LightCMS writes front matter and Markdown in the format your static site generator expects.
