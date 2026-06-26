"use client";

import { siteConfig } from "@/data/siteConfig";
import { useCart } from "@/components/CartContext";
import { getCartTotal } from "@/lib/cart";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { useState } from "react";

export default function CheckoutForm() {
  const { cart, emptyCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSent(false);

    if (!form.name.trim()) {
      setError("Please enter your name before sending the order.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const message = buildWhatsAppMessage({
      customer: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        notes: form.notes.trim(),
      },
      cart,
      total: getCartTotal(cart),
    });
    const url = buildWhatsAppUrl({
      whatsappNumber: siteConfig.whatsappNumber,
      message,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    emptyCart();
    setSent(true);
    setForm({ name: "", phone: "", address: "", notes: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] bg-white p-5 shadow-[0_20px_60px_rgba(201,20,93,0.10)] ring-1 ring-[color:var(--border)] sm:p-6"
    >
      <h2 className="whitespace-nowrap font-serif text-3xl font-semibold text-[color:var(--text)] sm:text-3xl">
        Checkout Details
      </h2>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
          Customer name
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            required
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
          Phone number
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
            placeholder="+91..."
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
          Delivery address
          <textarea
            name="address"
            value={form.address}
            onChange={updateField}
            rows={3}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
            placeholder="Address or pickup preference"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
          Notes
          <textarea
            name="notes"
            value={form.notes}
            onChange={updateField}
            rows={3}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
            placeholder="Cake message, date, flavor, or design notes"
          />
        </label>
      </div>
      {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
      {sent && (
        <p className="mt-4 text-sm font-semibold text-green-700">
          WhatsApp opened with your order details.
        </p>
      )}
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-[color:var(--pink)] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(236,27,114,0.25)] transition hover:bg-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)] sm:px-6 sm:py-4"
      >
        Send Order on WhatsApp
      </button>
    </form>
  );
}
