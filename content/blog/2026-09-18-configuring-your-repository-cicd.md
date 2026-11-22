---
title: Configuring Repository & CI/CD for Lightcms
description: >-
  Connect a Hugo, Astro, Jekyll, or SvelteKit repository to LightCMS, then
  automate builds and deployments with CI/CD for a streamlined static site
  publishing workflow.
serial: 3
date: '2026-09-18T01:42:00.000Z'
draft: false
tags:
  - repository configuration
  - github actions
  - static site generator
  - astro
  - hugo
preview: /og-image.png
slug: 2026-09-18-configuring-your-repository-cicd
---
Connecting your static site to [LightCMS](https://www.lightcms.me) Requires only two ingredients: a GitHub repository containing your content files and an automated CI/CD workflow that builds and deploys your website whenever changes are committed.

Follow this guide to structure your repository, install the [LightCMS](https://www.lightcms.me) GitHub App, and set up automated deployments.

---

## 1. Organize Your Content Repository

LightCMS integrates seamlessly with any static site generator (SSG) that manages content as Markdown (.md or .mdx) files using YAML front matter.

A typical repository layout looks like this:

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

### Standard Front Matter Header

[LightCMS](https://lightcms.me) Reads and writes YAML front matter metadata at the top of your Markdown files. A standard header includes:

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
3. GitHub will prompt you to choose the account or organization where you want to install the app.
4. Choose either **All repositories** or **Only selected repositories** To restrict access to just your blog repo.
5. After authorizing, your repository will appear in the LightCMS dashboard.

---

## 3. Configure Automated CI/CD Deployments

Every time you hit **Publish** or **Save** in [LightCMS](https://lightcms.me), the app commits the content as Markdown file directly to your Git repository. To turn those commits into live website updates, configure a GitHub Actions workflow.

### Example a: Astro Deployment (GitHub Pages / Static Host)

Create `.github/workflows/deploy.yml` in your repository:

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

### Example B: Hugo Deployment (Cloudflare Pages or Vercel)

If you are using [Hugo](https://gohugo.io), platforms like **Cloudflare Pages**, **Netlify**, or **Vercel** can build your repository automatically when they receive a GitHub push event:

1. Connect your GitHub repository directly to [Cloudflare Pages](https://pages.cloudflare.com) or [Vercel](https://vercel.com).
2. Set the build command to `hugo --minify`.
3. Set the build output directory to `public`.
4. Whenever [LightCMS](https://lightcms.me) pushes a new post to `main`, the hosting platform automatically re-generates and deploys your site globally in seconds.

---

## 4. Hosting Platform Recommendations

Several reliable platforms offer generous free tiers for hosting static sites:

- [**Vercel**](https://vercel.com): Zero config deployments for modern JS frameworks, automatic SSL, preview URLs for draft pull requests.
- [**Cloudflare Pages**](https://pages.cloudflare.com): Global edge network in 300+ cities, unlimited bandwidth on the free tier.
- [**Netlify**](https://www.netlify.com): Pioneer of Jamstack hosting with rich form and asset handling.
- [**GitHub Pages**](https://pages.github.com): Direct built in hosting for open source and personal repositories.
- [**Deno Deploy**](https://deno.com/deploy): Lightweight edge hosting for JavaScript and static web assets.

---

## 5. Verify the Publishing Loop

Once your repository is configured and CI/CD is in place:

1. Open your [LightCMS](https://lightcms.me) editor and create a new post.
2. Add your content and click **Publish**.
3. Check the **Actions** tab on your GitHub repository. Your CI/CD workflow runs on the [LightCMS](https://lightcms.me) commit.
4. Within a minute or two, your new post is live on your website.
