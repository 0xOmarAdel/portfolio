import SingleSkill from "./SingleSkill";
import { skills } from "../../data/skills";
import Section from "../../ui/Section";
import SectionHeading from '../../ui/SectionHeading';

const Skills = () => {
  return (
    <Section
      id="skills"
      className="flex flex-col items-center justify-center gap-10"
    >
      <div className="flex flex-col items-center justify-center gap-6">
      <SectionHeading text="Professional" gradient="Skillset" />
      <div className="cursive text-2xl text-gray-200 text-center">
        Making apps with modern technologies
      </div>
    </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10">
        {skills.map((image, index) => (
          <SingleSkill key={image.id} icon={image.icon} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
