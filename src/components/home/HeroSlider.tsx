import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const slides = [
  {
    src: "/images/hero-3.png",
    alt: "Jettyland Investments - Property & Real Estate",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Jettyland Investments - Commercial & Residential Properties",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Jettyland Investments - Real Estate Advisory",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[65vh] min-h-[520px] max-h-[780px] w-full overflow-hidden bg-black lg:h-[75vh]">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={cn(
            "absolute inset-0 size-full transition-opacity duration-1000 ease-in-out",
            i === active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          )}
        >
          <img
            src={s.src}
            alt={s.alt}
            className="size-full object-cover"
          />
        </div>
      ))}

      {/* Subtle bottom gradient to blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {/* Vertical numeric dotnav on right side — matches reference dragon slider */}
      <nav
        aria-label="Slider navigation"
        className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "group flex items-center gap-2 text-xs font-bold transition-all",
              i === active ? "text-white" : "text-white/60 hover:text-white"
            )}
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className={cn(
                "block size-2 rounded-full transition-all duration-300",
                i === active
                  ? "bg-accent scale-125"
                  : "bg-white/60 group-hover:bg-white"
              )}
            />
            <span className={cn("tracking-widest", i === active ? "font-bold text-white" : "text-white/70")}>
              0{i + 1}
            </span>
          </button>
        ))}
      </nav>

      {/* Prev / Next controls */}
      <div className="absolute inset-y-0 left-4 z-30 flex items-center">
        <button
          type="button"
          onClick={() => setActive((i) => (i - 1 + slides.length) % slides.length)}
          className="flex size-11 items-center justify-center rounded-full bg-black/30 text-white/80 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-30 flex items-center md:right-16">
        <button
          type="button"
          onClick={() => setActive((i) => (i + 1) % slides.length)}
          className="flex size-11 items-center justify-center rounded-full bg-black/30 text-white/80 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </section>
  );
}
