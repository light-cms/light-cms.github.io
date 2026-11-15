---
title: "LightCMS vs fantôme : plateformes de publication comparées"
description: "Ghost est une plate-forme de publication Node.js avec des adhésions et des e-mails intégrés; LightCMS est un éditeur basé sur Git pour les sites statiques. Comparer le stockage, le coût et le flux de travail d'écriture."
serial: 54
date: 2026-10-16T12:40:00Z
draft: false
keywords:
  - lightcms vs fantôme
  - alternatives fantômes
  - fantôme vs site statique
  - Plateforme de blogging auto-hébergée
  - alternative tarifaire fantômes
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - fantôme
    - cms
    - Comparaison
    - Publication
---

[Ghost](https://ghost.org) is the most convincing modern take on "publish and get paid": a fast Node.js publishing platform with a beautiful editor, memberships, newsletters, and payments in one package, self-hostable or hosted.

LightCMS couvre la moitié de ce qui est écrit et aucune de la moitié de l'adhésion. Le choix revient à savoir si votre publication a besoin d'une _plateforme_ ou d'une _pipeline_.

---

## Le Split

**Ghost** est une application : Node.js plus une base de données MySQL, le rendu des pages par requête (ou la récupération du client dans un frontend Jamstack). Contenu, membres, abonnements et e-mails en direct dans sa base de données.

**LightCMS** est un outil de contenu : Markdown dans votre dépôt, une compilation statique, et un CDN. La distribution au-delà du site, comme [newsletters](/blog/newsletter-email-automation/), fonctionne sur GitHub plutôt que dans une base de données de membres.

|                         | LightCMS                                        | Fantôme                                  |
| :---------------------- | :---------------------------------------------- | :--------------------------------------- |
| **Stockage**            | Markdown dans Git                               | Base de données MySQL                    |
| **Équivalent**          | HTML statique précompilé                        | API côté serveur / headless              |
| **Membres & paiements** | Non intégré                                     | Adhésions autochtones, Stripe            |
| **Newsletters**         | Newsy sur GitHub (pas de service de messagerie) | E-mail natif pour les membres            |
| **Éditeur**             | TipTap WYSIWYG → Markdown                       | Nettoyer l'éditeur basé sur Markdown     |
| **pilote IA / voix**    | Inclus dans                                     | Non groupé                               |
| **Opérations**          | Aucun au moment de l'exécution.                 | Application + DB à exécuter et à patcher |
| **Coût**                | Hébergement uniquement                          | Hébergement, ou offres Ghost(Pro)        |
| **Portabilité**         | Cloner le dépôt                                 | Exporter les membres + le contenu        |

---

## Où le fantôme gagne

- **Les adhésions et les abonnements sont gratuits.** Les paliers payants, la facturation Stripe et la gestion des membres se situent en dehors du champ d'application de LightCMS.
- **Des newsletters indigènes à une liste d'auditoires.** L'envoi, les tarifs ouverts et la segmentation font partie du produit.
- **Une entreprise d’édition tout-en-un.** Une application gère l’écriture, la livraison et la monétisation.
- **Un administrateur poli** et un thème fort par défaut.

## Où LightCMS gagne

- **Sortie statique.** Aucune requête de base de données par page : plus rapide, moins cher à l'échelle et une plus petite surface d'attaque. Voir [les sites statiques vs dynamiques] (/blog/static-vs-dynamic/).
- **Propriété et portabilité.** Le contenu est un fichier dans votre dépôt; il n'y a pas de verrouillage en forme de base de données pour l'écriture elle-même.
- **Les outils d'écriture supplémentaires.** [AI drafting](/blog/lightcms-ai-copilot/), [voice-to-text](/blog/lightcms-voice-to-text/), et l'édition de documents complets avec des tableaux, du code et des mathématiques.
- **Zéro surface opérationnelle.** Pas de processus de nœud, pas de MySQL à patcher ou à sauvegarder.
- **Coûts qui ne s'échelonnent pas avec le public.** Une plus grande liste ne signifie pas un serveur plus grand.

---

## La question pratique

Monétissez-vous un public directement à l'intérieur de votre site?

- **Oui** → Ghost est construit à des fins et la base de données gagne sa conservation.
- **Non** → vous utilisez une base de données pour contenir des messages qu'un dossier de fichiers contiendrait, ainsi que la maintenance qui l'accompagne. Pair LightCMS avec un fournisseur de listes de diffusion ou Newsy et vous gardez la newsletter sans le temps d'exécution.

De nombreuses équipes dirigent les deux: un site de marketing statique et blog sur LightCMS, avec la zone d'adhésion comme une application séparée.

---

## Migration

Ghost exporte des messages en JSON (et les membres en CSV). La conversion des messages en Markdown avec la première question est principalement mécanique; la sortie de l'éditeur de Ghost's est déjà proche de Markdown. La liste des membres se déplace vers la plateforme de newsletter que vous choisissez. Planifiez pour une fin de semaine, pas un trimestre.

---

## Que devriez-vous choisir?

- **Choisissez Ghost** si les adhésions, les abonnements payants et les e-mails natifs sont le produit.
- **Choisissez LightCMS** si le produit est écrit et que le site doit être statique, rapide et le vôtre.

---

## Foire aux questions

### Fantôme est-il gratuit ?

Ghost est open source (MIT) et auto-hébergeable; Ghost(Pro) est l'option hébergée, payante. Dans les deux cas, vous possédez votre contenu, mais l'auto-hébergement signifie exécuter Node et MySQL.

### Puis-je créer une newsletter avec LightCMS ?

« Oui. » [Newsy](https://github.com/light-cms/newsy) transforme de nouveaux messages en une annonce sur un problème GitHub auquel les lecteurs s'abonnent, sans service de newsletter, sans relais SMTP et sans frais d'abonné. Ce que vous n'obtenez pas, c'est la base de données et la segmentation des membres de Ghost.

### Ghost est-il plus rapide qu'un site statique?

Ghost est rapide pour une application dynamique, mais une page pré-construite servie à partir d'un CDN a un avantage structurel à la première charge.

### Ghost peut-il afficher un site statique ?

Ghost a une API de contenu et fonctionne sans tête, mais l'application et la base de données Ghost tournent toujours.

---

Plus: [WordPress alternatives](/blog/wordpress-alternatives/), [LightCMS vs WordPress](/comparison/lightcms-vs-wordpress), [best CMS for static sites] (/blog/best-cms-for-static-sites/).
