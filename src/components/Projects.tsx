import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Trinity Intelligence Platform",
    description: "AI-powered automation platform delivering scalable solutions for enterprise workflow optimization.",
    tags: ["AI", "Automation", "DevOps"],
    github: "https://github.com",
    live: "https://trinityintelligence.com",
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated deployment and scaling system reducing infrastructure management overhead by 70%.",
    tags: ["Cloud", "CI/CD", "Infrastructure"],
    github: "https://github.com",
  },
  {
    title: "AI Learning Assistant",
    description: "Intelligent tutoring system helping developers upskill with personalized learning paths and feedback.",
    tags: ["AI", "Education", "NLP"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Building tools and systems that solve real problems
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
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
