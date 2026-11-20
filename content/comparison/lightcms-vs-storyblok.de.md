---
title: "LightCMS vs Storyblok: Visual Page-Editing vs Dokument Schreiben"
description: "Der visuelle, komponentenbasierte Editor von Storyblok ist für Marketingseiten, LightCMS ist ein Git-basierter Dokumenten-Editor. Wo jeder passt, und wie sie Inhalte speichern."
serial: 51
date: 2026-10-16T12:10:00Z
draft: false
keywords:
  - lightcms vs storyblok
  - storyblok Alternativen
  - visueller Editor cms
  - Storyblok Preisalternative
  - komponentenbasierte cms
preview: /og-image.webp
taxonomies:
  tags:
    - hellcms
    - storyblok
    - cms
    - vergleichen
    - kopffrei
---

[Storyblok](https://www.storyblok.com) hat seinen Ruf auf eine gute Idee gebaut: Bearbeite die Seite während du auf die Seite schaust. Der visuelle Editor mit Drag-and-Drop Blöcken und Live-Vorschau eignet sich hervorragend für komponentenorientierte Marketingseiten.

LightCMS teilt den "visuellen" Ehrgeiz, wendet ihn aber auf ein anderes Objekt an: das Dokument. Wo Storyblok komponierte Seiten editiert, bearbeitet LightCMS Prose.

---

## Was jedes Werkzeug macht

**Storyblok** ist ein kopffreies CMS mit einem Komponentensystem. Inhalt wird als verschachtelte Geschichten aus Blöcken modelliert, in einem visuellen Editor mit Live-Vorschau bearbeitet über eine API geliefert und nach Plan und Nutzung abgerechnet.

**LightCMS** ist ein selbstgehosteter, Git-basierter Arbeitsbereich. Inhalt sind Markdown Dateien mit Frontmatter in Ihrem Repository, bearbeitet in einem WYSIWYG Dokument Editor, geliefert als statische HTML von Ihrem Build.

|                      | LightCMS                               | Storyblok                          |
| :------------------- | :------------------------------------- | :--------------------------------- |
| **Speicher**         | Dateien in Ihrem Projektarchiv         | Storyblok Cloud (gehostet)         |
| **Lieferung**        | Statisches Erstellen → CDN             | Content API bei Abfragezeit        |
| **Bearbeite Modell** | Dokument (prose-erste)                 | Visuelle, Komponente/Block-basiert |
| **Inhaltsmodell**    | Front-Match-Felder                     | Schachtelte Blockschemas           |
| **Vorschau**         | Der gerenderte Beitrag nach dem Build  | Live-In-Editor-Vorschau            |
| **Preise**           | Kostenlos (Apache 2.0), selbstgehostet | Planbasierte SaaS                  |
| **Portabilität**     | Repository klonen                      | Export erforderlich                |
| **Extras**           | KI kopilot, Stimme, Newsletter         | Visueller Editor, Marketplace-Apps |

---

## Wo Storyblok siegt

- **Bearbeite komponierte Seiten visuell.** Ziehe einen Helden, ein Raster und eine CTA an die Stelle und sehe das Ergebnis sofort. Für Landingpages aus Komponenten ist dies die richtige Schnittstelle.
- **Live Vorschau ohne Build.** Was du siehst, ist die Geschichte, wie sie von der Vorschau API dargestellt wird, während du schreibst.
- **Marktfreundliche Autonomie.** Nicht technische Teams ordnen Seitenabschnitte um, ohne einen Entwickler zu berühren.
- **Gehostet und verwaltet.** Keine Infrastruktur zum Laufen, mit einer Unterstützungsorganisation dahinter.
- **Komponente wiederverwenden** über Seiten hinweg mit Schema-Validierung in jedem Block.

## Wo LightCMS gewinnt

- **Keine Rechnung, die mit Erfolg skaliert.** Freie Software, dein Host, dein CDN.
- **Inhaltseigentümer.** Das Projektarchiv ist die Quelle der Wahrheit; nichts muss exportiert werden. Siehe [Inhalt als Code](/blog/content-as-code/).
- **Erstellt für Langform.** Beiträge, Dokumentation und Änderungsprotokolle sind Dokumente (Überschriften, Listen, Tabellen, Code, Mathematik) direkt bearbeitet. Ein Blockbaum ist eine schlechte Oberfläche für 2.000 Wörter.
- **Statische Ausgabe.** Vorgerenderte Seiten aus einer CDN-Punktzahl besser auf [Core Web Vitals](/blog/static-vs-dynamic/) als von API zusammengetragen.
- **Die Extras sind gebündelt.** [AI drafting](/blog/lightcms-ai-copilot/), [Stimme Diktation](/blog/lightcms-voice-to-text/) und [Newsletter versand](/blog/newsletter-email-automation/).

---

## Der Tellertest

Machen Sie sich eine echte Aufgabe: Veröffentlichen Sie einen 1.500 Wort-Artikel mit einer Tabelle, drei Screenshots und einem Code-Block.

- In Storyblok kannst du es aus Blöcken zusammenstellen, eine Feldgruppe nach dem anderen, innerhalb eines Vorschaufensters.
- In LightCMS schreiben Sie ihn, lassen Sie die Bilder in und veröffentlichen.

Nehmen Sie nun die gegenteilige Aufgabe: bauen Sie von einem Helden eine Landungsseite neu auf, ein Raster und ein Zeugniskarussell aus.

- Storyblok macht es visuell, in Minuten.
- LightCMS versucht es nicht: Seitenkomposition gehört zu Ihren Vorlagen und Komponenten, nicht zu Ihrem Inhaltswerkzeug.

Die richtige Antwort lautet üblicherweise "beides, für verschiedene Arbeiten" . Veröffentlichungen benötigen eher das Gegenteil der zweiten Aufgabe, als sie zugeben.

---

## Migration

Storyblok exportiert Geschichten als JSON. Verschachtelte Blöcke in Markdown mit Frontmasse sind mechanisch für blog-förmige Inhalte und verlustfrei für stark komponierte Seiten. Das sind Seitendesigns und sie gehören sowieso in Ihr Frontend.

---

## Was solltest du wählen?

- **Wähle Storyblok** für komponentengesteuerte Marketingseiten, die von einem nicht-technischen Team bearbeitet werden, das gehostete und verwaltete Infrastruktur benötigt.
- **Wähle LightCMS** für eine inhaltsschwere statische Publikation, die von Leuten geschrieben wird, die sich um Prosa kümmern.

---

## Häufig gestellte Fragen

### Ist Storyblok kostenlos?

Storyblok bietet eine kostenlose Ebene für kleine Projekte; die Produktionspläne basieren auf Abonnements. LightCMS ist Apache 2.0 ohne Sitze oder Stufen.

### Unterstützt LightCMS Seitenbauer?

Nein, und das ganz bewusst auch. LightCMS verwaltet Inhalte, das Layout lebt in Ihren Vorlagen und Komponenten.

### Kann Storyblok statische Seiten bedienen?

Sie können von Storyblok zur Bauzeit vorab rendern, aber die gehostete Plattform bleibt die Quelle der Aufzeichnung und die Rechnung bleibt erhalten.

### Was ist besser für SEO?

Beides funktioniert. Statische vorgerenderte Ausgabe hat den einfacheren Weg bei Geschwindigkeitsmetriken; die Inhaltsqualität entscheidet über Rankings. Siehe [best CMS for static sites](/blog/best-cms-for-static-sites/).

### Kann ich Storyblok selbst veranstalten?

Nein, es ist ein gehosteter Dienst. Selbst-Hosting ist ein Vorteil von LightCMS und ein Git-basierter Vorteil.

---

Mehr: [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/), [LightCMS vs Sanity](/comparison/lightcms-vs-sanity), [headless vs Git based CMS](/blog/headless-vs-git-based-cms/).
