import { useState, type FormEvent } from "react";
import "./Contact.css";

const EMAIL = "gwamandasiyamthanda13@gmail.com";
const PHONE_DISPLAY = "060 183 9398";
const PHONE_TEL = "0694874964";
const GITHUB_HANDLE = "siyamthandagwamanda";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Anonymous"} (${email || "no email given"})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="eyebrow">Party finder</span>
          <h2 className="contact__title">Contact me</h2>
          <p className="contact__subtitle">
            Have a project, opportunity, or question? Send a message — I read
            every one.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <span className="contact__label">Phone</span>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <span className="contact__label">GitHub</span>
              <a
                href={`https://github.com/${GITHUB_HANDLE}`}
                target="_blank"
                rel="noreferrer"
              >
                github.com/{GITHUB_HANDLE}
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__field">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </label>
          <label className="contact__field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="contact__field">
            <span>Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or say hello"
              rows={5}
              required
            />
          </label>
          <button type="submit" className="btn btn--primary">
            Send message <span aria-hidden>🚀</span>
          </button>
        </form>
      </div>
    </section>
  );
}
