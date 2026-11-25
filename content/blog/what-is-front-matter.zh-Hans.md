---
title: "Markdown中的前台事物是什么？"
description: "前面的问题是 YAML、TOML或 JSON 元数据，它位于一个静态站点生成器用于标题的Markdown文件顶端， 日期、标签和模板。"
serial: 45
date: 2026-10-16T11:10:00Z
draft: false

tags:
  - markdown
  - 解释
  - 静态站点
  - 厘米
---

前台事项是内容文件顶部的元数据块，将页面描述为静态站点生成器。它通常包含标题、描述、日期、标签、草案状态和模板信息等字段。

## 常见前端格式

大多数静态站点发电机支持 YAML 前端事项，一些也支持 TOML 或 JSON 。

```md
---
title: "Notes on Static Site Generators"
description: "A short summary used in metadata and previews."
date: 2026-10-16T09:00:00Z
draft: false
tags:
 - static-sites
 - tooling
---
```

元数据位于文件顶部的分隔符之间。下面有Markdown的尸体。

## 什么前事项控制

| 字段      | 常用性      | 生成影响            |
| :------ | :------- | :-------------- |
| `title` | 页面标题和标题  | 缺少的标题可能会破坏模板或列表 |
| `date`  | 排序和发布元数据 | 无效的日期可能导致生成错误   |
| `draft` | 草稿/已发布状态 | 草稿可能被排除在生产版本之外。 |
| `tags`  | 分类页面和过滤器 | 无效的结构可以破坏分类学生成  |
| `slug`  | URL 路径覆盖 | 可以更改标准的 URL     |
| `描述`    | 元数据和预览   | 影响代码片段和社交预览     |

## 常见错误

前面的错误是静态站点构建失败的常见原因。常见问题包括无效的 YAML 缩进、不正确的日期格式，缺少特殊字符的引号，以及文件中的字段名称不一致。

A Git based CMS can reduce these errors by exposing front matter as form fields and validating values before saving. 即使有直观编辑器，您的内容仓库中的基本前事项格式保持一致。

For related reading, see [What Is Markdown?](/blog/what-is-markdown/) and [The LightCMS Editor Tour](/blog/lightcms-editor-tour/).
