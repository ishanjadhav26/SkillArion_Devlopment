import { createFileRoute } from "@tanstack/react-router";
import {
  SkillarionLayout,
} from "@/components/skillarion/SkillarionHome";
import {
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Medal,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  UsersRound,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SkillArion Development" },
      { name: "description", content: "SkillArion Development is an EdTech company revolutionizing skill development for engineering and polytechnic students in India." },
      { property: "og:title", content: "About — SkillArion Development" },
      { property: "og:description", content: "Empowering students for tomorrow's careers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SkillarionLayout>
      <AboutContent />
    </SkillarionLayout>
  );
}

export function AboutContent() {
  return (
    <>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] pt-36 pb-24 text-center text-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-[var(--gold-soft)]">
            About SkillArion
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Bridging Academia to <span className="text-[var(--gold)]">Industry Excellence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
            SkillArion Development is an EdTech company revolutionizing skill development for engineering and
            polytechnic students through industry-aligned training, internships, scholarships, and placement support.
          </p>
        </div>
      </section>

      <section id="features" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aboutFeatures.map((feature) => (
              <div key={feature.title} className="h-full rounded-2xl border border-border bg-card p-7 text-center shadow-[0_12px_32px_-24px_rgba(40,40,90,0.35)]">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-foreground">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision-mission" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Our Direction
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Vision, Mission &amp; <span className="text-[var(--gold)]">Goal</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="h-full rounded-2xl border border-border bg-card p-8 shadow-[0_12px_32px_-24px_rgba(40,40,90,0.35)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] text-[var(--gold-soft)]">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              What Guides Us
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Our Core <span className="text-[var(--gold)]">Values</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Every SkillArion program is built on values that keep learning practical, inclusive, and career-focused.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_18px_40px_-24px_rgba(40,40,90,0.35)]">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
                Our Team
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The People Behind <span className="text-[var(--gold)]">SkillArion</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">
                We are educators, mentors, technologists, and industry collaborators working together to create a
                stronger bridge between classroom learning and professional success.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {teamHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="founding-team" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Founding <span className="text-[var(--gold)]">Team</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              SkillArion Development is led by a passionate, multi-disciplinary founding team with complementary strengths across
              AI research, deep learning, IoT systems, and business strategy. The leadership combines deep technical expertise
              with commercial acumen — a pairing that enables the company to translate cutting-edge research into market-ready,
              scalable technology products.
            </p>
            <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
              Note on Innovativeness
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {founders.map((f) => (
              <article
                key={f.name}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-[0_12px_32px_-24px_rgba(40,40,90,0.35)]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] font-display text-xl font-semibold text-[var(--gold-soft)]">
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight text-foreground">{f.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[var(--gold)]">{f.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted-foreground">{f.bio}</p>
                <div className="mt-6 rounded-xl bg-secondary p-5">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground/70">
                    Key Responsibilities
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {f.responsibilities.map((r) => (
                      <li key={r.label} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                        <span>
                          <span className="font-semibold text-foreground">{r.label}</span> — {r.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="cta" className="bg-background py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Recognition
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Our <span className="text-[var(--gold)]">Achievements</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Milestones and recognitions that reflect our commitment to excellence.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="rounded-2xl border border-border bg-card p-7 text-center shadow-[0_12px_32px_-24px_rgba(40,40,90,0.35)]">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)]">
                  <achievement.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{achievement.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


const aboutFeatures = [
  {
    icon: GraduationCap,
    title: "Student-Centric",
    description: "Programs are created around the real learning needs of diploma, UG, and PG engineering students.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-Aligned",
    description: "Training modules are shaped with practical skills, workplace expectations, and employer needs.",
  },
  {
    icon: Handshake,
    title: "College Partnerships",
    description: "We collaborate with institutions to deliver workshops, internships, scholarships, and career support.",
  },
  {
    icon: Rocket,
    title: "Career Outcomes",
    description: "From mentorship to placements, our ecosystem helps students move confidently into industry roles.",
  },
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Vision",
    description: "To become a leading skill-development platform that empowers students with future-ready technical and professional capabilities.",
  },
  {
    icon: Target,
    title: "Mission",
    description: "To bridge the gap between academia and industry through hands-on learning, expert mentorship, and meaningful opportunities.",
  },
  {
    icon: Trophy,
    title: "Goal",
    description: "To help students build strong portfolios, earn recognized certifications, and secure better internships and placements.",
  },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", description: "Transparent guidance and dependable programs for every partner and student." },
  { icon: BookOpenCheck, title: "Practical Learning", description: "Hands-on workshops, projects, and experiences beyond classroom theory." },
  { icon: HeartHandshake, title: "Mentorship", description: "Personalized support that helps students choose and grow in the right path." },
  { icon: Star, title: "Excellence", description: "A consistent focus on quality, measurable outcomes, and industry relevance." },
];

const teamHighlights = [
  { icon: UsersRound, title: "Expert Mentors", description: "Industry professionals and trainers who guide students through practical career-building experiences." },
  { icon: CheckCircle2, title: "Program Team", description: "A dedicated academic and operations team coordinating workshops, certifications, and campus programs." },
  { icon: Handshake, title: "Industry Network", description: "Partner companies supporting internships, projects, hiring opportunities, and guest sessions." },
  { icon: GraduationCap, title: "Student Support", description: "Counselling, placement assistance, and mentorship designed for every stage of the engineering journey." },
];

const achievements = [
  {
    icon: Trophy,
    title: "Industry-Aligned Standards",
    description: "All programs are designed to meet high-quality education standards and current industry requirements.",
  },
  {
    icon: Award,
    title: "TBI Incubated",
    description: "Incubated at Technology Business Incubator, Near Padmavathi Mahila University.",
  },
  {
    icon: Star,
    title: "84%+ Placement Rate",
    description: "Consistently achieving high placement rates across all training programs.",
  },
  {
    icon: Medal,
    title: "120+ Industry Partners",
    description: "Strong network of companies providing internships and job opportunities.",
  },
];

const founders = [
  {
    initials: "KV",
    name: "Kunukuntla Vinod Kumar",
    role: "Founder & AI Research Lead",
    bio: "Kunukuntla Vinod Kumar is the Founder of SkillArion Development and serves as the company's primary AI Research Lead. He drives the technical vision behind the Animal Emotion Detection & Protection System, leading all research and development activities in Artificial Intelligence, Machine Learning, and IoT systems design. His work spans deep learning architecture design, NLP/NLG model development, and embedded AI deployment — forming the technological foundation of the Smart Collar innovation.",
    responsibilities: [
      { label: "AI/ML Research", detail: "model design, training, and deployment across classification tasks." },
      { label: "Deep Learning & NLP", detail: "CNN-LSTM architectures, natural language generation, acoustic modelling." },
      { label: "IoT Systems", detail: "ESP32 embedded firmware, sensor integration, edge AI inference." },
    ],
  },
  {
    initials: "KP",
    name: "Kunukuntla Pradeep",
    role: "Co-Founder & Business Strategy Lead",
    bio: "Kunukuntla Pradeep is the Co-Founder and Business Strategy Lead of SkillArion Development. He is responsible for translating the company's technology innovations into commercially viable market propositions. His mandate spans market research, brand positioning, institutional partnerships, and end-to-end commercialisation strategy — ensuring that the Smart Collar and SkillArion's broader product portfolio achieve maximum market reach, revenue impact, and investor recognition.",
    responsibilities: [
      { label: "Market Research", detail: "competitive analysis, customer segmentation, pricing strategy." },
      { label: "Branding & Partnerships", detail: "institutional tie-ups, co-branding, veterinary and government alliances." },
      { label: "Commercialisation & Growth Strategy", detail: "go-to-market planning, revenue model execution, investor outreach." },
    ],
  },
];
