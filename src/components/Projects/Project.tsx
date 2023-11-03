import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCollaborators from "./ProjectCollaborators";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";
import ProjectTitle from "./ProjectTitle";
import { slideInFromBottomVariants } from "../../utils/motion";

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
      <div className="image-container">
        <img src={props.image} alt="Your" className="scrolling-image" />
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
