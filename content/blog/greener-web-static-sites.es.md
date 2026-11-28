---
title: Sitios estáticos y web amigable con el medio ambiente construyendo una web menos contaminante
description: >-
  Cómo los sitios estáticos y una gestión eficiente de los activos pueden reducir el uso de energía y las emisiones de carbono.
date: '2026-10-14T13:30:00.000Z'
draft: false
tags:
  - con2
  - carbono
  - óxido
  - energía
  - sitio web
  - carbono
  - huella
  - compartir
slug: greener-web-static-sites
---
Los sitios estáticos pueden reducir la energía necesaria para servir páginas web moviendo el trabajo de cada solicitud para construir el tiempo y sirviendo archivos en caché desde un CDN. No son automáticamente bajas en carbono, pero para sitios pesados de contenido a menudo evitan el cálculo innecesario del lado del servidor.

## Por qué la entrega estática puede consumir menos energía

Los sitios web dinámicos normalmente ejecutan código de aplicación, consultan una base de datos y generan HTML para cada petición.

Los sitios estáticos generan HTML durante una compilación y sirven los archivos resultantes repetidamente.

| **Factor**                     | **Ruta de solicitud dinámica**                                                   | **Ruta de caché estática**                                                                    |
| :----------------------------- | :------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| Por solicitud de trabajo       | La lógica de la aplicación y las consultas de la base de datos pueden ejecutarse | Un archivo puede ser servido desde la caché                                                   |
| Infraestructura siempre activa | A menudo se requiere un servidor de aplicaciones y base de datos                 | Las compilaciones se ejecutan bajo demanda; el alojamiento puede ser basado en archivos o CDN |
| Caché                          | Posible, pero a menudo más complejo                                              | Un ajuste natural para activos inmutables o estáticos                                         |
| Control de carga útil          | Depende del paquete de aplicaciones y clientes                                   | Depende de la salida de construcción y opciones de activos                                    |

El impacto real depende del tráfico, la tasa de éxito de caché, las fuentes de energía, el peso de la página y el cliente JavaScript.

## Cómo medir el impacto en el carbono del sitio web

Las estimaciones son útiles para la dirección, no para la contabilidad precisa. Utilice múltiples herramientas y rastree los cambios a lo largo del tiempo.

- [Calculador de Carbono del Sitio Web](https://www.websitecarbon.com/) Estima las emisiones por vista de página.
- [Ecograder](https://ecograder.com/) Proporciona puntuación y recomendaciones orientadas a la sostenibilidad.
- Las métricas de rendimiento del navegador, como la Pintura de Contenido más grande, el tamaño total de la transferencia y el costo de ejecución de JavaScript ayudan a identificar los controladores técnicos del peso de la página.

Una línea base práctica es medir sus páginas de destino superior, el tamaño de la transferencia de registros y las métricas clave de rendimiento, luego repetir después de optimizaciones.

## Prácticas que reducen el impacto de la página

1. Servir archivos estáticos desde un CDN: Cache HTML, CSS, JS e imágenes cerca de los usuarios.
2. Reduce JavaScript: Enviar sólo el código del lado del cliente necesario para la página.
3. Optimizar los medios: Comprimir imágenes, utilizar formatos modernos cuando corresponda, y dimensionar los activos correctamente.
4. Configurar cabeceras de caché: Los tiempos de vida de caché largos reducen las transferencias repetidas.
5. Elegir alojamiento cuidadosamente: La fuente de energía del centro de datos afecta a la huella.
6. Mantener el contenido durable: El Markdown Plano en Git reduce la reconstrucción y la migración de residuos con el tiempo.

## Ofertas para tener en cuenta

La arquitectura estática no es una estrategia de sostenibilidad completa. Un sitio estático con imágenes grandes, vídeo de reproducción automática, scripts de terceros pesados o caché pobre puede tener una huella más grande que un sitio dinámico cuidadosamente optimizado. La pregunta útil no es "estática o dinámica", sino "¿cuánto trabajo y datos requiere cada vista de página?"

Para guías de arquitectura relacionadas, consulta [Sitios estáticos vs. Lugares dinámicos] (/blog/static-vs-dynamic/) y [¿Por qué LightCMS](/blog/why-this/).
