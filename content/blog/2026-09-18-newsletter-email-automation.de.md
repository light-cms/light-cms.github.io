---
title: Automatisierung des Newsletters ohne Bezahlung
description: "Wie Sie einen Blog-Newsletter direkt aus Ihrem Git-Repository mit Newsy: Keine Mailingliste zu verwalten, kein SMTP-Relais, keine Sass-Gebühren"
serial: 5
date: 18.09.20T01:50:00Z
draft: false
keywords:
  - newsletter-Automatisierung
  - github newsletter
  - neugierig
  - statische Site-Newsletter
preview: /og-image.webp
taxonomies:
  tags:
    - Newsletter
    - neugierig
    - github
    - publizieren
---
E-Mail ist eine der effektivsten Möglichkeiten, um ein engagiertes Publikum aufzubauen. Die traditionelle Vorgehensweise ist jedoch schwerfällig und kostspielig.

[LightCMS](https://lightcms.me) geht auf eine andere Route: **Git-getriebene Newsletter** powered by [Newsy](https://github.com/light-cms/newsy), wobei das Projektarchiv, das Sie bereits _haben_ das Backend ist, so dass Sie den Newsletter-Service komplett ablegen können.

---

## Das Problem des traditionellen Newsletters

Mit herkömmlichen Plattformen wie Mailchimp, Substack oder Brevo erfordert Ihr Workflow typischerweise Folgendes:

1. Anmeldung für einen externen Service mit starren Abonnementsregeln.
2. Die Verwaltung fragmentierter Mailinglisten über Drittanbieter-Dashboards hinweg.
3. Manuelles Kopieren und Einfügen Ihres Blogs in proprietäre Rich-Text-E-Mail-Builder.
4. Umgang mit aufgeblähten Trackingskripten, Cookies und Datenschutzvorschriften.
5. Mit zunehmender Anzahl der Abonnenten werden erhebliche monatliche Gebühren gezahlt.

Jeder dieser Schritte existiert deshalb, weil ein E-Mail-Dienst zwischen Ihnen und Ihren Lesern sitzt. Newsy entfernt diese Ebene anstatt sie zu verbessern.

---

## Der Git Driven Ansatz: Newsy

Die **Newsy** Philosophie ist einfach: **dein Git Repository ist das Newsletter-Backend.**

[Newsy](https://github.com/light-cms/newsy) ist ein Open-Source-Newsletter-Service für statische Seiten, inspiriert von [utterances](https://utteranc.es), und es speichert absichtlich keine Mailingliste, keinen SMTP-Server und keinen E-Mail-Anbieter in der Schleife:

1. **Veröffentlichen**: Du hast in [LightCMS](https://lightcms.me) auf Publizieren gedrückt, und die Markdown-Datei wird in dein Repository übergeben.
2. **Erkennen**: Nachrichtenuhren Push-Events. Eine neu hinzugefügte Beitragsdatei (oder ein existierender Beitrag, der von `draft: true` in `false` umgekippt wurde) löst eine Ankündigung aus. Routine Bearbeitungen und Löschungen werden ignoriert, so dass die tägliche Arbeit niemals Ihre Leser spammt.
3. **Upsert**: Newsy erstellt oder aktualisiert ein einzelnes offenes Problem pro Repository mit dem Namen `announcement` mit dem Namen `newsletter`. Es trägt die Commit Zusammenfassung, die Dateiliste und den Post-Inhalt; jeder folgende Beitrag landet als Kommentar zu diesem Thema. Tickets können wie alle anderen gesperrt und freigeschaltet werden.
4. **Abonnieren**: Du legst einen einbettbaren Subscribe-Button in deine statische Site; [newsy.lightcms.me](https://newsy.lightcms.me) erzeugt das Snippet von deinem `Eigentümer/Repo`. Es zeigt Lesern das Problem an, wo sie **Abonnieren** klicken, um GitHub Benachrichtigungen für jeden neuen Beitrag zu erhalten.

Da die Zustellung über GitHubs eigenes Benachrichtigungssystem läuft, gibt es keine Liste zu exportieren, keine Preise pro Abonnenten, kein Debuggen der Lieferbarkeit und keine E-Mail-Plattform von Drittanbietern.

---

## Warum dies zu einer statischen Site passt

Eine statische Seite hat bereits eine Pipeline: Inhalt wird übergeben, CI Builds, die CDN Server. Newsy setzt sich in den gleichen Fluss ein: Der Commit, der die Seite veröffentlicht, kündigt sie ebenfalls an. Nichts wird in einen proprietären Editor kopiert und nichts muss synchronisiert werden.

Es ist auch kostenlos in der Art und Weise, wie statisches Hosting kostenlos ist: Open Source, selbst hostable (Go plus eine kleine Postgres Tabel), und es läuft glücklich auf serverlosen Plattformen. Es gibt keinen monatlichen Plan, der mit Ihrem Publikum skaliert.

---

## Erste Schritte

1. Installiere die **Newsy GitHub App** in dem Projektarchiv, in dem du veröffentlichst: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Push a new post from [LightCMS](https://lightcms.me) or your terminal.
3. Erzeugen Sie den Subscribe-Button bei [newsy.lightcms.me](https://newsy.lightcms.me) und fügen Sie ihn in Ihre Site ein.

Die Leser landen auf das Ankündigungsproblem und abonnieren dort; jeder zukünftige Beitrag erreicht sie automatisch.

---

## Weiterlesen

- [Newsy-Quelle und docs](https://github.com/light-cms/newsy)
- [Self-Hosting LightCMS](/blog/selfhost/): die vollständige Umgebungsreferenz
- [Entwürfe, Revisionen und Rollbacks](/blog/lightcms-drafts-and-versioning/): Wie die Veröffentlichung funktioniert
- [Erste Schritte mit LightCMS](/getting-started/): der breitere Workflow