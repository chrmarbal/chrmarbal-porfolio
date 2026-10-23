import { useEffect, useState } from "react";
import SiteFooter from "./components/layout/SiteFooter.jsx";
import SiteHeader from "./components/layout/SiteHeader.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import { translations } from "./data/translations.js";
import { usePortfolioObservers } from "./hooks/usePortfolioObservers.js";

export default function App() {
  const [active, setActive] = useState("inicio");
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  usePortfolioObservers(setActive);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <SiteHeader
        active={active}
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />
      <main>
        <HeroSection language={language} t={t} />
        <AboutSection language={language} t={t} />
        <ProjectsSection language={language} t={t} />
        <ContactSection language={language} t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}
