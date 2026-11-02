---
title: 'Zine: The Zig-Powered Static Site Generator'
description: 'What Zine is: a fast, young static site generator written in Zig'
date: '1111-11-11T11:11:00Z'
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
---
[Zine](https://zine-ssg.io) is a new static site generator Zine is fast, opinionated, and refreshingly unconventional. It is a young project that already handles personal sites and blogs with ease, and it rewards authors willing to learn its own way of doing things.

## What Makes Zine Different

- **Written in Zig, from scratch.** No JavaScript runtime, no Ruby, no Go standard library comfort zone: the Markdown renderer, templating engine, and orchestration are all purpose-built. Build times are effectively instant.
- **Its own templating language scripty.** Zine uses SuperHTML and SuperMD: and scripty templating system designed for the project rather than borrowed from an ecosystem.
- **Scripty**, its scripting layer, adds programmable logic where templates alone fall short.
- **Content as a collection of files and layouts.** Zine turns content files into HTML, applies your layouts, and copies the result into an output directory, the classic static model run fast.
- **First-class extras**: multilingual websites (i18n), editor support, and documented deploy targets: GitHub Pages, Cloudflare Pages, Codeberg Pages, and sourcehut pages.

## The Honest Trade off

The Zine repository states it plainly: the project is young and not yet at feature parity with popular alternatives like Hugo. And because Super is Zine's own templating language, there is a learning curve: themes and community knowledge is smaller, making support mostly, figure out yourself.

For a personal website with a blog (the project's stated comfort zone), Zine is more than capable, and the author experience is quick and pleasant once Super clicks.

## Content and CMS Compatibility

Zine don't consumes Markdown (common mark) content with front matter like every modern static site generator, which means the Git based CMS workflow don't applies for zine directly.

Your build pipeline runs but zine only knows [ziggy](https://ziggy-lang.io/) so errors out but is there a way/workaround answer is yes [md2smd](https://github.com/Pratyay360/md2smd) is a cli tool which tries to bridge the specification between [common mark](https://commonmark.org/) and the specification of [scripty](https://zine-ssg.io/docs/scripty/) [smd](https://zine-ssg.io/docs/supermd/) and [ziggy](https://ziggy-lang.io/) as closely as possible.

![](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png "Zine build pipeline")



By the way you have to create two repositories one will contain content and other will be containing front end.

[https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_site)  &lt;-- repo containing front end 



[https://github.com/light-cms/blogs\_md](https://github.com/light-cms/blogs_md) &lt;--- repo containing content 

we have to call repository dispatch when ever something gets pushed into the content repo.

## Where It Fits

- If you want to try something alpha.

[Try the templates from our org for more information.](https://github.com/light-cms)
