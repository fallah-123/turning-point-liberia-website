import { workSteps } from "../data/content";
import Reveal from "./Reveal";
import "./HowWeWork.css";

export default function HowWeWork() {
  return (
    <section className="section work-section" id="how-we-work">
      <div className="container work-layout">
        <Reveal className="work-intro">
          <p className="eyebrow"><span className="eyebrow-mark" /> How we grow</p>
          <h2>Start with care.<br /><em>Grow with purpose.</em></h2>
          <p>Turning Point Liberia is an early-stage initiative. We are learning as we build, with honesty about where we are and care for what comes next.</p>
        </Reveal>
        <div className="work-steps">
          {workSteps.map((step) => (
            <Reveal key={step.number}>
              <article className="work-step">
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="stage-note">
          <span>Where we are today</span>
          <p>TPL is a youth-led initiative in its early stages and is not yet a formally registered organization.</p>
        </Reveal>
      </div>
    </section>
  );
}
