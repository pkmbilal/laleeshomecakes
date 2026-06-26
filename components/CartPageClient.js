"use client";

import CartItem from "@/components/CartItem";
import CheckoutForm from "@/components/CheckoutForm";
import { useCart } from "@/components/CartContext";
import { formatPrice, getCartTotal } from "@/lib/cart";
import Link from "next/link";

export default function CartPageClient() {
  const { cart } = useCart();
  const subtotal = getCartTotal(cart);
  const deliveryFee = cart.length > 0 ? 150 : 0;
  const total = subtotal + deliveryFee;

  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--pink)]">
            Cart / Checkout
          </p>
          <h1 className="mt-3 whitespace-nowrap font-serif text-3xl font-semibold leading-tight text-[color:var(--text)] sm:text-5xl">
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
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="grid gap-4 self-start">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,241,247,0.55))] p-4 shadow-[0_12px_36px_rgba(201,20,93,0.06)] backdrop-blur-sm sm:rounded-[2rem] sm:p-6 sm:shadow-[0_18px_60px_rgba(201,20,93,0.08)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--pink)] sm:text-xs sm:tracking-[0.22em]">
                      Order Summary
                    </p>
                    <h2 className="mt-1 font-serif text-lg font-semibold text-[color:var(--text)] sm:mt-2 sm:text-2xl">
                      Total
                    </h2>
                  </div>
                  <div className="rounded-full bg-[color:var(--soft-pink)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--pink-dark)] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
                    Ready to checkout
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-[color:var(--muted)] sm:mt-6 sm:space-y-3 sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[color:var(--text)]">
                      {formatPrice(subtotal, cart[0]?.currency || "INR")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span className="font-semibold text-[color:var(--text)]">
                      {formatPrice(deliveryFee, cart[0]?.currency || "INR")}
                    </span>
                  </div>
                </div>

                <div className="my-3 h-px bg-[color:var(--border)]/70 sm:my-5" />

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-[color:var(--muted)] sm:text-sm">
                      Total
                    </p>
                    <p className="mt-1 text-[10px] text-[color:var(--muted)] sm:text-xs">
                      Including flat delivery
                    </p>
                  </div>
                  <span className="font-sans text-2xl font-semibold leading-none text-[color:var(--pink)] sm:text-3xl">
                    {formatPrice(total, cart[0]?.currency || "INR")}
                  </span>
                </div>
              </div>
            </div>
            <div className="self-start">
              <CheckoutForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
