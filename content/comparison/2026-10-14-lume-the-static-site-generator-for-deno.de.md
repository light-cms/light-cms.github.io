---
title: "Lume: Der statische Site-Generator für Deno"
description: "Denos statischer Site-Generator, erklärte: unterstützte Formate, Plugin-Architektur, wie es mit Jekyll, Hugo und Elevent verglichen wird und wie es zu einem Git CMS Workflow passt."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false
keywords:
  - lume statischen Site-Generator
  - deno ssg
  - lume vs elventy
  - lume deno cms
  - lume Land
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - lumm
    - deno
    - statische Seiten
---

[Lume](https://lume.land) (Galician for "fire") ist der statische Standortgenerator im Zentrum des Deno-Ökosystems. Inspiriert von Jekyll, Hugo und Elevent soll es einfacher zu konfigurieren sein als jeder von ihnen, während es genauso flexibel bleibt und es läuft nativ auf Deno, ohne `node_modules` in Sicht.

---

## Was Lume ist

Ein schneller, zusammensetzbarer, erweiterbarer statischer Seitengenerator in Deno. Sie zeigen es auf ein Quellverzeichnis von Inhalten, es verarbeitet Ihre Dateien über eine Pipeline von Plugins, und es schreibt reine statische HTML bereit für jede CDN. Die Philosophie: Sinnvolle Standardwerte, minimale Konfiguration und jede Stufe austauschbar.

## Formatierungen und Templates

Die Schlagzeilen-Funktion von Lume ist Formatflexibilität. Aus dem Kästchen, das es behandelt:

- **Markdown** (mit Plugins für GitHub-ähnliche Syntax, Fußnoten und mehr)
- **YAML und JSON-Daten**
- **JavaScript und TypeScript Module** als Seiten oder Datenquellen
- **JSX** (präact Komponenten, die in statisches HTML gerendert werden)
- **Nunjucks** und andere Vorlagensprachen über Plugins

Letzter Punkt: Eine Lume Site kann Markdown Artikel mit JSX Komponenten in derselben Version vermischen, so dass sich inhaltsschwere Seiten mit gelegentlich interaktiven Abschnitten natürlich fühlen.

## Ökosystem

- **Plugins** decken alles ab von der Syntaxhervorhebung (Prism, Shiki) bis hin zur Bildtransformation, Sitemaps und Feeds: Das Modell „Elevty-Style“ „montiert eure eigene Pipeline“ mit Deno-native Ergonomie.
- **Deno Toolchain**: in TypeScript eingebaut, standardmäßig sicher ausgeführt und reproduzierbare Umgebungen ohne Paketmanager-Ritual.
- **Unterstützt von Deno**: in offiziellen Tutorials verwendet, ist es die de-facto Antwort auf "Was benutze ich, um eine statische Seite auf Deno zu erstellen?"

## Wo es passt

Lume belegt die gleiche Nische wie [Eleventy](/blog/eleventy-vs-astro/): Minimale Ausgabe, Template-Freiheit, kein Client-seitiges Framework. Wähle es aus, wenn deine Welt Deno/TypeScript ist; wähle Eleventy wenn deine Welt Knoten ist; wähle [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/), wenn du die Komponenten-Inseln einbauen möchtest. Das breitere Feld wird in [besten statischen Site-Generatoren](/blog/best-static-site-generators/).

## Inhalt und CMS-Workflow

Lume liest Markdown mit Frontmasse aus Ihrem Repository wie jeder Generator in dieser Kategorie. Kopieren Sie es mit einem Git-basierten CMS ([LightCMS](/getting-started/) oder dem [größeren Feld](/comparison/top-git-cms/)) und Autoren veröffentlichen visuell, während Lume die Commits in HTML kompiliert. Einsatzziele sind die üblichen kostenlosen statischen Hosts ([comparison](/blog/cloudflare-pages-vs-github-pages/)).

---

## Häufig gestellte Fragen

### Ist Lume ein CMS oder ein statischer Site-Generator?

Ein statischer Site-Generator. Für die Bearbeitungsebene mit einem Git-basierten CMS koppeln, das Markdown in sein Quellverzeichnis überträgt.

### Was ist der Unterschied zwischen Lume und Lift?

Nur sehr wenig philosophisch: Beide produzieren Null-JS-statische Ausgabe mit Template-Freiheit. Lume ist Deno-native mit TypeScript eingebaut; Eleventy läuft auf Node mit dem größeren Ökosystem.

### Unterstützt Lume JSX?

Ja. Preact Komponenten können neben Markdown Seiten als statisches HTML rendern, eines der beliebtesten Features.

### Ist Lume schnell?

Ja. Wie alle Einzelprozessgeneratoren, die statische Ausgabe erzeugen, werden Builds in Sekundenschnelle gemessen; Besucher erhalten das gleiche Cache-HTML für jeden SSG-Produkt.
