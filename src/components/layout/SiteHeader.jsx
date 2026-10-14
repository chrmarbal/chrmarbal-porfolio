import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { email, navigation } from "../../data/site.js";

export default function SiteHeader({ active, language, onLanguageChange, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="identity" aria-label={t.homeLabel}>
          <img
            src="/images/christian-logo.png"
            width="46"
            height="46"
            alt="Logo CM de Christian Martinez Ballesta"
          />
        </a>
        <nav aria-label={t.mainNavigation} className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${active === item.id ? " active" : ""}`}
            >
              {t.nav[item.labelIndex]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={t.languageLabel}>
            {["es", "en"].map((option) => (
              <button
                key={option}
                type="button"
                className={`language-option${language === option ? " active" : ""}`}
                aria-pressed={language === option}
                onClick={() => onLanguageChange(option)}
              >
                <span className="language-option-code">{option.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <a className="button button-outline header-contact" href={`mailto:${email}`}>
            {t.letsTalk} <ArrowUpRight />
          </a>
          <button
            type="button"
            className="button button-ghost button-icon mobile-menu-button"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label={t.mobileNavigation}>
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav[item.labelIndex]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
