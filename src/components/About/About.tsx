import { useState, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { aboutTabs } from "../../data/aboutTabs";
import AboutImage from "./AboutImage";
import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";
const AboutOverview = lazy(() => import(`./AboutOverview`));
const AboutEducation = lazy(() => import(`./AboutEducation`));
const AboutGitHubStats = lazy(() => import(`./AboutGitHubStats`));

const About = () => {
  const [selectedTab, setSelectedTab] = useState(aboutTabs[0]);

  return (
    <Section
      id="about"
      className="relative z-40 flex flex-col items-center justify-center gap-10"
    >
      <SectionHeading text="About" gradient="Me" />
      <div className="w-full flex flex-col xl:flex-row justify-between gap-9 xl:gap-12">
        <div className="order-2 xl:order-1 flex flex-col gap-6 xl:gap-8">
          <nav>
            <ul className="mr-[15px] flex flex-row justify-center xl:justify-start gap-8 text-xl sm:text-2xl text-gray-300 font-semibold">
              {aboutTabs.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`relative h-fit cursor-pointer transition duration-500 ${
                    navLink === selectedTab ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <button onClick={() => setSelectedTab(navLink)}>
                    <span className="relative z-10 block">{navLink.text}</span>
                    {navLink === selectedTab && (
                      <motion.div
                        className="absolute -bottom-1.5 w-1/2 h-1 bg-gradient-to-r from-violet-400 to-violet-700 rounded-tr-sm rounded-br-sm"
                        layoutId="about-links"
                      />
                    )}
                  </button>
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
              className="grow-0 flex flex-col items-center xl:items-start"
            >
              <Suspense fallback={<div>Loading...</div>}>
                {selectedTab.component === "AboutOverview" ? (
                  <AboutOverview />
                ) : selectedTab.component === "AboutEducation" ? (
                  <AboutEducation />
                ) : (
                  <AboutGitHubStats />
                )}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
        <AboutImage />
      </div>
    </Section>
  );
};

export default About;
