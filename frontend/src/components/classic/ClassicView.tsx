import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { WorkApproachSection } from "./WorkApproachSection";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectSection } from "./ProjectSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";

export function ClassicView() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <Header />
      <main className="container mx-auto px-4 flex-1">
        <HeroSection />
        <AboutSection />
        <WorkApproachSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
      </main>
      <CtaSection />
      <Footer />
    </div>
  );
}
