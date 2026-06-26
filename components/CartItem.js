"use client";

import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/cart";
import Image from "next/image";

export default function CartItem({ item }) {
  const { setItemQuantity, removeItem } = useCart();

  return (
    <article className="grid gap-4 rounded-[1.5rem] bg-white p-4 ring-1 ring-[color:var(--border)] sm:grid-cols-[120px_1fr_auto]">
      <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-[color:var(--cream)]">
        <Image src={item.image} alt={item.name} fill sizes="120px" className="object-cover" />
      </div>
      <div>
        <p className="text-sm font-bold text-[color:var(--pink)]">{item.category}</p>
        <h2 className="mt-1 font-serif text-2xl font-semibold text-[color:var(--text)]">
          {item.name}
        </h2>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          {formatPrice(item.price, item.currency)} each
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="flex items-center rounded-full bg-[color:var(--soft-pink)] p-1">
          <button
            type="button"
            className="size-9 rounded-full bg-white font-bold text-[color:var(--text)]"
            onClick={() => setItemQuantity(item.id, item.quantity - 1)}
            aria-label={`Decrease ${item.name} quantity`}
          >
            -
          </button>
          <span className="min-w-10 text-center text-sm font-bold">{item.quantity}</span>
          <button
            type="button"
            className="size-9 rounded-full bg-white font-bold text-[color:var(--text)]"
            onClick={() => setItemQuantity(item.id, item.quantity + 1)}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="rounded-full bg-[color:var(--soft-pink)] px-4 py-2 text-sm font-bold text-[color:var(--pink)] transition hover:bg-[color:var(--border)] hover:text-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]"
          onClick={() => removeItem(item.id)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h16" />
            <path d="M9 7V5.75A1.75 1.75 0 0 1 10.75 4h2.5A1.75 1.75 0 0 1 15 5.75V7" />
            <path d="M6.5 7l.8 11a2 2 0 0 0 2 1.82h5.4a2 2 0 0 0 2-1.82l.8-11" />
            <path d="M10 11v5" />
            <path d="M14 11v5" />
          </svg>
        </button>
      </div>
    </article>
  );
}
