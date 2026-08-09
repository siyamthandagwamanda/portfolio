import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__row">
        <p className="footer__text">
          © {year} Siyamthanda Gwamanda. All rights reserved.
        </p>
        <a href="#home" className="footer__top" aria-label="Back to top">
          ⬆️ Back to top
        </a>
      </div>
    </footer>
  );
}
