---
title: "¿Qué es un CMS basado en Git? Arquetismo, flujo de trabajo y ofertas comerciales"
description: "Un CMS basado en Git almacena contenido como archivos en un repositorio y confirma ediciones como código: la arquitectura, el flujo de trabajo, y cuando golpea a una base de datos."
serial: 43
date: 2026-10-16T10:50:00Z
draft: false
keywords:
  - qué es un cms basado en git
  - git basado en cms
  - git cms
  - basado en archivos cms
  - cms con control de versiones
preview: /og-image.webp
taxonomies:
  tags:
    - cms
    - git
    - sitios estáticos
    - explicadores
---

Un **CMS basado en Git** es un sistema de gestión de contenido que almacena contenido como archivos en un repositorio Git en lugar de filas en una base de datos. La edición ocurre en una interfaz visual; guardar ocurre como un commit. La construcción del sitio lee esos archivos y produce páginas.

Esa elección de diseño único (archivos, no filas) se lleva a cabo en todo lo demás acerca de cómo se comportan estas herramientas: versionado, portabilidad, costo, seguridad, y quién puede utilizarlas.

---

## La Arquitectura

Un CMS basado en Git se sienta entre un escritor y un repositorio, y no toca nada más:

```text
Writer ──> Visual editor ──> commit (.md + front matter)
                                   │
                                   ▼
                          Git repository (source of truth)
                                   │
                                   ▼
                     CI/CD build (Astro, Hugo, Zola, …)
                                   │
                                   ▼
                        Static output ──> CDN ──> Reader
```

Tres propiedades definen la categoría:

1. **El repositorio es la base de datos.** No hay una segunda copia del contenido. Si no está comprometida, no existe; si está comprometida, está respaldada por cada clon.
2. **La construcción es el tiempo de ejecución.** Las páginas se ensamblan en tiempo de construcción y sirven como archivos. Nada representa contenido por solicitud.
3. **El CMS es un cliente, no un host.** Escribe en el repositorio y puede ser reemplazado sin tocar el contenido.

Contrastes that with a traditional CMS: content in MySQL, templates in PHP, assemblbled on every request, administtered through the same application that serves the site. [CMS basado en Git vs CMS tradicional](/blog/git-cms-vs-traditional-cms/) funciona a través de la comparación.

---

## Qué hace un Commit

Cuando un escritor llega a publicar, el CMS serializa el documento a Markdown con la materia principal YAML y lo confirma:

```markdown
---
title: Envío el nuevo panel de control
data: 2026-10-16T09:00:00Z
draft: false
tags:
  - product
---

El texto del cuerpo comienza aquí...
```

Ese compromiso está haciendo varios trabajos a la vez:

- **Es el guardado.** El contenido persiste en el repositorio.
- **Es la entrada de auditoría.** Autor, marca de tiempo y mensaje grabados automáticamente.
- **Es la copia de seguridad.** Cada clon contiene el historial completo.
- **Es el lanzador de lanzamiento.** CI lo recoge, construye y nave.

Una escritura reemplaza cuatro sistemas separados en una pila convencional.

---

## Propiedades de flujo de trabajo que obtienes gratis

### Historial de versiones con diferencias reales
Las diferencias de Markdown son legibles. "Quién cambió esta frase, y cuando" es un `git log` de una línea, no un plugin o una consulta de base de datos.

### Rollback por archivo
Revertir un post sin tocar otra cosa. Restaurar una copia de seguridad de la base de datos hace retroceder todo el sitio, generalmente silenciosamente.

### Ramas y pull requests como revisión editorial
Escribir en una sucursal, enviar un PR, tomar comentarios a nivel de línea sobre el párrafo exacto, fusionar cuando se apruebe. Las herramientas de revisión nativas de GitHub se convierten en un flujo de trabajo editorial.

### Contenido portable
El contenido es texto plano. Mover generadores, mover hosts, mover herramientas CMS: el archivo sale con usted.

---

## Las Ofertas (Estadas honestamente)

El Git no es una victoria universal:

- **No hay consultas.** No puedes unirte al contenido en tiempo de solicitud; la construcción debe producir cualquier página que sea necesaria. El contenido de las relaciones se ajusta mal.
- **Reconstruir latencia.** Un cambio está en vivo después de una compilación, no después de un guardado. Las construcciones modernas son rápidas, pero "instantáneas" se mide en segundos a minutos.
- **Fusionar conflictos.** Dos personas que editan el mismo archivo crean un conflicto real. Herramientas CMS diseñadas de forma adecuada (una publicación por archivo), pero existe.
- **Control de acceso.** El acceso al repositorio no es permisos por campo. Si necesita una aplicación de rol granular, un administrador respaldado por la base de datos es la mejor herramienta.
- **Incorporación no técnica.** Raw Git es hostil a los escritores, que es la laguna de un CMS basado en Git: oculta los commits mientras mantiene los beneficios.

Ese último punto es donde aterrizan la mayoría de las evaluaciones. La arquitectura suele ser correcta para una publicación; la pregunta es qué herramienta la hace utilizable para la gente que publica.

---

## Qué buscar en uno

- **Calidad del editor.** Los escritores vivirán en ella. Los campos de formulario frente a un editor de documentos real es la mayor diferencia práctica entre las herramientas.
- **Manejo de la materia delantera.** Los metadatos mal formados rompen las compilaciones; una buena herramienta la valida.
- **Publicar modelo.** Asignación directa, o pull request con revisión.
- **Soporte de proveedores.** GitHub, GitLab, Bitbucket: lo que usted use.
- **Modelo de alojamiento.** Autoalojado (lo ejecutas) versus alojado (lo ejecutan).
- **Coste de salida.** Debe ser cero. Si la herramienta desapareció mañana, su repositorio todavía debería construir.

[LightCMS](https://lightcms.me) se construye alrededor de esos criterios; mira [lo que es LightCMS](/blog/what-is-lightcms/). El campo más ancho es encuestado en [plataformas CMS basadas en Git top ](/comparison/top-git-cms).

---

## Preguntas frecuentes

### ¿Un CMS basado en Git es lo mismo que un CMS sin cabeza?

No. Headless describe _cómo el contenido llega a un frontend_ (a través de una API); Git based describe _dónde vive el contenido_ (archivos en un repositorio). Las dos ideas se solapan en la práctica; vea [sin cabeza vs CMS basados en Git](/blog/headless-vs-git-based-cms/).

### ¿Necesito saber Git para usar uno?

No. Necesitas Git si quieres inspeccionar el historial o administrar las ramas tú mismo; el editor se encarga de los commits.

### ¿Puede un CMS basado en Git manejar un sitio grande?

Sí. Los generadores construyen miles de páginas rápidamente, y el repositorio maneja el volumen de contenido de forma constante. El tiempo de construcción es el clavo práctico, no el almacenamiento.

### ¿Funciona con mi generador de sitio estático?

Si su generador lee los archivos Markdown con materia frontal (Astro, Hugo, Zola, Monetario, Jekyll, SvelteKit, Next.js), sí.

### ¿Dónde van los medios de comunicación?

Normalmente a un directorio en el repositorio o a un bucket de activos referenciado desde la parte delantera. De cualquier manera, la referencia vive con el contenido.

---

Siguiente: [sin headless vs Git based CMS](/blog/headless-vs-git-based-cms/) si todavía está sopesando arquitecturas, o [qué materia delantera](/blog/what-is-front-matter/) si la capa de metadatos es nueva para ti.
