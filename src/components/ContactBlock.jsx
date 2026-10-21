import { config } from "../config";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./ContactBlock.css";

export default function ContactBlock() {
  return (
    <section className="contact-block" id="contact">
      <div className="container contact-layout">
        <Reveal className="contact-intro">
          <p className="eyebrow"><span className="eyebrow-mark" /> Get in touch</p>
          <h2>Let’s start a<br /><em>conversation.</em></h2>
          <p>Have a question, an idea or something to share? We would be glad to hear from you.</p>
        </Reveal>
        <Reveal className="contact-options">
          <a
            className="contact-option"
            href={config.emailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon"><Icon name="mail" /></span>
            <span><small>Email</small><strong>{config.email}</strong></span>
            <Icon className="contact-arrow" name="arrow" />
          </a>
          {config.phones.map((phone) => (
            <a
              className="contact-option"
              href={`https://wa.me/${phone.replace(/\D/g, "")}`}
              key={phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon"><Icon name="whatsapp" /></span>
              <span><small>WhatsApp</small><strong>{phone}</strong></span>
              <Icon className="contact-arrow" name="arrow" />
            </a>
          ))}
          <a className="contact-option" href={config.whatsappCommunityUrl} target="_blank" rel="noopener noreferrer">
            <span className="contact-icon"><Icon name="whatsapp" /></span>
            <span><small>Community</small><strong>Join us on WhatsApp</strong></span>
            <Icon className="contact-arrow" name="arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
