import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SkillarionLayout } from "@/components/skillarion/SkillarionHome";
import {
  Cpu,
  Users,
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
  Brain,
  Atom,
  Cloud,
  Shield,
  Database,
  Code,
  Smartphone,
  Wrench,
  Zap,
  BatteryCharging,
  Settings,
  Box,
  Building2,
  Globe2,
  Check,
  Plus,
  Minus,
  BookOpen,
  Target,
  Rocket,
  Home as HomeIcon,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SkillArion Development" },
      { name: "description", content: "Training, mentorship, internships, placements and parenting (mentoring) for engineering and polytechnic students." },
      { property: "og:title", content: "Services — SkillArion Development" },
      { property: "og:description", content: "End-to-end services bridging academia and industry." },
    ],
  }),
  component: ServicesPage,
});

const PROGRAMS = [
  {
    icon: Cpu,
    badge: "4 to 7 Days",
    title: "Technical Workshops",
    desc: "Hands-on sessions on AI/ML, VLSI, Quantum Computing, Embedded Systems, Automation & Robotics, and emerging technologies.",
    bullets: ["Industry-aligned curriculum", "Expert-led training", "Real-time project work", "Certificates issued"],
  },
  {
    icon: Users,
    badge: "Ongoing",
    title: "Industry Expert Sessions",
    desc: "Guest lectures and workshops featuring leading industry professionals and entrepreneurs.",
    bullets: ["Real-world insights", "Networking opportunities", "Career guidance", "Monthly events"],
  },
  {
    icon: GraduationCap,
    badge: "Every Semester",
    title: "Parenting (Mentoring)",
    desc: "We visit MoU partner colleges each semester to evaluate student performance, identify strengths and gaps, understand interests, and create a personalized improvement plan with ongoing training.",
    bullets: ["Semester-wise student reviews", "Personalized growth plans", "Interest-based mentoring", "Continuous skill tracking"],
  },
  {
    icon: Briefcase,
    badge: "16-24 Weeks",
    title: "Internships & Industrial Training",
    desc: "Structured placements via 120+ industry partners with stipends and live project exposure.",
    bullets: ["₹25K+ stipend", "Accommodation support", "Live projects", "84%+ placement rate"],
  },
  {
    icon: Award,
    badge: "Lifetime",
    title: "Advanced Certification Programs",
    desc: "Personalized certificates with verified profiles shared across 120+ industry partners.",
    bullets: ["Pre-end-of-course access", "Verified digital profiles", "Direct industry approach", "Fast-track placements", "Global projects involvement"],
  },
];

const TECHS = [
  { icon: Brain, name: "AI / ML" },
  { icon: Atom, name: "Quantum Computing" },
  { icon: Cloud, name: "Cloud Computing" },
  { icon: Settings, name: "DevOps" },
  { icon: Shield, name: "Cybersecurity" },
  { icon: Database, name: "Data Science" },
  { icon: Code, name: "Web Development" },
  { icon: Smartphone, name: "Mobile Apps" },
  { icon: Cpu, name: "VLSI & Chip Design" },
  { icon: Wrench, name: "Embedded Systems & IoT" },
  { icon: Zap, name: "Smart Grid & Power Systems" },
  { icon: BatteryCharging, name: "EV & Battery Tech" },
  { icon: Settings, name: "Robotics & Automation" },
  { icon: Box, name: "CAD / CAE & Simulation" },
  { icon: Building2, name: "BIM & Smart Construction" },
  { icon: Globe2, name: "Smart Cities & Infrastructure" },
  { icon: Plus, name: "…and more" },
];

const OFFERINGS = [
  { icon: Briefcase, title: "Paid Internships", desc: "Earn while you learn with stipends up to ₹25K+." },
  { icon: Award, title: "Industry Certifications", desc: "Recognized certificates valued across 120+ partners." },
  { icon: Users, title: "Expert Mentorship", desc: "1:1 mentoring from industry professionals." },
  { icon: BookOpen, title: "Learning Plan", desc: "Personalized roadmap aligned to your goals." },
  { icon: HomeIcon, title: "Accommodation Support", desc: "Hostel and stay assistance during training." },
  { icon: GraduationCap, title: "Academic Credit Support", desc: "Industry training that earns academic credits." },
];

const CURRICULUM = [
  {
    n: "01",
    icon: BookOpen,
    title: "Foundation & Theory",
    items: ["Core concepts and theory", "Industry overview and trends", "Hands-on practice", "Basic project implementation"],
  },
  {
    n: "02",
    icon: Target,
    title: "Hands-On Development",
    items: ["Real-world projects", "Industry tools & frameworks", "Team collaboration", "Live problem solving"],
  },
  {
    n: "03",
    icon: Rocket,
    title: "Career Preparation",
    items: ["Resume & profile building", "Interview preparation", "Soft skills training", "Placement assistance"],
  },
];

const ELIGIBLE = [
  "Engineering students (B.Tech/B.E. in any branch)",
  "Polytechnic/Diploma students",
  "Any year engineering students (1st year to final year)",
  "Recent graduates seeking industry experience",
  "Students with a passion for technology and learning",
];

const REQUIREMENTS = [
  "Basic programming knowledge (for technical programs)",
  "Good communication skills",
  "Commitment to complete the program duration",
  "Willingness to relocate for internship (if required)",
];

const FAQS = [
  {
    q: "What is the duration of the internship programs?",
    a: "Our internship programs range from 16 to 24 weeks, depending on the specialization. This includes hands-on training, live projects, and placement preparation.",
  },
  {
    q: "How much stipend will I receive during the internship?",
    a: "Stipends start at ₹25,000+ per month and vary based on the role, company, and your performance during the program.",
  },
  {
    q: "Is SkillArion recognized by MSME and Startup India?",
    a: "Yes. SkillArion is MSME compliant and recognized under Startup India and registered with DPIIT. Our programs are also aligned with AICTE guidelines.",
  },
  {
    q: "What is the placement rate after completing the program?",
    a: "Our placement rate is 84%+ across 120+ industry partners, with direct hiring drives, interview preparation, and resume support throughout the journey.",
  },
  {
    q: "Can I join while still in college?",
    a: "Absolutely. Programs are designed for students from 1st year through final year, with flexible schedules that fit around your academic calendar.",
  },
  {
    q: "Is there any fee for the training programs?",
    a: "Fees vary by program. Students from MoU partner colleges get scholarship-test based fee benefits. Contact us for the current fee structure and scholarship options.",
  },
];

function ServicesPage() {
  return (
    <SkillarionLayout>
      <ServicesContent />
    </SkillarionLayout>
  );
}

export function ServicesContent() {
  return (
    <>

      <PageHero
        eyebrow="Our Services"
        title="SkillArion Development Programs"
        subtitle="Comprehensive training programs designed to bridge the gap between academic knowledge and industry requirements."
      />

      <section id="programs" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] text-[var(--gold-soft)]">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[var(--gold)]/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--gold)]">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <OurSolutions />



      {/* Mentor CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] p-10 text-white md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Become a Mentor or Resource Person?
              </h2>
              <p className="mt-5 max-w-2xl text-white/75">
                Are you ready to make a difference? We are seeking passionate professionals to become mentors and
                resource persons to inspire the next generation of leaders. Join our program to share your
                experience, expand your network and leave a lasting legacy. Apply now and help shape the future.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-[0_12px_30px_-10px_rgba(201,168,76,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Branch-wise Technology Stack */}
      <section id="tech-stack" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Technologies We Teach
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Branch-Wise Technology Stack
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Learn future-ready technologies designed for CSE, ECE, EEE, Mechanical, and Civil students.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TECHS.map((t) => (
              <div
                key={t.name}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_10px_30px_-15px_rgba(40,40,90,0.25)]"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] transition-colors group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-deep)]">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Offerings */}
      <section id="offerings" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Program Offerings
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              More than just training—we invest in your complete career development.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <o.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Curriculum */}
      <section id="curriculum" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Learning Path
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Structured Curriculum</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              A comprehensive learning journey designed to take you from beginner to job-ready professional.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CURRICULUM.map((c) => (
              <div
                key={c.n}
                className="relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)] text-[var(--navy-deep)]">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-4xl font-bold tabular-nums tracking-tight text-[var(--gold)]/30">{c.n}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Who Can Join
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Eligibility Criteria</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Check if you're eligible for our programs and start your journey today.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                <Check className="h-5 w-5 text-[var(--gold)]" /> Eligible Candidates
              </h3>
              <ul className="mt-5 space-y-3">
                {ELIGIBLE.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                <Target className="h-5 w-5 text-[var(--gold)]" /> Requirements
              </h3>
              <ul className="mt-5 space-y-3">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Got Questions?
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Find answers to common questions about our programs and services.
            </p>
          </div>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden hero-gradient pt-32 pb-20 text-white">
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-soft)]">
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 md:text-lg">{subtitle}</p>
      </div>
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
    </section>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-foreground"
      >
        <span>{q}</span>
        {open ? (
          <Minus className="h-4 w-4 shrink-0 text-[var(--gold)]" />
        ) : (
          <Plus className="h-4 w-4 shrink-0 text-[var(--gold)]" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</div>
      )}
    </div>
  );
}

const SOLUTIONS = [
  {
    icon: Brain,
    tag: "IoT · AI · Animal Welfare",
    title: "Animal Emotion Detection & Protection System",
    subtitle: "AI-Powered Dog-to-Human Language Translator",
    desc: "An innovative IoT and AI solution designed to bridge the communication gap between dogs and humans. A smart wearable collar with AI-powered audio analysis detects dog vocalizations, identifies emotional states, and translates them into meaningful human-language messages in real time.",
    highlights: [
      "Smart AI-powered wearable collar",
      "Real-time emotion & vocalization analysis",
      "Voice speaker + companion mobile app",
      "Early distress detection & vet-care support",
    ],
    stack: ["Edge AI", "Audio ML", "IoT", "Mobile App"],
  },
  {
    icon: Shield,
    tag: "AI · Computer Vision · Accessibility",
    title: "Path Guard — AI Smart Vision Glasses",
    subtitle: "Assistive Wearable for the Visually Impaired",
    desc: "An AI-powered wearable that improves the independence and safety of visually impaired users. Built with AI, Computer Vision, IoT and Embedded Systems, the smart glasses deliver real-time obstacle detection, voice-guided navigation and multi-modal assistance in one portable device.",
    highlights: [
      "Real-time obstacle detection & voice guidance",
      "GPS route assistance for indoor & outdoor use",
      "Currency & medicine recognition",
      "OCR-based text reading on the go",
    ],
    stack: ["Computer Vision", "Embedded AI", "IoT", "OCR"],
  },
  {
    icon: GraduationCap,
    tag: "EdTech · AI · Cloud",
    title: "AI Classroom Intelligence System (ACIS)",
    subtitle: "AI-Powered Smart Learning & Assessment Platform",
    desc: "A next-generation education platform that transforms classrooms into intelligent, data-driven learning environments. ACIS automates question paper generation, adaptive assessments, performance analytics and reporting for students, teachers, HODs and administrators.",
    highlights: [
      "Automated question paper generation",
      "Adaptive assessments & AI evaluation",
      "Real-time dashboards for all stakeholders",
      "Advanced anti-cheating capabilities",
    ],
    stack: ["Generative AI", "Cloud", "Analytics", "SaaS"],
  },
];

function OurSolutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[var(--navy)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
            Our Solutions
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Products Built at <span className="text-[var(--gold)]">SkillArion</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Real, deployable products engineered with our students and industry partners — combining AI, IoT, embedded systems and cloud.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {SOLUTIONS.map((s, i) => {
            const n = String(i + 1).padStart(2, "0");
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_24px_50px_-24px_rgba(40,40,90,0.3)] md:p-10"
              >
                <div className={`grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] p-8 text-white">
                      <div className="flex items-start justify-between">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gold)] text-[var(--navy-deep)]">
                          <s.icon className="h-6 w-6" />
                        </div>
                        <span className="font-mono text-5xl font-bold tabular-nums tracking-tight text-white/15">
                          {n}
                        </span>
                      </div>
                      <div className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-soft)]">
                        {s.tag}
                      </div>
                      <div className="mt-3 font-display text-2xl font-semibold leading-snug">
                        {s.title}
                      </div>
                      <div className="mt-2 text-sm text-white/70">{s.subtitle}</div>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[0.65rem] font-medium tracking-wider text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-[var(--gold)]/20 blur-3xl" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold md:text-2xl">
                      {s.subtitle}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                      {s.desc}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
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

export { PageHero };

