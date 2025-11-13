import { Code, Rocket, Users, Zap } from "lucide-react";

const roles = [
  {
    title: "AI & Automation Builder",
    description: "Creating intelligent systems that automate complex workflows and deliver measurable business impact.",
    icon: Zap,
  },
  {
    title: "Tech Lead",
    description: "Leading technical strategy and execution at Trinity Intelligence, shipping products that scale.",
    icon: Rocket,
  },
  {
    title: "Problem Solver",
    description: "Passionate about tackling real-world challenges through scalable web systems and AI solutions.",
    icon: Code,
  },
  {
    title: "Learn in Public",
    description: "Committed to continuous growth, sharing knowledge, and contributing to open-source communities.",
    icon: Users,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
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
                  className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
