"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

type ReflectionCard = {
  number: number;
  image: string;
  title: string;
  hook: string;
  intro: string;
  flow?: string[];
  bullets?: string[];
  tools?: string[];
  closing?: string;
};

const reflections: ReflectionCard[] = [
  {
    number: 1,
    image: "/skill-cards/1-un-excel-derriere-chaque-outil.jpg",
    title: "Transformer un Excel en application web",
    hook: "70% des outils internes que j'ai rencontres commencent par un simple Excel.",
    intro:
      "Un tableur n'est souvent que la partie visible du probleme. Derriere se cachent generalement :",
    flow: ["Regles metier", "Validations", "Workflow", "Historique", "Reporting"],
    closing:
      "Ma methode : identifier les donnees, comprendre les regles, cartographier le workflow, construire une interface adaptee puis automatiser les traitements.",
  },
  {
    number: 2,
    image: "/skill-cards/2-copier-coller.png",
    title: "Le cout cache du copier-coller",
    hook: "5 minutes perdues par jour representent plus de 20 heures par an.",
    intro:
      "L'automatisation n'est pas toujours spectaculaire. Parfois, elle consiste simplement a supprimer :",
    flow: ["Copier", "Coller", "Retaper", "Verifier"],
    closing:
      "Des taches repetitives qui generent des erreurs et mobilisent inutilement les equipes.",
  },
  {
    number: 4,
    image: "/skill-cards/4-tdd-structure.jpg",
    title: "Les 5 questions que je me pose avant chaque fonctionnalite",
    hook: "Une fonctionnalite mal definie coute souvent plus cher que son developpement.",
    intro: "Avant de developper, je cherche toujours a repondre a :",
    bullets: [
      "Quelle est l'entree ?",
      "Quelle est la sortie ?",
      "Quelles sont les regles ?",
      "Quels sont les cas d'erreur ?",
      "Qui est responsable ?",
    ],
    closing: "Ces cinq questions revelent souvent l'architecture necessaire.",
  },
  {
    number: 10,
    image: "/skill-cards/10-low-code-no-code.jpg",
    title: "La meilleure solution n'est pas toujours celle qui demande le plus de code",
    hook:
      "Parfois quelques heures de configuration remplacent plusieurs semaines de developpement.",
    intro:
      "Avant de lancer un developpement specifique, je cherche toujours a identifier la solution la plus adaptee au besoin. Selon le contexte, cela peut etre :",
    flow: ["Low-Code", "No-Code", "Automatisation", "Developpement sur mesure"],
    tools: ["Damaaas", "WeWeb", "Bubble", "Airtable", "Bolt", "V0"],
    closing:
      "L'objectif n'est pas de coder plus. L'objectif est de resoudre le probleme efficacement.",
  },
  {
    number: 3,
    image: "/skill-cards/3-reflechir-avant-coder.jpg",
    title: "Pourquoi je reflechis avant de coder",
    hook: "Corriger une erreur d'architecture coute souvent plus cher que l'eviter.",
    intro: "Avant d'ecrire du code, je cherche a comprendre :",
    flow: ["Entree", "Traitement", "Sortie", "Erreurs possibles"],
    closing:
      "Le TDD m'aide a identifier les comportements attendus avant meme de penser a l'implementation. Les responsabilites apparaissent alors plus naturellement.",
  },
  {
    number: 7,
    image: "/skill-cards/7-role-frontend.jpg",
    title: "Le role reel du Front-End",
    hook: "Le front guide l'utilisateur. Le back applique les regles metier.",
    intro: "J'essaie toujours de garder une separation claire :",
    bullets: [
      "Front : affichage, validation legere, experience utilisateur",
      "Back : validation metier, traitements, persistance",
    ],
    closing: "Cette approche reduit les bugs et simplifie les evolutions.",
  },
  {
    number: 5,
    image: "/skill-cards/5-le-controller-orchestrateur.jpg",
    title: "Pourquoi un controleur ne devrait presque rien faire",
    hook: "1 responsabilite = 1 role.",
    intro:
      "Le controleur est souvent le premier endroit ou l'on ajoute du code. Pourtant son role est simple :",
    flow: ["Recevoir", "Transmettre", "Repondre"],
    closing:
      "La logique metier appartient aux services. L'acces aux donnees appartient aux repositories. Un controleur leger est plus facile a maintenir, tester et faire evoluer.",
  },
  {
    number: 6,
    image: "/skill-cards/6-quand-creer-un-service.jpg",
    title: "Quand creer un nouveau service ?",
    hook:
      "La vraie question n'est pas ou mettre le code, mais qui doit en etre responsable.",
    intro: "Lorsque je developpe une fonctionnalite, je me demande :",
    bullets: [
      "Cette logique sera-t-elle reutilisee ?",
      "Cette responsabilite est-elle clairement definie ?",
      "Cette partie risque-t-elle d'evoluer ?",
    ],
    closing: "Si la reponse est oui, il est souvent temps d'isoler un service dedie.",
  },
  {
    number: 9,
    image: "/skill-cards/9-bonnes-pratiques.jpg",
    title: "Les conventions valent parfois plus qu'un framework",
    hook: "Un developpeur passe souvent plus de temps a lire du code qu'a en ecrire.",
    intro:
      "La qualite logicielle ne repose pas uniquement sur les technologies utilisees. Des conventions simples permettent souvent de reduire considerablement la charge mentale :",
    flow: ["Nommage coherent", "Architecture claire", "Responsabilites explicites", "Code lisible"],
    closing:
      "J'essaie de privilegier des noms explicites, une structure previsible et des responsabilites bien separees. Un projet maintenable est avant tout un projet comprehensible.",
  },
  {
    number: 8,
    image: "/skill-cards/8-docker-container.jpg",
    title: "Docker : le 20/80 qui change tout",
    hook: "Quelques commandes suffisent pour reproduire un environnement complet.",
    intro:
      "Je ne cherche pas a devenir expert DevOps. Je cherche a disposer d'environnements :",
    flow: ["Reproductibles", "Portables", "Documentes", "Faciles a deployer"],
    closing: "Docker apporte souvent 80% de la valeur avec 20% des connaissances.",
  },
];

function FlowList({ items }: { items: string[] }) {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <div key={item} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="mt-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(255,94,0,0.45)]"></span>
            {index < items.length - 1 && <span className="mt-2 h-10 w-px bg-gradient-to-b from-primary/70 to-transparent"></span>}
          </div>
          <div className="pb-4">
            <span className="inline-flex px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ThinkingCardsSection() {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (number: number) => {
    setOpenCards((current) =>
      current.includes(number) ? current.filter((item) => item !== number) : [...current, number],
    );
  };

  return (
    <section id="reflexions" className="py-20 border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[540px] h-[540px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ma facon de <span className="text-primary">reflechir</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Quelques principes qui guident ma maniere d'aborder un outil, une fonctionnalite
            ou une problematique metier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reflections.map((card) => {
            const isOpen = openCards.includes(card.number);

            return (
              <article
                key={card.number}
                className="rounded-2xl border border-border bg-card/70 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-primary/40 transition-colors"
              >
                <div className="relative h-56 w-full">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent"></div>
                </div>

                <div className="p-8 space-y-5">
                  <div className="space-y-2">
                    <p className="text-sm font-mono uppercase tracking-[0.2em] text-primary">
                      Reflexion #{card.number}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">{card.title}</h3>
                  </div>

                  <p className="text-lg font-medium text-foreground/90">{card.hook}</p>

                  <button
                    type="button"
                    onClick={() => toggleCard(card.number)}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    <span>Ma reflexion</span>
                    <ArrowRight className="h-4 w-4" />
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="space-y-5 border-t border-border/50 pt-5">
                      <p className="text-muted-foreground leading-relaxed">{card.intro}</p>

                      {card.flow && <FlowList items={card.flow} />}

                      {card.bullets && (
                        <ul className="space-y-2 text-muted-foreground">
                          {card.bullets.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="text-primary">*</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {card.tools && (
                        <div className="flex flex-wrap gap-2">
                          {card.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded-md border border-secondary/20"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}

                      {card.closing && (
                        <p className="text-muted-foreground leading-relaxed border-t border-border/50 pt-5">
                          {card.closing}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
