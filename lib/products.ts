import type { Locale } from './translations';

export interface Product {
  slug: string;
  category: 'animal' | 'vaseResine' | 'vaseBeton';
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
  images: string[];
}

export const products: Product[] = [
  {
    slug: 'vase-anges-baroque',
    category: 'vaseResine',
    names: {
      fr: 'Vase baroque aux anges',
      de: 'Barockvase mit Engeln',
      it: 'Vaso barocco con angeli',
      en: 'Baroque Angel Vase',
    },
    descriptions: {
      fr: 'Vase décoratif en résine avec anges, roses et ornements baroques. Pièce artisanale pensée pour une entrée, une terrasse couverte, un jardin d’hiver ou un espace d’accueil élégant.',
      de: 'Dekorative Harzvase mit Engeln, Rosen und barocken Ornamenten.',
      it: 'Vaso decorativo in resina con angeli, rose e ornamenti barocchi.',
      en: 'Decorative resin vase with angels, roses and baroque ornaments.',
    },
    dimensions: 'Env. 75 x 45 x 40 cm',
    weight: 'Env. 12 kg',
    materials: 'Résine brute à peindre',
    delay: 'Disponible sur demande, préparation 3 à 7 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer avec un chiffon doux, éviter les produits abrasifs',
    modelType: 'vase',
    modelHeightCm: 75,
    price: 299,
    images: [
      '/images/vase-anges-1.jpg',
      '/images/vase-anges-2.jpg',
      '/images/vase-anges-3.jpg',
      '/images/vase-anges-1.jpg',
      '/images/vase-anges-2.jpg',
    ],
  },
  {
    slug: 'dame-amphore',
    category: 'vaseBeton',
    names: {
      fr: "Dame à l'amphore",
      de: 'Dame mit Amphore',
      it: 'Dama con anfora',
      en: 'Lady with Amphora',
    },
    descriptions: {
      fr: 'Statue décorative de dame avec amphore, finition vert antique. Une pièce forte pour donner du caractère à une allée, une terrasse, une cour ou un jardin.',
      de: 'Dekorative Damenstatue mit Amphore in antikgrüner Optik.',
      it: 'Statua decorativa di dama con anfora, finitura verde anticato.',
      en: 'Decorative lady statue with amphora and antique green finish.',
    },
    dimensions: 'Env. 115 x 38 x 35 cm',
    weight: 'Env. 28 kg',
    materials: 'Béton finition vert antique',
    delay: 'Disponible sur demande, préparation 3 à 7 jours',
    delivery: 'Livraison possible dans toute la Suisse',
    warranty: 'Contrôle qualité avant départ atelier',
    care: 'Nettoyer à l’eau claire, protéger du gel extrême si possible',
    modelType: 'statue',
    modelHeightCm: 115,
    price: 499,
    images: [
      '/images/dame-amphore-1.jpg',
      '/images/dame-amphore-2.jpg',
      '/images/dame-amphore-1.jpg',
      '/images/dame-amphore-2.jpg',
      '/images/dame-amphore-1.jpg',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}
