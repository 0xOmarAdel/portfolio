import ProjectsItem from "./Project";
import { projectsList } from "../../data/projectsList";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
      {projectsList.map((project) => (
        <ProjectsItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
