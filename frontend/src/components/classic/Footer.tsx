import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-zinc-50/50 dark:bg-black/50 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_auto] gap-8">
        <div className="space-y-2">
          <p className="font-bold text-lg tracking-tight">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.transversePositioning}</p>
          <p className="text-xs text-muted-foreground">
            Copyright {new Date().getFullYear()} {profile.name}. Tous droits réservés.
          </p>
        </div>
        <nav aria-label="Navigation de pied de page">
          <ul className="grid grid-cols-2 gap-x-6 text-sm">
            {navigation.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap lg:flex-col gap-x-6 gap-y-2">
          <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 text-sm hover:text-primary">
            <Mail aria-hidden="true" className="h-4 w-4" />E-mail
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Profil LinkedIn (nouvel onglet)" className="inline-flex min-h-11 items-center gap-2 text-sm hover:text-primary">
            <Linkedin aria-hidden="true" className="h-4 w-4" />LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
