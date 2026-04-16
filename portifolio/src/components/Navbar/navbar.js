import "./navbar.css";
import LinkedInIcon from "../../assets/svg/Linkedin.svg";
import GitHubIcon from "../../assets/svg/Github.svg";
import InstagramIcon from "../../assets/svg/Instagram.svg";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        <h1  className="logo"><a href="#home">PORTIFÓLIO</a></h1>

        <nav>
          <ul className="nav-links">
            <li><a href="#home" >HOME</a></li>
            <li><a href="#about" >SOBRE MIM</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects" >PROJETOS</a></li>
            <li><a href="#contact" >CONTATO</a></li>
          </ul>
        </nav>

        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/carlos-adrians/#" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="linkedin" />
          </a>
          <a href="https://github.com/CarlosAdrians" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="github" />
          </a>
          <a href="https://www.instagram.com/carlos_adrians/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="instagram" />
          </a>
        </div>

      </div>
    </header>
  );
}