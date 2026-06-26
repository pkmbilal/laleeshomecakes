import { formatPrice } from "./cart";

export function buildWhatsAppMessage({ customer, cart, total }) {
  const lines = [
    "Hello, I would like to place a cake order.",
    "",
    "Customer Details:",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone || "Not provided"}`,
    `Address: ${customer.address || "Not provided"}`,
    `Notes: ${customer.notes || "Not provided"}`,
    "",
    "Order Items:",
    ...cart.map(
      (item, index) =>
        `${index + 1}. ${item.name} x ${item.quantity} - ${formatPrice(
          item.price * item.quantity,
          item.currency
        )}`
    ),
    "",
    `Total: ${formatPrice(total, cart[0]?.currency || "INR")}`,
  ];

  return lines.join("\n");
}

export function buildWhatsAppUrl({ whatsappNumber, message }) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
