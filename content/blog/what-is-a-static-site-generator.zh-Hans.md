---
title: "静态站点生成器是什么？"
description: "一个静态站点生成器从模板和内容文件提前构建页面。"
serial: 46
date: 2026-10-16T11:20:00Z
draft: false
keywords:
  - 什么是静态站点生成器
  - 静态站点生成器
  - ssg 已解释
  - 静态站点如何工作
  - 渲染前 html
preview: /og-image.webp
taxonomies:
  tags:
    - 静态站点
    - ssg
    - 解释
    - 网页
---

\*\*静态站点生成器 (SSG) \*\* 是一个程序，它接收内容和模板，并生成一个完整的网站作为纯HTML。 在任何访问之前, CSS 和 JavaScript 文件。

这项工作不是每次请求集合一页，而是在构建时间进行一次。给读者的是完美的艺术品。

---

## 一个图表中的模型

```text
内容(Markdown + front matter) consit
模板 (HTML / JSX / Go templates)format@@0- > SSG building - > public/ - > CDN - > Browser
Configuration, 数据样式值
```

运行构建，包含站点每个页面的 `public/` 目录出现。部署该目录到可以服务文件的任何地方，并且站点是在线的。

---

## 构建实际做什么

1. **读取内容。** 标记文件以 [front matter] (/blog/what-is-front-matter/)：标题、日期、标签、草稿标记。
2. **应用模板。** 每个内容类型映射到布局：帖子、列表、标签索引、主页。
3. **生成每个页面。** 文章页面、分页列表、标签存档、RSS源和站点地图，所有预渲。
4. **复制素材。** 图像、字体、样式、脚本。
5. **Emits `public/`.** 一个没有附加运行时间的文件文件夹。

有些发电机以毫秒计；有些则以秒为单位。在读者等待时没有发生这种情况。

---

## 为什么差异问题

动态网站 (WordPress，Rails，大多数服务器渲染框架) 在每个请求上都能工作：运行代码，查询数据库，集合HTML，应答。一个静态站点已经正常工作。

其后果是结构性的：

- **速度** 最近的 CDN 边缘已经有页面。没有查询、渲染、冷却开始。
- **Security.** 没有服务器端代码执行每个请求，没有数据库监听端口，没有管理员登录到暴力武力。攻击表面是文件文件夹。
- **可靠性** 上午3时没有要崩溃的内容最常见的故障模式是一个坏的部署，通过重新部署前一个模式已经撤销。
- **成本** 带宽便宜；总是计算不便。静态站点造成几乎任何流量水平的四舍五入错误。
- **Longevity** 文件保持可读。构建配刀可能已久，但输出不会旋转。

还有一个值得认真考虑的环境论据：在靠近阅读器的缓存文件使用每次视图执行代码的能量的一小部分。[静态站点和 CO2](/blog/greener-web-static-sites/) 会被输入数字。

---

## SSGs 什么是好的 At 和他们在哪里的拼图

**优秀：** 博客、文档、登陆页面、组合以及任何有时更改内容并不断读取的网站。

**Awkward:** 必须更新数据更改的内容。（可以通过部分水合来完成）

互动不受限制。现代模式预渲染一切并将小岛屿的 JavaScript 附着在需要的地方(表单) 搜索、深色模式切换)、 [Astro]后面的想法(/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) 以及类似的工具。

---

## The Options in Brief

| 生成器                     | 语言/模板               | 签名强度                              |
| :---------------------- | :------------------ | :-------------------------------- |
| **Hugo**                | 转到模板                | 生长速度，巨型主题生态系统                     |
| **Astro**               | `.astro` 组件         | 岛屿架构、内容收藏                         |
| **Elventy**             | Nunjucks, Liquid和更多 | 零日本冲锋枪，完全控制                       |
| **Jekyll**              | 液体                  | GitHub Pages heritage, simplicity |
| **Zola**                | Tera                | 单个二进制电池包含                         |
| **SvelteKit / Next.js** | React/Svelte        | 成长为应用程序的站点                        |

The full survey is in [best static site generators](/blog/best-static-site-generators/). 所有他们都消耗相同的输入：标记前缀。

---

## CMS适合的位置

SSG 解析&#x5668;_&#x6E32;染_；它不表&#x793A;_&#x4F5C;者_。单独发布意味着在代码编辑器中编辑文件并推送提交：对开发人员是可行的，对其他每个人来说都是一个障碍。

一个 Git 支持的 CMS 填补了这个空白：它通过一个视觉编辑器将Markdown 和 frontimates 写入资源库， 而且SSG做它一直做的事情。生成器永远不会改变；作家的体验确实如此。这是 [LightCMS](/blog/what-is-lightcms/)背后的整个前提， 看到它的最快方式是[复制一个启动模板](/blog/start-with-a-lightcms-template/)，并已经配置了构建。

---

## 常见问题

### SSG是否与框架相同？

否。一个框架在运行时处理请求；一个生成器在构建时运行并生成文件。一些工具模糊了线：SwelteKit 和 Next.js 可以两者兼而有之。

### 静态站点是否支持评论、表格或搜索？

是的，通过第三方服务或客户端JavaScript：表单终点、评论提供者和浏览器侧搜索索引都是常见的。

### 我需要重建多久？

仅当内容或代码改变时。一个典型的博客建立在每个出版的基础上，一个以秒为单位测量的过程。

### 静态站点是否适合SEO？

真。快速加载，强大的核心网络维特，清洁的 crawlable HTML，且没有重复渲染问题。

### 一个静态站点能处理高流量吗？

是。流量是从缓存中提供的，因此急速变得便宜。一个动态的站点在另一种方式上工作，在这种情况下，跳跃需要花钱。

---

相关: [static vs dynamic sites](/blog/static-vs-dynamic/), [什么是Jamstack?](/blog/what-is-jamstack/), 和[在何处托管静态站点](/misc/top-static-site-hosting/)。
