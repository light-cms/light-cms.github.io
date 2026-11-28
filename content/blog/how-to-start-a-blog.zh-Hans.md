---
title: "如何用静态站点生成器开始博客"
description: "一个实用指南，用Markdown、静态站点生成器、基于Git的编辑和免费静态主机启动博客。"
serial: 12
date: 2026-10-14T12:50:00Z
draft: false
tags:
  - 博客
  - 静态站点
  - markdown
  - 正在开始
---

您可以在Markdown写下博客，生成静态站点，并将其部署到静态主机。此设置保持内容可移植，保存简单的主机，并避免大多数个人博客和文档网站需要基于数据库的CMS。

## 第 1 步：选择一个静态站点生成器

选择一个符合您首选工具和内容大小的生成器。

| 生成器   | 适合度好           | 折叠式...              |
| :---- | :------------- | :------------------ |
| 埃斯特罗文 | 组件化网站、现代前端配刀工具 | Node.js 生态系统并构建配刀工具 |
| 乌戈文   | 大型内容站点，快速版本    | 转到模板语法有一个学习曲线       |
| 佐拉    | 简单的单进制工作流      | 比胡戈/埃斯特罗更小的生态系统     |
| 十一    | 弹性模板，最小输出      | 更多手动设置决定            |

See [Best Static Site Generators in 2026](/blog/best-static-site-generators/) for a broader comparison.

## 第 2 步：将帖子写入Markdown

将每个帖子存储为Markdown 文件，前缀。

```md
---
title: "My First Post"
date: 2026-10-14T10:00:00:00Z
draft: false
tags:
  - blogging
-

将帖子内容写入Markdown。
```

Markdown 能够以纯文本读取内容，并且可以跨工具轻触。它还与基于 Git 的审核和版本历史很有效。

## 第 3 步：部署到静态主机

推送资源库到 GitHub 并将其连接到静态托管平台。常见的选项包括Cloudflare页面、Vercel、Netlify和GitHub 页面。

基本部署流程看起来就像这样：

1. 将内容和模板提交到 Git。
2. 配置构建命令和输出目录。
3. 每次推送都部署到你的主分支。
4. 如果需要添加一个自定义域。

## 步骤 4: 在需要时添加基于 Git 的 CMS

如果在代码编辑器中写入会减慢您的速度，请使用基于 Git 的 CMS。它可以提供一个浏览器编辑器，同时仍然将Markdown文件提交到您的资源库。 [LightCMS](/getting-started/) 是此类别中的一个选项。

## 步骤5：维护计划

静态博客的运行时组件少于数据库CMS，但它仍然需要维护：依赖更新、损坏链接检查、内容审查和部署监测。大多数博客的交易都是有利的，因为已发布的网站没有应用程序数据库，也没有服务器端提供运行时间来维护。

关于详细的工作流程，请参阅[配置您的存储库和CI/CD 用于 LightCMS](/blog/configuring-your-repository-cicd/) 和 [静态站点与动态站点] (/blog/static-vs-dynamic/)。
