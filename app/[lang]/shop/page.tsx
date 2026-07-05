import Link from 'next/link';
import { getDictionary, Locale } from '../../../lib/translations';
import { products } from '../../../lib/products';
import CategoryGrid from '../../../components/CategoryGrid';
import ProductCard from '../../../components/ProductCard';

interface Props {
  params: { lang: Locale };
}

export default async function ShopPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);

  return (
    <main className="bg-[#f6f0e6] py-16 text-[#17130f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-semibold md:text-5xl">{dict.nav.shop}</h1>

        <section className="mb-12 border-y border-[#d8c6aa] py-6">
          <h2 className="text-lg font-semibold">Filtres rapides</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href={`/${locale}/shop/animal`} className="rounded-sm border border-[#17130f] px-4 py-2 text-[#17130f] hover:bg-[#17130f] hover:text-white">
              Animal
            </Link>
            <Link href={`/${locale}/shop/vaseResine`} className="rounded-sm border border-[#17130f] px-4 py-2 text-[#17130f] hover:bg-[#17130f] hover:text-white">
              Vase résine
            </Link>
            <Link href={`/${locale}/shop/vaseBeton`} className="rounded-sm border border-[#17130f] px-4 py-2 text-[#17130f] hover:bg-[#17130f] hover:text-white">
              Vase béton
            </Link>
            <Link href={`/${locale}/shop/fontaine`} className="rounded-sm border border-[#17130f] px-4 py-2 text-[#17130f] hover:bg-[#17130f] hover:text-white">
              Fontaine
            </Link>
            <span className="rounded-sm bg-[#efe4d3] px-4 py-2 text-[#5f5448]">Livraison Suisse</span>
            <span className="rounded-sm bg-[#efe4d3] px-4 py-2 text-[#5f5448]">299 CHF à 499 CHF</span>
            <span className="rounded-sm bg-[#efe4d3] px-4 py-2 text-[#5f5448]">Conseil WhatsApp</span>
          </div>
        </section>

        <CategoryGrid locale={locale} />

        <section className="mt-12">
          <h2 className="mb-10 text-3xl font-semibold">{dict.common.shopNow}</h2>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
