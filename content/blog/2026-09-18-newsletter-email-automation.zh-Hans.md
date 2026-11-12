---
title: 没有付费的通讯自动化
description: "如何直接从您的 Git 存储库中运行一条博客简讯：没有邮件列表来管理、 SMTP 继电器、 无广告费"
serial: 5
date: 2026-09-18T01:50:00Z
draft: false
keywords:
  - 通讯自动化
  - github newsletter
  - 新闻
  - 静态网站通讯
preview: /og-image.webp
taxonomies:
  tags:
    - 新闻通讯
    - 新闻
    - github
    - 发布
---
电子邮件是建立专用读者的最有效方式之一。然而，传统的做法已变得繁琐和昂贵。

[LightCMS](https://lightcms.me) 使用不同的路径：**Git驱动的新闻通讯** 由 [Newsy](https://github.com/light-cms/newsy) 你已经&#x6709;_&#x662F;_&#x540E;端的仓库，所以你可以完全丢弃新闻通讯服务。

---

## 传统通讯问题

对于常规平台，如Mailchimp, Substack, 或 Brevo，您的工作流一般需要：

1. 使用硬性订阅级别注册外部服务。
2. 管理第三方仪表板之间支离破碎的邮件列表。
3. 手动复制并粘贴你的博客文章到专有的富文本电子邮件构建器。
4. 处理过多的跟踪脚本、cookies和隐私合规要求。
5. 随着您的用户数量增加，支付大量的每月费用。

每个步骤都存在，因为电子邮件服务在您和您的读者之间。新的解剖方法消除了这个层，而不是改善它。

---

## 吉特驱动方法：新的方法

**Newsy** 哲学很简单：**你的 Git 仓库是通讯后端。**

[Newsy](https://github.com/light-cms/newsy) 是静态站点的开源通讯服务，受 [utterances](https://utteranc.es)的启发。 并且它故意在循环中没有邮件列表、SMTP中继以及没有电子邮件供应商：

1. **发布**：您在 [LightCMS](https://lightcms.me)中点击发布，Markdown文件被提交到您的资源库。
2. **检测**: Newsy Watches 推送事件。一个新添加的帖子文件(或一个从`草稿：true`到`false`的现有帖子)触发了通知。例行编辑和删除被忽略，所以日常工作不会给你的读者带来垃圾。
3. **更新**：新系统创建或更新一个单一的未解决问题，一个名为“公告”的仓库，标签为“新闻通讯”。它附有承付摘要、档案清单和员额内容；随后每一个后面的员额都是对这个问题的评论。问题可以像其他问题一样被锁定和解锁。
4. **订阅**: 你拖放一个可嵌入的订阅按钮到你的静态站点; [newsy.lightcms.me](https://newsy.lightcms.me) 从你的`所有者/repo`生成代码片段。它指向读者。他们点击**订阅** 获取每个新帖子的 GitHub 通知。

由于交货是通过GitHub自己的通知系统进行的，因此没有要出口的清单， 没有每个订阅者定价，没有可交付的调试，也没有可更新的第三方电子邮件平台。

---

## 为什么这适合于静态站点

静态站点已经有一条管道：内容已经提交，CI builds，CDN 服务器。新鲜血液进入同一流：发布页面的承诺也会宣布。没有任何内容被复制到专有编辑器中，没有任何内容需要同步。

它也是免费的静态主机：开放源码。 自动托管(Go plus a small Postgres table)并在无服务器平台上愉快地运行。没有与您的受众一致的月计划。

---

## 正在开始

1. 安装**Newsy GitHub App** 在您发布的版本库中: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target)。
2. 从 [LightCMS](https://lightcms.me)或您的终端推送一个新帖子。
3. 在 [newsy.lightcms.me](https://newsy.lightcms.me上生成订阅按钮并将其粘贴到您的网站。

读者登陆发布通知并订阅；今后每个帖子都会自动送达他们。

---

## 进一步阅读

- [新建源代码和文档](https://github.com/light-cms/newsy)
- [自托管的 LightCMS](/blog/selfhost/)：完整的环境引用
- [草拟、修订和回滚](/blog/lightcms-drafts-and-versioning/)：发布如何工作
- [开始使用 LightCMS](/getting-started/)：更广泛的工作流