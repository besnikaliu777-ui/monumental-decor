"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

interface Props {
  locale: string;
}

// Icon with count for the cart. Uses context to display number of items.
export default function CartIcon({ locale }: Props) {
  const { state } = useCart();
  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Link href={`/${locale}/cart`} aria-label="Panier" className="relative ml-4">
      {/* SVG icon of a shopping bag */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#17130f] transition-colors hover:text-[#8a642f]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4h18l-1.2 15.6A2 2 0 0 1 17.8 21H6.2a2 2 0 0 1-1.99-1.4L3 4z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11a4 4 0 1 1-8 0" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-2 rounded-full bg-[#8a642f] px-1 text-xs font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
