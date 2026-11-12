---
title: "Statische Stätten und CO2: Baue ein grüneres Web"
description: Warum statische Websites weniger Kohlenstoff ausstoßen als dynamische, wie CDN-Caching den Energieverbrauch senkt wie man den Fußabdruck Ihrer Website messen kann und wie ein grüneres Web aussieht.
serial: 16
date: 2026-10-14T13:30:00Z
draft: false
keywords:
  - kohlenstoffarme Website
  - statische Site co2
  - grüneres Netz
  - nachhaltiges Webdesign
  - Website CO2-Fußabdruck
preview: /og-image.webp
taxonomies:
  tags:
    - nachhaltiger
    - statische Seiten
    - grünes Web
    - ko2
---

Jede Seitenansicht kostet Energie. Irgendwo ein Server weckt, ein Cache fehlt, eine Datenbankabfrage läuft und Strom in Gramm CO2 ausgegeben wird, liefert einen Textabschnitt. Häufig zitierte Schätzungen beziffern das Netz auf etwa 2–4% der weltweiten Stromemissionen, vergleichbar mit der Luftfahrtindustrie. Die Architektur deiner Site bestimmt, wo auf diesem Spektrum du landst und **statische Standorte am sauberen Ende** sitzen.

---

### Warum statische Sites weniger Kohlenstoff enthalten

Eine dynamische Website arbeitet auf jeder Anfrage: Code ausführen, eine Datenbank abfragen, HTML zusammenstellen. Diese Arbeit geschieht auf Servern, die rund um die Uhr aktiv bleiben müssen, auch wenn niemand besucht.

Eine statische Seite erledigt die Arbeit einmal, während der Bauzeit. Das fertige HTML wird weltweit in CDN-Kantenknoten kopiert und aus dem Cache ausgeliefert:

- **Keine Berechnung pro Anfrage**: Das Bereitstellen einer statischen Datei nutzt einen winzigen Bruchteil der Energie der Darstellung einer Seite bei Bedarf.
- **Keine immer verfügbare Datenbank**: Datenbanken und Anwendungsserver verbrauchen kontinuierlich Strom und statische Seiten haben keine der beiden Seiten.
- **Cache-friendly standard**: Eine Anfrage, die einen Randcache trifft, bewegt Elektronen kaum über den Netzwerk-Hop.
- **Tiny payloads**: Markdown-generiertes HTML wird durch die Konstruktion schlank, ohne dass die Laufzeit des Frameworks an den Browser verschickt wird.

Multiplizieren Sie das für jeden Besucher, jeden Monat, für das Leben der Website, und der Unterschied ist nicht symbolisch.

## Der Rippeleffekt: Dauerhaftigkeit ist Nachhaltigkeit

Statische Sites auch gut altern. Eine 2026 errichtete Hugo oder Astro-Site kann noch 2036 wiederaufgebaut und bedient werden: Der Inhalt ist schlicht Markdown, die Toolchain ist Open Source und die Ausgabe ist ein Ordner der Dateien. Sites, die aufgegeben werden, weil ihre Plattform heruntergefahren wurde oder ihre WordPress-Installation wurde nicht zu wartbaren Kraft-Rebuilding: Umschreiben des gleichen Inhalts auf neue Infrastruktur ist seine eigene Art von Verschwendung.

Der Besitz Ihres Inhalts als Markdown in Git ist die langlebige Option mit geringem Abfall.

### Wie man das Carbon Ihrer Website misst

Sie können nicht verbessern, was Sie nicht messen:

- **[Website Carbon Calculator](https://www.websitecarbon.com/)**: schätzt die Gramme von CO2 pro Seitenansicht und vergleicht Ihre Website mit anderen.
- **[Ecograder](https://ecograder.com/)** gibt einen vergleichbaren Kostenvoranschlag, neben Leistung und Zugänglichkeitsergebnis.
- Auch Echtzeit-Metriken sind wichtig: Größte Contentful Paint und übertragene Gesamtbytes korrelieren direkt mit Energie pro Ansicht.

Die [LightCMS](https://lightcms.me) Seite zeigt eine Live-Kohlenstoffbewertung in seiner Fußzeile an, mit dem gleichen Messansatz, den diese Anleitung empfiehlt.

## Wie man ein grüneres Web baut

1. **Servieren Sie statisch von einem CDN**: der größte Hebel für Content-Sites.
2. **Wählen Sie grüne Hosting**: Provider, die Rechenzentren mit erneuerbarer Energie versorgen (mehrere große Anbieter veröffentlichen jetzt ihre Energiequelle).
3. **weniger JavaScript**: jedes Kilobyte wird geparst, ausgeführt und bezahlt auf der Besucherbatterie.
4. **Komprimiere und Cache-Bilder**: Medien sind normalerweise der schwerste Teil einer Seite, also bedienen Sie moderne Formate mit langen Cache-Lebenszeiten.
5. **Halten Sie Inhalte haltbar**: Klares Markdown und offene Formate bedeuten, dass eine Website nie von Grund auf neu aufgebaut werden muss.
6. **Veröffentlichen Sie absichtlich**: eine kleine, hochwertige Website, die die Leute wieder zu schlagen eine breitgefächerte, die niemand liest.

## Wo [LightCMS](https://lightcms.me) passt

[LightCMS](https://lightcms.me) folgt diesen Prinzipien: Es überträgt deinen Inhalt als Markdown in dein eigenes Repository, ein statischer Site-Generator veröffentlicht es, und das Edge Netzwerk Ihres Hosts dient als zwischengespeicherte Dateien. Das CMS läuft nur, während Sie schreiben. Keine Produktionsdatenbank bedient Leser, die CDN tut es.

- [Statische Sites vs dynamische Sites](/blog/static-vs-dynamic/) deckt die Architektur in Tiefe ab.
- [Top statische Site-Hosting-Plattformen](/misc/top-static-site-hosting/) vergleicht den Ort zu einem nachhaltigen Host.
- [Warum LightCMS](/blog/why-this/) erklärt die Philosophie hinter langlebigem Leichtgewicht Publishing.

---

## Häufig gestellte Fragen

### Wie viel CO2 emittiert eine typische Webseite?

Schätzungen variieren je nach Methode, aber eine typische Seitenansicht emittiert irgendwo von einem Bruchteil eines Gramm auf etwa ein Gramm CO2; schwere, schlecht zwischengespeicherte Seiten emittieren erheblich mehr. Statische, zwischengespeicherte Seiten sitzen am unteren Ende.

### Ist grünes Hosting wichtig?

Ja. Die Energie von Datenzentren ist der dominierende Faktor auf der Grundfläche eines Ortes. Das Hosting auf erneuerbarer Infrastruktur reduziert sie erheblich.

### Ist ein statisches Blog eco freundlich?

Zu den grünsten verfügbaren Optionen: Cache-Dateien, die aus einem Kantennetz geliefert werden, keine immerwährende Datenbank, und Inhalte, die seit Jahrzehnten lesbar und rekonstruierbar bleiben.

### Was ist nachhaltiges Webdesign?

Eine Praxis, die die Energiekosten des Internets minimiert: schlanke Seiten, effizienter Code, regenerativer Hosting, langlebiger Inhalt und gemessene Auswirkungen. Statische Architektur ist die Grundlage.
