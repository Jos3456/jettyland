import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CircleCheck,
  Home,
  KeyRound,
  Scale,
  Wallet,
} from "lucide-react";
import { whyChoose } from "@/lib/site";
import { services } from "@/lib/services";
import { latestPosts } from "@/lib/blog";
import type { Service } from "@/lib/services";

const icons: Record<Service["icon"], typeof KeyRound> = {
  key: KeyRound,
  wallet: Wallet,
  building: Building2,
  home: Home,
  scale: Scale,
};

export function ServicesIntro() {
  return (
    <section className="bg-paper py-20">
      <div className="container-page">
        <p className="font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase">
          What We Do
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold text-ink md:text-5xl">
          Our Business Solution
        </h2>
        <p className="mt-5 max-w-3xl text-body">
          Welcome to Jettyland Investments Limited, where we combine experience, professionalism,
          and a passion for real estate to deliver outstanding property services. Whether you are
          a landlord, tenant, investor, or buyer, we are committed to making your real estate
          journey simple, profitable, and stress-free.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article key={service.href} className="group text-center">
                <Link
                  to={service.href}
                  className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary text-paper shadow-[var(--shadow-card)] transition-transform duration-200 group-hover:scale-105"
                  aria-label={service.title}
                >
                  <Icon className="size-10" strokeWidth={1.6} />
                </Link>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  <Link to={service.href} className="hover:text-primary">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>
                <Link
                  to={service.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2"
                >
                  Details
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-banner py-20">
      <img src="/images/hero-3.png" alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase">
            Jettyland Investments Ltd.
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-paper md:text-5xl">
            Why Choose Us?
          </h2>
          <div className="mt-8 space-y-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="flex gap-4">
                <CircleCheck className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper">{item.title}</h3>
                  <p className="mt-1 text-sm text-paper/80">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-md">
          <img
            src="/images/about.jpg"
            alt="Jettyland Investments advisor"
            className="relative z-10 w-full object-cover"
          />
          <div className="absolute -right-3 -bottom-3 h-full w-full border-8 border-primary" />
        </div>
      </div>
    </section>
  );
}

export function ConsultationCta() {
  return (
    <section className="bg-primary-soft py-16">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Request a Schedule Consultation
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-paper px-6 py-3 font-display text-sm font-bold tracking-widest text-ink shadow-[var(--shadow-card)] transition-colors hover:bg-accent hover:text-paper"
        >
          REQUEST NOW
          <span className="inline-flex size-8 items-center justify-center rounded-full border border-accent text-accent">
            <ArrowRight className="size-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export function ExperienceBand() {
  return (
    <section className="bg-paper py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src="/images/why-bg.jpg"
            alt="Professional collaboration"
            className="h-[26rem] w-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-end gap-4">
            <span className="font-display text-7xl font-bold leading-none text-primary md:text-8xl">
              25
            </span>
            <p className="mb-2 font-display text-2xl font-bold text-ink md:text-3xl">
              We’ve Year Of Experiences
            </p>
          </div>
          <p className="mt-5 max-w-xl text-body">
            We bring more than 20 years’ senior experience forging collaborations across government
            private sector and international forums.
          </p>
        </div>
      </div>
    </section>
  );
}

export function LatestPosts() {
  return (
    <section className="bg-mist py-20">
      <div className="container-page">
        <p className="font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase">
          Blog
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold text-ink">Our Latest Posts</h2>
        <p className="mt-5 max-w-3xl text-body">
          At Jettyland Investments, we believe that informed clients make smarter property
          decisions. Our blog is your go-to source for expert tips, market insights, property
          management advice, real estate trends, and everything you need to succeed in the
          property world.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden bg-paper shadow-[var(--shadow-card)]">
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold tracking-wide text-primary"
                >
                  READ MORE
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
