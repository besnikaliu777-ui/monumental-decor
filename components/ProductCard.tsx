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

// Product card component. Displays the first product image, name, price and
// buttons to add to cart or wishlist. Use context to dispatch actions.
export default function ProductCard({ product, locale }: Props) {
  const { dispatch: cartDispatch } = useCart();
  const { dispatch: wishlistDispatch } = useWishlist();
  const dict = getDictionary(locale);

  const handleAddToCart = () => {
    cartDispatch({ type: 'add', product });
  };

  const handleAddToWishlist = () => {
    wishlistDispatch({ type: 'add', product });
  };

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
        <div className="flex justify-between space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-yellow-500 text-black px-3 py-2 rounded hover:bg-yellow-400 transition-colors text-sm font-medium"
          >
            {dict.common.addToCart}
          </button>
          <button
            onClick={handleAddToWishlist}
            className="flex-shrink-0 bg-gray-800 text-yellow-500 px-3 py-2 rounded hover:bg-yellow-700 transition-colors text-sm font-medium"
            aria-label={dict.common.addToWishlist}
          >
            {/* Heart icon */}
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
