import { createFileRoute } from "@tanstack/react-router";
import {
  SkillarionLayout,
  Contact,
} from "@/components/skillarion/SkillarionHome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SkillArion Development" },
      { name: "description", content: "Reach SkillArion Development for admissions, partnerships and program enquiries." },
      { property: "og:title", content: "Contact — SkillArion Development" },
      { property: "og:description", content: "Multiple ways to reach us — call, email, WhatsApp, LinkedIn, Instagram." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SkillarionLayout>
      <div className="pt-24" />
      <Contact />
    </SkillarionLayout>
  );
}
