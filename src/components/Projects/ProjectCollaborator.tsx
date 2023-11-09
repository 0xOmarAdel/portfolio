import { useEffect, useState } from "react";

type Props = {
  collaborator: { username: string; image: string };
};

const ProjectCollaborator: React.FC<Props> = ({ collaborator }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    let objectURL = "";
    const loadImage = async () => {
      try {
        const response = await fetch(collaborator.image);
        const blob = await response.blob();
        objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL);
      } catch (error) {
        console.error("Failed to fetch:", collaborator.image);
      }
    };

    loadImage();

    return () => {
      URL.revokeObjectURL(objectURL);
    };
  }, [collaborator.image]);

  return (
    <a
      key={collaborator.username}
      href={`https://github.com/${collaborator.username}`}
      target="_blank"
      aria-label={`${collaborator.username} github account`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${collaborator.username}'s avatar`}
          className="w-5 h-5 rounded-full"
        />
      )}
    </a>
  );
};

export default ProjectCollaborator;
