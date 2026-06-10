"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '../../../../contexts/CartContext';
import { useWishlist } from '../../../../contexts/WishlistContext';
import { getDictionary, Locale } from '../../../../lib/translations';
import { formatPrice } from '../../../../lib/format';
import { getProductBySlug, Product } from '../../../../lib/products';

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
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-300">Produit introuvable.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => router.back()} className="text-yellow-500 hover:underline mb-4">
          ← {dict.common.back}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-4">
            {product.images.map((src, idx) => (
              <div key={`${src}-${idx}`} className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image src={src} alt={product.names[locale]} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-bold text-white">
              {product.names[locale]}
            </h1>
            <p className="text-yellow-500 text-2xl font-semibold">
              {formatPrice(product.price, locale)}
            </p>
            <p className="text-gray-300">{product.descriptions[locale]}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
              <Info label={dict.common.dimensions} value={product.dimensions} />
              <Info label={dict.common.weight} value={product.weight} />
              <Info label={dict.common.materials} value={product.materials} />
              <Info label="Délai" value={product.delay} />
              <Info label="Livraison" value={product.delivery} />
              <Info label="Garantie" value={product.warranty} />
              <Info label="Entretien" value={product.care} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => cartDispatch({ type: 'add', product })}
                className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition-colors text-sm font-medium"
              >
                {dict.common.addToCart}
              </button>
              <button
                onClick={() => wishlistDispatch({ type: 'add', product })}
                className="bg-gray-800 text-yellow-500 px-6 py-3 rounded hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                {dict.common.addToWishlist}
              </button>
              <a
                href={`https://wa.me/41787763292?text=${encodeURIComponent(`Bonjour, je souhaite un conseil pour ${product.names[locale]}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded hover:bg-[#1fb457] transition-colors text-sm font-medium text-center"
              >
                Demander conseil
              </a>
            </div>
            <div className="rounded-lg border border-yellow-500/40 bg-yellow-500/10 p-4 text-sm text-yellow-100">
              Paiement sécurisé, vérification avant livraison et accompagnement par WhatsApp.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded bg-gray-900 p-3">
      <span className="block font-semibold text-gray-100">{label}</span>
      <span>{value}</span>
    </div>
  );
}
