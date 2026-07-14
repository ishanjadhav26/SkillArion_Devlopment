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

type Item = { src: string; alt: string; category: "Workshops" | "Events" | "Campus"; contain?: boolean };

const ITEMS: Item[] = [
  { category: "Workshops", alt: "Hands-on Workshop", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.36 PM (1).jpeg" },
  { category: "Workshops", alt: "Technical Training", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.36 PM.jpeg" },
  { category: "Workshops", alt: "Student Workshop", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.37 PM.jpeg" },
  { category: "Workshops", alt: "Workshop Session", src: "/gallery/WhatsApp Image 2026-06-29 at 6.25.58 PM.jpeg" },
  { category: "Events", alt: "Industry Event", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.40 PM (3).jpeg" },
  { category: "Events", alt: "Tech Conference", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.41 PM (1).jpeg" },
  { category: "Events", alt: "Event Highlights", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.42 PM (4).jpeg" },
  { category: "Campus", alt: "Campus Visit", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (2).jpeg" },
  { category: "Campus", alt: "College Program", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (3).jpeg" },
  { category: "Campus", alt: "Student Activities", src: "/gallery/WhatsApp Image 2026-06-29 at 6.27.53 PM (5).jpeg" },
  { category: "Workshops", alt: "Practical Session", src: "/new/WhatsApp Image 2026-07-14 at 12.52.58 PM.jpeg" },
  { category: "Workshops", alt: "Training Program", src: "/new/WhatsApp Image 2026-07-14 at 12.52.58 PM (1).jpeg" },
  { category: "Events", alt: "Corporate Seminar", src: "/new/WhatsApp Image 2026-07-14 at 12.52.58 PM (2).jpeg" },
  { category: "Events", alt: "Event Presentation", src: "/new/WhatsApp Image 2026-07-14 at 12.52.59 PM.jpeg", contain: true },
  { category: "Campus", alt: "University Partnership", src: "/new/WhatsApp Image 2026-07-14 at 12.52.59 PM (1).jpeg" },
  { category: "Campus", alt: "Campus Connect", src: "/new/WhatsApp Image 2026-07-14 at 12.53.00 PM.jpeg" },
  { category: "Campus", alt: "Student Interaction", src: "/new/WhatsApp Image 2026-07-14 at 12.53.00 PM (1).jpeg" },
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
                      className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${item.contain ? "object-contain bg-[var(--navy)]/5" : "object-cover"}`}
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

