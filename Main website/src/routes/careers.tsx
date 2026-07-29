import { useState, type FormEvent, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SkillarionLayout } from "@/components/skillarion/SkillarionHome";
import { PageHero } from "./services";
import {
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Gift,
  Globe2,
  GraduationCap,
  Handshake,
  MapPin,
  Rocket,
  Send,
  Star,
  Upload,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — SkillArion Development" },
      {
        name: "description",
        content:
          "Join SkillArion Development as a Campus Ambassador. Lead, inspire, and help bridge academia and industry at your college.",
      },
      { property: "og:title", content: "Careers — SkillArion Development" },
      {
        property: "og:description",
        content:
          "Become the face of SkillArion Development at your campus.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SkillarionLayout>
      <CareersContent />
    </SkillarionLayout>
  );
}

/* ─── exported so SkillarionHome can embed it on the single-page view ─── */
export function CareersContent() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Shape the Future of Education"
        subtitle="Join SkillArion Development and help bridge the gap between academia and industry. One position available — become our Campus Ambassador."
      />

      {/* ── Position Card ── */}
      <section id="position" className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
              Open Position
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Campus <span className="text-[var(--gold)]">Ambassador</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              Represent SkillArion Development on your campus and become the
              bridge between students and industry. As a Campus Ambassador, you
              will promote SkillArion&apos;s internships, workshops, hackathons,
              certification programs, and career development initiatives while
              building a strong student community. This role offers an
              opportunity to develop leadership, communication, marketing, and
              networking skills while working closely with an innovative EdTech
              company focused on bridging the gap between academia and industry
              through hands-on learning and real-world opportunities.
            </p>
          </div>

          {/* meta badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { icon: MapPin, text: "Pan India" },
              { icon: GraduationCap, text: "Students Only" },
              { icon: Globe2, text: "On-Campus Role" },
              { icon: Briefcase, text: "Part-Time · Flexible" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-[var(--gold)]" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Responsibilities / Eligibility / Benefits ── */}
      <section id="details" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <DetailCard
              icon={Rocket}
              title="Key Responsibilities"
              items={[
                "Represent SkillArion as the official campus representative.",
                "Promote internships, workshops, webinars, hackathons, and technical events.",
                "Increase student registrations and engagement through online and offline campaigns.",
                "Coordinate with college clubs, faculty, and placement cells for collaborations.",
                "Organize awareness sessions and referral drives within your campus.",
                "Create and share promotional content on social media.",
                "Collect student feedback and report campus activities to the SkillArion team.",
              ]}
            />

            <DetailCard
              icon={CheckCircle2}
              title="Eligibility"
              items={[
                "Currently pursuing any undergraduate or postgraduate degree.",
                "Strong communication and leadership skills.",
                "Active on social media and campus communities.",
                "Passionate about technology, innovation, and career development.",
                "Self-motivated and able to dedicate a few hours each week.",
              ]}
            />

            <DetailCard
              icon={Gift}
              title="Benefits"
              items={[
                "Official Campus Ambassador Certificate.",
                "Letter of Recommendation for top performers.",
                "Internship and Pre-Placement Opportunity based on performance.",
                "Performance-based incentives, rewards, and exclusive goodies.",
                "Direct mentorship from industry professionals.",
                "Networking opportunities with students and professionals across India.",
                "Hands-on experience in marketing, branding, event management, and community building.",
                "Opportunity to strengthen your resume with real industry experience.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Why Join Banner ── */}
      <section id="why-join" className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] p-10 text-center text-white md:p-14">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-[var(--gold-soft)]">
              Why This Role?
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">
              Become the Face of{" "}
              <span className="text-[var(--gold)]">SkillArion</span> at Your
              Campus
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              Inspire your peers, help shape the next generation of
              industry-ready professionals, and build skills that last a
              lifetime — all while still in college.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
              {[
                { icon: Star, label: "Build Your Brand", desc: "Earn recognition on campus and in your professional network." },
                { icon: Users, label: "Lead a Community", desc: "Create a thriving student community at your institution." },
                { icon: Handshake, label: "Industry Connect", desc: "Get direct mentorship and connections with industry leaders." },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="rounded-2xl bg-white/5 p-5 text-left">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold)]/20 text-[var(--gold)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">{label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <section id="apply-cta" className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
            Apply Now
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
            Ready to Make an <span className="text-[var(--gold)]">Impact?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
            Fill out the application form below. Shortlisted candidates will be
            contacted for the next round.
          </p>
          {!showForm && (
            <button
              id="show-form-btn"
              onClick={() => setShowForm(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--navy)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--navy-deep)] hover:shadow-[0_8px_24px_-8px_rgba(40,40,90,0.5)]"
            >
              Apply for Campus Ambassador
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

      {/* ── Application Form ── */}
      {showForm && (
        <section id="application-form" className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_16px_48px_-24px_rgba(40,40,90,0.3)] md:p-12">
              <div className="mb-8 text-center">
                <span className="inline-flex rounded-full bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-semibold text-[var(--gold)]">
                  Application Form
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                  Campus Ambassador Application
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  SkillArion Development — Campus Ambassador Application Form.
                  Shortlisted candidates will be contacted for the next round.
                </p>
              </div>

              <AmbassadorForm />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ─── Detail Card ─── */
function DetailCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-[0_12px_32px_-24px_rgba(40,40,90,0.25)]">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
          >
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--gold)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Application Form ─── */
const SKILLS_LIST = [
  "Leadership",
  "Communication",
  "Public Speaking",
  "Event Management",
  "Social Media Marketing",
  "Content Creation",
  "AI/ML",
  "Web Development",
  "App Development",
  "Graphic Design",
  "Other",
];

const YEARS = ["1st", "2nd", "3rd", "Final", "PG"];

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  cityState: string;
  college: string;
  degree: string;
  currentYear: string;
  graduationYear: string;
  hasLeadership: string;
  leadershipRole: string;
  hasEvents: string;
  eventsDesc: string;
  hasAmbassador: string;
  ambassadorOrg: string;
  skills: string[];
  whyAmbassador: string;
  howPromote: string;
  linkedin: string;
  github: string;
  canDedicate: string;
  willingToOrganise: string;
  resumeFile: File | null;
  agreed: boolean;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  cityState: "",
  college: "",
  degree: "",
  currentYear: "",
  graduationYear: "",
  hasLeadership: "",
  leadershipRole: "",
  hasEvents: "",
  eventsDesc: "",
  hasAmbassador: "",
  ambassadorOrg: "",
  skills: [],
  whyAmbassador: "",
  howPromote: "",
  linkedin: "",
  github: "",
  canDedicate: "",
  willingToOrganise: "",
  resumeFile: null,
  agreed: false,
};

function AmbassadorForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const set = (
    field: keyof FormState,
    value: string | boolean | string[] | File | null,
  ) => setForm((prev) => ({ ...prev, [field]: value }));

  const toggleSkill = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email is required.";
    if (
      !form.whatsapp.trim() ||
      !/^\d{10}$/.test(form.whatsapp.replace(/\s/g, ""))
    )
      e.whatsapp = "Enter a valid 10-digit WhatsApp number.";
    if (!form.cityState.trim()) e.cityState = "City & State is required.";
    if (!form.college.trim())
      e.college = "College/University name is required.";
    if (!form.degree.trim()) e.degree = "Degree & Branch is required.";
    if (!form.currentYear) e.currentYear = "Please select your current year.";
    if (!form.graduationYear.trim())
      e.graduationYear = "Graduation year is required.";
    if (!form.whyAmbassador.trim()) e.whyAmbassador = "This field is required.";
    if (!form.howPromote.trim()) e.howPromote = "This field is required.";
    if (!form.canDedicate) e.canDedicate = "Please select Yes or No.";
    if (!form.willingToOrganise)
      e.willingToOrganise = "Please select Yes or No.";
    if (!form.resumeFile) e.resumeFile = "Please upload your resume.";
    if (!form.agreed) e.agreed = "You must agree to the declaration.";
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
      `SkillArion Development – Campus Ambassador Application\n\n` +
        `=== PERSONAL DETAILS ===\n` +
        `Full Name: ${form.fullName}\n` +
        `Email: ${form.email}\n` +
        `WhatsApp: ${form.whatsapp}\n` +
        `City & State: ${form.cityState}\n\n` +
        `=== ACADEMIC DETAILS ===\n` +
        `College/University: ${form.college}\n` +
        `Degree & Branch: ${form.degree}\n` +
        `Current Year: ${form.currentYear}\n` +
        `Graduation Year: ${form.graduationYear}\n\n` +
        `=== EXPERIENCE ===\n` +
        `Leadership Position: ${form.hasLeadership}${form.hasLeadership === "Yes" ? ` — ${form.leadershipRole}` : ""}\n` +
        `Organised Events: ${form.hasEvents}${form.hasEvents === "Yes" ? ` — ${form.eventsDesc}` : ""}\n` +
        `Prior Ambassador/Internship: ${form.hasAmbassador}${form.hasAmbassador === "Yes" ? ` — ${form.ambassadorOrg}` : ""}\n\n` +
        `=== SKILLS ===\n` +
        `${form.skills.join(", ") || "None selected"}\n\n` +
        `=== MOTIVATION ===\n` +
        `Why Campus Ambassador?\n${form.whyAmbassador}\n\n` +
        `How will you promote SkillArion?\n${form.howPromote}\n\n` +
        `=== SOCIAL PROFILES ===\n` +
        `LinkedIn: ${form.linkedin || "Not provided"}\n` +
        `GitHub/Portfolio: ${form.github || "Not provided"}\n\n` +
        `=== AVAILABILITY ===\n` +
        `Can dedicate 4–6 hrs/week: ${form.canDedicate}\n` +
        `Willing to organise events: ${form.willingToOrganise}\n\n` +
        `=== DECLARATION ===\n` +
        `Agreed: ${form.agreed ? "Yes" : "No"}\n\n` +
        `[Please attach your resume PDF to this email before sending]`,
    );

    window.location.href = `mailto:skillarionforfuture@gmail.com?subject=Campus%20Ambassador%20Application%20%E2%80%93%20${encodeURIComponent(form.fullName)}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm(INITIAL);
  };

  const inputCls = (field: keyof FormState) =>
    `w-full rounded-xl border ${errors[field] ? "border-red-500" : "border-border"} bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-colors`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {/* 1 — Personal Details */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={1} />
          Personal Details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="field-fullName" label="Full Name *" error={errors.fullName}>
            <input
              id="field-fullName"
              type="text"
              placeholder="Riya Sharma"
              value={form.fullName}
              onChange={(e) => set("fullName", e.target.value)}
              className={inputCls("fullName")}
            />
          </Field>
          <Field
            id="field-email"
            label="Email Address *"
            error={errors.email}
          >
            <input
              id="field-email"
              type="email"
              placeholder="riya@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className={inputCls("email")}
            />
          </Field>
          <Field
            id="field-whatsapp"
            label="WhatsApp Number *"
            error={errors.whatsapp}
          >
            <input
              id="field-whatsapp"
              type="tel"
              placeholder="9876543210"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              className={inputCls("whatsapp")}
            />
          </Field>
          <Field
            id="field-cityState"
            label="City & State *"
            error={errors.cityState}
          >
            <input
              id="field-cityState"
              type="text"
              placeholder="Hyderabad, Telangana"
              value={form.cityState}
              onChange={(e) => set("cityState", e.target.value)}
              className={inputCls("cityState")}
            />
          </Field>
        </div>
      </fieldset>

      <Divider />

      {/* 2 — Academic Details */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={2} />
          Academic Details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="field-college"
            label="College/University Name *"
            error={errors.college}
            className="sm:col-span-2"
          >
            <input
              id="field-college"
              type="text"
              placeholder="JNTU Hyderabad"
              value={form.college}
              onChange={(e) => set("college", e.target.value)}
              className={inputCls("college")}
            />
          </Field>
          <Field
            id="field-degree"
            label="Degree & Branch *"
            error={errors.degree}
          >
            <input
              id="field-degree"
              type="text"
              placeholder="B.Tech – Computer Science"
              value={form.degree}
              onChange={(e) => set("degree", e.target.value)}
              className={inputCls("degree")}
            />
          </Field>
          <Field
            id="field-currentYear"
            label="Current Year *"
            error={errors.currentYear}
          >
            <select
              id="field-currentYear"
              value={form.currentYear}
              onChange={(e) => set("currentYear", e.target.value)}
              className={inputCls("currentYear")}
            >
              <option value="">Select year</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </Field>
          <Field
            id="field-graduationYear"
            label="Graduation Year *"
            error={errors.graduationYear}
          >
            <input
              id="field-graduationYear"
              type="number"
              min="2024"
              max="2032"
              placeholder="2026"
              value={form.graduationYear}
              onChange={(e) => set("graduationYear", e.target.value)}
              className={inputCls("graduationYear")}
            />
          </Field>
        </div>
      </fieldset>

      <Divider />

      {/* 3 — Experience */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={3} />
          Experience
        </legend>
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="field-hasLeadership"
              label="Held any leadership position or part of college club?"
            >
              <YesNo
                id="field-hasLeadership"
                value={form.hasLeadership}
                onChange={(v) => set("hasLeadership", v)}
              />
            </Field>
            {form.hasLeadership === "Yes" && (
              <Field
                id="field-leadershipRole"
                label="If yes, mention the role."
              >
                <input
                  id="field-leadershipRole"
                  type="text"
                  placeholder="President – IEEE Student Branch"
                  value={form.leadershipRole}
                  onChange={(e) => set("leadershipRole", e.target.value)}
                  className={inputCls("leadershipRole")}
                />
              </Field>
            )}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="field-hasEvents"
              label="Have you organised any events or workshops?"
            >
              <YesNo
                id="field-hasEvents"
                value={form.hasEvents}
                onChange={(v) => set("hasEvents", v)}
              />
            </Field>
            {form.hasEvents === "Yes" && (
              <Field id="field-eventsDesc" label="If yes, briefly describe.">
                <input
                  id="field-eventsDesc"
                  type="text"
                  placeholder="Organised a 2-day hackathon for 200+ students."
                  value={form.eventsDesc}
                  onChange={(e) => set("eventsDesc", e.target.value)}
                  className={inputCls("eventsDesc")}
                />
              </Field>
            )}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="field-hasAmbassador"
              label="Completed any internship or served as Campus Ambassador before?"
            >
              <YesNo
                id="field-hasAmbassador"
                value={form.hasAmbassador}
                onChange={(v) => set("hasAmbassador", v)}
              />
            </Field>
            {form.hasAmbassador === "Yes" && (
              <Field
                id="field-ambassadorOrg"
                label="If yes, mention the organisation."
              >
                <input
                  id="field-ambassadorOrg"
                  type="text"
                  placeholder="Google DSC / Internshala"
                  value={form.ambassadorOrg}
                  onChange={(e) => set("ambassadorOrg", e.target.value)}
                  className={inputCls("ambassadorOrg")}
                />
              </Field>
            )}
          </div>
        </div>
      </fieldset>

      <Divider />

      {/* 4 — Skills */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={4} />
          Skills
        </legend>
        <p className="mb-3 text-sm font-medium text-foreground">
          Select your skills:
        </p>
        <div className="flex flex-wrap gap-2.5">
          {SKILLS_LIST.map((skill) => {
            const active = form.skills.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  active
                    ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--gold)]"
                    : "border-border bg-background text-muted-foreground hover:border-[var(--gold)]/50"
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </fieldset>

      <Divider />

      {/* 5 — Motivation */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={5} />
          Motivation
        </legend>
        <div className="space-y-5">
          <Field
            id="field-whyAmbassador"
            label="Why do you want to become a SkillArion Campus Ambassador? *"
            error={errors.whyAmbassador}
          >
            <textarea
              id="field-whyAmbassador"
              rows={4}
              placeholder="Share your motivation and what excites you about this role..."
              value={form.whyAmbassador}
              onChange={(e) => set("whyAmbassador", e.target.value)}
              className={`${inputCls("whyAmbassador")} resize-none`}
            />
          </Field>
          <Field
            id="field-howPromote"
            label="How will you promote SkillArion Development in your college? *"
            error={errors.howPromote}
          >
            <textarea
              id="field-howPromote"
              rows={4}
              placeholder="Describe your strategy and ideas..."
              value={form.howPromote}
              onChange={(e) => set("howPromote", e.target.value)}
              className={`${inputCls("howPromote")} resize-none`}
            />
          </Field>
        </div>
      </fieldset>

      <Divider />

      {/* 6 — Social Profiles */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={6} />
          Social Profiles
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="field-linkedin" label="LinkedIn Profile (Optional)">
            <input
              id="field-linkedin"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              value={form.linkedin}
              onChange={(e) => set("linkedin", e.target.value)}
              className={inputCls("linkedin")}
            />
          </Field>
          <Field id="field-github" label="GitHub / Portfolio (Optional)">
            <input
              id="field-github"
              type="url"
              placeholder="https://github.com/yourusername"
              value={form.github}
              onChange={(e) => set("github", e.target.value)}
              className={inputCls("github")}
            />
          </Field>
        </div>
      </fieldset>

      <Divider />

      {/* 7 — Availability */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={7} />
          Availability
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="field-canDedicate"
            label="Can you dedicate 4–6 hours per week? *"
            error={errors.canDedicate}
          >
            <YesNo
              id="field-canDedicate"
              value={form.canDedicate}
              onChange={(v) => set("canDedicate", v)}
            />
          </Field>
          <Field
            id="field-willingToOrganise"
            label="Willing to organise/promote SkillArion events in your college? *"
            error={errors.willingToOrganise}
          >
            <YesNo
              id="field-willingToOrganise"
              value={form.willingToOrganise}
              onChange={(v) => set("willingToOrganise", v)}
            />
          </Field>
        </div>
      </fieldset>

      <Divider />

      {/* 8 — Resume */}
      <fieldset>
        <legend className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <SectionBadge n={8} />
          Resume
        </legend>
        <Field
          id="field-resumeFile"
          label="Upload your Resume (PDF) *"
          error={errors.resumeFile}
        >
          <label
            htmlFor="resume-upload"
            className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
              errors.resumeFile
                ? "border-red-400"
                : "border-border hover:border-[var(--gold)]/60"
            } bg-background`}
          >
            <Upload className="mb-3 h-7 w-7 text-[var(--gold)]" />
            {form.resumeFile ? (
              <p className="text-sm font-medium text-foreground">
                {form.resumeFile.name}
              </p>
            ) : (
              <>
                <p className="text-sm font-medium text-foreground">
                  Click to upload your resume
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF format only, max 5 MB
                </p>
              </>
            )}
            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0] ?? null;
                set("resumeFile", file);
              }}
            />
          </label>
        </Field>
      </fieldset>

      <Divider />

      {/* Declaration */}
      <div className="rounded-2xl border border-border bg-secondary p-6">
        <p className="mb-4 text-sm font-semibold text-foreground">
          Declaration
        </p>
        <p className="mb-4 text-sm text-muted-foreground">
          I confirm that the information provided above is accurate to the best
          of my knowledge.
        </p>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            id="field-agreed"
            type="checkbox"
            checked={form.agreed}
            onChange={(e) => set("agreed", e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[var(--gold)] rounded"
          />
          <span className="text-sm text-foreground">
            I Agree to the above declaration
          </span>
        </label>
        {errors.agreed && (
          <p className="mt-1 text-xs text-red-500">{errors.agreed}</p>
        )}
      </div>

      {/* Submit */}
      <div className="text-center">
        <p className="mb-4 text-xs text-muted-foreground">
          Submitting will open your email client pre-filled with your
          application. Please also attach your resume PDF before sending.
        </p>
        <button
          id="submit-application-btn"
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--navy)] to-[var(--navy-deep)] px-10 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(40,40,90,0.5)] transition-all hover:shadow-[0_12px_32px_-8px_rgba(40,40,90,0.7)] hover:-translate-y-0.5"
        >
          <Send className="h-4 w-4" />
          Submit Application
        </button>
        {submitted && (
          <p className="mt-4 text-sm font-medium text-green-600">
            ✅ Your email client has been opened! Please attach your resume and
            send.
          </p>
        )}
      </div>
    </form>
  );
}

/* ─── helpers ─── */
function SectionBadge({ n }: { n: number }) {
  return (
    <div className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--gold)]/15 text-[var(--gold)] text-xs font-bold">
      {n}
    </div>
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
    <div id={id} className={className}>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function YesNo({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div id={id} className="flex gap-3">
      {["Yes", "No"].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`flex-1 rounded-xl border py-2.5 text-sm font-medium transition-all ${
            value === opt
              ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--gold)]"
              : "border-border bg-background text-muted-foreground hover:border-[var(--gold)]/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Divider() {
  return <hr className="border-border" />;
}
