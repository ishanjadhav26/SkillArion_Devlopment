import { createFileRoute } from "@tanstack/react-router";
import { SkillarionHome } from "@/components/skillarion/SkillarionHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillArion Development — Bridging Academia & Industry" },
      { name: "description", content: "Hands-on technical workshops, internships, scholarships and placement programs for engineering and polytechnic students." },
      { property: "og:title", content: "SkillArion Development — Bridging Academia & Industry" },
      { property: "og:description", content: "Hands-on technical workshops, internships, scholarships and placement programs for engineering and polytechnic students." },
    ],
  }),
  component: Index,
});

function Index() {
  return <SkillarionHome />;
}
