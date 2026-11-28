---
title: "Visite de l'éditeur LightCMS : Édition visuelle avec la sortie Markdown"
description: "Un regard pratique sur l'éditeur LightCMS, y compris l'édition visuelle, la gestion de la matière frontale, les médias, et les compromis des flux de travail WYSIWYG Markdown."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
tags:
  - lightcms
  - éditeur
  - markdown
  - écriture
---

L'éditeur LightCMS donne aux rédacteurs une interface d'édition visuelle tout en sauvegardant le contenu en tant que Markdown et en tant que première matière dans un dépôt Git. L'objectif principal est de réduire les erreurs de formatage sans sortir le contenu d'un flux de travail basé sur des fichiers.

## Ce que l'éditeur gère

| Tâche de l'éditeur         | Ce qu'il faut vérifier                                | Pourquoi cela compte-t-il                                                           |
| :------------------------- | :---------------------------------------------------- | :---------------------------------------------------------------------------------- |
| Formatage du texte enrichi | Titres, listes, liens, guillemets, blocs de code      | Les écrivains ne devraient pas avoir besoin de déboguer la syntaxe Markdown         |
| Marchandise avant          | Titre, date, tags, description, état brouillon        | Les métadonnées non valides peuvent endommager les constructions de sites statiques |
| Médias                     | Téléchargement d'image, chemins, texte alt            | La gestion des actifs cause souvent des liens cassés dans les sites statiques       |
| Contenu structuré          | Tables, listes de tâches, intégrations, mathématiques | La prise en charge des fonctionnalités varie selon l'éditeur et le SSG              |
| Markdown output            | Nettoyer Markdown dans Git                            | La qualité de sortie affecte la portabilité à long terme                            |

Un bon éditeur WYSIWYG Markdown devrait faciliter les tâches d'écriture courantes tout en préservant la sortie prévisible des fichiers. Si l'éditeur produit du Markdown bruyant ou réécrit inopinément la première matière, il crée des frictions pour les développeurs qui revoient des diffs.

## Pré-face et sécurité de construction

Les erreurs de la matière frontale sont une source courante de défaillances de construction statique du site. Un éditeur de texte frontal basé sur un formulaire peut réduire les erreurs telles que les dates invalides, les champs requis manquants ou YAML mal formés.

Le compromis est la flexibilité. Les formulaires stricts empêchent les erreurs, mais ils peuvent également bloquer les champs personnalisés, à moins que l'éditeur n'autorise le support du schéma ou des clés personnalisées.

## Édition visuelle des compromis

Les éditeurs visuels sont utiles pour les écrivains qui ne veulent pas gérer la syntaxe brute de Markdown. Elles sont moins utiles lorsqu'une équipe a besoin d'un contrôle précis sur les shortcodes personnalisés, les extensions Markdown inhabituelles ou les composants spécifiques au framework. Dans ce cas, l'éditeur devrait préserver les blocs bruts plutôt que de les réécrire.

Mon opinion est qu'un éditeur visuel est précieux pour la publication basée sur Git quand il maintient Markdown propre et prévisible. Si elle masque trop ou génère une sortie propriétaire, elle sape en premier lieu l'avantage de portabilité de l'utilisation de Git.

Pour les fonctionnalités liées, voir [Copilote de l'IA LightCMS](/blog/lightcms-ai-copilot/) et [Dictée vocale vers le texte dans LightCMS](/blog/lightcms-voice-to-text/).
