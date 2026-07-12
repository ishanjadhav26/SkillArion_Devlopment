import { createFileRoute } from "@tanstack/react-router";
import { SkillarionLayout } from "@/components/skillarion/SkillarionHome";
import { PageHero } from "./services";
import { Camera } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SkillArion Development" },
      { name: "description", content: "Moments from SkillArion workshops, events, campus visits and industry sessions." },
      { property: "og:title", content: "Gallery — SkillArion Development" },
      { property: "og:description", content: "Highlights from our workshops, events and campus programs." },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; category: "Workshops" | "Events" | "Campus" };

const ITEMS: Item[] = [
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.36 PM (1).jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.36 PM.jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.37 PM (1).jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.37 PM.jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.38 PM (1).jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.38 PM (2).jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.38 PM.jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.58 PM.jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.40 PM (1).jpeg" },
  { category: "Workshops", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.40 PM (2).jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.40 PM (3).jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.40 PM.jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.41 PM (1).jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.41 PM.jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.42 PM (1).jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.42 PM (2).jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.42 PM (3).jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.42 PM (4).jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.42 PM.jpeg" },
  { category: "Events", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.51 PM.jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (1).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (2).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (3).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (4).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (5).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (6).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (7).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (8).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (9).jpeg" },
  { category: "Campus", alt: "Gallery Image", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM.jpeg" },
];

const CATEGORIES: Array<Item["category"]> = ["Workshops", "Events", "Campus"];

function GalleryPage() {
  return (
    <SkillarionLayout>
      <GalleryContent />
    </SkillarionLayout>
  );
}

export function GalleryContent() {
  return (
    <>

      <PageHero
        eyebrow="Gallery"
        title="Moments from SkillArion"
        subtitle="A glimpse into our workshops, industry events and campus programs shaping tomorrow's engineers."
      />
      {CATEGORIES.map((cat, idx) => (
        <section
          key={cat}
          id={cat.toLowerCase()}
          className={`${idx % 2 === 0 ? "bg-background" : "bg-secondary"} py-20`}
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
                  {cat}
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{cat}</h2>
              </div>
              <Camera className="hidden h-6 w-6 text-[var(--gold)] md:block" />
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ITEMS.filter((i) => i.category === cat).map((item) => (
                <figure
                  key={item.src}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_30px_-20px_rgba(40,40,90,0.25)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-foreground/80">{item.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

