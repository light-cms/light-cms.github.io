---
title: "静态场址和碳排放：建立一个低影响网络"
description: 静态站点、CDN缓存和高效资产如何能够减少网站的能源使用，并以切实可行的方式衡量和提高页面排放量。
date: 2026-10-14T13:30:00.000Z
draft: false
tags:
  - 低碳网站
  - 静态站点co2
  - 更绿色的网络
  - 可持续的网页设计
  - 网站碳足迹
slug: greener-web-static-sites
---
静态网站可以通过从每个请求移动工作到构建时间以及从CDN提供缓存文件来减少网页服务所需的能量。它们不是自动低碳，但对于内容重量的网站，它们往往避免不必要的服务器端的计算。

## 为什么静态传送可以使用较少的能源

动态网站经常运行应用程序代码，查询数据库，并为每个请求组装HTML。 Static sites generate HTML during a build and serve the resulting files repeatedly.| Factor | Dynamic request path | Static cached path |
\| :--- | :--- | :--- |
\| Per-request work | Application logic and database queries may run | File can be served from cache |
\| Always-on infrastructure | App server/database often required | Build runs on demand; hosting can be file/CDN based |
\| Caching | Possible, but often more complex | Natural fit for immutable/static assets |
\| Payload control | Depends on app and client bundle | Depends on build output and asset choices |

实际影响取决于流量、缓存打击速率、托管能源、页面重量和客户端JavaScript。

## 如何测量网站碳影响

估计数有助于指导，而不是准确的核算。使用多个工具并跟踪一段时间内的变化。

- [网站碳计算器](https://www.websitecarbon.com/) 估计每页视图的排放量。
- [Ecograder](https://ecograder.com/) 提供以可持续性为导向的评分和建议。
- 浏览器性能指标，如最大内容涂层、总传输大小和 JavaScript 执行成本帮助识别页面权重的技术驱动因素。

实用的基线是测量您的顶级着陆页、记录传输大小和关键性能度量，然后在优化后重复使用。

## 减少页面影响的做法

1. 从 CDN 提供静态文件：缓存 HTML、CSS 、JS和靠近用户的图像。
2. Reduce JavaScript: Ship only the client side code needed for the page.
3. 优化媒体：压缩图像，酌情使用现代格式，正确大小资产。
4. 设置缓存头：长缓存周期减少重复传输。
5. 仔细选择主机：数据中心能量源影响足迹。
6. 保持内容耐久：Git中的普通Markdown 会减少重建和迁移浪费。

## Trade offs to keep in mind

静态结构不是一个完整的可持续性战略。一个有大图片、自动播放视频、重型第三方脚本或缓存较差的静态站点，其足迹可能大于精心优化的动态站点。有用的问题不是“静态还是动态？”，而是“每个页面视图需要多少工作和数据？”

关于相关的架构指南，参见[静态站点与动态站点](/blog/static-vs-dynamic/) 和 [为什么LightCMS](/blog/why-this/)。