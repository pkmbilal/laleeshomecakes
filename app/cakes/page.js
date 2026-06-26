import CakesCatalog from "@/components/CakesCatalog";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Cakes | Lalees Home Cakes",
  description:
    "Browse birthday cakes, anniversary cakes, custom cakes, cupcakes, and desserts from Lalees Home Cakes.",
};

export default function CakesPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Cake menu"
            title="Choose your celebration cake"
            text="Filter by occasion, add your favorites to cart, and send the final order through WhatsApp."
          />
          <CakesCatalog />
        </div>
      </section>
    </PageShell>
  );
}
