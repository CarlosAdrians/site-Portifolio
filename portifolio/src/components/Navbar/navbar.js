import { useEffect, useState } from "react";
import "./navbar.css";
import LinkedInIcon from "../../assets/svg/Linkedin.svg";
import GitHubIcon from "../../assets/svg/Github.svg";
import InstagramIcon from "../../assets/svg/Instagram.svg";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // quanto da section precisa aparecer
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        <h1  className="logo"><a href="#home">PORTIFÓLIO</a></h1>

        <nav>
          <ul className="nav-links">
            <li><a href="#home" className={active === "home" ? "active" : ""}>HOME</a></li>
            <li><a href="#about" className={active === "about" ? "active" : ""}>SOBRE MIM</a></li>
            <li><a href="#skills" className={active === "skills" ? "active" : ""}>SKILLS</a></li>
            <li><a href="#projects" className={active === "projects" ? "active" : ""}>PROJETOS</a></li>
            <li><a href="#contact" className={active === "contact" ? "active" : ""}>CONTATO</a></li>
          </ul>
        </nav>

        <div className="nav-icons">
          <img src={LinkedInIcon} alt="linkedin" />
          <img src={GitHubIcon} alt="github" />
          <img src={InstagramIcon} alt="instagram" />
        </div>

      </div>
    </header>
  );
}