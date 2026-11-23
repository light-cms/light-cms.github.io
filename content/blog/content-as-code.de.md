---
title: "Content as Code: Writing Like Code"
description: >-
  Treat content like code, version it, review changes, and manage it alongside your projects. This post explores the benefits and practicalities of a content as code workflow.
date: "2026-11-04T19:22:00Z"
draft: false
tags:
  - Inhalt als Code
  - docs als Code
  - Inhalt im Git
  - markdown Workflow
  - versionskontrollierte Inhalte
isCJKLanguage: false
headless: false
serial: 47
preview: /og-image.png
slug: content-as-code
---

**Content as code** Is the practice of storing writing the way developers store source: plain text files in a repository, reviewed in pull requests, validated by automated checks, and deployed by a pipeline.

"Docs as code" ist der ältere Name. Technische Dokumentationsteams haben es begonnen und es hat sich auf Blogs, Changelogs, ausgebreitet und alles andere, was früher in einem Wiki oder einer CMS-Datenbank lebte.

## Die drei Verpflichtungen

Inhalt als Code ergibt sich aus drei Möglichkeiten:

1. **Einfacher Text ist das Format.** Markdown oder AsciiDoc, YAML oder TOML Front, UTF-8 Dateien. Nichts proprietär, nichts, das das ursprüngliche Werkzeug zum Öffnen benötigt.
2. **Das Projektarchiv ist das System des Datensatzs.** Keine Datenbank, kein Wiki, kein geteiltes Laufwerk. Wenn es nicht in Git ist, existiert es nicht.
3. **Die Pipeline behandelt Inhalte wie eine Build.** Linters überprüfen Links und Stil, Vorschaubilder machen jede Pull Anforderung und fusionieren Deployments.

Sobald diese sind, folgen die meisten Vorteile automatisch.

### Was Sie von der Softwarepraxis erben

### Überprüfe, was etwas bedeutet

Ein Pull-Request auf einem Dokument gibt Kommentare über den genauen Satz, eine ausdrückliche Zustimmung und eine Zusammenführung. Die redaktionelle Überprüfung erfolgt im Pull-Request statt eines E-Mail-Threads mit Anhängen.

### Geschichte, die Fragen beantwortet

`git log` On a file shows every change, author, and timestamp. "Wann haben wir den Preisanspruch geändert?" ist eine Suche und keine Untersuchung.

### Automatisierung

Rechtschreibung, Linkprüfung, Stilregeln, Frontmatter Validierung und Vorschau-Builds laufen alle auf derselben CI aus, die Code kompiliert. Zerbrochene Metadaten versagen die Pipeline anstelle der Live-Website.

### Parallele Arbeit

Zwei Autoren auf zwei Dateien verschmelzen sauber. Konflikte sind bei der Konstruktion selten, da die Inhaltseinheit eine Datei ist.

### Back up and portability

Jeder Klon ist eine vollständige Kopie. Moving platforms is a `git clone` Away from succeeding.

### Wo es schwer kommt

Die ehrliche Liste, weil dies nicht kostenlos ist:

- **Nontechnical writers need an interface.** Raw Git is a cliff. Inhalt als Code funktioniert in der Praxis, wenn Sie das Projektarchiv mit einem Bearbeitungswerkzeug koppeln, das Commits versteckt, das ist die Lücke Git basierende CMS Tools füllen.
- **Rich-Medien sind schwerfällig.** Bilder und Dokumente bedeuten binäre Dateien im Projektarchiv: größere Klone, unbequeme Diffs, gelegentliche LFS.
- **Struktur ist begrenzt.** Dateien werden nicht beigetreten. Wenn Inhalte relativiert werden, erhält eine Datenbank ihre Komplexität.
- **Merge Konflikte existieren noch immer.** Selten, wenn Dateien pro Dokument sind, schmerzhaft, wenn zwei Personen die selbe lange Datei bearbeiten.
- **Suche und Vorschau benötigen Tooling.** Ein Wiki gibt dir sofort die Suche; eine statische Seite benötigt einen Indexschritt.

Keiner davon disqualifiziert sich für eine Veröffentlichung. Sie alle sind für andere Formen der Arbeit echt.

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

- **Files** Carry Markdown and front matter.
- **CI** Validates front matter, checks links, and builds previews per pull request.
- **A CMS tool** Provides the writing surface for anyone who is not comfortable in an editor.
- **Deploy** Publishes the built output on merge.

Das Projektarchiv bleibt für einen Entwickler erkennbar und für einen Autor unsichtbar. Dieses Gleichgewicht ist der ganze Trick.

## Warum es andauert

Inhalt als Code gewinnt pünktlich gewinnt. Datenbanken benötigen ihr Schema, ihre Server-Version und ihren Händler. Wikis benötigen ihren Händler. Proprietäre Dokumente benötigen ihren Händler.

Ein Verzeichnis der Markdown-Dateien benötigt einen Texteditor, und es wird in einem in zwanzig Jahren immer noch geöffnet unabhängig davon, was mit einem beliebigen Werkzeug in der Kette geschieht. Für Inhalte, die die Plattform überleben sollten, auf der sie geschrieben wurde, ist Risikomanagement und nicht Nostalgie.

The same premise runs through every Git based CMS: [LightCMS](/blog/what-is-lightcms/) Adds the writing surface, and the repository keeps the permanence. See [drafts, revisions, and rollbacks](/blog/lightcms-drafts-and-versioning/) For the workflow in detail.

### Häufig gestellte Fragen

### Ist Inhalt als Code der gleiche wie ein Git-basiertes CMS?

Es ist die Philosophie; ein Git-basiertes CMS ist eine Implementierung. Sie können Inhalte nur mit einem Editor als Code üben, und ein Git-basiertes CMS gibt Nicht-Entwicklern einen Einstieg.

Should writers be familiar with Git?

Nicht wenn die Bearbeitung richtig ist. Autoren sollten einen Editor und einen Veröffentlichungs-Button sehen; Commits, Zweige und Rezensionen geschehen darunter.
