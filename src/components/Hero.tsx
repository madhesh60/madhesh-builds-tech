import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-background relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              {/*<div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium text-sm tracking-wide">
                Available for meaningful projects
              </div>*/}
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                Learning, exploring <br />
                <span className="text-accent">pushing myself to build better</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                I'm <strong>Madhesh</strong>, a B.Tech Information Technology student at Chennai Institute of Technology (2024-2028). I build  scalable  systems, and AI-driven applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all flex items-center gap-2 font-semibold"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
             <a
                href="mailto:madheshsasikala81@gmail.com"
                className="group px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all flex items-center gap-2 font-semibold"
              >
                Contact
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-muted-foreground">
              <a href="https://github.com/madhesh60" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/madhesh77" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:madheshsasikala81@gmail.com" className="hover:text-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-6 group-hover:rotate-4 transition-transform duration-500 opacity-20"></div>
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Madhesh T"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
