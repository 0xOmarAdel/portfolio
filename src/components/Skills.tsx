import SkillsText from "./SkillsText";
import SingleSkill from "./SingleSkill";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 flex flex-col items-center justify-center gap-10"
    >
      <SkillsText />
      <div className="flex flex-row flex-wrap items-center justify-center gap-10">
        {skills.map((image, index) => (
          <SingleSkill key={image.id} icon={image.icon} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
