---
title: "Borradores, revisiones y retrocesos en un CMS basado en Git"
description: "Cómo los flujos de trabajo de contenido basados en Git manejan los borradores, historial de confirmación, revisión de pull request y retrocesos para la publicación estática del sitio."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
tags:
  - luces
  - git
  - flujo de trabajo
  - colaboración
---

Un CMS basado en Git puede manejar borradores, revisiones, y retrocesos almacenando contenido como archivos en un repositorio y usando el historial de Git como el rastro de auditoría. El valor práctico es simple: puede guardar el trabajo sin publicarlo, inspeccionar lo que cambió y revertir una mala edición sin restaurar una base de datos completa.

## Borradores como estado de archivo

En muchos flujos de trabajo estáticos del sitio, un borrador está representado por la materia delantera como `Delete t: true`. El archivo puede existir en el repositorio mientras que el generador estático de sitios lo omite durante las compilaciones de producción.

```yaml
---
title: "Drraft post"
date: 2026-10-16T09:40:00Z
draft: true
---
```

Este enfoque mantiene el borrador de estado cerca del contenido. El intercambio es visible: cualquiera con acceso al repositorio puede ver el borrador del archivo, incluso si el sitio público no lo representa.

## Revisiones a través de commits

Cada cambio guardado o publicado puede crear un commit de Git. Esto le da un historial legible para los archivos Markdown, incluyendo difiere, metadatos de autor y marcas de tiempo.

| Necesita                  | Flujo de trabajo basado en Git                        | Desplazamiento                                                         |
| :------------------------ | :---------------------------------------------------- | :--------------------------------------------------------------------- |
| Ver cambios               | `git diff` o pull request diff                        | Requiere que los mensajes limpios de confirmación sean útiles          |
| Historial de evaluación   | Cometer registro y culpar                             | El modelo de acceso al repositorio controla quién puede inspeccionarlo |
| Recuperar contenido       | Volver a confirmar o restaurar la versión del archivo | Revertir puede requerir resolución de conflictos                       |
| Revisar antes de publicar | Sucursal y pull request                               | Añade sobrecarga de proceso para pequeñas ediciones                    |

Para los equipos, las pull requests proporcionan una puerta de revisión editorial. Para los escritores solos, los commits directos a una rama principal pueden ser más rápidos, pero eliminan el paso de revisión.

## Rollback como una operación de Git normal

Cuando un post publicado tiene un error, Git le permite revertir el commit que lo introdujo o restaurar una versión anterior del archivo. Después de que la solución se confirme, su pipeline CI/CD reconstruye e implementa el sitio.

Una cancelación de nivel de archivo es más estrecha que una restauración de la base de datos. Puede deshacer una publicación dejando intactos otros cambios recientes.

## Elegir un flujo de trabajo

Usar commits directos cuando la velocidad es importante y el riesgo de un error es bajo. Utilice sucursales y pull requests cuando el contenido necesite revisión, aprobación legal o tiempo coordinado de liberación. El mejor flujo de trabajo es el más ligero que todavía le da a su equipo la revisión y el control de recuperación que necesita.

Para la lectura relacionada, vea [The LightCMS Editor Tour](/blog/lightcms-editor-tour/) y [What is a Git based CMS?](/blog/Git based-cms-explained/).
