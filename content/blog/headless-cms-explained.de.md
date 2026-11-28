---
title: "Was ist ein Headless CMS?"
description: "Ein kopfloses CMS speichert Inhalte getrennt von der Präsentation und liefert sie über APIs oder Build-time Daten für Websites, Apps und andere Kanäle."
serial: 26
date: 2026-10-14T15:10:00Z
draft: false
tags:
  - kopffrei
  - cms
  - api
slug: headless-cms-explained
---

Ein kopfloses CMS trennt das Content-Management von der Content-Präsentation. Editoren verwalten Inhalte in einem System und Entwickler liefern diese Inhalte an eine Webseite, App oder ein anderes Frontend über eine API oder einen Build-Prozess. Der kopflose Teil bedeutet, dass das CMS die endgültige Rendering-Ebene nicht kontrolliert.

## Wie ein kopfloses CMS funktioniert

Ein traditionelles CMS kombiniert häufig den Speicher, die Bearbeitung, die Vorlagen und die Seitendarstellung in einer Anwendung. Ein kopfloses CMS konzentriert sich auf die Speicherung und Lieferung von Inhalten.

1. Editoren erstellen Inhalte: Das CMS bietet eine Administrationsschnittstelle und ein Inhaltsmodell.
2. Inhalte werden zentral gespeichert: Das CMS speichert strukturierte Inhalte in einer Datenbank oder einem Projektarchiv.
3. Frontends holen Inhalte: Eine Website, eine mobile App oder ein anderer Client holt Inhalte über eine API oder während eines Builds.
4. Die Präsentation ist getrennt: Das Frontend entscheidet, wie der Inhalt dargestellt wird.

| Modell             | Inhaltsspeicher | Lieferung                          | Typische Passform                                    |
| :----------------- | :-------------- | :--------------------------------- | :--------------------------------------------------- |
| Traditionelles CMS | Datenbank       | Von CMS Laufzeit gerendert         | Einfache Sites, die in einem System verwaltet werden |
| Kopflos API CMS    | Datenbank       | REST/GraphQL API                   | Multikanal-Inhalte, Apps, komplexe Modelle           |
| Git basiertes CMS  | Dateien in Git  | Erstelle Ausgabe/statische Dateien | Statische Websites, docs, redaktionelle Workflows    |

## Vorteile und Kompromisse

Headless CMS-Plattformen sind nützlich, wenn der gleiche Inhalt mehrere Frontends erreichen muss oder wenn Frontend-Teams die volle Kontrolle über das Rendering haben wollen. Sie können auch operative Komplexität einführen: Sie verwalten einen Content-Service, API-Schema, Frontend-Integration und Deployment-Pipeline.

Gewöhnliche Kompromisse beinhalten:

- Flexibilität vs. Komplexität: Sie gewinnen Frontend-Freiheit, aber Sie bauen mehr des Lieferstapels.
- Strukturierte Inhalte vs. Schreibfluss: Strukturierte Modelle sind mächtig, aber sie fühlen sich starr für Langform-Schreiben.
- Hersteller/API-Abhängigkeit: Gehostete Plattformen können Migrationsarbeit erstellen, wenn Ihr Content-Modell oder Ihre API proprietär sind.

## Wo Git basierte CMS-Tools passen

Ein Git-basiertes CMS kann Headless-Stil liefern, wenn Inhalte als Dateien gespeichert und von einem statischen Site-Generator oder Build-Prozess konsumiert werden. Der Hauptunterschied ist die Speicherung: Inhalte leben in einem Git-Repository statt einer verwalteten Datenbank-API.

Dieses Modell funktioniert gut für Blogs, Dokumentationen und Marketingseiten, auf denen die Übertragbarkeit von Inhalten und die Git-Geschichte von Bedeutung sind. Für Anwendungen mit mehreren Kanälen mit komplexen Beziehungen und Echtzeitlieferungen ist ein API-erstes kopfloses CMS vielleicht besser geeignet.

Für einen direkten Vergleich siehe [Headless CMS vs. Git based CMS](/blog/headless-vs-Git based-cms/) und [Was ist ein Git basiertes CMS?](/blog/Git based-cms-explained/).
