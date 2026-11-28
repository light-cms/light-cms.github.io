---
title: "LightCMS是什么？"
description: "LightCMS是基于 Git 的 CMS，具有一个视觉编辑器。它将普通Markdown 提交给您的仓库，并通过您现有的 CI/CD 触发了部署。"
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - 闪光
  - 厘米
  - git
  - markdown
---

[LightCMS](https://lightcms.me) 是一个用于发布Git上的Markdown 的内容管理系统。您在您的浏览器中写入了一个视觉编辑器，并且 [LightCMS](https://lightcms.me) 将Markdown 文件及其前缀提交给您的资源库。然后您现有的 CI/CD 管道可以建造和部署网站。

## 问题地址 LightCMS

静态场地发电机可以方便建造和部署一个场地。如果您必须编辑原生的Markdown，格式前题，或者手动解决Git冲突，为其中一个写字就不那么容易。

[LightCMS](https://lightcms.me) 给作者一个视觉编辑器，同时将内容保留在Git中。这适合于那些想要让吉特拥有权和审查权的小组。这是一个不同于数据库支持的实时协作CMS的选择。

## LightCMS如何发布内容

1. 使用 GitHub 登录。
2. 连接一个版本库与 Markdown内容。它可以是一个由Astro、Hugo、Zola、11ty、Jekyl或Next.js建造的网站。
3. 写入支持标题、链接、表格、核对列表、代码块和媒体的编辑器。
4. 公布变更。 [LightCMS](https://lightcms.me格式化Markdown
5. 您现有的 CI/CD 工作流，如GitHub 行动、云层页面、Vercel 或 Netlify 等，然后可以构建和部署网站。

由于发布创建标准的 Git 提交，您的站点仍然可以从仓库构建，如果您停止使用 LightCMS。

## 技术简介

| 属性    | LightCMS实现                                                |
| :---- | :-------------------------------------------------------- |
| 存储    | 使用 Markdown 文件和 front 的 Git 仓库                            |
| 编辑器界面 | 您的浏览器中的视觉编辑器                                              |
| AI 协助 | 编辑内书写帮助                                                   |
| 语音翻译  | 编辑器内语音听音                                                  |
| 订阅者更新 | 通过 [Newsy]GitHub 集成公告(https://github.com/light-cms/newsy) |
| 许可和主机 | 开源和自置主机                                                   |
| 可携带性  | 内容保留在您控制的仓库文件中                                            |

## 当LightCMS不合适时

LightCMS适合那些将其内容保存在Git中的站点，并且已经使用 CI/CD 来发布。考虑另一个工具，如果：

- 您需要在运行时进行关系查询、用户权限或内容 API 。一个数据库支持的无头CMS，如 [Payload](/comparison/lightcms-vs-payload-cms)或Strapi可能更适合。
- 你想要一个服务来托管公共网站。 LightCMS没有主机。 Cloudflare页面、Vercel、Netlify或 S3 可以为内建网站服务。
- 您需要一个工具来渲染您的 HTML 模板。 LightCMS没有做到这一点；你的静态网站生成器，如Hugo、Astro或Zola，处理构建。

如果您需要基于 Git 的内容管理和一个视觉编辑器， 接下来的步骤是连接一个测试仓库，并确认LightCMS会以您静态站点生成器的格式写入前缀和Markdown。
