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
          className="text-sm font-bold text-[color:var(--pink)] hover:text-[color:var(--pink-dark)]"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}
