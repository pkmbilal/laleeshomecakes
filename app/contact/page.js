import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact | Lalees Home Cakes",
  description:
    "Contact Lalees Home Cakes for birthdays, anniversaries, custom cakes, cupcakes, and dessert orders.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Plan your next cake order"
            text="Send your celebration date, cake idea, delivery preference, and any design notes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_20px_60px_rgba(201,20,93,0.10)] ring-1 ring-[color:var(--border)]">
              <h1 className="font-serif text-3xl font-semibold text-[color:var(--text)]">
                Business details
              </h1>
              <dl className="mt-6 grid gap-4 text-sm">
                <div>
                  <dt className="font-bold text-[color:var(--pink)]">Phone</dt>
                  <dd className="mt-1 text-[color:var(--muted)]">{siteConfig.phone}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[color:var(--pink)]">Email</dt>
                  <dd className="mt-1 text-[color:var(--muted)]">{siteConfig.email}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[color:var(--pink)]">Location</dt>
                  <dd className="mt-1 text-[color:var(--muted)]">{siteConfig.address}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[color:var(--pink)]">Delivery</dt>
                  <dd className="mt-1 text-[color:var(--muted)]">
                    {siteConfig.deliveryAreas}
                  </dd>
                </div>
              </dl>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full justify-center rounded-full bg-[color:var(--pink)] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(236,27,114,0.25)] transition hover:bg-[color:var(--pink-dark)]"
              >
                Message on WhatsApp
              </a>
              <div className="mt-5 flex gap-4 text-sm font-bold text-[color:var(--pink)]">
                <a href={siteConfig.instagram}>Instagram</a>
                <a href={siteConfig.facebook}>Facebook</a>
              </div>
            </div>

            <form className="rounded-[1.75rem] bg-white/80 p-6 ring-1 ring-[color:var(--border)]">
              <h2 className="font-serif text-3xl font-semibold text-[color:var(--text)]">
                Quick enquiry
              </h2>
              <div className="mt-6 grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
                  Name
                  <input className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
                  Occasion
                  <input className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[color:var(--text)]">
                  Message
                  <textarea
                    rows={5}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft-pink)] px-4 py-3 outline-none focus:ring-4 focus:ring-[color:var(--border)]"
                  />
                </label>
              </div>
              <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">
                This form is a visual helper only. Please use WhatsApp or the
                cart checkout to send your order details.
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
