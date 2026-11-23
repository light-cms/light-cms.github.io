---
title: "Zine, The zig based Static Site Generator"
description: >-
  Zine is a fast, young static site generator written in Zig, with its own Super templating language and near instant builds a profile of the minimalist SSG.
draft: false
tags:
  - zine 静态站点生成器
  - zine ssg
  - zig 静态站点生成器
  - zine ssg vs hugo
  - 最快的 ssg zig
isCJKLanguage: false
headless: false

slug: zine
date: "2026-11-22T12:05:23.705Z"
---

[Zine](https://zine-ssg.io) 是一个新的静态站点生成器Zine 速度快、意见和刷新异常。这是一个年轻的项目，已经很容易地处理个人网站和博客， 并且它奖励愿意学习自己做事方式的作者。

## 什么使Zine变得不同的

Zine stands out from other static site generators in several ways:

- \*\*从零开始写入Zig。 \* 没有 JavaScript 运行时间、没有Ruby 没有去标准库舒适区：Markdown 渲染器、模板引擎和管弦乐队都是专用构建的。构建时间实际上是即时的。
- **它自己的模板语言脚本。** Zine 使用 SuperHTML 和 SuperMD：以及为项目设计而不是从生态系统借用的脚本模板系统。
- **Scripty**，它的脚本层，在模板本身不足时添加可编程逻辑。
- \*\*内容作为文件和布局集合。 \* Zine 将内容文件转换为 HTML，应用您的布局，并将结果复制到输出目录，经典静态模型运行得很快。

## 诚实的交易

Zine仓库清楚地表明：该项目很年轻，与Hugo等受欢迎的替代品尚未达到功能等同。因为Super是Zine自己的模版语言，所以有一个学习曲线：主题和社区知识较小，大多支持你自己。

对于带有博客的个人网站 (项目所说的舒适区)， Zine不仅能力强，一旦超级点击，作者的体验就会很快和愉快。

## 内容和 CMS 兼容

Zine does not consume CommonMark Markdown with front matter the same way most static site generators do, so a typical Git based CMS workflow does not apply directly.

Zine 需要自己的内容格式，包括 [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/), 和 [Ziggy](https://ziggy-lang.io/)。 If you already have Markdown content, [md2smd](https://github.com/light-cms/md2smd) can help convert between [CommonMark](https://commonmark.org/) And Zine's formats.

![Zine build pipeline](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png)

您需要两个仓库：一个用于前端，一个用于内容。

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_template), the frontend repository
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/zine_content), the content repository

当有新内容被推送到内容库时，触发一个仓库的发送。

## 适合哪个位置

- 如果您想尝试一些字母。

[Try the templates from our org for more information.](https://github.com/light-cms)
