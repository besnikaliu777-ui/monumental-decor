"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../lib/products';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { getDictionary, Locale } from '../lib/translations';
import { formatPrice } from '../lib/format';

interface Props {
  product: Product;
  locale: Locale;
}

export default function ProductCard({ product, locale }: Props) {
  const { dispatch: cartDispatch } = useCart();
  const { dispatch: wishlistDispatch } = useWishlist();
  const dict = getDictionary(locale);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group">
      <div className="relative h-56">
        <Link href={`/${locale}/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.names[locale]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">
          {product.names[locale]}
        </h3>
        <p className="text-yellow-500 font-medium mb-2">
          {formatPrice(product.price, locale)}
        </p>
        <div className="mb-3 space-y-1 text-xs text-gray-400">
          <p>{product.materials}</p>
          <p>{product.delivery}</p>
        </div>
        <div className="flex justify-between space-x-2">
          <button
            onClick={() => cartDispatch({ type: 'add', product })}
            className="flex-1 bg-yellow-500 text-black px-3 py-2 rounded hover:bg-yellow-400 transition-colors text-sm font-medium"
          >
            {dict.common.addToCart}
          </button>
          <button
            onClick={() => wishlistDispatch({ type: 'add', product })}
            className="flex-shrink-0 bg-gray-800 text-yellow-500 px-3 py-2 rounded hover:bg-yellow-700 transition-colors text-sm font-medium"
            aria-label={dict.common.addToWishlist}
          >
            ♥
          </button>
        </div>
        <Link
          href={`/${locale}/product/${product.slug}#visualisation-3d`}
          className="mt-3 block rounded border border-white/20 px-3 py-2 text-center text-sm font-medium text-white hover:border-yellow-500 hover:text-yellow-500"
        >
          Voir dans mon salon
        </Link>
      </div>
    </div>
  );
}
