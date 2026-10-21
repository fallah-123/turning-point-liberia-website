import { config } from "../config";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./CommunityCTA.css";

export default function CommunityCTA() {
  return (
    <section className="community-cta-section">
      <div className="container">
        <Reveal>
          <div className="community-cta">
            <div className="cta-decoration cta-decoration-one" />
            <div className="cta-decoration cta-decoration-two" />
            <div className="community-copy">
              <p className="eyebrow">There is room for you here</p>
              <h2>Join the Turning Point Liberia community.</h2>
              <p>Learn with us, share ideas, and invite someone who would love to be part of this journey.</p>
            </div>
            <a className="button button-light" href={config.whatsappCommunityUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" /> Join on WhatsApp <Icon name="arrow" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
