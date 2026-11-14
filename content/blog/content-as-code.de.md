---
title: 'Inhalt als Code: Schreiben wie Quelltext behandeln'
description: >-
  Inhalt als Code bedeutet, als reinen Text in einem Repository zu speichern, überprüft und eingesetzt wie Software, mit den Workflow-Vorteilen und den realen Einschränkungen.
date: '2026-11-04T19:22:00Z'
draft: false
keywords:
  - Inhalt als Code
  - docs als Code
  - Inhalt im Git
  - markdown Workflow
  - versionskontrollierte Inhalte
tags:
  - Inhalt
  - Frontmatter
  - Texte
  - Markdown
  - Lightcms
isCJKLanguage: false
headless: false
serial: 47
preview: /og-image.png
taxonomies:
  tags:
    - git
    - workflow
    - cms
    - erklärer
---
**Inhalt als Code** ist die Praxis, die Art und Weise zu speichern, wie Entwickler Quellen speichern: Textdateien in einem Repository, in Pull-Requests überprüft, durch automatisierte Prüfungen validiert und durch eine Pipeline bereitgestellt.

"Docs as code" ist der ältere Name. Technische Dokumentationsteams haben es begonnen und es hat sich auf Blogs, Changelogs, ausgebreitet und alles andere, was früher in einem Wiki oder einer CMS-Datenbank lebte.

---

## Die drei Verpflichtungen

Inhalt als Code ergibt sich aus drei Möglichkeiten:

1. **Einfacher Text ist das Format.** Markdown oder AsciiDoc, YAML oder TOML Front, UTF-8 Dateien. Nichts proprietär, nichts, das das ursprüngliche Werkzeug zum Öffnen benötigt.
2. **Das Projektarchiv ist das System des Datensatzs.** Keine Datenbank, kein Wiki, kein geteiltes Laufwerk. Wenn es nicht in Git ist, existiert es nicht.
3. **Die Pipeline behandelt Inhalte wie eine Build.** Linters überprüfen Links und Stil, Vorschaubilder machen jede Pull Anforderung und fusionieren Deployments.

Sobald diese sind, folgen die meisten Vorteile automatisch.

---

### Was Sie von der Softwarepraxis erben

### Überprüfe, was etwas bedeutet

Ein Pull-Request auf einem Dokument gibt Kommentare über den genauen Satz, eine ausdrückliche Zustimmung und eine Zusammenführung. Die redaktionelle Überprüfung erfolgt im Pull-Request statt eines E-Mail-Threads mit Anhängen.

### Geschichte, die Fragen beantwortet

`git log` auf einer Datei zeigt jede Änderung, jeden Autor und jeden Zeitstempel. "Wann haben wir den Preisanspruch geändert?" ist eine Suche und keine Untersuchung.

### Automatisierung

Rechtschreibung, Linkprüfung, Stilregeln, Frontmatter Validierung und Vorschau-Builds laufen alle auf derselben CI aus, die Code kompiliert. Zerbrochene Metadaten versagen die Pipeline anstelle der Live-Website.

### Parallele Arbeit

Zwei Autoren auf zwei Dateien verschmelzen sauber. Konflikte sind bei der Konstruktion selten, da die Inhaltseinheit eine Datei ist.

### Backup und Portabilität

Jeder Klon ist eine vollständige Kopie. Verschieben von Plattformen ist ein "git clone" weg vom Erfolg.

### Wo es schwer kommt

Die ehrliche Liste, weil dies nicht kostenlos ist:

- **Nicht-technische Autoren benötigen eine Schnittstelle.** Raw Git ist eine Klippe. Inhalt als Code funktioniert in der Praxis, wenn Sie das Projektarchiv mit einem Bearbeitungswerkzeug koppeln, das Commits versteckt, das ist die Lücke Git basierende CMS Tools füllen.
- **Rich-Medien sind schwerfällig.** Bilder und Dokumente bedeuten binäre Dateien im Projektarchiv: größere Klone, unbequeme Diffs, gelegentliche LFS.
- **Struktur ist begrenzt.** Dateien werden nicht beigetreten. Wenn Inhalte relativiert werden, erhält eine Datenbank ihre Komplexität.
- **Merge Konflikte existieren noch immer.** Selten, wenn Dateien pro Dokument sind, schmerzhaft, wenn zwei Personen die selbe lange Datei bearbeiten.
- **Suche und Vorschau benötigen Tooling.** Ein Wiki gibt dir sofort die Suche; eine statische Seite benötigt einen Indexschritt.

Keiner davon disqualifiziert sich für eine Veröffentlichung. Sie alle sind für andere Formen der Arbeit echt.

---

## Der praktische Stapel

Eine typische Content-as-Code-Einrichtung für eine Publikation sieht folgendermaßen aus:

```text
content/
<unk> 本<unk> posts/
<unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> 2026-10-16-shipping-notes.md
<unk> <unk> <unk> <unk> <unk> <unk> 2026-10-02-release-1-4.md
<unk> 文<unk> pages/
<unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> about.md
<unk> <unk> <unk> _index.md
```

- **Dateien** tragen Markdown und Vorderachse.
- **CI** prüft die Vorseite, prüft Links und Builds Vorschaubilder pro Pull-Request-Abfrage.
- **Ein CMS-Werkzeug** liefert die Schreiboberfläche für alle, die in einem Editor nicht bequem sind.
- **Deploy** veröffentlicht die Build-Ausgabe beim Zusammenführen.

Das Projektarchiv bleibt für einen Entwickler erkennbar und für einen Autor unsichtbar. Dieses Gleichgewicht ist der ganze Trick.

---

## Warum es andauert

Inhalt als Code gewinnt pünktlich gewinnt. Datenbanken benötigen ihr Schema, ihre Server-Version und ihren Händler. Wikis benötigen ihren Händler. Proprietäre Dokumente benötigen ihren Händler.

Ein Verzeichnis der Markdown-Dateien benötigt einen Texteditor, und es wird in einem in zwanzig Jahren immer noch geöffnet unabhängig davon, was mit einem beliebigen Werkzeug in der Kette geschieht. Für Inhalte, die die Plattform überleben sollten, auf der sie geschrieben wurde, ist Risikomanagement und nicht Nostalgie.

Die gleiche Prämisse geht durch jedes Git basierte CMS: [LightCMS](/blog/what-is-lightcms/) fügt die Schreiboberfläche hinzu und das Repository behält die Dauerhaftigkeit. Siehe [Entwürfe, Revisionen und Rollbacks](/blog/lightcms-drafts-and-versioning/) für den Workflow im Detail.

#### Häufig gestellte Fragen

## Häufig gestellte Fragen

### Ist Inhalt als Code der gleiche wie ein Git-basiertes CMS?

Es ist die Philosophie; ein Git-basiertes CMS ist eine Implementierung. Sie können Inhalte nur mit einem Editor als Code üben, und ein Git-basiertes CMS gibt Nicht-Entwicklern einen Einstieg.

### Müssen Autoren Git lernen?

Nicht wenn die Bearbeitung richtig ist. Autoren sollten einen Editor und einen Veröffentlichungs-Button sehen; Commits, Zweige und Rezensionen geschehen darunter.

### Wo schlägt der Inhalt als Code fehl?

Inhalte mit starken Beziehungen, Echtzeit-Editing-Anforderungen oder sehr großen Binärwerten. Diese Arbeitslasten gehören in ein datenbankgestütztes System.

### Wie gehen Sie mit Bildern um?

Entweder in das Projektarchiv eingegeben oder in einem Asset-Eimer mit Referenzen im Vordergrund gespeichert. Der zweite hält den Repository-Lean.

### Kann ich ihn schrittweise annehmen?

Ja. Beginnen Sie mit einem Inhaltsverzeichnis und einer Pipeline. Das Format erfordert keine Tag-Flagge.

---

Verwandt: [Was ist ein Git basierendes CMS?](/blog/git-based-cms-explained/), [Frontmatter explained](/blog/what-is-front-matter/), und [Versionskontrolle für Autoren](/blog/lightcms-drafts-and-versioning/).
