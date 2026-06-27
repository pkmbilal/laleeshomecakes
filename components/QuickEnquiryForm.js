"use client";

import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useState } from "react";

export default function QuickEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    occasion: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Hello, I would like to enquire about a cake order.",
      "",
      "Enquiry Details:",
      `Name: ${form.name.trim() || "Not provided"}`,
      `Occasion: ${form.occasion.trim() || "Not provided"}`,
      `Message: ${form.message.trim() || "Not provided"}`,
    ].join("\n");

    const url = buildWhatsAppUrl({
      whatsappNumber: siteConfig.whatsappNumber,
      message,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] bg-white/80 p-6 shadow-[0_20px_60px_rgba(201,20,93,0.08)] ring-1 ring-[color:var(--border)] sm:p-8"
    >
      <h2 className="font-serif text-3xl font-semibold text-[color:var(--text)]">
        Quick enquiry
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
          Occasion
          <input
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)] md:col-span-2">
          Message
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 inline-flex w-full justify-center rounded-full bg-[color:var(--pink)] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(236,27,114,0.25)] transition hover:bg-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)] sm:w-auto"
      >
        Message on WhatsApp
      </button>
    </form>
  );
}
