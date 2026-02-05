import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SafeMint / QIEDEX",
    subtitle: "Trust-First Token Launchpad",
    description: "Built a trust-first DeFi token launch platform enforcing mandatory liquidity locks and fair-launch rules to prevent rug pulls. Implemented token, validator, and governance dashboards with real-time trust status.",
    tags: ["React.js", "Solidity", "Express", "Docker", "QIEDEX SDK"],
    github: "https://github.com/hari-hara-sudharsan/tokenCreator",
    image: null // Placeholder for project image if needed
  },
  {
    title: "CREO for Retail",
    subtitle: " A GenAI Creative genartion and management System",
    description: "Built a GenAI Retail Creative and Management System with retail guidelines. Implemented a fail-fast validation engine to block forbidden claims, pricing errors, alcohol violations, and layout breaches,reducing rejection risk by 60%. ",
    tags: ["OpenCV", "GenAI", "Image Processing"],
    github: "https://github.com/madhesh60/CREO-for-retail",
    image: null
  },
  {
    title: "Baseline Extension",
    subtitle: "Browser Extension for Devs",
    description: "Developed a browser extension scanning code for unsupported web features, improving code compliance by 45%. Enabled real-time compatibility checks using MDN Baseline API.",
    tags: ["JavaScript", "Node.js", "MDN Baseline API"],
    github: "https://github.com/madhesh60/BaseLine",
    image: null
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Selected Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of projects focusing on blockchain, developer tools, and secure systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2 border-t border-border/50">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
