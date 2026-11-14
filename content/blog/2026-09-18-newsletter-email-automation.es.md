---
title: Automatización de boletines sin pago
description: "Cómo ejecutar un boletín del blog directamente desde su repositorio Git con Newsy: no hay lista de correo que gestionar, no hay repetidor SMTP, no hay comisiones de sass"
serial: 5
date: 2026-09-18T01:50:00Z
draft: false
keywords:
  - automatización del boletín de noticias
  - github newsletter
  - nuevo
  - boletín estático del sitio
preview: /og-image.webp
taxonomies:
  tags:
    - boletín de noticias
    - nuevo
    - github
    - publicando
---
El correo electrónico es una de las maneras más efectivas de crear una audiencia dedicada. Sin embargo, la forma tradicional de hacerlo se ha vuelto engorrosa y cara.

[LightCMS](https://lightcms.me) toma una ruta diferente: **Boletines informativos basados en Git** alimentados por [Newsy](https://github.com/light-cms/newsy), donde el repositorio que ya tiene _es_ el backend, así que puede eliminar el servicio de boletín de noticias por completo.

---

## El problema tradicional del boletín de noticias

Con plataformas convencionales como Mail.Up, Substack, o Brevo, tu flujo de trabajo normalmente requiere:

1. Inscríbase para un servicio externo con rígidos niveles de suscripción.
2. Gestión de listas de correo fragmentadas a través de paneles de terceros.
3. Copiar y pegar manualmente la entrada de tu blog en los generadores de correo de texto enriquecido propio.
4. Tratar con scripts de rastreo, cookies y requisitos de cumplimiento de la privacidad.
5. Pagando comisiones mensuales sustanciales a medida que su cuenta de suscriptores crece.

Cada uno de estos pasos existe porque un servicio de correo electrónico se sienta entre usted y sus lectores. Newsy elimina esa capa en lugar de mejorarla.

---

## El acercamiento de Git Dr: Newsy

La filosofía de **Newsy** es simple: **tu repositorio Git es el backend del boletín.**

[Newsy](https://github.com/light-cms/newsy) es un servicio de boletines de código abierto para sitios estáticos, inspirados en [utterances](https://utteranc.es), y no mantiene deliberadamente ninguna lista de correo, ningún repetidor SMTP, y ningún proveedor de correo en el bucle:

1. **Publicación**: Haz clic en Publicar en [LightCMS](https://lightcms.me), y el archivo Markdown está comprometido con tu repositorio.
2. **Detectar**: Relojes novatos empujan eventos. Un archivo de publicación recientemente agregado (o una publicación existente volteada de `borrador: true` a `false`) activa un anuncio. Las ediciones y eliminaciones rutinarias son ignoradas, por lo que el trabajo cotidiano nunca envía spam a sus lectores.
3. **Upsert**: Newsy crea o actualiza un solo asunto abierto por repositorio titulado `announcement` con la etiqueta `newsletter`. Lleva el resumen del commit, la lista de archivos y el contenido del posteo; cada post posterior cae como un comentario sobre ese tema. Los problemas pueden ser bloqueados y desbloqueados como cualquier otro.
4. **Suscríbete**: suelta un botón de suscripción insertable en tu sitio estático; [newsy.lightcms.me](https://newsy.lightcms.me) genera el fragmento de tu `propietario/repo`. Apunta a los lectores en el número, donde hacen clic en **Suscribirse** para obtener notificaciones de GitHub por cada nueva publicación.

Debido a que la entrega se ejecuta a través del propio sistema de notificación de GitHub, no hay lista para exportar, sin precios por suscriptor, sin depuración de entrega, y sin plataforma de correo electrónico de terceros para renovar.

---

## Por qué esto encaja en un sitio estático

Un sitio estático ya tiene un pipeline: el contenido está comprometido, CI construye, el CDN sirve. Ranuras novedosas en el mismo flujo: el commit que publica la página también lo anuncia. Nada se duplica en un editor propio, y nada necesita sincronizarse.

También es gratis en la forma en que el alojamiento estático es gratuito: código abierto, autohostable (Ir más una pequeña tabla Postgres), y se ejecuta felizmente en plataformas sin servidor. No hay ningún plan mensual que se adapte a tu audiencia.

---

## Comenzando

1. Instala la **aplicación Newsy GitHub** en el repositorio que publicas de: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Enviar una nueva entrada, desde [LightCMS](https://lightcms.me) o tu terminal.
3. Genera el botón Suscribirse en [newsy.lightcms.me](https://newsy.lightcms.me) y pégalo en tu sitio.

Los lectores aterrizan en la edición del anuncio y se suscriben allí; cada publicación futura llega a ellos automáticamente.

---

## Leyendo más

- [Fuente nueva y documentación](https://github.com/light-cms/newsy)
- [LightCMS de auto-alojamiento](/blog/selfhost/): la referencia de entorno completa
- [Borradores, revisiones y rollbacks](/blog/lightcms-drafts-and-versioning/): cómo funciona la publicación
- [Empezando con LightCMS](/getting-started/): el flujo de trabajo más amplio
