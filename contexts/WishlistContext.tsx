"use client";

import React, { createContext, useContext, useReducer } from 'react';
import type { Product } from '../lib/products';

interface WishlistState {
  items: Product[];
}

type WishlistAction =
  | { type: 'add'; product: Product }
  | { type: 'remove'; slug: string }
  | { type: 'clear' };

const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
}>({
  state: { items: [] },
  dispatch: () => null,
});

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case 'add': {
      if (state.items.find((item) => item.slug === action.product.slug)) {
        return state;
      }
      return { items: [...state.items, action.product] };
    }
    case 'remove': {
      return { items: state.items.filter((item) => item.slug !== action.slug) };
    }
    case 'clear':
      return { items: [] };
    default:
      return state;
  }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });
  return (
    <WishlistContext.Provider value={{ state, dispatch }}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}