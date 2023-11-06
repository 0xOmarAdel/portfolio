import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";

type Props = {
  image: string;
  title: string;
  link: string;
  github: string;
};

const ProjectImage: React.FC<Props> = ({ image, title, github, link }) => {
  return (
    <div className="image-container relative">
      <img src={image} alt={title} className="scrolling-image" />
      <div className="absolute top-1/2 right-0 pl-2 pr-1 py-1.5 bg-[#1f1147] rounded-tl-xl rounded-bl-xl flex flex-col gap-2 text-xl text-gray-400 -translate-y-1/2">
        <a
          href={github}
          target="_blank"
          className="transition duration-500 hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href={link}
          target="_blank"
          className="transition duration-500 hover:text-gray-300"
        >
          <RiExternalLinkLine />
        </a>
      </div>
    </div>
  );
};

export default ProjectImage;
