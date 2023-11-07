import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { socials } from "../data/socials";
import { navLinks } from "../data/navLinks";
import {name} from '../data/text';

const Navbar = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const closeMenuHandler = () => {
    if (menuIsOpened) {
      setMenuIsOpened(false);
    }
  };

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
    <div className="fixed top-0 z-50 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-4 bg-violet-600 bg-opacity-5 shadow-lg shadow-[#2A0E61]/20 backdrop-blur-md">
      <div className="w-full h-full m-auto flex flex-row items-center justify-between">
        <a
          href="#home"
          className="shrink-0 relative z-[100] h-auto w-auto flex flex-row items-center"
          onClick={closeMenuHandler}
        >
          <span className="text-3xl text-gray-100 font-bold capitalize">
            {name}
          </span>
        </a>

        <div
          className={`absolute inset-0 h-screen px-6 sm:px-10 md:px-16 pt-20 bg-[#040018] flex flex-col gap-6 transition duration-500 ${
            menuIsOpened ? "translate-x-0" : "translate-x-full"
          } lg:relative lg:h-fit lg:p-0 lg:bg-transparent w-full lg:flex lg:flex-row lg:items-center lg:gap-0 lg:translate-x-0`}
        >
          <nav className="lg:mx-auto lg:-translate-x-10">
            <ul className="mr-[15px] w-fit flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-0 lg:bg-[#0300145e] lg:border lg:border-violet-700 lg:border-opacity-30 lg:rounded-lg text-gray-200 overflow-hidden">
              {navLinks.map((navLink) => (
                <li key={navLink.id} className="relative">
                  <a
                    href={`#${navLink.id}`}
                    className="relative z-10 block lg:py-2 lg:px-6 lg:first-of-type:pl-8 lg:last-of-type:pr-8 text-2xl lg:text-base"
                    onClick={closeMenuHandler}
                  >
                    {navLink.text}
                  </a>
                  {navLink.id === activeSection && (
                    <motion.div
                      className="absolute inset-0 w-full h-full lg:bg-violet-800"
                      layoutId="nav-links"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-row gap-5 text-xl">
            {socials.map((social) => (
              <a
                key={social.title}
                href={social.path}
                target="_blank"
                className="transition duration-300 hover:text-white"
                aria-label={`${social.title} account`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="block lg:hidden">
          <Hamburger
            toggled={menuIsOpened}
            toggle={setMenuIsOpened}
            size={22}
            label="Menu icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
