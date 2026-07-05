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
  compact?: boolean;
}

export default function ProductCard({ product, locale, compact = false }: Props) {
  const { dispatch: cartDispatch } = useCart();
  const dict = getDictionary(locale);
  const displayPrice = product.priceLabel?.[locale] ?? formatPrice(product.price, locale);
  const canAddToCart = product.price > 0;

  return (
    <article className="group bg-[#fbf7ef] p-4">
      <Link href={`/${locale}/product/${product.slug}`} className="block">
        <div className={compact ? 'relative aspect-[4/3] overflow-hidden bg-[#e4d6c2]' : 'relative aspect-[4/5] overflow-hidden bg-[#e4d6c2]'}>
          <Image
            src={product.images[0]}
            alt={product.names[locale]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className={compact ? 'pt-4' : 'pt-6'}>
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className={compact ? 'text-lg font-semibold text-[#17130f]' : 'text-2xl font-semibold text-[#17130f]'}>
              {product.names[locale]}
            </h3>
            {!compact && <p className="mt-2 text-sm text-[#6b5d4d]">{product.materials}</p>}
          </div>
          <p className={compact ? 'whitespace-nowrap text-sm font-semibold text-[#8a642f]' : 'whitespace-nowrap text-xl font-semibold text-[#8a642f]'}>
            {displayPrice}
          </p>
        </div>

        <div className={compact ? 'mt-4 flex flex-col gap-2 sm:flex-row' : 'mt-6 flex flex-col gap-3 sm:flex-row'}>
          {canAddToCart ? (
            <button
              onClick={() => cartDispatch({ type: 'add', product })}
              className="rounded-sm bg-[#17130f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4a3621]"
            >
              {dict.common.addToCart}
            </button>
          ) : (
            <Link
              href={`/${locale}/product/${product.slug}`}
              className="rounded-sm bg-[#17130f] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4a3621]"
            >
              Demander le prix
            </Link>
          )}
          <Link
            href={`/${locale}/product/${product.slug}#visualisation-3d`}
            className="rounded-sm border border-[#17130f] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#17130f] hover:bg-[#17130f] hover:text-white"
          >
            Voir chez vous
          </Link>
        </div>
      </div>
    </article>
  );
}
