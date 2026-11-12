---
title: Настройка репозитория и CI/CD
description: Подключите хранилище статических сайтов (Hugo, Astro, Jekyll, SvelteKit) к LightCMS и автоматизируйте развертывание с CI/CD.
serial: 3
date: 2026-09-18T01:42:00Z
draft: false
keywords:
  - конфигурация репозитория
  - действия github
  - генератор статических сайтов
  - астро
  - хуго
preview: /og-image.png
taxonomies:
  tags:
    - конфигурация
    - github
    - пиканта
    - молнии
---

Подключение вашего статического сайта к [LightCMS](https://lightcms.me) требует только двух компонентов: репозитория GitHub, содержащего ваши файлы контента, и автоматизированного CI/CD рабочего процесса, который собирает и развертывает ваш сайт всякий раз, когда совершаются изменения.

Следуйте этому руководству, чтобы структурировать ваш репозиторий, установите приложение [LightCMS](https://lightcms.me) GitHub и настройте автоматическое развертывание.

---

## 1. Структура вашего репозитория содержимого

[LightCMS](https://lightcms.me) изначально работает с любым генератором сайта (SSG), который сохраняет содержимое как Markdown (`.md` или `.mdx`) файлов с поддержкой YAML.

Типичный макет репозитория выглядит так:

```text
my-blog-repo/
├── content/               # or src/content/blog/ in Astro
│   ├── hello-world.md
│   └── my-second-post.md
├── .github/
│   └── workflows/
│       └── deploy.yml     # Automated build & deploy pipeline
├── package.json
└── astro.config.mjs       # or config.toml for Hugo
```

### Стандартный заголовок передней части

[LightCMS](https://lightcms.me) читает и записывает метаданные фронта YAML в верхней части ваших файлов Markdown. Стандартный заголовок включает:

```markdown
---
title: My First Article
description: A short overview of the article for SEO and cards.
date: 2026-10-14T10:00:00Z
draft: false
tags:
  - technology
  - blogging
---

Your article content begins here...
```

---

## 2. Установите приложение на GitHub [LightCMS](https://lightcms.me)

To allow [LightCMS](https://lightcms.me) to read your files and commit newly written articles:

1. Войдите в свой экземпляр [LightCMS](https://lightcms.me) с помощью вашей учетной записи на GitHub.
2. Перейдите на вашу панель и нажмите **Подключить репозиторий** (или **Установить GitHub App**).
3. GitHub попросит указать учетную запись или организацию, на которую будет установлено приложение.
4. Вы можете предоставить доступ **всем репозиториям** или выбрать **Только выберите репозитории** для ограничения доступа строго к вашему блогу репозитория.
5. После авторизации ваш репозиторий появится в вашей [LightCMS](https://lightcms.me) панели управления.

---

## 3. Настройка автоматических установок CI/CD

Every time you hit **Publish** or **Save** in [LightCMS](https://lightcms.me), the app commits the content as Markdown file directly to your Git repository. Чтобы преобразовать эти коммиты в прямые обновления веб-сайтов, настройте рабочий поток действий GitHub.

### Пример: Развертывание Astro (GitHub Страницы / Статический Хост)

Создайте `.github/workflows/deploy.yml` в вашем репозитории:

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
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: . dist

  deployment :
    environment:
      name: github-pages
      url: ${% raw %}{{ steps.deployment.outputs.page_url }}{% endraw %}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Пример B: Hugo Deployment (Cloudflare Страницы или Vercel)

Если вы используете [Hugo](https://gohugo.io), такие платформы, как **Cloudflare Pages**, **Netlify**, или **Vercel** может создать ваш репозиторий автоматически, когда он получит GitHub push событие:

1. Подключите ваш репозиторий на GitHub напрямую к [Страницам с Флажем Облаков](https://pages.cloudflare.com) или [Vercel](https://vercel.com).
2. Установите команду сборки в `hugo --minify`.
3. Установил выходной каталог сборки в `public`.
4. Каждый раз, когда [LightCMS](https://lightcms.me) толкает новый пост `main`, хостинг-платформа автоматически генерирует и развертывает ваш сайт в считанные секунды.

---

## 4. Рекомендации хостинга платформы

Несколько надежных платформ предлагают щедрые бесплатные уровни для хостинга статических сайтов:

- **[Vercel](https://vercel.com)**: Нулевая конфигурация для современных фреймворков JS, автоматический просмотр URL-адресов для черновиков pull requests.
- **[Cloudflare Pages](https://pages.cloudflare.com)**: Глобальная сеть краев в 300+ городах, неограниченная пропускная способность на бесплатном уровне.
- **[Netlify](https://www.netlify.com)**: Пионер хостинга Jamstack с богатой формой и обработкой активов.
- **[GitHub Pages](https://pages.github.com)**: Прямой построенный хостинг для открытых и личных репозиториев.
- **[Deno Deploy](https://deno.com/deploy)**: Легкий краевой хостинг для JavaScript и статических веб-ресурсов.

---

## 5. Проверить цикл публикации

Как только ваш репозиторий настроен и установлен CI/CD:

1. Откройте редактор [LightCMS](https://lightcms.me) и создайте новую запись.
2. Добавьте ваш контент и нажмите **Опубликовать**.
3. Проверьте вкладку **Действия** в репозитории GitHub. Your CI/CD workflow runs on the [LightCMS](https://lightcms.me) commit.
4. В течение двух минут ваш новый пост находится на вашем сайте.
