import { Linkedin, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-zinc-50/50 dark:bg-black/50 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg tracking-tight">Christopher Robine</p>
          <p className="text-sm text-muted-foreground">
            Chef de Projet Technique | Developpeur Full Stack | Product Engineer
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Christopher Robine. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/christopher-robine-767981134/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={
              buttonVariants({ variant: "ghost", size: "icon" }) +
              " hover:text-primary hover:bg-primary/10 transition-colors"
            }
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:christopher.robine@gmail.com"
            aria-label="Email"
            className={
              buttonVariants({ variant: "ghost", size: "icon" }) +
              " hover:text-primary hover:bg-primary/10 transition-colors"
            }
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
