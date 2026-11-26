import { NAV, ABOUT } from "../data/site.js";
import SocialIcon from "./SocialIcons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="brand" aria-label="Vexlor home">
            <img src="/vexlor-mark.svg" alt="" className="brand__mark" /><span className="brand__text">
              vexlor
            </span>
          </a>
          <p className="footer__tagline">Precision in Motion. · Sri Lanka</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="footer__link">
              {item.label}
            </a>
          ))}
        </nav>

        <ul className="footer__socials">
          {ABOUT.socials.map((s) => (
            <li key={s.id}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-btn social-btn--sm social-btn--${s.id}`}
                aria-label={`${s.label}: ${s.handle}`}
                title={`${s.label} – ${s.handle}`}
              >
                <SocialIcon name={s.id} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container footer__bottom">
        <small>© {new Date().getFullYear()} Vexlor. All rights reserved.</small>
        <a href="#home" className="footer__top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
