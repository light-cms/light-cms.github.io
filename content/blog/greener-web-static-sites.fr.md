---
title: "Sites statiques et émissions de carbone : Construire un Web à faible impact"
description: Comment les sites statiques, la mise en cache CDN et les actifs efficaces peuvent réduire la consommation d'énergie du site Web, avec des moyens pratiques de mesurer et d'améliorer les émissions de pages.
date: 2026-10-14T13:30:00.000Z
draft: false
tags:
  - site internet à faible teneur en carbone
  - site statique co2
  - Toile verte
  - web design durable
  - Site internet de l'empreinte carbone
slug: greener-web-static-sites
---
Les sites statiques peuvent réduire l'énergie nécessaire pour servir les pages Web en déplaçant le travail de chaque requête de construction et en servant les fichiers mis en cache à partir d'un CDN. Ils ne sont pas automatiquement à faibles émissions de carbone, mais pour les sites à forte teneur en contenu, ils évitent souvent des calculs côté serveur inutiles.

## Pourquoi la distribution statique peut consommer moins d'énergie

Les sites dynamiques exécutent souvent le code de l'application, interrogent une base de données et assemblent du HTML pour chaque requête. Static sites generate HTML during a build and serve the resulting files repeatedly.| Factor | Dynamic request path | Static cached path |
\| :--- | :--- | :--- |
\| Per-request work | Application logic and database queries may run | File can be served from cache |
\| Always-on infrastructure | App server/database often required | Build runs on demand; hosting can be file/CDN based |
\| Caching | Possible, but often more complex | Natural fit for immutable/static assets |
\| Payload control | Depends on app and client bundle | Depends on build output and asset choices |

L'impact réel dépend du trafic, du taux de réussite du cache, des sources d'énergie d'hébergement, du poids de la page et du JavaScript côté client.

## Comment mesurer l'impact carbone sur le site

Les estimations sont utiles pour la direction, pas pour une comptabilité précise. Utiliser plusieurs outils et suivre les changements au fil du temps.

- [Website Carbon Calculator](https://www.websitecarbon.com/) estime les émissions par page.
- [Ecograder](https://ecograder.com/) provides sustainability-oriented scoring and recommendations.
- Les paramètres de performance du navigateur tels que la plus grande peinture de contenu, la taille totale du transfert et les coûts d'exécution JavaScript aident à identifier les pilotes techniques du poids de la page.

Une ligne de base pratique est de mesurer vos meilleures pages d'atterrissage, la taille du transfert d'enregistrements et les indicateurs de performance clés, puis de répéter après les optimisations.

## Pratiques qui réduisent l'impact de la page

1. Servez des fichiers statiques à partir d'un CDN : cache HTML, CSS, JS et images proches des utilisateurs.
2. Reduce JavaScript: Ship only the client side code needed for the page.
3. Optimiser les médias : Compresser les images, utiliser les formats modernes le cas échéant et dimensionner correctement les ressources.
4. Définir les entêtes de cache : les durées de vie prolongées de cache réduisent les transferts répétés.
5. Choisissez l'hébergement avec précaution : la source d'énergie du centre de données affecte l'empreinte.
6. Gardez le contenu durable : la simplicité de Markdown in Git réduit les pertes de reconstruction et de migration au fil du temps.

## Trade offs to keep in mind

L'architecture statique n'est pas une stratégie complète de durabilité. Un site statique avec de grandes images, des vidéos de lecture automatique, des scripts tiers lourds ou une mauvaise mise en cache peut avoir une empreinte plus grande qu'un site dynamique soigneusement optimisé. La question utile n'est pas "statique ou dynamique?" mais "Combien de travail et de données chaque page requiert-elle?"

Pour un guide d'architecture connexe, voir [Static Sites vs. Dynamic Sites](/blog/static-vs-dynamic/) et [Why LightCMS](/blog/why-this/).