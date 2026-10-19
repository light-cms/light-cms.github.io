---
title: Configuring Your Repository & CI/CD
description: Connect a static site repository (Hugo, Astro, Jekyll, SvelteKit) to LightCMS and automate deployments with CI/CD.
serial: 3
date: 2026-09-18T01:42:00Z
draft: false
keywords:
  - repository configuration
  - github actions
  - static site generator
  - astro
  - hugo
preview: /og-image.png
taxonomies:
  tags:
    - configuration
    - github
    - cicd
    - lightcms
---

Connecting your static site to LightCMS requires only two ingredients: a GitHub repository containing your content files and an automated CI/CD workflow that builds and deploys your website whenever changes are committed.

Follow this guide to structure your repository, install the LightCMS GitHub App, and set up automated deployments.

---

## 1. Structure Your Content Repository

LightCMS works natively with any static site generator (SSG) that stores content as Markdown (`.md` or `.mdx`) files with YAML front matter.

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

LightCMS reads and writes YAML front matter metadata at the top of your Markdown files. A standard header includes:

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

## 2. Install the LightCMS GitHub App

To allow LightCMS to read your files and commit newly written articles:

1. Sign in to your LightCMS instance using your GitHub account.
2. Navigate to your dashboard and click **Connect Repository** (or **Install GitHub App**).
3. GitHub will prompt you to select which account or organization to install the app on.
4. You can grant access to **All repositories** or select **Only select repositories** to limit access strictly to your blog repo.
5. Once authorized, your repository will appear in your LightCMS dashboard.

---

## 3. Configure Automated CI/CD Deployments

Every time you hit **Publish** or **Save** in LightCMS, the app commits your updated Markdown file directly to your specified Git branch. To turn those commits into live website updates, configure a GitHub Actions workflow.

### Example A: Astro Deployment (GitHub Pages / Static Host)

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
4. Whenever LightCMS pushes a new post to `main`, the hosting platform automatically re-generates and deploys your site globally in seconds.

---

## 4. Hosting Platform Recommendations

Several reliable platforms offer generous free tiers for hosting static sites:

- **[Vercel](https://vercel.com)**: Zero-config deployments for modern JS frameworks, automatic SSL, preview URLs for draft pull requests.
- **[Cloudflare Pages](https://pages.cloudflare.com)**: Global edge network in 300+ cities, unlimited bandwidth on the free tier.
- **[Netlify](https://www.netlify.com)**: Pioneer of Jamstack hosting with rich form and asset handling.
- **[GitHub Pages](https://pages.github.com)**: Direct built-in hosting for open-source and personal repositories.
- **[Deno Deploy](https://deno.com/deploy)**: Lightweight edge hosting for JavaScript and static web assets.

---

## 5. Verify the Publishing Loop

Once your repository is configured and CI/CD is in place:

1. Open your LightCMS editor and create a new post.
2. Add your content and click **Publish**.
3. Check the **Actions** tab on your GitHub repository. Your CI/CD workflow runs on the LightCMS commit.
4. Within a minute or two, your new post is live on your website.
