import type { Metadata } from 'next';
import type { Locale } from './translations';
import type { Product } from './products';

export const SITE_URL = 'https://www.monumental-decor.ch';
export const LOCALES: Locale[] = ['fr', 'de', 'it', 'en'];
export const CONTACT_EMAIL = 'info@monumental-decor.ch';
export const CONTACT_PHONE = '+41787763292';

export function urlFor(lang: Locale, path: string): string {
  return path ? `${SITE_URL}/${lang}/${path}` : `${SITE_URL}/${lang}`;
}

interface BuildArgs {
  lang: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  frenchOnly?: boolean;
}

/**
 * Builds page metadata with a canonical URL and hreflang alternates that point
 * to the equivalent page in every language. Every page must call this, because
 * metadata defined in a layout would otherwise be inherited unchanged by all
 * of its children and declare them duplicates of one another.
 */
export function buildMetadata({
  lang,
  path,
  title,
  description,
  image = '/images/hero.png',
  noindex = false,
  frenchOnly = false,
}: BuildArgs): Metadata {
  const canonical = frenchOnly ? urlFor('fr', path) : urlFor(lang, path);

  const languages: Record<string, string> = {};
  if (!frenchOnly) {
    LOCALES.forEach((locale) => {
      languages[locale] = urlFor(locale, path);
    });
    languages['x-default'] = urlFor('fr', path);
  }

  return {
    title,
    description,
    alternates: frenchOnly ? { canonical } : { canonical, languages },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: lang,
      url: canonical,
      siteName: 'Monumental Decor',
      images: [{ url: image, width: 1200, height: 630, alt: 'Monumental Decor' }],
    },
  };
}

type Copy = Record<Locale, { title: string; description: string }>;

const PAGES: Record<string, Copy> = {
  home: {
    fr: {
      title: 'Monumental Decor | Statues et vases de jardin haut de gamme',
      description:
        "Statues, vases et fontaines décoratives fabriqués à la main pour jardins, villas, hôtels et espaces d'exception. Livraison dans toute la Suisse.",
    },
    de: {
      title: 'Monumental Decor | Gartenstatuen und Dekovasen',
      description:
        'Handgefertigte Statuen, Vasen und Brunnen für Gärten, Villen, Hotels und aussergewöhnliche Projekte. Lieferung in der ganzen Schweiz.',
    },
    it: {
      title: 'Monumental Decor | Statue e vasi da giardino di pregio',
      description:
        "Statue, vasi e fontane decorative realizzate a mano per giardini, ville, hotel e progetti d'eccezione. Consegna in tutta la Svizzera.",
    },
    en: {
      title: 'Monumental Decor | Luxury Garden Statues & Decor',
      description:
        'Handcrafted statues, vases and fountains for gardens, villas, hotels and exceptional spaces. Delivery throughout Switzerland.',
    },
  },
  shop: {
    fr: {
      title: 'Boutique : statues, vases et fontaines | Monumental Decor',
      description:
        'Découvrez la collection complète : lions, gorilles, paons, vases Médicis et fontaines décoratives. Pièces en résine haute résistance, sur commande.',
    },
    de: {
      title: 'Shop: Statuen, Vasen und Brunnen | Monumental Decor',
      description:
        'Entdecken Sie die gesamte Kollektion: Löwen, Gorillas, Pfauen, Medici-Vasen und Zierbrunnen. Hochfeste Kunstharz-Stücke auf Bestellung.',
    },
    it: {
      title: 'Shop: statue, vasi e fontane | Monumental Decor',
      description:
        "Scopri l'intera collezione: leoni, gorilla, pavoni, vasi Medici e fontane decorative. Pezzi in resina ad alta resistenza, su ordinazione.",
    },
    en: {
      title: 'Shop: Statues, Vases & Fountains | Monumental Decor',
      description:
        'Browse the full collection: lions, gorillas, peacocks, Medici vases and decorative fountains. High-resistance resin pieces, made to order.',
    },
  },
  about: {
    fr: {
      title: 'Notre histoire | Monumental Decor',
      description:
        'Monumental Decor crée des statues et objets décoratifs en résine fabriqués à la main, pour propriétaires exigeants, hôtels, restaurants et architectes.',
    },
    de: {
      title: 'Unsere Geschichte | Monumental Decor',
      description:
        'Monumental Decor fertigt handgemachte Statuen und Dekorationsobjekte aus Kunstharz für anspruchsvolle Eigentümer, Hotels, Restaurants und Architekten.',
    },
    it: {
      title: 'La nostra storia | Monumental Decor',
      description:
        'Monumental Decor realizza statue e oggetti decorativi in resina fatti a mano per proprietari esigenti, hotel, ristoranti e architetti.',
    },
    en: {
      title: 'Our Story | Monumental Decor',
      description:
        'Monumental Decor handcrafts resin statues and decorative objects for discerning homeowners, hotels, restaurants and architects.',
    },
  },
  contact: {
    fr: {
      title: 'Contact et demande de devis | Monumental Decor',
      description:
        'Une question ou un projet ? Contactez Monumental Decor par WhatsApp ou par email pour un devis personnalisé sur nos statues et vases décoratifs.',
    },
    de: {
      title: 'Kontakt und Offerte | Monumental Decor',
      description:
        'Eine Frage oder ein Projekt? Kontaktieren Sie Monumental Decor per WhatsApp oder E-Mail für eine persönliche Offerte zu Statuen und Dekovasen.',
    },
    it: {
      title: 'Contatto e preventivo | Monumental Decor',
      description:
        'Una domanda o un progetto? Contatta Monumental Decor via WhatsApp o email per un preventivo personalizzato su statue e vasi decorativi.',
    },
    en: {
      title: 'Contact & Quote Request | Monumental Decor',
      description:
        'A question or a project? Contact Monumental Decor by WhatsApp or email for a personalised quote on our decorative statues and vases.',
    },
  },
  blog: {
    fr: {
      title: 'Conseils : choisir et entretenir une statue | Monumental Decor',
      description:
        'Comment choisir une statue selon le recul et l’exposition, résine ou béton, et comment entretenir une pièce décorative extérieure sans l’abîmer.',
    },
    de: {
      title: 'Ratgeber: Gartenstatuen wählen und pflegen | Monumental Decor',
      description:
        'Wie Sie eine Statue nach Abstand und Lage wählen, Kunstharz oder Beton, und wie Sie ein dekoratives Aussenstück pflegen, ohne es zu beschädigen.',
    },
    it: {
      title: 'Consigli: scegliere e curare una statua | Monumental Decor',
      description:
        'Come scegliere una statua secondo distanza ed esposizione, resina o cemento, e come curare un pezzo decorativo da esterno senza rovinarlo.',
    },
    en: {
      title: 'Advice: Choosing and Caring for a Statue | Monumental Decor',
      description:
        'How to choose a statue for viewing distance and exposure, resin or concrete, and how to care for a decorative outdoor piece without damaging it.',
    },
  },
  realizations: {
    fr: {
      title: 'Réalisations : avant / après | Monumental Decor',
      description:
        'Découvrez nos projets réalisés et les transformations avant/après dans des jardins, villas, terrasses et espaces professionnels.',
    },
    de: {
      title: 'Referenzen: vorher / nachher | Monumental Decor',
      description:
        'Entdecken Sie unsere realisierten Projekte und die Vorher-Nachher-Verwandlungen in Gärten, Villen, Terrassen und Geschäftsräumen.',
    },
    it: {
      title: 'Realizzazioni: prima / dopo | Monumental Decor',
      description:
        'Scopri i nostri progetti realizzati e le trasformazioni prima/dopo in giardini, ville, terrazze e spazi professionali.',
    },
    en: {
      title: 'Projects: Before & After | Monumental Decor',
      description:
        'Discover our completed projects and before/after transformations in gardens, villas, terraces and professional spaces.',
    },
  },
};

const CATEGORIES: Record<Product['category'], Copy> = {
  animal: {
    fr: {
      title: "Statues d'animaux : lions, gorilles, paons | Monumental Decor",
      description:
        'Lions, gorilles, aigles, chevaux et paons décoratifs en résine haute résistance. Pièces monumentales pour jardin, villa, hôtel ou entrée paysagère.',
    },
    de: {
      title: 'Tierstatuen: Löwen, Gorillas, Pfauen | Monumental Decor',
      description:
        'Dekorative Löwen, Gorillas, Adler, Pferde und Pfauen aus hochfestem Kunstharz. Monumentale Stücke für Garten, Villa, Hotel oder Eingangsbereich.',
    },
    it: {
      title: 'Statue di animali: leoni, gorilla, pavoni | Monumental Decor',
      description:
        'Leoni, gorilla, aquile, cavalli e pavoni decorativi in resina ad alta resistenza. Pezzi monumentali per giardino, villa, hotel o ingresso.',
    },
    en: {
      title: 'Animal Statues: Lions, Gorillas, Peacocks | Monumental Decor',
      description:
        'Decorative lions, gorillas, eagles, horses and peacocks in high-resistance resin. Monumental pieces for gardens, villas, hotels and entrances.',
    },
  },
  vaseResine: {
    fr: {
      title: 'Vases décoratifs en résine | Monumental Decor',
      description:
        'Vases Médicis, vases aux anges et grands vases effet pierre en résine haute résistance. Pour entrée, salon, terrasse ou jardin.',
    },
    de: {
      title: 'Dekovasen aus Kunstharz | Monumental Decor',
      description:
        'Medici-Vasen, Engelvasen und grosse Vasen in Steinoptik aus hochfestem Kunstharz. Für Eingang, Wohnraum, Terrasse oder Garten.',
    },
    it: {
      title: 'Vasi decorativi in resina | Monumental Decor',
      description:
        'Vasi Medici, vasi con angeli e grandi vasi effetto pietra in resina ad alta resistenza. Per ingresso, salotto, terrazza o giardino.',
    },
    en: {
      title: 'Decorative Resin Vases | Monumental Decor',
      description:
        'Medici vases, angel vases and large stone-effect vases in high-resistance resin. For entrances, living rooms, terraces and gardens.',
    },
  },
  vaseBeton: {
    fr: {
      title: 'Vases et pots décoratifs en béton | Monumental Decor',
      description:
        'Vases et pots en béton à la présence minérale et stable, pensés pour les extérieurs, les terrasses et les projets paysagers exigeants.',
    },
    de: {
      title: 'Dekovasen und Töpfe aus Beton | Monumental Decor',
      description:
        'Vasen und Töpfe aus Beton mit mineralischer, stabiler Präsenz, konzipiert für Aussenbereiche, Terrassen und anspruchsvolle Gartenprojekte.',
    },
    it: {
      title: 'Vasi decorativi in cemento | Monumental Decor',
      description:
        'Vasi e fioriere in cemento dalla presenza minerale e stabile, pensati per esterni, terrazze e progetti paesaggistici esigenti.',
    },
    en: {
      title: 'Decorative Concrete Vases & Pots | Monumental Decor',
      description:
        'Concrete vases and pots with a stable, mineral presence, designed for outdoor spaces, terraces and demanding landscape projects.',
    },
  },
  fontaine: {
    fr: {
      title: 'Fontaines décoratives de jardin | Monumental Decor',
      description:
        "Fontaines décoratives avec statue et bassin sculpté, finition pierre claire. Pièces monumentales pour hall, villa, jardin d'hiver ou terrasse.",
    },
    de: {
      title: 'Dekorative Gartenbrunnen | Monumental Decor',
      description:
        'Zierbrunnen mit Statue und skulptiertem Becken in heller Steinoptik. Monumentale Stücke für Halle, Villa, Wintergarten oder Terrasse.',
    },
    it: {
      title: 'Fontane decorative da giardino | Monumental Decor',
      description:
        "Fontane decorative con statua e vasca scolpita, finitura pietra chiara. Pezzi monumentali per hall, villa, giardino d'inverno o terrazza.",
    },
    en: {
      title: 'Decorative Garden Fountains | Monumental Decor',
      description:
        'Decorative fountains with statue and sculpted basin in a light stone finish. Monumental pieces for halls, villas, conservatories and terraces.',
    },
  },
};

/** Pages whose content exists in French only. */
const FRENCH_ONLY: Record<string, { title: string; description: string }> = {
  b2b: {
    title: 'Hôtels, restaurants et architectes | Monumental Decor',
    description:
      "Monumental Decor accompagne les projets professionnels : entrées d'hôtel, terrasses, lobbies, restaurants et projets paysagers. Conseil et devis sur mesure.",
  },
  'savoir-faire': {
    title: 'Notre savoir-faire | Monumental Decor',
    description:
      "Sélection, préparation, conseil de pose et accompagnement : la méthode Monumental Decor pour réussir une pièce décorative d'extérieur.",
  },
};

export function pageMetadata(key: keyof typeof PAGES, lang: Locale, path: string): Metadata {
  const copy = PAGES[key][lang];
  return buildMetadata({ lang, path, title: copy.title, description: copy.description });
}

export function categoryMetadata(category: Product['category'], lang: Locale): Metadata {
  const copy = CATEGORIES[category]?.[lang] ?? PAGES.shop[lang];
  return buildMetadata({
    lang,
    path: `shop/${category}`,
    title: copy.title,
    description: copy.description,
  });
}

/**
 * French-only pages keep a single canonical on the /fr version and are left out
 * of the index in the other languages, so that Google is never offered four
 * copies of the same French text.
 */
export function frenchOnlyMetadata(key: keyof typeof FRENCH_ONLY, lang: Locale): Metadata {
  const copy = FRENCH_ONLY[key];
  return buildMetadata({
    lang,
    path: key,
    title: copy.title,
    description: copy.description,
    frenchOnly: true,
    noindex: lang !== 'fr',
  });
}

export function productMetadata(product: Product, lang: Locale): Metadata {
  const name = product.names[lang];
  const description = product.descriptions[lang];
  return buildMetadata({
    lang,
    path: `product/${product.slug}`,
    title: `${name} | Monumental Decor`,
    description: description.length > 158 ? `${description.slice(0, 155)}...` : description,
    image: product.images[0],
  });
}

/** Product structured data so Google can show price and availability directly. */
export function productJsonLd(product: Product, lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.names[lang],
    description: product.descriptions[lang],
    image: product.images
      .filter((src, index, all) => all.indexOf(src) === index)
      .map((src) => `${SITE_URL}${src}`),
    sku: product.slug,
    material: product.materials,
    height: {
      '@type': 'QuantitativeValue',
      value: product.modelHeightCm,
      unitCode: 'CMT',
    },
    brand: {
      '@type': 'Brand',
      name: 'Monumental Decor',
    },
    offers: {
      '@type': 'Offer',
      url: urlFor(lang, `product/${product.slug}`),
      priceCurrency: 'CHF',
      price: product.price,
      availability: 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Monumental Decor',
      },
    },
  };
}

/** Breadcrumbs help Google display the site hierarchy under the result title. */
export function breadcrumbJsonLd(items: { name: string; path: string }[], lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: urlFor(lang, item.path),
    })),
  };
}
