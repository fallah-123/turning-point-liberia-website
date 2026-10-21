import { Link } from "react-router-dom";
import { waysToContribute } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./InvolvedPreview.css";

const icons = ["people", "book", "network", "briefcase", "lightbulb"];

export default function InvolvedPreview() {
  return (
    <section className="section involved-preview-section" id="get-involved">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> Better together</p>
          <h2>There are many ways<br />to <em>make a difference.</em></h2>
          <p>Every contribution matters. Bring what you can, and help create space for young people to learn and move forward.</p>
        </Reveal>
        <div className="involvement-grid">
          {waysToContribute.map((way, index) => (
            <Reveal key={way.title}>
              <article className="involvement-card">
                <div className="involvement-icon"><Icon name={icons[index]} /></div>
                <h3>{way.title}</h3>
                <p>{way.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="involved-link-wrap">
          <Link className="text-link" to="/get-involved">Explore ways to get involved <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}
