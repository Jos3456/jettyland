import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageBanner";

export const Route = createFileRoute("/career-opportunities")({
  head: () => ({ meta: [{ title: "Career Opportunities – Jettyland Investments" }] }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageBanner title="Career Opportunities" />
      <section className="container-page max-w-3xl py-16">
        <h2 className="font-display text-3xl font-bold text-ink">Join the Jettyland team</h2>
        <p className="mt-5">
          We welcome professionals with real estate experience needed across sales, marketing,
          operational, and managerial roles.
        </p>
        <p className="mt-4">
          Applicants should only contact us through{" "}
          <a
            href="mailto:jettylandinvestmentslimited@gmail.com"
            className="font-semibold text-primary"
          >
            jettylandinvestmentslimited@gmail.com
          </a>
          .
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["Sales", "Marketing", "Operations", "Managerial"].map((role) => (
            <div key={role} className="border border-line px-5 py-4 font-display font-semibold text-ink">
              {role}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
