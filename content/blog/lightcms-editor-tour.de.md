---
title: "LightCMS Editor Tour: Visuelles Bearbeiten mit Markdown Ausgabe"
description: "Ein praktischer Blick auf den LightCMS Editor, inklusive visueller Bearbeitung, Frontmatter Handling, Medien und den Workflows von WYSIWYG Markdown."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
tags:
  - hellcms
  - editieren
  - markdown
  - schreiben
---

Der LightCMS Editor bietet Autoren eine visuelle Bearbeitungsschnittstelle, während sie Inhalte als Markdown und Frontmatter in einem Git-Repository speichern. Das Hauptziel ist es, Formatierungsfehler zu reduzieren, ohne Inhalte aus einem dateibasierten Workflow zu entfernen.

## Was der Editor handhabt

| Editor-Aufgabe         | Was zu prüfen ist                                            | Warum es wichtig ist                                                        |
| :--------------------- | :----------------------------------------------------------- | :-------------------------------------------------------------------------- |
| Rich-Text-Formatierung | Überschriften, Listen, Links, Anführungszeichen, Code-Blöcke | Autoren sollten Markdown-Syntax nicht debuggen müssen                       |
| Front Materie          | Titel, Datum, Tags, Beschreibung, Entwurfsstatus             | Ungültige Metadaten können statische Website-Builds beschädigen             |
| Medien                 | Bild-Upload, Pfade, Alt-Text                                 | Die Behandlung von Assets verursacht oft kaputte Links in statischen Seiten |
| Strukturierte Inhalte  | Tabellen, Aufgabenlisten, Einbettungen, Mathematik           | Funktionsumfang variiert je nach Editor und SSG                             |
| Markdown output        | Reiniger, diffbarer Markdown in Git                          | Ausgabequalität wirkt sich auf die langfristige Portabilität aus            |

Ein guter WYSIWYG Markdown Editor sollte gemeinsame Schreibaufgaben erleichtern und gleichzeitig die vorhersagbare Dateiausgabe bewahren. Wenn der Editor laute Markdown erzeugt oder unerwartet Frontmatter neu schreibt, erzeugt er Reibungen für Entwickler, die Diffusorunterschiede überprüfen.

## Frontmasse und Bausicherheit

Front-Match-Fehler sind eine häufige Quelle für statische Build-Fehler. Ein form-basierter Frontend-Editor kann Fehler wie ungültige Daten, fehlende Pflichtfelder oder fehlerhafte YAML reduzieren.

Der Kompromiss ist Flexibilität. Strikte Formulare verhindern Fehler, aber sie können auch benutzerdefinierte Felder blockieren, es sei denn, der Editor erlaubt Schema oder benutzerdefinierte Schlüsselunterstützung.

## Absprachen für visuelle Bearbeitung

Visuelle Editoren sind hilfreich für Autoren, die nicht die Rohmarkdown-Syntax verwalten wollen. Sie sind weniger hilfreich, wenn ein Team genaue Kontrolle über benutzerdefinierte Shortcodes, ungewöhnliche Markdown-Erweiterungen oder Framework-spezifische Komponenten benötigt. In diesen Fällen sollte der Editor die Rohblöcke bewahren, anstatt sie neu zu schreiben.

Meine Einschätzung ist, dass ein visueller Editor für Git basiertes Publizieren wertvoll ist, wenn Markdown sauber und vorhersehbar bleibt. Wenn es zu viel versteckt oder proprietäre Leistung erzeugt, untergräbt es zunächst den Portabilitätsvorteil der Verwendung von Git.

Ähnliche Funktionen finden Sie unter [LightCMS AI Copilot](/blog/lightcms-ai-copilot/) und [Stimme zu Text Dictation in LightCMS](/blog/lightcms-voice-to-text/).
