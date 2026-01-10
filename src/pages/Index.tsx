import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      <Navigation />
      <Hero />
      <Education />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
