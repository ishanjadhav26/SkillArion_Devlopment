import { createFileRoute, Link } from "@tanstack/react-router";
import { SkillarionLayout } from "@/components/skillarion/SkillarionHome";
import { PageHero } from "./services";
import {
  Brain,
  TrendingUp,
  Users,
  ShieldCheck,
  Network,
  Sparkles,
  Briefcase,
  Building2,
  Globe2,
  Code,
  Factory,
  HardHat,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Zap,
  Camera,
  ArrowRight,
  MessageSquare,
  FileText,
  Handshake,
  Rocket,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — SkillArion Development" },
      { name: "description", content: "120+ industry and academic partners working with SkillArion across India." },
      { property: "og:title", content: "Partners — SkillArion Development" },
      { property: "og:description", content: "Industry partnerships, MoUs and approvals." },
    ],
  }),
  component: PartnersPage,
});

const CATEGORIES = [
  {
    icon: Code,
    title: "Technology Companies",
    desc: "Leading tech firms providing internships, live projects, and placement opportunities.",
  },
  {
    icon: Building2,
    title: "Educational Institutions",
    desc: "Partner colleges and universities for curriculum collaboration and student development.",
  },
  {
    icon: Globe2,
    title: "Global Industries",
    desc: "International companies offering exposure to global work environments.",
  },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Boost NAAC/NIRF Rankings",
    desc: "Enhance your institution's rankings through industry collaborations and placement records.",
  },
  {
    icon: Users,
    title: "Access to Skilled Talent",
    desc: "Companies get pre-vetted, job-ready candidates trained on the latest tools and technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "All programs follow higher education standards to ensure quality learning and industry relevance.",
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Visible co-branded partnerships with proper documentation and agreements.",
  },
  {
    icon: Sparkles,
    title: "Live Pipeline",
    desc: "Continuous flow of new talent into your projects and teams.",
  },
  {
    icon: Briefcase,
    title: "Industry Development",
    desc: "Training programs are continuously updated with industry trends.",
  },
];

const DOMAINS = [
  { icon: Code, name: "IT & Software", count: "40+" },
  { icon: Factory, name: "Manufacturing", count: "25+" },
  { icon: HardHat, name: "Construction & Infrastructure", count: "15+" },
  { icon: HeartPulse, name: "Healthcare", count: "10+" },
  { icon: ShoppingBag, name: "E-Commerce & Retail", count: "12+" },
  { icon: Landmark, name: "Banking & Finance", count: "8+" },
  { icon: Zap, name: "Energy", count: "5+" },
  { icon: Camera, name: "Events & Media", count: "3+" },
];

const STEPS = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Initial Discussion",
    desc: "Share your needs and explore how we can collaborate to achieve mutual goals.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Proposal & MoU",
    desc: "Receive a customized proposal and a formal MoU outlining the partnership.",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Agreement & Onboarding",
    desc: "Sign the partnership agreement and complete the onboarding process.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & Execute",
    desc: "Begin the collaboration with staffing, training, projects, and placement drives.",
  },
];

const TESTIMONIALS = [
  {
    q: "SkillArion has been an outstanding partner for our talent pipeline. Their students arrive trained, motivated, and ready to contribute from day one.",
    name: "Tech Solutions Partner",
    role: "HRD",
  },
  {
    q: "The MoU framework gave our college a clear path to improve placements and ranking. Parenting (mentoring) visits have been transformative for our students.",
    name: "Partner College Principal",
    role: "Academic Partner",
  },
  {
    q: "Working with SkillArion on global projects has brought real industry exposure to our team. A truly collaborative partnership.",
    name: "Global Industry Partner",
    role: "Operations Lead",
  },
];

function PartnersPage() {
  return (
    <SkillarionLayout>
      <PartnersContent />
    </SkillarionLayout>
  );
}

export function PartnersContent() {
  return (
    <>

      <PageHero
        eyebrow="Our Partners"
        title="Partnering for a Stronger Future"
        subtitle="120+ industry leaders, academic institutions and global companies working with us to bridge the gap between learning and employment."
      />


      {/* 120+ Categories */}
      <section id="partners" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Our Ecosystem
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">120+ Industry Partners</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              We collaborate with leading companies across various industries to provide students with real-world
              exposure and career opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-card p-7 text-center transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section id="benefits" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Why Partner with Us
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Partnership Benefits</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Mutual growth through strategic collaboration—benefits for institutions and companies alike.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section id="domains" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Industry Coverage
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Domains We Cover</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Our partners span across diverse industries, providing students with varied career opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {DOMAINS.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <d.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-3xl font-semibold text-[var(--gold)]">{d.count}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{d.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section id="process" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              How It Works
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Partnership Process</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              A simple, streamlined process to become our partner in just four steps.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="relative h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)] text-[var(--navy-deep)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-4xl font-bold text-[var(--gold)]/20">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[var(--gold)]/50 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Partner Voices
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">What Our Partners Say</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Hear from institutions and companies who have partnered with us.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.q}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] p-10 text-white md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
            <div className="relative text-center">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Become a Partner Today
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-white/75">
                Whether you're an educational institution looking to enhance student outcomes or a company seeking
                skilled talent—we're ready to collaborate.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-[0_12px_30px_-10px_rgba(201,168,76,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

