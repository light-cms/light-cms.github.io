---
title: Newsletter Automation Without a Paid Subscription
description: >-
  Run your blog newsletter straight from Git: no mailing list, no SMTP API, no
  SaaS fees.
date: "2026-09-18T01:50:00.000Z"
draft: false
keywords:
  - newsletter automation
  - github newsletter
  - newsy
  - static site newsletter

taxonomies:
  tags:
    - newsletter
    - newsy
    - github
    - publishing
slug: newsletter-email-automation
---

Email is one of the most effective ways to build a dedicated audience. The traditional way of doing it, though, has become cumbersome and expensive.

[LightCMS](https://www.lightcms.me) takes a different route, Git driven newsletters powered by [Newsy](https://github.com/light-cms/newsy), where the repository you already have is The backend, so you can drop the newsletter service entirely.

---

## The Traditional Newsletter Problem

With conventional platforms like Mailchimp, Substack, or Brevo, your workflow typically requires:

1. Signing up for an external service with rigid subscription tiers.
2. Managing fragmented mailing lists across third party dashboards.
3. Manually copying and pasting your blog post into email builders.
4. Dealing with bloated tracking scripts, cookies, and privacy compliance requirements.
5. Paying substantial monthly fees as your subscriber count grows.

Everyone of those steps exists because an email service sits between you and your readers. Newsy removes that layer rather than improving it.

## The Git Driven Approach: Newsy

The **Newsy** philosophy is simple: **your Git repository is the newsletter back end.**

[Newsy](https://github.com/light-cms/newsy) is an open-source newsletter service for static sites, inspired by [utterances](https://utteranc.es), and it deliberately keeps no mailing list, no SMTP relay, and no email vendor in the loop:

1. **Publish**: You hit Publish in [LightCMS](https://lightcms.me), and the Markdown file is committed to your repository.
2. **Detect**: Newsy watches push events. A newly added post file (or an existing post flipped from `draft: true` to `false`) triggers an announcement. Routine edits and deletions are ignored, so everyday work never spams your readers.
3. **Upsert**: Newsy creates or updates a single open issue per repository titled `announcement` with the label `newsletter`. It carries the commit summary, the file list, and the post content; each subsequent post lands as a comment on that issue. Issues can be locked and unlocked like any other.
4. **Subscribe**: You embed a Subscribe button into your static site; [newsy.lightcms.me](https://newsy.lightcms.me) generates the snippet from your `owner/repo`. It points readers at the issue, where they click **Subscribe** To get GitHub notifications for every new post.

Because delivery runs through GitHub's own notification system, there is no list to export, no per-subscriber pricing, no deliverability debugging, and no third-party email platform to renew.

---

## Why This Fits a Static Site

A static site already has a pipeline: content is committed, CI builds, the CDN serves. Newsy slots into the same flow: the commit that publishes the page also announces it. Nothing is duplicated into a proprietary editor, and nothing needs syncing back.

It is also free in the way static hosting is free: open source, self hostable (Go plus a small Postgres table), and it runs happily on server less platforms. There is no monthly plan that scales with your audience.

---

## Getting Started

1. Install the **Newsy GitHub App** on the repository you publish from: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Push a new post, from [LightCMS](https://lightcms.me) or your terminal.
3. Generate the Subscribe button at [newsy.lightcms.me](https://newsy.lightcms.me) And paste it into your site.

Readers land on the announcement issue and subscribe there; every future post reaches them automatically.

## Further Reading

- [Newsy source and docs](https://github.com/light-cms/newsy)
- [Self-hosting LightCMS](/blog/selfhost/): the full environment reference
- [Drafts, revisions, and rollbacks](/blog/lightcms-drafts-and-versioning/): how publishing works
- [Getting started with LightCMS](/getting-started/): the wider workflow
