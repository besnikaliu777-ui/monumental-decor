import type { Locale } from './translations';

export interface Product {
  slug: string;
  category: 'animal' | 'vaseResine' | 'vaseBeton';
  names: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  dimensions: string;
  weight: string;
  materials: string;
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
      fr: 'Vase décoratif en résine avec anges, roses et ornements baroques.',
      de: 'Dekorative Harzvase mit Engeln, Rosen und barocken Ornamenten.',
      it: 'Vaso decorativo in resina con angeli, rose e ornamenti barocchi.',
      en: 'Decorative resin vase with angels, roses and baroque ornaments.',
    },
    dimensions: 'À définir',
    weight: 'À définir',
    materials: 'Résine brute à peindre',
    price: 299,
    images: [
      '/images/vase-anges-1.jpg',
      '/images/vase-anges-2.jpg',
      '/images/vase-anges-3.jpg',
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
      fr: 'Statue décorative de dame avec amphore, finition vert antique.',
      de: 'Dekorative Damenstatue mit Amphore in antikgrüner Optik.',
      it: 'Statua decorativa di dama con anfora, finitura verde anticato.',
      en: 'Decorative lady statue with amphora and antique green finish.',
    },
    dimensions: 'À définir',
    weight: 'À définir',
    materials: 'Béton finition vert antique',
    price: 499,
    images: [
      '/images/dame-amphore-1.jpg',
      '/images/dame-amphore-2.jpg',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}
