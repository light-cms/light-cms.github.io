---
title: 'Zine: Der statische Site-Generator'
description: 'Was Zine ist: ein schneller, junger statischer Seitengenerator in Zig geschrieben'
date: '1111-11-11T11:11:00Z'
draft: false
keywords:
  - zine statische Site-Generator
  - zine ssg
  - zig statische Standortgeneratoren
  - zine ssg vs hugo
  - schnellste ssg zig
tags:
  - zine
  - zig
  - zigg
  - ssg
  - hellcms
isCJKLanguage: false
headless: false
serial: 28
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - zine
    - zig
    - statische Seiten
slug: zine
---
[Zine](https://zine-ssg.io) Ist ein neuer statischer Site-Generator Zine schnell, bewertet und erfrischend unkonventionell. Es ist ein junges Projekt, das bereits persönliche Websites und Blogs mit Leichtigkeit behandelt, und es belohnt Autoren die bereit sind, ihre eigene Art zu lernen, Dinge zu tun.

## Was Zine verschieden macht

- \*\*Geschrieben in Zig, von Grund auf. \* Keine JavaScript-Laufzeit, keine Ruby, keine Go-Bibliothek Komfortzone: der Markdown Renderer, Template-Engine und Orchestrierung sind alle eigens gebaut. Bauzeiten sind effektiv sofortig.
- **Seine eigene Template-Sprach-Skript.** Zine verwendet SuperHTML und SuperMD: und Skript-Template-System, das für das Projekt entwickelt wurde und nicht von einem Ökosystem ausgeliehen wurde.
- **Scripty**, seine Skriptebene, fügt programmierbare Logik hinzu, wo Vorlagen allein nicht ausreichen.
- \*\*Inhalt als Sammlung von Dateien und Layouts. \* Zine verwandelt Inhaltsdateien in HTML, wendet Ihre Layouts an und kopiert das Ergebnis in ein Ausgabeverzeichnis, das klassische statische Modell läuft schnell.
- **Extras erster Klasse**: Mehrsprachige Websites (i18n), Editorunterstützung und dokumentierte Deploy-Ziele: GitHub Seiten, Cloudflare Seiten, Codeberg Seiten und Quellhüttenseiten.

## Der ehrlichste Handel

Das Zine Repository sagt es deutlich: Das Projekt ist jung und noch nicht paritätisch mit populären Alternativen wie Hugo. Und weil Super Zines eigene Template-Sprache ist, gibt es eine Lernkurve: Themen und Community-Wissen sind kleiner, so dass die Unterstützung meist selbst herausfinden.

Für eine persönliche Website mit einem Blog (die genannte Komfort-Zone), Zine ist mehr als fähig, und der Autor Erfahrung ist schnell und angenehm sobald Super klickt.

## Inhalt und CMS-Kompatibilität

Zine verbraucht CommonMark Markdown nicht wie die meisten statischen Seitengeneratoren , so dass ein typischer Git-basierter CMS-Workflow nicht direkt angewendet wird.

Zine erwartet seine eigenen Inhaltsformate, einschließlich [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/) und [Ziggy](https://ziggy-lang.io/). Wenn du bereits Markdown-Inhalte hast, kann [md2smd](https://github.com/Pratyay360/md2smd) helfen, zwischen [CommonMark](https://commonmark.org/) und Zines Formate umzuwandeln.

![](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png "Zine bauen Pipeline")

Sie benötigen zwei Repositorien: eines für das Frontend und eines für den Inhalt.

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_site), das Frontend Repository
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/blogs_md), das Inhaltsverzeichnis

Löse einen Repository-Versand aus, wenn neue Inhalte in das Content-Repository verschoben werden.

## Wo es passt

- Wenn Sie etwas Alpha-versuchen.

[Teste die Vorlagen aus unserem org für weitere Informationen.](https://github.com/light-cms)
