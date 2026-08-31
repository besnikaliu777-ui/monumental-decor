import { Suspense } from 'react';
import { Locale } from '../../lib/translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CartProvider } from '../../contexts/CartContext';
import { WishlistProvider } from '../../contexts/WishlistContext';

interface Props {
  children: React.ReactNode;
  params: { lang: Locale };
}

/**
 * No metadata is declared here on purpose. Metadata set on a layout is
 * inherited by every page below it, so a canonical URL or a title defined at
 * this level would tell Google that all pages of a language are the same
 * document. Each page defines its own metadata through lib/seo.ts instead.
 */
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
