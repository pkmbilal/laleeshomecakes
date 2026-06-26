"use client";

import {
  CART_UPDATED_EVENT,
  addToCart,
  clearCart,
  getCartCount,
  readCart,
  removeFromCart,
  updateQuantity,
} from "@/lib/cart";
import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const subscribe = useCallback((callback) => {
    window.addEventListener(CART_UPDATED_EVENT, callback);
    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, callback);
      window.removeEventListener("storage", callback);
    };
  }, []);

  const cartSnapshot = useSyncExternalStore(
    subscribe,
    () => JSON.stringify(readCart()),
    () => "[]"
  );
  const cart = useMemo(() => JSON.parse(cartSnapshot), [cartSnapshot]);

  const value = useMemo(
    () => ({
      cart,
      count: getCartCount(cart),
      addItem(product) {
        addToCart(product);
      },
      setItemQuantity(productId, quantity) {
        updateQuantity(productId, quantity);
      },
      removeItem(productId) {
        removeFromCart(productId);
      },
      emptyCart() {
        clearCart();
      },
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
