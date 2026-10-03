import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Calendar, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { company, mainNav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-line bg-paper text-sm text-muted lg:block">
        <div className="container-page flex items-center justify-between gap-6 py-2.5">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" strokeWidth={2} />
            <span>{company.address}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors duration-150 hover:text-primary"
            >
              <Mail className="size-4 text-primary" strokeWidth={2} />
              {company.email}
            </a>
            <a
              href={`tel:${company.phoneHref}`}
              className="flex items-center gap-2 transition-colors duration-150 hover:text-primary"
            >
              <Phone className="size-4 text-primary" strokeWidth={2} />
              {company.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-4 py-2 font-display text-sm font-semibold tracking-wide text-paper transition-colors duration-150 hover:bg-accent-hover"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className={cn("bg-paper", stuck && "shadow-[var(--shadow-nav)]")}>
        <div className="container-page flex items-center justify-between gap-6 py-3 lg:py-4">
          <Link to="/" className="shrink-0" aria-label={company.name}>
            <img src="/images/logo.png" alt={company.name} className="h-12 w-auto lg:h-14" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-8" aria-label="Primary">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 font-display text-[15px] font-semibold tracking-wide transition-colors duration-150",
                      isActive(item.href) || item.children.some((c) => isActive(c.href))
                        ? "text-primary"
                        : "text-ink hover:text-primary",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5" />
                  </button>
                  <div className="invisible absolute top-full left-0 z-50 min-w-60 origin-top pt-3 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="overflow-hidden rounded-md border border-line bg-paper py-2 shadow-[var(--shadow-nav)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-primary-soft hover:text-primary",
                              isActive(child.href) ? "text-primary" : "text-body",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "font-display text-[15px] font-semibold tracking-wide transition-colors duration-150",
                    isActive(item.href) ? "text-primary" : "text-ink hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/50"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-paper shadow-[var(--shadow-nav)]">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <img src="/images/logo.png" alt="" className="h-10 w-auto" />
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobile">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-line">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 font-display text-base font-semibold text-ink"
                      onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-150",
                          openSub === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {openSub === item.label ? (
                      <ul className="pb-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              className="block px-5 py-2.5 text-sm text-body hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block border-b border-line px-3 py-3 font-display text-base font-semibold",
                      isActive(item.href) ? "text-primary" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <div className="space-y-2 border-t border-line p-4 text-sm">
              <a href={`tel:${company.phoneHref}`} className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                {company.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-accent px-4 py-3 font-display font-semibold text-paper"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
