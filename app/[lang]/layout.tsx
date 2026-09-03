import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Locale, LOCALE_LIST, isLocale } from '../../lib/translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { CartProvider } from '../../contexts/CartContext';
import { WishlistProvider } from '../../contexts/WishlistContext';
import '../globals.css';

interface Props {
  children: React.ReactNode;
  params: { lang: Locale };
}

/**
 * This is the root layout. It sits under [lang] rather than at the top of
 * app/ so that <html lang> can carry the language actually being served —
 * every page used to declare French, which mislabelled the German, Italian
 * and English versions for screen readers and for browser translation.
 *
 * Only metadataBase and a fallback title are declared here. Anything
 * page-specific (title, description, canonical, hreflang) belongs to the
 * pages themselves: metadata set on a layout is inherited unchanged by every
 * page below it, which would declare them all duplicates of one another.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.monumental-decor.ch'),
  title: 'Monumental Decor',
  // The monogram, square and at several sizes: this is the icon Google shows
  // beside the result on mobile, and the one browsers put on the tab.
  icons: {
    icon: [
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
};

export function generateStaticParams() {
  return LOCALE_LIST.map((lang) => ({ lang }));
}

// LocalBusiness rather than Organization: the workshop is a real place a
// customer can visit, and the postal address is what lets Google tie the site
// to the business listing and to searches made nearby.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Monumental Decor',
  url: 'https://www.monumental-decor.ch',
  logo: 'https://www.monumental-decor.ch/logo.png',
  image: 'https://www.monumental-decor.ch/og-image.png',
  email: 'info@monumental-decor.ch',
  telephone: '+41787763292',
  priceRange: 'CHF',
  address: {
    '@type': 'PostalAddress',
    postalCode: '1418',
    addressLocality: 'Vuarrens',
    addressRegion: 'VD',
    addressCountry: 'CH',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Suisse',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Monumental Decor',
  url: 'https://www.monumental-decor.ch',
};

const extensionErrorGuard = `
(() => {
  const isMetaMaskExtensionError = (value) => {
    const message = String(value?.message || value || '');
    const stack = String(value?.stack || '');
    const source = String(value?.filename || value?.sourceURL || value?.fileName || '');
    const combined = [message, stack, source].join(' ').toLowerCase();
    return (
      combined.includes('failed to connect to metamask') ||
      (combined.includes('metamask') && combined.includes('chrome-extension://')) ||
      combined.includes('chrome-extension://ejbalbakoplchlghecdalmeeeajnimhm/')
    );
  };

  window.addEventListener('error', (event) => {
    if (
      isMetaMaskExtensionError(event.error) ||
      isMetaMaskExtensionError(event.message) ||
      isMetaMaskExtensionError(event)
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    if (isMetaMaskExtensionError(event.reason)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
})();
`;

export default function RootLayout({ children, params }: Props) {
  const locale: Locale = isLocale(params.lang) ? params.lang : 'fr';

  return (
    <html lang={locale}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: extensionErrorGuard }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-[#f6f0e6] text-[#17130f] font-sans">
        <CartProvider>
          <WishlistProvider>
            <Suspense><Header locale={locale} /></Suspense>
            {children}
            <Suspense><Footer locale={locale} /></Suspense>
          </WishlistProvider>
        </CartProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
