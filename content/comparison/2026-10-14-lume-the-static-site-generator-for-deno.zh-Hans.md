---
title: "Lume：Deno静态站点生成器"
description: "Deno静态站点生成器解释：支持的格式、插件架构、它与Jekyl、Hugo和Eleventy的比较，以及它如何符合GitCMS工作流程。"
serial: 29
date: 2026-10-14T15:40:00Z
draft: false
keywords:
  - lume 静态站点生成器
  - deno ssg
  - lume vs 11th
  - 番茄克
  - 水泥地
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - 时钟
    - deno
    - 静态站点
---

[Lume](https://lume.land("火力"的加利西亚语)是Deno生态系统中心的静态站点生成器。在Jekyl、Hugo和Eleventy的启发下，它的目标是比其中任何一个更简单地配置，同时保持同样的灵活性， 并且它本来就在 Deno 上运行，看不到"node_modules"。

---

## 灯具是什么

一个快速、可混成、可扩展的静态站点生成器，以Deno写成。你指向一个内容源目录，它通过插件管道处理你的文件。 并且它写入纯静态HTML已为任意CDN作好准备。哲学：合理的缺省、 最小的配置和每个阶段可互换。

## 格式和模板

Lume的标题功能是格式灵活性。箱外处理：

- **Markdown** (使用 GitHub-flavored 语法、 脚注等插件)
- **YAML 和 JSON 数据文件**
- **JavaScript 和 TypeScript 模块** 作为页面或数据源
- **JSX** (预设组件渲染到静态HTML)
- **Nunjucks** 和通过插件的其他模板语言

这最后一点: Lume站点可以将Markdown 文章和JSX组件在同一版本中混合, 因此，内容繁多的网站偶尔也有交互式部分，这是很自然的。

## 生态环境

- **插件** 涵盖从语法高亮(Prism, Shiki) 到图像转换, 站点和种源: 第十一风格的“组装你自己的管道”模型，带有Deno-norigonomicics。
- **Deno 工具链**：构建在TypeScript，安全-默认执行，以及在没有软件包管理员仪式的情况下可复制的环境。
- **被Deno** 打包：在官方教程中使用，它是“我用什么来制作一个静态站点？

## 适合哪个位置

留言占用着与 [Eleventy](/blog/eleventy-vs-astro/相同的位置：最小输出、模板自由、不强加客户端框架。选择如果你的世界是Deno/TypeScript；如果你的世界是节点则选择十一大； 如果您想要将组件岛屿内置，请选择 [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)。范围更广的字段在[最佳静态站点生成器](/blog/best-static-site-generators/)中被调查。

## 内容和 CMS 工作流

Lume像这个类别中的每个生成器一样从你的仓库读取Markdown的前缀。 Pair it with a Git based CMS ([LightCMS](/getting-started/) or the [wider field](/comparison/top-git-cms/)) and writers publish visually while Lume compiles the commits into HTML. 部署目标是通常免费的静态主机([comparison](/blog/cloudflare-pages-vs-github-pages/))。

---

## 常见问题

### Lume 是一个 CMS 还是静态站点生成器？

一个静态站点生成器。用于编辑图层，将它与基于 Git 的 CMS 对应，后者将Markdown 提交到其源目录中。

### Lume与Eleventy之间有什么区别？

在哲学上很少：两者都产生零JS静态输出带有模版自由。 Lume是登陆原生的 TypeScript 构建; Eleventy 运行于节点上与更大的生态系统。

### Lume是否支持JSX？

是。预设组件可以与Markdown页面一起渲染到静态HTML，这是它最热爱的功能之一。

### 是否快乐？

是。与产生静态输出的所有单过程发电机一样，构建以秒为单位进行测量，访客每种SSG产品都会收到相同的缓存HTML。
