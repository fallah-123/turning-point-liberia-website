import { Link } from "react-router-dom";
import { config } from "../config";
import { programs } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import RegistrationButton from "./RegistrationButton";
import "./ProgramsPreview.css";

export default function ProgramsPreview() {
  const [course, ...laterPrograms] = programs;

  return (
    <section className="section programs-section" id="programs">
      <div className="container">
        <Reveal className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark" /> Learn by doing</p>
            <h2>Practical skills.<br /><em>Real possibilities.</em></h2>
          </div>
          <p>We are starting with free education and growing our learning opportunities step by step.</p>
        </Reveal>
        <Reveal>
          <article className="featured-program">
            <div className="program-feature-copy">
              <span className="program-label">Free learning opportunity</span>
              <h3>{course.title} for everyday work and business</h3>
              <p>{course.description}</p>
              <div className="program-date"><span className="date-dot" /> First cohort starts <strong>{config.cohortStartDate}</strong></div>
              <RegistrationButton>Join the Excel Course <Icon name="arrow" /></RegistrationButton>
            </div>
            <div className="excel-graphic" aria-hidden="true">
              <div className="sheet-window">
                <div className="sheet-topbar"><span /><span /><span /></div>
                <div className="sheet-grid">
                  <span className="sheet-head" /><span className="sheet-head" /><span className="sheet-head" /><span className="sheet-head" />
                  {Array.from({ length: 16 }, (_, index) => <span className={index === 5 || index === 10 ? "sheet-cell highlighted" : "sheet-cell"} key={index} />)}
                </div>
              </div>
              <span className="graphic-caption">Start with a skill<br />you can use.</span>
            </div>
          </article>
        </Reveal>
        <div className="future-programs-grid">
          {laterPrograms.map((program, index) => (
            <Reveal key={program.title}>
              <article className="future-program-card">
                <span className="future-program-number">0{index + 2}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <span className="future-status">{program.status}</span>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="programs-more">
          <Link className="text-link" to="/programs">See all programs <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}
