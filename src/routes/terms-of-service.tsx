import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageBanner";
import { company } from "@/lib/site";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({ meta: [{ title: "Terms of Service – Jettyland Investments" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageBanner title="Terms of Service" />
      <article className="container-page max-w-3xl space-y-6 py-16">
        <p>
          These Terms of Service govern your use of the website and services of {company.legalName}.
          By accessing our site or engaging our team, you agree to these Terms.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">1. Services</h2>
        <p>
          We provide real estate services including letting, rent collection, property management,
          consultancy, valuation, and property sales. Specific assignments may require a written
          service agreement.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">2. Client Responsibilities</h2>
        <p>
          Clients must provide accurate, current, and complete information when engaging with our
          services. You are responsible for maintaining the confidentiality of any account
          credentials and for all activities that occur under your account.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">3. Service Agreements</h2>
        <p>
          Specific services may require a written agreement detailing the scope of work, fees, and
          other terms. These agreements must be signed before services commence and will govern the
          relationship between you and {company.legalName}.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">4. Fees and Payment</h2>
        <p>
          All fees for services will be outlined clearly prior to engagement. Payments must be made
          according to the agreed-upon schedule. Late payments may result in additional charges or
          suspension of services.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">5. Property Listings and Information</h2>
        <p>
          While we strive to ensure all property listings and valuations are accurate and
          up-to-date, we do not guarantee the accuracy, completeness, or reliability of any listing
          or valuation data. Clients and users are encouraged to independently verify any
          information before making decisions.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">6. Limitation of Liability</h2>
        <p>
          {company.legalName} shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or related to your use of our services or website.
          Our total liability will not exceed the amount paid by you for the services in question.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">7. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of Kenya. Any disputes shall be resolved
          in the courts of Mombasa.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">8. Contact Us</h2>
        <p>
          {company.phoneDisplay}
          <br />
          {company.email}
          <br />
          {company.address}
        </p>
      </article>
    </>
  );
}
