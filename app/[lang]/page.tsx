import { getDictionary, Locale } from '../../lib/translations';
import { products } from '../../lib/products';
import Hero from '../../components/Hero';
import CategoryGrid from '../../components/CategoryGrid';
import ProductCard from '../../components/ProductCard';

interface Props {
  params: { lang: Locale };
}

// Home page. Displays hero section, categories and a few featured products.
export default async function Page({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);
  // Select first 4 products as featured
  const featured = products.slice(0, 4);
  return (
    <main>
      <Hero locale={locale} />
      {/* Categories grid */}
      <CategoryGrid locale={locale} />
      {/* Featured products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {dict.common.shopNow}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}