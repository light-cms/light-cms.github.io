---
title: "LightCMS AI Copilot: Drafting Help that stay in your Repository"
description: "El borrador de copilot de AI contiene contornos, reescribe párrafos y corrige gramática dentro de LightCMS, corriendo en cualquier proveedor compatible con OpenAI que elija."
serial: 32
date: 2026-10-16T09:20:00Z
draft: false
keywords:
  - ai cms
  - ai escritura asistente de markdown
  - faros ai copilot
  - cms compatibles con openai
  - flujo de trabajo ai
preview: /og-image.webp
taxonomies:
  tags:
    - luces
    - ai
    - escribir
    - flujo de trabajo
---

La forma más rápida de hacer impopular una herramienta de escritura es llenarla con un texto generado que no pedía. The [LightCMS](https://lightcms.me) AI copilot works differently: the model helps, and you keep ownership of the draft.

No es una ventana de chat. Es un conjunto de acciones que funcionan con el texto que ya está editando.

## Qué hace

Seleccione un párrafo, o no seleccione nada, y el coilot le da cuatro opciones:

- **Salida**: Convierte un tema en una estructura que puedas aceptar, reordenar o eliminar.
- **Rephrase**: Reescribe la misma idea en un tono diferente. Puede endurecer una frase larga, hacer una nota más formal, o suavizar una línea dura.
- **Expandir**: Convierte una idea corta en un borrador más completo cuando sabes qué decir pero no cuánto escribir.
- **Fix grammar**: Limpia la puntuación, gramática y tipografía antes de que publiques.

Cada resultado aparece en el documento como texto editable. Puedes aceptarlo, cambiarlo o deshacerlo. Nada se guarda hasta que publiques y nada se publique hasta que lo hayas leído.

## Trae tu propio modelo

LightCMS trabaja con cualquier punto final compatible con OpenAI.

| Proveedor      | Por qué la gente lo elige                                                              |
| :------------- | :------------------------------------------------------------------------------------- |
| **OpenAI**     | Modelos familiares con amplia capacidad                                                |
| **OpenRouter** | Una clave para muchos modelos, con fácil interruptor                                   |
| **Groq**       | Inferencia rápida y nivel gratuito                                                     |
| **NVIDIA NIM** | Endpoints que puedes ejecutarte tú mismo, incluyendo configuraciones amigables con GPU |

Debido a que LightCMS utiliza el formato estándar `/v1/chat/completions`, otros puntos finales compatibles también pueden funcionar. Esto incluye un modelo local detrás de un proxy compatible con OpenAI, una pasarela privada o un punto final de la empresa.

Su clave API permanece en su instancia de LightCMS. El texto que envía para una acción de copilot va al proveedor que ha configurado. Para una herramienta autoalojada, con licencia Apache, que controle importa.

## Por qué vive en el editor

Un chat puede producir texto largo y genérico que todavía necesita para pegar, formatear y reescribir. Las acciones contextuales evitan ese problema.

- **Ámbito pequeño**: Rephrasar un párrafo tiene un resultado claro. "Escríbame un post de blog" no.
- **El formato permanece intacto**: El copilot trabaja dentro del editor, por lo que lista las listas de estancia y la materia delantera permanece intacta.
- **iteración rápida**: Si no le gusta el resultado, regenera el texto seleccionado en lugar del documento completo.

Esto hace que AI se sienta como un conjunto de pequeñas ediciones, más cerca de cómo funciona un editor de copias.

## Utilízalo de forma responsable

- **Escribe la voz tú misma**: Usa contornos y expansiones como punto de partida y mantén las frases que suenan como tú.
- **Comprueba los hechos**: El modelo no conoce tu código base, tu producto o tus números.
- **Mantén los secretos fuera de las indicaciones**: Cualquier cosa que envíes a un proveedor es visible para ese proveedor.

LightCMS guarda sólo lo que usted aprueba. No genera contenido en segundo plano, almacena borradores en servidores LightCMS o usa tus borradores para formación.

## Cuando más ayuda

- **Empezando**: Un contorno convierte una página en blanco en un borrador al que puedes reaccionar.
- **Reescritura al final**: Enciende la introducción después de que sepas lo que dice el post.
- **Limpieza final**: Ejecuta un pase de gramática en los últimos minutos antes de publicar.

## Preguntas frecuentes

### ¿Necesito una clave API?

Sí, para usar el copilot necesitas configurar un proveedor en tu instancia de LightCMS. Todo lo demás en el editor funciona sin una clave API.

### ¿Se utilizará mi contenido para formar modelos?

No. LightCMS sólo envía el texto que seleccione para una acción al punto final que ha configurado. No envía tu repositorio o borradores en ningún otro lugar.

### ¿Puedo usar un modelo local?

Sí. Si el modelo expone una API compatible con OpenAI, apunte LightCMS a ese extremo y el copilot funciona de la misma manera.

### ¿Cambiará mi frente?

No. Las acciones de Copilot sólo afectan al contenido que seleccionas.

Emparejado con [voice-to-text](/blog/lightcms-voice-to-text/), el coilot ayuda a ambos lados del borrado: bajar las palabras rápidamente y moldearlas en un post publicable.
