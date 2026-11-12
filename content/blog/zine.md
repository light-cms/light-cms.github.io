---
title: 'Zine: The Static Site Generator'
description: 'What Zine is: a fast, young static site generator written in Zig'
draft: false
keywords:
  - zine static site generator
  - zine ssg
  - zig static site generator
  - zine ssg vs hugo
  - fastest ssg zig
tags:
  - zine
  - zig
  - ziggy
  - ssg
  - lightcms
isCJKLanguage: false
headless: false
serial: 28
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - zine
    - zig
    - static-sites
slug: zine
---
[Zine](https://zine-ssg.io) Is a new static site generator Zine is fast, opinionated, and refreshingly unconventional. It is a young project that already handles personal sites and blogs with ease, and it rewards authors willing to learn its own way of doing things.

## What Makes Zine Different

- **Written in Zig, from scratch.** No JavaScript runtime, no Ruby, no Go standard library comfort zone: the Markdown renderer, templating engine, and orchestration are all purpose-built. Build times are effectively instant.
- **Its own templating language scripty.** Zine uses SuperHTML and SuperMD: and scripty templating system designed for the project rather than borrowed from an ecosystem.
- **Scripty**, its scripting layer, adds programmable logic where templates alone fall short.
- **Content as a collection of files and layouts.** Zine turns content files into HTML, applies your layouts, and copies the result into an output directory, the classic static model run fast.
- **First-class extras**: Multilingual websites (i18n), editor support, and documented deploy targets: GitHub Pages, Cloudflare Pages, Codeberg Pages, and source hut pages.

## The Honest Tradeoff

The Zine repository states it plainly: the project is young and not yet at feature parity with popular alternatives like Hugo. And because Super is Zine's own templating language, there is a learning curve: themes and community knowledge is smaller, making support mostly, figure out yourself.

For a personal website with a blog (the project's stated comfort zone), Zine is more than capable, and the author experience is quick and pleasant once Super clicks.

## Content and CMS compatibility

Zine does not consume CommonMark Markdown with front matter the same way most static site generators do, so a typical Git-based CMS workflow does not apply directly.

Zine expects its own content formats, including [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/), and [Ziggy](https://ziggy-lang.io/). If you already have Markdown content, [md2smd](https://github.com/Pratyay360/md2smd) can help convert between [CommonMark](https://commonmark.org/) and Zine's formats.

![](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png "Zine build pipeline")



You need two repositories: one for the frontend and one for the content.

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_site), the frontend repository
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/blogs_md), the content repository

Trigger a repository dispatch when new content is pushed to the content repository.

## Where It Fits

- If you want to try something alpha.

[Try the templates from our org for more information.](https://github.com/light-cms)
