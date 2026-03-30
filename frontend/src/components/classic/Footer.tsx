import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-zinc-50/50 dark:bg-black/50 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg tracking-tight">Christopher Robine</p>
          <p className="text-sm text-muted-foreground">Chef de Projet Technique | Product Engineer</p>
          <p className="text-xs text-muted-foreground mt-2">© {new Date().getFullYear()} Christopher Robine. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://linkedin.com/in/christopher-robine" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn"
            className={buttonVariants({ variant: "ghost", size: "icon" }) + " hover:text-primary hover:bg-primary/10 transition-colors"}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          
          <a 
            href="https://github.com/christopher-robine" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub"
            className={buttonVariants({ variant: "ghost", size: "icon" }) + " hover:text-secondary hover:bg-secondary/10 transition-colors"}
          >
            <Github className="h-5 w-5" />
          </a>
          
          <a 
            href="mailto:christopher.robine@gmail.com" 
            aria-label="Email"
            className={buttonVariants({ variant: "ghost", size: "icon" }) + " hover:text-primary hover:bg-primary/10 transition-colors"}
          >
            <Mail className="h-5 w-5" />
          </a>
          
          <a 
            href="/CV_Christopher_Robine.pdf" 
            download
            className={buttonVariants({ variant: "outline" }) + " ml-4 border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"}
          >
            <FileText className="h-4 w-4 mr-2" />
            Télécharger CV
          </a>
        </div>
      </div>
    </footer>
  );
}
