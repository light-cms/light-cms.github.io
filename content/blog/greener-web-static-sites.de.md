---
title: Statische Sites und umweltfreundliche Web-Erstellung eines umweltfreundlicheren Netzes
description: >-
  Wie statische Standorte und effizienter Umgang mit Vermögenswerten den Energieverbrauch und Kohlenstoffemissionen reduzieren können.
date: '2026-10-14T13:30:00.000Z'
draft: false
tags:
  - ko2
  - kohlenstoff
  - oxyd
  - energien
  - webseite
  - kohlenstoff
  - fußabdruck
  - teilen
slug: greener-web-static-sites
---
Statische Seiten können die Energie reduzieren, die benötigt wird, um Webseiten zu bedienen, indem sie Arbeit von jeder Anforderung zur Erstellung von Zeit verschieben und zwischengespeicherte Dateien von einer CDN bedienen. Sie sind nicht automatisch kohlenstoffarm, aber bei Content-schweren Websites vermeiden sie oft unnötige serverseitige Berechnungen.

## Warum statische Lieferung weniger Energie verbrauchen kann

Dynamische Websites führen üblicherweise Anwendungscode aus, fragen eine Datenbank ab und generieren für jede Anfrage HTML.

Statische Sites generieren HTML während eines Builds und liefern die resultierenden Dateien wiederholt aus.

| **Faktor**               | **Dynamischer Abfragepfad**                                    | **Statischer zwischengespeicherter Pfad**                                  |
| :----------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------- |
| Arbeit pro Anfrage       | Anwendungslogik und Datenbankabfragen können ausgeführt werden | Eine Datei kann aus dem Cache ausgeliefert werden                          |
| Immer eine Infrastruktur | Ein App-Server und -Datenbank sind oft erforderlich            | Builds laufen auf Bedarf; Hosting kann Datei- oder CDN-basierend sein      |
| Caching                  | Möglich, aber oft komplexer                                    | Eine natürliche Passform für unveränderliche oder statische Vermögenswerte |
| Payload-Steuerung        | Abhängig von der App und dem Client-Paket                      | Abhängig von Build-Output und Asset-Optionen                               |

Der tatsächliche Einfluss hängt von Verkehr, Cache-Trefferrate, Hosting-Energiequellen, Seitengewicht und Client-seitigem JavaScript ab.

## Wie man Kohlenstoffauswirkungen auf Webseiten misst

Schätzungen sind nützlich für die Richtung, nicht für die genaue Buchführung. Verwenden Sie mehrere Werkzeuge und verfolgen Sie Änderungen im Laufe der Zeit.

- [Website Carbon Calculator](https://www.websitecarbon.com/) schätzt Emissionen pro Seitenansicht.
- [Ecograder](https://ecograder.com/) bietet Nachhaltigkeitsorientiertes Scoring und Empfehlungen.
- Browser-Performance-Metriken wie zum Beispiel die grösste Contentful Paint, die Gesamtübertragungsgröße und die Kosten für die Ausführung von JavaScript helfen technische Treiber für das Seitengewicht zu identifizieren.

Eine praktische Basis ist die Messung Ihrer Top-Landeseiten, die Aufzeichnung der Übertragungsgröße und der wichtigsten Leistungsmetriken, dann wiederholen Sie nach den Optimierungen.

## Praktiken, die den Seiteneffekt verringern

1. Servieren Sie statische Dateien von einem CDN: Cache-HTML, CSS, JS und Bilder in der Nähe von Benutzern.
2. JavaScript reduzieren: Nur den für die Seite benötigten Client-Seitencode versenden.
3. Medien optimieren: Bilder komprimieren, moderne Formate verwenden, wo es angebracht ist, und Assets korrekt dimensionieren.
4. Cache-Kopfzeilen: Lange Cache-Lebenszeiten reduzieren wiederholte Übertragungen.
5. Hosting sorgfältig: Data Center energy sourcing wirkt sich auf den Fußabdruck aus.
6. Halten Sie den Inhalt langlebig: Plain Markdown in Git reduziert den Wiederaufbau und die Migrationsverschwendung im Laufe der Zeit.

## Abschalten, um im Auge zu behalten

Statische Architektur ist keine vollständige Nachhaltigkeitsstrategie. Eine statische Website mit großen Bildern, Autoplay-Video, schweren Skripten von Drittanbietern oder mangelhaftem Caching kann einen größeren Fußabdruck haben als eine sorgfältig optimierte dynamische Website. Die nützliche Frage ist nicht "statisch oder dynamisch?", sondern "Wie viel Arbeit und Daten benötigt jede Seitenansicht? "

Für ähnliche Architekturanleitungen siehe [Statische Sites vs. Dynamische Sites](/blog/static-vs-dynamic/) und [Warum LightCMS](/blog/why-this/).
