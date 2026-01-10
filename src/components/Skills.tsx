import { Code2, Database, Globe, Wrench, Server, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "SQL", "JavaScript", "Python", "Solidity"],
  },
  {
    title: "Development",
    icon: Globe,
    skills: ["React.js", "Node.js", "Express.js", "HTML-CSS", "Tailwind"],
  },
  {
    title: "DevOps & Cloud",
    icon: Server,
    skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
  },
  {
    title: "AI and ML",
    icon: Database,
    skills: ["Tensorflow", "PyTorch", "Keras", "Scikit-learn", "OpenCV","NLP"],
  },
  {
    title: "Agentic AI ",
    icon: Database,
    skills: ["MCP Servers", "RAG", "n8n"],
  },
  {
    title: "Tools & Software",
    icon: Wrench,
    skills: ["Git", "Cursor", "Postman", "Linux","Firebase"],
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "Networking"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Arsenal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable, secure, and performant applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-3xl border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-background border border-border text-muted-foreground text-sm rounded-lg font-medium hover:text-foreground hover:border-accent/50 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
