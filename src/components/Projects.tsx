import { missions } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="eyebrow">Quest log</span>
        <h2 className="projects__title">Completed missions</h2>
        <p className="projects__subtitle">
          Each one shipped, each one levelled me up.
        </p>

        <div className="projects__grid">
          {missions.map((mission, i) => (
            <article className="projects__card" key={mission.title}>
              <div className="projects__card-head">
                <span className="projects__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="projects__status">Cleared ✓</span>
              </div>
              <h3 className="projects__card-title">{mission.title}</h3>
              <p className="projects__card-desc">{mission.description}</p>
              <div className="projects__tags">
                {mission.tags.map((tag) => (
                  <span className="projects__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
