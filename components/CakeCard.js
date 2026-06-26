"use client";

import { useCart } from "@/components/CartContext";
import { formatPrice, getCartItemQuantity } from "@/lib/cart";
import Image from "next/image";

export default function CakeCard({ product }) {
  const { cart, addItem, setItemQuantity } = useCart();
  const quantity = getCartItemQuantity(cart, product.id);

  function handleIncrement() {
    addItem(product);
  }

  function handleDecrement() {
    setItemQuantity(product.id, quantity - 1);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_60px_rgba(201,20,93,0.10)] ring-1 ring-[color:var(--border)]/70">
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--cream)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-[color:var(--soft-pink)] px-3 py-1 text-xs font-bold text-[color:var(--pink)]">
          {product.category}
        </span>
        <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-[color:var(--text)]">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-[color:var(--muted)]">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-lg font-bold text-[color:var(--text)]">
            {formatPrice(product.price, product.currency)}
          </p>
          {quantity > 0 ? (
            <div className="flex items-center rounded-full bg-[color:var(--soft-pink)] p-1">
              <button
                type="button"
                onClick={handleDecrement}
                aria-label={`Decrease ${product.name} quantity`}
                className="grid size-9 place-items-center rounded-full bg-white text-lg font-bold text-[color:var(--text)] transition hover:text-[color:var(--pink)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]"
              >
                -
              </button>
              <span className="min-w-10 px-2 text-center text-sm font-bold text-[color:var(--text)]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                aria-label={`Increase ${product.name} quantity`}
                className="grid size-9 place-items-center rounded-full bg-white text-lg font-bold text-[color:var(--text)] transition hover:text-[color:var(--pink)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleIncrement}
              className="rounded-full bg-[color:var(--pink)] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(236,27,114,0.25)] transition hover:bg-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
