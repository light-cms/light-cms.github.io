---
title: Начало работы с LightCMS
description: Подключите GitHub репозиторий к LightCMS, редактируйте Markdown содержимое в браузере и публикуйте через ваш существующий Git рабочий процесс установки.
slug: getting-started-with-lightcms
date: 2026-11-22T11:47:03315Z
tags:
  - молнии
  - git
  - github
  - статические сайты
draft: ложь
---

[LightCMS](https://lightcms.me) is a CMS for static sites. Edit Markdown in your browser and commit it to GitHub. Your existing build and deployment pipeline takes it from there.

## Перед началом

Вам нужно:

- GitHub репозиторий содержащий статический сайт, в котором используется Markdown содержимое.
- Трубопровод развертывания, такие как GitHub Actions, Cloudflare Pages, Netlify, или Vercel.
- Доступ к репозиторию, чтобы LightCMS мог считывать и фиксировать файлы содержимого.

## Шаги установки

1. Sign in with a provider LightCMS supports.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choose where your posts, pages, and assets live.
4. Create or edit a post, including the front matter your site generator needs.
5. Publish the change, then check that your CI/CD pipeline builds and deploys the site.

## Что проверить после установки

| Проверить              | Ожидаемый результат                                           |
|:---------------------- |:------------------------------------------------------------- |
| Путь к контенту        | LightCMS читает и записывает правильные файлы Markdown        |
| Передняя субстанция    | Обязательные поля соответствуют SSG теме/шаблонам             |
| Активы                 | Загрузка изображений в ожидаемую статическую/медиа директорию |
| Развернуть трубопровод | Коммит вызывает успешную сборку сайта                         |
| Поведение черновика    | Черновики посты ведут себя так, как ожидалось в вашем SSG     |

## Следующие шаги

- [Почему LightCMS существует](/blog/why-this/)
- [Начните с LightCMS шаблона](/blog/start-with-a-lightcms-template/)
- [Самохостинг LightCMS](/blog/selfhost/)
- [Настройка репозитория и CI/CD](/blog/configuring-your-repository-cicd/)
