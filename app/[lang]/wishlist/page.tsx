"use client";

import { useWishlist } from '../../../contexts/WishlistContext';
import { useCart } from '../../../contexts/CartContext';
import { getDictionary, Locale } from '../../../lib/translations';
import { formatPrice } from '../../../lib/format';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: { lang: Locale };
}

export default function WishlistPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();
  const items = wishlistState.items;

  const handleAddToCart = (product: any) => {
    cartDispatch({ type: 'add', product });
  };

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {dict.nav.wishlist}
        </h1>
        {items.length === 0 ? (
          <p className="text-gray-300">{dict.common.emptyWishlist}</p>
        ) : (
          <div className="space-y-6">
            {items.map((product) => (
              <div
                key={product.slug}
                className="flex items-center justify-between bg-gray-900 rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={product.images[0]}
                      alt={product.names[locale]}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {product.names[locale]}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {formatPrice(product.price, locale)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors text-sm font-medium"
                    onClick={() => handleAddToCart(product)}
                  >
                    {dict.common.addToCart}
                  </button>
                  <button
                    className="text-red-500 text-sm hover:underline"
                    onClick={() => wishlistDispatch({ type: 'remove', slug: product.slug })}
                  >
                    {dict.common.remove}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
