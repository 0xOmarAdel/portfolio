import blackhole from "../../assets/blackhole.webm";
import Section from "../../ui/Section";
import HeroContent from "./HeroContents";

const Hero = () => {
  return (
    <Section
      id="home"
      className="min-h-screen py-0 flex flex-row items-center justify-center"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute top-[-300px] left-0 z-20 w-full h-[730px] object-cover rotate-180"
      >
        <source src={blackhole} type="video/webm" />
      </video>
      <HeroContent />
    </Section>
  );
};

export default Hero;
