---
title: "Entwurfe, Revisionen und Rollbacks: Versionskontrolle für Writer"
description: "LightCMS verwandelt Git History in einen redaktionellen Workflow: Entwürfe, Commits, Pull-Requests und Ein-Klick-Rollback, ohne einen Autor zu bitten, Git zu lernen."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
keywords:
  - git versioning content
  - cms Entwurfsworkflow
  - content rollback
  - markdown Versionsverlauf
  - lightcms Entwürfe
preview: /og-image.webp
taxonomies:
  tags:
    - hellcms
    - git
    - workflow
    - kollaborieren
---

Versionskontrolle ist das beste Argument für ein Git-basiertes CMS und das am schlechtesten erläuterte. Autoren wollen nichts über Commits, schnelle Vorwärts- oder Bäume hören. Sie wollen drei Dinge wissen: **Kann ich das speichern, ohne es zu veröffentlichen, sehen, was sich geändert hat, und rückgängig machen, wenn ich es falsch gemacht habe?**

Git antwortet alle drei ohne einen Schriftsteller lernen Git.

---

## Der Entwurf bleibt ein Entwurf

`Entwurf: true` im vorderen Bereich ist der gesamte Mechanismus. Wenn du einen Beitrag in [LightCMS]erstellt oder bearbeitest (https://lightcms.me), die Flagge lebt in der Frontmasse der Datei und Ihr SSG überspringt sie während des Bauvorgangs. Der Beitrag sitzt im Repository, überprüfbar und sicher, und nie auf der Live-Seite.

Bei der Veröffentlichung zu `false` umdrehen und das nächste Build holt es auf. Keine separate "Entwürfe Datenbank" kann von dem abweichen, was in Ihrem Repository sitzt, und ein Entwurf kann nicht lecken, weil zwei Systeme über seinen Zustand uneinig sind.

Da ein Entwurf nur eine Datei ist, funktioniert auch alles andere daran: Er kann auf einem Zweig sitzen, leben hinter einem Pull-Request, von jemand anderem bearbeitet werden und von Zeile für Zeile getrennt werden, bevor es live.

---

## Jede Speicherung ist ein Commit

Jede Veröffentlichung in [LightCMS](https://lightcms.me) erstellt einen Commit mit einer kohärenten Nachricht, die dir gibt:

- **Schließe den Verlauf ab.** Wer hat was geändert und wann. Kein Plugin erforderlich.
- \*\*True Diffs. \*\* Markdown Diffs sind lesbar, im Gegensatz zu Zeilen in einer `post_content`-Spalte.
- **Schuld, das bedeutet etwas.** Du kannst fragen, wann ein Absatz geändert wurde und eine Antwort erhalten.
- **Kostenlose Backups.** Jeder Klon des Projektarchivs ist eine vollständige Kopie Ihres Inhalts.

Für einen Solo-Autor ist dies eine unsichtbare Infrastruktur. Für ein Team ist es der Audit-Track, für den die meisten kommerziellen CMSs berechnen.

---

## Branches und Pull-Requests: Editorial Review, Richtig

[LightCMS](https://lightcms.me) kann in zwei Modi publiziert werden und die Wahl zwischen ihnen ist die Wahl deines Editorialprozesses:

| Modus               | Strömung                                                       | Beste für                                                        |
| :------------------ | :------------------------------------------------------------- | :--------------------------------------------------------------- |
| **Direktes Commit** | Veröffentlichen → Commit → CI Builds → live                    | Einfache Autoren, risikoarme Bearbeitungen, schnelle Korrekturen |
| **Pull-Anfrage**    | Veröffentlichen → PR → Überprüfen → Zusammenführen → CI-Builds | Teams, Entwürfe mit Aufsicht, sensible Änderungen                |

Der Pull-Request-Modus verdient die Aufmerksamkeit. Es gibt Ihnen ein echtes Redaktionsport: Ein Kollege liest die vorgeschlagene Markdown vor. hinterlässt einen Kommentar zu dem exakten Satz, dem sie widersprechen, und fusioniert, wenn er richtig ist. Dieses Tor läuft auf GitHubs nativen Bewertungswerkzeugen statt auf einem maßgeschneiderten Genehmigungssystem, das Ihre Inhalte an einen Hersteller sperrt.

Aktivieren Sie den Branchenschutz und "Veröffentlichen" bedeutet "zur Überprüfung einreichen". Deaktivieren und "veröffentlichen" bedeutet "veröffentlichen".

---

## Rollback: Die Feature Leute vergessen zu fragen

Jedes CMS sollte schnell eine Frage beantworten: **Etwas stimmt nicht, also wie behebe ich das?**

Mit Git-basierten Inhalten ist die Antwort ein Rückwärt:

1. Öffne den Verlauf der Datei in GitHub (oder [LightCMS](https://lightcms.me)).
2. Wählen Sie die letzte gute Version.
3. Revert.

Die Korrektur wird wie jede andere Bearbeitung, Ihre Pipeline neu aufgebaut, und die schlechte Version ist verschwunden, in der Regel innerhalb von einer Minute auf einem modernen Host. Das Wiederherstellen einer Datenbanksicherung um 2:00 Uhr bringt auch jede _andere_ Änderung, die dazwischen vorgenommen wurde, zurück. Mit der Historie pro Datei können Sie einen Beitrag rückgängig machen, nicht die ganze Seite.

---

## Warum nicht einfach Wort und E-Mail verwenden?

Weil diese Rundreise inhaltlich verliert. Die Version im Anhang ist nicht die Version auf der Website, niemand weiß, welche Datei kanonisch ist, und schließlich veröffentlicht jemand `final-v3-USE-THIS.md`. Ein geteiltes Repository mit einem visuellen Editor bricht die Schleife ein: eine Datei, eine Chronik, eine Veröffentlichungsschaltfläche.

---

## Ein praktisches Team Setup

Für ein kleines Team hält sich das Arrangement tendenziell bei:

- **Hauptzweig ist immer verfügbar.** Nur Zusammenschlüsse erreichen ihn.
- **Features und Entwürfe auf Zweigen.** Langform-Arbeit bleibt in Bearbeitung ohne versteckt zu werden.
- **Pull requests for anything editorially sensitive**, direct commits for tyo fixes, because required review on a comma correction ensure people will work around the process.
- **Tag- oder Meilenstein-Releases** wenn du auf einem Zeitplan veröffentlichst. Ein fehlgeschlagener Deploy kann dann auf eine bekannte Reihe von Änderungen zurückverfolgt werden.

Nichts davon ist innerhalb von [LightCMS]konfiguriert (https://lightcms.me). Es ist die gängige GitHub Praxis, worum es geht: Das CMS erbt einen Workflow, den Ihr Projektarchiv bereits hat.

---

## Häufig gestellte Fragen

### Müssen Autoren Git lernen?

Nein. Sie verwenden den Editor und einen Veröffentlichen-Button. Branchen, Commits und Pull-Requests existieren unterhalb und werden nur aufgedeckt, wenn Sie diese verwenden.

### Kann ich eine alte Version eines Beitrags wiederherstellen?

Ja. Das Zurücksetzen auf einen früheren Commit stellt den Inhalt dieser Datei wieder her und der nächste Build veröffentlicht ihn.

### Sind Entwürfe für die Öffentlichkeit sichtbar?

Nein. Ein Beitrag mit `draft: true` ist von der Build ausgeschlossen, so dass er niemals die eingesetzte Seite erreicht. Es ist für jeden sichtbar, der Zugriff auf das Projektarchiv hat, was der Sinn ist.

### Was passiert, wenn zwei Personen den gleichen Beitrag bearbeiten?

Die zweite Commit-Konflikte, und Git kennzeichnet diese explizit und nicht stillschweigend überschreiben. Für die meisten Teams entfernt die Veröffentlichung in einen Zweig und das Überprüfen mit einem Pull-Request das Problem, bevor es geschieht.

### Behalte [LightCMS](https://lightcms.me) eine eigene Kopie meines Inhalts?

Nein. Das Projektarchiv ist die Quelle der Wahrheit, das selbe [Null-Einsperrprinzip](/blog/what-is-lightcms/), das den Ansatz zu wählen lohnt.

---

Siehe [Start von einer Startervorlage](/blog/start-with-a-lightcms-template/) um ein Repository mit diesem Workflow einzurichten, oder [der Editor Tour](/blog/lightcms-editor-tour/), um die Schreibseite davon zu sehen.
