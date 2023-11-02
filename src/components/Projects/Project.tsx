import ProjectCollaborators from "./ProjectCollaborators";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";
import ProjectTitle from "./ProjectTitle";

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
  return (
    <div className="glass flex flex-col overflow-hidden">
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
    </div>
  );
};

export default ProjectsItem;
