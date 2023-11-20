import SingleSkill from "./SingleSkill";
import { skills } from "../../data/skills";
import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Section
      id="skills"
      className="relative z-40 flex flex-col items-center justify-center gap-10"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <SectionHeading text="Professional" gradient="Skillset" />
        <div className="cursive text-xl sm:text-2xl text-gray-200 text-center">
          Making apps with modern technologies
        </div>
      </div>
      <div
        ref={ref}
        className="w-[calc(100%+1.5rem)] sm:w-[calc(100%+2.5rem)] flex flex-row flex-wrap items-center justify-center"
      >
        {skills.map((skill, index) => (
          <SingleSkill
            key={skill.id}
            inView={inView}
            icon={skill.icon}
            text={skill.text}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
