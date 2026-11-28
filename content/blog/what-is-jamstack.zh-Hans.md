---
title: Jamstack是什么？
description: "Jamstack 是一个网络架构，它用于预构建标记，使用API进行动态能力，并在需要时添加JavaScript进行交互。"
serial: 20
date: 2026-10-14T14:10:00Z
draft: false
tags:
  - jamstack
  - 结构
  - 静态站点
  - api
---

Jamstack 是一个将预建标记、API和JavaScript结合起来的网页结构。不是在每个请求上从应用程序服务器上渲染每个页面 一个 Jambstack 站点服务来自 CDN 的预建文件，并使用 API 或客户端JavaScript 作为动态功能。

## 三个Jambstack组件|组件 | 角色 | 示例 |

\| :--- | :--- | | 标示| 预构建过程中生成的 HTML | 静态站点生成器输出 | APIs | 页面外的动态能力 | Forms, 搜索、付款、认证 | JavaScript | 客户端交互性 | 搜索 UI, 注释、个性化|

架构与“no JavaScript”或“no 动态行为”不同。这意味着默认送货路径是预建和缓存的，而动态行为则是故意添加的。

## 为什么团队使用 Jamstack

Jamstack站点可以快速、可缓存，并且在操作上对内容重型项目简单。它们也很适合基于 Git 的工作流：内容改变触发构建，部署产生不可变的资产。

折衷是复杂的。验证、预览、个性化和实时数据往往需要第三方服务、无服务器功能或混合渲染。

## 现代练习中的 Jamstack

现代框架模糊了静态和动态之间的界线。 Astro, Next.js, SwelteKit和其他人可以预设一些路由并动态渲染其他路由。这使得“Jamstack”不再是一个严格的规则，而是一个有用的默认值：预先构建您可以使用的功能，必要时使用动态服务。

相关阅读，请参阅[静态与动态站点](/blog/static-vs-dynamic/) 和 [静态站点生成者是什么？](/blog/what-is-a-static-site-generator/)。
