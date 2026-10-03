import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site";

export function PageBanner({
  title,
  crumbs,
}: {
  title: string;
  crumbs?: { label: string; href?: string }[];
}) {
  const trail = crumbs ?? [{ label: title }];
  return (
    <section className="relative isolate flex min-h-64 items-center overflow-hidden bg-banner py-16 md:min-h-80">
      <img
        src="/images/hero-1.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="container-page relative z-10">
        <h1 className="font-display text-4xl font-bold text-paper md:text-5xl">{title}</h1>
        <nav className="mt-3 text-sm text-paper/90" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">
            {company.name}
          </Link>
          {trail.map((c) => (
            <span key={c.label}>
              <span className="px-2">-</span>
              {c.href ? (
                <Link to={c.href} className="hover:text-primary">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
