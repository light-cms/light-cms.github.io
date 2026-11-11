---
title: "Was ist ein statischer Site-Generator?"
description: "Ein statischer Site-Generator erstellt Seiten vor der Zeit aus Vorlagen und Inhaltsdateien."
serial: 46
date: 2026-10-16T11:20:00Z
draft: false
keywords:
  - was ist ein statischer Seitengenerator
  - statische Site-Generator
  - ssg erklärt
  - wie statische Seiten funktionieren
  - vor gerenderte html
preview: /og-image.webp
taxonomies:
  tags:
    - statische Seiten
    - ssg
    - erklärer
    - web
---

Ein **statischer Site-Generator (SSG)** ist ein Programm, das Inhalte und Vorlagen übernimmt und eine komplette Website als einfaches HTML erzeugt. CSS- und JavaScript-Dateien, bevor jemand besucht.

Anstatt eine Seite pro Anfrage zu montieren, geschieht die Arbeit einmal, zum Zeitpunkt der Fertigung. Was an den Leser verschickt ist das fertige Artefakt.

---

## Das Modell in einem Diagramm

```text
Inhalt (Markdown + Front-Materie) <unk>
Vorlagen (HTML / JSX / Gehe Vorlagen)<unk> <unk> 本> SSG Build "number@@0" > public/ <unk> CDN <unk> > Browser
Konfiguration, Daten, Stile <unk>
```

Führen Sie das Build aus und es erscheint ein `public/`-Verzeichnis, das jede Seite der Seite enthält. Verteilen Sie dieses Verzeichnis überall dort, wo Dateien ausgeliefert werden können, und die Site ist live.

---

## Was der Bau tatsächlich macht

1. **Liest Inhalte.** Markdown Dateien mit [Front-Matter](/blog/what-is-front-matter/): Titel, Datum, Tags, Entwurfsflags.
2. **Anwendung von Vorlagen.** Jeder Inhaltstyp Karten auf ein Layout: Postseite, Listing, Tag-Index, Homepage.
3. **Erzeugt jede Seite.** Artikel-Seiten, paginierte Listen, Tag-Archive, RSS-Feeds und Sitemaps, alle vorgerendert.
4. **Kopiert Assets.** Bilder, Schriftarten, Stile, Skripte.
5. **Sendet `public/`.** Ein Ordner mit Dateien ohne Laufzeit angehängt.

Einige Generatoren tun dies in Millisekunden; andere in Sekunden. Nichts davon geschieht, während ein Leser wartet.

---

## Warum die Differenz wichtig ist

Eine dynamische Website (WordPress, Rails, die meisten Server gerenderte Frameworks) arbeitet auf jede Anfrage: Code ausführen, eine Datenbank abfragen, HTML zusammenstellen, antworten. Eine statische Seite hat das bereits getan.

Die Folgen sind strukturell:

- **Geschwindigkeit.** Die nächste CDN-Kante hat bereits die Seite. Es gibt keine Abfrage, keinen Render, keinen kalten Start.
- **Sicherheit.** Kein serverseitiger Code wird pro Anfrage ausgeführt, keine Datenbank, die auf einem Port lauscht, kein Administrator-Login für brute-force. Die Angriffsfläche ist ein Ordner von Dateien.
- **Zuverlässigkeit.** Nichts zum Absturz um 15.00 Uhr. Der häufigste Fehlermodus ist ein fehlerhaftes Deploy, das rückgängig gemacht wird, indem man die vorherige Deployment-Methode neu verteilt.
- **Kosten.** Bandbreite ist billig; immer ist es nicht. Statische Standorte kosten einen Rundungsfehler auf fast jedem Verkehrsträger.
- **Langlebigkeit.** Dateien bleiben lesbar. Die Bauwerkzeuge können altern, aber die Ausgabe verrottet nicht.

Es gibt auch ein Umweltargument, das es wert ist, ernst zu nehmen: Die Bereitstellung von zwischengespeicherten Dateien in der Nähe des Lesers verwendet einen Bruchteil der Energie der Codeausführung pro View. [Statische Seiten und CO2](/blog/greener-web-static-sites/) geht in die Zahlen.

---

## Welche SSGs sind gut und wo sie kämpfen

**Hervorragend für:** Blogs, Dokumentation, Landingpages, Portfolios und jede Seite, wo sich Inhalte gelegentlich ändern und das Lesen ständig geschieht.

**Awkward für:** Inhalte, die bei Datenänderung aktualisiert werden müssen. (kann mit teilweiser Hydrierung durchgeführt werden)

Interaktivität ist nicht unbegrenzt. Das moderne Muster stellt alles vor und fügt kleine Inseln von JavaScript an, wo nötig (Formulare, Suche, Schalter im Dunkelmodus), die Idee hinter [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) und ähnliche Werkzeuge.

---

## Die Optionen in kurz

| Generator               | Sprache / Vorlage          | Signaturstärke                                   |
| :---------------------- | :------------------------- | :----------------------------------------------- |
| **Hugo**                | Gehe Vorlagen              | Rohe Baugeschwindigkeit, großes Themen-Ökosystem |
| **Astro**               | `.astro` Komponenten       | Inselarchitektur, Inhaltssammlungen              |
| **Höhe**                | Nunjucks, Flüssig und mehr | Null-JS-Minimalismus, volle Kontrolle            |
| **Jekyll**              | Flüssig                    | GitHub Pages heritage, simplicity                |
| **Zola**                | Tera                       | Einzelnes Programm, Batterien enthalten          |
| **SvelteKit / Next.js** | React/Svelte               | Webseiten, die zu Anwendungen wachsen            |

Die vollständige Übersicht ist in [besten statischen Site-Generatoren](/blog/best-static-site-generators/). Sie alle verbrauchen den gleichen Eingang: Markdown mit Frontmasse.

---

## Wo das CMS passt

Ein SSG löst _Rendering_; es sagt nichts über _Autoren_ aus. Linkslos zu veröffentlichen bedeutet, Dateien in einem Code-Editor zu editieren und Commits zu drücken: Funktionierbar für Entwickler, eine Barriere für alle anderen.

Ein Git unterstützt CMS füllt diese Lücke: Es schreibt Markdown und Frontmatter über einen visuellen Editor in das Projektarchiv, und die SSG tut, was es immer tat. Der Generator ändert sich nie, die Erfahrung des Schriftstellers. Das ist die ganze Prämisse hinter [LightCMS](/blog/what-is-lightcms/), und der schnellste Weg, es zu sehen ist, [eine Startervorlage zu kopieren](/blog/start-with-a-lightcms-template/) mit dem bereits konfigurierten Build.

---

## Häufig gestellte Fragen

### Ist ein SSG dasselbe wie ein Framework?

Nein. Ein Framework bearbeitet Anfragen zur Laufzeit; ein Generator läuft zur Build-Zeit und erzeugt Dateien. Einige Tools verwischen die Zeile: SvelteKit und Next.js können beides tun.

### Unterstützen statische Seiten Kommentare, Formulare oder Suche?

Ja, über Dienste von Drittanbietern oder Client-seitigem JavaScript: Form-Endpunkte, Kommentaranbieter und Browser-seitige Suchindizes sind allesamt verbreitet.

### Wie oft muss ich wieder aufbauen?

Nur wenn Inhalt oder Code sich ändert. Ein typisches Blog baut auf jeder Veröffentlichung auf, ein Prozess, der in Sekunden gemessen wird.

### Ist eine statische Site gut für SEO?

Wahr. Schnelle Auslastung, starke Core Web Vitals, sauberes Crawlable HTML und keine Probleme mit der doppelten Rendering.

### Kann eine statische Seite mit hohem Traffic umgehen?

Ja. Der Verkehr wird aus dem Cache serviert, so dass Stacheln billig sind. Ein dynamischer Standort funktioniert umgekehrt, wo Stacheln Geld kosten.

---

Verwandt: [static vs dynamic sites](/blog/static-vs-dynamic/), [was ist der Jamstack?](/blog/what-is-jamstack/), und [wo eine statische Site Host-Host-Host-/misc/top-static-site-hosting/).
