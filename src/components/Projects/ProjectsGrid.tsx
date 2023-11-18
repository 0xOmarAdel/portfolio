import Project from "./Project";
import { projectsList } from "../../data/projectsList";
import { useInView } from "react-intersection-observer";

const ProjectsGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14"
    >
      {projectsList.map((project) => (
        <Project key={project.id} inView={inView} {...project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
