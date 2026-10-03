import { Link } from "@tanstack/react-router";
import { CircleCheck } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import type { Service } from "@/lib/services";

export function ServiceView({ service }: { service: Service }) {
  return (
    <>
      <PageBanner title={service.title} />
      <article className="container-page grid items-start gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            {service.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
            {service.headline}
          </h2>
          <div className="mt-6 space-y-4">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 font-display text-2xl font-bold text-ink">{service.includesTitle}</h3>
          <ul className="mt-5 space-y-5">
            {service.includes.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-paper">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink">{item.title}</h4>
                  <p className="mt-1 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-display text-2xl font-bold text-ink">{service.whyTitle}</h3>
          <ul className="mt-5 space-y-4">
            {service.why.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CircleCheck className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-display font-semibold text-ink">{item.title}:</h4>
                  <p className="text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-display text-2xl font-bold text-ink">{service.closingTitle}</h3>
          <div className="mt-4 space-y-4">
            {service.closing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {service.ctaTitle ? (
            <div className="mt-10 border-l-4 border-primary bg-primary-soft p-6">
              <h4 className="font-display text-xl font-bold text-ink">{service.ctaTitle}</h4>
              <p className="mt-2 text-sm">{service.ctaText}</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex bg-primary px-5 py-2.5 font-display text-sm font-semibold text-paper hover:bg-primary-dark"
              >
                Contact Us
              </Link>
            </div>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-28">
          <img src={service.image} alt="" className="w-full object-cover" />
          <div className="mt-6 bg-fog p-6">
            <h3 className="font-display text-lg font-bold text-ink">Talk to our team</h3>
            <p className="mt-2 text-sm">
              Based in Mombasa. Call or email us for a confidential consultation.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex bg-accent px-5 py-2.5 font-display text-sm font-semibold text-paper hover:bg-accent-hover"
            >
              Request a Consultation
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}
