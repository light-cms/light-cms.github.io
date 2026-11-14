---
title: "¿Qué es un Generador Estático de Sitios?"
description: "Un generador estático de sitios construye páginas con antelación a partir de plantillas y archivos de contenido."
serial: 46
date: 2026-10-16T11:20:00Z
draft: false
keywords:
  - qué es un generador de sitio estático
  - generador de sitio estático
  - ssg explicado
  - cómo funcionan los sitios estáticos
  - pre-renderizado html
preview: /og-image.webp
taxonomies:
  tags:
    - sitios estáticos
    - ssg
    - explicadores
    - web
---

Un **generador estático de sitios (SSG)** es un programa que toma contenido y plantillas y produce un sitio web completo como HTML plano, Archivos CSS, y JavaScript, antes de que alguien visite.

En lugar de ensamblar una página por solicitud, el trabajo ocurre una vez, en tiempo de construcción. Lo que se envía al lector es el artefacto acabado.

---

## El modelo en un diagrama

```text
Contenido (Markdown + materia frontal)
Plantillas (HTML / JSX / Plantillas de marcha)─> SSG build ://ka-perseus-> public/ :/> CDN 4b> Navegador
Configuración, datos, estilos
```

Ejecuta la compilación, y aparece un directorio `public/` que contiene todas las páginas del sitio. Desplegar ese directorio en cualquier lugar que pueda servir archivos, y el sitio está en vivo.

---

## Qué hace actualmente la construcción

1. **Lee el contenido.** Archivos Markdown con [materia delantera](/blog/what-is-front-matter/): títulos, fechas, etiquetas, banderas borradas.
2. **Aplica plantillas.** Cada tipo de contenido se mapea a un diseño: página de publicaciones, listado, índice de etiquetas, página de inicio.
3. **Genera todas las páginas.** Páginas de artículos, listas paginadas, archivos de etiquetas, feeds RSS y sitemaps, todos preprocesados.
4. **Copia activos.** Imágenes, fuentes, estilos, scripts.
5. **Emite `public/`.** Una carpeta de archivos sin tiempo de ejecución adjuntos.

Algunos generadores hacen esto en milisegundos; algunos en segundos. Nada de esto sucede mientras un lector está esperando.

---

## Por qué la diferencia importa

Un sitio dinámico (WordPress, Rails, la mayoría de los marcos renderizados del servidor) funciona en cada petición: ejecutar código, consultar una base de datos, ensamblar HTML, responder. Un sitio estático ya funcionó.

Las consecuencias son estructurales:

- **Velocidad.** El borde CDN más cercano ya tiene la página. No hay consulta, no hay render, no hay arranque en frío.
- **Seguridad.** Ningún código del lado del servidor se ejecuta por solicitud, ninguna base de datos escuchando en un puerto, sin acceso de administrador para fuerza bruta. La superficie de ataque es una carpeta de archivos.
- **Fiabilidad.** Nada que fallar a las 3 de la mañana. El modo de fallo más común es un mal despliegue que se deshace al redesplegar el anterior.
- **Costo.** El ancho de banda es barato; la computación siempre encendida no lo es. Los sitios estáticos cuestan un error de redondeo a casi cualquier nivel de tráfico.
- **Longevity.** Los archivos siguen siendo legibles. Las herramientas de construcción pueden envejecer, pero la salida no se pudría.

También hay un argumento ambiental que vale la pena tomar en serio: servir archivos en caché cerca del lector utiliza una fracción de la energía de ejecutar código por vista. [Sitios estáticos y CO2](/blog/greener-web-static-sites/) entra en los números.

---

## Qué son los SGs buenos, y donde luchan

**Excelente para:** blogs, documentación, páginas de destino, portafolios y cualquier sitio donde el contenido cambia ocasionalmente y la lectura sucede constantemente.

**Extraño por:** contenido que debe actualizar en caso de cambio de datos. (se puede hacer con hidratación parcial)

La interactividad no está fuera de límites. El patrón moderno pre-renderiza todo y adjunta pequeñas islas de JavaScript donde sea necesario (formas, búsqueda, modo oscuro), la idea detrás de [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) y herramientas similares.

---

## Las opciones en breve

| Generador               | Idioma / plantilla      | Intensidad de firma                                              |
| :---------------------- | :---------------------- | :--------------------------------------------------------------- |
| **Hugo**                | Ir a plantillas         | Velocidad de construcción accidental, ecosistema temático enorme |
| **Astro**               | Componentes `.astro`    | Arquitectura de islas, colecciones de contenido                  |
| **Experiencia**         | Nunjucks, Liquid, y más | minimalismo cero-JS, control total                               |
| **Jekyll**              | Líquido                 | GitHub Pages heritage, simplicity                                |
| **Zola**                | Tera                    | Binario único, baterías incluidas                                |
| **SvelteKit / Next.js** | React/Svelte            | Sitios que crecen en aplicaciones                                |

La encuesta completa está en [los mejores generadores estáticos del sitio](/blog/best-static-site-generators/). Todos ellos consumen la misma entrada: Markdown con materia frontal.

---

## Donde encaja el CMS

Un SSG resuelve _rendering_; no dice nada sobre _autor_. Dejado solo, publicar significa editar archivos en un editor de código y empujar confirmaciones: viable para los desarrolladores, una barrera para todos los demás.

Un CMS respaldado por Git llena ese hueco: escribe Markdown y la materia frontal en el repositorio a través de un editor visual, y el SSG hace lo que siempre hizo. El generador nunca cambia; la experiencia del escritor lo hace. Ésa es toda la premisa detrás de [LightCMS](/blog/what-is-lightcms/), y la forma más rápida de verlo es [copiar una plantilla de inicio](/blog/start-with-a-lightcms-template/) con la versión ya configurada.

---

## Preguntas frecuentes

### ¿Es un SSG lo mismo que un framework?

No. Un framework maneja peticiones en tiempo de ejecución; un generador se ejecuta en tiempo de construcción y produce archivos. Algunas herramientas desenfocan la línea: SvelteKit y Next.js pueden hacer ambas cosas.

### ¿Los sitios estáticos soportan comentarios, formularios o búsquedas?

Sí, a través de servicios de terceros o JavaScript del lado del cliente: los puntos finales de formulario, los proveedores de comentarios y los índices de búsqueda del lado del navegador son todos comunes.

### ¿Con qué frecuencia necesito reconstruir?

Sólo cuando el contenido o el código cambian. Un blog típico se basa en cada publicación, un proceso medido en segundos.

### ¿Es un sitio estático bueno para SEO?

Mucho. Carga rápida, fuerte Core Web Vitals, HTML limpio, y sin problemas de renderizado duplicado.

### ¿Puede un sitio estático manejar el tráfico elevado?

Sí. El verdadero es servido de la caché, por lo que los picos son baratos. Un sitio dinámico funciona al revés, donde los picos cuestan dinero.

---

Relacionado: [sitios dinámicos vs estáticos](/blog/static-vs-dynamic/), [¿Qué es el Jamstack?](/blog/what-is-jamstack/), y [dónde alojar un sitio estático](/misc/top-static-site-hosting/).
