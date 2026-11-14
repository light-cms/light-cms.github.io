+++
title = "Начало работы с LightCMS"
description = "Узнайте, как работает родной рабочий процесс Git-с LightCMS."
+++

## [LightCMS](https://lightcms.me) — это основанная на Git'е система управления контентом для статических сайтов

**Ваши сообщения останутся в вашем хранилище как Markdown файлы.** Каждый черновик и оставьте его как Markdown с передней частью. Git сохраняет историю версий, так что вы можете просматривать изменения, откатиться назад и работать в любом редакторе.

1. **A visual editor.** [LightCMS](https://lightcms.me) uses the [TipTap](https://tiptap.dev) editor for writing and formatting in the browser.
2. **Копилот ИИ.** Используйте его для пересмотра и улучшения черновиков.
3. **Voice dictation.** Speak and let Whisper or [Wit.ai](http://Wit.ai) turn your words into text.
4. **Светлые и темные темы.** Выберите тему, которая вам подходит.
5. **Newsletters without a third-party service.** [Newsy](https://github.com/light-cms/newsy) turns each newly published post into an announcement on GitHub, so readers can subscribe there.

---

## Как это работает

1. **Войдите в GitHub** с помощью учетной записи на GitHub.
2. **Выберите репозиторий.** Установите LightCMS приложение в репозитории, который держит ваш сайт. Он работает со статическими генераторами сайтов, которые используют фронтальное дело в файлах Markdown.
3. **Запись записи.** Редактор обрабатывает форматирование и выгрузок изображений, добавляя их.
4. **Publish.** [LightCMS](https://lightcms.me) commits the change to your repository. Ваша CI/CD сборка трубопровода и развертывает сайт на выбранный хост, например на GitHub страницах, Cloudflare Pages, Netlify, Vercel, [Surge.sh](https://surge.sh) или любое S3-совместимое хранилище.

---

## Читать далее

- [Почему LightCMS?](/blog/why-this/): рассуждение дизайна публикации на основе Git.
- [Самохостинг LightCMS](/blog/selfhost/): запустите свой собственный экземпляр.
- [Автоматизация рассылки](/blog/newsletter-email-automation/): как Ньюси доставляет сообщения без сторонних почтовых служб.

### Сравнения и пояснения

- [Статические сайты и динамические сайты](/blog/static-vs-dynamic/): почему статические сайты хорошо работают над содержанием.
- [Astro vs Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/): выбор статического генератора сайта.
- [Cloudflare Pages vs Vercel](/blog/cloudflare-pages-vs-vercel/): выбирать, куда принимать.
- [Git-based CMS против традиционной CMS](/blog/git-cms-vs-traditional-cms/): как эти две модели различаются.
- [Top Git-backed CMS platforms](/comparison/top-git-cms/): LightCMS по сравнению с Decap, TinaCMS, Keystatic, и другими.
- [Как начать блог](/blog/how-to-start-a-blog/): руководство по блогам с Markdown и статический сайт.
