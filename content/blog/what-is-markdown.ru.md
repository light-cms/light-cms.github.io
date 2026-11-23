---
title: Что такое Markdown? The Plain Text Format for the Web
description: >-
  Discover what Markdown is, how it works, its basic syntax, popular flavours, and why it has become an essential format for modern documentation, blogging, and static site generation.
date: "2026-10-14T15:00:00.000Z"
draft: false
keywords:
  - что такое markdown
  - учебник markdown
  - синтаксис markdown
  - зачем использовать markdown
  - разметка для писателей

slug: what-is-markdown
---

Markdown - это простой текст с небольшим набором символов форматирования. Джон Грубер создал его в 2004 году как самый простой способ писать форматированные документы. Через два десятилетия он стал французским языком в Интернете: документация, Файлы README, заметки, информационные бюллетени и миллионы сайтов хранят в них свое содержание.

## Почему победа в Markdown

- **Он не вращается**. A `.md` File from 2004 still opens in any text editor. Истекает срок действия проприетарных форматов документов; простой текст не работает.
- **Он красиво отличается**. Поскольку это текст, Git может отслеживать каждое изменение, поэтому каждый Git на основе CMS хранит содержимое как Markdown.
- **Учиться легко просто**. Основной синтаксис занимает пять минут.
- **Содержимое отделяется от презентации**. Напишите структуру, пусть тема будет выглядеть так.
- **Это везде**. GitHub, Notion exports, static site generators, and AI tools all speak it.

## Синтаксис, который вам нужен

````markdown
# Heading 1

## Heading 2

A paragraph with **bold** and _italic_ text.

- A bullet point
- Another one

1. A numbered list
2. And the next item

> A blockquote for asides.

[A link](https://example.com)
![An image](/images/photo.jpg)

`inline code` and fenced code blocks:

```js
console.log("hello, web");
```
````

````

That covers the vast majority of real-world writing. Tables, task lists, and footnotes round out the extended syntax that GitHub-flavored Markdown adds.

## The Missing Piece: Front Matter

Static sites add a small metadata header to each file:

```markdown
---
title: My First Post
date: 2026-10-14T10:00:00Z
tags:
  - blogging
---

The article begins here.
````

YAML это передние материя, в которой живет CMS: названия, даты, черновики и таксономии вместе с телом Markdown.

## Запись Markdown без синтаксиса

\*\*Вам больше не нужно записывать Markdown вручную. \* Современные редакторы, основанные на Git, [LightCMS](/getting-started/) среди них дают полный визуальный редактор с изображениями, и ярлыки для форматирования, затем сериализуйте запись, чтобы очистить Markdown под ними. Вы получаете прочность текста с удобным оформлением.

Эта комбинация (визуальное редактирование поверх Markdown в Git) - это сила целой [категории CMS](/blog/git-cms-vs-traditional-cms/), и именно так статические сайты [лучших статических генераторов сайтов](/blog/best-static-site-generators/) получают их содержимое.

## Часто задаваемые вопросы

### Markdown мертв?

Наоборот. Через 20 лет он стал более центральным, чем когда-либо. It is the content format of GitHub, documentation tool chains, and AI-era writing.

### В чем разница между Markdown и HTML?

Markdown - это формат автора (простой текст, человеко-запись); HTML - формат рендеринга (какой отображает браузер). Генераторы превращают их в последние.

### Нужно ли мне изучать Markdown для блога?

Не с визуальным Git основанным на CMS: вы пишете нормально, и инструмент производит Markdown для вас. Изучение основ по-прежнему помогает быстро редактировать.

### Где находится Markdown?

Как `.md` файлы, в идеале в Git-репозитории, что дает вам историю версий, обзор и переносимое владение всем, что вы пишли.
