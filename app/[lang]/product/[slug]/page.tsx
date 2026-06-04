"use client";
// This page is a client component because it contains interactive buttons
// that use context. We fetch product data at runtime in the component.
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

  const handleAddToCart = () => {
    cartDispatch({ type: 'add', product });
  };
  const handleAddToWishlist = () => {
    wishlistDispatch({ type: 'add', product });
  };

  return (
    <main className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => router.back()} className="text-yellow-500 hover:underline mb-4">
          ← {dict.common.back}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {product.images.map((src, idx) => (
              <div key={idx} className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image src={src} alt={product.names[locale]} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">
              {product.names[locale]}
            </h1>
            <p className="text-yellow-500 text-2xl font-semibold">
              {formatPrice(product.price, locale)}
            </p>
            <p className="text-gray-300">{product.descriptions[locale]}</p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>
                <span className="font-semibold text-gray-200">{dict.common.dimensions}: </span>
                {product.dimensions}
              </p>
              <p>
                <span className="font-semibold text-gray-200">{dict.common.weight}: </span>
                {product.weight}
              </p>
              <p>
                <span className="font-semibold text-gray-200">{dict.common.materials}: </span>
                {product.materials}
              </p>
            </div>
            <div className="flex space-x-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition-colors text-sm font-medium"
              >
                {dict.common.addToCart}
              </button>
              <button
                onClick={handleAddToWishlist}
                className="bg-gray-800 text-yellow-500 px-6 py-3 rounded hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                {dict.common.addToWishlist}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
