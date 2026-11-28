---
title: '无需付费订阅的通讯自动化'
description: >-
  使用 GitHub 和 Newsy 在没有单独电子邮件营销平台的情况下通知读者新帖子。
date: '2026-09-18T01:00.000Z'
draft: false
tags:
  - 新闻通讯
  - 新闻
  - github
  - 发布
slug: 通讯-电子邮件自动化
---

您可以从基于 Git 的博客通知读者新帖子，而不必运行一个单独的电子邮件营销平台。 [Newsy](https://github.com/light-cms/newsy) 使用 GitHub 存储库活动并签发订阅以通过 GitHub 通知发送帖子更新。

## 传统的通讯工具增加间接费用

电子邮件通讯平台可能是有用的，但它们可以为小技术博客添加操作工作：

1. 列表管理：您在一个单独的系统中保留订阅者数据。
2. 重复发布：您经常将Markdown 帖子复制到电子邮件编辑器或模板。
3. 送货操作：您监测退货、垃圾邮件投诉、发件人声誉和认证记录，如SPF、DKIM和DMARC。
4. 跟踪和隐私决定：许多平台包括打开跟踪、点击跟踪和取消订阅管理功能，您需要配置和披露这些功能。

对于开发者来说，这些功能可以超过工作流需求。折衷是您放弃营销自动化、分割和分析。

## 新系统如何使用 GitHub 通知

Newsy 将GitHub 存储库中的发布事件与订阅线程连接起来。下面的工作流程描述了预定的模型；对照目前的Newsys实施情况核实每一步，然后将其作为产品文件处理。

```text
Writer publishes in LightCMS
 │
 ▼
 Commit pushed to GitHub repository
 │
 ▼
Newsy detects a new or newly published post
 │
 ▼
Newsy posts a comment to a designated announcement issue
 │
 ▼
GitHub notifies users subscribed to that issue
```

### 交货步骤

1. 提交检测：发布操作创建或更新存储库中的Markdown文件。新人可以观看一个新帖子或 `草稿：false` 更改。
2. 公告线程：新建发布指定的 GitHub 问题的更新，例如 `通知` 问题，以及 `通讯` 标签。
3. 阅读器订阅：读者通过关注或订阅GitHub 问题订阅。
4. 通知送达：GitHub 基于每个订阅者的 GitHub 通知设置发送通知。

## 要考虑的取舍数

这种做法比一般受众更适合技术受众。

- GitHub 帐户要求：读者需要一个GitHub 帐户才能订阅。这对于许多开发者博客来说是合理的，但它可以阻止非技术读者。
- 普通通知格式：GitHub 通知不是品牌营销邮件的替代。您对布局和样式的控制范围有限。
- 有限分析：您没有得到典型的电子邮件营销指标，如开启率或点击率。您可以检查问题参与情况，但这与活动分析不同。

## 设置清单

1. 安装Newsy: 将 [Newsy GitHub App](https://github.com/apps/newsletter-newsy/installations/select_target) 添加到包含您博客的仓库中。
2. 创建订阅条目：生成或创建一个订阅链接/按钮，将读者指向公告问题。
3. 将链接添加到您的网站：将订阅链接放在您的博客布局、页脚或帖子模板中。
4. 测试流程：发布草稿，确认提交，确认问题评论，并验证订阅账户收到通知。

关于相关的安装详情，请参阅 [自托管LightCMS](/blog/selfhost/), [草稿, 修订和发布](/blog/lightcms-drafts-and-versioning/)和 [开始使用 LightCMS](/getting-started/)。
