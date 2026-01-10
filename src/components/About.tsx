import { Code, Rocket, Users, Zap } from "lucide-react";

const roles = [
  {
    title: "Artificial Intelligence",
    description: "Exploring and working on Machine Learning, Generative AI and Agentic AI .",
    icon: Zap,
  },
  {
    title: "DevOps",
    description: "Building and maintaining cloud infrastructure using Docker, Kubernetes, Terraform and modern cloud services.",
    icon: Rocket,
  },
  {
    title: "Problem Solver",
    description: "Passionate about tackling real-world challenges through efficient algorithms and scalable system design.",
    icon: Code,
  },
  {
    title: "Open Source Contributor",
    description: "Committed to continuous growth, sharing knowledge, and building tools for the developer community.",
    icon: Users,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            What I Do
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-all hover:border-accent/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {role.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>
                    </div>
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

export default About;
