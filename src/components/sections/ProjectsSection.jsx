import { projects } from "../../data/portfolio.js";
import ProjectCard from "../shared/ProjectCard.jsx";
import SectionKicker from "../shared/SectionKicker.jsx";

export default function ProjectsSection({ language, t }) {
  const localizedProjects = projects.map((project) => ({
    ...project,
    category: language === "en" ? project.categoryEn : project.category,
    description: language === "en" ? project.descriptionEn : project.description,
    features: language === "en" ? project.featuresEn : project.features,
  }));

  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <SectionKicker number="02">{t.projects.title}</SectionKicker>
            <h2>{t.projects.headline}</h2>
            <p className="section-subtext">
              {t.projects.subheading}
            </p>
          </div>
          <span className="section-note">{t.projects.note}</span>
        </div>
        <div className="project-grid">
          {localizedProjects.map((project) => (
            <ProjectCard project={project} key={project.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
