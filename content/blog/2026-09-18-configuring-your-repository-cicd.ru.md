---
title: "Настройка вашего репозитория и CI/CD для LightCMS"
description: "Подключите статический репозиторий сайтов к LightCMS и настройте CI/CD таким образом Git автоматически развертывает ваш сайт."
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - репозиторий
  - конфигурация
  - github
  - статический
  - сайт
  - генератор
  - астро
  - хуго
preview: og-image.png
slug: configuring-your-repository-cicd
---

Чтобы опубликовать в LightCMS, вам нужен Git-репозиторий с содержимым Markdown и CI/CD рабочим процессом, который собирает и развертывает сайт по прибытии коммитов. LightCMS обеспечивает редактирование содержимого и коммиты Git; ваш трубопровод обрабатывает рендеринг и хостинг.

## Ожидается структура репозитория LightCMS

LightCMS работает со статическими генераторами сайтов, которые читают файлы Markdown с передней частью, такими как Astro, Hugo, Zola, Jekyll, Eleventy.

```text
my-blog-repo/
├── content/ # or src/content/blog/ in Astro
│ ├── hello-world.md
│ └── my-second-post.md
├──.github/
│ └── workflows/
│ └── deploy.yml # Build and deploy pipeline
├── package.json # For Node tools like Astro
└── hugo.toml # Or astro.config.mjs, zola.toml
```

Конкретный каталог содержимого зависит от вашего генератора. Например, многие Hugo сайты используют `content/`, а коллекции Astro контента обычно используют `src/content/`.

## Формат фронт-матрицы

LightCMS читает и записывает метаданные вверху файлов Markdown. Обычный блок YAML переднего дела выглядит так:

```yaml
---
title: "My First Article"
description: "A short summary of the article for preview cards and search results."
date: 2026-10-14T10:00:00Z
draft: false
tags:
  - technology
  - engineering
---
```

Если ваш сайт использует TOML или другой передний формат, убедитесь, что LightCMS поддерживает его перед подключением к репозиторию.

## Подключить GitHub репозиторий

When possible, use a scoped GitHub App installation instead of a long lived personal access token. Область действия репозитория ограничений по установке и проще проверить.

1. Войдите в [LightCMS dashboard](https://www.lightcms.me).
2. Выберите параметр для подключения репозитория.
3. Выберите GitHub аккаунт или организацию, владеющую репозиторием.
4. Предоставить доступ только к хранилищу, редактируемому LightCMS
5. Подтвердите появление ожидаемой папки с содержимым в LightCMS.

## Настройка автоматического развертывания

Когда вы опубликуете в LightCMS, изменение становится коммитом Git. Ваша платформа развертывания должна построить сайт из этого фиксации.

### Example: GitHub Actions for GitHub Pages

This example shows an Astro build deployed to GitHub Pages. Настройте команды установки/сборки и каталог вывода для вашего генератора.

```yaml
name: Deploy Website

on:
  push:
    ветвей:
      - основные

разрешения:
  содержимое: читать
  страницы: написать
  id-токен: написать

совпадения:
  группа: "страницы"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - имя: Checkout repository
        uses: actions/checkout@v4

      - имя: установка узла. s
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build static site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@main
        with:
          path: . dist

  deploy:
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: ploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@main
```

### Опция: управляемый кронштейн

Страницы Cloudflare, Vercel, и Netlify также могут строить из репозиториев. Типичные настройки сборки включают:

| Платформа | Пример команды сборки  | Пример выходной директории |
| :-------- | :--------------------- | :------------------------- |
| Уго       | `hugo --minify`        | «публичный»                |
| Астроо    | `npm запустить сборку` | `dist`                     |
| Зола      | `zola сборка`          | «публичный»                |

Управляемые платформы уменьшают конфигурацию CI, но добавляют другой сервис в ваш путь публикации. Действия GitHub сохраняют определение сборки в вашем репозитории, что облегчает аудит и миграцию.

## Проверить цикл публикации

Once LightCMS is connected and deployment is configured, test the whole publishing path:

1. Создать проект сообщения в LightCMS.
2. Опубликовать пост.
3. Подтвердите, что коммит появляется в вашем репозитории GitHub.
4. Подтвердите, что ваш CI/CD рабочий процесс или хостинг-платформа запускает сборку для этого коммита.
5. Откройте URL производства и проверьте новую страницу.

Если коммит появился, но сайт не обновляется, эта проблема обычно находится в конфигурации сборки или развёртывания, а не в самой Markdown commit. Начните с проверки CI-журналов, команд сборки, выходных каталогов и параметров ветки.
