---
title: Erste Schritte mit LightCMS
description: Verbinden Sie ein GitHub Repository mit LightCMS und bearbeiten Sie Markdown Inhalte in einem Browser und veröffentlichen Sie über Ihren bestehenden Git basierten Bereitstellungs-Workflow.
slug: getting-start-mit-lightcms
date: 2026-11-22T11:47:03.315Z
tags:
  - hellcms
  - git
  - github
  - statische Seiten
draft: falsch
---

[LightCMS](https://lightcms.me) ist ein CMS für statische Sites. Bearbeiten Sie Markdown in Ihrem Browser und übertragen Sie es auf GitHub. Ihre vorhandene Pipeline und Deployment-Pipeline bringt sie von dort.

## Bevor Sie beginnen

Sie brauchen:

- Ein GitHub Repository mit einer statischen Seite, die Markdown Inhalt verwendet.
- Eine Deployment-Pipeline wie GitHub Actions, Cloudflare Pages, Netlify oder Vercel.
- Repository-Zugriff, damit LightCMS Dateien lesen und übertragen kann.

## Schritte einrichten

1. Melden Sie sich mit einem Anbieter LightCMS Support an.
2. Geben Sie [LightCMS](https://lightcms.me) Zugriff auf das Repository, das Ihre Inhalte enthält.
3. Wählen Sie aus, wo Ihre Beiträge, Seiten und Assets leben.
4. Erstellen oder bearbeiten Sie einen Beitrag, einschließlich der Frontmatter Ihrer Website-Generator.
5. Veröffentlichen Sie die Änderung, überprüfen Sie dann, ob Ihre CI/CD-Pipeline gebaut und die Seite bereitstellt.

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
