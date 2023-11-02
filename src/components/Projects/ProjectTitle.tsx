type Props = {
  title: string;
};

const ProjectTitle: React.FC<Props> = ({ title }) => {
  return <h3 className="text-2xl font-semibold">{title}</h3>;
};

export default ProjectTitle;
