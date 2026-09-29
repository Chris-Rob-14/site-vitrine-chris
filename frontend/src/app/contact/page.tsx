import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Header } from "@/components/classic/Header";
import { Footer } from "@/components/classic/Footer";
import { profile } from "@/data/profile";
import { contactPage as content } from "@/data/contactPage";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4">Aller au contenu</a>
      <Header currentHref="/contact" />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{content.introduction}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section aria-labelledby="email-title" className="min-w-0 rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-8 space-y-4">
              <Mail aria-hidden="true" className="h-6 w-6 text-primary" />
              <h2 id="email-title" className="text-2xl font-bold">{content.emailLabel}</h2>
              <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 max-w-full items-center text-primary underline underline-offset-4 break-all">{profile.email}</a>
            </section>
            <section aria-labelledby="linkedin-title" className="min-w-0 rounded-2xl border border-border bg-card/60 p-6 md:p-8 space-y-4">
              <Linkedin aria-hidden="true" className="h-6 w-6 text-primary" />
              <h2 id="linkedin-title" className="text-2xl font-bold">{content.linkedinLabel}</h2>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={`${content.linkedinAction} (nouvel onglet)`} className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{content.linkedinAction}</a>
            </section>
          </div>

          <section aria-labelledby="contexts-title" className="space-y-6">
            <h2 id="contexts-title" className="text-2xl md:text-3xl font-bold">{content.contextsTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{content.contextsIntroduction}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {content.contexts.map(context => <article key={context.title} className="min-w-0 rounded-2xl border border-border bg-card/60 p-6 space-y-4">
                <h3 className="text-xl font-bold">{context.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{context.description}</p>
                <a href={`mailto:${profile.email}?subject=${encodeURIComponent(context.subject)}`} className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{content.emailAction}<span className="sr-only"> : {context.title}</span></a>
              </article>)}
            </div>
          </section>
          <Link href="/a-propos" className="inline-flex min-h-11 items-center gap-2 text-primary underline underline-offset-4">{content.aboutLabel}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
