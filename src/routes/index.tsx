import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/home/HeroSlider";
import {
  ConsultationCta,
  ExperienceBand,
  LatestPosts,
  ServicesIntro,
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
      <HeroSlider />
      <ServicesIntro />
      <WhyChooseUs />
      <ConsultationCta />
      <ExperienceBand />
      <LatestPosts />
    </>
  );
}
