import { useEffect, useState } from "react";
import "./Hero.css";

const LINES = [
  { prompt: "whoami", output: "siyamthanda_gwamanda" },
  { prompt: "cat role.txt", output: "aspiring full stack developer" },
  { prompt: "status --check", output: "curious. determined. levelling up." },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const target = LINES[visibleLines].prompt;
    let i = 0;
    const type = setInterval(() => {
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(type);
        window.setTimeout(() => {
          setVisibleLines((v) => v + 1);
          setTyped("");
        }, 420);
      }
    }, 38);
    return () => clearInterval(type);
  }, [visibleLines]);

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Level 1 · Front-End Explorer</span>
          <h1 className="hero__title">
            Hello, I'm
            <br />
            <span className="hero__title-name">Siyamthanda Gwamanda</span>
          </h1>
          <p className="hero__subtitle">
            I turn curiosity into interfaces — building my way from first
            HTML tag to full stack developer, one quest at a time.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View my work <span aria-hidden>🚀</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero__terminal" role="img" aria-label="Terminal animation introducing Siyamthanda">
          <div className="hero__terminal-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__terminal-title">guest@portfolio: ~</span>
          </div>
          <div className="hero__terminal-body">
            {LINES.slice(0, visibleLines).map((line) => (
              <div className="hero__terminal-line" key={line.prompt}>
                <div>
                  <span className="hero__prompt-symbol">$</span> {line.prompt}
                </div>
                <div className="hero__terminal-output">{line.output}</div>
              </div>
            ))}
            {visibleLines < LINES.length && (
              <div className="hero__terminal-line">
                <span className="hero__prompt-symbol">$</span> {typed}
                <span className="hero__cursor" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
