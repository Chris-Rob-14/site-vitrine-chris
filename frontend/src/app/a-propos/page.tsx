import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/classic/Header";
import { Footer } from "@/components/classic/Footer";
import { buttonVariants } from "@/components/ui/button-variants";
import { aboutPage as content } from "@/data/aboutPage";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experiences";
import { pillars } from "@/data/workApproach";
import { training } from "@/data/training";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

const currentExperience = experiences.find(experience => experience.id === "ca-neops-it");
const headingClass = "text-3xl md:text-5xl font-bold tracking-tight";
const sectionClass = "py-16 md:py-20 border-t border-border/40 space-y-8";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4">Aller au contenu</a>
      <Header currentHref="/a-propos" />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <section className="py-16 md:py-24 space-y-6 max-w-4xl">
            <p className="text-primary font-medium">{profile.name}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
            <p className="text-2xl md:text-3xl font-semibold">{content.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{content.introduction}</p>
            {currentExperience && <p className="text-sm text-muted-foreground border-l-2 border-primary pl-4"><span className="font-semibold text-foreground">{content.currentLabel} : </span>{currentExperience.role}</p>}
          </section>

          <section aria-labelledby="evolution-title" className={sectionClass}>
            <h2 id="evolution-title" className={headingClass}>{content.evolutionTitle}</h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{content.evolutionDescription}</p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...experiences].reverse().map(experience => <li key={experience.id} className="min-w-0 rounded-2xl border border-border bg-card/60 p-6 space-y-4">
                <p className="text-primary text-sm font-medium">{experience.date}</p>
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <p className="text-sm text-muted-foreground">{experience.company}</p>
                <p className="text-muted-foreground leading-relaxed">{experience.description[0]}</p>
              </li>)}
            </ol>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 border-t border-border/40">
            <section aria-labelledby="education-title" className="rounded-2xl border border-border bg-card/60 p-6 space-y-4">
              <h2 id="education-title" className="text-2xl font-bold">{content.educationTitle}</h2>
              <p className="font-medium">{profile.education.title}</p>
              <p className="text-muted-foreground">{profile.education.school}</p>
              <p className="text-primary font-medium">{profile.education.certification}</p>
            </section>
            <section aria-labelledby="location-title" className="rounded-2xl border border-border bg-card/60 p-6 space-y-4">
              <h2 id="location-title" className="text-2xl font-bold">{content.locationTitle}</h2>
              <p className="font-medium">{profile.location.region}</p>
              <p className="text-muted-foreground">{profile.location.areas.join(" / ")}</p>
            </section>
          </div>

          <section aria-labelledby="approach-title" className={sectionClass}>
            <h2 id="approach-title" className={headingClass}>{content.approachTitle}</h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{content.approachDescription}</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">{pillars.map(pillar => <li key={pillar.title} className="rounded-xl border border-border bg-card/60 p-5 font-medium">{pillar.title}</li>)}</ul>
          </section>

          <section aria-labelledby="transmission-title" className={sectionClass}>
            <h2 id="transmission-title" className={headingClass}>{content.transmissionTitle}</h2>
            {training.status === "planned" && <p className="text-primary text-sm font-medium">{content.transmissionStatus}</p>}
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{content.transmissionDescription}</p>
          </section>

          <section aria-labelledby="facets-title" className={sectionClass}>
            <h2 id="facets-title" className={headingClass}>{content.facetsTitle}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">{content.facets.map(facet => <article key={facet.href} className="min-w-0 rounded-2xl border border-border bg-card/60 p-6 space-y-4">
              <h3 className="text-xl font-bold"><Link href={facet.href} className="inline-flex min-h-11 items-center gap-2 text-primary underline underline-offset-4">{facet.title}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link></h3>
              <p className="text-muted-foreground leading-relaxed">{facet.description}</p>
            </article>)}</div>
            <Link href="/contact" className={buttonVariants({ size: "lg" }) + " min-h-11 h-auto whitespace-normal"}>{content.contactLabel}<ArrowRight aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
