import { useState } from "react";
import { wisdom } from "../data/content";
import "./Wisdom.css";

export default function Wisdom() {
  const [index, setIndex] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);

  const generate = () => {
    setSpinning(true);
    window.setTimeout(() => {
      setIndex((prev) => {
        let next = Math.floor(Math.random() * wisdom.length);
        if (wisdom.length > 1 && next === prev) {
          next = (next + 1) % wisdom.length;
        }
        return next;
      });
      setSpinning(false);
    }, 260);
  };

  return (
    <section id="wisdom" className="wisdom">
      <div className="container wisdom__inner">
        <span className="eyebrow">Random encounter</span>
        <h2 className="wisdom__title">Developer wisdom</h2>
        <p className="wisdom__subtitle">
          Click the button to receive a developer message.
        </p>

        <div className={`wisdom__card ${spinning ? "wisdom__card--spin" : ""}`}>
          <p className="wisdom__quote">
            {index === null
              ? "Your first drop of wisdom is one click away."
              : `“${wisdom[index]}”`}
          </p>
        </div>

        <button className="btn btn--primary" onClick={generate}>
          Generate wisdom <span aria-hidden>✨</span>
        </button>
      </div>
    </section>
  );
}
