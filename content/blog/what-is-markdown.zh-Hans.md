---
title: Markdown是什么？纯文本格式增强Web
description: "Markdown 解释了：这是什么，为什么它已经存在，你需要的语法。 和 Git 基于 CMS 工具如何将纯文本变成一个发布格式。"
serial: 25
date: 2026-10-14T15:00:00Z
draft: false
keywords:
  - 什么是Markdown
  - Markdown 教程
  - Markdown 语法指南
  - 为什么使用Markdown
  - 对作者进行标记
preview: /og-image.webp
taxonomies:
  tags:
    - markdown
    - 写入
    - 内容
---

Markdown 是带少量格式符号的纯文本。约翰·格鲁贝尔于2004年创立了这个网站，以此作为编写格式化文件的最简单方式。二十年后，它已成为网站的通用语言：文献。 README 文件、笔记、通讯和数以百万计的网站将其内容保存在其中。

---

## 为什么Markdown Won

- **它没有旋转**。从2004年开始的一个`.md`文件仍然在任何文本编辑器中打开。专有文档格式过期；纯文本不。
- **美丽的差异**。因为它是文本，Git可以跟踪每一个变化，这就是为什么基于Git的CMS将内容储存为Markdown的原因。
- **很容易学习**。核心语法需要五分钟。
- **它将内容与演示文稿分开**。写入结构；让主题处理外观。
- **它在所有地方**。 GitHub, 节点导出, 静态站点生成器和 AI 工具都会说它。

## 您需要的语法

```markdown
# 标题1
## 标题2

A 段落与 **粗体** 和 *斜体* 文本。

- 一个小点
- 另一个

1。 编号列表
2。下一个项目

> 区块引用。

[链接](https://example.com)
![一张图片](/images/photo.jpg)

`inline code` 和围栏代码块：

``js
console.log("hello, web");
```
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

这个YAML前事物是CMS居住的地方：标题、日期、草案和分类法与Markdown body一起乘坐。

## 在没有语法的情况下写入 Markdown

\*\*你不再需要手写Markdown \* 基于 Git 的现代编辑器， [LightCMS](/getting-started/)，给您一个完整的图像视觉编辑器， 表单和格式化快捷键，然后序列化您的写作以清理下方Markdown。您可以轻松的写作体验，获得纯文本耐久性。

这个组合(在 Git中Markdown 顶部的视觉编辑)是整个[Git 基于 CMS 类别](/blog/git-cms-vs-traditional-cms/) 的权力。 并且它是如何获得[最佳静态站点生成器](/blog/best-static-site-generators/)中的静态站点内容的。

---

## 常见问题

### Markdown死了吗？

恰恰相反。 20多年后，它比以往任何时候都更加重要。它是GitHub、文档工具链和 AI时代写入的内容格式。

### Markdown 和 HTML之间有什么区别？

Markdown 是作者的格式 (纯文本，可写)；HTML 是渲染格式 (浏览器显示的内容)。生成器将前者转换为后者。

### 我需要学习Markdown 到博客吗？

不具有基于 Git 的 CMS：您正常写，工具为您生成Markdown 学习基础知识仍然有助于快速编辑。

### Markdown存储在哪里？

作为 ".md" 文件，最好是在 Git 仓库中，它能让你的版本历史记录、 评论和手动拥有你写的一切。
