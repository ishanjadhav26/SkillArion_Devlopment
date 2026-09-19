import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SkillarionLayout } from "@/components/skillarion/SkillarionHome";
import { PageHero } from "./services";
import {
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Code2,
  BarChart4,
  ShieldAlert,
  Cloud,
  Cpu,
  Bot,
  Microchip,
  Sparkles,
  Atom,
  Glasses,
  Blocks,
  Palette,
  Car,
  RadioTower,
  PenTool,
  Building2,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships — SkillArion Development" },
      {
        name: "description",
        content:
          "Apply for internships in emerging domains like AI, Data Science, Full Stack, and more at SkillArion Development.",
      },
      { property: "og:title", content: "Internships — SkillArion Development" },
      {
        property: "og:description",
        content: "Kickstart your career with our hands-on internship programs.",
      },
    ],
  }),
  component: InternshipsPage,
});

function InternshipsPage() {
  return (
    <SkillarionLayout>
      <InternshipsContent />
    </SkillarionLayout>
  );
}

export function InternshipsContent() {
  const [showForm, setShowForm] = useState(false);

  const DOMAINS = [
    { name: "AI & Machine Learning", icon: BrainCircuit, desc: "Dive deep into neural networks, natural language processing, and predictive models." },
    { name: "Generative AI & Agentic AI", icon: Sparkles, desc: "Explore the frontiers of artificial intelligence with generative models and autonomous agents." },
    { name: "Data Science & Data Analytics", icon: BarChart4, desc: "Extract meaningful insights from raw data using advanced analytical tools." },
    { name: "Full Stack Development", icon: Code2, desc: "Master both frontend and backend technologies to build complete web applications." },
    { name: "Cybersecurity", icon: ShieldAlert, desc: "Learn to protect systems, networks, and programs from digital attacks." },
    { name: "Cloud Computing & DevOps", icon: Cloud, desc: "Understand cloud infrastructure and modern deployment practices." },
    { name: "IoT & Embedded Systems", icon: Cpu, desc: "Connect the physical world with the digital using sensors and microcontrollers." },
    { name: "Robotics & Automation", icon: Bot, desc: "Design and program robots to automate complex or repetitive tasks." },
    { name: "VLSI & Semiconductor", icon: Microchip, desc: "Explore the design of integrated circuits and semiconductor devices." },
    { name: "Quantum Computing", icon: Atom, desc: "Step into the future with quantum algorithms and computing principles." },
    { name: "AR/VR & Extended Reality", icon: Glasses, desc: "Create immersive digital experiences combining real and virtual environments." },
    { name: "Blockchain & Web3", icon: Blocks, desc: "Build decentralized applications and explore the future of the internet." },
    { name: "UI/UX & Product Design", icon: Palette, desc: "Craft intuitive, engaging, and accessible user interfaces and experiences." },
    { name: "EV & Electric Mobility", icon: Car, desc: "Innovate in the sustainable transportation sector with electric vehicle technology." },
    { name: "5G & Advanced Communication", icon: RadioTower, desc: "Work with next-generation telecommunications and networking technologies." },
    { name: "CAD/CAE & Engineering Design", icon: PenTool, desc: "Master computer-aided design and engineering for complex systems." },
    { name: "BIM & Smart Construction", icon: Building2, desc: "Utilize Building Information Modeling for modern construction and architecture." },
    { name: "Power Systems & Smart Grid", icon: Zap, desc: "Modernize energy distribution and management with smart grid technologies." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Internships"
        title="Kickstart Your Career in Tech"
        subtitle="Gain hands-on experience in the most demanded emerging domains. Work on real-world projects, receive expert mentorship, and build a resume that stands out."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-16 text-center">
            <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Emerging Domains
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              Explore Our <span className="text-[var(--gold)]">Internship Programs</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              Choose a domain that aligns with your passion and career goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOMAINS.map((domain) => (
              <div
                key={domain.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-[0_12px_32px_-24px_rgba(40,40,90,0.25)] transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <domain.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {domain.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply-cta" className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Ready to <span className="text-[var(--gold)]">Apply?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
            Fill out the application form below. Select your preferred domain and attach your resume.
          </p>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--navy)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--navy-deep)] hover:shadow-[0_8px_24px_-8px_rgba(40,40,90,0.5)]"
            >
              Apply for Internship
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
          {showForm && (
            <button
              onClick={() => setShowForm(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Hide Form
              <ChevronUp className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>

      {showForm && (
        <section id="application-form" className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_16px_48px_-24px_rgba(40,40,90,0.3)] md:p-12">
              <div className="mb-8 text-center">
                <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
                  Application Form
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                  Internship Application
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  SkillArion Development — Please complete the details below.
                  <br/>
                  <strong className="text-foreground">Important:</strong> Ensure you attach your resume in your email client before sending!
                </p>
              </div>

              <InternshipForm domains={DOMAINS.map((d) => d.name)} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  college: string;
  degree: string;
  year: string;
  domain: string;
  message: string;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  college: "",
  degree: "",
  year: "",
  domain: "",
  message: "",
};

function InternshipForm({ domains }: { domains: string[] }) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email is required.";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp number is required.";
    if (!form.college.trim()) e.college = "College/University name is required.";
    if (!form.degree.trim()) e.degree = "Degree & Branch is required.";
    if (!form.year) e.year = "Please select your current year.";
    if (!form.domain) e.domain = "Please select a preferred domain.";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErrKey = Object.keys(errs)[0];
      const el = document.getElementById(`field-${firstErrKey}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});

    const body = encodeURIComponent(
      `SkillArion Development – Internship Application\n\n` +
        `=== PERSONAL DETAILS ===\n` +
        `Full Name: ${form.fullName}\n` +
        `Email: ${form.email}\n` +
        `WhatsApp: ${form.whatsapp}\n\n` +
        `=== ACADEMIC DETAILS ===\n` +
        `College/University: ${form.college}\n` +
        `Degree & Branch: ${form.degree}\n` +
        `Current Year: ${form.year}\n\n` +
        `=== INTERNSHIP DETAILS ===\n` +
        `Preferred Domain: ${form.domain}\n\n` +
        `=== MESSAGE / COVER LETTER ===\n` +
        `${form.message || "Not provided"}\n\n` +
        `[ATTENTION: Please attach your resume PDF to this email before sending]`
    );

    window.location.href = `mailto:skillarionforfuture@gmail.com?subject=Internship%20Application%20%E2%80%93%20${encodeURIComponent(
      form.fullName
    )}%20(${encodeURIComponent(form.domain)})&body=${body}`;

    setForm(INITIAL);
  };

  const inputCls = (field: keyof FormState) =>
    `w-full rounded-xl border ${
      errors[field] ? "border-red-500" : "border-border"
    } bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-colors`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="field-fullName" label="Full Name *" error={errors.fullName}>
          <input
            id="field-fullName"
            type="text"
            placeholder="John Doe"
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            className={inputCls("fullName")}
          />
        </Field>
        <Field id="field-email" label="Email Address *" error={errors.email}>
          <input
            id="field-email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputCls("email")}
          />
        </Field>
        <Field id="field-whatsapp" label="WhatsApp Number *" error={errors.whatsapp}>
          <input
            id="field-whatsapp"
            type="tel"
            placeholder="9876543210"
            value={form.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
            className={inputCls("whatsapp")}
          />
        </Field>
        <Field id="field-college" label="College / University *" error={errors.college}>
          <input
            id="field-college"
            type="text"
            placeholder="Your College Name"
            value={form.college}
            onChange={(e) => set("college", e.target.value)}
            className={inputCls("college")}
          />
        </Field>
        <Field id="field-degree" label="Degree & Branch *" error={errors.degree}>
          <input
            id="field-degree"
            type="text"
            placeholder="B.Tech - Computer Science"
            value={form.degree}
            onChange={(e) => set("degree", e.target.value)}
            className={inputCls("degree")}
          />
        </Field>
        <Field id="field-year" label="Current Year *" error={errors.year}>
          <select
            id="field-year"
            value={form.year}
            onChange={(e) => set("year", e.target.value)}
            className={inputCls("year")}
          >
            <option value="">Select year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="Final">Final Year</option>
            <option value="PG">Postgraduate</option>
            <option value="Graduated">Graduated</option>
          </select>
        </Field>
      </div>

      <Field id="field-domain" label="Preferred Internship Domain *" error={errors.domain}>
        <select
          id="field-domain"
          value={form.domain}
          onChange={(e) => set("domain", e.target.value)}
          className={inputCls("domain")}
        >
          <option value="">Select Domain</option>
          {domains.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </Field>

      <Field id="field-message" label="Why do you want to join this internship? (Optional)">
        <textarea
          id="field-message"
          rows={4}
          placeholder="Briefly describe your interest and any prior experience..."
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${inputCls("message")} resize-none`}
        />
      </Field>

      <Field id="field-resume" label="Upload Resume (PDF)" className="border-t border-border pt-6 mt-4">
        <input
          id="field-resume"
          type="file"
          accept=".pdf,application/pdf"
          className="w-full text-sm text-foreground file:mr-4 file:cursor-pointer file:rounded-xl file:border-0 file:bg-[var(--gold)]/15 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-[var(--gold)] hover:file:bg-[var(--gold)]/25 transition-colors cursor-pointer"
        />
        <p className="mt-2 text-xs text-muted-foreground">
          <strong>Note:</strong> Selecting your resume here doesn't automatically attach it due to browser security. You must manually attach it to the email that opens when you click Submit.
        </p>
      </Field>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:bg-[#e6a836]"
        >
          Prepare Application Email
        </button>
        <p className="text-center mt-3 text-xs text-muted-foreground">
          This will open your email client. Don't forget to attach your resume!
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
