import { Link } from "@tanstack/react-router";
import { CheckCircle2, Play, Megaphone, Wallet, Building2, Calculator, Target } from "lucide-react";
import { whyChoose } from "@/lib/site";
import { services } from "@/lib/services";
import { latestPosts } from "@/lib/blog";

// Orange circle arrow SVG from reference site
function CircleArrow({ className = "fill-[#fa360a]" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        className={className}
        d="M11.998,23.997 C5.381,23.997 -0.001,18.614 -0.001,11.998 C-0.001,5.382 5.381,-0.001 11.998,-0.001 C18.614,-0.001 23.997,5.382 23.997,11.998 C23.997,18.614 18.614,23.997 11.998,23.997 ZM11.998,2.181 C6.584,2.181 2.180,6.585 2.180,11.998 C2.180,17.412 6.584,21.815 11.998,21.815 C17.411,21.815 21.815,17.412 21.815,11.998 C21.815,6.585 17.411,2.181 11.998,2.181 ZM17.368,12.415 C17.312,12.548 17.232,12.669 17.131,12.770 L12.769,17.132 C12.556,17.346 12.277,17.452 11.998,17.452 C11.718,17.452 11.439,17.346 11.226,17.132 C10.800,16.706 10.800,16.016 11.226,15.590 L13.728,13.089 L7.634,13.089 C7.032,13.089 6.543,12.600 6.543,11.998 C6.543,11.396 7.032,10.907 7.634,10.907 L13.728,10.907 L11.226,8.406 C10.800,7.980 10.800,7.289 11.226,6.863 C11.652,6.437 12.343,6.437 12.769,6.863 L17.131,11.226 C17.232,11.327 17.312,11.447 17.368,11.581 C17.478,11.848 17.478,12.148 17.368,12.415 Z"
      />
    </svg>
  );
}

// Icons matching reference flaticon choices
const serviceIcons = [
  Megaphone,  // Letting Services (flaticon-promotion)
  Wallet,     // Rent Collection (flaticon-budget)
  Building2,  // Property Management (flaticon-money-bag)
  Calculator, // Property Sales (flaticon-calculator)
  Target,     // Consultancy & Valuation (flaticon-target)
];

/* ─── 1. Services photo-cards — Faithful recreation of Finbuzz info-style9 ─── */
export function ServicesIntro() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="container-page">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold tracking-[0.22em] text-accent uppercase">
              WHAT WE DO
            </span>
            <span className="h-0.5 w-8 bg-accent" />
            <span className="h-0.5 w-3 bg-primary" />
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Our Business Solution
          </h2>
          <p className="mt-4 max-w-3xl text-base text-body leading-relaxed">
            Welcome to Jettyland Investments Limited, where we combine experience, professionalism,
            and a passion for real estate to deliver outstanding property services. Whether you are
            a landlord, tenant, investor, or buyer, we are committed to making your real estate
            journey simple, profitable, and stress-free.
          </p>
        </div>

        {/* 5-column info-style9 cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => {
            const IconComp = serviceIcons[i % serviceIcons.length];
            return (
              <article
                key={service.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[10px] border border-[#dedede] bg-white p-7 text-center transition-all duration-300 min-h-[460px] shadow-sm hover:border-transparent hover:shadow-2xl"
              >
                {/* Background image & dark overlay — hidden normally, reveals on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="size-full object-cover grayscale opacity-0 scale-100 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content wrapper */}
                <div className="relative z-10 flex flex-col items-center justify-between size-full">
                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-ink transition-colors duration-300 group-hover:text-white">
                    <Link to={service.href} className="hover:text-accent">
                      {service.title}
                    </Link>
                  </h3>

                  {/* Icon with expanding decorative corner dots */}
                  <div className="my-6 relative flex items-center justify-center">
                    {/* 4 corner animated element dots */}
                    <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fa360a] opacity-0 transition-all duration-500 group-hover:-top-3 group-hover:-left-3 group-hover:opacity-100" />
                    <span className="absolute top-1/2 right-1/2 size-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fa360a] opacity-0 transition-all duration-500 group-hover:-top-3 group-hover:-right-3 group-hover:opacity-100" />
                    <span className="absolute bottom-1/2 left-1/2 size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#fa360a] opacity-0 transition-all duration-500 group-hover:-bottom-3 group-hover:-left-3 group-hover:opacity-100" />
                    <span className="absolute bottom-1/2 right-1/2 size-2 translate-x-1/2 translate-y-1/2 rounded-full bg-[#fa360a] opacity-0 transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3 group-hover:opacity-100" />

                    <div className="text-primary transition-colors duration-300 group-hover:text-white">
                      <IconComp className="size-14" strokeWidth={1.4} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted line-clamp-3 transition-colors duration-300 group-hover:text-white/90">
                    {service.short}
                  </p>

                  {/* Details Button with circle arrow */}
                  <div className="mt-6">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-2 text-sm font-semibold text-ink transition-all duration-300 group-hover:bg-[#fa360a] group-hover:text-white group-hover:border-[#fa360a]"
                    >
                      Details
                      <CircleArrow className="fill-[#fa360a] group-hover:fill-white transition-colors duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── 2. Why Choose Us — 2-column with checklist & advisor image with decorative SVGs ─── */
export function WhyChooseUs() {
  return (
    <section className="bg-[#f9fbf8] py-20 lg:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        {/* Left: checklist */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold tracking-[0.22em] text-accent uppercase">
              JETTYLAND INVESTMENTS LTD.
            </span>
            <span className="h-0.5 w-8 bg-accent" />
            <span className="h-0.5 w-3 bg-primary" />
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
          <div className="mt-8 space-y-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 size-6 shrink-0 text-primary" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    <span className="hover:text-primary transition-colors cursor-pointer">{item.title}</span>
                  </h3>
                  <p className="mt-1 text-sm text-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait image with decorative shapes */}
        <div className="relative mx-auto max-w-sm lg:max-w-md">
          {/* Decorative orange triangle / quarter circle (top-left) */}
          <svg
            className="absolute -top-7 -left-7 z-0 hidden sm:block"
            width="100"
            height="100"
            viewBox="0 0 121 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21.2511 99.7486C48.5878 127.085 92.9093 127.085 120.246 99.7486L21.2511 0.753672C-6.08564 28.0904 -6.08564 72.4119 21.2511 99.7486Z"
              fill="#FA360A"
            />
          </svg>

          {/* Decorative wavy lines (bottom-right) */}
          <svg
            className="absolute -right-6 -bottom-6 z-0 hidden sm:block"
            width="110"
            height="71"
            viewBox="0 0 110 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M1.07129 1.06494C11.757 1.06494 11.757 8.16494 22.4427 8.16494C33.1284 8.16494 33.1284 1.06494 43.8284 1.06494C54.5284 1.06494 54.5284 8.16494 65.2141 8.16494C75.9141 8.16494 75.9141 1.06494 86.5999 1.06494C97.2856 1.06494 97.2999 8.16494 107.986 8.16494" stroke="#FE5313" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M1.07129 21.229C11.757 21.229 11.757 28.329 22.4427 28.329C33.1284 28.329 33.1284 21.229 43.8284 21.229C54.5284 21.229 54.5284 28.329 65.2141 28.329C75.9141 28.329 75.9141 21.229 86.5999 21.229C97.2856 21.229 97.2999 28.329 107.986 28.329" stroke="#FE5313" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M1.07129 41.3931C11.757 41.3931 11.757 48.4931 22.4427 48.4931C33.1284 48.4931 33.1284 41.3931 43.8284 41.3931C54.5284 41.3931 54.5284 48.4931 65.2141 48.4931C75.9141 48.4931 75.9141 41.3931 86.5999 41.3931C97.2856 41.3931 97.2999 48.4931 107.986 48.4931" stroke="#FE5313" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M1.07129 61.571C11.757 61.571 11.757 68.671 22.4427 68.671C33.1284 68.671 33.1284 61.571 43.8284 61.571C54.5284 61.571 54.5284 68.671 65.2141 68.671C75.9141 68.671 75.9141 61.571 86.5999 61.571C97.2856 61.571 97.2999 68.671 107.986 68.671" stroke="#FE5313" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>

          {/* Portrait photo */}
          <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
            <img
              src="/images/about.jpg"
              alt="Jettyland Investments professional advisor"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. Video Band — Clean centered pulsing play button ───────────────────── */
export function VideoBand() {
  return (
    <section className="relative isolate flex min-h-[380px] lg:min-h-[460px] items-center justify-center overflow-hidden py-24">
      {/* Background image */}
      <img
        src="/images/hero-2.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
        aria-hidden="true"
      />
      {/* Subtle overlay matching reference opacity .23 */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Pulsing play button */}
      <div className="relative z-10 flex items-center justify-center">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Play video"
          className="group relative flex size-20 sm:size-24 items-center justify-center rounded-full bg-white text-accent shadow-2xl transition-transform duration-300 hover:scale-110"
        >
          {/* Outer pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-white/40 animate-ping pointer-events-none" />
          <span className="absolute -inset-3 rounded-full border border-white/60 pointer-events-none" />
          <Play className="size-8 sm:size-9 fill-current pl-1 text-[#fa360a]" />
        </a>
      </div>
    </section>
  );
}

/* ─── 4. CTA & Experience Section — Side-by-Side 2-column (matches reference Section 8) ─── */
export function CtaAndExperience() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-2 items-center">
        {/* Left: Green CTA Box */}
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 sm:p-10 lg:p-12 text-white shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute -right-12 -top-12 size-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-start justify-between min-h-[220px]">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white">
              Request a Schedule Consultation
            </h2>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded bg-white px-7 py-3.5 font-display text-sm font-bold tracking-wider text-ink transition-all duration-300 hover:bg-[#fa360a] hover:text-white"
              >
                REQUEST NOW
                <CircleArrow className="fill-[#fa360a] group-hover:fill-white transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: 25 Years of Experience Box */}
        <div className="flex flex-col justify-center px-4 sm:px-8">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="font-display text-7xl sm:text-8xl font-black leading-none text-primary">
              25
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              We&apos;ve Year Of Experiences
            </h3>
          </div>
          <p className="mt-5 max-w-lg text-base text-body leading-relaxed">
            We bring more than 20 years’ senior experience forging collaborations across government
            private sector and international forums.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. Latest Posts — 3 blog post cards in reference order ─────────────────── */
export function LatestPosts() {
  return (
    <section className="bg-[#f8f8f8] py-20 lg:py-24">
      <div className="container-page">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold tracking-[0.22em] text-accent uppercase">
              BLOG
            </span>
            <span className="h-0.5 w-8 bg-accent" />
            <span className="h-0.5 w-3 bg-primary" />
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Our Latest Posts
          </h2>
          <p className="mt-4 max-w-3xl text-base text-body leading-relaxed">
            At Jettyland Investments, we believe that informed clients make smarter property
            decisions. Our blog is your go-to source for expert tips, market insights, property
            management advice, real estate trends, and everything you need to succeed in the
            property world.
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-primary">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-accent transition-colors hover:text-accent-hover"
                  >
                    READ MORE
                    <CircleArrow className="fill-[#fa360a]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
