---
title: "Was ist Frontseite in Markdown?"
description: "Frontmatter sind YAML, TOML oder JSON-Metadaten am Anfang einer Markdown-Datei, die statische Site-Generatoren für Titel verwenden Daten, Tags und Vorlagen."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false

tags:
  - markdown
  - erklärer
  - statische Seiten
  - cms
---

Frontmatter ist ein Metadatenblock am oberen Rand einer Content-Datei, der die Seite zu einem statischen Site-Generator beschreibt. Sie enthält in der Regel Felder wie Titel, Beschreibung, Datum, Tags, Entwurfsstatus und Template-Informationen.

## Gewöhnliche Frontmatter Formate

Die meisten statischen Seitengeneratoren unterstützen YAML Frontmatter und einige unterstützen auch TOML oder JSON.

```md
---
Titel: "Notizen über statische Seitengeneratoren"
Beschreibung: "Eine kurze Zusammenfassung in Metadaten und Vorschauen.
Datum: 2026-10-16T09:00:00Z
Entwurf: false
tags:
 - static-sites
 - Werkzeug
---
```

Die Metadaten befinden sich zwischen Trennzeichen am oberen Rand der Datei. Der Markdown Körper folgt darunter.

## Welche Frontmasse kontrolliert

| Feld           | Gewöhnliche Verwendung                        | Baue Einschlag                                                |
| :------------- | :-------------------------------------------- | :------------------------------------------------------------ |
| `title`        | Seitentitel und Überschrift                   | Fehlende Titel können Vorlagen oder Angebote beschädigen      |
| `Datum`        | Sortierung und Veröffentlichung von Metadaten | Ungültige Daten können Build-Fehler verursachen               |
| "Entwurf"      | Bundesland                                    | Entwürfe können von Produktions-Builds ausgeschlossen werden  |
| `tag`          | Taxonomie-Seiten und Filter                   | Ungültige Struktur kann die Taxonomiegenerierung unterbrechen |
| "slug"         | URL-Pfad überschreiben                        | Kann kanonische URLs ändern                                   |
| `Beschreibung` | Metadaten und Vorschauen                      | Beeinflusst Snippets und soziale Vorschau                     |

## Häufige Fehler

Frontmatter Fehler sind eine häufige Ursache für statische Website-Build-Fehler. Übliche Probleme beinhalten ungültige YAML-Einrückung, falsche Datumsformate, fehlende Anführungszeichen um Sonderzeichen und inkonsistente Feldnamen für alle Dateien.

Ein Git basiertes CMS kann diese Fehler reduzieren, indem Frontware als Formularfelder aufgedeckt und vor dem Speichern Werte validiert werden. Auch mit einem visuellen Editor behalten Sie das Frontmatter Format einheitlich in Ihrem Content Repository.

Für verwandtes Lesen siehe [Was ist Markdown?](/blog/what-is-markdown/) und [The LightCMS Editor Tour](/blog/lightcms-editor-tour/).
