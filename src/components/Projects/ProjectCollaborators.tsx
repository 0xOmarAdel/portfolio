import { GoPeople } from "react-icons/go";

type Props = {
  collaborators: { username: string; image: string }[];
};

const ProjectCollaborators: React.FC<Props> = ({ collaborators }) => {
  return (
    <div className="mt-1 flex flex-row items-center gap-3">
      <GoPeople className="text-lg" />
      <div className="flex flex-row gap-2">
        {collaborators.map((collaborator) => (
          <a
            key={collaborator.username}
            href={`https://github.com/${collaborator.username}`}
            target="_blank"
          >
            <img src={collaborator.image} className="w-5 rounded-full" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCollaborators;
