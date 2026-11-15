---
title: "Copilote de l'IA LightCMS : ébauche d'aide qui reste dans votre dépôt"
description: "Le pilote AI intégré brouille les contours des lignes, réécrit les paragraphes, et corrige la grammaire dans LightCMS, fonctionnant sur n'importe quel fournisseur compatible OpenAI que vous choisissez."
serial: 32
date: 2026-10-16T09:20:00Z
draft: false
keywords:
  - ai cms
  - ai écriture assistant markdown
  - lightcms ai copilote
  - cms compatibles openai
  - flux de travail de contenu ai
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - ai
    - écriture
    - flux de travail
---

La façon la plus rapide de rendre impopulaire un outil d'écriture est de le remplir avec du texte généré que vous n'avez pas demandé. The [LightCMS](https://lightcms.me) AI copilot works differently: the model helps, and you keep ownership of the draft.

Ce n'est pas une fenêtre de discussion. C'est un ensemble d'actions qui fonctionnent avec le texte que vous êtes en train de modifier.

## Ce qu'il fait

Sélectionnez un paragraphe, ou sélectionnez rien, et le copilote vous donne quatre options:

- **Contenu** : Transforme un sujet en une structure que vous pouvez accepter, réorganiser ou supprimer.
- **Rephrase**: Réécrivez la même idée dans une tonalité différente. Vous pouvez serrer une phrase longue, faire une note plus formelle, ou adoucir une ligne dure.
- **Expand**: Transforme une courte idée en un brouillon plus complet quand vous savez quoi dire mais pas combien écrire.
- **Corriger la grammaire** : Nettoyez la ponctuation, la grammaire et les fautes de frappe avant de publier.

Chaque résultat apparaît dans le document comme texte modifiable. Vous pouvez l'accepter, le modifier ou l'annuler. Rien n'est enregistré jusqu'à ce que vous publiiez et rien n'est publié jusqu'à ce que vous l'ayez lu.

## Apportez votre propre modèle

LightCMS fonctionne avec n'importe quel point de terminaison compatible OpenAI.

| Fournisseur    | Pourquoi les gens le choisissent-ils                                                                   |
| :------------- | :----------------------------------------------------------------------------------------------------- |
| **OpenAI**     | Modèles familiers avec grande capacité                                                                 |
| **OpenRouter** | Une touche pour de nombreux modèles, avec un basculement facile                                        |
| **Groq**       | Inférence rapide et un niveau gratuit                                                                  |
| **NVIDIA NIM** | Les terminaux que vous pouvez exécuter vous-même, y compris les configurations compatibles avec le GPU |

Parce que LightCMS utilise le format standard `/v1/chat/completions`, d'autres points de terminaison compatibles peuvent également fonctionner. Cela inclut un modèle local derrière un proxy compatible OpenAI, une passerelle privée ou un point de terminaison de l'entreprise.

Votre clé API reste dans votre instance LightCMS. Le texte que vous envoyez pour une action de copilote va au fournisseur que vous avez configuré. Pour un outil auto-hébergé, sous licence Apache, qui contrôle l'importance.

## Pourquoi il vit dans l'éditeur

Un chat peut produire du texte long et générique dont vous avez encore besoin pour coller, formater et réécrire. Les actions contextuelles évitent ce problème.

- **Petite portée**: Reformuler un paragraphe a un résultat clair. "Écrivez-moi un article de blog" ne l'est pas.
- **Formatage reste intact** : le pilote pilote fonctionne à l'intérieur de l'éditeur, les listes restent donc intactes, et le front n'est pas modifié.
- **Itération rapide** : Si vous n'aimez pas le résultat, régénérez le texte sélectionné au lieu de tout le document.

Cela permet à AI de se sentir comme un ensemble de petites modifications, plus proche de la façon dont fonctionne un éditeur de copie.

## Utilisez-le de manière responsable

- **Écrivez la voix vous-même**: Utilisez les contours et les extensions comme des points de départ, puis gardez les phrases qui vous ressemblent.
- **Vérifiez les faits**: le modèle ne connaît pas votre base de code, votre produit ou vos chiffres.
- **Garder les secrets hors des invités**: tout ce que vous envoyez à un fournisseur est visible pour ce fournisseur.

LightCMS n'enregistre que ce que vous avez approuvé. Il ne génère pas de contenu en arrière-plan, ne stocke pas de brouillons sur les serveurs LightCMS ou n'utilise pas vos brouillons pour la formation.

## Quand cela aide le plus

- **Pour commencer**: un contour transforme une page vide en un brouillon auquel vous pouvez réagir.
- **Réécrire à la fin**: Resserrer l’introduction après que vous sachiez ce que dit le message.
- **Nettoyage final**: Exécutez une passe de grammaire dans les dernières minutes avant la publication.

## Foire aux questions

### Ai-je besoin d'une clé API ?

Oui, pour utiliser le pilote, vous devez configurer un fournisseur dans votre instance LightCMS. Tout le reste de l'éditeur fonctionne sans clé API.

### Mon contenu sera-t-il utilisé pour former des modèles?

Non. LightCMS n'envoie que le texte que vous sélectionnez pour une action au point de terminaison que vous avez configuré. Il n'envoie pas votre dépôt ou vos brouillons où que ce soit.

### Puis-je utiliser un modèle local ?

« Oui. » Si le modèle expose une API compatible avec OpenAI, pointez LightCMS à ce point de terminaison et que le pilote fonctionne de la même manière.

### Est-ce que cela changera ma question de devant?

Non. Les actions Copilot n'affectent que le contenu que vous sélectionnez.

Associé à [voice-to-text](/blog/lightcms-voice-to-text/), le copilote aide les deux côtés de la rédaction : faire tomber rapidement les mots et les formater dans un message publiable.
