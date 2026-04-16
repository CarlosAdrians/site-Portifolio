import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo"><a href="#home">PORTIFÓLIO</a></h2>

        <p className="footer-text">
          © 2026 Portifólio. Todos os direitos reservados.
        </p>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/carlos-adrians/#" target="_blank" rel="noopener noreferrer" >Linkedin</a>
          <a href="https://github.com/CarlosAdrians" target="_blank" rel="noopener noreferrer" >Github</a>
          <a href="https://www.instagram.com/carlos_adrians/" target="_blank" rel="noopener noreferrer" >Instagram</a>
        </div>

      </div>
    </footer>
  );
}