---
title: "Por que o CMS claro existe"
description: "Why LightCMS uses Git based Markdown and a visual editor to make static site publishing easier without giving up version control."
serial: 2
date: 2026-09-18T00:41:00Z
draft: false
tags:
  - SMS
  - filosofia
  - luzes
---

We are building [LightCMS](https://lightcms.me) because publishing to a static site should not require every writer to follow a developer workflow. You can write in a browser editor, while your content stays in Git as Markdown files.

## O problema com a publicação de fluxos de trabalho estáticos

Static site generators make it straightforward to build and deploy a site. Writing for one can still mean cloning a repository, editing Markdown, managing front matter, committing, and waiting for CI/CD.

That is familiar territory for developers. For writers and editors, it can get in the way of publishing.

## Why Git based content still matters

Keeping content in Git gives you a few practical things:

- A history of changes you can review, compare, or revert.
- Markdown files you can move between generators, hosts, and editors.
- A direct path into the Git based build and deployment workflows many static sites already use.
- A copy of your content in your own repository, rather than a proprietary CMS database.

## O LightCMS oferece

LightCMS is built around publishing from Git, not real time app features. That works well for blogs, documentation, and marketing sites. If you need personalization, complex relationships between content, or database queries at runtime, another kind of CMS may suit you better.

You write in a visual editor, while Markdown files and Git history remain the source of truth. For more about the product, see [What Is LightCMS?](/blog/what-is-lightcms/).
