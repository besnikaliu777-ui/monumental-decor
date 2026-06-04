"use client";

import React, { createContext, useContext, useReducer } from 'react';
import type { Product } from '../lib/products';

// Type definitions for items in the cart. We include quantity for each product.
export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'add'; product: Product }
  | { type: 'remove'; slug: string }
  | { type: 'increment'; slug: string }
  | { type: 'decrement'; slug: string }
  | { type: 'clear' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: { items: [] },
  dispatch: () => null,
});

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((item) => item.product.slug === action.product.slug);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.slug === action.product.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { product: action.product, quantity: 1 }] };
    }
    case 'remove': {
      return { items: state.items.filter((item) => item.product.slug !== action.slug) };
    }
    case 'increment': {
      return {
        items: state.items.map((item) =>
          item.product.slug === action.slug ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    case 'decrement': {
      return {
        items: state.items
          .map((item) =>
            item.product.slug === action.slug
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    case 'clear':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}