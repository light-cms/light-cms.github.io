---
title: Начало работы с LightCMS
description: "Начните с LightCMS в минутах: войдите через GitHub, подключите репозиторий, напишите в визуальном редакторе и опубликуйте чистый Markdown в свой репозиторий Git."
keywords:
  - начало работы с помощью ламп
  - Настройка ламп
  - подключайте github репозиторий cms
  - опубликовать markdown для git
  - визуальный редактор разметки
preview: /og-image.webp
taxonomies:
  tags:
    - молнии
    - получение запущено
    - github
    - markdown
---

[LightCMS](https://www.lightcms.me) - это основанная на Git система управления контентом для статических сайтов. Вы редактируете Markdown в визуальном редакторе и LightCMS фиксирует файлы в ваш репозиторий.

## Что вы получаете

- **Первый редактор писателя.** LightCMS использует [TipTap](https://tiptap.dev) WYSIWYG, поэтому форматирование воспринимается как приложение документа вместо редактора кода.
- **An AI copilot.** Draft, rewrite, and fix grammar without leaving the editor.
- **Голосовая диктатура.** Выскажите черновик и транскрипция превращают его в Markdown.
- **Легкие и темные темы.** Читайте и пишите в предпочитаемой теме.
- **Newsletters without a third-party service.** [Newsy](https://github.com/light-cms/newsy) turns each newly published post into a GitHub announcement your readers can subscribe to.

Ваш контент остаётся в вашем репозитории как Markdown с передним делом. Git хранит историю, поэтому каждое изменение проверяется, похвально и обратимо.

## Как это работает

1. **Войдите в** с помощью вашей учетной записи GitHub.
2. **Choose a repository.** Install the LightCMS app on the repo that holds your site. Он работает со статическими генераторами сайтов, которые используют фронтальное дело в файлах Markdown.
3. **Запись.** Редактор обрабатывает форматирование и загружает изображения, добавляя их.
4. **Опубликовать.** LightCMS фиксирует изменения в вашем репозитории. Ваш конвейер CI/CD строит и развертывает на выбранный вами хост: GitHub Страницы, Страницы Облачного Флара, Netlify, Vercel, [Черепа. h](https://surge.sh), или любое S3-совместимое хранилище объектов.

## Читать далее

- [Почему LightCMS?](/blog/why-this/): дизайн рассуждения по Git на основе публикации.
- [How to start a blog in 2026](/blog/how-to-start-a-blog/): the full Markdown and static site guide.
- [Начать с шаблона](/blog/start-with-a-lightcms-template/): начальные репозитории с уже настроенной сборкой.
- [Самохостинг LightCMS](/blog/selfhost/): запустите свой собственный экземпляр.
- [Автоматизация рассылки](/blog/newsletter-email-automation/): как Ньюси доставляет сообщения без сторонних почтовых служб.
