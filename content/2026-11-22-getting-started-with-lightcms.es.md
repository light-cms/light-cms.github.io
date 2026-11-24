---
title: Comenzando con LightCMS
description: "Comienza con LightCMS en minutos: inicia sesión con GitHub, conecta un repositorio, escribe en el editor visual y publica Markdown limpio en tu propio repositorio de Git."
keywords:
  - comenzar con luces
  - configuración de faros
  - conectar cms del repositorio github
  - publicar markdown a git
  - editor de markdown visual
preview: /og-image.webp
taxonomies:
  tags:
    - luces
    - iniciando
    - github
    - markdown
---

[LightCMS](https://www.lightcms.me) es un sistema de gestión de contenido basado en Git para sitios estáticos. Usted edita Markdown en un editor visual, y LightCMS envía los archivos a su repositorio.

## Lo que obtienes

- **Un editor de primer escritor.** LightCMS utiliza el editor [TipTap](https://tiptap.dev) WYSIWYG, por lo que el formato se siente como una aplicación de documento en lugar de un editor de código.
- **un cobilota IA.** Borrar, reescribir y arreglar gramática sin salir del editor.
- **dicción por voz.** Habla un borrador y transcripción lo convierte en Markdown.
- **Temas claros y oscuros.** Lee y escribe en el tema que prefieras.
- **Boletines sin servicio de terceros.** [Newsy](https://github.com/light-cms/newsy) convierte cada publicación recién publicada en un anuncio de GitHub al que sus lectores pueden suscribirse.

Su contenido permanece en su repositorio como Markdown con asunto inicial. Git mantiene la historia, por lo que cada cambio es revisable, auditable y reversible.

## Cómo funciona

1. **Sign in** with your GitHub account.
2. **Elija un repositorio.** Instale la aplicación LightCMS en el repositorio que contiene su sitio. Funciona con generadores estáticos de sitios que utilizan materia frontal en archivos Markdown.
3. **Escribir.** El editor maneja el formato y carga imágenes a medida que las agregas.
4. **Publicar.** LightCMS confirma el cambio en su repositorio. Su pipeline de CI/CD construye e implementa en el host que escoge: páginas de GitHub, páginas de la barra de nubes, Netlify, Vercel, [. h](https://surge.sh), o cualquier almacenamiento de objetos compatible con S3.

## Leer siguiente

- [¿Por qué LightCMS?](/blog/why-this/): el razonamiento de diseño detrás de la publicación basada en Git.
- [Cómo iniciar un blog en 2026](/blog/how-to-start-a-blog/): la guía completa de Markdown y sitio estático.
- [Iniciar desde una plantilla](/blog/start-with-a-lightcms-template/): repositorios de inicio con la compilación ya configurada.
- [Self hosting LightCMS](/blog/selfhost/): run your own instance.
- [Automatización de boletines](/blog/newsletter-email-automation/): cómo Newsy entrega publicaciones sin un servicio de correo de terceros.
