// Data model for products. Each product contains translations for multiple
// languages. This structure makes it easy to expand the catalogue by
// adding new entries. Real projects should pull this from a CMS or
// database. For demonstration we define a few sample products.

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
      fr: 'Vase decoratif en resine avec anges, roses et ornements baroques.',
      de: 'Dekorative Harzvase mit Engeln, Rosen und barocken Ornamenten.',
      it: 'Vaso decorativo in resina con angeli, rose e ornamenti barocchi.',
      en: 'Decorative resin vase with angels, roses and baroque ornaments.',
    },
    dimensions: 'A definir',
    weight: 'A definir',
    materials: 'Resine brute a peindre',
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
      fr: "Dame a l'amphore",
      de: 'Dame mit Amphore',
      it: 'Dama con anfora',
      en: 'Lady with Amphora',
    },
    descriptions: {
      fr: "Statue decorative de dame avec amphore, finition vert antique.",
      de: 'Dekorative Damenstatue mit Amphore in antikgruner Optik.',
      it: 'Statua decorativa di dama con anfora, finitura verde anticato.',
      en: 'Decorative lady statue with amphora and antique green finish.',
    },
    dimensions: 'A definir',
    weight: 'A definir',
    materials: 'Beton finition vert antique',
    price: 499,
    images: [
      '/images/dame-amphore-1.jpg',
      '/images/dame-amphore-2.jpg',
    ],
  },
];
// Utility to fetch a product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Get all products in a given category
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}
