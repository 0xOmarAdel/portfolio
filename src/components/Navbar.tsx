import { socials } from "../data/socials";
import { navLinks } from "../data/navLinks";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(navLinks[0]);

  return (
    <div className="fixed top-0 z-50 w-full px-20 py-4 bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="w-full h-full m-auto px-[10px] flex flex-row items-center justify-between">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <span className="hidden md:block text-3xl text-gray-300 font-bold">
            Omar Adel
          </span>
        </a>

        <nav className="md:mr-24 flex flex-row items-center justify-between">
          <ul className="mr-[15px] flex items-center justify-between bg-[#0300145e] border border-violet-900 rounded-full text-gray-200 overflow-hidden">
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className="relative py-2 px-6 first-of-type:pl-8 last-of-type:pr-8"
                onClick={() => setActiveLink(navLink)}
              >
                <a href={`#${navLink.id}`} className="relative z-10">
                  {navLink.text}
                </a>
                {navLink === activeLink && (
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-violet-900"
                    layoutId="nav-links"
                  />
                )}
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
