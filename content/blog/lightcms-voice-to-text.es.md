---
title: "Dicta tus borradores: Voz a texto en [LightCMS](https://lightcms.me)"
description: "Cómo [LightCMS](https://lightcms.me) convierte las ideas habladas en Markdown estructurado con transcripción de susurro: registre, revise y edite una publicación dictada sin salir del navegador."
serial: 33
date: 2026-10-16T09:30:00Z
draft: false
keywords:
  - marcado de voz a texto
  - blogging de dictado
  - susurro transcripción cms
  - escritura de voz a texto
  - voz de faros
preview: null
taxonomies:
  tags:
    - luces
    - escribir
    - flujo de trabajo
    - accesibilidad
---
Typing es un cuello de botella que nadie cuantifica. Un altavoz conversacional evalúa 150 wpm y un buen mecanógrafo 40-60. Después de 15 minutos en un post, cuando todavía está deslizado, hablar es tres veces más rápido que escribir.

[LightCMS](https://lightcms.me) presenta dictado. Hit record, hable, y sus palabras están escritas en su borrador.

---

Cómo funciona

1. Abra su aplicación en el editor. Navegador solicita permiso de micrófono.
2. Sólo hablar. Las pausas están bien; usted sólo está escupiendo baloncesto, no leyendo.
3. Parar. [LightCMS](https://lightcms.me) está alimentando el audio en un punto final de transcripción de susurro en Groq, y colocando el texto devuelto en el cursor.
4. La transcripción aparece como vieja y simple Markdown en la página: aún así sus palabras, todavía completamente editables, todavía sólo se insertan cuando se publica.

La transcripción no es un archivo adjunto o una pieza separada. Es un componente de un post tan pronto como llegue, por lo que el siguiente paso es sólo edición común: cortar el alboroto, poner en el orden, insertar los encabezados.

---

Por qué susurro, específicamente

Se ha hecho más inteligente el habla al texto, pero no se garantiza que las transcripciones individuales sean las mismas. Dado el hundimiento de sistemas más débiles por prosa, susurro:

- punctuación y mayúsculas, por lo que la salida se ve como prosa en lugar de un archivo de leyendas.
- vocabulario de dominio: con lo que me refiero a nombres de bibliotecas, nombres de marco, terminología API, etc. vienen mucho mejor de lo que he experimentado con motores de dictado antiguos.
- Tolerancia de la disfluencia: con la edición, usted es capaz de recoger una frase en medio de un pensamiento y no parchear inicios falsos en la transcripción.

Tenerlo en el hardware de inferencia de Groq es lo suficientemente rápido como para que el viaje de ida y vuelta sea lo suficientemente corto que la dictación es casi tan rápida como la escritura.

---

El flujo de trabajo más efectivo

Hay un poco de patrón para esto; la dictación favorece un poco de forma. La estructura más productiva:

- Tal vez hablar primero, la estructura segundo. Diga todo en el primer borrador, no se agota en secciones.
- Detener y leer lo que has hablado estará lleno de repetición que parecía correcto en ese momento. Quítelo antes de quedar atascado en el borrador.
- Nombra la nueva sección donde cambió el pensamiento. Ahora hablemos sobre el despliegue. Promover a ## encabezamiento añadiendo # antes de él. La transcripción ya le ha dicho dónde están las secciones.
- > Haga la pasada de formato al final. Listas, enlaces, código y bloques de código son más rápidos de añadir después de que la escritura haya terminado.

10 minutos de hablar, 10 minutos de edición, cada uno de vosotros produce un borrador mucho más completo que la otra persona sentada sola en el teclado durante 30 minutos, en silencio.

---

Dictación como característica de accesibilidad

No es sólo tiempo. Para el túnel carpiano de uno o muchos de ellos sufre y / o con dedos desgastados, la entrada de voz significa la decisión –o la falta de ella– sobre la publicación. La salida predeterminada del editor visual, MD crudo, significa que el tubo completo (grabar, transcribir, editar, publicar) se puede hacer sin tener los dedos en el teclado.

---

¿Qué pasa con el Audio?

[LightCMS](https://lightcms.me) transmite la grabación para su transcripción y proporciona el texto de vuelta. El audio nunca toca tu repositorio: lo que entra en git es el Markdown, como cualquier otra edición. Tu escritura se almacena como archivos en tu repositorio, que es la misma promesa que el resto de [LightCMS](https://lightcms.me) hace: cero bloqueo, cero base de datos.

## Una palabra sobre la revisión

La transcripción es grande, pero no perfecta. Homófonos, entornos ruidosos y largos nombres extraños deben ser controlados por una persona, especialmente para un post que será indexado y leído durante años. Utilice la transcripción como primer borrador rápido, no el final; la edición es obligatoria, sólo más corta que partir de cero.

Preguntas frecuentes:-

## ¿Necesito una suscripción de transcripción por separado?

No. La transcripción se dirige al punto final de susurro que está configurado para tu instancia [LightCMS](https://lightcms.me) de la misma manera que el coilot IA - traiga su propio modelo de punto final.

## ¿Es eficaz en otros idiomas?

Whisper apoya el multilingualismo. La calidad varía según el modelo y su punto final, así que pruebe una muestra rápida en su idioma antes de pasar al flujo de trabajo.

## ¿Es posible dictar en un puesto existente?

Sí. Coloca el cursor en cualquier lugar de tu documento y comienza a escribir. La transcripción aparecerá como el cursor.

## ¿Seguirá grabando el micrófono?

No. Es bastante explícito: lo grabas y luego dejas de grabar.

Siguiente: ¿Qué pasa una vez que recibimos las palabras en la página.