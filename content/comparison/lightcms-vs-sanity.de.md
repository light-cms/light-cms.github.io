---
title: "LightCMS vs Sanity: Git Files gegen eine gehostete Inhaltsplattform"
description: "Vergleichen Sie LightCMS und Sanity für die Veröffentlichung: Markdown in Git mit statischen Builds oder einer gehosteten Content-Plattform mit APIs und Echtzeit-Zusammenarbeit."
serial: 48
date: 2026-10-16T11:40:00Z
draft: false

tags:
  - hellcms
  - Vernunft
  - cms
  - vergleichen
  - kopffrei
slug: lightcms-vs-sanity
---

Vernunft und LightCMS helfen Ihnen, Inhalte zu veröffentlichen, aber sie beginnen an verschiedenen Orten. Sanity ist eine gehostete Inhaltsplattform: Ihre Inhalte leben im Content Lake, Sie modellieren sie in Schemas, und Ihr Frontend holt sie über APIs ab. LightCMS ist ein Git-basierter Editor: Ihr Inhalt lebt als Markdown Dateien in Ihrem Repository, und Ihr statischer Site-Generator erzeugt HTML aus diesen Dateien.

Wenn Sie ein Blog, eine Dokumentations-Website oder eine Marketing-Site erstellen die wirkliche Frage ist einfach: Brauchen Sie eine Content-API, oder benötigen Sie einen guten Ort zum Schreiben und Publizieren?

## Wie das Speichermodell die Dinge ändert

Mit Sanity sind Inhalte strukturierte Daten in einem gehosteten Dienst. Sie fragen es mit GROQ, und Änderungen können sofort über die API verfügbar sein. Das macht Sinn, wenn derselbe Inhalt eine Website, eine App und andere Clients speichert.

Mit LightCMS ist Content eine Datei in Ihrem Repo. Du bearbeitest es, überträgst es, und deine Pipeline veröffentlicht es. Es gibt keine API für Laufzeitinhalte zum Laufen. Das macht Sinn, wenn die Ausgabe eine statische Website ist und Sie wollen, dass die Inhaltshistorie in Git lebt.

|                         | LightCMS                                 | sanft                          |
| ----------------------- | ---------------------------------------- | ------------------------------ |
| Inhaltsspeicher         | Markdown Dateien in Ihrem Git Repository | Gehosteter Content-See         |
| Lieferung               | Statisches Build zu CDN                  | API auf Anfragezeit            |
| Content modeling        | Front-Match-Felder                       | Eigene Schemas im Code         |
| Echtzeit-Zusammenarbeit | Git Review-Workflow                      | Echtzeit-Studio-Zusammenarbeit |
| Preis                   | Selbstgehostet, keine Lizenzgebühr       | Nutzung/Sitz-basierte Pläne    |
| Portabilität            | Repository klonen                        | Exportieren und konvertieren   |

## Wenn Vernunft mehr Sinn macht

Vernunft verdient seinen Halt, wenn Inhalte mehr als Seiten sind. Wenn der gleiche Inhalt auf einer Website, einer App und anderswo angezeigt werden muss, sind Sanity’s strukturiertes Modell und APIs nützlich. Es behandelt auch benutzerdefinierte Schemas, Referenzen und Echtzeit-Zusammenarbeit im Editor.

## Wenn LightCMS mehr Sinn macht

LightCMS passt sich an, wenn Sie Dokumente hauptsächlich auf einer statischen Seite veröffentlichen. Sie schreiben in einem Editor, der Inhalt lebt in Ihrem Repo, und die Seite wird in statische Dateien eingebaut. Es gibt keine Content API für jede Anfrage und keinen gehosteten Content Store in der Mitte.

Für Schriftsteller ist dieser Unterschied jeden Tag spürbar. LightCMS ist für die Erstellung und Veröffentlichung von Artikeln eingerichtet. Sanity Studio ist leistungsstark, aber es basiert auf der Modellierung von Inhalten zuerst.

## Wählen Sie zwischen ihnen

Wenn Ihre Inhalte sich wie Produktdaten verhalten müssen (strukturiert, abgefragt, wiederverwendet und in Echtzeit aktualisiert), ist Sanity die stärkere Wahl. Wenn die meisten Ihrer Arbeit Artikel und Seiten ist, ist LightCMS einfacher zu leben: Dateien in Git, statische Lieferung, weniger bewegliche Teile.

Eine gute Möglichkeit, sich zu entscheiden, ist die Betrachtung Ihrer Inhalte. Wenn es meistens lange Pfosten mit Frontmasse sind, beginnen Sie mit dem Git-basierten Pfad. Wenn du weiterhin Beziehungen eingehst, Live-Abfragen oder mehrere Frontends, dann beginnt eine kopflose Plattform wie Sanity ihre Komplexität zu verdienen. Siehe auch [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/) und [Headless vs Git based CMS](/blog/headless-vs-Git based-cms/).
