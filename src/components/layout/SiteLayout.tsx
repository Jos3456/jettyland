import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Chrome } from "./Chrome";
import { ScrollToTop } from "./ScrollToTop";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chrome />
    </div>
  );
}
