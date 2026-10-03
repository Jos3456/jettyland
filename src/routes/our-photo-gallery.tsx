import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import { galleryImages } from "@/lib/site";

export const Route = createFileRoute("/our-photo-gallery")({
  head: () => ({ meta: [{ title: "Our Photo Gallery – Jettyland Investments" }] }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? galleryImages[active] : null;

  return (
    <>
      <PageBanner title="Our Photo Gallery" />
      <section className="container-page py-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className="overflow-hidden"
              onClick={() => setActive(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-52"
              />
            </button>
          ))}
        </div>
      </section>
      {current ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close gallery"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 max-h-[90vh] max-w-5xl">
            <button
              type="button"
              className="absolute -top-10 right-0 text-paper"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="size-7" />
            </button>
            <img src={current.src} alt={current.alt} className="max-h-[85vh] w-auto object-contain" />
            <p className="mt-3 text-center text-sm text-paper">{current.alt}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
