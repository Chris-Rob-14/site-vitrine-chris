import { profile } from "@/data/profile";
import { Linkedin, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-zinc-50/50 dark:bg-black/50 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg tracking-tight">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            {profile.transversePositioning}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Copyright {new Date().getFullYear()} {profile.name}. Tous droits
            réservés.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Profil LinkedIn (nouvel onglet)"
            className={
              buttonVariants({ variant: "ghost", size: "icon" }) +
              " min-h-11 min-w-11 hover:text-primary hover:bg-primary/10 transition-colors"
            }
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Envoyer un e-mail"
            className={
              buttonVariants({ variant: "ghost", size: "icon" }) +
              " min-h-11 min-w-11 hover:text-primary hover:bg-primary/10 transition-colors"
            }
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
