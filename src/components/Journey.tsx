import { journey } from "../data/content";
import "./Journey.css";

const STATUS_LABEL: Record<string, string> = {
  cleared: "Cleared",
  current: "In progress",
  locked: "Locked",
};

export default function Journey() {
  return (
    <section id="journey" className="path-section">
      <div className="container">
        <span className="eyebrow">World map</span>
        <h2 className="path-section__title">My developer journey</h2>
        <p className="path-section__subtitle">
          Every expert started at level one. Here's the route from here to
          full stack.
        </p>

        <div className="path">
          <svg
            className="path__line"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {journey.map((lvl, i) => (
            <div
              className={`path__node path__node--${lvl.status} ${
                i % 2 === 1 ? "path__node--right" : ""
              }`}
              key={lvl.level}
            >
              <div className="path__marker">
                <span className="path__marker-num">
                  {lvl.status === "cleared" ? "✓" : lvl.level}
                </span>
              </div>

              <div className="path__card">
                <div className="path__card-head">
                  <span className="path__level-label">
                    Level {lvl.level}
                  </span>
                  <span
                    className={`path__status path__status--${lvl.status}`}
                  >
                    {STATUS_LABEL[lvl.status]}
                  </span>
                </div>
                <h3 className="path__card-title">{lvl.title}</h3>
                <p className="path__card-summary">{lvl.summary}</p>

                <div className="path__skills">
                  {lvl.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                {lvl.achievement && (
                  <p className="path__achievement">
                    🏆 <strong>Current achievement:</strong> {lvl.achievement}
                  </p>
                )}
                {lvl.nextMission && (
                  <p className="path__next">
                    🚀 <strong>Next mission:</strong> {lvl.nextMission}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
