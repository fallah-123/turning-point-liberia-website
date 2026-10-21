import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import { closingLine } from "../data/content";
import Icon from "./Icon";
import "./Footer.css";

const socialLabels = {
  facebook: "Facebook",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  x: "X"
};

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);
  const socials = Object.entries(config.social).filter(([, url]) => url);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <Link className="footer-brand" to="/" aria-label="Turning Point Liberia home">
              {!logoFailed ? (
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Turning Point Liberia" onError={() => setLogoFailed(true)} />
              ) : (
                <span className="brand-fallback">Turning Point Liberia</span>
              )}
            </Link>
            <p>Building the Liberia we want to see.<br />People. Partnerships. Prosperity.</p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <Link to="/">Home</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/get-involved">Get involved</Link>
          </div>
          <div className="footer-contact">
            <h2>Say hello</h2>
            <a href={config.emailComposeUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="mail" />{config.email}
            </a>
            {config.phones.map((phone) => (
              <a
                href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                key={phone}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" />{phone}
              </a>
            ))}
            {socials.map(([network, url]) => (
              <a href={url} key={network} target="_blank" rel="noopener noreferrer">
                {socialLabels[network]}
              </a>
            ))}
          </div>
        </div>
        <p className="footer-closing">{closingLine}</p>
        <div className="footer-bottom">
          <span>© 2026 {config.orgName}</span>
          <span>Youth-led. People-centered. Learning as we grow.</span>
        </div>
      </div>
    </footer>
  );
}
