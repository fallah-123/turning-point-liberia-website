import { pathwaySteps } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./Pathway.css";

export default function Pathway() {
  return (
    <section className="section pathway-section" id="pathway">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> How growth takes shape</p>
          <h2>Learning is a beginning.<br /><em>Here’s the pathway.</em></h2>
          <p>We connect learning to doing, so every new skill can become a stepping stone toward meaningful opportunity.</p>
        </Reveal>
        <div className="pathway-flow">
          {pathwaySteps.map((step, index) => (
            <Reveal className="pathway-item" key={step.number}>
              <div className="pathway-number">{step.number}</div>
              <div className="pathway-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < pathwaySteps.length - 1 && <Icon className="pathway-arrow" name="arrow" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
