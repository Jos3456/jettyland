import { Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageBanner";

export function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" />
      <section className="container-page py-20 text-center">
        <p className="mx-auto max-w-xl text-muted">
          The page you are looking for is not available. Return home or contact our Mombasa office
          and we will be happy to help.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wide text-paper hover:bg-primary-dark"
        >
          Back to Home
        </Link>
      </section>
    </>
  );
}
