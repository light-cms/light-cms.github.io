---
title: "静态站点生成器是什么？"
description: "一个静态站点生成器在部署前将内容和模板编译成静态的 HTML、CSS 和 JavaScript 文件。"
date: "2026-11-16T08:58:17.908Z"
draft: false
tags:
  - 什么是静态站点生成器
  - 静态站点生成器
  - ssg 已解释
  - 静态站点如何工作
  - 渲染前 html
slug: what-is-a-static-site-generator
---

一个静态站点生成器 (SSG) 在部署前将内容文件、模板和资源编译成静态HTML、CSS 和 JavaScript 。不是在每个请求上呈现每个页面，而是构建步骤生成一个 CDN 或 web 服务器能够直接交付的文件。

## 一个静态站点生成器如何工作

```text
Content (Markdown + front matter)
Templates and components
Assets and configuration
        │
        ▼
   SSG build
        │
        ▼
 public/ or dist/
        │
        ▼
   CDN / static host
```

典型的构建有四件事：

1. 读取内容：Parses Markdown and front materials such as title, data, tags, and draft status.
2. 应用模板：地图内容到页面、列表、分类和源布局。
3. 生成输出：写入 HTML 页面、RSS源、站点地图和搜索索引。
4. 复制资产：将图像、字体和静态文件移动到输出目录。

## B. 利益和取舍问题

| 福利       | 为什么重要？                   | 折叠式...                    |
| :------- | :----------------------- | :------------------------ |
| 快速交付     | 预建的文件可以从边缘缓存中提供          | 需要先构建步骤才能生效更改             |
| 较小的运行时地面 | 内容页面不需要每个请求的应用程序运行时间或数据库 | 动态功能需要 API 或客户端JavaScript |
| 可携带性     | 内容常常作为普通Markdown文件使用     | 模板和插件生态系统因生成器而变化          |
| 版本控制适用于  | 内容和代码可以使用 Git            | 编辑工作流可能需要 CMS 图层          |

静态场地发电机在博客、文件、营销场地和组合方面运转良好。当每个请求需要个性化服务器端渲染或实时数据库查询时，它们不太合适。

## 常用静态场址生成

受欢迎的SSG包括Astro、Hugo、Zola、Eleventy、Jekyl和SvelteKit。比较而言，请参阅[2026年最佳静态站点生成器](/blog/best-static-site-generators/)。

## 基于 Git 的 CMS 符合哪种条件

一个 SSG 句柄渲染。 A Git based CMS handles authoring by giving editors a browser interface that commits Markdown to the repository. 这种组合使交付结构保持静态，同时使非开发者可以访问内容编辑。 See [What Is a Git based CMS?](/blog/Git based-cms-explained/).
