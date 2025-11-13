import { Brain, Cloud, Code2, Database, GitBranch, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "LangChain", "OpenAI APIs", "Hugging Face"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Linux", "VS Code", "Postman", "Figma"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["GitHub", "GitLab", "Git Flow", "Code Review", "Open Source"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Technologies I work with daily
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md"
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
