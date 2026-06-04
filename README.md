# Monumental Decor – Site e‑commerce moderne

Ce dépôt contient le code source complet du site e‑commerce **Monumental Decor**.  
L’objectif est de fournir une plateforme prête à être mise en production qui valorise
le savoir‑faire artisanal de l’entreprise et permet la vente en ligne de statues,
sculptures et objets décoratifs en résine. Le design s’inspire des codes du
luxe : couleurs sombres, accents dorés, typographie élégante et animations
fluides. Le site est multilingue (français, allemand, italien et anglais),
responsive et optimisé pour le référencement naturel (SEO).

## Fonctionnalités principales

- **App Router et TypeScript** : le projet utilise Next.js 14, avec l’App
  Router pour une structure moderne et des composants serveur. Le typage
  TypeScript assure la fiabilité du code.
- **Design premium** : palette sombre avec accents dorés, typographies
  contemporaines et micro‑animations fluides. Les tendances actuelles recommandent
  notamment d’offrir un mode sombre confortable et des couleurs contrastées【242260044168923†L82-L94】,
  ainsi qu’une typographie audacieuse【242260044168923†L100-L108】 et de généreux
  espaces blancs【242260044168923†L114-L123】 pour mettre en valeur les contenus.
- **Catalogue et fiches produit** : catégories (lions, gorilles, aigles,
  chevaux, vases, pots décoratifs, statues modernes et classiques) et fiches
  détaillées avec photos multiples, dimensions, poids, matériaux, prix et
  description. Les utilisateurs peuvent ajouter des articles au panier ou
  aux favoris et demander un devis.
- **Panier et commande** : gestion du panier et de la wishlist via des
  contextes React. Page de paiement avec choix (Stripe, PayPal ou virement
  bancaire) et page de confirmation.
- **Galerie de réalisations** : galerie avant/après et projets clients.
- **Contact et devis** : formulaire complet, coordonnées (téléphone,
  WhatsApp, email) et carte Google Maps.
- **Multilingue** : l’i18n est géré via l’App Router ; les pages sont
  disponibles en français, allemand, italien et anglais. Il suffit de
  modifier l’URL (`/fr`, `/de`, `/it`, `/en`) pour changer de langue.
- **SEO optimisé** : chaque page définit des métadonnées (title,
  description et balises Open Graph). Le site respecte les bonnes pratiques :
  contenu original et riche, maillage interne clair, optimisation des
  performances (LCP, INP, CLS)【269229649630994†L433-L461】, balises
  `og:title`, `og:description`, `og:image`…【794224320458658†L56-L83】.
- **Sitemap et robots.txt** : un sitemap statique répertorie toutes les
  pages et est référencé dans le fichier `robots.txt`. Le fichier `robots.txt`
  est volontairement simple pour ne pas bloquer de contenus, conformément
  aux recommandations qui indiquent qu’il sert à gérer le crawl et non à
  cacher des pages【294371414975021†L83-L140】.

## Arborescence du dépôt

```
monumental-decor/
├─ app/
│  ├─ [lang]/            → répertoire de langue (fr/de/it/en)
│  │  ├─ layout.tsx     → layout général (header, footer, providers)
│  │  ├─ page.tsx       → page d’accueil
│  │  ├─ about/page.tsx → page Notre Histoire
│  │  ├─ shop/page.tsx  → boutique et filtres
│  │  ├─ shop/[category]/page.tsx → page catégorie
│  │  ├─ product/[slug]/page.tsx  → fiche produit
│  │  ├─ realizations/page.tsx → réalisations
│  │  ├─ contact/page.tsx → contact et devis
│  │  ├─ cart/page.tsx  → panier
│  │  ├─ wishlist/page.tsx → favoris
│  │  └─ checkout/page.tsx → page de paiement
│  └─ globals.css       → styles globaux et import Tailwind
├─ components/          → composants réutilisables (Header, Footer,
│                          Hero, ProductCard…)
├─ contexts/            → contextes React pour le panier et les favoris
├─ lib/                 → fonctions utilitaires, traductions et données
├─ public/
│  ├─ images/           → images de démonstration (statues, vases…)
│  ├─ favicon.ico       → icône du site
│  ├─ robots.txt        → directives pour les crawlers
│  └─ sitemap.xml       → liste des URL
├─ tailwind.config.js   → configuration Tailwind CSS
├─ postcss.config.js    → configuration PostCSS
├─ tsconfig.json        → configuration TypeScript
├─ next.config.js       → configuration Next.js
├─ package.json         → gestionnaire de dépendances et scripts
└─ README.md            → documentation (ce fichier)
```

## Prérequis

Assurez‑vous d’avoir Node.js 18 ou supérieur installé sur votre machine.

## Installation et développement local

1. Clonez ce dépôt et placez‑vous à sa racine :

   ```bash
   git clone https://github.com/votre-utilisateur/monumental-decor.git
   cd monumental-decor
   ```

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:3000/fr](http://localhost:3000/fr) pour accéder à la version française.
   Remplacez `fr` par `de`, `it` ou `en` pour voir les autres langues.

## Déploiement sur Vercel

1. **Créer un dépôt GitHub** : poussez le contenu de ce répertoire sur GitHub.
2. **Connecter Vercel** : rendez‑vous sur [vercel.com](https://vercel.com), connectez votre compte GitHub et importez
   le dépôt. Vercel détectera automatiquement le framework Next.js et proposera
   les commandes de build (`npm run build`) et de lancement (`npm run start`).
3. **Configurer les variables d’environnement** : ce projet n’en requiert pas
   par défaut. Si vous ajoutez des clés (Stripe, SendGrid…), définissez‑les
   dans l’onglet “Environment Variables”.
4. **Déployer** : cliquez sur “Deploy”. Votre site sera disponible sous
   `https://monumental-decor.vercel.app` ou un domaine personnalisé.
5. **SEO et performances** : surveillez vos Core Web Vitals via Vercel
   Analytics ou Google Search Console. Les pages respectent les bonnes
   pratiques (optimisation d’images, Lazy loading, etc.)【242260044168923†L178-L186】.

## Déploiement sur GitHub Pages

Bien que le site soit optimisé pour Vercel, vous pouvez également générer
une version statique à l’aide de `next export` :

```bash
npm run build
next export
```

Les fichiers statiques seront générés dans le dossier `out/`. Servez ce
dossier via GitHub Pages ou un autre hébergeur statique. Veillez à activer
la fonction `trailingSlash` dans `next.config.js` si vous utilisez ce mode.

## Personnalisation et ajout de produits

- **Ajouter des produits** : éditez le fichier `lib/products.ts` pour ajouter
  de nouveaux produits. Chaque objet produit contient un `slug`, une
  catégorie, des noms et descriptions multilingues, des caractéristiques
  (dimensions, poids, matériaux) et des images associées.
- **Modifier les textes** : adaptez les traductions dans `lib/translations.ts`.
  Ce fichier regroupe toutes les chaînes utilisées sur le site.
- **Changer les images** : remplacez les fichiers de `public/images` par vos
  propres photos (format WebP ou PNG recommandé, compression adaptée). Les
  images actuelles sont des illustrations générées pour la démonstration.
- **Activer les paiements** : les pages de paiement incluent des boutons
  factices. Pour activer Stripe ou PayPal, installez les SDK et implémentez
  des Server Actions qui créent les sessions de paiement.

## Références et ressources utilisées

Ce projet s’appuie sur des recherches effectuées en 2026 pour respecter les
tendances actuelles du web design et les meilleures pratiques SEO :

- **Dark mode, typographie et micro‑interactions** : la popularité des modes
  sombres et des couleurs contrastées ainsi que l’importance des animations
  discrètes sont décrites dans l’article de SpreadSimple【242260044168923†L82-L94】【242260044168923†L178-L186】.
- **Minimalisme et architecture de page** : laisser de l’espace autour des
  éléments améliore la lisibilité et respecte l’attention de l’utilisateur【242260044168923†L114-L123】.
- **Core Web Vitals et performances** : Google mesure la vitesse de
  chargement, la réactivité et la stabilité visuelle. Ces métriques
  influencent directement le classement et les taux de conversion【269229649630994†L433-L461】.
- **Buyer‑intent keywords et optimisation sémantique** : il est essentiel
  d’optimiser vos pages produit pour des requêtes à forte intention
  d’achat et d’intégrer des variantes longues【269229649630994†L298-L312】.
- **Création de sitemap et robots.txt** : un sitemap doit contenir des URL
  indexables, être soumis via Search Console et référencé dans `robots.txt`
  【102608916776167†L60-L74】. Le fichier robots.txt sert uniquement à
  gérer le crawl et ne doit pas être utilisé pour masquer du contenu【294371414975021†L83-L140】.
- **Open Graph** : pour un affichage optimisé sur les réseaux sociaux,
  définissez les balises `og:title`, `og:description`, `og:image`,
  `og:url`, `og:locale` et `og:site_name`【794224320458658†L56-L83】.
- **Architecture Next.js 2026** : les Server Components et Server Actions
  permettent de n’hydrater que les parties interactives et d’améliorer
  significativement les performances【87795621590881†L45-L54】.

N’hésitez pas à adapter ce projet et à l’étendre selon les besoins
de votre entreprise !