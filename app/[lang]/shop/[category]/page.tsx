import { getDictionary, Locale } from '../../../../lib/translations';
import { getProductsByCategory, Product } from '../../../../lib/products';
import ProductCard from '../../../../components/ProductCard';

interface Props {
  params: { lang: Locale; category: Product['category'] };
}

// Category page listing products of a specific category.
export default async function CategoryPage({ params }: Props) {
  const { lang: locale, category } = params;
  const dict = getDictionary(locale);
  const products = getProductsByCategory(category);
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {dict.categories[category]}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </main>
  );
}