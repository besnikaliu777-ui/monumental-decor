import type { Locale } from './translations';

export interface Product {
  slug: string;
  category: 'animal' | 'vaseResine' | 'vaseBeton' | 'fontaine';
  names: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  dimensions: string;
  weight: string;
  materials: string;
  delay: string;
  delivery: string;
  warranty: string;
  care: string;
  modelType: 'vase' | 'statue';
  modelHeightCm: number;
  price: number;
  priceLabel?: Record<Locale, string>;
  images: string[];
}

export const products: Product[] = [
  {
    slug: 'fontaine-dame-modele-a',
    category: 'fontaine',
    names: {
      fr: 'Fontaine décorative Dame',
      de: 'Dekorativer Damenbrunnen',
      it: 'Fontana decorativa Dama',
      en: 'Decorative Lady Fountain',
    },
    descriptions: {
      fr: 'Fontaine décorative avec statue de dame, bassin sculpté et finition pierre claire. Une pièce monumentale pour hall, villa, jardin d’hiver ou terrasse couverte.',
      de: 'Dekorativer Brunnen mit Damenstatue, skulptiertem Becken und heller Steinoptik.',
      it: 'Fontana decorativa con statua femminile, vasca scolpita e finitura pietra chiara.',
      en: 'Decorative fountain with lady statue, sculpted basin and light stone finish.',
    },
    dimensions: 'Hauteur statue env. 162 cm, bassin env. 120 cm de diamètre, hauteur bassin env. 48 cm',
    weight: 'Env. 85 kg',
    materials: 'Résine haute résistance, finition pierre claire',
    delay: 'Disponible sur commande, préparation 7 à 14 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer à l’eau claire, éviter les produits abrasifs',
    modelType: 'statue',
    modelHeightCm: 162,
    price: 2999,
    images: [
      '/images/fontaine-dame-modele-a.jpg',
      '/images/fontaine-dame-modele-a.jpg',
      '/images/fontaine-dame-modele-a.jpg',
      '/images/fontaine-dame-modele-a.jpg',
      '/images/fontaine-dame-modele-a.jpg',
    ],
  },
  {
    slug: 'vase-anges-floral-modele-a',
    category: 'vaseResine',
    names: {
      fr: 'Vase floral aux anges',
      de: 'Blumenvase mit Engeln',
      it: 'Vaso floreale con angeli',
      en: 'Floral Angel Vase',
    },
    descriptions: {
      fr: 'Vase décoratif aux anges avec ornements floraux et détails dorés. Idéal pour une entrée, un salon, une réception ou une terrasse couverte.',
      de: 'Dekorative Englevase mit floralen Ornamenten und goldenen Details.',
      it: 'Vaso decorativo con angeli, ornamenti floreali e dettagli dorati.',
      en: 'Decorative angel vase with floral ornaments and gold details.',
    },
    dimensions: 'Env. 95 x 55 x 55 cm',
    weight: 'Env. 18 kg',
    materials: 'Résine haute résistance, finition ivoire et dorée',
    delay: 'Disponible sur commande, préparation 3 à 10 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer avec un chiffon doux, éviter les produits abrasifs',
    modelType: 'vase',
    modelHeightCm: 95,
    price: 599,
    images: [
      '/images/vase-anges-floral-modele-a.jpg',
      '/images/vase-anges-floral-modele-a.jpg',
      '/images/vase-anges-floral-modele-a.jpg',
      '/images/vase-anges-floral-modele-a.jpg',
      '/images/vase-anges-floral-modele-a.jpg',
    ],
  },
  {
    slug: 'vase-medicis-6125-02',
    category: 'vaseResine',
    names: {
      fr: 'Vase Médicis 6125-02',
      de: 'Medici-Vase 6125-02',
      it: 'Vaso Medici 6125-02',
      en: 'Medici Vase 6125-02',
    },
    descriptions: {
      fr: 'Grand vase décoratif effet pierre pour jardin, entrée ou terrasse. Format généreux avec lignes classiques et finition réaliste.',
      de: 'Große dekorative Vase in Steinoptik für Garten, Eingang oder Terrasse.',
      it: 'Grande vaso decorativo effetto pietra per giardino, ingresso o terrazza.',
      en: 'Large decorative stone-effect vase for garden, entrance or terrace.',
    },
    dimensions: 'Env. 95 x 72 x 48 cm',
    weight: 'Env. 24 kg',
    materials: 'Résine haute résistance, finition pierre',
    delay: 'Disponible sur commande, préparation 3 à 10 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer à l’eau claire, protéger du gel extrême si possible',
    modelType: 'vase',
    modelHeightCm: 95,
    price: 799,
    images: [
      '/images/vase-medicis-6125-02.jpg',
      '/images/vase-medicis-6125-02.jpg',
      '/images/vase-medicis-6125-02.jpg',
      '/images/vase-medicis-6125-02.jpg',
      '/images/vase-medicis-6125-02.jpg',
    ],
  },
  {
    slug: 'chien-statue-6125-02',
    category: 'animal',
    names: {
      fr: 'Statue chien 6125-02',
      de: 'Hundestatue 6125-02',
      it: 'Statua cane 6125-02',
      en: 'Dog Statue 6125-02',
    },
    descriptions: {
      fr: 'Statue de chien assis avec finition réaliste effet pierre. Une pièce forte pour entrée de villa, jardin ou terrasse.',
      de: 'Sitzende Hundestatue mit realistischer Steinoptik.',
      it: 'Statua di cane seduto con finitura realistica effetto pietra.',
      en: 'Seated dog statue with realistic stone-effect finish.',
    },
    dimensions: 'Env. 95 x 72 x 48 cm',
    weight: 'Env. 30 kg',
    materials: 'Résine haute résistance, finition réaliste',
    delay: 'Disponible sur commande, préparation 3 à 10 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer à l’eau claire, éviter les produits abrasifs',
    modelType: 'statue',
    modelHeightCm: 95,
    price: 999,
    images: [
      '/images/chien-statue-6125-02.jpg',
      '/images/chien-statue-6125-02.jpg',
      '/images/chien-statue-6125-02.jpg',
      '/images/chien-statue-6125-02.jpg',
      '/images/chien-statue-6125-02.jpg',
    ],
  },
  {
    slug: 'paon-monumental',
    category: 'animal',
    names: {
      fr: 'Paon monumental',
      de: 'Monumentaler Pfau',
      it: 'Pavone monumentale',
      en: 'Monumental Peacock',
    },
    descriptions: {
      fr: 'Paon décoratif monumental avec plumage coloré et détails réalistes. Pièce spectaculaire pour jardin, villa, hôtel ou entrée paysagère.',
      de: 'Monumentaler dekorativer Pfau mit farbigem Gefieder und realistischen Details.',
      it: 'Pavone decorativo monumentale con piumaggio colorato e dettagli realistici.',
      en: 'Monumental decorative peacock with colorful plumage and realistic details.',
    },
    dimensions: 'Env. 110 x 185 x 75 cm',
    weight: 'Env. 45 kg',
    materials: 'Résine haute résistance, finition colorée réaliste',
    delay: 'Disponible sur commande, préparation 7 à 14 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer à l’eau claire, éviter les produits abrasifs',
    modelType: 'statue',
    modelHeightCm: 110,
    price: 1899,
    images: [
      '/images/paon-monumental.jpg',
      '/images/paon-monumental.jpg',
      '/images/paon-monumental.jpg',
      '/images/paon-monumental.jpg',
      '/images/paon-monumental.jpg',
    ],
  },
  {
    slug: 'lion-imperial-6200-01',
    category: 'animal',
    names: {
      fr: 'Lion impérial 6200-01',
      de: 'Imperialer Löwe 6200-01',
      it: 'Leone imperiale 6200-01',
      en: 'Imperial Lion 6200-01',
    },
    descriptions: {
      fr: 'Statue de lion impérial avec finition pierre réaliste. Une pièce monumentale pour entrée de villa, terrasse, jardin ou espace d’accueil.',
      de: 'Imperiale Löwenstatue mit realistischer Steinoptik.',
      it: 'Statua di leone imperiale con finitura effetto pietra realistica.',
      en: 'Imperial lion statue with realistic stone-effect finish.',
    },
    dimensions: 'Env. 110 x 130 x 60 cm',
    weight: 'Env. 55 kg',
    materials: 'Résine haute résistance, détails réalistes',
    delay: 'Disponible sur commande, préparation 7 à 14 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer à l’eau claire, éviter les produits abrasifs',
    modelType: 'statue',
    modelHeightCm: 110,
    price: 3499,
    images: [
      '/images/lion-imperial-6200-01.jpg',
      '/images/lion-imperial-6200-01.jpg',
      '/images/lion-imperial-6200-01.jpg',
      '/images/lion-imperial-6200-01.jpg',
      '/images/lion-imperial-6200-01.jpg',
    ],
  },
  {
    slug: 'gorille-imperial-6100-01',
    category: 'animal',
    names: {
      fr: 'Gorille impérial 6100-01',
      de: 'Imperialer Gorilla 6100-01',
      it: 'Gorilla imperiale 6100-01',
      en: 'Imperial Gorilla 6100-01',
    },
    descriptions: {
      fr: 'Statue de gorille impérial en finition noire réaliste. Pièce expressive pour jardin, terrasse, hôtel ou entrée paysagère.',
      de: 'Imperiale Gorillastatue in realistischer schwarzer Ausführung.',
      it: 'Statua di gorilla imperiale con finitura nera realistica.',
      en: 'Imperial gorilla statue with realistic black finish.',
    },
    dimensions: 'Env. 100 x 120 x 69 cm',
    weight: 'Env. 60 kg',
    materials: 'Résine haute résistance, détails réalistes',
    delay: 'Disponible sur commande, préparation 7 à 14 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer à l’eau claire, éviter les produits abrasifs',
    modelType: 'statue',
    modelHeightCm: 100,
    price: 2499,
    images: [
      '/images/gorille-imperial-6100-01.jpg',
      '/images/gorille-imperial-6100-01.jpg',
      '/images/gorille-imperial-6100-01.jpg',
      '/images/gorille-imperial-6100-01.jpg',
      '/images/gorille-imperial-6100-01.jpg',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}
