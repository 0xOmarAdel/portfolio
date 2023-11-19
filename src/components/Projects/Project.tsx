import { motion } from "framer-motion";
import ProjectCollaborators from "./ProjectCollaborators";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";
import ProjectTitle from "./ProjectTitle";
import { slideInFromBottomVariants } from "../../utils/motion";
import ProjectImage from "./ProjectImage";

type Props = {
  inView: boolean;
  id: number;
  webpSrc: string;
  pngSrc: string;
  imageHeight: number;
  title: string;
  description: string;
  tags: string[];
  collaborators?: { username: string; image: string }[];
  link: string;
  github: string;
};

const ProjectsItem: React.FC<Props> = ({ inView, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottomVariants(50, 0.5, 0.25 * props.id)}
      className="glass flex flex-col overflow-hidden"
    >
      <ProjectImage
        webpSrc={props.webpSrc}
        pngSrc={props.pngSrc}
        imageHeight={props.imageHeight}
        title={props.title}
        github={props.github}
        link={props.link}
      />
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
