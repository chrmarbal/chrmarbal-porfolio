import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { education, experience, technologies } from "../../data/portfolio.js";
import SectionKicker from "../shared/SectionKicker.jsx";
import TechnologyLogo from "../shared/TechnologyLogo.jsx";
import Timeline from "../shared/Timeline.jsx";

export default function AboutSection({ language, t }) {
  const experienceItems = experience.map((item) => ({
    ...item,
    title: language === "en" ? item.titleEn : item.title,
    place: language === "en" ? item.placeEn : item.place,
    description: language === "en" ? item.descriptionEn : item.description,
  }));
  const educationItems = education.map((item) => ({
    ...item,
    title: language === "en" ? item.titleEn : item.title,
    place: language === "en" ? item.placeEn : item.place,
    description: language === "en" ? item.descriptionEn : item.description,
  }));

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <SectionKicker number="01">{t.about.title}</SectionKicker>
        <div className="about-intro reveal">
          <div>
            <h2>
              {t.about.headline[0]}
              <br />
              {t.about.headline[1]}
            </h2>
            <p className="section-subtext">
              {t.about.subheading[0]}
              <br />
              {t.about.subheading[1]}
            </p>
          </div>
          <p className="about-copy">
            {t.about.bio[0]} <strong>{t.about.bio[1]}</strong>
            {t.about.bio[2]}
            <br />
            <br />
            {t.about.bio[3]} <strong>{t.about.bio[4]}</strong>
            {t.about.bio[5]}
          </p>
        </div>
        <div className="stack-heading">
          <span className="small-label">{t.about.technologies}</span>
          <span className="stack-caption">{t.about.toolbox}</span>
        </div>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className={`tech tech-${tech.color} reveal`} key={tech.name}>
              {tech.name === "SQL Server" ? (
                <img
                  src="/images/sqlserver.svg"
                  width="29"
                  height="29"
                  alt="SQL Server"
                  loading="lazy"
                />
              ) : (
                <TechnologyLogo name={tech.name} />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        <p className="other-stack">
          <span>{t.about.otherStack}</span> JavaScript · HTML &amp; CSS · Express · APIs REST · Git ·
          OAuth · Selenium · Playwright
        </p>
        <div className="timeline-grid">
          <div>
            <h3 className="timeline-title">
              <BriefcaseBusiness /> {t.about.experience}
            </h3>
            <Timeline items={experienceItems} internshipLabel={t.about.internship} />
          </div>
          <div>
            <h3 className="timeline-title">
              <GraduationCap /> {t.about.education}
            </h3>
            <Timeline items={educationItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
