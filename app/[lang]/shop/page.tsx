import { getDictionary, Locale } from '../../../lib/translations';
import { products } from '../../../lib/products';
import CategoryGrid from '../../../components/CategoryGrid';
import ProductCard from '../../../components/ProductCard';
import Link from 'next/link';

interface Props {
  params: { lang: Locale };
}

// Shop page listing all categories and products. Users can click categories
// to drill down to a specific category page.
export default async function ShopPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {dict.nav.shop}
        </h1>
        <section className="mb-8 rounded bg-gray-950 p-5">
          <h2 className="text-lg font-semibold text-white">Filtres rapides</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href={`/${locale}/shop/animal`} className="rounded border border-yellow-500/40 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black">
              Animal
            </Link>
            <Link href={`/${locale}/shop/vaseResine`} className="rounded border border-yellow-500/40 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black">
              Vase résine
            </Link>
            <Link href={`/${locale}/shop/vaseBeton`} className="rounded border border-yellow-500/40 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black">
              Vase béton
            </Link>
            <span className="rounded bg-gray-900 px-4 py-2 text-gray-300">Livraison Suisse</span>
            <span className="rounded bg-gray-900 px-4 py-2 text-gray-300">299 CHF à 499 CHF</span>
            <span className="rounded bg-gray-900 px-4 py-2 text-gray-300">Conseil WhatsApp</span>
          </div>
        </section>
        {/* Category grid */}
        <CategoryGrid locale={locale} />
        {/* Product listing */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            {dict.common.shopNow}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
