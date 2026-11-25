---
title: "配置 LightCMS 的存储库和 CI/CD"
description: "连接静态站点仓库到 LightCMS 并配置 CI/CD 以便Git 自动部署您的站点。"
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - 资源库
  - 配置
  - github
  - 静态的
  - 站点
  - 生成器
  - astro
  - 乌戈文
preview: og-image.png
slug: configuring-your-repository-cicd
---

使用 LightCMS 发布， 您需要一个包含您Markdown 内容的 Git 仓库和一个 CI/CD 工作流程，在提交到达时构建和部署网站。 LightCMS处理内容编辑和 Git 提交；您的构建管道处理渲染和托管。

## 仓库结构 LightCMS 需要

LightCMS用于读取Markdown文件的静态站点发电机前端，例如Astro、Hugo、Zola、Jekyl或Eleventy。

```text
my-blog-repo/
├── content/ # or src/content/blog/ in Astro
│ ├── hello-world.md
│ └── my-second-post.md
├──.github/
│ └── workflows/
│ └── deploy.yml # Build and deploy pipeline
├── package.json # For Node tools like Astro
└── hugo.toml # Or astro.config.mjs, zola.toml
```

准确的内容目录取决于你的生成器。例如，许多Hugo网站使用 `content/`，而Astro内容收藏通常使用 `src/content/`。

## 前事项格式

LightCMS读取并在Markdown文件顶部写入元数据。一个常见的 YAML 前台事项块看起来就像这样：

```yaml
---
标题：“我的第一篇文章”
描述：“预览卡片和搜索结果的文章简短摘要。
日期：2026-10-14T10：00:00Z
草稿：false
标签：
  - technology
  - engineering
 - - -
```

如果您的网站使用 TOM或另一个前台事项格式，请确认LightCMS 在连接资源库之前支持它。

## 连接 GitHub 仓库

When possible, use a scoped GitHub App installation instead of a long lived personal access token. 范围内的安装限制了存放处的存取，更容易审计。

1. Sign in to the [LightCMS dashboard](https://www.lightcms.me).
2. 选择连接资源库的选项。
3. 选择拥有仓库的 GitHub 帐户或组织。
4. 只授予您想要LightCMS编辑的资源库访问权限。
5. 确认预期分支和内容文件夹出现在 LightCMS 中。

## 配置自动部署

当您在 LightCMS 中发布时，更改将成为一个 Git 提交。您的部署平台需要从该承诺中构建网站。

### Example: GitHub Actions for GitHub Pages

This example shows an Astro build deployed to GitHub Pages. 调整生成器的安装/构建命令和输出目录。

```yaml
name: Deploy Website

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build static site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@main
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@main
```

### 选项：管理边缘主机

Cloudflare页面、 Vercel 和 Netlify 也可以从版本库提交中构建。典型的构建设置包括：

| 平台    | 示例构建命令          | 输出目录示例   |
| :---- | :-------------- | :------- |
| 乌戈文   | `hugo --minify` | `public` |
| 埃斯特罗文 | `npm 运行构建`      | `dist`   |
| 佐拉    | `zola build`    | `public` |

已管理的平台降低了 CI 配置，但它们为您的发布路径添加了另一个服务。 GitHub 操作使构建定义保持在您的仓库中，它可以使审核和迁移变得更容易。

## 验证发布循环

Once LightCMS is connected and deployment is configured, test the whole publishing path:

1. 在 LightCMS 中创建一个草稿帖子。
2. 发布该帖子。
3. 确认你的 GitHub 仓库中出现了一个提交。
4. 确认您的 CI/CD 工作流或托管平台会为此项提交启动构建。
5. 打开production URL并检查新页面。

如果提交出现但网站未更新， 问题通常是构建或部署配置，而不是Markdown 提交本身。首先检查CI 日志、构建命令、输出目录和分支设置。
