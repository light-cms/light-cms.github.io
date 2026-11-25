---
title: "What Is a Git based CMS?"
description: "A Git based CMS stores content as files in a Git repository and turns editor actions into commits."
date: "2026-10-16T10:50:00.000Z"
draft: false
tags:
  - git
  - 厘米
  - 静态站点
  - markdown

slug: Git based-cms-explained
---

A Git based CMS stores content as files in a Git repository instead of rows in a database. 作者在视觉界面编辑内容，CMS将这些更改保存为 Git 提交。一个静态站点生成器或构建管道然后读取文件并制作站点。

## How a Git based CMS architecture works

在传统的 CMS中，内容通常存放在数据库中，应用程序会在请求时打开页面。 In a Git based CMS, authoring is separated from delivery.

```text
Writer -> Visual editor -> Git commit (Markdown + front matter)
                                A
                                

                        Git reposition
                                death

                   CI/CD build(Astro, 胡戈、索拉等

                                

                  静态文件 -> CDN -> 阅读器
```

| 组件     | Role in a Git based CMS |
| :----- | :---------------------- |
| Git 仓库 | 存储内容文件、历史记录和协作元数据       |
| CMS编辑器 | 提供一个写入接口并创建提交或拉取请求      |
| 构建管道   | 将源文件转换为可部署的静态输出         |
| CDN/主机 | 为读者服务内置文件               |

## 当您发布时发生什么

Publishing in a Git based CMS usually writes a Markdown file with front matter and commits it to the repository.

```md
---
title: "送货新仪表板"
date: 2026-10-16T09:00:00:00Z
draft: false
tags:
  - product
-

我们重新设计的仪表板现在所有用户都能使用。
```

这个承诺可以提供内容持久性、审计线索、通过你的Git主机远程备份以及部署CI/CD触发器。确切的行为取决于CMS和仓库工作流。

## 将内容存储在Git中的利益

Git 提供了数据库CMS通常单独实现的内容工作流功能：

- 修订历史: Differs 显示文件中的变化, 谁改变了, 什么时间.
- 回滚：您可以在不回滚无关内容的情况下还原特定的提交或还原文件。
- 查看工作流程：分支和拉取请求可以支持编辑审查，然后才能发布。
- 便捷性：Markdown 文件可以在静态站点发电机和主机供应商之间移动，其迁移步骤比专有数据库导出更少。

## B. 取舍和限制

Git based CMSs are a strong fit for blogs, documentation, and marketing sites. 它们不是适合每一种产品。

- 无运行时内容查询：默认情况下，静态构建不提供每个请求数据库查询。用户特有或高度相关的内容通常需要应用程序后端或数据库支持的 CMS。
- 构建延迟：发布需要构建并部署一个步骤。对于许多站点来说，这是可以接受的，但它比编辑实时数据库记录慢了。
- 合并冲突：两个人编辑同一文件可能会造成冲突。每个员额的档案工作流减少了风险。
- 权限粒度：Git 权限通常是存储库或分支导向，而不是字段级别。

My judgment is that Git based content management is the better default for editorial sites where content should be portable, reviewable, and deployable as static files. 相反的论点是可操作的：需要实时合作、复杂的权限或动态数据的团队可能花在Git周围工作的时间比得益于Git更多。

## What to evaluate in a Git based CMS

1. 编辑器品质：检查作者是否可以在不触摸原生Git命令的情况下进行舒适的编辑。
2. 前台事务处理：确认 CMS 保存您现有的字段和格式。
3. 发布模型：决定您是否需要直接提交、拉取请求或草稿分支。
4. 锁定风险：如果您停止使用 CMS，请确保您的内容仍可作为普通文件使用。

For product comparisons, see [Top Git based CMS Platforms](/comparison/top-git-cms) and [Git based vs. Traditional Headless CMS](/blog/headless-vs-Git based-cms/).
