---
title: Was ist der Jamstack?
description: "Jamstack ist eine Web-Architektur, die vordefinierte Markup bedient, APIs für dynamische Fähigkeiten verwendet und JavaScript für Interaktivität bei Bedarf hinzufügt."
serial: 20
date: 2026-10-14T14:10:00Z
draft: false
tags:
  - jamstack
  - architektur
  - statische Seiten
  - api
---
Jamstack ist eine Webarchitektur, die vordefinierte Markup, APIs und JavaScript kombiniert. Anstatt jede Seite von einem Anwendungsserver auf jede Anfrage zu rendern eine Jamstack-Website liefert vorkompilierte Dateien von einem CDN und verwendet APIs oder Client-seitige JavaScript für dynamische Features.

## The three Jamstack components| Component | Role | Example |

\| :--- | :--- | :--- | | Markup | Prebuilt HTML generated during a build | Static site generator output | | APIs | Dynamic capabilities outside the page render | Forms, search, payments, auth | | JavaScript | Client-side interactivity | Search UI, comments, personalization |

Die Architektur ist nicht dieselbe wie "kein JavaScript" oder "kein dynamisches Verhalten". Es bedeutet, dass der Standardlieferpfad vorkonfiguriert und zwischengespeichert wird, während dynamisches Verhalten bewusst hinzugefügt wird.

## Warum Teams Jamstack verwenden

Jamstack-Websites können schnell, cacheable und operationell einfach für Content-schwere Projekte sein. They also fit well with Git based workflows: content changes trigger builds, and deployments produce immutable assets.

Der Ausgleich ist die Komplexität an den Kanten. Authentifizierung, Vorschauen, Personalisierung und Echtzeitdaten erfordern häufig Dienstleistungen von Drittanbietern, serverlose Funktionen oder Hybrid-Rendering.

## Jamstack in moderner Praxis

Moderne Rahmen verwischen die Linie zwischen statisch und dynamisch. Astro, Next.js, SvelteKit und andere können einige Routen vorführen und andere dynamisch machen. Dies macht "Jamstack" weniger eine strenge Regel und mehr von einem nützlichen Standardwert: Vorbauen, was Sie können, verwenden Sie dynamische Dienste wo immer nötig.

Für verwandtes Lesen siehe [Static vs. Dynamic Sites](/blog/static-vs-dynamic/) und [Was ist ein statischer Site-Generator?](/blog/what-is-a-static-site-generator/).
