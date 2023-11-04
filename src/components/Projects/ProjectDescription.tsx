import { useState } from "react";

type Props = {
  description: string;
};

const ProjectDescription: React.FC<Props> = ({ description }) => {
  const max = 150;
  const [textSliced, setTextSliced] = useState(description?.length > max);

  const readMore = () => {
    setTextSliced(false);
  };

  return (
    <p className="mt-3 text-gray-400">
      {textSliced ? description?.slice(0, max - 3) + "... " : description}
      {textSliced && (
        <button
          className="description-sm description-gray-500 font-bold whitespace-nowrap cursor-pointer transition duration-500 hover:text-violet-400"
          onClick={readMore}
        >
          Read more
        </button>
      )}
    </p>
  );
};

export default ProjectDescription;
