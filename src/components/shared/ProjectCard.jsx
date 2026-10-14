import { useState } from "react";
import { ChevronDown, ChevronUp, Code2, Smartphone } from "lucide-react";
import TechnologyLogo from "./TechnologyLogo.jsx";
import mcnanosoftPreview from "../../assets/mcnanosoft-preview.png";
import gymtonicPreview from "../../assets/gymtonic-preview.png";

export default function ProjectCard({ project, t }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `details-${project.cycle}`;

  return (
    <article className="project-card reveal">
      <div className={`project-visual ${project.type}`}>
        <span className="project-kind">
          {project.type === "web" ? <Code2 size={13} /> : <Smartphone size={13} />}
          {project.category}
        </span>
        <img
          src={project.type === "web" ? mcnanosoftPreview : gymtonicPreview}
          alt={t.projects.previewAlt.replace("{name}", project.name)}
          loading="lazy"
          width={project.type === "web" ? "1248" : "768"}
          height={project.type === "web" ? "610" : "1569"}
        />
      </div>
      <div className="project-body">
        <div className="project-heading">
          <h3>{project.name}</h3>
          <span className="project-label">
            {t.projects.finalProject} · {project.cycle}
            <span className="project-grade">
              {t.projects.grade}: {project.score}/10
            </span>
          </span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tags">
          {project.stack.map((tech) => (
            <span className="tag" key={tech}>
              <TechnologyLogo name={tech} />
              {tech}
            </span>
          ))}
        </div>
        <div className="project-footer">
          <span>
            {t.projects.finalProject} · {project.cycle}
          </span>
          <button
            type="button"
            className="button button-ghost project-details-button"
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? t.projects.lessDetails : t.projects.details}
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        <div
          className={`project-details${expanded ? " expanded" : ""}`}
          id={detailsId}
          inert={!expanded}
        >
          <div>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
