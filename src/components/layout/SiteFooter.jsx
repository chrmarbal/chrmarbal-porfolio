import { ArrowUp } from "lucide-react";

export default function SiteFooter({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Christian Martinez Ballesta</span>
        <div className="footer-links">
          <a href="#inicio" aria-label={t.footer.backToTopLabel}>
            <ArrowUp size={13} /> {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
