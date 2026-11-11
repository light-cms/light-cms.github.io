---
title: "Was ist LightCMS? Das Git-basierte CMS für statische Sites"
description: "LightCMS ist ein selbst gehostetes, Git basiertes CMS mit einem visuellen WYSIWYG Editor. Es überträgt schlichte Markdown in Ihr Projektarchiv und lässt es von Ihrer bestehenden CI/CD bereitstellen."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
keywords:
  - was ist Lightcms
  - hellcms
  - Git basierte cms
  - markdown cms
  - visueller Editor für Markdown
preview: /og-image.webp
taxonomies:
  tags:
    - hellcms
    - cms
    - git
    - markdown
---

**LightCMS** ist ein Content-Management-System, das Ihre Inhalte in Ihrem Git-Repository als einfache Markdown-Dateien behält.

Keine Datenbank. Keine Sperre. Melden Sie sich mit GitHub an, wählen Sie ein Repository, schreiben und veröffentlichen. [LightCMS](https://lightcms.me) überträgt die Änderungen für Sie.

## Das Problem [LightCMS](https://lightcms.me) löst

Statische Site-Generatoren machen das Publishing schnell, günstig und sicher. Aber das Schreiben eines Beitrags in einem Code-Editor kann schwierig sein, wenn Sie nicht an diesen Workflow gewöhnt sind.

Dieser Workflow eignet sich für Entwickler. Es ist nicht für alle, die schreiben wollen.

[LightCMS](https://lightcms.me) entfernt diese Reibung, ohne Git zu entfernen. Entwickler behalten Inhalte im Projektarchiv und Autoren erhalten einen browserbasierten Editor zum Reproduzieren und Publizieren.

---

## So funktioniert [LightCMS](https://lightcms.me)

1. **Melden Sie sich bei GitHub an.** LightCMS verwendet GitHub OAuth, so dass Sie kein separates Kontosystem benötigen.
2. **Verbinde ein Projektarchiv.** Wähle ein Repository, das Markdown-Inhalte enthält, inklusive Sites, die mit Astro, Hugo, Zola, Eleventy, Jekyll, SvelteKit oder Next.js erstellt wurden.
3. **Schreiben Sie visuell.** Der TipTap-basierte Editor unterstützt Überschriften, Links, Listen, Tabellen, Aufgabenlisten, Mathematik, Syntax-hervorgehobenen Code und Drag-and-Drop-Medien.
4. **Veröffentlichen.** [LightCMS](https://lightcms.me) schreibt die Datei und die Vorspitze, überträgt sie dann direkt oder öffnet einen Pull-Request, wenn du eine Überprüfung möchtest.
5. **Deploy.** GitHub Actions, Cloudflare Pages, Vercel, oder Netlify können Ihre Website neu aufbauen und verteilen. Autoren bleiben im Browser und die Betreuer behalten ihren Git-Workflow.

Schritt 4 erstellt einen normalen Commit. Wenn du aufhörst, [LightCMS](https://lightcms.me) zu verwenden, baut deine Seite immer noch auf, weil dein Inhalt bereits in deinem Projektarchiv lebt.

---

## Was macht es anders

Es gibt mehrere fähige Gitt-basierte CMS-Optionen ([Decap CMS](/comparison/netlifycms), TinaCMS, Keystatic, Seiten CMS) und [LightCMS](https://lightcms.me) verfolgen einen anderen Ansatz in einigen Bereichen:

|                    | [LightCMS](https://lightcms.me)                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Speicher**       | Dein GitHub Repository (Markdown + YAML Frontfrage)                                                             |
| **Editor**         | TipTap-basierter WYSIWYG-Editor mit Mathematik (KaTeX), Code-Hervorhebung, Tabellen, Aufgabenlisten und Medien  |
| **AI**             | Integrierter Copilot für Umrisslinien, Rewrites und Grammatik unter Verwendung von OpenAI-kompatiblen Anbietern |
| **Sprache**        | Whisper-Power-Diktation im Editor                                                                               |
| **Newsletter**     | Veröffentlichen Sie Markdown und senden Sie Updates mit Newsy von GitHub                                        |
| **Hosting Modell** | Selbstgehostet, Apache 2.0 lizenziert, läuft auf jedem Node.js Host                                             |
| **Einsperren**     | Keine: Ihr Inhalt bleibt in Ihren eigenen Dateien                                                               |

[LightCMS](https://lightcms.me) umfasst das Entwerfen, Bearbeiten, Veröffentlichen und Newsletter-Verteilen, ohne eine separate Datenbank hinzuzufügen.

---

## Was [LightCMS](https://lightcms.me) ist nicht

- \*\*Es ist kein Datenbank-Erst-CMS. \* Wenn Sie relationale Inhalte, komplexe Rollen und Berechtigungen oder eine app-förmige Inhalts-API benötigen, eine kopflose Plattform wie [Payload](/comparison/lightcms-vs-payload-cms) könnte besser passen.
- **Es ist kein Hosting-Dienst.** [LightCMS](https://lightcms.me) verwaltet Inhalte; dein Host (Cloudflare Pages, Vercel, Netlify, GitHub-Seiten) dient der Website. Siehe [statische Site-Hosting compared](/misc/top-static-site-hosting).
- **Es ist kein Thema oder ein Site-Generator.** Es überträgt Inhalte in den statischen Site-Generator, den Sie bereits ausgeführt haben.

---

## Wer es ist für

- **Solo Schriftsteller und Blogger** die ihren Inhalt ohne zusätzliche Infrastruktur besitzen wollen.
- **Teams** in denen Entwickler die Website betreuen und Nicht-Entwickler Inhalte schreiben und veröffentlichen.
- **Statische Site-Projekte** die Markdown in einem Code-Editor überarbeitet haben, aber trotzdem einen Git-basierten Workflow wollen.

Wenn das so klingt, kannst du [eine Startervorlage kopieren](/blog/start-with-a-lightcms-template/) um ein Repository zu erhalten, Build Setup und Deployment-Workflow bereit für Ihren ersten Beitrag.

---

## Häufig gestellte Fragen

### Ist [LightCMS](https://lightcms.me) kostenlos?

[LightCMS](https://lightcms.me) ist Open Source unter der Apache-2.0-Lizenz und als selbstgehostet konzipiert. Sie zahlen nicht pro Sitzplatz und können ihn überall dort aufnehmen, wo Sie Node.js betreiben.

### Arbeitet [LightCMS](https://lightcms.me) mit Hugo und Astro?

Ja. Hugo und Astro lesen Markdown Dateien mit YAML Frontmatter aus einem Repository, was [LightCMS](https://lightcms.me) schreibt. Gleiches gilt für Zola, Eleventy, Jekyll, und SvelteKit.

### Wo leben meine Inhalte?

In deinem Projektarchiv als `.md` Dateien mit Frontmasse. Es gibt keine separate Datenbank und keinen Exportschritt.

### Müssen Autoren Git kennen?

Nein. Autoren verwenden den Editor und veröffentlichen Button. Commits, Zweige und Pull-Requests geschehen im Hintergrund.

### Wie unterscheidet sich dies von WordPress?

WordPress speichert Inhalte in MySQL und stellt Seiten mit PHP auf Anfrage dar. [LightCMS](https://lightcms.me) schreibt statische Dateien, die ein CDN bedienen kann. Für einen tieferen Vergleich siehe [static vs dynamic sites](/blog/static-vs-dynamic/) und [WordPress alternatives](/blog/wordpress-alternatives/).
