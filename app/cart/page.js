import CartPageClient from "@/components/CartPageClient";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Cart & Checkout | Lalees Home Cakes",
  description:
    "Review your Lalees Home Cakes cart and send your cake order details on WhatsApp.",
};

export default function CartPage() {
  return (
    <PageShell>
      <CartPageClient />
    </PageShell>
  );
}
