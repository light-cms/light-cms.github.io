+++
title = "LightCMS: Git basiertes Publishing für statische Sites"
description = "Anleitungen zu Git basierten CMS-Workflows, statischen Site-Generatoren und Markdown Publishing mit LightCMS ."
+++

[LightCMS](https://www.lightcms.me) ist ein Content Management System für statische Site-Generatoren. Es hält Ihre Inhalte als Markdown in Git, wo Sie sie in einem Browser bearbeiten können, Änderungen überprüfen und über die bereits verwendete CI/CD-Pipeline veröffentlichen.

## Was Sie mit LightCMS machen können

| Kapazität            | So funktioniert es                                                                                    |
| :------------------- | :---------------------------------------------------------------------------------------------------- |
| Visuelle Bearbeitung | Schreiben und bearbeiten Sie Markdown in Ihrem Browser.                                               |
| Git Veröffentlichung | Speichern Sie Änderungen als Commits in Ihrem Projektarchiv anstatt in einer separaten CMS-Datenbank. |
| Überprüfen           | Verwenden Sie Branches, Pull-Requests und Git History um Änderungen zu überprüfen.                    |
| Lese-Updates         | Sende Updates über GitHub Workflows mit Werkzeugen wie [Newsy](https://github.com/light-cms/newsy).   |

## Wie Publishing funktioniert

1. Mit GitHub anmelden.
2. Wählen Sie das Repository aus, das Ihre Inhalte enthält.
3. Schreiben Sie oder bearbeiten Sie einen Beitrag im Browser, einschließlich jeder Frontmatter Ihrer Website.
4. Veröffentlichen Sie die Änderung zu Git.
5. Lassen Sie Ihre bestehende Pipeline wie GitHub Actions, Cloudflare Seiten, Vercel, oder Netlify, bauen und verteilen Sie die Website.

## Beginnen Sie mit diesen Anleitungen

- [Warum Git based publishing?](/blog/why-this/) deckt Handelsabschlüsse zwischen Git basierten und datenbankbasierten dynamischen CMS ab.
- [Self hosting LightCMS](/blog/selfhost/) erklärt, wie Sie Ihre eigene Instanz von [lightcms](https://github.com/light-cms/lightcms).
- [Wie Newsy funktioniert](/blog/newsletter-automation/) beschreibt git basierte Workflows.

## Vergleiche und Architektur

- [Git CMS vs. Traditionelles CMS](/blog/git-cms-vs-traditional-cms/)
- [Statische vs. Dynamische Sites](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Cloudflare Seiten vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Top Git basierte CMS-Plattformen](/comparison/top-git-cms/)
