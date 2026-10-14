import { ArrowUp, Download } from "lucide-react";

export default function SiteFooter({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Christian Martinez Ballesta</span>
        <span className="footer-note">{t.footer.madeWith}</span>
        <div className="footer-links">
          <a
            href="/images/christian-logo.png"
            download="Christian-Martinez-Ballesta-logo.png"
            title={t.footer.downloadLogo}
            aria-label={t.footer.downloadLogo}
          >
            <Download size={13} />
          </a>
          <a href="#inicio" aria-label={t.footer.backToTopLabel}>
            <ArrowUp size={13} /> {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
