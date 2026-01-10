import { NavLink } from "@/components/NavLink";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors">
            madhesh.tech
          </NavLink>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="/#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Education
            </a>
            <NavLink to="/hackathons" className="text-muted-foreground hover:text-foreground transition-colors">
              Hackathons
            </NavLink>
            <a
              href="https://github.com/madhesh60"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/80 transition-opacity"
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
