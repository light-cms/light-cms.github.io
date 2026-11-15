---
title: "GitCMS：基于 Git 的 CMS 构建适用于 AI-Era 网站"
description: GitCMS是什么，它如何使人和 AI 在你的仓库中编辑可以审查的内容，它如何与页面CMS进行比较，以及何时选择它。
serial: 15
date: 2026-10-14T13:20:00Z
draft: false
keywords:
  - gitcms
  - gitcms vs pages cms
  - 网站的 ai cms
  - 基于 git 的 cms
  - 开源站点的cms
preview: /og-image.webp
taxonomies:
  tags:
    - 厘米
    - gitcms
    - ai
    - git
---

[GitCMS](https://gitcms.dev) 接受基于 Git 的 CMS 模型，目标是一个非常2026 问题：网站越来越多地\*\*与AI 代理人建立起来\* 团队需要一个安全的地方，人类和代理人可以编辑、审查和发布更改，然后才能进入故障。它保持与每个Git CMS相同的基础(内容生活在您的仓库中)，但增加编辑结构和 AI 工作流。

---

## GitCMS背后的概念

pitch：您的 AI 编码代理(或您的客户代理) 写入网站； GitCMS让每个人(团队、客户和代理人)有一个有管理的地方来随后进行更改。未经审核的承诺，而不是代理人的编辑着陆，而是经过CMS层的更改，可以审慎审查和公布。

这种定位使它有别于该类别的其他部分，后者主要优化人类作者：

- **Pages CMS** optimizes for simplicity: free forms over a GitHub repo ([full review](/comparison/pagescms/)).
- **Decap CMS** 优化配置：在 YAML 定义的收藏 ([完全审核](/comparison/netlifycms/))。
- **GitCMS** 优化治理：由AI协助的更改，可随时审查和获得人类批准。

## 如何工作

GitCMS连接到您的资源库和图层，一个更丰富的编辑器，编辑工作流，以及AI协助编辑您现有的文件。内容和代码更改仍然在您的仓库中提交 (没有被困在专有仓库里)，并且发布与您的正常CI/CD 管道兼容。

## 长度：

- 围绕**AI-agent workflows**设计，这是一个老的 Git CMS 工具没有解决的问题。
- 与只有形式的工具相比，有丰富的编辑经验和编辑结构。
- 保持基于核心Git的许诺：你的仓库仍然是真理的来源。

## 限制

- 一种比Decap CMS更小的生态系统的较年轻的产品。
- 与下面完全开放源码选项不同的是，付费计划超越自由等级。
- 最适合于实际使用AI 代理的团队；独作家可能不需要管理层。

## 如何Compares

|        | GitCMS    | 页面CMS      | LightCMS                        |
| :----- | :-------- | :--------- | :------------------------------ |
| 聚焦点    | AI安全发布    | 简易形式       | 完整写入工作区                         |
| 编辑器    | 富，AI助的    | 基于表单       | TipTap WYSIWYG                  |
| Extras | 代理工作流     | 无          | AI copilot, voice to text, news |
| 许可协议   | 免费级别+付费计划 | Free (MIT) | Free (Apache 2.0)               |

- [CMS vs alternatives](/comparison/pagescms/) 包含该类别的简单结尾。
- [Top Git based CMS platforms](/comparison/top-git-cms/) is the full survey.
- [LightCMS](/getting-started/) 捆绑了AI 起草版和[通讯发行](/blog/newsletter-email-automation/)，供单独出版商和团队使用。

---

## 常见问题

### GitCMS是什么？

一个基于 Git 的CMS，能够用于代码-I 和 AI-builded 网站：它提供团队、客户端， 和 AI 代理人一个可审核的地方来编辑和发布存放在您的仓库中的更改。

### GitCMS 是否免费？

单个站点有免费层级，付费计划更多。完全免费的开放源码备选方案包括Pages CMS、Decap CMS和LightCMS。

### GitCMS 如何不同于页面CMS？

Pages CMS 是 GitHub 上的最小免费表单编辑器。 GitCMS在同一个基于 Git 的模式上添加了一个更丰富的编辑、编辑工作流程和AI代理治理。

### 我需要AI 代理才能使用 GitCMS 吗？

否。但是，如果AI 代理人定期承诺到您的站点仓库，审核层是选择它的主要原因。
