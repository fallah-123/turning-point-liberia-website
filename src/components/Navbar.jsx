import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#vision" },
  { label: "Our pathway", to: "/#pathway" },
  { label: "Programs", to: "/programs" },
  { label: "Get involved", to: "/get-involved" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Turning Point Liberia home">
          {!logoFailed ? (
            <img
              className="brand-logo"
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Turning Point Liberia"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="brand-fallback">Turning Point Liberia</span>
          )}
        </Link>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`primary-navigation ${menuOpen ? "is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {links.map(({ label, to }) => (
            to.includes("#") ? (
              <Link className="nav-link" key={to} to={to} onClick={closeMenu}>{label}</Link>
            ) : (
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                end={to === "/"}
                key={to}
                to={to}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            )
          ))}
          <Link className="nav-cta" to="/get-involved#contact" onClick={closeMenu}>Connect with us</Link>
        </nav>
      </div>
    </header>
  );
}
