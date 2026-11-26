import { SERVICES } from "../data/site.js";
import Reveal from "./Reveal.jsx";

// Each venture gets its own small motif tied to what it actually is, instead of
// a generic icon-in-a-circle repeated three times: a rising price line for the
// trading tool, a tray of sweets for the shop, a temple gateway for the
// guesthouse near the Devalaya.
const MOTIFS = {
  calculator: (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <path d="M8 60h2M8 44h2M8 28h2" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 54v-14M22 47h0" />
        <path d="M38 58v-30M38 43h0" />
        <path d="M54 50v-10M54 45h0" />
        <path d="M70 62v-38M70 43h0" />
        <path d="M86 46v-8M86 42h0" />
      </g>
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M22 44v6" />
        <path d="M38 36v14" />
        <path d="M54 38v14" />
        <path d="M70 30v20" />
        <path d="M86 34v10" />
      </g>
      <path d="M16 52 L34 34 L50 40 L66 18 L82 30 L100 14" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="14" r="3.5" fill="var(--orange)" />
    </svg>
  ),
  gift: (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <path d="M12 58c20 10 76 10 96 0" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="2">
        <circle cx="30" cy="42" r="12" />
        <circle cx="60" cy="34" r="15" />
        <circle cx="91" cy="44" r="11" />
      </g>
      <g fill="var(--orange)">
        <circle cx="30" cy="42" r="3" />
        <circle cx="60" cy="34" r="3.4" />
        <circle cx="91" cy="44" r="2.8" />
      </g>
      <path d="M24 30c3-5 9-5 12 0M53 22c4-6 11-6 15 0M85 33c3-4.5 8-4.5 11 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  stay: (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <path d="M10 64h100" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 64V38c0-12.15 9.85-22 22-22s22 9.85 22 22v26" stroke="currentColor" strokeWidth="2" />
      <path d="M54 64V48a6 6 0 0 1 12 0v16" stroke="var(--orange)" strokeWidth="2.5" />
      <path d="M30 64V46M90 64V46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 16v-8M56 10h8" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.3a1.2 1.2 0 0 0-1.2-.2L2.9 11a1.1 1.1 0 0 0 .1 2.1l4.5 1.4 1.7 5.3a1.1 1.1 0 0 0 1.8.5l2.5-2.3 4.6 3.4a1.2 1.2 0 0 0 1.9-.7l3.1-15.1a1.2 1.2 0 0 0-.2-1.3zM9.6 14.1l8.2-5-6.3 6.6-.3 2.6-1.6-4.2z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="service" className="section services">
      <div className="container">
        <Reveal>
          <h2 className="section__title services__title">Explore our services</h2>
        </Reveal>

        <div className="service-list" data-live>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} className="service-row">
              <span className="service-row__motif">{MOTIFS[s.icon]}</span>

              <span className="service-row__body">
                <h3 className="service-row__title">{s.title}</h3>
                <p className="service-row__text">{s.text}</p>
              </span>

              {/* Whole row is clickable via this link (stretched with CSS) */}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="service-row__cta service-row__stretch">
                {s.cta} <span aria-hidden="true">↗</span>
              </a>

              {s.telegram && (
                <a
                  href={s.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-row__telegram"
                  aria-label={`${s.title} on Telegram`}
                  title="Join on Telegram"
                >
                  <TelegramIcon />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
