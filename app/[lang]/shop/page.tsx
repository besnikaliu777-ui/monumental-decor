import { getDictionary, Locale } from '../../../lib/translations';
import { products } from '../../../lib/products';
import CategoryGrid from '../../../components/CategoryGrid';
import ProductCard from '../../../components/ProductCard';

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