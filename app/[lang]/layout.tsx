import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Locale, getDictionary } from '../../lib/translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CartProvider } from '../../contexts/CartContext';
import { WishlistProvider } from '../../contexts/WishlistContext';

const SITE_URL = 'https://www.monumental-decor.ch';

interface Props {
  children: React.ReactNode;
  params: { lang: Locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = getDictionary(params.lang);
  return {
    title: `Monumental Decor – ${dict.hero.title}`,
    description: dict.hero.subtitle,
    alternates: {
      canonical: `${SITE_URL}/${params.lang}`,
      languages: {
        fr: `${SITE_URL}/fr`,
        de: `${SITE_URL}/de`,
        it: `${SITE_URL}/it`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/fr`,
      },
    },
    openGraph: {
      title: `Monumental Decor – ${dict.hero.title}`,
      description: dict.hero.subtitle,
      type: 'website',
      locale: params.lang,
      url: `${SITE_URL}/${params.lang}`,
      images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Monumental Decor hero' }],
      siteName: 'Monumental Decor',
    },
  };
}

export default function Layout({ children, params }: Props) {
  const locale = params.lang;
  return (
    <CartProvider>
      <WishlistProvider>
        <Suspense><Header locale={locale} /></Suspense>
        {children}
        <Suspense><Footer locale={locale} /></Suspense>
      </WishlistProvider>
    </CartProvider>
  );
}
