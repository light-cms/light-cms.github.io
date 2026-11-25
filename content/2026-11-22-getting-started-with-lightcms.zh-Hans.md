---
title: 开始使用 LightCMS
description: 将 GitHub 仓库连接到 LightCMS，编辑浏览器中的 Markdown 内容，并通过您现有的 Git 基础部署工作流程发布。
slug: getting-started-with-lightcms
date: 2026-11-22T11:47:03.315Z
tags:
  - 闪光
  - git
  - github
  - 静态站点
draft: false
---

[LightCMS](https://lightcms.me) is a CMS for static sites. Edit Markdown in your browser and commit it to GitHub. Your existing build and deployment pipeline takes it from there.

## 开始前

您需要：

- 一个 GitHub 存储库，包含一个使用Markdown内容的静态站点。
- 部署管道，如GitHub Action、Cloudflare页面、Netlify或Vercel。
- 存储库访问权限，因此LightCMS可以读取并提交内容文件。

## 设置步骤

1. Sign in with a provider LightCMS supports.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choose where your posts, pages, and assets live.
4. Create or edit a post, including the front matter your site generator needs.
5. Publish the change, then check that your CI/CD pipeline builds and deploys the site.

## 设置后验证什么

| 检查   | 预期结果                       |
|:---- |:-------------------------- |
| 内容路径 | LightCMS读取并写入正确的Markdown文件 |
| 前台事项 | 必填字段匹配您的 SSG 主题/模板         |
| 资产   | 图像上传到预期静态/媒体目录             |
| 部署管道 | 一个提交触发站点构建成功               |
| 草稿行为 | 草稿帖子在您的 SSG 中表现为预期的        |

## 今后的步骤

- [为什么存在 LightCMS](/blog/why-this/)
- [使用 LightCMS 模板](/blog/start-with-a-lightcms-template/)
- [自我托管的 LightCMS](/blog/selfhost/)
- [配置您的存储库和 CI/CD](/blog/configuring-your-repository-cicd/)
