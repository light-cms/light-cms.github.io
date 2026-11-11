---
title: "LightCMS vs Sanity: Dateien in Git vs einer gehosteten Inhaltsplattform"
description: "Sanity ist eine strukturierte Content-Plattform mit einem gehosteten Content-See; LightCMS schreibt Markdown in Ihr Projektarchiv. Wo jeder Ansatz gewinnt für Blogs und statische Sites."
serial: 48
date: 2026-10-16T11:40:00Z
draft: false
keywords:
  - lightcms vs Vernunft
  - sanitäre Alternativen
  - sanity cms Preisgestaltung Alternativen
  - git basierte cms vs Vernunft
  - vernünftig für Blogs
preview: /og-image.webp
taxonomies:
  tags:
    - hellcms
    - sanft
    - cms
    - vergleichen
    - kopffrei
---

[Sanity](https://www.sanity.io) ist eine der stärksten kopflosen Plattformen: ein flexibles Schema, GROQ-Abfragen, ein anpassbares React Studio, Zusammenarbeit in Echtzeit und ein gehosteter Content See, der jedem Frontend dient, auf den Sie hinweisen.

LightCMS löst ein angrenzendes, aber anderes Problem: Dokumente auf einer statischen Seite aus einem eigenen Projektarchiv zu veröffentlichen. Der Vergleich ergibt erst dann Sinn, wenn man trennt, wofür jede Architektur optimiert ist.

---

## Der architektonische Unterschied

**Sanity** speichert Inhalte als strukturierte Dokumente in der Cloud von Sanity (Content Seke), die zur Laufzeit durch GROQ abgefragt und über ihre CDN geliefert wird. Ihr Frontend holt Inhalte ab; Sanity betreibt die Infrastruktur.

**LightCMS** speichert Inhalte als Markdown Dateien mit YAML Frontmatter in deinem GitHub Repository. Ihr statischer Site-Generator liest sie zur Build-Zeit und sendet HTML aus.

|                   | LightCMS                               | Vernunft                                  |
| :---------------- | :------------------------------------- | :---------------------------------------- |
| **Speicher**      | Ihr Git-Repository                     | Sanity Content Lake (gehostet)            |
| **Lieferung**     | Vorgerendertes statisches HTML         | API bei Abfragezeit (GROQ)                |
| **Inhaltsmodell** | Dokumente + Frontmatter                | Eigene Schemas im Code                    |
| **Laufzeit**      | Keine: Build + CDN                     | Client-App + API                          |
| **Abrechnung**    | Kostenlos (Apache 2.0), selbstgehostet | Nutzung/Sitz-basierter gehosteter Service |
| **Portabilität**  | Repository klonen                      | Exportieren und konvertieren              |
| **Editor**        | TipTippen Dokumenten-Editor            | Anpassbares Studio                        |
| **Extras**        | KI kopilot, Voice-to-text, Newsletter  | Ecosystem Apps, Echtzeit-Zusammenarbeit   |

---

## Wo Vernunft siegt

- **Multi-Channel-Auslieferung** Eine Inhaltsquelle, die eine Website, eine App und eine Integration mit Echtzeit-Abfragen speichert, ist Sanity zu Hause.
- **Benutzerdefinierte Inhaltsmodellierung.** Im Code definierte Schemas geben Ihnen Validierung, Referenzen und bedingte Felder, die Datei-basierte Inhalte nicht ausdrücken können.
- **Echtzeit-Zusammenarbeit.** Mehrere Redakteure im selben Dokument, leben. Git gibt Ihnen Überprüfung, nicht Gleichzeitigkeit.
- **Sofortige Updates.** Änderungen der Inhalte sind live ohne auf eine Version zu warten.
- **Ein reiches App-Ökosystem** und starkes Entwickler-Werkzeug rund um Studio.

## Wo LightCMS gewinnt

- **Keine Sitzung, pro API-Abrechnung.** Das Tool ist kostenlos und selbstgehostet; deine einzigen Kosten sind der Gastgeber, den du bereits besitzt.
- **Kein Anbieter im Inhaltspfad.** Inhalt sitzt in deinem Repository, lesbar, forkable und tragbar in zehn Jahren. Gehostete Inhalte leben dort, wo der Verkäufer sagt, dass sie es tun.
- **Null Laufzeit.** Keine API pro Anfrage, keine Kursgrenzen, keine Ausfälle auf der Statusseite eines anderen. Siehe [static vs dynamic sites](/blog/static-vs-dynamic/).
- \*\*Zum Schreiben erstellt. \* Ein vollständiger Dokumenteneditor mit [AI Drafting](/blog/lightcms-ai-copilot/), [dictation](/blog/lightcms-voice-to-text/), und [Newsletter dispatch](/blog/newsletter-email-automation/), wobei Sanity's Studio eher für Inhaltsmodellierung als für Langform-Authoring konfiguriert ist.
- **Einrichtung in Minuten gemessen.** Verbinden Sie ein Repository und Schreiben; es gibt keine Schema-Design-Phase vor Ihrem ersten Beitrag.

---

## Die Form der Kosten, Konkret

Die kostenlose Stufe von Sanity ist großzügig und Preisschuppen mit Nutzung und Sitzplätzen, ein gutes Geschäft, bis Verkehr und Teamgröße wachsen. Statische Ausgabe aus einem Git-Repository kostet das gleiche bei einem Leser und einer Million: Build Minuten (bereits von Ihrem CI) und CDN Bandbreite (nahe Null).

Für eine Publikation ist das eine strukturell günstigere Kurve. Für ein finanziertes Produkt mit mehrkanaligen Inhalten kauft Sanity's Ausgaben echte Fähigkeiten.

---

## Migration

Sanity exportiert nach JSON/NDJSON; die Konvertierung von Dokumenten in Markdown mit Frontmasse ist ein Skript, mit Referenzen und benutzerdefinierten Blocktypen, die manuelle Aufmerksamkeit benötigen. Das Gegenteil (indem Markdown in strukturierte Dokumente gedrückt wird) ist in der Regel die schwierigere Richtung. Beide Pfade sind vorhanden; je näher Ihr Inhalt ist, desto billiger ist der Umzug in die Dateien.

---

## Was solltest du wählen?

- **Wähle Sanity** wenn Inhalte strukturiert, mehrkanal und zur Laufzeit durch Anwendungen abgefragt werden.
- **Wähle LightCMS** wenn die Ausgabe eine statische Seite ist, der Inhalt ist Dokumente, und Eigentum plus Kostenkontrolle ist wichtig.

---

## Häufig gestellte Fragen

### Ist Vernunft kostenlos?

Sanity bietet eine kostenlose Stufe mit Limits an, dann nutzungsbasierte Preise. LightCMS ist Apache 2.0 lizenziert und selbst gehostet, daher gibt es keine Lizenzgebühr in welcher Größenordnung.

### Kann LightCMS in Echtzeit zusammenarbeiten?

Nein. LightCMS optimiert für fokussierte Single-Writer-Sitzungen und Git-basierte Rezensionen. Gleichzeitige Live-Co-Editing ist eine Stärke von Sanity.

### Erzeugt Sanity statische Seiten?

Sie können während der Bauzeit vom Verstand vorab abrufen (die Architektur funktioniert auf jede Weise), aber Sanity bleibt die gehostete Quelle der Aufzeichnung, und seine Preisgestaltung gilt nach wie vor.

### Kann ich die Vernunft aufnehmen?

Vernunft ist ein gehosteter Dienst; Selbst-Hosting ist nicht das unterstützte Modell. Das ist ein bedeutender Unterschied, wenn es um den Wohnsitz von Daten oder Kostenobergrenzen geht.

### Was ist besser für SEO?

Beide können gleich gut sein; die statische Ausgabe hilft den Core Web Vitals. Siehe [best CMS for static sites](/blog/best-cms-for-static-sites/).

---

Mehr: [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/), [LightCMS vs Payload CMS](/comparison/lightcms-vs-payload-cms), [headless vs Git based CMS](/blog/headless-vs-git-based-cms/).
