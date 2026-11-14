---
title: Configurar su repositorio y CI/CD
description: Conecte un repositorio estático de sitios (Hugo, Astro, Jekyll, SvelteKit) a LightCMS y automatiza las implementaciones con CI/CD.
serial: 3
date: 2026-09-18T01:42:00Z
draft: false
keywords:
  - configuración del repositorio
  - acciones de github
  - generador de sitio estático
  - astro
  - hugo
preview: /og-image.png
taxonomies:
  tags:
    - configuración
    - github
    - cicd
    - luces
---

Conectar su sitio estático a [LightCMS](https://lightcms.me) requiere solo dos ingredientes: un repositorio de GitHub que contiene sus archivos de contenido y un flujo de trabajo CI/CD automatizado que construye e despliegue su sitio web cada vez que se confirman los cambios.

Sigue esta guía para estructurar tu repositorio, instala la [LightCMS](https://lightcms.me) aplicación de GitHub y configura implementaciones automáticas.

---

## 1. Estructurar tu repositorio de contenido

[LightCMS](https://lightcms.me) funciona nativamente con cualquier generador estático de sitios (SSG) que almacene el contenido como archivos Markdown (`.md` o `.mdx`) con materia frontal YAML.

Un diseño típico del repositorio se ve así:

```text
my-blog-repo/
► contenido/ # o src/contenido/blog/ en Astro
mañana: Hola-mundo. d
☆ ✓ my-second-post.md
► . ithub/
► flows/
eploy. ml # Compilación automática y despliegue pipeline
el paquete. son
→ astro.config.mjs # o config.toml para Hugo
```

### Encabezado estándar de materia frontal

[LightCMS](https://lightcms.me) lee y escribe metadatos de materia frontal YAML en la parte superior de sus archivos Markdown. Un encabezado estándar incluye:

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

## 2. Instala la aplicación [LightCMS](https://lightcms.me) de GitHub

Para permitir a [LightCMS](https://lightcms.me) leer tus archivos y confirmar los artículos recién escritos:

1. Inicia sesión en tu instancia [LightCMS](https://lightcms.me) usando tu cuenta de GitHub.
2. Vaya a su panel de control y haga clic en **Connect Repository** (o **instale la aplicación de GitHub**).
3. GitHub le pedirá que seleccione qué cuenta u organización instalar la aplicación.
4. Puedes conceder acceso a **Todos los repositorios** o seleccionar **Sólo seleccionar repositorios** para limitar estrictamente el acceso al repositorio de tu blog.
5. Una vez autorizado, tu repositorio aparecerá en tu panel de control [LightCMS](https://lightcms.me.

---

## 3. Configurar implementaciones automáticas de CI/CD

Cada vez que haces clic en **Publicar** o **Guardar** en [LightCMS](https://lightcms.me), la aplicación envía el contenido como archivo Markdown directamente a tu repositorio Git. Para convertir esos commits en actualizaciones en vivo del sitio web, configure un flujo de trabajo de GitHub Actions.

### Ejemplo: Despliegue Astro (páginas de GitHub / host estático)

Crea `.github/workflows/deploy.yml` en tu repositorio:

```yaml
name: Deploy Website

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node. s
        usos: actions/setup-node@v4
        con:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: . dist

  deploy:
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

### Ejemplo B: Despliegue de Hugo (páginas de Cloudflare o Vercel)

Si estás usando [Hugo](https://gohugo.io), plataformas como **Cloudflare Pages**, **Netlify**, o **Vercel** puede construir tu repositorio automáticamente cuando reciben un evento push de GitHub:

1. Conecta tu repositorio de GitHub directamente a [Cloudflare Pages](https://pages.cloudflare.com) o [Vercel](https://vercel.com).
2. Establece el comando de compilación a `hugo --minify`.
3. Establece el directorio de compilación a `public`.
4. Siempre que [LightCMS](https://lightcms.me) empuja una nueva publicación a `main`, la plataforma de alojamiento automáticamente regenera e implementa tu sitio globalmente en segundos.

---

## 4. Alojamiento de Plataforma Recomendaciones

Varias plataformas confiables ofrecen generosos niveles gratuitos para alojar sitios estáticos:

- **[Vercel](https://vercel.com)**: Implementos de configuración cero para frameworks JS modernos, SSL automático, previsualizar URLs para solicitudes de extracción de borradores.
- **[Páginas de Cloudflare](https://pages.cloudflare.com)**: Red de edge global en más de 300 ciudades, ancho de banda ilimitado en el nivel gratuito.
- **[Netlify](https://www.netlify.com)**: Alojamiento Pionista de Jamstack con forma enriquecida y manejo de activos.
- **[Páginas de GitHub](https://pages.github.com)**: Construido directamente en el alojamiento para repositorios de código abierto y personales.
- **[Deno Deploy](https://deno.com/deploy)**: Alojamiento de vanguardia ligero para JavaScript y activos web estáticos.

---

## 5. Verificar el bucle de publicación

Una vez que el repositorio está configurado y CI/CD está en su lugar:

1. Abre tu editor [LightCMS](https://lightcms.me) y crea una nueva publicación.
2. Añade tu contenido y haz clic en **Publicar**.
3. Revisa la pestaña **Acciones** en tu repositorio de GitHub. Su flujo de trabajo CI/CD se ejecuta en la [LightCMS](https://lightcms.me) confirmación.
4. Dentro de un minuto o dos, tu nueva publicación está en vivo en tu sitio web.
