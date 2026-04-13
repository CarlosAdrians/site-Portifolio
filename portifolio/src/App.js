import Hero from './sections/Hero/hero';
import About from './sections/About/about';
import Skills from './sections/Skills/skills';
import Projects from './sections/Projects/projects';
import Contact from './sections/Contact/contact';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
