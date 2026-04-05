import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Preloader from "./components/ui/Preloader";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import useLenis from "./hooks/useLenis";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLenis(isLoaded);

  useEffect(() => {
    document.body.style.overflow = isLoaded ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoaded]);

  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-500">
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <CustomCursor />
      <Navbar />
      <main className={`transition-[opacity,color,background-color,border-color] duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
