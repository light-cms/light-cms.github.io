---
title: "Warum LightCMS existiert"
description: "Warum LightCMS Git basiertes Markdown und einen visuellen Editor verwendet, um die statische Veröffentlichung zu vereinfachen, ohne auf die Versionskontrolle zu verzichten."
serial: 2
date: 2026-09-18T00:41:00Z
draft: false
tags:
  - cms
  - philosophie
  - hellcms
---

Wir bauen [LightCMS](https://lightcms.me) weil die Veröffentlichung auf einer statischen Seite nicht von jedem Autor verlangt werden sollte, einem Entwickler-Workflow zu folgen. Sie können in einen Browser-Editor schreiben, während Ihr Inhalt in Git als Markdown-Dateien bleibt.

## Das Problem mit statischen Publishing-Workflows

Statische Site-Generatoren machen es einfach, eine Site zu bauen und bereitzustellen. Schreiben für einen kann immer noch bedeuten, ein Repository zu klonen, Markdown zu editieren, Frontmatter zu verwalten, Committing zu betreiben und auf CI/CD zu warten.

Das ist ein vertrautes Gebiet für Entwickler. Für Autoren und Redakteure, kann es in den Weg der Veröffentlichung.

## Warum Git-basierte Inhalte immer noch wichtig sind

Die Beibehaltung von Inhalten in Git gibt Ihnen ein paar praktische Dinge:

- Ein Verlauf der Änderungen, die Sie überprüfen oder vergleichen können.
- Markdown Dateien können zwischen Generatoren, Hosts und Editoren verschoben werden.
- Ein direkter Pfad in den Git-basierten Build- und Deployment-Workflows, den viele statische Standorte bereits nutzen.
- Eine Kopie Ihrer Inhalte in Ihrem eigenen Projektarchiv statt einer proprietären CMS-Datenbank.

## Was LightCMS aufgibt

LightCMS basiert auf dem Publishing von Git, nicht auf den Funktionen der Echtzeit-App. Das funktioniert gut für Blogs, Dokumentationen und Marketingseiten. Wenn Sie eine Personalisierung, komplexe Beziehungen zwischen Inhalten oder Datenbankabfragen zur Laufzeit benötigen, kann Ihnen eine andere Art von CMS besser passen.

Sie schreiben in einem visuellen Editor, während Markdown Dateien und Git History die Quelle der Wahrheit bleiben. Weitere Informationen zum Produkt finden Sie unter [Was ist LightCMS?](/blog/what-is-lightcms/).
