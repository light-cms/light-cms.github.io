---
title: "Markdown是什么？"
description: "Markdown is a markup format that uses simple symbols for formatting text."
date: "2026-10-14T15:00:00.000Z"
draft: false

slug: what-is-markdown
---

Markdown 是用简单符号写入结构化文档的纯文本标记格式。它通常用于文档、README 文件、备注。 和静态站点内容，因为源仍可作为文本读取，可以转换为 HTML。

## 基本Markdown 语法

````md
# 标题1

## 标题2

一个带粗体和 _斜体文本的段落。

- 一个子项
- 另一个子项

1. 一个编号项
2。 另一个编号项

[链接文本](https://example.com)
![Alt text](/images/photo.jpg)

`inline code`

```js
console.log("hello, web");
```
````

不同的Markdown flavors 添加了诸如表格、任务列表、脚注和栅栏代码属性等功能。通用标志包括Commonmark和GitHub Flavored Markdown。

## 为什么Markdown 对静态站点很好

| 财产      | 实际福利               | 折叠式...            |
| :------ | :----------------- | :---------------- |
| 纯文本     | 易于存储、差异和版本 Git     | 限制布局控制，不允许扩展      |
| 可读源     | 作者可以在没有专有编辑器的情况下编辑 | 复杂文档可能需要 MDX 或短代码 |
| HTML 转换 | 静态网站生成器将其呈现到网页     | 输出取决于生成器和主题       |
| 可携带性    | 文件可以在工具和平台之间移动     | Flavor 差异可以影响渲染。  |

## Markdown and frontmatters

静态站点发电机往往将Markdown 与前面相配对，一个文件顶部的元数据块。

```md
---
title: "My First Post"
date: 2026-10-14T10:00:00:00Z
tags:
  - blogging
-

文章正文在此开始。
```

前台事物存储元数据；Markdown存储内容。 Together, they form a portable content format for Git based publishing workflows. For more detail, see [What Is Front Matter in Markdown?](/blog/what-is-front-matter/) and [What Is a Git based CMS?](/blog/Git based-cms-explained/).
