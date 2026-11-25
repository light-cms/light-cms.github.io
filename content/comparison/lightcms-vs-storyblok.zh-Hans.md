---
title: "LightCMS vs Storyblok: 写文档与建筑页面"
description: "Compare LightCMS and Storyblok: a Git based document editor for static sites versus a hosted visual CMS for component-driven pages."
serial: 51
date: 2026-10-16T12:10:00Z
draft: false

tags:
  - 闪光
  - storyblok
  - 厘米
  - 比较
  - 头像
slug: lightcms-vs-storyblok
---

Storyblok和LightCMS都称自己是视觉编辑器，但他们以不同的方式视觉。 Storyblok可以让你从方块中创建页面并看到你编辑的布局。 LightCMS为您提供了一个干净的文档编辑器，用于在您的 Git 仓库中以Markdown 身份撰写文章。

正确的选择取决于你做什么。一个从可重复使用的组件生成的登陆页面需要一个不同于一个包含代码样本和屏幕截图的1 500个单词博客的工具。

## 他们的工作方式

Storyblok是一个无头的 CMS。内容被建制为块，编辑在视觉预览中，并通过API传送。您的前端可以获取内容并渲染它。

LightCMS is a Git based writing workspace. 内容被存储为 Markdown 文件，前缀在您的资源库中。您写入文档编辑器，提交更改，您的静态站点生成器构建站点。

|      | LightCMS    | Storyblok   |
| ---- | ----------- | ----------- |
| 内容存储 | 您的Git仓库中的文件 | 托管CMS       |
| 发货   | 静态构建到 CDN   | Content API |
| 编辑样式 | 首次写入文档      | 基于区块的视觉页面编辑 |
| 最好的  | 文章、文档、更新日志  | 登陆页面、组件驱动网站 |
| 预览   | 构建/网站预览后    | 直观预览        |
| 定价   | 自托管，无许可证费   | 以计划为基础的SaaS |

## 当Storyblok有更多意义时

当页面本身是产品时，故事会闪烁。如果营销商需要在英雄周围移动，功能网格、证词或 CTA 而不询问开发者，基于区块的视觉编辑器是有道理的。实时预览帮助布局与复制一样重要。

## 当LightCMS更有意义时

书写是产品时，LightCMS会下机。块编辑器中的长篇文章可能会感受到云雾。在一个文档编辑器中，你只是写了：标题、列表、表格、图像、代码都在流中。结果是 Git 中的普通Markdown ，这将使您的内容保持便携，您的网站很容易发布为静态文件。

## 二者之间的选择

如果您的团队需要构建并重新排列页面, 请选择 Storyblok。如果您的团队主要发布文章和文件，请选择 LightCMS，并想要更加冷静的写作体验。

如果你在围栏上，看看你最近发布的十个页面。如果它们大多是结构化的营销页面，Storyblok就适合了。如果大多数是文章或文件，LightCMS可能会感觉更好。 See also [LightCMS vs Contentful](/comparison/lightcms-vs-contentful/) and [LightCMS vs Sanity](/comparison/lightcms-vs-sanity).
