---
title: "Une visite de l'éditeur LightCMS : WYSIWYG qui produit une marque propre"
description: "À l'intérieur de la surface d'écriture LightCMS : l'édition visuelle alimentée par TipTap, avec maths, surlignage de code, tableaux, listes de tâches et médias qui produisent toujours un Markdown modifiable à la main."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
keywords:
  - Editeur lightcms
  - wysiwyg markdown editor
  - éditeur visuel pour markdown
  - tiptap editor
  - markdown wysiwyg
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - éditeur
    - markdown
    - écriture
---

La plupart des "éditeurs de Markdown" sont une zone de texte avec un volet d'aperçu agrafé sur le côté. Vous écrivez une syntaxe brute, jetez un coup d'œil au résultat et espérons que l'imbrication est correcte. L'éditeur lightCMS fonctionne autrement. **Vous écrivez, et l'éditeur écrit Markdown en dessous.**

C'est un tour de cette surface d'écriture : ce qu'elle fait, pourquoi elle fonctionne ainsi et ce qu'elle refuse délibérément de faire.

---

## L'idée de base : voir le document, pas la syntaxe

L'éditeur est construit sur [TipTap](https://tiptap.dev), un cadre texte riche basé sur ProseMirror, configuré pour sérialiser tout ce qu'il produit en front standard Markdown plus YAML.

Cela signifie:

- **Bold** est un bouton de barre d'outils ou `Cmd+B`, et il écrit `**bold**` dans le fichier.
- Un titre est un menu déroulant, et il écrit `## Heading`.
- Une table est insérée, déplacée et éditée en tant que table, et s'arrête en tant que table de tubes dans votre dépôt.

Vous obtenez l'immédiat d'un traitement de texte avec la durabilité du texte brut. Il n'y a pas de format de document propriétaire, pas de blob, et aucune étape de conversion lorsque vous quittez.

---

## Ce que vous pouvez déposer dans un message

### Texte structuré
Titres, guillemets de bloc, listes ordonnées et non ordonnées, règles horizontales et listes de tâches : le squelette complet d'un article technique, accessible au clavier.

### Blocs de code avec surbrillance
Insérez un bloc clôturé, choisissez la langue, et l'éditeur garde la barrière et la balise de langue intacte. Votre publication renvoie avec la même syntaxe en surbrillance que votre SSG s'applique déjà.

### Mathématiques avec KaTeX
Écrivez des équations de maths en ligne ou affichez-les et voyez les typeset en live. Pour les publications techniques telles que les publications ML, les notes de physique, et les écritures d'algorithmes, cela supprime la boucle "compiler pour vérifier la formule".

### Tables
Insérer des lignes et des colonnes visuellement. Les tables Markdown sont misérables pour l'auteur à la main ; ce ne sont là que des cellules.

### Médias
Faites glisser les images sur la page. [LightCMS](https://lightcms.me) stocke le fichier, génère la référence et l'écrit dans votre contenu, une capture d'écran passe du presse-papiers à la publication sans avoir à parcourir votre système de fichiers.

---

## Fait avant sans le YAML

L'autre moitié de toute publication statique du site est son front, et c'est là que l'édition manuelle se passe généralement mal : un onglet errant, une date dans le mauvais format, un guillemet non fermé, et la compilation s'interrompt.

En [LightCMS](https://lightcms.me), la première question est une forme : titre, description, date, tags, mots clés, et quoi que votre schéma déclare. L'éditeur valide alors que vous tapez et écrit YAML correctement formaté lors de la publication. Les écrivains ne voient jamais la syntaxe, et le référentiel reçoit toujours ce que le SSG attend.

Une grande partie des fils de discussion de support « ma construction échoue » dans les communautés de sites statiques remontent à des problèmes de front mal formés. et une forme visuelle supprime cette classe d'erreur.

---

## Thèmes construits pour de longues sessions

L'éditeur est livré avec des modes clairs et sombres. Cela semble cosmétique jusqu'à ce que vous ayez écrit pendant trois heures : un simple fond d'écran `#ffffff` à 1h est hostile, et la plupart des tableaux de bord d'administration ne se soucient pas. [LightCMS](https://lightcms.me) picks its palettes for reading and writing over long sessions, not for a screenshot on a landing page.

---

## Ce que l'éditeur ne fera pas

Deux limites sont intentionnelles:

1. **Il ne vous permettra pas de casser le format.** Toutes les cartes d'action à Markdown valide. Il n'y a aucun état où l'éditeur enregistre quelque chose que votre SSG ne peut lire.
2. **Ce n'est pas un outil de conception.** La mise en page, le thème et la présentation appartiennent à vos modèles : le CMS possède du contenu, le référentiel est propriétaire du code. Maintenir cette ligne propre est ce qui permet aux concepteurs et aux écrivains de travailler dans le même référentiel sans s'imbriquer.

---

## Pourquoi ne pas simplement utiliser un éditeur de code ?

Vous pouvez, et les développeurs le font souvent. Mais dès qu'une seconde personne touche le dépôt, "juste éditer le Markdown" devient un fardeau de support : mauvaise matière frontale, tables mutilées, commit accidentels d'espaces. Réparer une faute de frappe signifie alors installer un éditeur, cloner un dépôt et apprendre un workflow de branche.

L'éditeur [LightCMS](https://lightcms.me) laisse le flux de travail du développeur intact et supprime ces barrières pour tout le monde.

---

## Foire aux questions

### Est-ce que l'éditeur produit un Markdown désordonné ?

Non. Il sérialise à la norme Markdown avec la matière frontale YAML, la même sortie qu'un humain attentif écrirait. Ouvrez n'importe quel message publié dans VS Code et il lit normalement.

### Puis-je toujours modifier les fichiers à la main ?

Toujours. [LightCMS](https://lightcms.me) communique dans votre dépôt comme n'importe qui d'autre. Les modifications à la main, les modifications de l'éditeur et AI modifient tous les terrains que les mêmes fichiers `.md`.

### Est-ce qu'il prend en charge les codes courts de Markdown ?

Les shortcodes de votre SSG apparaissent dans le contenu sous forme de texte brut et sont passés sous silence ; l'éditeur ne tente pas de les interpréter ou de les reformer.

### Qu'en est-il des images ?

Glisser-déposer. [LightCMS](https://lightcms.me) place la ressource et écrit la référence afin que le chemin corresponde à ce que votre construction attend.

---

Ensuite, [l'IA copilot](/blog/lightcms-ai-copilot/) qui vit à côté de cet éditeur, et [dicter un brouillon avec votre voix] (/blog/lightcms-voice-to-text/) lorsque vous tapez est la partie lente.
