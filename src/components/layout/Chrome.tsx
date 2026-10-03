import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronsUp, X } from "lucide-react";
import { services } from "@/lib/services";

export function Chrome() {
  const [showTop, setShowTop] = useState(false);
  const [panel, setPanel] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setPanel(true)}
        className="what-we-do-tab fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 bg-primary px-2 py-4 font-display text-xs font-bold tracking-[0.2em] text-paper shadow-[var(--shadow-nav)] transition-colors hover:bg-primary-dark md:block"
      >
        WHAT WE DO
      </button>

      {panel ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-ink/50"
            aria-label="Close"
            onClick={() => setPanel(false)}
          />
          <aside className="absolute inset-y-0 right-0 w-[min(100%,22rem)] bg-paper p-6 shadow-[var(--shadow-nav)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink">What We Do</h2>
              <button
                type="button"
                onClick={() => setPanel(false)}
                className="inline-flex size-9 items-center justify-center"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    onClick={() => setPanel(false)}
                    className="block border-b border-line py-3 font-display font-semibold text-ink transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      ) : null}

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-1 bg-primary px-3 py-2 font-display text-xs font-bold tracking-widest text-paper shadow-[var(--shadow-nav)] transition-colors hover:bg-primary-dark"
          aria-label="Back to top"
        >
          <ChevronsUp className="size-4" />
          TOP
        </button>
      ) : null}
    </>
  );
}
