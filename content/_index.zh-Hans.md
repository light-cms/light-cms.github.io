+++
title = "开始使用 LightCMS"
description = "了解Git-原生工作流如何与 LightCMS 兼容。"
+++

## [LightCMS](https://lightcms.me) 是一个基于Git的静态站点内容管理系统

**您的帖子存放在您的仓库中作为Markdown文件。** 每个草稿都以Markdown的身份存放在您的仓库中，并以前面的身份发帖。 Git 保存版本历史记录，因此您可以查看更改，回滚，并在您喜欢的任何编辑器中继续工作。

1. **一个可视编辑器。** [LightCMS](https://lightcms.me) 使用 [TipTap](https://tiptap.dev)编辑器在浏览器中写入和格式化。
2. **一个 AI 副本。** 用它来修改和改进草稿。
3. **语音字典。** 说话，让Whisper或 [Wit.ai](http://Wit.ai)将您的词变成文本。
4. **小而黑。** 选择适合您的主题。
5. **没有第三方服务的新闻通讯。** [Newsy](https://github.com/light-cms/newsy) 将每个新发布的帖子转换为 GitHub 上的公告，所以读者可以在那里订阅。

---

## 它的工作方式

1. **使用您的GitHub 帐户登录**
2. **选择一个仓库。** 在仓库中安装LightCMS应用程序，该程序将保持您的网站。它适用于在Markdown文件中使用前缀的静态站点发电机。
3. **写入** 编辑器在添加图像时处理格式化和上传图像。
4. **发布。** [LightCMS](https://lightcms.me) 将更改提交给您的资源库。您的 CI/CD 管道构建并将站点部署到您选择的主机，如GitHub 页面， 云纸页面、 网络、 Vercel、 [Surge.sh](https://surge.sh)，或任意兼容的 S3 对象存储。

---

## 阅读下一页

- [为什么LightCMS?](/blog/why-this/)：基于 Git 发布的设计推理。
- [自托管LightCMS](/blog/selfhost/)：运行您自己的实例。
- [通讯自动化](/blog/newsletter-email-automation/)：Newsy 如何在没有第三方电子邮件服务的情况下发送帖子。

### 比较和解释

- [静态站点与动态站点](/blog/static-vs-dynamic/)：为什么静态站点在内容上运作良好。
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)：选择一个静态站点生成器。
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): choosing where to host.
- [Git-based CMS vs traditional CMS](/blog/git-cms-vs-traditional-cms/): how the two models differ.
- [Top Git-backed CMS platforms](/comparison/top-git-cms/): LightCMS compared with Decap, TinaCMS, Keystatic, and others.
- [如何开始一个博客](/blog/how-to-start-a-blog/)：一个带有Markdown 和静态站点的博客指南。
