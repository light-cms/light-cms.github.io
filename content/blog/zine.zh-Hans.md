---
title: 'Zine: 静态站点生成器'
description: 'Zine 什么：Zig 上写的一个年轻的快速静态站点生成器'
date: '1111-11T11：11：00Z'
draft: false
keywords:
  - zine 静态站点生成器
  - zine ssg
  - zig 静态站点生成器
  - zine ssg vs hugo
  - 最快的 ssg zig
tags:
  - 锌色
  - zig
  - 僵尸的
  - ssg
  - 闪光
isCJKLanguage: false
headless: false
serial: 28
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - 锌色
    - zig
    - 静态站点
slug: 锌色
---
[Zine](https://zine-ssg.io) 是一个新的静态站点生成器Zine 速度快、意见和刷新异常。这是一个年轻的项目，已经很容易地处理个人网站和博客， 并且它奖励愿意学习自己做事方式的作者。

## 什么使Zine变得不同的

- \*\*从零开始写入Zig。 \* 没有 JavaScript 运行时间、没有Ruby 没有去标准库舒适区：Markdown 渲染器、模板引擎和管弦乐队都是专用构建的。构建时间实际上是即时的。
- **它自己的模板语言脚本。** Zine 使用 SuperHTML 和 SuperMD：以及为项目设计而不是从生态系统借用的脚本模板系统。
- **Scripty**，它的脚本层，在模板本身不足时添加可编程逻辑。
- \*\*内容作为文件和布局集合。 \* Zine 将内容文件转换为 HTML，应用您的布局，并将结果复制到输出目录，经典静态模型运行得很快。
- **一流扩展**：多语言网站 (i18n)，编辑支持和文件发布目标：GitHub 页面、云层页面、Codeberg 页面和源码页面。

## 诚实的交易

Zine仓库清楚地表明：该项目很年轻，与Hugo等受欢迎的替代品尚未达到功能等同。因为Super是Zine自己的模版语言，所以有一个学习曲线：主题和社区知识较小，大多支持你自己。

对于带有博客的个人网站 (项目所说的舒适区)， Zine不仅能力强，一旦超级点击，作者的体验就会很快和愉快。

## 内容和 CMS 兼容

Zine 不像大多数静态站点发电机那样使用前端的英联邦Markdown。 所以基于 Git 的典型CMS 工作流不直接适用。

Zine 需要自己的内容格式，包括 [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/), 和 [Ziggy](https://ziggy-lang.io/)。如果您已经有Markdown内容， [md2smd](https://github.com/Pratyay360/md2smd)可以帮助在 [CommonMark](https://commonmark.org/)与Zine格式之间转换。

![](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png "Zine build管道")

您需要两个仓库：一个用于前端，一个用于内容。

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_site)，前端仓库
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/blogs_md)，内容仓库

当有新内容被推送到内容库时，触发一个仓库的发送。

## 适合哪个位置

- 如果您想尝试一些字母。

[Try the templates from our org for more information.](https://github.com/light-cms)
