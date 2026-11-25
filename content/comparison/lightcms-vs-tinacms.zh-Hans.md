---
title: "LightCMS vs TinaCMS：一个书写桌对页面编辑"
description: "Compare LightCMS and TinaCMS for Git based content: a focused document editor versus editing content directly on the rendered page."
serial: 39
date: 2026-10-16T10:30:00Z
draft: false

tags:
  - 闪光
  - tinacms
  - 厘米
  - 比较
slug: lightcms-vs-tinacms
---

TinaCMS和LightCMS都将内容保存为Git仓库中的Markdown。最大的差别是你在哪里进行编辑。 TinaCMS允许您点击渲染页面并在上下文中进行编辑。 LightCMS给您一个单独的写作空间，文档是焦点所在。

这两种做法都是不正确的。这取决于你是在一个登陆页面修复标题还是写一篇2 000字文章。

## 两种编辑方式

使用 TinaCMS 编辑页面本身。当布局事项时这是很好的：您可以立即看到标题对方框是否过长，或者简短描述是否适合卡片。

使用 LightCMS，您可以在文档工作区进行编辑。因为你没有滚动过去的英雄图像和布局块到达第14段，所以长形式的写入更加调和。您写入、格式、添加图像和发布。

|         | LightCMS   | TinaCMS           |
| ------- | ---------- | ----------------- |
| 编辑模式    | 独立文档编辑器    | 页面/上下文编辑          |
| 内容存储    | Git 仓库     | Git 仓库            |
| 图案      | 在应用程序中管理   | 代码/配置定义           |
| 最好的     | 文章、文档、更新日志 | 登陆页面、页面副本、组件驱动的网站 |
| AI 起草工作 | 内置于        | 未捆绑的              |
| 语音听音    | 内置于        | 未捆绑的              |

## TinaCMS更有意义。

当内容生活在设计页面内时，TinaCMS是方便的。如果您正在编辑营销副本、组件props或页面中布局所在的部分，在编辑时看到实际页面是有用的。它的方案内代码模型也适合想要像代码一样审查内容结构的开发者团队。

## 当LightCMS更有意义时

当书写本身是工作时，LightCMS会变得更好。在文档编辑器中起草文章、文档和发布笔记比在装满布局组件的页面中更容易。它也可以为非开发者管理前台事项，所以作者不需要只是为了添加一个字段打开拉取请求。

## 二者之间的选择

如果您的团队想到页面和组件，并且在代码中管理内容图表，请选择 TinaCMS。如果您的团队想要在文章中选择LightCMS，并希望作者在没有开发者帮助的情况下工作。 Tina给你上下文；LightCMS给你关注。

一个简单的测试：尝试在两个样式中编辑相同的内容。如果你想要看到布局, Tina's model 适合. 如果你不断想要较少的分散，LightCMS可能会这样做。 See [LightCMS vs Keystatic](/comparison/lightcms-vs-keystatic/) or [LightCMS vs Decap CMS](/comparison/lightcms-vs-decap-cms).
