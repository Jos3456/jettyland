import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageBanner";
import { coreValues } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () => ({ meta: [{ title: "About Us – Jettyland Investments" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <section className="container-page grid items-start gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            About Jettyland Investments
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink">
            Your Trusted Partner in Property Solutions
          </h2>
          <p className="mt-6">
            Jettyland Investments Limited is a full-service real estate company specializing in
            House and Apartment Letting, Rent Collection, Property Management, Consultancy and
            Valuation, and Property Sales.
          </p>
          <p className="mt-4">
            Based in Mombasa, we have built a reputation for delivering reliable, client-focused
            services tailored to meet the unique needs of every property owner and investor we
            work with.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-l-4 border-primary bg-fog p-5">
              <h3 className="font-display text-xl font-bold text-ink">Mission</h3>
              <p className="mt-2 text-sm">
                To provide exceptional real estate services by prioritizing integrity, innovative
                solutions and customer satisfaction, ensuring that every client navigates their
                property journeys with ease and confidence.
              </p>
            </div>
            <div className="border-l-4 border-primary bg-fog p-5">
              <h3 className="font-display text-xl font-bold text-ink">Vision</h3>
              <p className="mt-2 text-sm">
                To be the most trusted and innovative real estate company, known for transforming
                the property experience by creating exceptional value and positive experiences for
                every community we serve.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/images/about.jpg" alt="Jettyland Investments" className="w-full object-cover" />
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold text-ink">Company Core Values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {coreValues.map((v) => (
              <article key={v.title} className="bg-paper p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-bold text-primary">{v.title}</h3>
                <p className="mt-3 text-sm">{v.text}</p>
              </article>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex bg-primary px-6 py-3 font-display text-sm font-semibold text-paper hover:bg-primary-dark"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </>
  );
}
