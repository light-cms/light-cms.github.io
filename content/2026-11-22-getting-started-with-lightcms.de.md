---
title: Erste Schritte mit LightCMS
description: Verbinden Sie ein GitHub Repository mit LightCMS und bearbeiten Sie Markdown Inhalte in einem Browser und veröffentlichen Sie über Ihren bestehenden Git basierten Bereitstellungs-Workflow.
slug: getting-started-with-lightcms
date: 2026-11-22T11:47:03.315Z
tags:
  - hellcms
  - git
  - github
  - statische Seiten
draft: falsch
---

[LightCMS](https://lightcms.me) is a CMS for static sites. Edit Markdown in your browser and commit it to GitHub. Your existing build and deployment pipeline takes it from there.

## Bevor Sie beginnen

Sie brauchen:

- Ein GitHub Repository mit einer statischen Seite, die Markdown Inhalt verwendet.
- Eine Deployment-Pipeline wie GitHub Actions, Cloudflare Pages, Netlify oder Vercel.
- Repository-Zugriff, damit LightCMS Dateien lesen und übertragen kann.

## Schritte einrichten

1. Sign in with a provider LightCMS supports.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choose where your posts, pages, and assets live.
4. Create or edit a post, including the front matter your site generator needs.
5. Publish the change, then check that your CI/CD pipeline builds and deploys the site.

## Was nach dem Setup überprüft werden soll

| Prüfen             | Erwartetes Ergebnis                                                     |
|:------------------ |:----------------------------------------------------------------------- |
| Inhaltspfad        | LightCMS liest und schreibt die richtigen Markdown-Dateien              |
| Front Materie      | Erforderliche Felder stimmen mit Ihrem SSG-Theme/Ihren Vorlagen überein |
| Assets             | Bilder hochladen in das erwartete static/media Verzeichnis              |
| Pipeline verteilen | Ein Commit löst eine erfolgreiche Site-Erstellung aus                   |
| Entwurfsverhalten  | Entwürfe von Posts verhalten sich wie erwartet in Ihrem SSG             |

## Nächste Schritte

- [Warum LightCMS existiert](/blog/why-this/)
- [Beginnen Sie mit einem LightCMS Template](/blog/start-with-a-lightcms-template/)
- [Selbst-Hosting LightCMS](/blog/selfhost/)
- [Konfigurieren Ihres Repositories und CI/CD](/blog/configuring-your-repository-cicd/)
