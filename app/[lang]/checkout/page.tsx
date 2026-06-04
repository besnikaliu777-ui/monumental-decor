"use client";

import { useCart } from '../../../contexts/CartContext';
import { getDictionary, Locale } from '../../../lib/translations';
import { formatPrice } from '../../../lib/format';
import Image from 'next/image';

interface Props {
  params: { lang: Locale };
}

export default function CheckoutPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);
  const { state, dispatch } = useCart();
  const items = state.items;
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {dict.nav.checkout}
        </h1>
        {items.length === 0 ? (
          <p className="text-gray-300">{dict.common.emptyCart}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Order summary */}
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.slug}
                  className="flex items-center justify-between bg-gray-900 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
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
                    </div>
                  </div>
                  <p className="text-yellow-500 font-semibold">
                    {formatPrice(item.product.price * item.quantity, locale)}
                  </p>
                </div>
              ))}
              <div className="flex justify-between items-center bg-gray-900 rounded-lg p-4">
                <span className="text-xl text-white font-bold">{dict.common.total}</span>
                <span className="text-xl text-yellow-500 font-bold">
                  {formatPrice(total, locale)}
                </span>
              </div>
            </div>
            {/* Payment options */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Mode de paiement</h2>
              <div className="space-y-3">
                {/* Fake payment buttons */}
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-500 transition-colors">
                  Payer avec Stripe
                </button>
                <button className="w-full bg-blue-800 text-white px-4 py-3 rounded hover:bg-blue-700 transition-colors">
                  Payer avec PayPal
                </button>
                <button className="w-full bg-gray-800 text-white px-4 py-3 rounded hover:bg-gray-700 transition-colors">
                  Virement bancaire
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: 'clear' })}
                className="w-full mt-4 bg-yellow-500 text-black px-4 py-3 rounded font-medium hover:bg-yellow-400 transition-colors"
              >
                Finaliser la commande (démo)
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
