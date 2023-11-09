// @ts-ignore
import loadable from "@loadable/component";
import StarsCanvas from "./components/StarsBackground.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

const About = loadable(() => import("./components/About/About.tsx"));
const Hero = loadable(() => import("./components/Hero/Hero.tsx"));
const Skills = loadable(() => import("./components/Skills/Skills.tsx"));
const Projects = loadable(() => import("./components/Projects/Projects.tsx"));
const Contact = loadable(() => import("./components/Contact/Contact.tsx"));

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
