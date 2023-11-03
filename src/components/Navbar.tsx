import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { socials } from "../data/socials";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      const offset = 200;

      if (
        aboutSection!.offsetTop <= window.scrollY + offset &&
        skillsSection!.offsetTop > window.scrollY + offset
      ) {
        setActiveSection("about");
      } else if (
        skillsSection!.offsetTop <= window.scrollY + offset &&
        projectsSection!.offsetTop > window.scrollY + offset
      ) {
        setActiveSection("skills");
      } else if (
        projectsSection!.offsetTop <= window.scrollY + offset &&
        contactSection!.offsetTop > window.scrollY + offset
      ) {
        setActiveSection("projects");
      } else if (contactSection!.offsetTop <= window.scrollY + offset) {
        setActiveSection("contact");
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-4 bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="w-full h-full m-auto flex flex-row items-center justify-between">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <span className="text-3xl text-gray-300 font-bold">Omar Adel</span>
        </a>

        <nav className="lg:mr-24 hidden lg:flex lg:flex-row lg:items-center lg:justify-between">
          <ul className="mr-[15px] flex items-center justify-between bg-[#0300145e] border border-violet-900 rounded-full text-gray-200 overflow-hidden">
            {navLinks.map((navLink) => (
              <li key={navLink.id} className="relative">
                <button onClick={() => setActiveSection(navLink.id)}>
                  <a
                    href={`#${navLink.id}`}
                    className="relative z-10 block py-2 px-6 first-of-type:pl-8 last-of-type:pr-8"
                  >
                    {navLink.text}
                  </a>
                    {navLink.id === activeSection && (
                      <motion.div
                        className="absolute inset-0 w-full h-full bg-violet-900"
                        layoutId="nav-links"
                      />
                    )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row gap-5 text-xl text-white">
          {socials.map((social) => (
            <a key={social.title} href={social.path} target="_blank">
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
