---
title: 配置您的存储库和 CI/CD
description: 连接一个静态站点存储库(Hugo、 Astro、 Jekyl、 SvelteKit) 到 LightCMS 并自动使用 CI/CD 部署。
serial: 3
date: 2026-09-18T01:42:00Z
draft: false
keywords:
  - 仓库配置
  - github 操作
  - 静态站点生成器
  - astro
  - 乌戈文
preview: /og-image.png
taxonomies:
  tags:
    - 配置
    - github
    - cicd
    - 闪光
---

将您的静态站点连接到 [LightCMS](https://lightcms.me)只需要两个成份：一个包含您的内容文件的 GitHub 仓库和一个自动的 CI/CD 工作流，每当发生更改时都会构建和部署您的网站。

按照本指南来构建您的仓库，安装 [LightCMS](https://lightcms.me) GitHub App，并设置自动部署。

---

## 1. 结构您的内容库

[LightCMS](https://lightcms.me) 本来可以使用任何静态站点生成器 (SSG) 将内容存储为 Markdown (`.md` 或 `.mdx`) 文件的 YAML 前缀。

典型的仓库布局看起来像这样：

```text
my-blog-repo/
├── content/               # or src/content/blog/ in Astro
│   ├── hello-world.md
│   └── my-second-post.md
├── .github/
│   └── workflows/
│       └── deploy.yml     # Automated build & deploy pipeline
├── package.json
└── astro.config.mjs       # or config.toml for Hugo
```

### 标准前台大师标题

[LightCMS](https://lightcms.me) 读取并在您Markdown文件顶部写入 YAML 前端事项元数据。标准标题包括：

```markdown
---
title: My First Article
description: A short overview of the article for SEO and cards.
date: 2026-10-14T10:00:00Z
draft: false
tags:
  - technology
  - blogging
---

Your article content begins here...
```

---

## 2. 安装 [LightCMS](https://lightcms.me) GitHub 应用程序

要允许 [LightCMS](https://lightcms.me读取您的文件并提交新写的文章：

1. 使用您的 GitHub 帐户登录到您的 [LightCMS](https://lightcms.me) 实例
2. 导航到您的仪表盘，然后点击**连接仓库** (或**安装 GitHub 应用程序**)。
3. GitHub 会提示您选择要安装的帐户或组织。
4. 您可以授予访问**所有仓库** 的权限，或者选择 **仅选择仓库** 以严格限制访问您的博客仓库的权限。
5. 一旦授权，您的仓库将出现在您的 [LightCMS](https://lightcms.me) 仪表盘中。

---

## 3. 配置自动CI/CD部署

每次您在 [LightCMS](https://lightcms.me中点击 **发布** 或 **保存** 时，应用程序都直接将内容以 Markdown 文件提交到您的 Git 仓库中。要将这些提交变成实时网站更新，请配置 GitHub 操作流程。

### 示例: Astro 部署 (GitHub 页面/静态主机)

在你的资源库中创建 `.github/workflows/dep.yml`

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
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${% raw %}{{ steps.deployment.outputs.page_url }}{% endraw %}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 例B：雨果部署(Cloudflare页面或Vercel)

如果您正在使用 [Hugo](https://gohugo.io)，平台，例如 **Cloudflare Pages**，**Netlify**， 或 **Vercel** 可以在接收到GitHub 推送事件时自动构建您的资源库：

1. 将您的 GitHub 仓库直接连接到 [Cloudflare 页面](https://pages.cloudflare.com) 或 [Vercel](https://vercel.com)。
2. 将构建命令设置为“hugo --minify\`”。
3. 将构建输出目录设置为“公开”。
4. 每当 [LightCMS](https://lightcms.me) 推送一个新帖子到 `main`，主机平台将自动重新生成并在几秒钟内在全球部署您的网站。

---

## 4. 托管平台建议

几个可靠的平台为托管静态站点提供慷慨的免费等级：

- **[Vercel](https://vercel.com)**：当代JS框架零配置，自动SSL，预览草稿合并请求的 URL。
- **[Cloudflare 页面](https://pages.cloudflare.com)**: 在300多个城市中的全球边缘网络，在自由级别上的无限带宽。
- **[Netlify](https://www.netlify.com)**: Jambstack 主机的先锋，拥有丰富的形式和资产处理。
- **[GitHub Pages](https://pages.github.com)**：直接建立在开源和个人资源库的主机中。
- **[Deno Deplow](https://deno.com/deploy)**: JavaScript和静态网络资源的轻量边缘托管。

---

## 5. 验证发布循环

一旦您的资源库配置完毕且CI/CD已经到位：

1. 打开您的 [LightCMS](https://lightcms.me)编辑器并创建一个新帖子。
2. 添加您的内容，然后点击 **发布** 。
3. 在您的 GitHub 仓库中检查 **Actions** 标签。您的 CI/CD 工作流运行在 [LightCMS](https://lightcms.me) 提交。
4. 在一两分钟内，您的新帖子将在您的网站上直播。
