import ProjectsImagesGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-32 py-20 flex flex-col items-center justify-center gap-12"
    >
      <div className="text-5xl text-white font-bold text-center">
        Recent{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-800">
          Projects
        </span>
      </div>
      <ProjectsImagesGrid />
    </section>
  );
};

export default Projects;
