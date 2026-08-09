import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="eyebrow">Inventory</span>
        <h2 className="skills__title">My skills</h2>
        <p className="skills__subtitle">
          The tools currently equipped, gathered one project at a time.
        </p>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skills__card" key={skill.name}>
              <span className="skills__icon">{skill.icon}</span>
              <span className="skills__name">{skill.name}</span>
              <span className="skills__note">{skill.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
