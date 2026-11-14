---
title: "Dictez vos brouillons : de la voix au texte en [LightCMS](https://lightcms.me)"
description: "Comment [LightCMS](https://lightcms.me) transforme les idées parlées en une transcription structurée Markdown avec Whisper : enregistrement, révision et modification d'un message dicté sans quitter le navigateur."
serial: 33
date: 2026-10-16T09:30:00Z
draft: false
keywords:
  - markdown de la voix au texte
  - blogging de dictation
  - chuchoter les cms de transcription
  - écriture vocale au texte
  - Voix lightcms
preview: null
taxonomies:
  tags:
    - lightcms
    - écriture
    - flux de travail
    - accessibilité
---
Le taper est un goulot d'étranglement que personne ne quantifie. Un haut-parleur de conversation donne un taux de 150 wpm et un bon type 40-60. Après 15 minutes dans un post, quand il est encore glissant, parler est trois fois plus rapide que taper.

[LightCMS](https://lightcms.me) dispose de dictation. Hit record, speak, and your words are written to your draft.

---

Comment ça marche

1. Ouvrez votre application dans l'éditeur. Demande de permission du navigateur pour le micro.
2. Parlez simplement. Les pauses sont correctes; vous crachez juste du ballon, pas de la lecture.
3. Arrêter [LightCMS](https://lightcms.me) alimente l'audio dans un point de terminaison de transcription Whisper sur Groq, et place le texte retourné dans le curseur.
4. La transcription apparaît comme un ancien Markdown dans la page : toujours vos mots, encore entièrement éditable, toujours poussé seulement lorsque vous publiez.

La transcription n'est pas une pièce jointe ou une pièce séparée. C'est un composant d'un message dès qu'il arrive, de sorte que la prochaine passe est juste de l'édition courante: couper la marche, mettre dans l'ordre, insérer les titres.

---

Pourquoi murmurer spécifiquement

Le discours sur le texte a été plus intelligent, mais les transcriptions individuelles ne sont pas garanties d’être les mêmes. Etant donné le naufrage de systèmes plus faibles par la prose, Whisper:

- ponctuation et cas, donc la sortie ressemble à la prose au lieu d'un fichier de légende.
- Vocabulaire de domaine : j'entends par là les noms de bibliothèques, les noms de cadres, la terminologie de l'API, etc. passent bien mieux que ce que j'ai connu avec les moteurs de dictation plus anciens.
- Tolérance de décalage : Avec modification, vous pouvez récupérer une phrase en plein milieu d'une pensée et ne pas corriger faux commence dans la transcription.

L'avoir sur le matériel d'inférence de Groq est assez rapide pour que le aller-retour soit assez court que la dictée est presque aussi rapide que l'écriture.

---

Le flux de travail le plus efficace

Il y a un peu de patron à cela; la dictation favorise un peu de forme. La structure la plus productive :

- Peut-être parler d'abord, structurer ensuite. Dites tout cela dans le premier brouillon, ne s'enlise pas dans les sections.
- Arrêtez et lisez ce que vous avez dit sera plein de répétition qui semblait juste à l'époque. Retirez-le avant qu'il ne soit coincé dans le brouillon.
- Nommez la nouvelle section où la pensée a changé. Parlons maintenant du déploiement. Promouvoir en ## en-tête en ajoutant # avant lui. La transcription vous a déjà indiqué où se trouvent les sections.
- > Faites la passe de formatage à la fin. Les listes, liens, codes et blocs de code sont plus rapides à ajouter une fois l'écriture terminée.

10 minutes de parler, 10 minutes de montage, chacun de vous, produit régulièrement un brouillon beaucoup plus complet que l'autre personne assise seule au clavier pendant 30 minutes, en silence.

---

Dictation en tant que fonctionnalité d'accessibilité

Il n'est pas seulement temps de le faire. Pour le tunnel carpien qui souffre d’un trop grand nombre et/ou de scribes aux doigts fatigués, la saisie vocale signifie la décision – ou l’absence – à la publication. La sortie par défaut de l'éditeur visuel, MD brute, signifie que l'ensemble du pipeline (enregistrement, transcription, édition, publication) peut être fait sans avoir les doigts sur le clavier.

---

Que se passe-t-il à l'Audio?

[LightCMS](https://lightcms.me) transmits the recording for transcription and provides your text back. L'audio ne touche jamais votre référentiel : ce qui se trouve dans git, c'est le Markdown, comme n'importe quelle autre modification. Votre écriture est stockée en tant que fichiers dans votre dépôt, qui est la même promesse que le reste de [LightCMS](https://lightcms.me) fait : zéro verrou, base de données zéro.

## Un mot sur la revue

La transcription est grande, mais pas parfaite. Les homophones, les environnements bruyants et les noms longs et étranges doivent toujours être vérifiés par une personne, surtout pour un poste qui sera indexé et lu pendant des années. Utilisez la transcription comme première ébauche rapide, pas la finale; l'édition est obligatoire, seulement plus courte que partir de zéro.

Foire aux questions : -

## Ai-je besoin d'un abonnement de transcription séparé ?

Non. La transcription est dirigée vers le point de terminaison Whisper qui est configuré pour votre instance [LightCMS](https://lightcms.me) de la même manière que le copilote AI - Bring-your-own-endpoint model.

## Est-il efficace dans d'autres langues?

Whisper soutient le multilinguisme. La qualité varie en fonction du modèle et de votre terminal. Essayez donc un échantillon rapide dans votre langue avant de passer au workflow.

## Est-il possible de Dicter dans un Post Existant?

« Oui. » Placez le curseur n'importe où dans votre document et commencez à taper. La transcription apparaîtra sous forme de curseur.

## Le microphone continuera-t-il à enregistrer ?

Non. Il est assez explicite: vous l'enregistrez puis vous arrêtez l'enregistrement.

Ensuite, ce qui se passe une fois que nous obtenons les mots sur la page.