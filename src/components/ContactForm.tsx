import { useState, type FormEvent } from "react";

type Status = "idle" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const first = String(data.get("firstName") ?? "").trim();
    const last = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    if (!first || !last || !email || !phone || !subject) {
      setError("Please complete all required fields.");
      return;
    }
    setError("");
    setStatus("sent");
    e.currentTarget.reset();
  }

  if (status === "sent") {
    return (
      <div className="border border-primary bg-primary-soft p-8">
        <h3 className="font-display text-2xl font-bold text-ink">Thank you</h3>
        <p className="mt-3">
          Your message has been received. A member of the Jettyland Investments team will get back
          to you shortly.
        </p>
        <button
          type="button"
          className="mt-6 bg-primary px-5 py-2.5 font-display text-sm font-semibold text-paper hover:bg-primary-dark"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input className={field} name="firstName" placeholder="First Name*" required />
      <input className={field} name="lastName" placeholder="Last Name*" required />
      <input className={field} name="email" type="email" placeholder="Email*" required />
      <input className={field} name="phone" type="tel" placeholder="Phone*" required />
      <input className={`${field} sm:col-span-2`} name="subject" placeholder="Subject*" required />
      <textarea
        className={`${field} min-h-36 sm:col-span-2`}
        name="comments"
        placeholder="Comments"
        rows={6}
      />
      {error ? <p className="sm:col-span-2 text-sm text-accent">{error}</p> : null}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wide text-paper hover:bg-primary-dark"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
