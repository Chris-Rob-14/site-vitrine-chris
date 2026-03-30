"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function GameWorld() {
  const gameRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    // We must dynamically import Phaser since it requires the `window` object
    // which is not available during Next.js SSR.
    let game: Phaser.Game;

    const initPhaser = async () => {
      const Phaser = await import("phaser");

      class MainScene extends Phaser.Scene {
        private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
        private chests!: Phaser.Physics.Arcade.StaticGroup;

        constructor() {
          super({ key: "MainScene" });
        }

        preload() {
          // Load assets generated earlier
          this.load.image("player", "/gamified/rpg_character_sprite_1773670068084.png");
          this.load.image("chest", "/gamified/rpg_chest_sprite_1773670084879.png");
        }

        create() {
          // Setup background grid
          this.add.grid(0, 0, 1600, 1200, 64, 64, 0x1a1a2e, 1, 0x2d2d44, 1);

          // Add player
          this.player = this.physics.add.sprite(400, 300, "player");
          this.player.setCollideWorldBounds(true);
          
          // Since our generated image is 32x32 but might be upscaled, scale it
          this.player.setDisplaySize(64, 64);

          // Add chests (projects)
          this.chests = this.physics.add.staticGroup();
          
          const chestPositions = [
            { x: 200, y: 200, title: "Refonte d'outils de gestion fraude" },
            { x: 600, y: 200, title: "Migration du portail frontend" },
            { x: 200, y: 500, title: "Conformité RGPD & Gouvernance" },
            { x: 600, y: 500, title: "Site vitrine institutionnel" }
          ];

          chestPositions.forEach(pos => {
            const chest = this.chests.create(pos.x, pos.y, "chest");
            chest.setDisplaySize(64, 64);
            chest.refreshBody();
            // Store data inside the chest object
            chest.setData("title", pos.title);
            
            // Add a text label above the chest
            this.add.text(pos.x, pos.y - 50, "Projet", { 
              fontFamily: "Outfit", 
              fontSize: "14px", 
              color: "#ff5e00" 
            }).setOrigin(0.5);
          });

          // Collisions
          this.physics.add.collider(this.player, this.chests, this.handleChestCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback, undefined, this);

          // Controls
          if (this.input.keyboard) {
            this.cursors = this.input.keyboard.createCursorKeys();
          }

          // Camera
          this.cameras.main.startFollow(this.player);
          this.cameras.main.setZoom(1.5);

          // Force focus on click so keyboard works in React
          this.input.on('pointerdown', () => {
             this.game.canvas.focus();
          });
        }

        update() {
          if (!this.cursors) return;

          const speed = 200;
          this.player.setVelocity(0);

          if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
          } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
          }

          if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
          } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
          }
        }

        handleChestCollision(player: any, chest: any) {
             // We can emit an event here to notify React
            this.game.events.emit("chest_opened", chest.getData("title"));
        }
      }

      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        parent: gameRef.current!,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "#0f0f13", // Very dark purple/black
        physics: {
          default: "arcade",
          arcade: {
            debug: false,
          },
        },
        scene: MainScene,
      };

      game = new Phaser.Game(config);
      setIsLoaded(true);

      // Listen for events from Phaser scene to interface with React UI
      game.events.on("chest_opened", (title: string) => {
        // Debounce or handle UI popup modal here
        console.log("Opened chest:", title);
        // Dispatch custom DOM event to optionally let React catch it above Phaser
        window.dispatchEvent(new CustomEvent("project_chest_opened", { detail: { title } }));
      });
    };

    if (typeof window !== "undefined") {
      initPhaser();
    }

    const handleResize = () => {
      if (game) {
        game.scale.resize(window.innerWidth, window.innerHeight);
      }
    };

    const handleProjectEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveProject(customEvent.detail.title);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("project_chest_opened", handleProjectEvent);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("project_chest_opened", handleProjectEvent);
      if (gameRef.current) { // Just closure cleanup 
        // game.destroy is handled inside initPhaser closure if needed, but Next API doesn't guarantee it nicely
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0f0f13]">
      <div ref={gameRef} className="absolute inset-0 z-0" />
      
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
          <div className="text-primary font-mono text-xl animate-pulse">Chargement de l'univers 2D...</div>
        </div>
      )}

      {/* Phaser DOM UI Overlay Layer */}
      <div className="absolute z-20 top-8 left-8 pointer-events-none">
        <h2 className="text-3xl font-bold text-white uppercase drop-shadow-[0_0_10px_rgba(255,94,0,0.8)]">
          Playground Mode
        </h2>
        <p className="text-white/70 italic mt-2">Utilisez les flèches directionnelles pour vous déplacer vers les coffres.</p>
      </div>

      {/* Active Project Modal */}
      {activeProject && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-card border border-primary/50 rounded-2xl p-8 relative shadow-[0_0_50px_rgba(255,94,0,0.2)] animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-primary mb-4">{activeProject}</h3>
            <p className="text-muted-foreground mb-6">
              (Détails du projet à charger depuis la base de données ou les props)
              <br /><br />
              Vous venez de découvrir ce projet en explorant le monde 2D !
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded border border-primary/20 text-sm">React</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20 text-sm">Phaser</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
