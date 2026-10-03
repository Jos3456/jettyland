import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Our Services – Jettyland Investments" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />
      <section className="container-page py-16">
        <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Jettyland Investments
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold text-ink">
          What Services we Provide for Our Customers
        </h2>
        <p className="mt-5 max-w-3xl">
          Our agency is only as strong as our people. From letting and rent collection to
          management, sales, consultancy and valuation, we run every brief with the same
          professional standard for landlords, tenants, investors, and buyers in Mombasa.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.href} className="border border-line bg-paper p-6 shadow-[var(--shadow-card)]">
              <img src={s.image} alt="" className="mb-5 h-44 w-full object-cover" />
              <h3 className="font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm">{s.short}</p>
              <Link
                to={s.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Details <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
