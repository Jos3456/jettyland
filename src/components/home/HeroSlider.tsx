import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const slides = [
  { src: "/images/hero-3.png", alt: "Aerial view of Nyali and the Mombasa coastline" },
  { src: "/images/hero-1.jpg", alt: "Beachfront residence along the Kenyan coast" },
  { src: "/images/hero-2.jpg", alt: "Palm-lined coastal property in Mombasa" },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[28rem] overflow-hidden bg-banner md:h-[78vh]">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={cn("size-full object-cover", i === index && "hero-ken")}
          />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink/40 to-transparent" />

      <button
        type="button"
        className="absolute top-1/2 left-4 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink transition-colors hover:bg-primary hover:text-paper md:inline-flex"
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink transition-colors hover:bg-primary hover:text-paper md:inline-flex"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        aria-label="Next slide"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-8 bg-primary" : "w-2 bg-paper/70",
            )}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
