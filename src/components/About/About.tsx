import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { aboutTabs } from "../../data/aboutTabs";
import AboutImage from "./AboutImage";

const About = () => {
  const [selectedTab, setSelectedTab] = useState(aboutTabs[0]);

  return (
    <section
      id="about"
      className="px-32 py-20 flex flex-col items-center justify-center gap-10"
    >
      <div className="text-5xl text-white font-bold text-center">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-800">
          Me
        </span>
      </div>
      <div className="w-full grid grid-cols-7 gap-14">
        <div className="col-span-5 flex flex-col gap-10">
          <nav>
            <ul className="mr-[15px] flex flex-row gap-8 text-2xl text-gray-300 font-semibold">
              {aboutTabs.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`relative cursor-pointer transition duration-500 ${
                    navLink === selectedTab ? "opacity-100" : "opacity-70"
                  }`}
                  onClick={() => setSelectedTab(navLink)}
                >
                  <span className="relative z-10 block">{navLink.text}</span>

                  {navLink === selectedTab && (
                    <motion.div
                      className="absolute -bottom-1.5 w-1/2 h-1 bg-gradient-to-r from-violet-500 to-purple-800 rounded-tr-sm rounded-br-sm"
                      layoutId="about-links"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.component}
            </motion.div>
          </AnimatePresence>
        </div>
        <AboutImage />
      </div>
    </section>
  );
};

export default About;
