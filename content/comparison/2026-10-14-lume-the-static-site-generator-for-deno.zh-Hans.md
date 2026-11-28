---
title: "Lume：Deno静态站点生成器"
description: "Lume概览，一个为Deno构建的静态站点生成器。"
serial: 29
date: 2026-10-14T15:40:00Z
draft: false

tags:
  - ssg
  - 时钟
  - deno
  - 静态站点
---

[Lume](https://lume.land) 是为Deno生态系统构建的静态站点生成器。它从内容文件、模板和数据生成静态HTML，使它适合博客。 文档以及可部署到CDN的其他内容站点。

## 灯具提供

| 区域   | 期望什么                    | 折叠式...              |
| :--- | :---------------------- | :------------------ |
| 运行时间 | 运行于Deno                 | 比以节点为基础的发电机更小的生态系统。 |
| 内容格式 | Markdown，数据文件，模板；插件扩展格式 | 插件/配置选项增加了复杂度       |
| 模板   | 通过插件支持多个模板引擎和 JSX       | 团队需要提早选取协议          |
| 产出   | CDN/静态主机的静态文件           | 动态功能需要单独的服务         |

## 当Lume适合时

如果您的团队已经使用 Deno 并想要一个拥有灵活模板和插件管道的静态站点生成器的话，Lume 是一个合理的选择。如果您的团队依赖于节点/npm 生态系统、现有的Eleventy/Hugo/Astro 工作流量或一个大型主题市场，那么它就不那么具有说服力。

## 音频和内容编辑

Lume 处理站点生成，而不是内容编辑。如果作者需要基于浏览器的接口，将Lume与基于 Git 的 CMS 配对，该CMS 将Markdown 或兼容的内容文件提交到资源库中。

更广泛的 SSG 比较, 请参阅[2026年最佳静态站点生成器](/blog/best-static-site-generators/) 和 [Eleventy vs. Astro](/blog/eleventy-vs-astro/)。
