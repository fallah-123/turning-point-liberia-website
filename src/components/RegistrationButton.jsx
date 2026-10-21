import { config } from "../config";

export default function RegistrationButton({ children = "Register your interest", className = "button button-primary" }) {
  if (!config.registrationUrl) {
    return (
      <span className={`${className} is-unavailable`} aria-disabled="true">
        {children}
        <span className="registration-note">Registration link coming soon</span>
      </span>
    );
  }

  return (
    <a className={className} href={config.registrationUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
