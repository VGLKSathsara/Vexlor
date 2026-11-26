import { HERO } from "../data/site.js";
export default function Hero() {
  return <section id="home" className="hero">
    <div className="container vex-hero">
      <div className="vex-copy">
        <p className="vex-eyebrow">VEXLOR / PRECISION IN MOTION</p>
        <h1>{HERO.titleTop}<br/><span>{HERO.titleBrand}</span></h1>
        <p className="vex-description">{HERO.text}</p>
        <div className="hero__cta"><a className="btn btn--primary" href="#service">Explore services <span aria-hidden="true">↗</span></a><a className="btn btn--light" href="#prices">View pricing</a></div>
      </div>
      <div className="vex-art" aria-hidden="true"><div className="vex-grid"/><img src="/vexlor-mark.svg" alt="" width="240" height="240"/><span>01 / DESIGNED FOR PROGRESS</span></div>
    </div>
  </section>;
}