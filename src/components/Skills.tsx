import { Code2, Database, Globe, Wrench, Server, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "SQL", "JavaScript", "Python", "Solidity","TypeScript","Rust","Go"],
  },
  {
    title: "Development",
    icon: Globe,
    skills: ["React.js", "Node.js", "Express.js", "HTML-CSS", "Tailwind"],
  },
  {
    title: "DevOps & Cloud",
    icon: Server,
    skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions","Kafka","Redis"],
  },
  {
    title: "DL and ML",
    icon: Database,
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "NLP"],
  },
  {
    title: "Agentic AI",
    icon: Database,
    skills: ["MCP Servers", "RAG", "n8n","LangChain","LangGraph","LangSmith"],
  },
  {
    title: "Tools & Software",
    icon: Wrench,
    skills: ["Git", "Cursor", "Postman", "Linux", "Firebase"],
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "Networking"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Arsenal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable, secure, and performant applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-secondary/80 border border-border text-foreground text-sm rounded-lg font-medium hover:bg-secondary hover:border-accent/50 transition-colors cursor-default"
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
