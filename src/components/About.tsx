import { Code, Rocket, Users, Zap } from "lucide-react";

const roles = [
  {
    title: "Artificial Intelligence",
    description: "Exploring and working on Machine Learning, Generative AI, and Agentic AI.",
    icon: Zap,
  },
  {
    title: "DevOps",
    description: "Building and maintaining cloud infrastructure using Docker, Kubernetes, Terraform, and modern cloud services.",
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground">
              Areas of expertise and focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:border-accent/50 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
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
