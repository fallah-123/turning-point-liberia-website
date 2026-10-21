import { challengeItems } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./Challenge.css";

const icons = ["book", "briefcase", "spark", "network"];

export default function Challenge() {
  return (
    <section className="section challenge-section" id="challenge">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> The starting point</p>
          <h2>Potential is everywhere.<br /><em>Access is not.</em></h2>
          <p>Across Liberia, many young people are ready to grow but face barriers between what they learn and what they can do next.</p>
        </Reveal>
        <div className="challenge-grid">
          {challengeItems.map((item, index) => (
            <Reveal className="challenge-reveal" key={item.number}>
              <article className="info-card challenge-card">
                <div className="card-topline"><span>{item.number}</span><Icon name={icons[index]} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
