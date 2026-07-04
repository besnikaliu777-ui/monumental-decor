"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '../../../../contexts/CartContext';
import { useWishlist } from '../../../../contexts/WishlistContext';
import { getDictionary, Locale } from '../../../../lib/translations';
import { formatPrice } from '../../../../lib/format';
import { getProductBySlug, Product } from '../../../../lib/products';
import AugmentedProductViewer from '../../../../components/AugmentedProductViewer';

interface Props {
  params: { lang: Locale; slug: string };
}

export default function ProductPage({ params }: Props) {
  const { lang: locale, slug } = params;
  const dict = getDictionary(locale);
  const product = getProductBySlug(slug) as Product;
  const { dispatch: cartDispatch } = useCart();
  const { dispatch: wishlistDispatch } = useWishlist();
  const router = useRouter();

  if (!product) {
    return (
      <main className="bg-[#f6f0e6] py-16">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-[#5f5448]">Produit introuvable.</p>
        </div>
      </main>
    );
  }

  const situationImages = product.slug === 'vase-anges-baroque'
    ? ['/images/vase-anges-1.jpg', '/images/vase-anges-2.jpg']
    : ['/images/dame-amphore-1.jpg', '/images/dame-amphore-2.jpg'];

  return (
    <main className="bg-[#f6f0e6] text-[#17130f]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <button onClick={() => router.back()} className="mb-8 text-sm uppercase tracking-[0.18em] text-[#6b5d4d] hover:text-[#17130f]">
          ← {dict.common.back}
        </button>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e4d6c2]">
              <Image src={product.images[0]} alt={product.names[locale]} fill className="object-cover" priority />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {product.images.slice(1, 5).map((src, idx) => (
                <div key={`${src}-${idx}`} className="relative aspect-square overflow-hidden bg-[#e4d6c2]">
                  <Image src={src} alt={product.names[locale]} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm uppercase tracking-[0.26em] text-[#8a642f]">Pièce artisanale</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              {product.names[locale]}
            </h1>
            <p className="mt-6 text-2xl font-semibold text-[#8a642f]">
              {formatPrice(product.price, locale)}
            </p>
            <p className="mt-6 text-lg leading-8 text-[#5f5448]">{product.descriptions[locale]}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => cartDispatch({ type: 'add', product })}
                className="rounded-sm bg-[#17130f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4a3621]"
              >
                {dict.common.addToCart}
              </button>
              <button
                onClick={() => wishlistDispatch({ type: 'add', product })}
                className="rounded-sm border border-[#17130f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#17130f] hover:bg-[#17130f] hover:text-white"
              >
                {dict.common.addToWishlist}
              </button>
            </div>

            <div id="visualisation-3d" className="mt-5">
              <AugmentedProductViewer
                productName={product.names[locale]}
                modelType={product.modelType}
                modelHeightCm={product.modelHeightCm}
              />
            </div>

            <div className="mt-10 border-y border-[#d8c6aa] py-6">
              <h2 className="text-xl font-semibold">Vue 360° et visualisation AR</h2>
              <p className="mt-3 leading-7 text-[#5f5448]">
                Tournez le modèle 3D, posez l’objet virtuellement au sol ou sur une table, puis
                ajustez sa taille approximative depuis votre mobile.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-[#5f5448] sm:grid-cols-2">
              <Info label={dict.common.dimensions} value={product.dimensions} />
              <Info label={dict.common.weight} value={product.weight} />
              <Info label={dict.common.materials} value={product.materials} />
              <Info label="Délai" value={product.delay} />
              <Info label="Livraison" value={product.delivery} />
              <Info label="Entretien" value={product.care} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.26em] text-[#8a642f]">En situation</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Photos dans un espace de vie</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {situationImages.map((src) => (
              <div key={src} className="relative min-h-[420px] overflow-hidden bg-[#e4d6c2]">
                <Image src={src} alt={`${product.names[locale]} en situation`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[#d8c6aa] pt-3">
      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8a642f]">{label}</span>
      <span className="mt-2 block">{value}</span>
    </div>
  );
}
