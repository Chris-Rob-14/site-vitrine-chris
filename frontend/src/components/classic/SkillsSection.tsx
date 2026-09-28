import { skillCategories } from "@/data/skills";
import type { IconType } from "react-icons";
import { Badge } from "@/components/ui/badge";
import { Server, Layout, Container, Cpu, FileCog } from "lucide-react";
import {
  SiSymfony,
  SiPhp,
  SiSwagger,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiStorybook,
  SiGitlab,
  SiTrello,
  SiLinux,
  SiJira,
  SiOpenapiinitiative,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categoryStyles: Record<string, { Icon: typeof FileCog; color: string }> =
  {
    analysis: {
      Icon: FileCog,
      color: "border-primary text-primary bg-primary/10",
    },
    delivery: {
      Icon: Cpu,
      color: "border-secondary text-secondary bg-secondary/10",
    },
    frontend: {
      Icon: Layout,
      color: "border-purple-500 text-purple-500 bg-purple-500/10",
    },
    backend: {
      Icon: Server,
      color: "border-blue-500 text-blue-500 bg-blue-500/10",
    },
    architecture: {
      Icon: Container,
      color: "border-emerald-500 text-emerald-500 bg-emerald-500/10",
    },
  };
const skillIcons: Record<string, IconType> = {
  Trello: SiTrello,
  Jira: SiJira,
  GitLab: SiGitlab,
  "Next.js": SiNextdotjs,
  React: SiReact,
  AngularJS: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  Storybook: SiStorybook,
  Symfony: SiSymfony,
  PHP: SiPhp,
  Swagger: SiSwagger,
  OpenAPI: SiOpenapiinitiative,
  MySQL: SiMysql,
  "VS Code": VscVscode,
  Linux: SiLinux,
};

export function SkillsSection() {
  return (
    <section
      tabIndex={-1}
      id="skills"
      className="py-20 border-t border-border/40"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Analyse, delivery{" "}
            <span className="text-secondary">& expertise technique</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un positionnement hybride entre analyse fonctionnelle, pilotage de
            projet et exécution technique pour faire avancer les sujets de façon
            concrète.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const { Icon, color } = categoryStyles[category.id];
            return (
              <div
                key={category.id}
                className="p-6 rounded-xl border border-border bg-card hover:border-border/80 transition-all space-y-4 group"
              >
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon
                    aria-hidden="true"
                    className={`w-5 h-5 ${color.split(" ").find((token) => token.startsWith("text-"))}`}
                  />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill];
                    return (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`font-mono flex items-center pr-3 py-1 text-sm ${color}`}
                      >
                        {SkillIcon && (
                          <SkillIcon
                            aria-hidden="true"
                            className="w-4 h-4 mr-2"
                          />
                        )}
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
