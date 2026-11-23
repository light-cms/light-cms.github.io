---
title: Newsletter Automation Without a Paid Subscription
description: >-
  Run your blog newsletter straight from Git: no mailing list, no SMTP API, no SaaS fees.
date: "2026-09-18T01:50:00.000Z"
draft: false
keywords:
  - automatización del boletín de noticias
  - github newsletter
  - nuevo
  - boletín estático del sitio

taxonomies:
  tags:
    - boletín de noticias
    - nuevo
    - github
    - publicando
slug: newsletter-email-automation
---

El correo electrónico es una de las maneras más efectivas de crear una audiencia dedicada. Sin embargo, la forma tradicional de hacerlo se ha vuelto engorrosa y cara.

[LightCMS](https://www.lightcms.me) takes a different route, Git driven newsletters powered by [Newsy](https://github.com/light-cms/newsy), where the repository you already have is The backend, so you can drop the newsletter service entirely.

---

## El problema tradicional del boletín de noticias

Con plataformas convencionales como Mail.Up, Substack, o Brevo, tu flujo de trabajo normalmente requiere:

1. Inscríbase para un servicio externo con rígidos niveles de suscripción.
2. Gestión de listas de correo fragmentadas a través de paneles de terceros.
3. Manually copying and pasting your blog post into email builders.
4. Tratar con scripts de rastreo, cookies y requisitos de cumplimiento de la privacidad.
5. Pagando comisiones mensuales sustanciales a medida que su cuenta de suscriptores crece.

Everyone of those steps exists because an email service sits between you and your readers. Newsy elimina esa capa en lugar de mejorarla.

## El acercamiento de Git Dr: Newsy

The **Newsy** philosophy is simple: **your Git repository is the newsletter back end.**

[Newsy](https://github.com/light-cms/newsy) es un servicio de boletines de código abierto para sitios estáticos, inspirados en [utterances](https://utteranc.es), y no mantiene deliberadamente ninguna lista de correo, ningún repetidor SMTP, y ningún proveedor de correo en el bucle:

1. **Publicación**: Haz clic en Publicar en [LightCMS](https://lightcms.me), y el archivo Markdown está comprometido con tu repositorio.
2. **Detectar**: Relojes novatos empujan eventos. Un archivo de publicación recientemente agregado (o una publicación existente volteada de `borrador: true` a `false`) activa un anuncio. Las ediciones y eliminaciones rutinarias son ignoradas, por lo que el trabajo cotidiano nunca envía spam a sus lectores.
3. **Upsert**: Newsy crea o actualiza un solo asunto abierto por repositorio titulado `announcement` con la etiqueta `newsletter`. Lleva el resumen del commit, la lista de archivos y el contenido del posteo; cada post posterior cae como un comentario sobre ese tema. Los problemas pueden ser bloqueados y desbloqueados como cualquier otro.
4. **Subscribe**: You embed a Subscribe button into your static site; [newsy.lightcms.me](https://newsy.lightcms.me) generates the snippet from your `owner/repo`. It points readers at the issue, where they click **Subscribe** To get GitHub notifications for every new post.

Debido a que la entrega se ejecuta a través del propio sistema de notificación de GitHub, no hay lista para exportar, sin precios por suscriptor, sin depuración de entrega, y sin plataforma de correo electrónico de terceros para renovar.

---

## Por qué esto encaja en un sitio estático

Un sitio estático ya tiene un pipeline: el contenido está comprometido, CI construye, el CDN sirve. Ranuras novedosas en el mismo flujo: el commit que publica la página también lo anuncia. Nada se duplica en un editor propio, y nada necesita sincronizarse.

It is also free in the way static hosting is free: open source, self hostable (Go plus a small Postgres table), and it runs happily on server less platforms. No hay ningún plan mensual que se adapte a tu audiencia.

---

## Comenzando

1. Instala la **aplicación Newsy GitHub** en el repositorio que publicas de: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Enviar una nueva entrada, desde [LightCMS](https://lightcms.me) o tu terminal.
3. Generate the Subscribe button at [newsy.lightcms.me](https://newsy.lightcms.me) And paste it into your site.

Los lectores aterrizan en la edición del anuncio y se suscriben allí; cada publicación futura llega a ellos automáticamente.

## Leyendo más

- [Fuente nueva y documentación](https://github.com/light-cms/newsy)
- [LightCMS de auto-alojamiento](/blog/selfhost/): la referencia de entorno completa
- [Borradores, revisiones y rollbacks](/blog/lightcms-drafts-and-versioning/): cómo funciona la publicación
- [Empezando con LightCMS](/getting-started/): el flujo de trabajo más amplio
