import Reveal from "./Reveal";
import "./VisionMission.css";

export default function VisionMission() {
  return (
    <section className="section vision-section" id="vision">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> What guides us</p>
          <h2>A future built by people<br />with room to <em>flourish.</em></h2>
        </Reveal>
        <div className="vision-grid">
          <Reveal>
            <article className="vision-card vision-card-light">
              <span className="card-index">01 / OUR VISION</span>
              <h3>A Liberia where young people can turn potential into meaningful contribution.</h3>
              <p>With skills, mentorship, opportunities and a supportive environment, young people can contribute as professionals, entrepreneurs, developers, researchers and community leaders.</p>
            </article>
          </Reveal>
          <Reveal>
            <article className="vision-card vision-card-dark">
              <span className="card-index">02 / OUR MISSION</span>
              <h3>Create practical pathways to learn, collaborate and build.</h3>
              <p>We want young people to develop skills, access mentorship, discover opportunities, work together and eventually build solutions and ventures that create value.</p>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <blockquote className="belief-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>Development begins with people. We don’t have to wait for perfect conditions to begin creating change.</p>
            <cite>Our core belief</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
