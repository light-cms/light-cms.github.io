---
title: "Qu'est-ce qu'un générateur de site statique?"
description: "Un générateur de sites statiques construit des pages à l'avance à partir de modèles et de fichiers de contenu."
serial: 46
date: 2026-10-16T11:20:00Z
draft: false
keywords:
  - quel est un générateur de site statique
  - générateur de site statique
  - ssg expliqué
  - comment fonctionnent les sites statiques
  - prérendu html
preview: /og-image.webp
taxonomies:
  tags:
    - sites statiques
    - ssg
    - expliqueurs
    - web
---

Un **générateur de site statique (SSG)** est un programme qui prend du contenu et des modèles et produit un site web complet en HTML, Fichiers CSS et JavaScript, avant toute visite.

Au lieu d'assembler une page par requête, le travail se produit une fois, au moment de la compilation. Ce qui est expédié au lecteur est l'artefact fini.

---

## Le modèle en un schéma

```text
Contenu (Markdown + front matter) <unk>
Modèles (HTML / JSX / Générer des gabarits)─> SSG build ─ > public/ ─ > CDN ─ > Navigateur
Configuration, données, styles <unk>
```

Exécutez la compilation, et un répertoire `public/` apparaît contenant toutes les pages du site. Déployez ce répertoire n'importe où qui peut servir des fichiers, et le site est en direct.

---

## Ce que la construction fait actuellement

1. **Lit le contenu.** Les fichiers Markdown [front matter](/blog/what-is-front-matter/: titres, dates, tags, Drapeaux brouillons.
2. **Applique les modèles.** Chaque type de contenu correspond à une mise en page : page de poste, listing, index de tags, page d'accueil.
3. **Génère chaque page.** Les pages d'articles, les listes paginées, les archives de tags, les flux RSS, et les plans de site, tous pré-rendus.
4. **Copie des ressources.** Images, polices, styles, scripts.
5. **Émet `public/`.** Un dossier de fichiers sans runtime attaché.

Certains générateurs le font en millisecondes ; certains en secondes. Rien de tout cela ne se produit quand un lecteur attend.

---

## Pourquoi la différence compte-t-elle

Un site dynamique (WordPress, Rails, la plupart des frameworks rendus par serveur) fonctionne à chaque demande : exécuter du code, interroger une base de données, assembler du HTML, répondre. Un site statique a déjà fait ce travail.

Les conséquences sont structurelles:

- **Vitesse.** L'arête CDN la plus proche a déjà la page. Il n'y a pas de requête, pas de rendu, pas de début froid.
- **Sécurité.** Aucun code côté serveur n'exécute par requête, aucune base de données en écoute sur un port, aucune connexion admin à brute-force. La surface d'attaque est un dossier de fichiers.
- **Fiabilité.** Rien à planter à 3 heures. Le mode d'échec le plus courant est un mauvais déploiement, qui est annulé en redéployant le précédent.
- **Coût.** La bande passante est bon marché; le calcul permanent n'est pas le cas. Les sites statiques coûtent une erreur d'arrondi à presque n'importe quel niveau de trafic.
- **Longévité.** Les fichiers restent lisibles. L'outil de construction peut vieillir, mais la sortie ne pourrit pas.

Il y a aussi un argument environnemental qui vaut la peine d'être pris au sérieux : servir des fichiers mis en cache près du lecteur utilise une fraction de l'énergie de l'exécution de code par vue. [Sites statiques et CO2](/blog/greener-web-static-sites/) entre dans les nombres.

---

## Quels sont les SSGs sont de bonnes valeurs et où ils luttent

**Excellent pour:** les blogs, la documentation, les pages d'accueil, les portefeuilles et tout site où le contenu change occasionnellement et où la lecture se produit constamment.

**Maladroit :** contenu qui doit être mis à jour en cas de changement de données. (peut être fait avec une hydratation partielle)

L'interactivité n'est pas hors limites. Le modèle moderne préaffiche tout et fixe les petites îles de JavaScript si nécessaire (formulaires, recherche, bascule en mode sombre), l'idée derrière [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) et des outils similaires.

---

## Les options en bref

| Générateur              | Langue / Modèle                  | Force de la signature                                     |
| :---------------------- | :------------------------------- | :-------------------------------------------------------- |
| **Hugo**                | Modèles de Go                    | Vitesse de construction brute, énorme écosystème de thème |
| **Astro**               | Composants `.astro`              | Architecture des îles, collections de contenu             |
| **Elevent**             | Nunjucks, Liquide et plus encore | minimalisme Zero-JS, contrôle complet                     |
| **Jekyll**              | Liquide                          | GitHub Pages heritage, simplicity                         |
| **Zola**                | Tera                             | Simple binaire, piles incluses                            |
| **SvelteKit / Next.js** | React/Svelte                     | Sites qui se transforment en applications                 |

L'enquête complète est effectuée dans [les meilleurs générateurs de site statique] (/blog/best-static-site-generators/). Tous consomment la même entrée: Markdown avec la matière première.

---

## Où le CMS s'adapte

Un SSG résout le _rendu_ ; il ne dit rien de _création_. Laissé seul, publier signifie éditer des fichiers dans un éditeur de code et pousser des livraisons : réalisables pour les développeurs, une barrière pour tout le monde.

Un CMS soutenu par Git remplit cette lacune : il écrit Markdown et la matière frontale dans le référentiel via un éditeur visuel, et le SSG fait ce qu'il a toujours fait. Le générateur ne change jamais; l'expérience de l'auteur le fait. C'est toute la prémisse derrière [LightCMS](/blog/what-is-lightcms/), et la façon la plus rapide de le voir est de [copier un modèle de démarrage](/blog/start-with-a-lightcms-template/) avec la construction déjà configurée.

---

## Foire aux questions

### Un SSG est-il identique à un framework?

Non. Un framework gère les requêtes lors de l'exécution, un générateur s'exécute au moment de la compilation et produit des fichiers. Certains outils brouillent la ligne : SvelteKit et Next.js peuvent faire les deux.

### Est-ce que les sites statiques supportent les commentaires, les formulaires ou les recherches ?

Oui, par le biais de services tiers ou de JavaScript côté client : les terminaux de formulaire, les fournisseurs de commentaires et les index de recherche côté navigateur sont tous courants.

### À quelle fréquence dois-je reconstruire ?

Seulement lorsque le contenu ou le code est modifié. Un blog typique s'appuie sur chaque publication, un processus mesuré en secondes.

### Un site statique est-il bon pour le SEO?

« Très bien. » Une charge rapide, des vitaux Web de base solides, un HTML facile à explorer, et aucun problème de double affichage n'est rencontré.

### Un site statique peut-il gérer un trafic élevé ?

« Oui. » Le trafic est servi à partir de cache, donc les pointes sont bon marché. Un site dynamique fonctionne autrement, où les pics coûtent de l'argent.

---

Relatif : [statique vs dynamic sites] (/blog/static-vs-dynamic/), [qu'est-ce que la Jamstack?](/blog/what-is-jamstack/), et [où héberger un site statique] (/misc/top-static-site-hosting/).
