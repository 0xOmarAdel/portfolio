type Props = {
  collaborator: { username: string; image: string };
};

const ProjectCollaborator: React.FC<Props> = ({ collaborator }) => {
  return (
    <a
      key={collaborator.username}
      href={`https://github.com/${collaborator.username}`}
      target="_blank"
      aria-label={`${collaborator.username} github account`}
    >
      <img
        src={collaborator.image}
        alt={`${collaborator.username}'s avatar`}
        className="w-5 h-5 rounded-full"
      />
    </a>
  );
};

export default ProjectCollaborator;
