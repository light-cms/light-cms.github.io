---
title: "什么是前台事物？您内容顶部的元数据块"
description: "前面的事项是 YAML 或 TOML 块，它位于一个Markdown 文件的顶部，这个文件告诉你网站的标题。 日期、 标签和草案状态及示例。"
serial: 45
date: 2026-10-16T11:10:00Z
draft: false
keywords:
  - 什么是首要事项
  - 前面的Markdown
  - Yaml 前缀
  - 静态站点元数据
  - markdown metadata
preview: /og-image.webp
taxonomies:
  tags:
    - markdown
    - 解释
    - 静态站点
    - 厘米
---

**Front matter** 是内容文件顶部的元数据块，从文章本身处围着。 Markdown 文件在哪里宣布它是 \*(标题、日期、标签、作者) 网站生成器可以进行渲染、排序和过滤。

如果Markdown 是帖子的主体，前面的问题就是它的标签。

---

## 看起来像什么

```markdown
---
title: Notes on Static Site Generators
description: A short summary used for SEO and social cards.
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - static-sites
  - tooling
keywords:
  - static site generators
  - ssg comparison
preview: /og-image.webp
---

The article body starts here, after the closing `---`.
```

有三件事值得注意：

1. **Fences.** 一条由三根破折号组成的直线打开并关闭方块。两者之间的一切都属于元数据；此后的一切都属于该篇文章。
2. **格式。** 这个例子是 YAML，大多数生成器的默认值。 TOML (`+++`) and JSON (`{...}`) are also used; Zola accepts all three, for instance.
3. **字段。** 诸如`title`和`date`等标准密钥为生成器所理解；诸如`keywords`或`preview`等自定义密钥可用于您的模板。

---

## 真实行为的前台行为

每个字段驱动构建中的水泥行为：

| 字段                    | 效果              |
| :-------------------- | :-------------- |
| `title`               | 第<title>页，标题和列表 |
| `描述`                  | 元描述，卡片，列表摘要     |
| `date`                | 排序，"发布在"显示中，供稿中 |
| `tags` / `categories` | 分类页面和交叉链接       |
| `draft`               | `true`时从构建中排除   |
| `slug`                | 覆盖源自文件名的 URL    |
| `模板`                  | 选择哪个布局显示页面      |
| `权重`                  | 手动排序在一个版块中      |

这就是为什么前面的类型可能会破坏一个构建: `date: 2026-13-45` 或 `tags:` 下的一个字符串选项卡无效的 YAML, 并且生成器在写入单一页面之前失败。

---

## 为什么前台事务存在

静态站点生成器无法询问数据库"此页面是什么?"因为没有数据库。他们需要元数据才能在 **以一个机器和一个人能读到的形式使用** 的内容。前沿问题解决：

- **自我描述文件** 一个帖子带有渲染它所需的一切。移动文件和它的身份与它一起移动。
- **可分割的元数据** 更改标题是一个单行提交，您可以审查并恢复任何其他更改。
- **工具友好。** 编辑器、linters和CI 脚本可以在构建前验证元数据。
- **Portable.** 相同的块在生成器之间运行，密钥有较小的差异。

---

## 共同公约

已有足够的公约规定，一致性的价值比以往更加明晰：

- **ISO 8601**：`2026-10-16T09:00:00Z`. 区域间的明确无误排序。
- **标签作为列表**，而不是逗号分隔的字符串，所以含有空格的标签不会分割成一半。
- **与连字符混合的斜角小写。** 文件名变成URL，所以`my-great-post` 会打`My Great Post.md`。
- **`草稿：true`用于未完成的工作。** 安全保存方式不需要发布。
- **一个真正的`描述`。** 一个字段最常留空，然后在链接共享时表示遗憾。

---

## CMS 适合的地方

前沿问题是Markdown的一部分，非技术性作者不必看到。它是带有尖锐边缘的语法：缩进事项，引用事项和日期格式问题。

基于 Git 的 CMS 处理它为 **form** (在标题中，选择日期，点击标签) 并且在保存时序列化有效的 YAML 。作家们从来没有想过围栏；仓库仍然收到发电机的期望。这一特征消除了静态网站出版中最常见的故障模式。

例如，LightCMS在您键入并提交时写入前事项时验证前事项(见[编辑旅行](/blog/lightcms-editor-tour/))。 所以元数据不论是谁发布都是正确的。

---

## 常见问题

### 是否需要前台？

对于日期排序部分中的页面来说，是: 发电机至少需要一个标题和日期。准确的要求取决于你的生成器方案。

### YAML vs TOML vs JSON: 我应该使用哪个？

不论你的生成器是否默认。存储库内的一致性不仅仅关系到格式本身。

### 前面是否可以包含列表和对象？

是。嵌套地图和列表是正常的：图像画廊、具有角色的作者和备用标题都是适合的。

### 描述应该有多长时间？

目标是大约140-160个字符：长度足以在搜索结果中有意义，短度不足以被截断。

### 前事项是否影响SEO？

直接：它是标题和元描述的来源，所以它是静态站点中最宝贵的小东西之一。

---

相关: [[什么是Markdown？](/blog/what-is-markdown/), [LightCMS 编辑器](/blog/lightcms-editor-tour/), 和 [一个静态站点生成器是什么](/blog/what-is-a-static-site-generator/)。
