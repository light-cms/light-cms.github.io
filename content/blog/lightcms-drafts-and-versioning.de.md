---
title: "Drafts, Revisions, and Rollbacks in a Git Based CMS"
description: "How Git based content workflows handle drafts, commit history, pull request review, and rollbacks for static site publishing."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
tags:
  - hellcms
  - git
  - workflow
  - kollaborieren
---

A Git based CMS can handle drafts, revisions, and rollbacks by storing content as files in a repository and using Git history as the audit trail. Der praktische Wert ist einfach: Sie können Arbeiten speichern, ohne sie zu veröffentlichen, die Änderungen zu überprüfen und eine fehlerhafte Bearbeitung rückgängig zu machen, ohne eine komplette Datenbank wiederherzustellen.

## Entwürfe als Datei-Status

In vielen statischen Site-Workflows wird ein Entwurf durch Frontmatter wie z.B. `Entwurf: true` repräsentiert. Die Datei kann im Projektarchiv existieren, während der statische Site-Generator sie während der Produktions-Builds überspringt.

```yaml
---
Titel: "Beitragsentwurf "
Datum: 2026-10-16T09:40:00Z
Entwurf: true
---
```

Dieser Ansatz hält den Entwurf des Staates inhaltlich nahe. Der Ausgleich ist sichtbar: Jeder mit Zugriff auf das Projektarchiv kann die Entwurfsdatei sehen, auch wenn die öffentliche Seite sie nicht rendert.

## Revisionen durch Commits

Jede gespeicherte oder veröffentlichte Änderung kann ein Git-Commit erstellen. Dies gibt Ihnen einen lesbaren Verlauf für Markdown-Dateien, einschließlich Diffs, Autor-Metadaten und Zeitstempel.

| Benötigt                            | Git based workflow                                     | Abschlag                                                   |
| :---------------------------------- | :----------------------------------------------------- | :--------------------------------------------------------- |
| Änderungen ansehen                  | 'git diff' oder 'pull request diff                     | Erfordert das Löschen von Commit-Nachrichten nützlich sein |
| Auditverlauf                        | Commit-Log und Schuld                                  | Repository-Zugriffsmodell steuert wer es inspizieren kann  |
| Inhalt wiederherstellen             | Commit zurücksetzen oder Dateiversion wiederherstellen | Rückgängig kann Konfliktlösung erfordern                   |
| Vor der Veröffentlichung überprüfen | Branch und Pull-Request                                | Fügt Prozess-Overhead für kleine Bearbeitungen hinzu       |

Für Teams bieten Pull-Requests ein redaktionelles Review-Tor. Für Solo-Autoren können direkte Commits zu einem Hauptzweig schneller sein, aber sie entfernen den Überprüfungsschritt.

## Rollback als normale Git-Operation

Wenn ein veröffentlichter Beitrag einen Fehler aufweist, erlaubt Git es Ihnen, die Überträge, die ihn einführten, zurückzusetzen oder eine frühere Version der Datei wiederherzustellen. Nachdem die Korrektur übergeben wurde, baut Ihre CI/CD Pipeline die Seite neu und stellt sie zur Verfügung.

Ein Datei-Level-Rollback ist enger als eine Datenbankwiederherstellung. Es kann einen Beitrag rückgängig machen, während andere Änderungen der letzten Zeit intakt bleiben.

## Workflow auswählen

Verwenden Sie direkte Commits, wenn die Geschwindigkeit wichtig ist und das Risiko eines Fehlers gering ist. Verwenden Sie Zweige und Pull-Requests, wenn Inhalte überprüft, legale Genehmigung oder koordiniertes Release-Timing benötigen. Der beste Workflow ist der leichteste Workflow, der Ihrem Team immer noch die Review- und Recovery-Steuerung gibt, die es benötigt.

For related reading, see [The LightCMS Editor Tour](/blog/lightcms-editor-tour/) and [What Is a Git based CMS?](/blog/Git based-cms-explained/).
