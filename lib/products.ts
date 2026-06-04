// Data model for products. Each product contains translations for multiple
// languages. This structure makes it easy to expand the catalogue by
// adding new entries. Real projects should pull this from a CMS or
// database. For demonstration we define a few sample products.

import type { Locale } from './translations';

export interface Product {
  slug: string;
  category: 'lions' | 'gorillas' | 'eagles' | 'horses' | 'vases' | 'pots' | 'modern' | 'classical';
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
    slug: 'lion-majestic',
    category: 'lions',
    names: {
      fr: 'Lion majestueux',
      de: 'Majestätischer Löwe',
      it: 'Leone maestoso',
      en: 'Majestic Lion',
    },
    descriptions: {
      fr: 'Sculpture de lion en résine dorée, symbole de force et d’élégance.',
      de: 'Goldene Löwenskulptur aus Harz, Symbol für Stärke und Eleganz.',
      it: 'Scultura di leone in resina dorata, simbolo di forza ed eleganza.',
      en: 'Golden resin lion sculpture, symbol of strength and elegance.',
    },
    dimensions: '80 × 50 × 40 cm',
    weight: '12 kg',
    materials: 'Résine premium et finitions dorées',
    price: 1200,
    images: ['/images/lion.png'],
  },
  {
    slug: 'gorilla-guardian',
    category: 'gorillas',
    names: {
      fr: 'Gorille gardien',
      de: 'Gorilla Wächter',
      it: 'Gorilla guardiano',
      en: 'Guardian Gorilla',
    },
    descriptions: {
      fr: 'Un gorille imposant en résine noire pour sublimer votre jardin.',
      de: 'Ein imposanter Gorilla aus schwarzem Harz als Blickfang für Ihren Garten.',
      it: 'Un imponente gorilla in resina nera per valorizzare il tuo giardino.',
      en: 'An imposing black resin gorilla to elevate your garden.',
    },
    dimensions: '100 × 60 × 60 cm',
    weight: '18 kg',
    materials: 'Résine noire haute densité',
    price: 1500,
    images: ['/images/gorilla.png'],
  },
  {
    slug: 'eagle-soaring',
    category: 'eagles',
    names: {
      fr: 'Aigle impérial',
      de: 'Kaiseradler',
      it: 'Aquila imperiale',
      en: 'Imperial Eagle',
    },
    descriptions: {
      fr: 'Aigle aux ailes déployées, capture la puissance du vol.',
      de: 'Adler mit ausgebreiteten Flügeln, der die Kraft des Flugs einfängt.',
      it: 'Aquila con ali spiegate che cattura la potenza del volo.',
      en: 'Eagle with outstretched wings capturing the power of flight.',
    },
    dimensions: '70 × 40 × 35 cm',
    weight: '9 kg',
    materials: 'Résine blanche et accents dorés',
    price: 950,
    images: ['/images/eagle.png'],
  },
  {
    slug: 'horse-dynamic',
    category: 'horses',
    names: {
      fr: 'Cheval dynamique',
      de: 'Dynamisches Pferd',
      it: 'Cavallo dinamico',
      en: 'Dynamic Horse',
    },
    descriptions: {
      fr: 'Statue de cheval en mouvement, parfaite pour les espaces modernes.',
      de: 'Statue eines sich bewegenden Pferdes, ideal für moderne Räume.',
      it: 'Statua di cavallo in movimento, perfetta per spazi moderni.',
      en: 'Moving horse statue perfect for modern spaces.',
    },
    dimensions: '90 × 55 × 40 cm',
    weight: '14 kg',
    materials: 'Résine grise et finition mate',
    price: 1100,
    images: ['/images/horse.png'],
  },
  {
    slug: 'vase-elegant',
    category: 'vases',
    names: {
      fr: 'Vase élégant',
      de: 'Elegante Vase',
      it: 'Vaso elegante',
      en: 'Elegant Vase',
    },
    descriptions: {
      fr: 'Vase en résine marbrée, idéal pour les compositions florales.',
      de: 'Marmorierte Harzvase, ideal für Blumenarrangements.',
      it: 'Vaso in resina marmorizzata, ideale per composizioni floreali.',
      en: 'Marbled resin vase ideal for floral arrangements.',
    },
    dimensions: '50 × 30 × 30 cm',
    weight: '6 kg',
    materials: 'Résine marbrée',
    price: 450,
    images: ['/images/vase.png'],
  },
  {
    slug: 'vase-anges-baroque',
    category: 'vases',
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
    slug: 'pot-geometric',
    category: 'pots',
    names: {
      fr: 'Pot géométrique',
      de: 'Geometrischer Topf',
      it: 'Vaso geometrico',
      en: 'Geometric Pot',
    },
    descriptions: {
      fr: 'Pot décoratif aux formes géométriques modernes.',
      de: 'Dekorativer Topf mit modernen geometrischen Formen.',
      it: 'Vaso decorativo dalle forme geometriche moderne.',
      en: 'Decorative pot with modern geometric shapes.',
    },
    dimensions: '60 × 40 × 40 cm',
    weight: '7 kg',
    materials: 'Résine anthracite',
    price: 500,
    images: ['/images/pot.png'],
  },
  {
    slug: 'statue-modern-abstract',
    category: 'modern',
    names: {
      fr: 'Statue abstraite moderne',
      de: 'Moderne abstrakte Statue',
      it: 'Statua moderna astratta',
      en: 'Modern Abstract Statue',
    },
    descriptions: {
      fr: 'Une œuvre d’art contemporaine en résine noire et or.',
      de: 'Ein zeitgenössisches Kunstwerk aus schwarzem und goldenem Harz.',
      it: "Un'opera d'arte contemporanea in resina nera e oro.",
      en: 'Contemporary art piece in black and gold resin.',
    },
    dimensions: '120 × 40 × 40 cm',
    weight: '20 kg',
    materials: 'Résine noire et dorée',
    price: 2000,
    images: ['/images/modern.png'],
  },
  {
    slug: 'statue-classical-venus',
    category: 'classical',
    names: {
      fr: 'Statue classique Vénus',
      de: 'Klassische Venusstatue',
      it: 'Statua classica Venere',
      en: 'Classical Venus Statue',
    },
    descriptions: {
      fr: 'Réplique moderne de la Vénus classique en résine blanche.',
      de: 'Moderne Replik der klassischen Venus aus weißem Harz.',
      it: 'Replica moderna della Venere classica in resina bianca.',
      en: 'Modern replica of the classic Venus in white resin.',
    },
    dimensions: '130 × 45 × 40 cm',
    weight: '22 kg',
    materials: 'Résine blanche polie',
    price: 1800,
    images: ['/images/classical.png'],
  },
  {
    slug: 'dame-amphore',
    category: 'classical',
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
    materials: 'Resine finition vert antique',
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
