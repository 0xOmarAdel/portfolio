import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import StarsCanvas from "./components/StarsBackground.tsx";

const App: React.FC = () => {
  return (
    <>
      <StarsCanvas />
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
