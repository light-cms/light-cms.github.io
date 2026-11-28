---
title: "Newsletter-Automatisierung ohne kostenpflichtiges Abonnement"
description: "Verwenden Sie GitHub und Newsy, um Leser über neue Beiträge ohne separate E-Mail-Marketing-Plattform zu informieren."
date: "18.09.20T01:50:00.000Z"
draft: falsch
tags:
  - Newsletter
  - neugierig
  - github
  - publizieren
slug: newsletter-email-Automatisierung
---

Sie können die Leser über neue Beiträge von einem Git-basierten Blog informieren, ohne eine separate E-Mail-Marketing-Plattform auszuführen. [Newsy](https://github.com/light-cms/newsy) verwendet GitHub Repository-Aktivität und gibt Abonnements ab, um Beiträge durch GitHub Benachrichtigungen zu aktualisieren.

## Wo traditionelle Newsletter-Tools Overhead hinzufügen

E-Mail-Newsletter-Plattformen können nützlich sein, aber sie fügen operative Arbeit für kleine technische Blogs hinzu:

1. Listenverwaltung: Sie verwalten die Teilnehmerdaten in einem separaten System.
2. Duplizieren von Veröffentlichungen: Sie kopieren oft einen Markdown-Beitrag in einen E-Mail-Editor oder eine Vorlage.
3. Lieferbarkeit: Sie überwachen Bounces, Spambeschwerden, AbsenderRuf und Authentifizierungsdatensätze wie SPF, DKIM und DMARC.
4. Tracking- und Privatsphäre-Entscheidungen: Viele Plattformen beinhalten Open Tracking, Click-Tracking und Management Features, die Sie konfigurieren und offenlegen müssen.

Für einen entwicklerfokussierten Blog können diese Funktionen mehr sein als der Workflow. Der Ausgleich besteht darin, dass Sie auf Marketing-Automatisierung, Segmentierung und Analytik verzichten.

## Wie Newsy GitHub Benachrichtigungen verwendet

Newsy verbindet die Veröffentlichung von Events in einem GitHub Repository mit einem Abonnement-Thread. Der folgende Workflow beschreibt das beabsichtigte Modell. Überprüfen Sie jeden Schritt gegen die aktuelle Newsy-Implementierung, bevor Sie es als Produktdokumentation behandeln.

```text
Writer veröffentlicht in LightCMS
 <unk>
 <unk>
 Commit pushed to GitHub repository
 <unk>
 <unk>
Newsy detects a new or recently published post
 <unk>
 <unk>
<unk> 
 Newsy posted a comment to a designated announcement issue
 <unk>
 <unk>
GitHub benachrichtigt Benutzer, die dieses Problem abonniert haben
```

### Lieferschritte

1. Commit-Erkennung: Eine Veröffentlichungs-Aktion erstellt oder aktualisiert eine Markdown-Datei im Projektarchiv. Newsy kann auf einen neuen Beitrag oder einen `-Entwurf achten: false` Änderung.
2. Ankündigungsthread: Newsy veröffentlicht das Update auf ein spezifiziertes GitHub-Problem, wie zum Beispiel eine `Ankündigung` mit einem `Newsletter` Label.
3. Leserabonnement: Leser abonnieren, indem sie das GitHub Problem beobachten oder abonnieren.
4. Benachrichtigung: GitHub sendet Benachrichtigungen basierend auf den GitHub Benachrichtigungseinstellungen jedes Abonnenten.

## Zu berücksichtigende Auszahlungen

Dieser Ansatz passt besser zu Fachpublikum als zu einem allgemeinen Publikum.

- Anforderung eines GitHub Kontos: Leser benötigen ein GitHub Konto zum Abonnieren. Das ist für viele Entwickler-Blogs vernünftig, kann aber nichttechnische Leser blockieren.
- Einfaches Benachrichtigungsformat: GitHub Benachrichtigungen sind kein Ersatz für Marken-Marketing-E-Mails. Sie haben nur begrenzte Kontrolle über Layout und Styling.
- Begrenzte Analytiken: Sie erhalten keine typischen E-Mail-Marketing-Kennzahlen wie offene Kurse oder Klick-Durchlaufraten. Sie können die Teilnahme am Thema überprüfen, aber das ist nicht dasselbe wie Kampagnenanalytik.

## Checkliste einrichten

1. Newsy: Fügen Sie die [Newsy GitHub App](https://github.com/apps/newsletter-newsy/installations/select_target) in das Repository mit Ihrem Blog ein.
2. Erstellen Sie den Einstiegspunkt: Erzeugen oder erstellen Sie einen Abonnement-Link/Button, der Leser auf das Ankündigungsproblem verweist.
3. Fügen Sie den Link zu Ihrer Site hinzu: Platzieren Sie den Link zum Abonnieren in Ihrem Blog-Layout, Fußzeile oder Beitragsvorlage.
4. Testen Sie den Fluss: Veröffentlichen Sie einen Entwurf, bestätigen Sie den Commit, bestätigen Sie den Kommentar und überprüfen Sie, dass ein abonniertes Konto eine Benachrichtigung erhält.

Weitere Informationen zum Setup finden Sie unter [selbstverwaltetes LightCMS](/blog/selfhost/), [Entwurf, Revisionen und Veröffentlichungen](/blog/lightcms-drafts-and-versioning/)und [Erste Schritte mit LightCMS](/getting-started/).
