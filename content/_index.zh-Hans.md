+++
title = "开始使用 LightCMS"
description = "A practical journal on Git based CMS, static site generators, and modern publishing workflows: write in Markdown, keep your content in Git, and deploy anywhere."
+++

## [LightCMS](https://www.lightcms.me) is a Git based content management system for static sites

**您的帖子存放在您的仓库中作为Markdown文件。** 每个草稿都以Markdown的身份存放在您的仓库中，并以前面的身份发帖。 Git 保存版本历史记录，因此您可以查看更改，回滚，并在您喜欢的任何编辑器中继续工作。

1. A visual editor. [LightCMS](https://www.lightcms.me) uses the [TipTap](https://tiptap.dev) editor for writing and formatting in the browser.
2. An AI copilot. Use it to revise and improve drafts.
3. Voice dictation. Speak and let Whisper or [Wit.ai](http://Wit.ai) turn your words into text.
4. Light and dark themes. Pick the theme that suits you.
5. Newsletters without a third-party service. [Newsy](https://github.com/light-cms/newsy) turns each newly published post into an announcement on GitHub, so readers can subscribe there.

---

## 它的工作方式

1. **使用您的GitHub 帐户登录**
2. **选择一个仓库。** 在仓库中安装LightCMS应用程序，该程序将保持您的网站。它适用于在Markdown文件中使用前缀的静态站点发电机。
3. **写入** 编辑器在添加图像时处理格式化和上传图像。
4. **Publish.** [LightCMS](https://www.lightcms.me) commits the change to your repository.
   您的 CI/CD 管道构建并将站点部署到您选择的主机，如GitHub 页面， 云纸页面、 网络、 Vercel、 [Surge.sh](https://surge.sh)，或任意兼容的 S3 对象存储。

### 阅读下一页

- [为什么LightCMS?](/blog/why-this/)：基于 Git 发布的设计推理。
- [Self hosting LightCMS](/blog/selfhost/): run your own instance.
- [Newsletter automation](/blog/newsletter-email-automation/): how Newsy delivers posts without a third party email service.

### 比较和解释

- [静态站点与动态站点](/blog/static-vs-dynamic/)：为什么静态站点在内容上运作良好。
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)：选择一个静态站点生成器。
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): choosing where to host.
- [Git-based CMS vs traditional CMS](/blog/git-cms-vs-traditional-cms/): how the two models differ.
- [Top Git-backed CMS platforms](/comparison/top-git-cms/): LightCMS compared with Decap, TinaCMS, Keystatic, and others.
- [如何开始一个博客](/blog/how-to-start-a-blog/)：一个带有Markdown 和静态站点的博客指南。
