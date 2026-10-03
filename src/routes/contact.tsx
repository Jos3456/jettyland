import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact – Jettyland Investments" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageBanner title="Contact" />
      <section className="container-page grid gap-6 py-16 md:grid-cols-3">
        <article className="border border-line p-8 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-paper">
            <Mail className="size-7" />
          </div>
          <h2 className="mt-5 font-display text-xl font-bold text-ink">Mail for information</h2>
          <a href={`mailto:${company.email}`} className="mt-3 block text-sm hover:text-primary">
            {company.email}
          </a>
          <a href={`mailto:${company.emailAlt}`} className="mt-1 block text-sm hover:text-primary">
            {company.emailAlt}
          </a>
        </article>
        <article className="border border-line p-8 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-paper">
            <Phone className="size-7" />
          </div>
          <h2 className="mt-5 font-display text-xl font-bold text-ink">Office Phone Number</h2>
          {company.phones.map((p) => (
            <a key={p.href} href={`tel:${p.href}`} className="mt-1 block text-sm hover:text-primary">
              {p.display}
            </a>
          ))}
        </article>
        <article className="border border-line p-8 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-paper">
            <MapPin className="size-7" />
          </div>
          <h2 className="mt-5 font-display text-xl font-bold text-ink">Our Location</h2>
          <p className="mt-3 text-sm">{company.address}</p>
        </article>
      </section>
      <section className="bg-mist py-16">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">We Love To Hear From You</h2>
            <p className="mt-3 text-muted">Please call or email us, we will be happy to assist you.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
