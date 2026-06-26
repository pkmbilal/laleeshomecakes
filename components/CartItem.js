"use client";

import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/cart";
import Image from "next/image";

export default function CartItem({ item }) {
  const { setItemQuantity, removeItem } = useCart();

  return (
    <article className="grid grid-cols-[80px_1fr_auto] gap-3 rounded-[1.5rem] bg-white p-3 ring-1 ring-[color:var(--border)] sm:grid-cols-[120px_1fr_auto] sm:gap-4 sm:p-4">
      <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-[color:var(--cream)]">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 80px, 120px" className="object-cover" />
      </div>
      <div className="min-w-0 self-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--pink)] sm:text-sm sm:tracking-normal">
          {item.category}
        </p>
        <h2 className="mt-1 truncate font-serif text-lg font-semibold leading-tight text-[color:var(--text)] sm:text-2xl">
          {item.name}
        </h2>
        <p className="mt-1 text-xs text-[color:var(--muted)] sm:mt-2 sm:text-sm">
          {formatPrice(item.price, item.currency)} each
        </p>
      </div>
      <div className="flex flex-col items-end justify-between gap-2 self-center sm:gap-4">
        <div className="flex items-center rounded-full bg-[color:var(--soft-pink)] p-0.5 sm:p-1">
          <button
            type="button"
            className="grid size-7 place-items-center rounded-full bg-white text-sm font-bold text-[color:var(--text)] sm:size-9"
            onClick={() => setItemQuantity(item.id, item.quantity - 1)}
            aria-label={`Decrease ${item.name} quantity`}
          >
            -
          </button>
          <span className="min-w-8 px-1 text-center text-xs font-bold sm:min-w-10 sm:text-sm">
            {item.quantity}
          </span>
          <button
            type="button"
            className="grid size-7 place-items-center rounded-full bg-white text-sm font-bold text-[color:var(--text)] sm:size-9"
            onClick={() => setItemQuantity(item.id, item.quantity + 1)}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="rounded-full bg-[color:var(--soft-pink)] px-3 py-2 text-[10px] font-bold text-[color:var(--pink)] transition hover:bg-[color:var(--border)] hover:text-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)] sm:px-4 sm:py-2 sm:text-sm"
          onClick={() => removeItem(item.id)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-4 sm:size-5"
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
