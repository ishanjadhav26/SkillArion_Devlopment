import { createFileRoute } from "@tanstack/react-router";
import {
  SkillarionLayout,
  Subscription,
  MoU,
} from "@/components/skillarion/SkillarionHome";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — SkillArion Development" },
      { name: "description", content: "Branch-wise emerging technology programs: AI, Quantum, VLSI, Cloud, IoT, EV, Robotics and more." },
      { property: "og:title", content: "Courses — SkillArion Development" },
      { property: "og:description", content: "Industry-ready programs with hands-on projects and placement support." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <SkillarionLayout>
      <div className="pt-24" />
      <Subscription />
      <MoU />
    </SkillarionLayout>
  );
}
