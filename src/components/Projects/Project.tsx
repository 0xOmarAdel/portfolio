import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCollaborators from "./ProjectCollaborators";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";
import ProjectTitle from "./ProjectTitle";
import { slideInFromBottomVariants } from "../../utils/motion";
import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  collaborators?: { username: string; image: string }[];
  link: string;
  github: string;
};

const ProjectsItem: React.FC<Props> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottomVariants(50, 0.5, 0.25 * props.id)}
      ref={ref}
      className="glass flex flex-col overflow-hidden"
    >
      <div className="image-container relative">
        <img src={props.image} alt={props.title} className="scrolling-image" />
        <div className="absolute top-1/2 right-0 pl-2 pr-1 py-1.5 bg-gradient-to-r from-violet-500 to-violet-900 rounded-tl-xl rounded-bl-xl flex flex-col gap-2 text-xl -translate-y-1/2">
          <a href={props.github} target="_blank" className="transition duration-500 hover:scale-110">
            <FaGithub />
          </a>
          <a href={props.link} target="_blank" className="transition duration-500 hover:scale-110">
            <RiExternalLinkLine />
          </a>
        </div>
      </div>
      <div className="px-5 py-5 flex flex-col">
        <ProjectTitle title={props.title} />
        {props.collaborators && (
          <ProjectCollaborators collaborators={props.collaborators} />
        )}

        <ProjectTags tags={props.tags} />
        <ProjectDescription description={props.description} />
      </div>
    </motion.div>
  );
};

export default ProjectsItem;
