import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { cvUrl, email } from "../../data/site.js";
import SectionKicker from "../shared/SectionKicker.jsx";

export default function ContactSection({ t }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-grid reveal">
        <div>
          <SectionKicker number="03">{t.contact.title}</SectionKicker>
          <h2>
            {t.contact.headline[0]}
            <br />
            {t.contact.headline[1]}
            {t.contact.questionMark && (
              <span className="text-primary">{t.contact.questionMark}</span>
            )}
          </h2>
          <p>{t.contact.message}</p>
        </div>
        <div className="contact-options">
          <div className="email-row">
            <Mail />
            <a href={`mailto:${email}`}>{email}</a>
            <button
              type="button"
              className="button button-ghost button-icon contact-copy"
              title={copied ? t.contact.copied : t.contact.copyEmail}
              aria-label={copied ? t.contact.copied : t.contact.copyEmail}
              onClick={copyEmail}
            >
              {copied ? <Check /> : <Copy />}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? t.contact.copiedAnnouncement : ""}
            </span>
          </div>
          <div className="social-links">
            <a
              className="button button-outline contact-link"
              href="https://www.linkedin.com/in/christian-martinez-ballesta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin /> {t.contact.linkedin} <ArrowUpRight />
            </a>
            <a
              className="button button-outline contact-link"
              href="https://github.com/chrmarbal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github /> {t.contact.github} <ArrowUpRight />
            </a>
            <a className="button button-primary cv-button" href={cvUrl} download>
              <Download /> {t.downloadCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
