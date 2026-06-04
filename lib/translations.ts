// Translations dictionary for all supported languages.
// Each entry contains the strings used across the site.

export type Locale = 'fr' | 'de' | 'it' | 'en';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    shop: string;
    realizations: string;
    contact: string;
    cart: string;
    wishlist: string;
    checkout: string;
  };
  hero: {
    title: string;
    subtitle: string;
    buyNow: string;
    quote: string;
  };
  categories: {
    animal: string;
    vaseResine: string;
    vaseBeton: string;
  };
  common: {
    addToCart: string;
    addToWishlist: string;
    dimensions: string;
    weight: string;
    materials: string;
    similarProducts: string;
    price: string;
    description: string;
    requestQuote: string;
    back: string;
    proceedToCheckout: string;
    total: string;
    remove: string;
    emptyCart: string;
    emptyWishlist: string;
    ourStory: string;
    shopNow: string;
    seeMore: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  realizations: {
    title: string;
    subtitle: string;
  };
}

export const translations: Record<Locale, Dictionary> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Notre histoire',
      shop: 'Boutique',
      realizations: 'Réalisations',
      contact: 'Contact',
      cart: 'Panier',
      wishlist: 'Favoris',
      checkout: 'Paiement',
    },
    hero: {
      title: "Des créations artisanales qui subliment les espaces d'exception",
      subtitle: 'Chaque pièce est fabriquée à la main pour transformer jardins, villas, hôtels et espaces prestigieux.',
      buyNow: 'Découvrir la collection',
      quote: 'Demander un devis',
    },
    categories: {
      animal: 'Animal',
      vaseResine: 'Vase résine',
      vaseBeton: 'Vase béton',
    },
    common: {
      addToCart: 'Ajouter au panier',
      addToWishlist: 'Ajouter aux favoris',
      dimensions: 'Dimensions',
      weight: 'Poids',
      materials: 'Matériaux',
      similarProducts: 'Produits similaires',
      price: 'Prix',
      description: 'Description',
      requestQuote: 'Demander un devis',
      back: 'Retour',
      proceedToCheckout: 'Passer au paiement',
      total: 'Total',
      remove: 'Supprimer',
      emptyCart: 'Votre panier est vide',
      emptyWishlist: 'Aucun favori enregistré',
      ourStory: 'Notre histoire',
      shopNow: 'Voir la boutique',
      seeMore: 'En savoir plus',
    },
    contact: {
      title: 'Contactez-nous',
      description: "Pour toute question ou demande de devis, n'hésitez pas à nous contacter.",
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      message: 'Message',
      submit: 'Envoyer',
    },
    about: {
      title: 'Notre histoire',
      paragraphs: [
        "Monumental Decor est une entreprise artisanale spécialisée dans la création de statues et objets décoratifs en résine. Chaque pièce est fabriquée à la main avec une attention méticuleuse aux détails.",
        "Nos artisans utilisent des résines de haute qualité et travaillent chaque sculpture comme une oeuvre d'art unique, inspirée par l'architecture moderne et la tradition classique.",
        'Nous nous adressons aux propriétaires exigeants, hôtels, restaurants, architectes et particuliers recherchant des pièces singulières pour sublimer leurs espaces.',
      ],
    },
    realizations: {
      title: 'Réalisations',
      subtitle: 'Découvrez nos projets et transformations avant/après',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Unsere Geschichte',
      shop: 'Shop',
      realizations: 'Projekte',
      contact: 'Kontakt',
      cart: 'Warenkorb',
      wishlist: 'Favoriten',
      checkout: 'Kasse',
    },
    hero: {
      title: 'Handgefertigte Kreationen, die Ihre Räume verwandeln',
      subtitle: 'Hochwertige Statuen, Skulpturen und Dekorationen aus Harz',
      buyNow: 'Jetzt kaufen',
      quote: 'Angebot anfordern',
    },
    categories: {
      animal: 'Tier',
      vaseResine: 'Harzvase',
      vaseBeton: 'Betonvase',
    },
    common: {
      addToCart: 'In den Warenkorb',
      addToWishlist: 'Zu Favoriten hinzufügen',
      dimensions: 'Maße',
      weight: 'Gewicht',
      materials: 'Materialien',
      similarProducts: 'Ähnliche Produkte',
      price: 'Preis',
      description: 'Beschreibung',
      requestQuote: 'Angebot anfordern',
      back: 'Zurück',
      proceedToCheckout: 'Zur Kasse',
      total: 'Gesamt',
      remove: 'Entfernen',
      emptyCart: 'Ihr Warenkorb ist leer',
      emptyWishlist: 'Keine Favoriten gespeichert',
      ourStory: 'Unsere Geschichte',
      shopNow: 'Zum Shop',
      seeMore: 'Mehr erfahren',
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      description: 'Für Fragen oder ein Angebot stehen wir Ihnen gerne zur Verfügung.',
      name: 'Name',
      email: 'Email',
      phone: 'Telefon',
      message: 'Nachricht',
      submit: 'Senden',
    },
    about: {
      title: 'Unsere Geschichte',
      paragraphs: [
        'Monumental Decor ist ein Handwerksbetrieb, der sich auf die Herstellung von Statuen und dekorativen Objekten aus hochwertigem Harz spezialisiert hat. Jede Figur wird von Hand mit viel Liebe zum Detail gefertigt.',
        'Unsere Kunsthandwerker verwenden hochwertige Harze und behandeln jede Skulptur als einzigartiges Kunstwerk, inspiriert von moderner Architektur und klassischer Tradition.',
        'Wir sprechen anspruchsvolle Villenbesitzer, Hotels, Restaurants, Architekten und Privatkunden an, die einzigartige Stücke zur Verschönerung ihrer Räume suchen.',
      ],
    },
    realizations: {
      title: 'Projekte',
      subtitle: 'Entdecken Sie unsere Vorher/Nachher-Projekte',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'La nostra storia',
      shop: 'Negozio',
      realizations: 'Realizzazioni',
      contact: 'Contatti',
      cart: 'Carrello',
      wishlist: 'Preferiti',
      checkout: 'Pagamento',
    },
    hero: {
      title: 'Creazioni artigianali che trasformano i tuoi spazi',
      subtitle: 'Statue, sculture e decorazioni in resina di alta qualità',
      buyNow: 'Acquista ora',
      quote: 'Richiedi un preventivo',
    },
    categories: {
      animal: 'Animale',
      vaseResine: 'Vaso in resina',
      vaseBeton: 'Vaso in cemento',
    },
    common: {
      addToCart: 'Aggiungi al carrello',
      addToWishlist: 'Aggiungi ai preferiti',
      dimensions: 'Dimensioni',
      weight: 'Peso',
      materials: 'Materiali',
      similarProducts: 'Prodotti simili',
      price: 'Prezzo',
      description: 'Descrizione',
      requestQuote: 'Richiedi un preventivo',
      back: 'Indietro',
      proceedToCheckout: 'Procedi al pagamento',
      total: 'Totale',
      remove: 'Rimuovi',
      emptyCart: 'Il tuo carrello è vuoto',
      emptyWishlist: 'Nessun preferito',
      ourStory: 'La nostra storia',
      shopNow: 'Vai al negozio',
      seeMore: 'Scopri di più',
    },
    contact: {
      title: 'Contattaci',
      description: 'Per domande o richieste di preventivo non esitare a contattarci.',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefono',
      message: 'Messaggio',
      submit: 'Invia',
    },
    about: {
      title: 'La nostra storia',
      paragraphs: [
        "Monumental Decor è un'azienda artigianale specializzata nella creazione di statue e oggetti decorativi in resina di alta qualità. Ogni pezzo è realizzato a mano con meticolosa attenzione ai dettagli.",
        "I nostri artigiani utilizzano resine pregiate e trattano ogni scultura come un'opera d'arte unica, ispirata all'architettura moderna e alla tradizione classica.",
        'Ci rivolgiamo a proprietari esigenti di ville, hotel, ristoranti, architetti e privati che cercano pezzi unici per valorizzare i loro spazi.',
      ],
    },
    realizations: {
      title: 'Realizzazioni',
      subtitle: 'Scopri i nostri progetti prima/dopo',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Our Story',
      shop: 'Shop',
      realizations: 'Realizations',
      contact: 'Contact',
      cart: 'Cart',
      wishlist: 'Wishlist',
      checkout: 'Checkout',
    },
    hero: {
      title: 'Handcrafted creations that transform your spaces',
      subtitle: 'High-end resin statues, sculptures and decor',
      buyNow: 'Buy now',
      quote: 'Request a quote',
    },
    categories: {
      animal: 'Animal',
      vaseResine: 'Resin vase',
      vaseBeton: 'Concrete vase',
    },
    common: {
      addToCart: 'Add to cart',
      addToWishlist: 'Add to wishlist',
      dimensions: 'Dimensions',
      weight: 'Weight',
      materials: 'Materials',
      similarProducts: 'Similar products',
      price: 'Price',
      description: 'Description',
      requestQuote: 'Request a quote',
      back: 'Back',
      proceedToCheckout: 'Proceed to checkout',
      total: 'Total',
      remove: 'Remove',
      emptyCart: 'Your cart is empty',
      emptyWishlist: 'No favourites saved',
      ourStory: 'Our story',
      shopNow: 'Shop now',
      seeMore: 'Learn more',
    },
    contact: {
      title: 'Contact us',
      description: 'If you have any questions or quote requests, please reach out.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
    },
    about: {
      title: 'Our story',
      paragraphs: [
        'Monumental Decor is an artisanal company specialising in the creation of statues and decorative resin objects. Each piece is handcrafted with meticulous attention to detail.',
        'Our artisans use high-quality resins and treat each sculpture as a unique work of art, inspired by modern architecture and classical tradition.',
        'We cater to discerning villa owners, hotels, restaurants, architects and individuals seeking unique pieces to enhance their spaces.',
      ],
    },
    realizations: {
      title: 'Realizations',
      subtitle: 'Discover our before/after projects',
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale] ?? translations.en;
}
