import { Github, Linkedin, Code2, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Madhesh</h3>
              <p className="text-background/80 mb-6 max-w-sm leading-relaxed">
                Engineering scalable and intelligent systems for the <span className="text-accent font-bold">future</span>.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:madheshsasikala81@gmail.com"
                  className="flex items-center gap-3 text-background/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  madheshsasikala81@gmail.com
                </a>
                <a
                  href="tel:+916369629476"
                  className="flex items-center gap-3 text-background/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 6369629476
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Connect</h4>
              <div className="space-y-4">
                <a
                  href="https://github.com/madhesh60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/madhesh77/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/madheshcode7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  LeetCode
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Explore</h4>
              <div className="space-y-4">
                <a href="/#about" className="block text-background/80 hover:text-accent transition-colors">About</a>
                <a href="/#skills" className="block text-background/80 hover:text-accent transition-colors">Skills</a>
                <a href="/#projects" className="block text-background/80 hover:text-accent transition-colors">Work</a>
                <a href="/#education" className="block text-background/80 hover:text-accent transition-colors">Education</a>
                <a href="/#achievements" className="block text-background/80 hover:text-accent transition-colors">Achievements</a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-background/60 text-sm">
              © {currentYear} Madhesh. All rights reserved.
            </p>
            <p className="text-center md:text-right text-background/60 text-sm">
              Built with React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
