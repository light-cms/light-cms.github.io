---
title: Configuring Repository & CI/CD for Lightcms
description: >-
  Connect a Hugo, Astro, Jekyll, or SvelteKit repository to LightCMS, then automate builds and deployments with CI/CD for a streamlined static site publishing workflow.
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - конфигурация репозитория
  - действия github
  - генератор статических сайтов
  - астро
  - хуго
preview: og-image.png
slug: 2026-09-18-configuring-your-repository-cicd
---

Connecting your static site to [LightCMS](https://www.lightcms.me) Requires only two ingredients: a GitHub repository containing your content files and an automated CI/CD workflow that builds and deploys your website whenever changes are committed.

Follow this guide to structure your repository, install the [LightCMS](https://www.lightcms.me) GitHub App, and set up automated deployments.

---

## 1. Organize Your Content Repository

LightCMS integrates seamlessly with any static site generator (SSG) that manages content as Markdown (.md or .mdx) files using YAML front matter.

Типичный макет репозитория выглядит так:

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

### Стандартный заголовок передней части

[LightCMS](https://lightcms.me) Reads and writes YAML front matter metadata at the top of your Markdown files. Стандартный заголовок включает:

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

## 2. Install the LightCMS GitHub App

To let LightCMS read your files and automatically commit new articles:

1. Sign in to your LightCMS instance using your GitHub account.
2. In the dashboard, click **Connect Repository** (or **Install GitHub App**).
3. GitHub, will prompt you to choose the account or organization where you want to install the app.
4. Choose either **All repositories** or **Only selected repositories** To restrict access to just your blog repo.
5. After authorizing, your repository will appear in the LightCMS dashboard.

## 3. Настройка автоматических установок CI/CD

Each time you click **Publish** or **Save** in LightCMS, the platform automatically commits the content as a Markdown file to your Git repository. To convert those commits into live website updates, set up a GitHub Actions workflow.

### Example A: Deploying an Astro Site to GitHub Pages (Static Host)

Создайте `.github/workflows/deploy.yml` в вашем репозитории:

```yaml
name: Deploy Website

on:
  push:
    ветвей:
      - основные

разрешения:
  содержимое: читать
  страницы: написать
  id-токен: написать

совпадения:
  группа: "страницы"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - имя: Checkout repository
        uses: actions/checkout@v4

      - имя: установка узла. s
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
          path: . dist

  deployment :
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

### Пример B: Hugo Deployment (Cloudflare Страницы или Vercel)

Если вы используете [Hugo](https://gohugo.io), такие платформы, как **Cloudflare Pages**, **Netlify**, или **Vercel** может создать ваш репозиторий автоматически, когда он получит GitHub push событие:

1. Подключите ваш репозиторий на GitHub напрямую к [Страницам с Флажем Облаков](https://pages.cloudflare.com) или [Vercel](https://vercel.com).
2. Установите команду сборки в `hugo --minify`.
3. Установил выходной каталог сборки в `public`.
4. Whenever [LightCMS](https://lightcms.me) pushes a new post to `main`, the hosting platform automatically regenerates and deploys your site globally in seconds.

---

## 4. Рекомендации хостинга платформы

Несколько надежных платформ предлагают щедрые бесплатные уровни для хостинга статических сайтов:

- [**Vercel**](https://vercel.com): Zero configuration deployments for modern JS frameworks, automatic SSL, preview URLs for draft pull requests.
- [**Cloudflare Pages**](https://pages.cloudflare.com): Global edge network in 300+ cities, unlimited bandwidth on the free tier.
- [**Netlify**](https://www.netlify.com): Pioneer of Jamstack hosting with rich form and asset handling.
- [**GitHub Pages**](https://pages.github.com): Direct built in hosting for open source and personal repositories.
- [**Deno Deploy**](https://deno.com/deploy): Lightweight edge hosting for JavaScript and static web assets.

---

## 5. Проверить цикл публикации

Как только ваш репозиторий настроен и установлен CI/CD:

1. Open your [LightCMS](https://lightcms.me) Editor and create a new post.
2. Добавьте ваш контент и нажмите **Опубликовать**.
3. Check the **Actions** Tab on your GitHub repository. Your CI/CD workflow runs on the [LightCMS](https://lightcms.me) Commit.
4. В течение двух минут ваш новый пост находится на вашем сайте.
