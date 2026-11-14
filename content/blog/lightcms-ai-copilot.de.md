---
title: "Die LightCMS KI Copilot: Hilfe entwerfen, die in Ihrem Repository bleibt"
description: "Der eingebaute KI-Copilot entwirft Konturen, schreibt Absätze neu und behebt die Grammatik innerhalb von LightCMS und läuft auf jedem OpenAI-kompatiblen Anbieter, den Sie wählen."
serial: 32
date: 2026-10-16T09:20:00Z
draft: false
keywords:
  - ai cms
  - ai Schreiben Assistent Markdown
  - lightcms ai copilot
  - openai kompatible cms
  - ai Inhalt Workflow
preview: /og-image.webp
taxonomies:
  tags:
    - hellcms
    - ai
    - schreiben
    - workflow
---

Der schnellste Weg, ein Schreibwerkzeug unbeliebt zu machen, ist, es mit generierten Text auszufüllen, nach dem Sie nicht gefragt haben. Die [LightCMS](https://lightcms.me) KI Copilot funktioniert anders: Das Modell hilft, und Sie behalten den Besitz des Entwurfs.

Es ist kein Chat-Fenster. Es handelt sich um eine Reihe von Aktionen, die mit dem Text arbeiten, den Sie bereits bearbeiten.

## Was es macht

Wählen Sie einen Absatz oder wählen Sie nichts, und der Copilot bietet Ihnen vier Möglichkeiten:

- **Umrandung**: Verwandeln Sie ein Thema in eine Struktur, die Sie akzeptieren, neu ordnen oder löschen können.
- **Rephrase**: Reschreibe die gleiche Idee in einem anderen Ton. Sie können einen langen Satz straffen, eine Notiz formeller machen oder eine harte Linie weichen.
- **Erweitern**: Verwandeln Sie eine kurze Idee in einen ausführlicheren Entwurf, wenn Sie wissen, was Sie sagen sollen, aber nicht, wie viel Sie schreiben müssen.
- **Grammatik**: Säubere Satzzeichen, Grammatik und Tipps, bevor du veröffentlichst.

Jedes Ergebnis erscheint im Dokument als bearbeitbarer Text. Sie können es akzeptieren, ändern oder rückgängig machen. Es wird nichts gespeichert, bis Sie es veröffentlichen, und es wird nichts veröffentlicht, bis Sie es gelesen haben.

## Bring dein eigenes Modell

LightCMS arbeitet mit jedem OpenAI-kompatiblen Endpunkt.

| Anbieter       | Warum sich die Leute dafür entscheiden                                       |
| :------------- | :--------------------------------------------------------------------------- |
| **OpenAI**     | Bekannte Modelle mit breiter Kapazität                                       |
| **OpenRouter** | Eine Taste für viele Modelle, mit einfachem Umschalten                       |
| **Groq**       | Schnelle Inferenz und eine freie Stufe                                       |
| **NVIDIA NIM** | Endpunkte, die du selbst ausführen kannst, inklusive GPU-freundlicher Setups |

Da LightCMS das Standardformat `/v1/chat/completions` verwendet, können auch andere kompatible Endpunkte funktionieren. Dazu gehört ein lokales Modell hinter einem OpenAI-kompatiblen Proxy, einem privaten Gateway oder einem Unternehmens-Endpunkt.

Ihr API-Schlüssel bleibt in Ihrer LightCMS Instanz. Der Text, den Sie für eine Copilot-Aktion senden, geht an den Provider, den Sie konfiguriert haben. Für ein selbstgehostetes, Apache-lizenziertes Werkzeug ist die Kontrolle wichtig.

## Warum es im Editor lebt

Ein Chat kann einen langen, generischen Text erzeugen, den Sie noch einfügen, formatieren und neu schreiben müssen. Kontextuelle Maßnahmen vermeiden dieses Problem.

- **Kleiner Geltungsbereich**: Das Umformulieren eines Absatzes hat ein klares Ergebnis. "Schreiben Sie mir einen Blog-Beitrag" nicht.
- **Formatierung bleibt intakt**: Der Copilot arbeitet im Editor, also bleibt die Liste weiterhin und die Frontmaske bleibt unberührt.
- **Schnelle Iteration**: Wenn Ihnen das Ergebnis nicht gefällt, generieren Sie den ausgewählten Text anstelle des gesamten Dokuments.

Damit fühlt sich AI wie eine Reihe von kleinen Bearbeitungen, näher an wie ein Kopier-Editor funktioniert.

## Nutze es verantwortungsvoll

- **Schreibe die Stimme selbst**: Verwende Umrisse und Erweiterungen als Startpunkte, dann behalte die Sätze, die dir ähnlich klingen.
- **Überprüfe die Fakten**: Das Modell kennt dein Codebase, dein Produkt oder deine Nummern.
- **Halten Sie Geheimnisse aus den Eingabeaufforderungen**: Alles, was Sie an einen Provider senden, ist für diesen Provider sichtbar.

LightCMS speichert nur das, was Sie genehmigen. Es generiert keine Inhalte im Hintergrund, speichert Entwürfe auf LightCMS Servern oder verwendet Ihre Entwürfe für Schulungen.

## Wenn es am meisten hilft

- **Erste Schritte**: Eine Umrisslinie verwandelt eine leere Seite in einen Entwurf, auf den du reagieren kannst.
- **Rewriting am Ende**: Verschärfen Sie die Einführung, nachdem Sie wissen, was der Beitrag sagt.
- **Endreinigung**: Führe in den letzten Minuten einen Grammatikpass aus, bevor du veröffentlichst.

## Häufig gestellte Fragen

### Benötige ich einen API-Schlüssel?

Ja, um den Copilot verwenden zu können, müssen Sie einen Provider in Ihrer LightCMS Instanz konfigurieren. Alles andere im Editor funktioniert ohne API-Schlüssel.

### Werden meine Inhalte für die Ausbildung von Modellen verwendet?

Nein. LightCMS sendet nur den Text, den Sie für eine Aktion auswählen, an den Endpunkt, den Sie konfiguriert haben. Es sendet Ihr Projektarchiv oder Ihre Entwürfe nirgendwo anders.

### Kann ich ein lokales Modell verwenden?

Ja. Wenn das Modell eine OpenAI-kompatible API ausstellt, dann zeigen Sie LightCMS an diesem Endpunkt und der Copilot funktioniert auf die gleiche Weise.

### Wird es meine Frontfrage ändern?

Nein. Kopilot-Aktionen wirken sich nur auf den von Ihnen ausgewählten Inhalt aus.

Gepaart mit [voice-to-text](/blog/lightcms-voice-to-text/), hilft der Copilot bei beiden Seiten des Entwurfs: schnell Wörter herabholen und in einen publisierbaren Beitrag formen.
