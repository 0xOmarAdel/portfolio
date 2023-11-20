import blackhole from "../../assets/blackhole.webm";
import Section from "../../ui/Section";
import HeroContent from "./HeroContents";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section
      id="home"
      className="min-h-screen py-0 flex flex-row items-center justify-center"
    >
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.3 }}
        autoPlay
        muted
        loop
        className="absolute top-[-300px] left-0 z-20 w-full h-[730px] object-cover rotate-180"
      >
        <source src={blackhole} type="video/webm" />
      </motion.video>
      <HeroContent />
    </Section>
  );
};

export default Hero;
