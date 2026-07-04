import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '../../lib/translations';
import { products } from '../../lib/products';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  const locale = params.lang;

  return (
    <main className="bg-[#f6f0e6] text-[#17130f]">
      <Hero locale={locale} />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-[#8a642f]">Collection</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Pièces disponibles</h2>
            </div>
            <Link
              href={`/${locale}/shop`}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-[#17130f] underline underline-offset-8 hover:text-[#8a642f]"
            >
              Voir toute la boutique
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-sm">
            <Image
              src="/images/vase-anges-1.jpg"
              alt="Vase monumental en situation"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-[0.26em] text-[#8a642f]">Sur mesure</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Une présence forte, sans surcharge.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5448]">
              Chaque pièce est choisie pour créer un point focal dans une entrée, une terrasse,
              un jardin ou un lieu d’accueil.
            </p>
            <Link
              href={`/${locale}/savoir-faire`}
              className="mt-8 inline-block rounded-sm border border-[#17130f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#17130f] hover:bg-[#17130f] hover:text-white"
            >
              Notre savoir-faire
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8c6aa] bg-[#efe4d3] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-sm uppercase tracking-[0.18em] text-[#17130f] md:grid-cols-3">
          <p>Fabrication artisanale</p>
          <p>Livraison dans toute la Suisse</p>
          <p>Conseil direct par WhatsApp</p>
        </div>
      </section>
    </main>
  );
}
