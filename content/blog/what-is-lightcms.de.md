---
title: "Was ist LightCMS?"
description: "LightCMS ist ein Git basiertes CMS mit einem visuellen Editor. Es überträgt schlicht Markdown in Ihr Projektarchiv und löst die Bereitstellung über Ihre bestehende CI/CD aus."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - hellcms
  - cms
  - git
  - markdown
---

[LightCMS](https://lightcms.me) ist ein Content-Management-System, um Markdown von Git zu veröffentlichen. Du schreibst in einem visuellen Editor in deinem Browser und [LightCMS](https://lightcms.me) überträgt die Markdown-Datei und die vorderen Materie in dein Projektarchiv. Ihre bestehende CI/CD-Pipeline kann dann die Website bauen und bereitstellen.

## Das Problem LightCMS Adressen

Statische Site-Generatoren können es einfach machen, eine Site zu erstellen und bereitzustellen. Das Schreiben für einen ist weniger praktisch, wenn Sie Rohmarkdown bearbeiten müssen, Frontmatter formatieren oder Git-Konflikte manuell aufräumen müssen.

[LightCMS](https://lightcms.me) gibt Autoren einen visuellen Editor, während sie den Inhalt in Git behalten. Das passt Teams, die Git Ownership und Überprüfung wünschen. Es ist eine andere Wahl von einem datenbankgestützten CMS mit Echtzeit-Zusammenarbeit.

## Wie LightCMS Inhalte veröffentlicht

1. Mit GitHub anmelden.
2. Verbinden Sie ein Repository mit Markdown-Inhalten. Es kann ein Ort sein, der mit Astro, Hugo, Zola, 11ty, Jekyll oder Next.js gebaut wurde.
3. Schreiben Sie im Editor, der Überschriften, Links, Tabellen, Checklisten, Code-Blöcke und Medien unterstützt.
4. Veröffentlichen Sie die Änderung. [LightCMS](https://lightcms.me) formatiert die Markdown Formatierung, aktualisiert Frontmatter und überträgt entweder deinen Zweig oder öffnet einen Pull-Request zur Überprüfung.
5. Ihr bestehender CI/CD-Workflow, wie GitHub Aktionen, Cloudflare Seiten, Vercel, oder Netlify, kann dann die Seite erstellen und verteilen.

Da das Publizieren einen Standard-Git-Commit erzeugt, kann Ihre Website immer noch aus dem Projektarchiv erstellt werden, wenn Sie mit LightCMS aufhören.

## Technisches Profil

| Attribut                 | LightCMS Implementierung                                                       |
| :----------------------- | :----------------------------------------------------------------------------- |
| Speicher                 | Git Repository mit Markdown Dateien und Frontmatter                            |
| Editor-Schnittstelle     | Visueller Editor in Ihrem Browser                                              |
| AI-Hilfe                 | Hilfe im Editor schreiben                                                      |
| Sprachtranskription      | Sprach-Diktation im Editor                                                     |
| Abonnenten-Updates       | GitHub Ankündigung Integration via [Newsy](https://github.com/light-cms/newsy) |
| Lizenzierung und Hosting | Open Source und selbst hostable                                                |
| Portabilität             | Inhalt bleibt in Repository-Dateien, die Sie steuern                           |

## Wenn LightCMS nicht die richtige Passform ist

LightCMS passt zu Websites, die ihren Inhalt in Git halten und bereits CI/CD zu veröffentlichen. Betrachten Sie ein anderes Werkzeug wenn:

- Sie benötigen relationale Abfragen, Benutzerberechtigungen oder eine Content API zur Laufzeit. Ein kopfloses CMS ohne Datenbank wie [Payload](/comparison/lightcms-vs-payload-cms) oder Strapi könnte besser passen.
- Sie wollen einen Dienst zum Hosten der öffentlichen Website. LightCMS Hosts nicht. Cloudflare Pages, Vercel, Netlify oder S3 können die gebaute Website bedienen.
- Sie benötigen ein Werkzeug, um Ihre HTML-Vorlagen zu rendern. LightCMS macht das nicht; Ihr statischer Site-Generator, wie Hugo, Astro, oder Zola, kümmert sich um das Build.

Wenn Sie Git basierte Content-Management und einen visuellen Editor benötigen, der nächste Schritt ist, ein Test-Repository zu verbinden und zu bestätigen, dass LightCMS Front-Materie schreibt und Markdown in dem Format, das Ihr statischer Site-Generator erwartet.
