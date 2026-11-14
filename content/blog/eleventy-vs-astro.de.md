---
title: "Eleventy vs Astro: Minimales JavaScript vs Inseln der Interaktivität"
description: Eleventy and Astro verglichen mit Outputphilosophie, Templating, Content-Sammlungen, Plugin-Ökosysteme und welcher Null-JS-Generator zu Ihrem Projekt passt.
serial: 27
date: 2026-10-14T15:20:00Z
draft: false
keywords:
  - elf gegen Astro
  - astro gegen elf
  - 11ty gegen Astro
  - keine statische Seite von Javascript
  - bestes minimales ssg
preview: /og-image.webp
taxonomies:
  tags:
    - elfzig
    - Astros
    - ssg
    - statische Seiten
---

Eleventy and Astro agree on the most important principle in modern web development (**ship less JavaScript**) and disagree on how far to take it. Zehn Ausgaben reine statische Dateien, die durch JavaScript-Vorlagen generiert wurden, ohne Client-Laufzeit je zuvor. Astro liefert standardmäßig auch null JavaScript, aber hält React/Svelte/Vue Komponenten einen Import entfernt. Die Wahl zwischen ihnen ist die Wahl zwischen Purismus und Reichweite.

---

## Philosophie

- **Eleventy (11ty)** ist ein Vorlagen-Läufer: Es nimmt Ihre Vorlagen und Markdown und produziert statisches HTML. Es gibt kein Client-Side-Framework, in dem man sich aus dem System austreten kann, denn es gab nie eines. Template-Sprachen sind Ihre Wahl: Nunjucks, Liquid, Markdown, HTML und mehr.
- **Astro** ist ein Komponenten-Framework: Seiten sind `.astro`-Komponenten, Inhalte stammen aus typischen Sammlungen, und Interaktivität kommt als hydratierte Inseln mit echten UI-Frameworks.

## Templates und Inhalte

Die Flexibilität von Elevent ist seine Unterschrift: Vorlagensprachen pro Projekt vermischen, Daten mit globalen Datendateien strukturieren und die Konfiguration minimieren. Astros Inhaltssammlungen fügen das hinzu, was Eleventy der Konvention überlässt: **Schema-validierte Front-Materie** die das Build auf fehlerhaften Daten scheitert.

Beide verbrauchen Markdown mit YAML Frontmatter aus Ihrem Repository, was sowohl erstklassige Bürger für [Git based CMS publishing](/blog/git-cms-vs-traditional-cms/).

## Wenn Sie Interaktivität benötigen

Dies ist die Gabelung auf der Straße:

- Bei Elevents bedeuten interaktive Widgets Hand-Verkabelung Vanilla JavaScript oder Einbetten eines anderen Tools: einen bewussten manuellen Prozess.
- Auf Astro, das Ablegen von `<Button client:visible />` in eine Seite ist alles, was es braucht; das Framework bearbeitet Hydrationsgrenzen für dich.

Falls eine Dokumentationsseite oder Veröffentlichung ein Such-Widget wachsen könnte, ein Theme mit Status umschalten oder ein interaktives Beispiel, Astros Inseln sind der glattere Weg. (Für Dokumentationen spezifisch, Starlight-Pakete dies weiter; siehe [Hugo vs Astro Starlight](/blog/hugo-vs-astro-starlight/).)

## Ökosystem passen

Eleventy ist in der indien-Web-und kleinen Welt populär: minimal, stabil und komponierbar. Astro hat den Impuls, mit neuen Vorlagen, einem tieferen Komponentenökosystem und dem klarsten Weg für Content-Teams. Der breitere Kontext ist in [besten statischen Site-Generatoren](/blog/best-static-site-generators/).

---

## Was solltest du wählen?

- **Höhe** wenn du das kleinstmögliche Werkzeug zwischen deinem Markdown und deinem HTML möchtest, freuen Sie sich auf die Auswahl Ihrer eigenen Template-Sprache und sind zuversichtlich, dass die Website weitgehend statisch bleibt.
- **Astro** wenn du eingebaute tippte Inhaltssammlungen, komponentengesteuertes Authoring und interaktive Escape-Schraffuren haben möchtest, der Standard für die meisten neuen Projekte im Jahr 2026.

Beide stellen frei auf [Cloudflare Seiten oder GitHub-Seiten](/blog/cloudflare-pages-vs-github-pages/) und beide emittieren den kohlenstoffarmen in [Statische Sites und CO2]beschriebene statische Ausgabe zwischenspeichern (/blog/greener-web-static-sites/).

---

## Häufig gestellte Fragen

### Ist es schneller als Astro?

Build-time comparisons favorisieren Eleventy auf kleinen Sites; beide produzieren für Besucher identische Ausgabe: statisches HTML ohne Client-Laufzeit.

### Unterstützt Eleventy Komponenten?

Nicht als Rahmenkonzept, sondern als Template-basiert. Interaktive Komponenten erfordern Vanilla JS oder Einbetten, während Astro sie als erstklassige Komponenten behandelt.

### Was ist besser für Blogs?

Beide sind ausgezeichnet. Vor allem für den minimalistischen Puristen; Astro für Autoren, die interaktive Elemente oder gemeinsam genutzte UI-Komponenten später wollen.

### Kann ein Git basiertes CMS auf beiden Seiten publizieren?

Ja, beide lesen Markdown mit Frontmatter direkt aus Ihrem Repository, so dass jedes Git basiertes CMS auch gleich funktioniert.
