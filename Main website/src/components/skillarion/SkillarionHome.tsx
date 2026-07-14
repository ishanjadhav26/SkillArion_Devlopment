import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import aicteAsset from "@/assets/aicte.jpg.asset.json";
import msmeAsset from "@/assets/msme.jpg.asset.json";
import dpiitAsset from "@/assets/dpiit.jpg.asset.json";
import { HeroVideoBackground } from "@/components/HeroVideoBackground";
import {
  ArrowRight,
  Play,
  Atom,
  Handshake,
  Briefcase,
  Globe2,
  GraduationCap,
  Rocket,
  Users,
  Award,
  Cpu,
  Trophy,
  Check,
  X,
  Phone,
  Mail,
  Send,
  Menu,
  Sun,
  Moon,
  Brain,
  Cloud,
  Radio,
  Zap,
  BatteryCharging,
  Settings,
  Clock,
  Linkedin,
  Instagram,
  MapPin,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import logoAsset from "@/assets/skillarion-logo.png.asset.json";
import { AboutContent } from "@/routes/about";
import { ServicesContent } from "@/routes/services";
import { PartnersContent } from "@/routes/partners";
import { GalleryContent } from "@/routes/gallery";



/* ---------- helpers ---------- */

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const { ref, visible } = useReveal();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);
  return (
    <span ref={ref as any}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- nav ---------- */

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={logoAsset.url}
        alt="SkillArion Development logo"
        className="h-11 w-11 object-contain drop-shadow-[0_4px_14px_rgba(201,168,76,0.35)]"
      />
      <div className="leading-tight">
        <div className={`font-display text-[1.05rem] font-semibold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
          Skill<span className="text-[var(--gold)]">A</span>rion Development
        </div>
        <div className={`text-[0.65rem] tracking-wide ${light ? "text-white/60" : "text-muted-foreground"}`}>
          Bridging Academia to Industry Excellence
        </div>
      </div>
    </Link>
  );
}

/* ---------- animated logo backdrop ---------- */

function LogoBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <img
        src={logoAsset.url}
        alt=""
        className="absolute right-[6%] top-1/2 -translate-y-1/2 select-none will-change-transform"
        style={{
          width: "min(720px, 60vw)",
          height: "auto",
          opacity: 0.22,
          animation: "logo-float 9s ease-in-out 0s infinite",
        }}
      />
    </div>
  );
}

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("sk-theme")) as
      | "light"
      | "dark"
      | null;
    const initial =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("sk-theme", theme);
    } catch {}
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

type NavSection = { label: string; hash: string };
type NavLink = { label: string; to: string; sections: NavSection[] };

const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    to: "/",
    sections: [
      { label: "Hero", hash: "home" },
      { label: "About", hash: "about" },
      { label: "Partners", hash: "partners" },
      { label: "Services", hash: "services" },
      { label: "Subscription Model", hash: "courses" },
      { label: "Testimonials", hash: "testimonials" },
      { label: "Contact", hash: "contact" },
    ],
  },
  {
    label: "About",
    to: "/about",
    sections: [
      { label: "What We Offer", hash: "features" },
      { label: "Vision, Mission & Goal", hash: "vision-mission" },
      { label: "Core Values", hash: "values" },
      { label: "Our Team", hash: "team" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    sections: [
      { label: "Programs", hash: "programs" },
      { label: "Our Solutions", hash: "solutions" },
      { label: "Branch-Wise Tech Stack", hash: "tech-stack" },
      { label: "Program Offerings", hash: "offerings" },
      { label: "Curriculum", hash: "curriculum" },
      { label: "Eligibility", hash: "eligibility" },
      { label: "FAQ", hash: "faq" },
    ],
  },
  {
    label: "Subscription Model",
    to: "/courses",
    sections: [
      { label: "Subscription Plan", hash: "courses" },
    ],
  },
  {
    label: "Partners",
    to: "/partners",
    sections: [
      { label: "Featured Partner", hash: "featured-partner" },
      { label: "Industry Partners", hash: "partners" },
      { label: "Partnership Benefits", hash: "benefits" },
      { label: "Domains We Cover", hash: "domains" },
      { label: "Partnership Process", hash: "process" },
      { label: "Partner Reviews", hash: "reviews" },
    ],
  },
  {
    label: "Gallery",
    to: "/gallery",
    sections: [
      { label: "Workshops", hash: "workshops" },
      { label: "Events", hash: "events" },
      { label: "Campus", hash: "campus" },
    ],
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [openMobileIdx, setOpenMobileIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.location.pathname !== "/") {
         setActiveSection(null);
         return;
      }
      const sections = [
        { id: "section-home", path: "/" },
        { id: "section-about", path: "/about" },
        { id: "section-services", path: "/services" },
        { id: "section-courses", path: "/courses" },
        { id: "section-partners", path: "/partners" },
        { id: "section-gallery", path: "/gallery" },
      ];
      let current = "/";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = sections[i].path;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const badges = [
    { name: "AICTE", src: aicteAsset.url },
    { name: "MSME", src: msmeAsset.url },
    { name: "DPIIT", src: dpiitAsset.url },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]" : "bg-background/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <div className="flex items-center gap-5">
          <Logo />
          <div className="hidden h-10 w-px bg-border md:block" />
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex flex-col items-center">
              <span className="mb-1 text-[0.55rem] font-bold tracking-[0.18em] text-[var(--gold)]">
                APPROVED BY
              </span>
              <div className="flex items-center gap-2">
                {badges.map((b) => (
                  <img
                    key={b.name}
                    src={b.src}
                    alt={`${b.name} Approved`}
                    title={`${b.name} Approved`}
                    className="h-9 w-9 rounded-full bg-white object-contain p-0.5 ring-1 ring-border"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <div key={l.label} className="group relative">
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{
                  className: activeSection === null ? "text-[var(--gold)] font-bold data-[status=active]:[&>span.nav-underline]:w-full" : "",
                }}
                className={`relative inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors hover:text-[var(--gold)] ${
                  activeSection === l.to
                    ? "text-[var(--gold)] font-bold [&>span.nav-underline]:w-full"
                    : "text-foreground/80"
                }`}
              >
                {l.label}
                <svg className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 7.5l4.5 5 4.5-5z" /></svg>
                <span className="nav-underline absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
              <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-xl border border-border bg-background p-2 opacity-0 shadow-[0_18px_40px_-20px_rgba(40,40,90,0.35)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full">
                {l.sections.map((s) => (
                  <Link
                    key={s.hash}
                    to={l.to}
                    hash={s.hash}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-[var(--gold)]/15"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-5 py-2.5 text-sm font-semibold text-[var(--navy-deep)] shadow-[0_10px_24px_-12px_rgba(201,168,76,0.7)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l, idx) => {
              const isOpen = openMobileIdx === idx;
              return (
                <div key={l.label} className="border-b border-border/60 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="flex-1 py-3 text-sm font-medium"
                    >
                      {l.label}
                    </Link>
                    <button
                      onClick={() => setOpenMobileIdx(isOpen ? null : idx)}
                      aria-label={`Toggle ${l.label} sections`}
                      className="grid h-9 w-9 place-items-center rounded-md text-foreground/70 hover:bg-[var(--gold)]/10"
                    >
                      <svg className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 7.5l4.5 5 4.5-5z" /></svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div className="mb-3 ml-3 flex flex-col gap-1 border-l border-border/60 pl-3">
                      {l.sections.map((s) => (
                        <Link
                          key={s.hash}
                          to={l.to}
                          hash={s.hash}
                          onClick={() => {
                            setOpen(false);
                            setOpenMobileIdx(null);
                          }}
                          className="rounded-md px-2 py-1.5 text-sm text-foreground/75 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}



/* ---------- hero ---------- */

const HERO_STATS = [
  { value: 120, suffix: "+", label: "Industry Partners" },
  { value: 1217, suffix: "+", label: "Students Placed" },
  { value: 84, suffix: "%+", label: "Placement Rate" },
  { value: 25, suffix: "K+", prefix: "₹", label: "Internship Stipend" },
  { value: 157, suffix: "+", label: "Final Year Projects" },
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-gradient pt-32 pb-32 text-white">
      <HeroVideoBackground overlayClassName="bg-[var(--navy-deep)]/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
            Introducing Bridging between industry and academia at <em className="text-[var(--gold-soft)] not-italic">Bridging academia to industry excellence</em>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Revolutionizing skill development for engineering and polytechnic students with hands-on technical
            workshops, internships, and industry-aligned training programs.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-[0_12px_30px_-10px_rgba(201,168,76,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              Explore Programs
            </Link>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:mt-20 md:grid-cols-5">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-3xl font-semibold tabular-nums tracking-tight text-[var(--gold-soft)] md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="mt-1.5 text-xs text-white/65 md:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      {/* decorative sweep */}
      <svg
        viewBox="0 0 1440 220"
        className="pointer-events-none absolute -bottom-1 left-0 right-0 w-full text-background"
        preserveAspectRatio="none"
      >
        <path
          d="M0,180 C320,80 720,260 1100,140 C1260,90 1380,120 1440,150 L1440,220 L0,220 Z"
          fill="currentColor"
        />
      </svg>
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
    </section>
  );
}

/* ---------- We Stand Out ---------- */

const STAND_OUT = [
  { icon: Atom, label: "Quantum-First Learning" },
  { icon: Handshake, label: "MoUs with Colleges & Industry" },
  { icon: Briefcase, label: "Workshops + Internships" },
  { icon: Globe2, label: "Global Projects" },
];

function WeStandOut() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">What Makes Us Different</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">We Stand Out</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-3xl text-muted-foreground">
            We stand out by establishing formal MoUs with educational institutions and industry leaders, creating a
            seamless ecosystem from learning to employment. Our journey begins with Quantum Technology-focused
            learning — making us the first EdTech company to prioritize Quantum education — followed by entrepreneur
            interactions, scholarship tests, industry expert guest lectures and workshops, and global
            internship/project collaborations.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAND_OUT.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(40,40,90,0.25)]">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] transition-colors group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-deep)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-foreground">{p.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- At a Glance ---------- */

const GLANCE = [
  { big: "120+", title: "Industry Partners", sub: "Global companies collaborating with us" },
  { big: "1217+", title: "Students Placed", sub: "Total Students Placed" },
  { big: "84%+", title: "Placement Rate", sub: "Students placed in top companies" },
  { big: "157+", title: "Final Year Projects", sub: "Industry-grade projects delivered" },
  { big: "MSME", title: "Compliant", sub: "Certified by MSME" },
  { big: "Startup India & DPIIT", title: "Recognized & Certified", sub: "Recognized under Startup India and registered with DPIIT" },
  { big: "AICTE", title: "Approved", sub: "Programs aligned with AICTE guidelines" },
  { big: "APSCHE", title: "Approved", sub: "Recognized by APSCHE for student programs" },
  { big: "₹25K+", title: "Internship Stipend", sub: "Paid during internship programs" },
  { big: "16-24", title: "Weeks Training", sub: "Comprehensive industrial exposure" },
];

function AtAGlance() {
  return (
    <section id="partners" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">Our Impact</span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Skill<span className="text-[var(--gold)]">A</span>rion at a Glance
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GLANCE.map((g, i) => (
            <Reveal key={g.big + g.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]">
                <div className="font-display text-3xl font-semibold text-[var(--gold)]">{g.big}</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{g.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{g.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Why ---------- */

const WHY = [
  { icon: Briefcase, title: "Industry-Backed Curriculum", desc: "Our programs are designed in collaboration with 120+ industry partners, ensuring you learn skills that employers actually need.", tags: ["Real-world projects", "Updated content", "Expert mentors"] },
  { icon: Rocket, title: "Fast-Track to Employment", desc: "With 84%+ placement rate and direct industry connections, we accelerate your journey from student to professional.", tags: ["Direct placements", "Interview prep", "Resume building"] },
  { icon: Users, title: "Personalized Mentorship", desc: "Get one-on-one guidance from industry professionals who understand your career goals and help you achieve them.", tags: ["1:1 sessions", "Career guidance", "Skill assessment"] },
  { icon: Award, title: "Recognized Certifications", desc: "Earn certifications that are valued by employers and boost your professional credibility.", tags: ["MSME, Startup India approved", "Industry recognized", "Verified profiles"] },
  { icon: Cpu, title: "Advanced Certification Programs", desc: "Specialized courses across all engineering branches including CSE, Mechanical, EEE, ECE, and Civil covering emerging technologies to keep you ahead in the evolving tech landscape.", tags: ["Multi-domain programs", "Future-ready skills", "Industry-relevant tools"] },
  { icon: Trophy, title: "Scholarship Test for Partner Colleges", desc: "Scholarship tests are conducted exclusively for students from colleges/institutions that have an active MoU with us, helping eligible students unlock fee benefits and learning opportunities.", tags: ["MoU colleges only", "Merit-based scholarships", "Exclusive student benefits"] },
];

function Why() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">Why Choose Us</span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Why Skill<span className="text-[var(--gold)]">A</span>rion?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              We don't just teach skills—we build careers. Here's what sets us apart from traditional education.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 80}>
              <div className="group flex h-full gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.25)]">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] text-[var(--gold-soft)]">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)]/10 px-3 py-1 text-[0.7rem] font-medium text-[var(--gold)]">
                        <Check className="h-3 w-3" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Subscription Model ---------- */

const SUBSCRIPTION_INCLUDES = [
  { icon: Cpu, title: "Two Technical Workshops", desc: "Hands-on workshops on emerging domains such as AI, Quantum, IoT, EV, and Cloud. These help you get placement at Skillarion-connected industries." },
  { icon: Award, title: "Two Advanced Certifications", desc: "Industry-recognized certifications mapped to your branch and career goals. These help you get placement at Skillarion-connected industries." },
  { icon: Handshake, title: "Entrepreneur Interaction Session", desc: "One curated session with founders and industry leaders to inspire and guide you." },
  { icon: Trophy, title: "Annual Scholarship Test", desc: "One scholarship test every year — unlock fee benefits and exclusive learning rewards based on merit." },
];

const PLACEMENT_SUPPORT = [
  { years: "3rd & Final Year Students", desc: "Direct placement opportunities through our 120+ industry partners, interview drives, and hiring priority." },
  { years: "1st & 2nd Year Students", desc: "Structured interview preparation, aptitude training, communication, and core skill development to build a strong foundation." },
];

function Subscription() {
  return (
    <section id="courses" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Annual Membership</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Subscription Model</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            One yearly subscription that covers workshops, certifications, mentorship, scholarships, and end-to-end
            placement & career support — built for every stage of your engineering journey.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-semibold text-[var(--navy)]">
            Who Can Join? Diploma, UG, and PG students across all engineering branches.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SUBSCRIPTION_INCLUDES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-20px_rgba(40,40,90,0.3)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl font-semibold md:text-3xl">Placement & Career Support</h3>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            A year-round support system tailored to where you are in your academic journey — from early-year skill
            building to final-year placements.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {PLACEMENT_SUPPORT.map((p, i) => (
            <Reveal key={p.years} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex rounded-full bg-[var(--gold)]/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--gold)]">
                  {p.years}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MoU comparison ---------- */

const WITH_MOU = [
  "Scholarship test for students every year",
  "Parenting (mentoring)",
  "Early updates on upcoming placement drives and hiring priority",
  "Advanced certification programs",
];
const WITHOUT_MOU = [
  "No scholarship test access",
  "Standard certification",
  "No parenting (mentoring)",
  "Less drive priority updates",
];

function MoU() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              <Award className="h-3.5 w-3.5" /> MoU vs Without MoU
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Partnership <span className="text-[var(--gold)]">Benefits</span> Comparison
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              MoU partner colleges receive structured support and priority updates for placements, while non-partners
              receive standard offerings.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="relative h-full rounded-2xl border-2 border-[var(--gold)]/40 bg-gradient-to-br from-[var(--gold)]/8 to-card p-8 shadow-[0_24px_50px_-25px_rgba(201,168,76,0.35)]">
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--navy-deep)]">
                <Check className="h-3 w-3" /> Recommended
              </span>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold">With MoU</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Full access + priority placement updates</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {WITH_MOU.map((t) => (
                  <li key={t} className="flex items-center gap-3 rounded-xl border border-[var(--gold)]/15 bg-background/40 px-4 py-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/10 text-destructive">
                  <X className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold">Without MoU</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Standard access only</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {WITHOUT_MOU.map((t) => (
                  <li key={t} className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground">
                    <X className="h-4 w-4 shrink-0 text-destructive" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

const STEPS = [
  { n: "01", title: "Register & Assess", desc: "Sign up and take our skill assessment to identify your strengths and areas for growth." },
  { n: "02", title: "Learn & Practice", desc: "Enroll in industry-aligned programs with hands-on projects and expert mentorship." },
  { n: "03", title: "Intern & Experience", desc: "Get placed in 16-24 week internships with stipends at our 120+ partner companies." },
  { n: "04", title: "Launch Your Career", desc: "Graduate job-ready with certifications and direct placement opportunities." },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] py-24 text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-[var(--gold-soft)]">Your Journey</span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              How It <span className="text-[var(--gold)]">Works</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              From registration to placement—your path to a successful career in just four steps.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = [Users, BookOpen, Briefcase, Rocket][i] ?? Users;
            return (
              <Reveal key={s.n} delay={i * 90}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)] text-[var(--navy-deep)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-mono text-4xl font-bold tabular-nums tracking-tight text-white/15">{s.n}</div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/65">{s.desc}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[var(--gold)]/60 lg:block" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

const TESTIMONIALS = [
  { q: "SkillArion's internship program transformed my career. The hands-on experience and mentorship helped me land my dream job within weeks of completing the program.", name: "Yugandhar Bandi", role: "Software Developer at Quadrant Technologies" },
  { q: "The industry-aligned curriculum and real projects gave me the confidence to excel in interviews. The stipend support during internship was a huge bonus!", name: "Venu Alluri", role: "Data Analyst at Pivox Labs" },
  { q: "From a Civil Engineering student to working on BIM (Building Information Modeling) projects in a top company SkillArion made it possible. Their training and placement support are truly unmatched.", name: "Sudhakar", role: "Civil Student at SV University" },
  { q: "Being an EEE student, I always wanted to build a career in modern power technologies. SkillArion helped me gain strong hands-on skills in EV systems and smart grids, and their placement support gave me the confidence to land a great opportunity.", name: "Nithya Sree C V", role: "EEE Student at Annamacharya Institute of Technology and Sciences" },
  { q: "Being an ECE student, I wanted to build my career in core electronics, not just theory. SkillArion trained me in Embedded Systems and IoT with real-time projects, and their mentorship helped me gain the confidence to crack interviews.", name: "Gana Yadav", role: "ECE Student at Dr.SGIT" },
  { q: "Coming from Mechanical Engineering, I wanted a career that blends core concepts with future tech. SkillArion trained me in Robotics and Industrial Automation with practical projects, and their mentorship plus placement support helped me secure a great opportunity.", name: "Devendra E", role: "Mechanical Student at KSRM Institute of Technology" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--gold)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">Success Stories</span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              What Our <span className="text-[var(--gold)]">Students Say</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Real stories from real students who transformed their careers with SkillArion.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_10px_30px_-20px_rgba(40,40,90,0.2)]">
                <div className="absolute right-5 top-5 font-display text-5xl leading-none text-[var(--gold)]/20">&rdquo;</div>
                <Stars />
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-foreground/80">{t.q}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] font-display text-sm font-semibold text-[var(--gold-soft)]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Contact ---------- */

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a bit more").max(2000),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Thanks! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="group/cta relative overflow-hidden hero-gradient py-24 text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--cta-mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--cta-my", `${e.clientY - rect.top}px`);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--cta-mx, 50%) var(--cta-my, 50%), rgba(201,168,76,0.22), rgba(201,168,76,0.08) 30%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-[var(--gold-soft)]">Start Your Journey Today</span>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Ready to <span className="text-[var(--gold)]">Transform</span> Your Career?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/75">
              Join 500+ students who have already launched successful careers through SkillArion's industry-aligned programs. Your future starts here.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/85">
              <a href="tel:+919492270525" className="flex items-center gap-2 hover:text-[var(--gold-soft)]">
                <Phone className="h-4 w-4" /> +91 9492270525
              </a>
              <span className="text-white/30">|</span>
              <a href="mailto:info@skillariondevelopment.in" className="flex items-center gap-2 hover:text-[var(--gold-soft)]">
                <Mail className="h-4 w-4" /> info@skillariondevelopment.in
              </a>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8">
              <h3 className="font-display text-xl font-semibold text-white">Quick Contact</h3>
              <p className="mt-2 text-sm text-white/70">Reach out anytime — our team responds within one business day.</p>
              <div className="mt-6 space-y-4 text-sm text-white/85">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[var(--gold-soft)]" />
                  <span>TBI Centre, Near Padmavathi Mahila University, Tirupati-517502, Andhra Pradesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[var(--gold-soft)]" /> +91 9492270525
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[var(--gold-soft)]" /> info@skillariondevelopment.in
                </div>
              </div>
            </div>
          </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  className="contact-input"
                  placeholder="Your full name"
                />
              </Field>
              <Field label="Phone">
                <input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="contact-input"
                  placeholder="Optional"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  className="contact-input"
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  rows={4}
                  className="contact-input resize-none"
                  placeholder="How can we help?"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-[0_12px_30px_-10px_rgba(201,168,76,0.7)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "Sending…" : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>
          </form>
        </Reveal>
        </div>
      </div>

      <style>{`
        .contact-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: border-color .2s, background .2s;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.45); }
        .contact-input:focus { border-color: var(--gold); background: rgba(255,255,255,0.1); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/65">{label}</span>
      {children}
    </label>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] pt-16 pb-8 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm text-white/55">
            Revolutionizing skill development for engineering and polytechnic students by bridging the academia-industry divide.
          </p>
          <p className="mt-4 text-sm italic text-[var(--gold-soft)]">"Bridging Academia to Industry Excellence"</p>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white">Quick Links</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {([
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Subscription Model\n", "/courses"],
              ["Partners", "/partners"],
              ["Contact", "/contact"],
            ] as const).map(([label, to]) => (
              <li key={label}><Link to={to} className="whitespace-pre-line hover:text-[var(--gold-soft)]">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white">Programs</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {([
              ["Corporate Training", "/services"],
              ["Technical Workshops", "/courses"],
              ["Industrial Training", "/services"],
              ["Internship Programs", "/courses"],
              ["Advanced Certification Courses", "/courses"],
              ["Entrepreneur Interaction", "/courses"],
              ["Industry Expert Sessions", "/services"],
              ["Scholarship Tests", "/courses"],
            ] as const).map(([label, to]) => (
              <li key={label} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                <Link to={to} className="transition-colors hover:text-[var(--gold-soft)]">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-lg font-semibold text-white">Contact Info</div>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold-soft)]" />
              <span>TBI Centre, Near Padmavathi Mahila University, Tirupati-517502, Andhra Pradesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[var(--gold-soft)]" /> +91 9492270525
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[var(--gold-soft)]" /> info@skillariondevelopment.in
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy-deep)]">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy-deep)]">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 pt-6 text-xs text-white/45 md:px-8">
        <span>© {new Date().getFullYear()} SkillArion Development. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[var(--gold-soft)]">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--gold-soft)]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}


/* ---------- scroll progress bar ---------- */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ---------- scroll to top floating button ---------- */

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-[var(--gold)] text-[var(--navy-deep)] shadow-[0_10px_24px_-8px_rgba(201,168,76,0.7)] transition-all duration-300 hover:-translate-y-1 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowRight className="h-5 w-5 -rotate-90" />
    </button>
  );
}

/* ---------- floating side rail ---------- */


function SideRail() {
  const items = [
    {
      label: "Admission Enquiry",
      href: "/contact",
      icon: BookOpen,
      bg: "bg-[var(--gold)]",
      text: "text-[var(--navy-deep)]",
    },
    {
      label: "Contact Us",
      href: "/contact",
      icon: Phone,
      bg: "bg-[var(--navy-deep)]",
      text: "text-white",
    },
    {
      label: "Chat with Us",
      href: "https://wa.me/919492270525",
      icon: MessageCircle,
      bg: "bg-emerald-600",
      text: "text-white",
      external: true,
    },
  ];
  return (
    <div className="pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
      {items.map((it) => {
        const Icon = it.icon;
        const cls = `pointer-events-auto group flex items-center gap-2 rounded-l-lg ${it.bg} ${it.text} px-2.5 py-3 shadow-lg transition-transform hover:-translate-x-1`;
        const inner = (
          <>
            <Icon className="h-4 w-4 rotate-90" />
            <span className="text-xs font-semibold tracking-wide">{it.label}</span>
          </>
        );
        if (it.external) {
          return (
            <a key={it.label} href={it.href} target="_blank" rel="noreferrer" className={cls} style={{ writingMode: "vertical-rl" }} aria-label={it.label}>
              {inner}
            </a>
          );
        }
        return (
          <Link key={it.label} to={it.href} className={cls} style={{ writingMode: "vertical-rl" }} aria-label={it.label}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}

/* ---------- Page exports ---------- */

export {
  Header,
  Footer,
  SideRail,
  Hero,
  WeStandOut,
  AtAGlance,
  Why,
  Subscription,
  MoU,
  HowItWorks,
  Testimonials,
  Contact,
};

export function SkillarionLayout({ children }: { children: React.ReactNode }) {
  useHashScroll();
  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
        <SideRail />
        <ScrollToTop />
      </div>
    </div>
  );
}

function useHashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const h = window.location.hash.replace("#", "");
      if (!h) return;
      const el = document.getElementById(h);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
}



export function MentorCTA() {
  return (
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
  );
}

export function SkillarionHome() {
  return (
    <SkillarionLayout>
      <div id="section-home">
        <Hero />
        <WeStandOut />
        <AtAGlance />
        <Why />
        <MentorCTA />
      </div>
      <div id="section-about">
        <AboutContent />
      </div>
      <div id="section-services">
        <ServicesContent />
      </div>
      <div id="section-courses">
        <Subscription />
        <MoU />
      </div>
      <div id="section-partners">
        <PartnersContent />
      </div>
      <div id="section-gallery">
        <GalleryContent />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </div>
    </SkillarionLayout>
  );
}

