---
title: "Content as Code: Writing Like Code"
description: >-
  Treat content like code, version it, review changes, and manage it alongside your projects. This post explores the benefits and practicalities of a content as code workflow.
date: "2026-11-04T19:22:00Z"
draft: false
tags:
  - 内容为代码
  - 文档为代码
  - git 内容
  - 标记工作流程
  - 版本控制的内容
isCJKLanguage: false
headless: false
serial: 47
preview: /og-image.png
slug: content-as-code
---

**Content as code** Is the practice of storing writing the way developers store source: plain text files in a repository, reviewed in pull requests, validated by automated checks, and deployed by a pipeline.

“文档作为代码”是旧名称。技术文献小组开始工作，它已经传播到博客、更新日志， 营销副本，以及任何曾经生活在wiki或CMS数据库中的其他东西。

## 三项承诺

作为代码的内容可到三个选项：

1. **纯文本是格式。** Markdown 或 AsciiDoc, YAML 或 TOML 前缀，UTF-8 文件。没有特有的东西，没有任何东西需要原始工具打开.
2. **存储库是记录系统。** 不是一个数据库，不是一个wiki，不是一个共享驱动器。如果它不在Git中，它就不存在。
3. **管道将内容视为构建。** Linters 检查链接和样式，预览每个合并请求和合并部署。

一旦持有这些资产，大部分好处就自动跟踪。

### 您从软件练习中获得了什么

### 审查这意味着某些内容

在文档上的拉取请求会对确切的句子提供行一级的评论、明确的批准和合并。编辑审核发生在拉取请求中，而不是包含附件的电子邮件线程。

### 回答问题的历史

`git log` On a file shows every change, author, and timestamp. “我们何时改变定价要求？”是一种搜寻，而不是调查。

### 自动化

拼写，链接检查，样式规则，前事项验证，以及预览构建在相同的 CI 上的构建代码。损坏的元数据使管道而不是实时站点失败。

### 平行工作

两个文件上的两位作者完全合并。冲突在构造中是罕见的，因为内容的单位是一个文件。

### Back up and portability

每个克隆都是完整的副本。 Moving platforms is a `git clone` Away from succeeding.

### 它获取硬件的位置

诚实的名单，因为这不是免费的：

- **Nontechnical writers need an interface.** Raw Git is a cliff. 当你将仓库配对为隐藏提交的编辑工具时，作为代码的内容实际上能够起作用， 它是基于 Git 的 CMS 工具填充的空白。
- **丰富的媒体是clumsier。** 图像和文档意味着存储库中的二进制文件：较大的克隆、厌烦的差异、偶尔的LFS文件。
- **结构有限。** 文件不加入。当内容变成相互关系时，数据库就会获得其复杂性。
- **合并冲突仍然存在。** 当文件为单独文件时，请在两个人编辑同一长文件时疼痛。
- **搜索和预览需要工具。** 维基给您即时搜索；静态站点需要索引步骤。

所有这些都没有取消出版资格。所有这些对其他形式的工作都是真实的。

## 实用应用

一个典型的发布内容即时代码设置看起来就像这样：

```text
content/
* -- - posts/
circum. - - 2026-10-16-shipping-notes.md
edicy--- 2026-10-02-release-1-4.md
lease---- pages/
textension: - about.md
interest - _index.md
```

- **Files** Carry Markdown and front matter.
- **CI** Validates front matter, checks links, and builds previews per pull request.
- **A CMS tool** Provides the writing surface for anyone who is not comfortable in an editor.
- **Deploy** Publishes the built output on merge.

版本库仍然可以被开发者识别，对作家不可见。这种平衡是一种花招。

## 为什么它会持续下去。

内容作为代码按时获胜。数据库需要他们的架构、服务器版本和供应商。 Wikis需要他们的供应商。专有文件需要供应商。

Markdown 文件目录需要一个文本编辑器，它仍将在 20 年内打开. 不论该链中任何工具会发生什么情况。对于那些旨在超越其写入的平台的内容，这就是风险管理而不是鼻子基。

The same premise runs through every Git based CMS: [LightCMS](/blog/what-is-lightcms/) Adds the writing surface, and the repository keeps the permanence. See [drafts, revisions, and rollbacks](/blog/lightcms-drafts-and-versioning/) For the workflow in detail.

### 常见问题

### 内容是否与基于 Git 的 CMS 相同？

这是一种哲学；基于《全球养护移栖物种公约》是一种执行。您可以练习内容作为代码，只有一个编辑器，基于 Git 的 CMS 为非开发者提供了一种方式。

Should writers be familiar with Git?

如果配刀是正确的。作者应该看到编辑器和发布按钮；提交、分支和评论会在下方发生。
