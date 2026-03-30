"use client";

import { useState, useEffect } from "react";
import { ClassicView } from "@/components/classic/ClassicView";
import { GameWorld } from "@/components/gamified/GameWorld";
import { Button } from "@/components/ui/button";
import { Monitor, Gamepad2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function PortfolioSwitcher() {
  const [mode, setMode] = useState<"classic" | "gamified">("classic");
  const { theme, setTheme } = useTheme();
  // Avoid hydration mismatch by waiting for mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors relative">
      <div className="fixed top-4 right-4 z-50 flex gap-4">
        {mounted && (
          <Button 
            variant="outline" 
            size="icon"
            className="border-primary/50 bg-background hover:border-primary hover:shadow-[var(--drop-shadow-glow-orange)] transition-all"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-primary" />}
          </Button>
        )}
        <Button
          variant="outline"
          className="hidden border-secondary/50 bg-background hover:border-secondary hover:shadow-[var(--drop-shadow-glow-purple)] transition-all"
          onClick={() => setMode(mode === "classic" ? "gamified" : "classic")}
        >
          {mode === "classic" ? (
            <><Gamepad2 className="mr-2 h-4 w-4 text-secondary" /> Play Game</>
          ) : (
            <><Monitor className="mr-2 h-4 w-4 text-secondary" /> Classic View</>
          )}
        </Button>
      </div>

      {mode === "classic" ? <ClassicView /> : <GameWorld />}
    </div>
  );
}
