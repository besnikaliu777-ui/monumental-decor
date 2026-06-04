import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Locale, getDictionary } from '../../lib/translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CartProvider } from '../../contexts/CartContext';
import { WishlistProvider } from '../../contexts/WishlistContext';

interface Props {
  children: React.ReactNode;
  params: { lang: Locale };
}

// Generate metadata for each page. Title and description vary based on locale.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = getDictionary(params.lang);
  return {
    title: `Monumental Decor – ${dict.hero.title}`,
    description: dict.hero.subtitle,
    openGraph: {
      title: `Monumental Decor – ${dict.hero.title}`,
      description: dict.hero.subtitle,
      type: 'website',
      locale: params.lang,
      url: `https://monumental-decor.vercel.app/${params.lang}`,
      images: [
        {
          url: '/images/hero.png',
          width: 1200,
          height: 630,
          alt: 'Monumental Decor hero',
        },
      ],
      siteName: 'Monumental Decor',
    },
  };
}

export default function Layout({ children, params }: Props) {
  const locale = params.lang;
  return (
    <CartProvider>
      <WishlistProvider>
        {/* Header needs to be rendered on every page */}
        {/* Suspense fallback to avoid hydration issues with async Server Components */}
        <Suspense>
          <Header locale={locale} />
        </Suspense>
        {children}
        <Suspense>
          <Footer locale={locale} />
        </Suspense>
      </WishlistProvider>
    </CartProvider>
  );
}
