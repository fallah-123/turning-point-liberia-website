import { useEffect } from "react";
import { waysToContribute } from "../data/content";
import CommunityCTA from "../components/CommunityCTA";
import ContactBlock from "../components/ContactBlock";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import "./GetInvolved.css";

const icons = ["people", "book", "network", "briefcase", "lightbulb"];

export default function GetInvolved() {
  useEffect(() => {
    document.title = "Get involved | Turning Point Liberia";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Share your time, knowledge, network, resources or ideas with Turning Point Liberia. Join learning activities, invite others and connect with the community."
    );
  }, []);

  return (
    <>
      <section className="page-hero get-involved-hero">
        <div className="container page-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> Many hands, shared possibility</p>
          <h1>Be part of<br /><em>what comes next.</em></h1>
          <p>There is no single way to contribute. Bring your time, perspective or encouragement, and help create more pathways for young people.</p>
        </div>
      </section>
      <section className="section contribution-section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow"><span className="eyebrow-mark" /> Five ways to contribute</p>
            <h2>Bring what you <em>can.</em></h2>
            <p>Small, thoughtful contributions can help learning and ideas grow into something practical.</p>
          </Reveal>
          <div className="contribution-grid">
            {waysToContribute.map((way, index) => (
              <Reveal key={way.title}>
                <article className="contribution-card">
                  <span className="contribution-number">0{index + 1}</span>
                  <div className="contribution-icon"><Icon name={icons[index]} /></div>
                  <h3>{way.title}</h3>
                  <p>{way.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="learner-note">
              <Icon name="spark" />
              <p>Learners are welcome to join our learning activities. And if you know someone who would enjoy being part of this journey, invite them to join too.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CommunityCTA />
      <ContactBlock />
    </>
  );
}
