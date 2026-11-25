+++
title = "LightCMS: Git based Publishing for Static Sites"
description = "Guides on Git based CMS workflows, static site generators, and Markdown publishing with LightCMS."
+++

[LightCMS](https://www.lightcms.me) is a content management system for static site generators. It keeps your content as Markdown in Git, where you can edit it in a browser, review changes, and publish through the CI/CD pipeline you already use.

## Ce que vous pouvez faire avec LightCMS

| Capacités               | Comment ça marche                                                                                  |
| :---------------------- | :------------------------------------------------------------------------------------------------- |
| Édition visuelle        | Write and edit Markdown in your browser.                                                           |
| Git publishing          | Save changes as commits in your repository rather than in a separate CMS database.                 |
| Review                  | Use branches, pull requests, and Git history to review changes.                                    |
| Mises à jour de lecture | Send updates through GitHub workflows with tools like [Newsy](https://github.com/light-cms/newsy). |

## Comment fonctionne la publication

1. Sign in with GitHub.
2. Choose the repository that holds your site content.
3. Write or edit a post in the browser, including any front matter your site needs.
4. Publish the change to Git.
5. Let your existing pipeline, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, build and deploy the site.

## Commencez par ces tutoriels

- [Why Git based publishing?](/blog/why-this/) covers trade offs between Git based and database based dynamic CMSs.
- [Self hosting LightCMS](/blog/selfhost/) explains how to deploy your own instance of [lightcms](https://github.com/light-cms/lightcms).
- [How Newsy works] (/blog/newsletter-automation/) décrit les flux de travail basés sur git.

## Comparaisons et architecture

- [Git CMS vs. Traditional CMS](/blog/git-cms-vs-traditional-cms/)
- [Static vs. Dynamic Sites](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Pages de Fusée nuageuse vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Top Git based CMS Platforms](/comparison/top-git-cms/)
