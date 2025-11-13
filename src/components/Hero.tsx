import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Building automation and AI solutions that deliver impact.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Co-Founder & Tech Lead at <span className="font-semibold text-foreground">Trinity Intelligence</span>, where I build AI-powered systems and automation tools solving real-world problems. Student, builder, and continuous learner.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                View Projects
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Connect
              </a>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-border shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Madhesh T - Tech Lead at Trinity Intelligence" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg shadow-lg">
                Building
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
