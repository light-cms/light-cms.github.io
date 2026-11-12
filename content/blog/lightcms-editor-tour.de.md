---
title: "Eine Tour durch den LightCMS Editor: WYSIWYG That Outputs Clean Markdown"
description: "Innerhalb der LightCMS Schreibfläche: TipTap-gestützte visuelle Bearbeitung mit Mathematik, Code-Hervorhebung, Tabellen, Aufgabenlisten und Medien, die noch immer handbearbeitbare Markdown erzeugen."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
keywords:
  - lightcms Editor
  - wysiwyg markdown editor
  - visueller Editor für Markdown
  - tiptap editor
  - markdown wysiwyg
preview: /og-image.webp
taxonomies:
  tags:
    - hellcms
    - editieren
    - markdown
    - schreiben
---

Die meisten "Markdown-Editoren" sind ein Textbereich mit einem Vorschaufenster, der an die Seite geheftet wird. Sie schreiben rohe Syntax, schauen auf das Ergebnis und hoffen, dass das Nesting richtig ist. Der LightCMS Editor funktioniert umgekehrt. **Du schreibst und der Editor schreibt Markdown unter.**

Dies ist eine Tour durch diese Schreibfläche: was sie tut, warum sie so funktioniert und was sie bewusst ablehnt.

---

## Die Kernidee: Siehe das Dokument, nicht die Syntax

Der Editor ist auf [TipTap](https://tiptap.dev), einem ProseMirror-basierten Rich Text Framework, aufgebaut konfiguriert, um alles, was es produziert, in Standard Markdown plus YAML Frontmatter zu serialisieren.

Das heißt:

- **Bold** ist ein Toolbar-Button oder `Cmd+B`, und er schreibt `**bold**` in die Datei.
- Eine Überschrift ist ein Dropdown und schreibt `## Heading`.
- Eine Tabelle wird als Tabelle eingefügt, gezogen und bearbeitet und landet als Pipe-Tabelle in Ihrem Projektarchiv.

Sie erhalten die Unmittelbarkeit eines Textverarbeiters mit der Haltbarkeit von reinem Text. Es gibt kein proprietäres Dokument-Format, keinen Binär-Blob, und keinen Konvertierungsschritt beim Verlassen.

---

## Was du in einen Beitrag werfen kannst

### Strukturierter Text
Überschriften blockieren Anführungszeichen, geordnete und ungeordnete Listen, horizontale Regeln und Aufgabenlisten: das komplette Skelett eines technischen Artikels, alle Tastatur-erreichbaren.

### Blöcke mit Hervorhebung
Fügen Sie einen eingezäunten Block ein, wählen Sie die Sprache, und der Editor behält den Zaun und die Sprache Tag intakt. Ihr veröffentlichter Beitrag wird mit der gleichen Syntax hervorgehoben, die Ihr SSG bereits anwendet.

### Mathematik mit KaTeX
Schreibe Inline-Mathematik oder zeige Gleichungen an und seht sie live. Für technisches Publizieren wie ML-Beiträge, Physik-Notizen und Algorithmus-Write-Ups entfernt dies die "Kompilierung, um die Formel-Schleife zu überprüfen".

### Tabellen
Zeilen und Spalten visuell einfügen. Markdown Tabellen sind für den Autor von Hand kläglich, hier sind es nur Zellen.

### Medien
Bilder auf die Seite ziehen. [LightCMS](https://lightcms.me) speichert die Datei, erzeugt die Referenz und schreibt sie in deinen Inhalt so wird ein Screenshot von der Zwischenablage in die Zwischenablage ohne eine Reise durch Ihr Dateisystem veröffentlicht.

---

## Frontfrage ohne YAML

Die andere Hälfte eines Statik-Beitrags ist seine Frontfrage, und dort geht die Handbearbeitung üblicherweise schief: ein streuner Tab, ein Datum im falschen Format, ein ungeschlossenes Zitat und die Erstellung bricht ab.

In [LightCMS](https://lightcms.me) ist Frontmatter ein Formular: Titel, Beschreibung, Datum, Tags, Schlüsselwörter und was auch immer dein Schema deklariert. Der Editor prüft beim Tippen und schreibt korrekt formatierte YAML beim Veröffentlichen. Autoren sehen die Syntax nie und das Projektarchiv erhält immer noch das, was die SSG erwartet.

Ein großer Teil der "my build is failing" Unterstützungsthemen in statischen Site-Communities verfolgen auf missgestaltete Frontthemen zurück und ein visuelles Formular entfernt diese Fehlerklasse.

---

## Designs für lange Sitzungen

Der Editor wird mit hellen und dunklen Modi ausgeliefert. Das klingt kosmetisch, bis du drei Stunden geschrieben hast: Ein reiner `#ffffffff` Hintergrund um 1 Uhr ist feindlich, und die meisten Admin-Dashboards kümmern sich nicht. [LightCMS](https://lightcms.me) wählt seine Paletten zum Lesen und Schreiben über lange Sitzungen, nicht für einen Screenshot auf einer Landing-Seite.

---

## Was der Editor nicht tun wird

Zwei Grenzen sind beabsichtigt:

1. **Es lässt dich das Format nicht kaputen.** Jede Aktion mappt auf gültige Markdown. Es gibt keinen Zustand, in dem der Editor etwas speichert, was Ihre SSG nicht lesen kann.
2. **Es ist kein Designwerkzeug.** Layout, Design und Präsentation gehören zu Ihren Vorlagen: Das CMS besitzt Inhalte, das Projektarchiv besitzt Code. Diese Linie sauber zu halten ist es, was Designer und Autoren in das gleiche Repository arbeiten lässt, ohne einander zu wechseln.

---

## Warum nicht einfach nur einen Code-Editor verwenden?

Sie können, und Entwickler tun es oft. Aber sobald eine zweite Person das Repository berührt, "just edit the Markdown" wird zu einer Unterstützungsbelastung: Falsche Frontfrage, versehentliche Leerzeichen, fehlerhafte Tabellen, Commits. Ein Tippfehler zu beheben bedeutet dann die Installation eines Editors, das Klonen eines Repos und das Lernen eines Zweig-Workflows.

Der [LightCMS](https://lightcms.me) Editor lässt den Workflow des Entwicklers unberührt und entfernt diese Barrieren für alle anderen.

---

## Häufig gestellte Fragen

### Erzeugt der Editor unangenehme Markdown?

Nein. Es serialisiert auf Standard Markdown mit YAML Frontmaterial, die gleiche Ausgabe würde ein sorgfältiger Mensch schreiben. Öffne jeden veröffentlichten Beitrag im VS Code und liest ihn normal.

### Kann ich die Dateien noch von Hand bearbeiten?

immer. [LightCMS](https://lightcms.me) Commits in deinem Repository wie jeder andere würde. Hand bearbeitet, Editor bearbeitet, und KI bearbeitet alle Land wie die gleichen `.md`-Dateien.

### Unterstützt es Markdown Kurzcodes ?

Die Shortcodes Ihrer SSG leben im Inhalt als Klartext und werden unangetastet durchgeführt; der Editor versucht nicht, sie zu interpretieren oder zu reformieren.

### Was ist mit Bildern?

Ziehen und Ablegen. [LightCMS](https://lightcms.me) platziert das Asset und schreibt die Referenz so dass der Pfad dem entspricht, was dein Build erwartet.

---

Nächste: [die KI copilot](/blog/lightcms-ai-copilot/), die neben diesem Editor lebt, und [einen Entwurf mit deiner Stimme diktieren](/blog/lightcms-voice-to-text/) beim Tippen ist der langsame Teil.
