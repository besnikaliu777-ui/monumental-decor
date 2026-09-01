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
        <h1 className="text-3xl md:text-4xl font-bold text-[#17130f] mb-6">
          {dict.nav.checkout}
        </h1>
        {items.length === 0 ? (
          <p className="text-[#5f5448]">{dict.common.emptyCart}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Order summary */}
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.slug}
                  className="flex items-center justify-between rounded-sm border border-[#d8c6aa] bg-[#fbf7ef] p-4"
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
                      <h3 className="text-[#17130f] font-semibold">
                        {item.product.names[locale]}
                      </h3>
                      <p className="text-[#6b5d4d] text-sm">
                        {formatPrice(item.product.price, locale)} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#8a642f] font-semibold">
                    {formatPrice(item.product.price * item.quantity, locale)}
                  </p>
                </div>
              ))}
              <div className="flex justify-between items-center rounded-sm border border-[#d8c6aa] bg-[#fbf7ef] p-4">
                <span className="text-xl text-[#17130f] font-bold">{dict.common.total}</span>
                <span className="text-xl text-[#8a642f] font-bold">
                  {formatPrice(total, locale)}
                </span>
              </div>
            </div>
            {/* Payment options */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#17130f]">Mode de paiement</h2>
              <div className="space-y-3">
                {/* Fake payment buttons */}
                <button className="w-full rounded-sm bg-[#17130f] px-4 py-3 text-white transition-colors hover:bg-[#4a3621]">
                  Payer avec Stripe
                </button>
                <button className="w-full rounded-sm bg-[#4a3621] px-4 py-3 text-white transition-colors hover:bg-[#17130f]">
                  Payer avec PayPal
                </button>
                <button className="w-full rounded-sm border border-[#17130f] px-4 py-3 text-[#17130f] transition-colors hover:bg-[#17130f] hover:text-white">
                  Virement bancaire
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: 'clear' })}
                className="w-full mt-4 rounded-sm bg-[#17130f] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#4a3621]"
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
