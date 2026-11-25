---
title: "Configuring Your Repository and CI/CD for LightCMS"
description: "Connect a static site repository to LightCMS and configure CI/CD so Git commits deploy your site automatically."
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - repository
  - configuration
  - github
  - static
  - site
  - generator
  - astro
  - hugo
preview: og-image.png
slug: configuring-your-repository-cicd
---

To publish with LightCMS, you need a Git repository that contains your Markdown content and a CI/CD workflow that builds and deploys the site when commits arrive. LightCMS handles content editing and Git commits; your build pipeline handles rendering and hosting.

## Repository structure LightCMS expects

LightCMS works with static site generators that read Markdown files with front matter, such as Astro, Hugo, Zola, Jekyll, or Eleventy.

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

The exact content directory depends on your generator. For example, many Hugo sites use `content/`, while Astro content collections commonly use `src/content/`.

## Front matter format

LightCMS reads and writes metadata at the top of Markdown files. A common YAML front matter block looks like this:

```yaml
---
title: "My First Article"
description: "A short summary of the article for preview cards and search results."
date: 2026-10-14T10:00:00Z
draft: false
tags:
  - technology
  - engineering
---
```

If your site uses TOML or another front matter format, confirm that LightCMS supports it before connecting the repository.

## Connect the GitHub repository

When possible, use a scoped GitHub App installation instead of a long lived personal access token. A scoped installation limits repository access and is easier to audit.

1. Sign in to the [LightCMS dashboard](https://www.lightcms.me).
2. Select the option to connect a repository.
3. Choose the GitHub account or organization that owns the repository.
4. Grant access only to the repository you want LightCMS to edit.
5. Confirm that the expected branch and content folder appear in LightCMS.

## Configure automated deployments

When you publish in LightCMS, the change becomes a Git commit. Your deployment platform needs to build the site from that commit.

### Example: GitHub Actions for GitHub Pages

This example shows an Astro build deployed to GitHub Pages. Adjust the install/build commands and output directory for your generator.

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

### Option: managed edge hosting

Cloudflare Pages, Vercel, and Netlify can also build from repository commits. Typical build settings include:

| Platform | Example build command | Example output directory |
| :------- | :-------------------- | :----------------------- |
| Hugo     | `hugo --minify`       | `public`                 |
| Astro    | `npm run build`       | `dist`                   |
| Zola     | `zola build`          | `public`                 |

Managed platforms reduce CI configuration, but they add another service to your publishing path. GitHub Actions keeps the build definition in your repository, which can make audits and migrations easier.

## Verify the publishing loop

Once LightCMS is connected and deployment is configured, test the whole publishing path:

1. Create a draft post in LightCMS.
2. Publish the post.
3. Confirm that a commit appears in your GitHub repository.
4. Confirm that your CI/CD workflow or hosting platform starts a build for that commit.
5. Open the production URL and check the new page.

If the commit appears but the site does not update, the problem is usually in the build or deploy configuration, not in the Markdown commit itself. Start by checking the CI logs, build command, output directory, and branch settings.
