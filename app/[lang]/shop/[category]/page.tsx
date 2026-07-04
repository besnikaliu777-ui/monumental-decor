import { getDictionary, Locale } from '../../../../lib/translations';
import { getProductsByCategory, Product } from '../../../../lib/products';
import ProductCard from '../../../../components/ProductCard';

interface Props {
  params: { lang: Locale; category: Product['category'] };
}

export default async function CategoryPage({ params }: Props) {
  const { lang: locale, category } = params;
  const dict = getDictionary(locale);
  const products = getProductsByCategory(category);

  return (
    <main className="bg-[#f6f0e6] py-16 text-[#17130f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-4xl font-semibold md:text-5xl">
          {dict.categories[category]}
        </h1>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </main>
  );
}
