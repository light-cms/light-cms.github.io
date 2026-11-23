---
title: "Why LightCMS Exists"
description: "Why LightCMS uses Git-backed Markdown and a visual editor to make static site publishing easier without giving up version control."
serial: 2
date: 2026-09-18T00:41:00Z
draft: false
keywords:
  - why lightcms
  - gitbacked cms
  - static sites
  - carbon footprint

taxonomies:
  tags:
    - cms
    - philosophy
    - lightcms
---

LightCMS exists to make publishing to a static site as straightforward as writing in a browser editor, while keeping content in Git as Markdown files. The goal is to preserve the operational benefits of static sites without requiring every author to work through a developer workflow.

## The problem with static publishing workflows

Static site generators are effective at building fast, deployable websites, but the authoring workflow can be difficult for non-developers. Writing a post often means cloning a repository, editing Markdown, managing front matter, creating commits, and waiting for CI/CD.

That workflow is acceptable for developers. It becomes a barrier for writers, editors, and teams who want to publish content without learning Git internals.

## Why Git-backed content still matters

Keeping content in Git has practical advantages:

- **Version history:** Every change can be reviewed, diffed, and reverted.
- **Portability:** Markdown files can move between generators, hosts, and editors.
- **Deployment fit:** Static hosting and CI/CD workflows already work well with Git repositories.
- **Ownership:** Content lives in your repository, not in a proprietary CMS database. [VERIFY: confirm LightCMS data/storage behavior for all content and assets.]

## The trade-off LightCMS makes

LightCMS prioritizes Git-backed publishing over real-time application features. That makes it a good fit for blogs, documentation, and marketing sites. It is less suitable when you need dynamic personalization, complex relational content, or runtime database queries.

The design choice is intentional: use a visual editor for authoring, but keep the source of truth in Markdown files and Git history. For the product overview, see [What Is LightCMS?](/blog/what-is-lightcms/).
