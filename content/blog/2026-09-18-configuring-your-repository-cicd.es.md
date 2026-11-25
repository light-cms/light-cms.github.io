---
title: "Configurar su repositorio y CI/CD para LightCMS"
description: "Conecte un repositorio estático del sitio a LightCMS y configure CI/CD para que los commits de Git implementen su sitio automáticamente."
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - repositorio
  - configuración
  - github
  - estático
  - sitio
  - generador
  - astro
  - hugo
preview: og-image.png
slug: configuring-your-repository-cicd
---

Para publicar con LightCMS, necesita un repositorio Git que contenga su contenido de Markdown y un flujo de trabajo CI/CD que construya e implemente el sitio cuando lleguen los commits. LightCMS maneja la edición de contenido y los compromisos de Git; su construcción de tuberías maneja el renderizado y el alojamiento.

## Estructura del repositorio LightCMS espera

LightCMS trabaja con generadores estáticos de sitios que leen los archivos Markdown con materia delantera, como Astro, Hugo, Zola, Jekyll, o asociación.

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

El directorio de contenido exacto depende de su generador. Por ejemplo, muchos sitios de Hugo usan `content/`, mientras que las colecciones de contenido de Astro comúnmente usan `src/content/`.

## Formato de la materia frontal

LightCMS lee y escribe metadatos en la parte superior de los archivos Markdown. Un bloque común de materia frontal YAML se ve así:

```yaml
---
title: "Mi primer artículo"
description: "Un breve resumen del artículo para ver las tarjetas de previsualización y los resultados de búsqueda.
fecha: 2026-10-14T10:00:00Z
borrador: falsa
etiquetas:
  - tecnología
  - ingeniería
---
```

Si su sitio utiliza TOML u otro formato de materia frontal, confirme que LightCMS lo soporta antes de conectar el repositorio.

## Conectar el repositorio de GitHub

When possible, use a scoped GitHub App installation instead of a long lived personal access token. Una instalación con un ámbito limita el acceso al repositorio y es más fácil de auditar.

1. Iniciar sesión en el [panel de control de LightCMS](https://www.lightcms.me).
2. Seleccione la opción para conectar un repositorio.
3. Elija la cuenta de GitHub u organización que posea el repositorio.
4. Conceder acceso sólo al repositorio que desea que LightCMS edite.
5. Confirme que la rama esperada y la carpeta de contenido aparecen en LightCMS.

## Configurar implementaciones automatizadas

Cuando publique en LightCMS, el cambio se convierte en un commit de Git. Su plataforma de despliegue necesita construir el sitio a partir de ese commit.

### Example: GitHub Actions for GitHub Pages

This example shows an Astro build deployed to GitHub Pages. Ajuste los comandos de instalación/build y el directorio de salida para su generador.

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
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@main
```

### Opción: alojamiento de borde administrado

Las páginas de Cloudflare, Vercel, y Netlify también pueden compilarse desde los commits del repositorio. Los ajustes típicos de construcción incluyen:

| Plataforma | Ejemplo de comando de compilación | Directorio de salida de ejemplo |
| :--------- | :-------------------------------- | :------------------------------ |
| Hugo       | `hugo --minify`                   | `público`                       |
| Astro      | `npm run build`                   | `dist`                          |
| Zola       | `zola build`                      | `público`                       |

Las plataformas gestionadas reducen la configuración de IC, pero añaden otro servicio a tu ruta de publicación. Las Acciones de GitHub mantienen la definición de compilación en su repositorio, lo que puede facilitar las auditorías y migraciones.

## Verificar el bucle de publicación

Once LightCMS is connected and deployment is configured, test the whole publishing path:

1. Crear un borrador en LightCMS.
2. Publicar la publicación.
3. Confirme que un commit aparece en su repositorio de GitHub.
4. Confirme que su flujo de trabajo CI/CD o plataforma de alojamiento inicia una compilación para ese commit.
5. Abre la URL de producción y revisa la nueva página.

Si el commit aparece pero el sitio no se actualiza, el problema se encuentra normalmente en la configuración de compilación o implementación, no en el propio commit de Markdown. Comience comprobando los registros de CI, el comando de compilación, el directorio de salida y la configuración de las ramas.
