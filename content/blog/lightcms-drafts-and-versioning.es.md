---
title: "Borradores, revisiones y retrocesos: Control de versiones para escritores"
description: "LightCMS convierte la historia de Git en un flujo de trabajo editorial: borradores, commits, pull requests, y rollback de un solo clic, sin pedir a un escritor que aprenda Git."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
keywords:
  - git versioning content
  - cms borrador de flujo de trabajo
  - content rollback
  - historial de versiones de markdown
  - borrador de faros
preview: /og-image.webp
taxonomies:
  tags:
    - luces
    - git
    - flujo de trabajo
    - colaboración
---

El control de versiones es el mejor argumento para un CMS basado en Git, y el más mal explicado. Los escritores no quieren escuchar sobre confirmaciones, avances rápidos o árboles. Quieren saber tres cosas: **¿Puedo guardar esto sin publicarlo, ver qué cambió y deshacer si me equivoco?**

Git responde a los tres sin un escritor aprendiendo Git.

---

## El borrador se queda un borrador

El "borrador: verdad" en la materia frontal es todo el mecanismo. Cuando creas o edites una publicación en [LightCMS](https://lightcms.me), la bandera vive en la parte frontal del archivo, y la SSG la omite durante la construcción. El post se sienta en el repositorio, revisable y seguro, y nunca se renderiza en el sitio en vivo.

Voltear a 'falso' al publicarlo y la próxima versión lo recoge. Ninguna "base de datos de borradores" separada puede derivarse de lo que se encuentra en su repositorio y un borrador no puede filtrarse porque dos sistemas no están de acuerdo sobre su estado.

Porque un borrador es sólo un archivo, todo lo demás funciona también: puede sentarse en una rama, vivir detrás de un pull request, ser editado por otra persona, y ser difundido línea por línea antes de que se ponga en vivo.

---

## Cada guardado es un cambio

Cada publicación en [LightCMS](https://lightcms.me) crea un commit con un mensaje coherente, que te proporciona:

- **Historia completa.** ¿Quién cambió qué y cuándo. No se requiere ningún plugin.
- **El verdadero difiere.** Markdown difiere es legible, a diferencia de las filas en una columna `post_content`.
- **La culpa es algo.** Puedes preguntar cuando un párrafo ha cambiado y obtener una respuesta.
- **Copias de seguridad gratuitas** Cada clon del repositorio es una copia completa de tu contenido.

Para un solo escritor se trata de una infraestructura invisible. Para un equipo, es la pista de auditoría por la que la mayoría de los CMS comerciales cobran.

---

## Ramas y Pull Requests: Revisión Editorial

[LightCMS](https://lightcms.me) puede publicar en dos modos, y elegir entre ellos está eligiendo tu proceso editorial:

| Modo                   | Flujo                                                 | Mejor para                                                       |
| :--------------------- | :---------------------------------------------------- | :--------------------------------------------------------------- |
| **Compromiso directo** | Publicar → confirmar → CI builds → Live               | Escritores solos, ediciones de bajo riesgo, correcciones rápidas |
| **Pull request**       | Publicar → PR → revisar → fusionar → compilaciones CI | Equipos, borradores con cambios excesivos y sensibles            |

El modo pull request merece la atención. Le da una puerta editorial real: un colega lee el Markdown propuesto, deja un comentario sobre la frase exacta a la que objetan y se fusiona cuando es correcta. Esa compuerta se ejecuta con las herramientas nativas de revisión de GitHub en lugar de un sistema de aprobación que bloquea su contenido a un proveedor.

Activar la protección de sucursales y "publicar" significa "enviar para revisión". Apagar y "publicar" significa "publicar".

---

## Rollback: La gente destacada olvida pedir

Cada CMS debe responder una pregunta rápidamente: **algo mal está en vivo, así que ¿cómo lo arreglo?**

Con contenido basado en Git, la respuesta es un revertido:

1. Abre el historial del archivo en GitHub (o [LightCMS](https://lightcms.me)).
2. Elija la última versión buena.
3. Revert.

La corrección confirma como cualquier otra edición, su pipeline reconstruye y la mala versión ha desaparecido, generalmente en un minuto en un anfitrión moderno. Restaurar una copia de seguridad de la base de datos a las 2am también revierte cada cambio _otro_ hecho intermediamente. Con la historia por archivo, usted hace retroceder un post, no todo el sitio.

---

## ¿Por qué no sólo usar palabras y correo electrónico?

Porque ese viaje de ida y vuelta pierde contenido. La versión en el archivo adjunto no es la versión en el sitio, nadie sabe qué archivo es canónico, y finalmente alguien publica `final-v3-USE-THIS.md`. Un repositorio compartido con un editor visual colapsa el bucle: un archivo, un historial, un botón de publicación.

---

## Un equipo práctico

Para un equipo pequeño, el arreglo que tiende a seguir:

- **La rama principal siempre se puede desplegar.** Sólo las fusiones llegan a ella.
- **Características y borradores en las ramas.** El trabajo de forma prolongada en progreso se queda fuera de principal sin ser ocultado.
- **Pull request for anything editorially sensitive**, direct commits for typo fixes, because require review on a coma correction guarantees people will work around the process.
- **Versiones de etiquetas o hitos** si publicas en un programa; un despliegue fallido puede rastrearse a un conjunto conocido de cambios.

Nada de eso está configurado dentro de [LightCMS](https://lightcms.me). Es la práctica estándar de GitHub, que es la cuestión: el CMS hereda un flujo de trabajo que su repositorio ya tiene.

---

## Preguntas frecuentes

### ¿Los escritores necesitan aprender Git?

No. Utilizan el editor y un botón de publicación. Las ramas, los commits, y las pull requests existen debajo y se extienden sólo cuando usted elige usarlos.

### ¿Puedo restaurar una versión antigua de un post?

Sí. Volver a un commit anterior restaura el contenido del fichero, y la siguiente compilación lo publica.

### ¿Son visibles los borradores para el público?

No. Una publicación con `draft: true` está excluida de la construcción, por lo que nunca llega al sitio desplegado. Es visible para cualquier persona con acceso al repositorio, que es la cuestión.

### ¿Qué pasa si dos personas editan el mismo mensaje?

El segundo conflicto de commit y Git lo señala de forma explícita y no silenciosa. Para la mayoría de los equipos, publicar en una rama y revisar con una pull request elimina el problema antes de que suceda.

### ¿ [LightCMS](https://lightcms.me) mantiene su propia copia de mi contenido?

No. El repositorio es la fuente de la verdad, el mismo [principio de bloqueo cero](/blog/what-is-lightcms/) que hace que el enfoque valga la pena elegir.

---

Ver [comenzando desde una plantilla de inicio](/blog/start-with-a-lightcms-template/) para configurar un repositorio con este flujo de trabajo ya está conectado, o [el tour del editor](/blog/lightcms-editor-tour/) para ver su lado de escritura.
