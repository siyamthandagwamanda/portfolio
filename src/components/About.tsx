import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div>
          <span className="eyebrow">Character bio</span>
          <h2 className="about__title">About me</h2>
        </div>
        <div className="about__body">
          <p>
            I'm Siyamthanda Gwamanda, an aspiring software developer who
            believes every great developer starts with curiosity and
            determination.
          </p>
          <p>
            My journey into tech began as a creative escape. Drawing on my background in art, 
            I discovered a passion for transforming imaginative ideas into tangible digital experiences.
          </p>
          <p>
            I've built a strong foundation in HTML, CSS, JavaScript, Git, and
            GitHub. My next mission is to grow into a full stack developer —
            continuously learning, solving problems, and creating technology
            that helps people.
          </p>
        </div>
      </div>
    </section>
  );
}
