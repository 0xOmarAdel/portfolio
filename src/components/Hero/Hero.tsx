import blackhole from "../../assets/blackhole.webm";
import Section from "../../ui/Section";
import HeroContent from "./HeroContents";

const Hero = () => {
  return (
    <Section id="home" className="py-0 mb-20 relative flex flex-col">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full absolute top-[-340px] left-0 z-10 object-cover rotate-180"
      >
        <source src={blackhole} type="video/webm" />
      </video>
      <HeroContent />
    </Section>
  );
};

export default Hero;
