---
title: "What Is a Git based CMS?"
description: "A Git based CMS stores content as files in a Git repository and turns editor actions into commits."
date: "2026-10-16T10:50:00.000Z"
draft: false
tags:
  - git
  - cms
  - sitios estáticos
  - markdown

slug: Git based-cms-explained
---

A Git based CMS stores content as files in a Git repository instead of rows in a database. Los autores editan contenido en una interfaz visual, y el CMS guarda esos cambios como Git confirma. Un generador estático de sitios o construir pipeline entonces lee los archivos y produce el sitio.

## How a Git based CMS architecture works

En un CMS tradicional, el contenido habitualmente vive en una base de datos y la aplicación renderiza páginas a tiempo de solicitud. In a Git based CMS, authoring is separated from delivery.

```text
Writer -> Visual editor -> Git commit (Markdown + front matter)
                                │
                                ▼
                        Git repository
                                │
                                ▼
                   CI/CD build (Astro, Hugo, Zola, etc.)
                                │
                                ▼
                  Static files -> CDN -> Reader
```

| Componente         | Role in a Git based CMS                                               |
| :----------------- | :-------------------------------------------------------------------- |
| Repositorio Git    | Almacena archivos de contenido, historial y metadatos de colaboración |
| Editor CMS         | Proporciona una interfaz de escritura y crea commits o pull requests  |
| Construir pipeline | Convierte los archivos de origen en salida estática desplegable       |
| CDN/host           | Se construyen archivos para los lectores                              |

## ¿Qué sucede cuando se publica

Publishing in a Git based CMS usually writes a Markdown file with front matter and commits it to the repository.

```md
---
title: "Envía el nuevo panel"
date: 2026-10-16T09:00:00Z
delett: false
tags:
  - product
---

Nuestro panel de control rediseñado ahora está disponible para todos los usuarios.
```

Ese commit puede proporcionar persistencia de contenido, un rastro de auditoría, copia de seguridad remota a través de su host Git, y un disparador de despliegue para CI/CD. El comportamiento exacto depende del CMS y del flujo de trabajo del repositorio.

## Beneficios de almacenar contenido en Git

Git da características de flujos de trabajo de contenido que los CMS de base de datos a menudo implementan por separado:

- Historial de revisión: Los gráficos muestran lo que cambió en un archivo, quién lo cambió y cuándo.
- Rollback: Puede revertir un commit específico o restaurar un archivo sin anular contenido no relacionado.
- Revisar los flujos de trabajo: Las ramas y pull requests pueden apoyar la revisión editorial antes de publicar.
- Portabilidad: Los archivos Markdown pueden moverse entre los generadores estáticos de sitios y los proveedores de alojamiento con menos pasos de migración que las exportaciones de bases de datos propietarias.

## Operaciones y límites

Git based CMSs are a strong fit for blogs, documentation, and marketing sites. No son aptos para todos los productos.

- No hay consultas de contenido en tiempo de ejecución: Las compilaciones estáticas no proporcionan consultas de base de datos por petición por defecto. El contenido específico del usuario o altamente relacional normalmente necesita un CMS respaldado por la base de datos.
- Construir latencia: Publicar requiere un paso de compilación y despliegue. Para muchos sitios esto es aceptable, pero es más lento que editar un registro de base de datos en vivo.
- Conflictos de fusión: Dos personas que editan el mismo archivo pueden crear conflictos. Los flujos de trabajo archivo-por-post reducen el riesgo.
- Granularidad de permisos: los permisos de Git suelen estar orientados al repositorio o a la rama, no al nivel de campo.

My judgment is that Git based content management is the better default for editorial sites where content should be portable, reviewable, and deployable as static files. El contraargumento es operativo: equipos que necesitan colaboración en tiempo real, permisos complejos o datos dinámicos pueden pasar más tiempo trabajando alrededor de Git que beneficiándose de él.

## What to evaluate in a Git based CMS

1. Calidad del editor: Compruebe si los escritores pueden editar cómodamente sin tocar los comandos de Git crudos.
2. Manejo de la materia delantera: Confirme que el CMS preserva sus campos y formatos existentes.
3. Modelo de publicación: Decida si necesitas confirmaciones directas, solicitudes de extracción o borradores de sucursales.
4. Riesgo de bloqueo: Asegúrese de que su contenido siga siendo utilizable como archivos simples si deja de usar el CMS.

For product comparisons, see [Top Git based CMS Platforms](/comparison/top-git-cms) and [Git based vs. Traditional Headless CMS](/blog/headless-vs-Git based-cms/).
