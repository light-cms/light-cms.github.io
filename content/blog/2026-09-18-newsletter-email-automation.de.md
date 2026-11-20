---
title: Newsletter Automation Without a Paid Subscription
description: >-
  Run your blog newsletter straight from Git: no mailing list, no SMTP API, no SaaS fees.
date: '2026-09-18T01:50:00.000Z'
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
slug: newsletter-email-automation
---
E-Mail ist eine der effektivsten Möglichkeiten, um ein engagiertes Publikum aufzubauen. Die traditionelle Vorgehensweise ist jedoch schwerfällig und kostspielig.

[LightCMS](https://www.lightcms.me) takes a different route, Git driven newsletters powered by [Newsy](https://github.com/light-cms/newsy), where the repository you already have is The backend, so you can drop the newsletter service entirely.

---

## Das Problem des traditionellen Newsletters

Mit herkömmlichen Plattformen wie Mailchimp, Substack oder Brevo erfordert Ihr Workflow typischerweise Folgendes:

1. Anmeldung für einen externen Service mit starren Abonnementsregeln.
2. Die Verwaltung fragmentierter Mailinglisten über Drittanbieter-Dashboards hinweg.
3. Manually copying and pasting your blog post into email builders.
4. Umgang mit aufgeblähten Trackingskripten, Cookies und Datenschutzvorschriften.
5. Mit zunehmender Anzahl der Abonnenten werden erhebliche monatliche Gebühren gezahlt.

Everyone of those steps exists because an email service sits between you and your readers. Newsy entfernt diese Ebene anstatt sie zu verbessern.

## Der Git Driven Ansatz: Newsy

The **Newsy** philosophy is simple: **your Git repository is the newsletter back end.**

[Newsy](https://github.com/light-cms/newsy) ist ein Open-Source-Newsletter-Service für statische Seiten, inspiriert von [utterances](https://utteranc.es), und es speichert absichtlich keine Mailingliste, keinen SMTP-Server und keinen E-Mail-Anbieter in der Schleife:

1. **Veröffentlichen**: Du hast in [LightCMS](https://lightcms.me) auf Publizieren gedrückt, und die Markdown-Datei wird in dein Repository übergeben.
2. **Erkennen**: Nachrichtenuhren Push-Events. Eine neu hinzugefügte Beitragsdatei (oder ein existierender Beitrag, der von `draft: true` in `false` umgekippt wurde) löst eine Ankündigung aus. Routine Bearbeitungen und Löschungen werden ignoriert, so dass die tägliche Arbeit niemals Ihre Leser spammt.
3. **Upsert**: Newsy erstellt oder aktualisiert ein einzelnes offenes Problem pro Repository mit dem Namen `announcement` mit dem Namen `newsletter`. Es trägt die Commit Zusammenfassung, die Dateiliste und den Post-Inhalt; jeder folgende Beitrag landet als Kommentar zu diesem Thema. Tickets können wie alle anderen gesperrt und freigeschaltet werden.
4. **Subscribe**: You embed a Subscribe button into your static site; [newsy.lightcms.me](https://newsy.lightcms.me) generates the snippet from your `owner/repo`. It points readers at the issue, where they click **Subscribe** To get GitHub notifications for every new post.

Da die Zustellung über GitHubs eigenes Benachrichtigungssystem läuft, gibt es keine Liste zu exportieren, keine Preise pro Abonnenten, kein Debuggen der Lieferbarkeit und keine E-Mail-Plattform von Drittanbietern.

---

## Warum dies zu einer statischen Site passt

Eine statische Seite hat bereits eine Pipeline: Inhalt wird übergeben, CI Builds, die CDN Server. Newsy setzt sich in den gleichen Fluss ein: Der Commit, der die Seite veröffentlicht, kündigt sie ebenfalls an. Nichts wird in einen proprietären Editor kopiert und nichts muss synchronisiert werden.

It is also free in the way static hosting is free: open source, self hostable (Go plus a small Postgres table), and it runs happily on server less platforms. Es gibt keinen monatlichen Plan, der mit Ihrem Publikum skaliert.

---

## Erste Schritte

1. Installiere die **Newsy GitHub App** in dem Projektarchiv, in dem du veröffentlichst: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Push a new post from [LightCMS](https://lightcms.me) or your terminal.
3. Generate the Subscribe button at [newsy.lightcms.me](https://newsy.lightcms.me) And paste it into your site.

Die Leser landen auf das Ankündigungsproblem und abonnieren dort; jeder zukünftige Beitrag erreicht sie automatisch.

## Weiterlesen

- [Newsy-Quelle und docs](https://github.com/light-cms/newsy)
- [Self-Hosting LightCMS](/blog/selfhost/): die vollständige Umgebungsreferenz
- [Entwürfe, Revisionen und Rollbacks](/blog/lightcms-drafts-and-versioning/): Wie die Veröffentlichung funktioniert
- [Erste Schritte mit LightCMS](/getting-started/): der breitere Workflow
