"use client";

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '../contexts/WishlistContext';

interface Props {
  locale: string;
}

// Icon with count for the wishlist. Uses context to display number of favourite products.
export default function WishlistIcon({ locale }: Props) {
  const { state } = useWishlist();
  const count = state.items.length;
  return (
    <Link href={`/${locale}/wishlist`} aria-label="Favoris" className="relative ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500 hover:text-yellow-400 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.637l1.318-1.319a4.5 4.5 0 1 1 6.364 6.364L12 21.364 4.318 12.682a4.5 4.5 0 0 1 0-6.364z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-2 bg-yellow-500 text-black text-xs font-bold px-1 rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
}