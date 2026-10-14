import { technologies } from "../../data/portfolio.js";
import JavaLogo from "./JavaLogo.jsx";

export default function TechnologyLogo({ name }) {
  if (name === "SQL Server") {
    return <img src="/images/sqlserver.svg" width="14" height="14" alt="" loading="lazy" />;
  }

  if (name === "Java") {
    return <JavaLogo />;
  }

  const icon = technologies.find((tech) => tech.name === name)?.icon;

  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
