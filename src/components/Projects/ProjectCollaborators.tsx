import { GoPeople } from "react-icons/go";
import ProjectCollaborator from "./ProjectCollaborator";

type Props = {
  collaborators: { username: string; image: string }[];
};

const ProjectCollaborators: React.FC<Props> = ({ collaborators }) => {
  return (
    <div className="mt-1 flex flex-row items-center gap-3">
      <GoPeople className="text-lg" />
      <div className="flex flex-row gap-2">
        {collaborators.map((collaborator) => (
          <ProjectCollaborator
            key={collaborator.username}
            collaborator={collaborator}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCollaborators;
