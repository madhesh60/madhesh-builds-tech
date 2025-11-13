import { Github, Linkedin, Code2, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Madhesh T</h3>
              <p className="text-primary-foreground/80 mb-4">
                Building AI-powered solutions and automation systems. Open to collaboration and impactful opportunities.
              </p>
              <a 
                href="mailto:madhesh@example.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                madhesh@example.com
              </a>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  LeetCode
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <div className="space-y-3">
                <a 
                  href="/#about"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </a>
                <a 
                  href="/#projects"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Projects
                </a>
                <a 
                  href="/#skills"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Skills
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-primary-foreground/60">
              © {currentYear} Madhesh T. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
