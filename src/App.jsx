import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Preloader from "./components/ui/Preloader";
import HeroSection from "./sections/HeroSection";
import SectionStub from "./sections/SectionStub";
import useLenis from "./hooks/useLenis";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useLenis(isLoaded);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = isLoaded ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoaded]);

  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-500">
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <Navbar isDark={isDark} onToggle={() => setIsDark((value) => !value)} />
      <main className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <SectionStub
          id="about"
          eyebrow="Next section"
          title="About section is up next."
          copy="I added this anchor block so the new navbar can scroll cleanly while we build the rest of the portfolio section by section."
        />
        <SectionStub
          id="projects"
          eyebrow="Next section"
          title="Projects section will follow the skills pass."
          copy="For now, this gives the navigation real targets and keeps the overall scroll rhythm working while the core sections are still being designed."
        />
        <SectionStub
          id="contact"
          eyebrow="Next section"
          title="Contact section will be built with the final CTA flow."
          copy="This placeholder will be replaced by the actual contact form and footer once we finish the core storytelling sections."
        />
      </main>
    </div>
  );
};

export default App;
