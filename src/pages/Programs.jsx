import { useEffect } from "react";
import { config } from "../config";
import { programs } from "../data/content";
import CommunityCTA from "../components/CommunityCTA";
import Icon from "../components/Icon";
import RegistrationButton from "../components/RegistrationButton";
import Reveal from "../components/Reveal";
import "./Programs.css";

export default function Programs() {
  const [course, ...laterPrograms] = programs;

  useEffect(() => {
    document.title = "Programs | Turning Point Liberia";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Explore free practical learning with Turning Point Liberia, beginning with a Microsoft Excel course for the first cohort starting November 1, 2026."
    );
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container page-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> Learn, practice, grow</p>
          <h1>Programs for practical<br /><em>possibilities.</em></h1>
          <p>Our learning journey begins with accessible, useful skills—and will grow as we learn alongside our community.</p>
        </div>
      </section>
      <section className="section program-detail-section">
        <div className="container">
          <Reveal>
            <article className="program-detail-card">
              <div className="program-detail-copy">
                <span className="program-label">Free of charge · First cohort</span>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p className="course-date"><Icon name="spark" /> First cohort starts <strong>{config.cohortStartDate}</strong></p>
                <RegistrationButton>Join the Excel Course <Icon name="arrow" /></RegistrationButton>
              </div>
              <div className="program-detail-aside">
                <span className="aside-number">01</span>
                <span>Learn a skill.<br />Put it to work.</span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
      <section className="section why-excel-section">
        <div className="container why-excel-layout">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow-mark" /> Why start here?</p>
            <h2>Useful in the classroom.<br /><em>Useful beyond it.</em></h2>
          </Reveal>
          <Reveal>
            <div className="why-excel-copy">
              <p>Excel is a practical, widely useful productivity skill for employment and business. It is a clear place to begin learning by doing.</p>
              <p>Our first cohort starts here before other courses. We will listen, learn and build on this beginning as we plan future learning opportunities.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section later-programs-section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow"><span className="eyebrow-mark" /> The learning journey continues</p>
            <h2>Coming in later cohorts</h2>
            <p>These learning areas are part of the direction we hope to grow into. No dates have been set yet.</p>
          </Reveal>
          <div className="later-program-grid">
            {laterPrograms.map((program, index) => (
              <Reveal key={program.title}>
                <article className="later-program-card">
                  <span className="later-number">0{index + 2}</span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <span className="future-status">{program.status}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CommunityCTA />
    </>
  );
}
