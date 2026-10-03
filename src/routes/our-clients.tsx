import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Home, Landmark, Users } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";

const audiences = [
  {
    title: "Landlords & Property Owners",
    icon: Home,
    text: "From single apartments in Nyali to multi-unit portfolios across Mombasa, we let, collect rent, and manage properties so owners can enjoy reliable income without the day-to-day strain.",
  },
  {
    title: "Tenants & Families",
    icon: Users,
    text: "We match qualified tenants with well-maintained homes and professional lease management — so moving in is smooth, fair, and clearly documented.",
  },
  {
    title: "Investors",
    icon: Landmark,
    text: "Buyers and investors use our valuations, market research, and sales advisory to price correctly, enter the right neighbourhoods, and protect long-term returns.",
  },
  {
    title: "Corporate Occupiers",
    icon: Building2,
    text: "Companies relocating staff or securing offices in Mombasa rely on us for discreet searches, negotiations, and ongoing property care.",
  },
];

export const Route = createFileRoute("/our-clients")({
  head: () => ({ meta: [{ title: "Our Clients – Jettyland Investments" }] }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <PageBanner title="Our Clients" />
      <section className="container-page py-16">
        <p className="max-w-3xl">
          Jettyland Investments Limited works with property owners, tenants, investors, and
          organisations who want a professional, Mombasa-based partner. Every brief is handled
          with the same standard: clear communication, careful screening, and outcomes that
          protect the asset.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border border-line p-7">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-paper">
                  <Icon className="size-6" />
                </div>
                <h2 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm">{item.text}</p>
              </article>
            );
          })}
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex bg-primary px-6 py-3 font-display text-sm font-semibold text-paper hover:bg-primary-dark"
        >
          Become a Client
        </Link>
      </section>
    </>
  );
}
