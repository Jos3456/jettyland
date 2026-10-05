import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/home/HeroSlider";
import {
  CtaAndExperience,
  LatestPosts,
  ServicesIntro,
  VideoBand,
  WhyChooseUs,
} from "@/components/home/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Jettyland Investments – Your Partner in Real Estate" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. Full-screen hero slider (image only with side dotnav) */}
      <HeroSlider />
      {/* 2. "Our Business Solution" — 5 white info-style9 service cards */}
      <ServicesIntro />
      {/* 3. "Why Choose Us?" — 2-col checklist + advisor photo with decorative SVGs */}
      <WhyChooseUs />
      {/* 4. Video section — clean pulsing play button */}
      <VideoBand />
      {/* 5. CTA + Experience section — side-by-side 2-col */}
      <CtaAndExperience />
      {/* 6. Latest blog posts — 3 cards matching reference */}
      <LatestPosts />
    </>
  );
}
