import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { WorkApproachSection } from "./WorkApproachSection";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectSection } from "./ProjectSection";
import { ThinkingCardsSection } from "./ThinkingCardsSection";
import { OpportunitySection } from "./OpportunitySection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";

export function ClassicView() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4 focus:text-foreground"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <div className="container mx-auto px-4">
          <HeroSection />
          <AboutSection />
          <WorkApproachSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectSection />
          <ThinkingCardsSection />
          <OpportunitySection />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
