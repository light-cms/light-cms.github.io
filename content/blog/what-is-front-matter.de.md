---
title: "Worum geht es bei der Front? Der Metadaten-Block an der Spitze Ihres Inhalts"
description: "Frontmatter ist der YAML oder TOML-Block oben in einer Markdown-Datei, der Ihrer Website den Titel mitteilt, Datum, Tags und Entwurfsstatus mit Beispielen."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false
keywords:
  - was ist vorderste Materie
  - vordere Materie Markdown
  - yaml Vorderteil
  - statische Metadaten der Site
  - markdown metadata
preview: /og-image.webp
taxonomies:
  tags:
    - markdown
    - erklärer
    - statische Seiten
    - cms
---

**Front Matter** ist der Block der Metadaten oben in einer Inhaltsdatei, die vom Artikel selbst abgegrenzt ist. Hier gibt eine Markdown-Datei an, was sie _ist_ (Titel, Datum, Tags, Autor, Entwerfen Sie Status), so dass Ihr Website-Generator ihn rendern kann, sortieren und filtern kann.

Wenn Markdown der Körper eines Posts ist, ist Frontmatter sein Etikett.

---

## Wie es aussieht

```markdown
---
Titel: Notizen zu statischen Generatoren
Beschreibung: Eine kurze Zusammenfassung für SEO und soziale Karten.
Datum: 2026-10-16T09:00:00Z
Entwurf: false
tags:
  - static-sites
  - Tooling
Stichwörter:
  - statische Seitengeneratoren
  - ssg comparison
Vorschau: /og-image. ebp
---

Der Artikeltext beginnt hier, nach dem Schließen `---`.
```

Drei Dinge sind bemerkenswert:

1. **Die Zäune.** Eine Zeile von drei Bindestrichen öffnet und schließt den Block. Alles dazwischen gehört zu Metadaten; alles danach gehört zum Artikel.
2. **Das Format.** Dieses Beispiel ist YAML, der Standard für die meisten Generatoren. Auch TOML (`++`) und JSON (`{...}`) werden verwendet; Zola akzeptiert zum Beispiel alle drei.
3. **Die Felder.** Standardschlüssel wie `title` und `date` werden von Generatoren verstanden; benutzerdefinierte Schlüssel wie `Keywords` oder `preview` stehen deinen Vorlagen zur Verfügung.

---

## Was gerade an der Front zählt,

Jedes Feld treibt ein konkretes Verhalten im Build:

| Feld                 | Effekt                                                 |
| :------------------- | :----------------------------------------------------- |
| `title`              | Seite `<title>`, Überschriften und Listen              |
| `Beschreibung`       | Meta-Beschreibung, Karten, Zusammenfassungen der Liste |
| `Datum`              | Sortierung, "Veröffentlicht auf"-Anzeige, Feeds        |
| `tag` / `categories` | Taxonomie-Seiten und Querverlinkung                    |
| "Entwurf"            | Ausgeschlossen vom Build, wenn `true`                  |
| "slug"               | Überschreibt die vom Dateinamen abgeleitete URL        |
| `Vorlage`            | Wählt das Layout der Seite                             |
| "Gewicht"            | Manuelle Bestellung innerhalb eines Abschnitts         |

Dies ist der Grund, warum ein Tippfehler in der Vorabmasse ein Build brechen kann: `date: 2026-13-45` oder ein streuner Tab unter `tags:` ist ungültig YAML, und der Generator schlägt fehl, bevor er eine einzelne Seite schreibt.

---

## Warum Frontfrage existiert

Statische Seitengeneratoren können keine Datenbank "Was ist diese Seite?" fragen, da es keine Datenbank gibt. Sie benötigen Metadaten, um den Inhalt **mit** in einer Form zu leben, die sowohl eine Maschine als auch ein Mensch lesen kann. Frontmatter löst Folgendes:

- **Selbstbeschreibende Dateien.** Ein Beitrag trägt alles, was nötig ist, um ihn zu rendern. Verschieben Sie die Datei und ihre Identität bewegt sich darüber.
- **Verdünnbare Metadaten.** Das Ändern eines Titels ist ein Einzeilencommitment, den du überprüfen und wie jede andere Änderung zurücksetzen kannst.
- **Tool-freundlich.** Editoren, Linters und CI-Skripte können Metadaten vor der Erstellung validieren.
- **Portable.** Der gleiche Block funktioniert über Generatoren mit geringfügigen Schlüsselunterschieden hinweg.

---

## Gemeinsame Konventionen

Es gibt genug Konventionen, dass Kohärenz mehr wert ist als Schlauheit:

- **Daten in ISO 8601**: `2026-10-16T09:00:00Z`. Unzweideutig über Locales, sortiert korrekt.
- **Tags als Liste**, nicht als kommaseparierte Zeichenkette, so dass ein Tag mit einem Leerzeichen nicht in die Hälfte geteilt wird.
- **Slugs Kleinbuchstaben mit Bindestrichen.** Dateinamen werden URLs, also schlägt `my-great-post` `My Great Post.md`.
- **`Entwurf: true` für unfertige Arbeit.** Die sichere Möglichkeit, ohne Veröffentlichung zu speichern.
- **Eine echte `Beschreibung`.** Das eine Feld hat meistens leer gelassen und dann bereut, wenn der Link geteilt wird.

---

## Wo ein CMS passt

Front matter ist der Teil von Markdown, den nicht-technische Autoren nicht sehen sollten. Es ist Syntax mit scharfen Kanten: Einrückung, Zitate Materie, Datumsformate sind wichtig.

Ein Git basiertes CMS verarbeitet es als **Formular** (Füllen Sie den Titel aus, wählen Sie das Datum, klicken Sie tags) und serialisiert ein gültiges YAML beim Speichern. Autoren denken nie an den Zaun; das Projektarchiv erhält immer noch das, was der Generator erwartet. Diese Funktion eliminiert einen der häufigsten Ausfallmodi im Static-Site-Publishing.

LightCMS zum Beispiel überprüft die Frontmatter beim Tippen und schreibt sie beim Übertragen (siehe [Editor tour](/blog/lightcms-editor-tour/)), damit die Metadaten korrekt bleiben, egal wer publiziert.

---

## Häufig gestellte Fragen

### Ist eine Frontfrage erforderlich?

Für Seiten in einer datensortierten Sektion, ja: Generatoren erwarten mindestens einen Titel und ein Datum. Die genauen Anforderungen hängen vom Schema Ihres Generators ab.

### YAML vs TOML vs JSON: Welche sollte ich verwenden?

Wie auch immer Ihr Generator standardmäßig ist. Konsistenz innerhalb eines Projektarchivs ist wichtiger als das Format selbst.

### Kann Frontware Listen und Objekte enthalten?

Ja. Schachtelte Karten und Listen sind normal: Bildergalerien, Autoren mit Rollen und alternative Titel passen alles.

### Wie lange sollte die Beschreibung sein?

Streben Sie etwa 140–160 Zeichen: lang genug, um in Suchergebnissen Sinn zu machen, kurz genug, um nicht gekürzt zu werden.

### wirkt sich die Frontfrage auf SEO aus?

Direkt: hier kommt der Titel und die Meta-Beschreibung heran, so dass es eines der wertvollsten Kleinigkeiten in einer statischen Seite ist.

---

Verwandt: [was ist Markdown?](/blog/what-is-markdown/), [der LightCMS-Editor](/blog/lightcms-editor-tour/) und [was ein statischer Site-Generator tut](/blog/what-is-a-static-site-generator/).
