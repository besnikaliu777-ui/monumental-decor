"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../lib/products';
import { useCart } from '../contexts/CartContext';
import { getDictionary, Locale } from '../lib/translations';
import { formatPrice } from '../lib/format';

interface Props {
  product: Product;
  locale: Locale;
}

export default function ProductCard({ product, locale }: Props) {
  const { dispatch: cartDispatch } = useCart();
  const dict = getDictionary(locale);

  return (
    <article className="group">
      <Link href={`/${locale}/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e4d6c2]">
          <Image
            src={product.images[0]}
            alt={product.names[locale]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="pt-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold text-[#17130f]">{product.names[locale]}</h3>
            <p className="mt-2 text-sm text-[#6b5d4d]">{product.materials}</p>
          </div>
          <p className="whitespace-nowrap text-xl font-semibold text-[#8a642f]">
            {formatPrice(product.price, locale)}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => cartDispatch({ type: 'add', product })}
            className="rounded-sm bg-[#17130f] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4a3621]"
          >
            {dict.common.addToCart}
          </button>
          <Link
            href={`/${locale}/product/${product.slug}#visualisation-3d`}
            className="rounded-sm border border-[#17130f] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#17130f] hover:bg-[#17130f] hover:text-white"
          >
            Voir chez vous
          </Link>
        </div>
      </div>
    </article>
  );
}
