import type { Metadata } from 'next';
import { getDictionary, Locale } from '../../../../lib/translations';
import { getProductBySlug, products } from '../../../../lib/products';
import { productMetadata, productJsonLd, breadcrumbJsonLd } from '../../../../lib/seo';
import ProductView from './ProductView';

interface Props {
  params: { lang: Locale; slug: string };
}

/**
 * Server wrapper around the interactive product view. It exists so the page can
 * declare its own metadata and structured data, which a client component
 * ("use client") is not allowed to do.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Produit introuvable | Monumental Decor',
      robots: { index: false, follow: true },
    };
  }
  return productMetadata(product, params.lang);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  const dict = getDictionary(params.lang);

  const breadcrumb = product
    ? breadcrumbJsonLd(
        [
          { name: 'Monumental Decor', path: '' },
          { name: dict.nav.shop, path: 'shop' },
          { name: dict.categories[product.category], path: `shop/${product.category}` },
          { name: product.names[params.lang], path: `product/${product.slug}` },
        ],
        params.lang,
      )
    : null;

  return (
    <>
      {product && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product, params.lang)) }}
        />
      )}
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <ProductView params={params} />
    </>
  );
}
