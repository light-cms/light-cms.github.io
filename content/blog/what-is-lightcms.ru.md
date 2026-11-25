---
title: "Что такое LightCMS?"
description: "LightCMS is a Git based CMS with a visual editor. Оно совершает простой Markdown в ваш репозиторий и вызывает установку через ваш существующий CI/CD."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - молнии
  - смс
  - git
  - markdown
---

[LightCMS](https://lightcms.me) is a content management system for publishing Markdown from Git. You write in a visual editor in your browser, and [LightCMS](https://lightcms.me) commits the Markdown file and its front matter to your repository. Your existing CI/CD pipeline can then build and deploy the site.

## Проблема с LightCMS адресами

Static site generators can make it easy to build and deploy a site. Writing for one is less convenient if you have to edit raw Markdown, format front matter, or sort out Git conflicts by hand.

[LightCMS](https://lightcms.me) gives authors a visual editor, while keeping the content in Git. That suits teams that want Git ownership and review. It is a different choice from a database backed CMS with real time collaboration.

## Как LightCMS публикует контент

1. Sign in with GitHub.
2. Connect a repository with Markdown content. It can be a site built with Astro, Hugo, Zola, 11ty, Jekyll, or Next.js.
3. Write in the editor, which supports headings, links, tables, checklists, code blocks, and media.
4. Publish the change. [LightCMS](https://lightcms.me) formats the Markdown, updates front matter, and either commits to your branch or opens a pull request for review.
5. Your existing CI/CD workflow, such as GitHub Actions, Cloudflare Pages, Vercel, or Netlify, can then build and deploy the site.

Так как публикация создает стандартный Git коммит, ваш сайт все еще может быть построен из репозитория, если вы перестаете использовать LightCMS.

## Технический профиль

| Атрибут                  | Реализация LightCMS                                                               |
| :----------------------- | :-------------------------------------------------------------------------------- |
| Хранилище                | Git репозиторий с файлами Markdown и фронт-телом                                  |
| Интерфейс редактора      | Visual editor in your browser                                                     |
| Помощь ИИ                | Помощь редакторам в написании                                                     |
| Транскрипция голоса      | Редактор продиктования счетов                                                     |
| Обновление подписчика    | Интеграция с объявлением GitHub через [Newsy](https://github.com/light-cms/newsy) |
| Лицензирование и хостинг | Открытый исходный код и самохостинг                                               |
| Портабельность           | Содержимое остается в репозитории под вашим контролем                             |

## Когда LightCMS некорректный режим

LightCMS fits sites that keep their content in Git and already use CI/CD to publish. Consider a different tool if:

- You need relational queries, user permissions, or a content API at runtime. A database backed headless CMS such as [Payload](/comparison/lightcms-vs-payload-cms) or Strapi may fit better.
- You want one service to host the public site. LightCMS does not host it. Cloudflare Pages, Vercel, Netlify, or S3 can serve the built site.
- You need a tool to render your HTML templates. LightCMS does not do that; your static site generator, such as Hugo, Astro, or Zola, handles the build.

If you need Git based content management and a visual editor, the next step is to connect a test repository and confirm that LightCMS writes front matter and Markdown in the format your static site generator expects.
