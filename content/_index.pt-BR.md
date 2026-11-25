+++
title = "LightCMS: Git based Publishing for Static Sites"
description = "Guides on Git based CMS workflows, static site generators, and Markdown publishing with LightCMS."
+++

[LightCMS](https://www.lightcms.me) is a content management system for static site generators. It keeps your content as Markdown in Git, where you can edit it in a browser, review changes, and publish through the CI/CD pipeline you already use.

## O que você pode fazer com o LightCMS

| Funcionalidade           | Como funciona                                                                                      |
| :----------------------- | :------------------------------------------------------------------------------------------------- |
| Edição visual            | Write and edit Markdown in your browser.                                                           |
| Git publishing           | Save changes as commits in your repository rather than in a separate CMS database.                 |
| Review                   | Use branches, pull requests, and Git history to review changes.                                    |
| Atualizações de leituras | Send updates through GitHub workflows with tools like [Newsy](https://github.com/light-cms/newsy). |

## Como a publicação funciona

1. Sign in with GitHub.
2. Choose the repository that holds your site content.
3. Write or edit a post in the browser, including any front matter your site needs.
4. Publish the change to Git.
5. Let your existing pipeline, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, build and deploy the site.

## Começar com estes guias

- [Why Git based publishing?](/blog/why-this/) covers trade offs between Git based and database based dynamic CMSs.
- [Self hosting LightCMS](/blog/selfhost/) explains how to deploy your own instance of [lightcms](https://github.com/light-cms/lightcms).
- [Como funciona o News](/blog/newsletter-automation/) descreve fluxos de trabalho baseados no git.

## Comparações e arquitetura

- [Git CMS vs. CMS] (/blog/git-cms-vs-traditional-cms/)
- [Sítios Estáticos vs. Dinâmicos](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Cloudflare Pages vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Top Git based CMS Platforms](/comparison/top-git-cms/)
