import { ChevronDown } from "lucide-react";
import { home } from "@/data/homepage";
import { ExperienceSection } from "./ExperienceSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ThinkingCardsSection } from "./ThinkingCardsSection";

const sections = [ExperienceSection, AboutSection, SkillsSection, ThinkingCardsSection];

export function HomeDetailsSection() {
  return (
    <section id="parcours" tabIndex={-1} aria-labelledby="details-title" className="py-16 md:py-20 border-t border-border/40">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 id="details-title" className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-10">{home.detailsTitle}</h2>
        {sections.map((Section, index) => (
          <details key={home.details[index]} className="group/overview rounded-2xl border border-border bg-card/30">
            <summary className="list-none cursor-pointer min-h-11 flex items-center justify-between gap-4 p-4 md:p-6 font-semibold text-lg">
              {home.details[index]}
              <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform group-open/overview:rotate-180" />
            </summary>
            <Section />
          </details>
        ))}
      </div>
    </section>
  );
}
