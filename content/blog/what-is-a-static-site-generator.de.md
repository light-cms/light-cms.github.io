---
title: "Was ist ein statischer Site-Generator?"
description: "Ein statischer Site-Generator kompiliert Inhalte und Vorlagen in statische HTML-, CSS- und JavaScript-Dateien vor dem Bereitstellen."
date: "2026-11-16T08:58:17.908Z"
draft: false
tags:
  - was ist ein statischer Seitengenerator
  - statische Site-Generator
  - ssg erklärt
  - wie statische Seiten funktionieren
  - vor gerenderte html
slug: what-is-a-static-site-generator
---

Ein statischer Site-Generator (SSG) kompiliert Content-Dateien, Vorlagen und Assets in statischen HTML, CSS und JavaScript, bevor sie freigegeben werden. Anstatt jede Seite auf jeder Anfrage zu rendern, erzeugt der Erstellungsschritt Dateien, die ein CDN oder Webserver direkt liefern kann.

## Wie ein statischer Seitengenerator funktioniert

```text
Inhalt (Markdown + Front-Materie)
Vorlagen und Komponenten
Assets und Konfiguration
        <unk>
        <unk>
   SSG Build
        <unk>
        <unk>
 public/ or dist/
        <unk>
        <unk> 
 <unk>
   CDN / statischer Host
```

Ein typisches Bauen erledigt vier Dinge:

1. Liest Inhalt: Parses Markdown und Front-matter Metadaten wie Titel, Datum, Tags und Entwurfsstatus.
2. Verwendet Vorlagen: Karteninhalte für Layouts für Seiten, Listen, Taxonomien und Feeds.
3. Erzeugt Ausgabe: Schreibt HTML-Seiten, RSS-Feeds, Sitemaps und Suchindizes.
4. Kopiert Assets: Verschiebt Bilder, Schriftarten und statische Dateien in das Ausgabeverzeichnis.

## Vorteile und Kompromisse

| Nutzen                       | Warum es wichtig ist                                                             | Abschlag                                                            |
| :--------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| Schnelle Lieferung           | Vorkompilierte Dateien können aus Kantencaches ausgeliefert werden               | Build Schritt erforderlich bevor Änderungen live werden             |
| Kleinere Laufzeit-Oberfläche | Keine App-Laufzeit pro Anforderung oder Datenbank für Inhaltsseiten erforderlich | Dynamische Funktionen benötigen APIs oder Client-seitige JavaScript |
| Portabilität                 | Inhalt lebt oft als einfache Markdown-Dateien                                    | Template und Plugin Ökosysteme variieren je nach Generator          |
| Versionskontrolle passen     | Inhalt und Code können in Git leben                                              | Editorial Workflows benötigen möglicherweise eine CMS-Ebene         |

Statische Site-Generatoren funktionieren gut für Blogs, Dokumentationen, Marketing-Sites und Portfolios. Sie sind weniger geeignet, wenn jede Anfrage personalisierte serverseitige Rendering oder Echtzeit-Datenbankabfragen benötigt.

## Häufige statische Site-Generatoren

Beliebte SSGs sind Astro, Hugo, Zola, Eleventy, Jekyl und SvelteKit im statischen Modus. Für einen Vergleich siehe [Beste statische Site-Generatoren 2026](/blog/best-static-site-generators/).

## Wo ein Git basiertes CMS passt

Ein SSG behandelt Rendering. Ein Git basiertes CMS verarbeitet das Autorenmanagement, indem es Redakteuren eine Browserschnittstelle gibt, die Markdown in das Projektarchiv überträgt. Diese Kombination hält die Auslieferungsarchitektur statisch und macht die Bearbeitung von Inhalten für Nicht-Entwickler zugänglich. Siehe [Was ist ein Git-basiertes CMS?](/blog/Git based-cms-explained/).
