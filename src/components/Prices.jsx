import { PRICING } from "../data/site.js";
import Reveal from "./Reveal.jsx";

const formatPrice = (amount) => `$${amount.toFixed(2)}`;

export default function Prices() {
  const { offer } = PRICING;

  return (
    <section id="prices" className="section pricing-section" aria-labelledby="pricing-title">
      <div className="container">
        <Reveal className="pricing-heading">
          <span className="eyebrow">{PRICING.eyebrow}</span>
          <h2 id="pricing-title" className="section__title">{PRICING.title}</h2>
          <p className="section__text">{PRICING.description}</p>
        </Reveal>

        <div className="pricing-grid" data-live data-count={PRICING.plans.length}>
          {PRICING.plans.map((plan, index) => {
            const hasOffer = plan.featured && offer.active;
            const price = hasOffer ? offer.promotionalPrice : plan.price;
            const savings = hasOffer ? Math.round((1 - price / offer.regularPrice) * 100) : 0;

            return (
              <Reveal key={plan.name} delay={index * 100} className="pricing-cell">
                <article className={`pricing-card${plan.featured ? " pricing-card--featured" : ""}`}>
                  <div className="pricing-card__top">
                    <span className="pricing-card__tier">{plan.featured ? "THE COMPLETE TOOLKIT" : "YOUR TOOLKIT"}</span>
                    {hasOffer && <span className="pricing-card__badge">{offer.label}</span>}
                  </div>
                  <h3 className="pricing-card__name">{plan.name}</h3>
                  <p className="pricing-card__subtitle">{plan.subtitle}</p>

                  <div className="pricing-card__price-row">
                    <span className="pricing-card__price">{formatPrice(price)}</span>
                    {hasOffer && <span className="pricing-card__old-price">{formatPrice(offer.regularPrice)}</span>}
                  </div>
                  <p className="pricing-card__period">{plan.period}</p>
                  {hasOffer && (
                    <div className="pricing-card__offer">
                      <span>Save {savings}% for a limited time</span>
                      <span className="pricing-card__offer-sparkle" aria-hidden="true">✦</span>
                    </div>
                  )}

                  <div className="pricing-card__divider" aria-hidden="true" />
                  <p className="pricing-card__includes">What's included</p>
                  <ul className="pricing-card__features">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className={feature.included ? "pricing-feature" : "pricing-feature pricing-feature--excluded"}>
                        <span className="pricing-feature__icon" aria-hidden="true">{feature.included ? "✓" : "–"}</span>
                        <span>{feature.label}{feature.note && <strong className="pricing-feature__note">{feature.note}</strong>}</span>
                      </li>
                    ))}
                  </ul>

                  <a className={`btn btn--block pricing-card__cta${plan.featured ? " pricing-card__cta--featured" : ""}`} href="#connect">
                    {plan.cta}
                    <span aria-hidden="true">↗</span>
                  </a>
                  <p className="pricing-card__footnote">{plan.footnote}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="pricing-trust">
          <span aria-hidden="true">✦</span> Clear plans. No confusing bundles. Choose what fits your trading.
        </Reveal>
      </div>
    </section>
  );
}
