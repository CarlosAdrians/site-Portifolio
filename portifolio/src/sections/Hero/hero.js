import "./hero.css";
import profile from "../../assets/images/metadePixel-eu.png";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <h1 className="hero-title">PORTIFÓLIO</h1>

      <div className="hero-center">
        <img src={profile} alt="perfil" className="hero-image" />
      </div>

      <h2 className="hero-left">PROGRAMADOR</h2>
      <h2 className="hero-right">FULL STACK</h2>

    </section>
  );
}