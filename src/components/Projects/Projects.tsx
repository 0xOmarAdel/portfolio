import Section from "../../ui/Section";
import ProjectsImagesGrid from "./ProjectsGrid";
import SectionHeading from "../../ui/SectionHeading";

const Projects = () => {
  return (
    <Section
      id="projects"
      className="relative z-40 flex flex-col items-center justify-center gap-12"
    >
      <SectionHeading text="Recent" gradient="Projects" />
      <ProjectsImagesGrid />
    </Section>
  );
};

export default Projects;
