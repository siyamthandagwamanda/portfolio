import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Missions" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__row">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-badge">SG</span>
          <span className="nav__brand-name">
            siyamthanda<span className="nav__brand-dot">.</span>dev
          </span>
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              <span className="nav__link-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__theme-btn"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
