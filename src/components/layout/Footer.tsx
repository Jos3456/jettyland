import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, footerQuickLinks } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-muted">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/images/logo-light.png" alt={company.name} className="mb-5 h-12 w-auto" />
          <p className="text-sm leading-relaxed">
            Whether you are a landlord, tenant, investor, or buyer, we are committed to making
            your real estate journey simple, profitable, and stress-free.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-paper">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-paper">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`tel:${company.phoneHref}`} className="hover:text-primary">
                {company.footerPhones}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${company.email}`} className="hover:text-primary">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-paper">Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link to={s.href} className="transition-colors hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex items-center justify-center gap-6 py-5">
          <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          <p className="text-center text-sm">{company.copyright}</p>
          <span className="hidden h-px flex-1 bg-white/10 sm:block" />
        </div>
      </div>
    </footer>
  );
}
