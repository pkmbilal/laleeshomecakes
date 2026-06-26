"use client";

import CartItem from "@/components/CartItem";
import CheckoutForm from "@/components/CheckoutForm";
import { useCart } from "@/components/CartContext";
import { formatPrice, getCartTotal } from "@/lib/cart";
import Link from "next/link";

export default function CartPageClient() {
  const { cart } = useCart();
  const total = getCartTotal(cart);

  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--pink)]">
            Cart / Checkout
          </p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-[color:var(--text)]">
            Review your cake order
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-[2rem] bg-white p-8 text-center ring-1 ring-[color:var(--border)]">
            <h2 className="font-serif text-3xl font-semibold text-[color:var(--text)]">
              Your cart is empty
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              Browse cakes and add your favorites before sending the order on
              WhatsApp.
            </p>
            <Link
              href="/cakes"
              className="mt-6 inline-flex rounded-full bg-[color:var(--pink)] px-7 py-4 text-sm font-bold text-white"
            >
              Explore Cakes
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="rounded-[1.5rem] bg-[color:var(--cream)] p-5 ring-1 ring-[color:var(--border)]">
                <div className="flex items-center justify-between text-lg font-bold text-[color:var(--text)]">
                  <span>Total</span>
                  <span>{formatPrice(total, cart[0]?.currency || "INR")}</span>
                </div>
              </div>
            </div>
            <CheckoutForm />
          </div>
        )}
      </div>
    </section>
  );
}
