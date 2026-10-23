import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { cvUrls } from "../../data/site.js";
import workspace from "../../assets/developer-workspace.jpg";

export default function HeroSection({ language, t }) {
  return (
    <section id="inicio" className="hero">
      <img
        className="hero-image"
        src={workspace}
        alt={t.heroImageAlt}
        width="1536"
        height="1024"
        fetchPriority="high"
      />
      <div className="container hero-content entry">
        <div className="availability">
          <span className="status-dot" /> {t.availability}
        </div>
        <h1>
          Christian<span className="surname">Martinez Ballesta<span className="text-primary">.</span></span>
        </h1>
        <p className="role">
          Full Stack Developer<span className="typing-cursor" aria-hidden="true">_</span>
        </p>
        <p className="hero-description">
          {t.heroDescription[0]}
          <br />
          {t.heroDescription[1]}
          <br className="desktop-break" /> {t.heroDescription[2]}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#proyectos">
            {t.exploreProjects} <ArrowUpRight />
          </a>
          <a className="button button-outline" href={cvUrls[language]} download>
            <Download /> {t.downloadCv}
          </a>
        </div>
        <div className="hero-location">
          <MapPin size={13} /> {t.location}
        </div>
      </div>
      <div className="container hero-bottom">
        <a href="#sobre-mi">
          <ArrowDown size={13} /> {t.moreAbout}
        </a>
        <span className="mono">{t.ideasToSolutions}</span>
      </div>
    </section>
  );
}
