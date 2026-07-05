import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '../../lib/translations';
import { products } from '../../lib/products';
import { formatPrice } from '../../lib/format';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  const locale = params.lang;
  const featured = products[0];

  return (
    <main className="bg-[#f6f0e6] text-[#17130f]">
      <Hero locale={locale} />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8a642f]">Collection</p>
              <h2 className="mt-3 text-3xl font-semibold uppercase md:text-4xl">Pièces phares</h2>
            </div>
            <Link
              href={`/${locale}/shop`}
              className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#17130f] underline underline-offset-8 hover:text-[#8a642f] sm:block"
            >
              Voir la boutique
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 bg-[#fbf7ef] p-5 md:grid-cols-[0.55fr_0.45fr] md:p-8">
          <div className="grid grid-cols-[88px_1fr] gap-4">
            <div className="space-y-3">
              {featured.images.slice(0, 4).map((src, index) => (
                <div key={`${src}-${index}`} className="relative aspect-square overflow-hidden bg-[#e4d6c2]">
                  <Image src={src} alt={featured.names[locale]} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[#e4d6c2]">
              <Image src={featured.images[0]} alt={featured.names[locale]} fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8a642f]">Pièce sélectionnée</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{featured.names[locale]}</h2>
            <p className="mt-4 text-2xl font-semibold text-[#8a642f]">
              {formatPrice(featured.price, locale)}
            </p>
            <p className="mt-6 max-w-md leading-8 text-[#5f5448]">
              Une pièce sculpturale pour créer un point focal dans une entrée, une terrasse ou
              un jardin d’hiver.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/product/${featured.slug}`}
                className="rounded-sm bg-[#17130f] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4a3621]"
              >
                Voir le produit
              </Link>
              <Link
                href={`/${locale}/product/${featured.slug}#visualisation-3d`}
                className="rounded-sm border border-[#17130f] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#17130f] hover:bg-[#17130f] hover:text-white"
              >
                Voir chez vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#8a642f]">Excellence</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase md:text-5xl">
              Au service de vos projets
            </h2>
            <p className="mt-6 max-w-md leading-8 text-[#5f5448]">
              Sélection, conseil, livraison et placement : chaque pièce est pensée pour s’intégrer
              dans un espace premium sans le surcharger.
            </p>
            <Link
              href={`/${locale}/savoir-faire`}
              className="mt-8 inline-block rounded-sm border border-[#17130f] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#17130f] hover:bg-[#17130f] hover:text-white"
            >
              Découvrir notre savoir-faire
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="relative min-h-[360px] overflow-hidden bg-[#e4d6c2]">
              <Image src="/images/vase-anges-3.jpg" alt="Détail de sculpture" fill className="object-cover" />
            </div>
            <div className="space-y-5">
              {[
                ['Artisanat', 'Pièces travaillées avec détails sculptés'],
                ['Matières', 'Résine et béton décoratif selon usage'],
                ['Livraison', 'Organisation dans toute la Suisse'],
                ['Conseil', 'Accompagnement direct par WhatsApp'],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-[#d8c6aa] pt-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f5448]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
