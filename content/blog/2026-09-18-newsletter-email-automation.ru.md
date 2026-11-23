---
title: Newsletter Automation Without a Paid Subscription
description: >-
  Run your blog newsletter straight from Git: no mailing list, no SMTP API, no SaaS fees.
date: "2026-09-18T01:50:00.000Z"
draft: false
keywords:
  - автоматизация рассылки
  - github newsletter
  - новость
  - статическая рассылка сайта

taxonomies:
  tags:
    - рассылка
    - новость
    - github
    - публикация
slug: newsletter-email-automation
---

Электронная почта является одним из наиболее эффективных способов создания целевой аудитории. Традиционный способ сделать это, однако, стал громоздким и дорогостоящим.

[LightCMS](https://www.lightcms.me) takes a different route, Git driven newsletters powered by [Newsy](https://github.com/light-cms/newsy), where the repository you already have is The backend, so you can drop the newsletter service entirely.

---

## Традиционная рассылка

С традиционными платформами, такими как Mailchimp, Substack, или Brevo, ваш рабочий процесс обычно требуется:

1. Регистрация на внешнюю услугу с жестким уровнем подписки.
2. Управление фрагментированными списками рассылки по сторонним панелям.
3. Manually copying and pasting your blog post into email builders.
4. Использование блондированных скриптов отслеживания, файлов cookie и требований к соблюдению конфиденциальности.
5. Оплачивая значительную ежемесячную плату по мере роста количества абонентов.

Everyone of those steps exists because an email service sits between you and your readers. Ненавязчивый удаляет этот слой, а не улучшает его.

## The Git Driven Approach: Newsy

The **Newsy** philosophy is simple: **your Git repository is the newsletter back end.**

[Newsy](https://github.com/light-cms/newsy) — служба новостей с открытым исходным кодом для статических сайтов, вдохновленная [utterances](https://utteranc.es), и он намеренно не поддерживает список рассылки, SMTP ретранслирует и нет продавца электронной почты в цикле:

1. **Опубликовать**: Вы нажимаете "Опубликовать в [LightCMS](https://lightcms.me), и файл Markdown записан в ваш репозиторий.
2. **Обнаружить**: Newsy watches push события. Вновь добавленный пост (или существующий пост перевернул из `draft: true` в `false`) вызывает объявление. Регулярные правки и удаления игнорируются, так что повседневная работа никогда не спамит ваших читателей.
3. **Обновление**: Создает или обновляет один открытый запрос на каждое хранилище под названием `announcement` с меткой `newsletter`. В качестве комментария по этому вопросу он содержит резюме фиксации, список файлов и содержание должности; Можно заблокировать и разблокировать задачи, как и другие.
4. **Subscribe**: You embed a Subscribe button into your static site; [newsy.lightcms.me](https://newsy.lightcms.me) generates the snippet from your `owner/repo`. It points readers at the issue, where they click **Subscribe** To get GitHub notifications for every new post.

Поскольку доставка осуществляется через собственную систему уведомлений GitHub, нет списка для экспорта, нет цен на подписчика, нет отладки по доставке и нет сторонней почтовой платформы для обновления.

---

## Почему это соответствует статическому сайту

Статическая площадка уже имеет трубопровод: совершается контент, CI сборы, CDN сервисы. Новые слоты в том же потоке: коммит, который публикует страницу, также объявляет об этом. Ничто не дублируется в редакторе и ничего не требует синхронизации.

It is also free in the way static hosting is free: open source, self hostable (Go plus a small Postgres table), and it runs happily on server less platforms. Нет ежемесячного плана, который масштабировался бы с вашей аудиторией.

---

## Начало работы

1. Установите **Newsy GitHub App** в репозиторий, который вы публикуете: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Отправьте новое сообщение от [LightCMS](https://lightcms.me) или терминала.
3. Generate the Subscribe button at [newsy.lightcms.me](https://newsy.lightcms.me) And paste it into your site.

Читатели приходят к выпуску объявлений и подписываются на него, каждый пост доходит до него автоматически.

## Дальнейшее чтение

- [Новые источники и документы](https://github.com/light-cms/newsy)
- [Самохостинг LightCMS](/blog/selfhost/): ссылка на полную среду
- [Черновики, редакции и откаты](/blog/lightcms-drafts-and-versioning/): как работает публикация
- [Начало работы с LightCMS](/getting-started/): более широкий рабочий процесс
