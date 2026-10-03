import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageBanner";
import { company } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy – Jettyland Investments" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <article className="container-page max-w-3xl space-y-6 py-16">
        <p>
          At {company.legalName} (“we,” “us,” or “our”), we are committed to protecting your
          privacy. This Privacy Policy outlines how we collect, use, and protect your personal
          information when you visit our website or use our services.
        </p>
        <p>By using our services, you agree to the collection and use of information in accordance with this policy.</p>
        <h2 className="font-display text-2xl font-bold text-ink">1. Information We Collect</h2>
        <p>We collect the following types of personal information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Personal Identification Information: Name, email address, phone number, and mailing address.</li>
          <li>Transaction Information: Payment details, billing address, and transaction history related to services we provide.</li>
          <li>Website Usage Data: IP address, browser type, device information, and other details about how you interact with our website.</li>
          <li>Cookies: We may use cookies to improve your experience on our website and analyze website traffic.</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-ink">2. How We Use Your Information</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To provide, operate, and maintain our services.</li>
          <li>To communicate with you, including responding to inquiries, service updates, or marketing communications (with your consent).</li>
          <li>To process transactions and manage billing.</li>
          <li>To improve our website and services based on user feedback and behavior.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-ink">3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. However, we may share
          your information with trusted service providers, when required by law, or in the event of
          a business transfer.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information from
          unauthorized access, alteration, or disclosure. However, no method of transmission over
          the internet is completely secure, and we cannot guarantee absolute security.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">5. Your Rights</h2>
        <p>
          You may have the right to access, correct, or request deletion of personal data we hold
          about you, and to opt out of marketing communications. Contact us using the details below
          to exercise these rights.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">6. Contact Us</h2>
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
