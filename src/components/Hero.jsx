import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import RegistrationButton from "./RegistrationButton";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Turning Point Liberia</p>
          <h1>Building the Liberia we want to <em>see.</em></h1>
          <p className="hero-lede">
            Developing people through practical skills, mentorship and opportunities to contribute to a brighter future.
          </p>
          <div className="hero-actions">
            <RegistrationButton>Join the Excel Course <Icon name="arrow" /></RegistrationButton>
            <Link className="button button-outline" to="/get-involved">Join Our Community</Link>
          </div>
          <p className="hero-tagline">People. Partnerships. Prosperity.</p>
        </Reveal>
        <Reveal className="hero-art">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-sun" />
          <div className="hero-panel">
            <span className="panel-kicker">A pathway forward</span>
            <strong>People first.<br />Possibility always.</strong>
            <span className="panel-rule" />
            <span className="panel-small">Practical learning, shared purpose<br />and room to grow.</span>
          </div>
          <span className="hero-stamp">Start<br />where you are</span>
          <span className="hero-decoration decoration-one" />
          <span className="hero-decoration decoration-two" />
        </Reveal>
      </div>
      <div className="container hero-bottom">
        <span>Our belief</span>
        <p>Development begins with people.</p>
        <a href="#challenge" aria-label="Scroll to the challenge section"><Icon name="arrow" /></a>
      </div>
    </section>
  );
}
