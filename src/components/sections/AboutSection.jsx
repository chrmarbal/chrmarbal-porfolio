import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { education, experience, technologies } from "../../data/portfolio.js";
import SectionKicker from "../shared/SectionKicker.jsx";
import TechnologyLogo from "../shared/TechnologyLogo.jsx";
import Timeline from "../shared/Timeline.jsx";

function formatBio(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

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
          <div className="about-copy">
            <p>{formatBio(t.about.bio[0])}</p>
            <p>{formatBio(t.about.bio[1])}</p>
          </div>
        </div>
        <div className="stack-heading">
          <span className="small-label">{t.about.technologies}</span>
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
        <p className="current-learning">
          <span>{t.about.currentlyLearning}</span>
          <strong>Spring Boot</strong>
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
