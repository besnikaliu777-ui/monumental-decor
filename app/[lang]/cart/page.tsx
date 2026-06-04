"use client";

import { useCart } from '../../../contexts/CartContext';
import { getDictionary, Locale } from '../../../lib/translations';
import { formatPrice } from '../../../lib/format';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: { lang: Locale };
}

export default function CartPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);
  const { state, dispatch } = useCart();
  const items = state.items;
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {dict.nav.cart}
        </h1>
        {items.length === 0 ? (
          <p className="text-gray-300">{dict.common.emptyCart}</p>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.product.slug}
                className="flex items-center justify-between bg-gray-900 rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.names[locale]}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {item.product.names[locale]}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {formatPrice(item.product.price, locale)} × {item.quantity}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="bg-gray-800 text-yellow-500 px-2 py-1 rounded"
                        onClick={() => dispatch({ type: 'decrement', slug: item.product.slug })}
                      >
                        −
                      </button>
                      <span className="text-white">{item.quantity}</span>
                      <button
                        className="bg-gray-800 text-yellow-500 px-2 py-1 rounded"
                        onClick={() => dispatch({ type: 'increment', slug: item.product.slug })}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-yellow-500 font-semibold">
                    {formatPrice(item.product.price * item.quantity, locale)}
                  </p>
                  <button
                    className="text-red-500 text-sm mt-2 hover:underline"
                    onClick={() => dispatch({ type: 'remove', slug: item.product.slug })}
                  >
                    {dict.common.remove}
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <div className="text-right">
                <p className="text-xl text-white font-bold">
                  {dict.common.total}: {formatPrice(total, locale)}
                </p>
                <Link
                  href={`/${locale}/checkout`}
                  className="mt-4 inline-block bg-yellow-500 text-black px-6 py-3 rounded font-medium hover:bg-yellow-400 transition-colors"
                >
                  {dict.common.proceedToCheckout}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
