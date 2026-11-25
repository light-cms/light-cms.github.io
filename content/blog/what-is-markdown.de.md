---
title: "Was ist Markdown?"
description: "Markdown is a markup format that uses simple symbols for formatting text."
date: "2026-10-14T15:00:00.000Z"
draft: false

slug: what-is-markdown
---

Markdown ist ein Klartext-Markup-Format zum Schreiben strukturierter Dokumente mit einfachen Symbolen. Es wird häufig für Dokumentation, README-Dateien, Notizen verwendet, und statische Site-Inhalte, da die Quelle als Text lesbar bleibt und in HTML konvertiert werden kann.

## Grundlegende Markdown Syntax

````md
# Überschrift 1

## Überschrift 2

Ein Absatz mit fettem und _kursiv_ Text.

- Ein Kugelelement
- Ein weiteres Kugelelement

1. Ein nummeriertes Element
2. Ein weiteres nummeriertes Element

[Link text](https://example.com)
![Alt text](/images/photo.jpg)

`inline code`

```js
console.log("hallo, web");
```
````

Verschiedene Markdown-Varianten fügen Funktionen wie Tabellen, Aufgabenlisten, Fußnoten und eingezäunte Code-Attribute hinzu. Gewöhnliche Geschmacksrichtungen sind CommonMark und GitHub Flavored Markdown.

## Warum Markdown für statische Seiten gut funktioniert

| Objekt             | Praktischer Nutzen                                                   | Abschlag                                                        |
| :----------------- | :------------------------------------------------------------------- | :-------------------------------------------------------------- |
| Einfacher Text     | Einfach zu speichern, zu diff, und Version in Git                    | Begrenzte Layoutsteuerung ohne Erweiterungen                    |
| Lesbare Quelle     | Autoren können ohne proprietären Editor bearbeiten                   | Komplexe Dokumente benötigen möglicherweise MDX oder Shortcodes |
| HTML-Konvertierung | Statische Site-Generatoren rendern es auf Webseiten                  | Die Ausgabe hängt von Generator und Theme ab                    |
| Portabilität       | Dateien können zwischen Werkzeugen und Plattformen verschoben werden | Geschmacksunterschiede können die Darstellung beeinflussen      |

## Markdown und Frontmatter

Statische Seitengeneratoren verbinden Markdown oft mit Frontmasse, einem Metadatenblock am oberen Rand der Datei.

```md
---
Titel: "Mein erster Beitrag"
Datum: 2026-10-14T10:00:00Z
Tags:
  - Blogging
---

Der Artikeltext startet hier.
```

Front matter speichert Metadaten; Markdown speichert Inhalte. Together, they form a portable content format for Git based publishing workflows. For more detail, see [What Is Front Matter in Markdown?](/blog/what-is-front-matter/) and [What Is a Git based CMS?](/blog/Git based-cms-explained/).
