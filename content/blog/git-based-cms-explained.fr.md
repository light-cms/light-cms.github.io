---
title: What Is a Git Based CMS?
description: >-
  A Git based CMS stores content as files in a repository and commits edits like code the architecture, the workflow, and when it beats a database.
serial: 43
date: "2026-10-16T10:50:00.000Z"
draft: false
tags:
  - quel est un cms basé sur git
  - Cms basés sur git
  - git cms
  - cms à base de fichier
  - cms avec contrôle de version

slug: git-based-cms-explained
---

A **Git based CMS** Is a content management system that stores content as files in a Git repository instead of rows in a database. L'édition se fait dans une interface visuelle ; l'enregistrement se fait sous forme de commit. La construction du site lit ces fichiers et produit des pages.

Ce choix de conception unique (fichiers et non lignes) se casse dans tout le reste sur le comportement de ces outils : versionnage, portabilité, coût, sécurité, et qui peut les utiliser.

## L'Architecture

Un CMS basé sur Git est installé entre un auteur et un référentiel, et ne touche rien d'autre :

```text
Ecrivain ─ > Editeur visuel ─ > commit (. d + question de devant)
                                   <unk>
                                   <unk>
                          Dépôt Git (source de vérité)
                                   <unk>
                                   <unk>
                     CI / CD build (Astro, Hugo, Zola, …)
                                   Ω
                                   Ω
                        Sortie statique ─ > CDN ─ > Reader
```

Trois propriétés définissent la catégorie:

1. **Le dépôt est la base de données.** Il n'y a pas de seconde copie du contenu. Si elle n'est pas engagée, elle n'existe pas; si elle est engagée, elle est soutenue par chaque clone.
2. **La compilation est l'exécution.** Les pages sont assemblées au moment de la compilation et sont servies en tant que fichiers. Rien ne rend le contenu par requête.
3. **Le CMS est un client, pas un hôte.** Il écrit dans le référentiel et peut être remplacé sans toucher au contenu.

Contrastez cela avec un CMS traditionnel : contenu en MySQL, modèles en PHP, assemblés à chaque demande, administré par la même application qui sert le site. [Git based CMS vs traditional CMS](/blog/git-cms-vs-traditional-cms/) Works through the comparison.

## Qu'est-ce qu'un engagement fait

Lorsqu'un écrivain frappe la publication, le CMS sérialise le document vers Markdown avec la première matière YAML et le communique :

```markdown
---
title: Expédier le nouveau tableau de bord
date: 2026-10-16T09:00:00Z
brouillon : faux
tags :
  - produit
---

Le corps du texte commence ici...
```

Cet engagement fait plusieurs tâches à la fois :

- **C'est la sauvegarde.** Le contenu est maintenu dans le dépôt.
- **Il s'agit de l'entrée d'audit.** Auteur, horodatage et message enregistré automatiquement.
- **C'est la sauvegarde.** Chaque clone contient l'historique complet.
- **C'est le déclencheur de déploiement.** CI le ramasse, construit et vaisseau.

Une écriture remplace quatre systèmes séparés dans une pile conventionnelle.

---

## Les propriétés du flux de travail que vous obtenez gratuitement

### Historique des versions avec diffs réels

Les diffs Markdown sont lisibles. "Qui a changé cette phrase, et quand" est une ligne `git log`, pas un plugin ou une requête de base de données.

### Roll back per file

Annuler une publication sans rien toucher d'autre. La restauration d'une base de données annule tout le site, généralement silencieusement.

### Branches et demandes de fusion en tant que revue éditoriale

Écrire sur une branche, soumettre une PR, prendre des commentaires au niveau de la ligne sur le paragraphe exact, fusionner une fois approuvé. Les outils de révision natifs de GitHub deviennent un flux de travail éditorial.

### Contenu portable

The content is stored as plain text, enabling seamless migration across generators, hosts, and CMS platforms the archive moves with you.

## The TradeOffs (Stated Honestly)

Git basé n'est pas une victoire universelle :

- **Aucune requête.** Vous ne pouvez pas rejoindre le contenu à l'heure de la requête; la construction doit produire toutes les pages nécessaires. Le contenu relationnel est mal adapté.
- **Reconstruire la latence.** Un changement est en cours après une compilation, pas après une sauvegarde. Les versions modernes sont rapides, mais "instantanées" se mesure en secondes à minutes.
- **Fusionner les conflits.** Deux personnes qui modifient le même fichier créent un vrai conflit. Les outils CMS bien conçus ont une portée (un post par fichier), mais il existe.
- **Contrôle d'accès grossier.** L'accès au dépôt n'est pas par champ. Si vous avez besoin d'une application de rôle granulaire, un administrateur soutenu par une base de données est le meilleur outil.
- **Nontechnical onboarding.** Raw Git is hostile to writers, which is the gap a Git based CMS fills: it hides the commits while keeping the benefits.

Ce dernier point concerne la plupart des évaluations. L'architecture est généralement correcte pour une publication; la question est de savoir quel outil la rend utilisable pour la publication des personnes.

## Que chercher en un

- **Qualité de l'éditeur.** Les écrivains y vivront. Les champs de formulaire par rapport à un véritable éditeur de document est la plus grande différence pratique entre les outils.
- **Manipulation de la matière première.** Des métadonnées mal formées casse les builds; un bon outil les valide.
- **Publier le modèle.** Livrer directement, ou pull request avec revue.
- **Support du fournisseur.** GitHub, GitLab, Bitbucket: quel que soit le type d'utilisation que vous utilisez.
- **Hosting model.** Self hosted (you run it) versus hosted (they run it).
- **Coût de sortie.** Cela devrait être zéro. Si l'outil a disparu demain, votre dépôt devrait toujours être construit.

[LightCMS](https://lightcms.me) est construit autour de ces critères ; voir [ce qu'est LightCMS](/blog/what-is-lightcms/). Le champ plus large est étudié dans [les plates-formes CMS basées sur Git] (/comparison/top-git-cms).

## Foire aux questions

### Un CMS basé sur Git est-il le même qu'un CMS sans tête ?

1. Headless describes _how content reaches a frontend_ (through an API); Git based describes _where content lives_ (files in a repository). Les deux idées se chevauchent dans la pratique; voir [CMS basé sur Git sans tête](/blog/headless-vs-git-based-cms/).

### Do I need to know Git to use it?

1. You don’t need to be familiar with Git to view history or manage branches; the editor handles all commit operations for you.

### Un CMS Git peut-il gérer un grand site ?

« Oui. » Les générateurs construisent des milliers de pages rapidement, et le référentiel gère le volume de contenu confortablement. Le temps de construction est le plafond pratique, pas le stockage.

### Est-ce que cela fonctionne avec mon générateur de site statique?

Yes if your generator can read Markdown files with front‑matter, such as Astro, Hugo, Zola, Eleventy, Jekyll, SvelteKit, or Next.js.

### Où vont les médias?

Généralement vers un répertoire dans le référentiel ou un bucket d'asset référencé depuis la première question. Quoi qu’il en soit, la référence vit avec le contenu.

Next: [headless vs Git based CMS](/blog/headless-vs-git-based-cms/) if you're still weighing architectures, or [what front matter is](/blog/what-is-front-matter/) If the metadata layer is new to you.
