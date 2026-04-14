import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo">PORTIFÓLIO</h2>

        <p className="footer-text">
          © 2026 Portifólio. Todos os direitos reservados.
        </p>

        <div className="footer-links">
          <a href="#">Linkedin</a>
          <a href="#">Github</a>
          <a href="#">Instagram</a>
          <a href="#">Email</a>
        </div>

      </div>
    </footer>
  );
}