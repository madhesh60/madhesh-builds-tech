import { NavLink } from "@/components/NavLink";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            Madhesh T
          </NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/#about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </NavLink>
            <NavLink 
              to="/#projects" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </NavLink>
            <NavLink 
              to="/#skills" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </NavLink>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
