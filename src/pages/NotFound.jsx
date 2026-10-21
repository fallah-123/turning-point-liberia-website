import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Turning Point Liberia";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "The page you are looking for could not be found. Return to Turning Point Liberia."
    );
  }, []);

  return (
    <section className="not-found">
      <div className="container not-found-inner">
        <span className="not-found-number">404</span>
        <h1>This page took<br /><em>a different turn.</em></h1>
        <p>We could not find the page you were looking for. You can head back to the beginning.</p>
        <Link className="button button-primary" to="/">Return to home <Icon name="arrow" /></Link>
      </div>
    </section>
  );
}
