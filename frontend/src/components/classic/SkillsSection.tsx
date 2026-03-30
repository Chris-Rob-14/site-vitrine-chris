import { Badge } from "@/components/ui/badge";
import { Server, Layout, Container, Cpu, FileCog } from "lucide-react";
import { SiSymfony, SiPhp, SiSwagger, SiMysql, SiNextdotjs, SiReact, SiAngular, SiTailwindcss, SiStorybook, SiGitlab, SiTrello, SiLinux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: [
        { name: "Symfony", logo: <SiSymfony className="w-4 h-4 mr-2" /> },
        { name: "PHP", logo: <SiPhp className="w-4 h-4 mr-2" /> },
        { name: "Swagger", logo: <SiSwagger className="w-4 h-4 mr-2" /> },
        { name: "MySQL", logo: <SiMysql className="w-4 h-4 mr-2" /> }
      ],
      color: "border-primary text-primary bg-primary/10"
    },
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-secondary" />,
      skills: [
        { name: "Next.js", logo: <SiNextdotjs className="w-4 h-4 mr-2" /> },
        { name: "React", logo: <SiReact className="w-4 h-4 mr-2" /> },
        { name: "AngularJS", logo: <SiAngular className="w-4 h-4 mr-2" /> },
        { name: "Tailwind CSS", logo: <SiTailwindcss className="w-4 h-4 mr-2" /> },
        { name: "Storybook", logo: <SiStorybook className="w-4 h-4 mr-2" /> },
        { name: "Shadcn UI", logo: null }
      ],
      color: "border-secondary text-secondary bg-secondary/10"
    },
    {
      title: "Architecture",
      icon: <Container className="w-5 h-5 text-purple-500" />,
      skills: [
        { name: "API Design", logo: null },
        { name: "Open API", logo: null },
        { name: "Application architecture", logo: null },
        { name: "Technical design", logo: null }
      ],
      color: "border-purple-500 text-purple-500 bg-purple-500/10"
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      skills: [
        { name: "GitLab", logo: <SiGitlab className="w-4 h-4 mr-2" /> },
        { name: "VS Code", logo: <VscVscode className="w-4 h-4 mr-2" /> },
        { name: "Trello", logo: <SiTrello className="w-4 h-4 mr-2" /> },
        { name: "Linux", logo: <SiLinux className="w-4 h-4 mr-2" /> },
        { name: "CI/CD", logo: null }
      ],
      color: "border-blue-500 text-blue-500 bg-blue-500/10"
    },
    {
      title: "Engineering & Methods",
      icon: <FileCog className="w-5 h-5 text-emerald-500" />,
      skills: [
        { name: "Documentation", logo: null },
        { name: "Convention de code", logo: null },
        { name: "Agile", logo: null },
        { name: "MoSCoW", logo: null },
        { name: "T-shirt sizing", logo: null }
      ],
      color: "border-emerald-500 text-emerald-500 bg-emerald-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-border/40">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Design & <span className="text-secondary">Engineering Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une combinaison de compétences techniques approfondies et de méthodes agiles pour la réussite des projets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-border bg-card hover:border-border/80 transition-all space-y-4 group"
            >
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-foreground transition-colors flex items-center gap-2">
                {category.icon}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className={`font-mono flex items-center pr-3 py-1 text-sm ${category.color}`}>
                    {skill.logo}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
