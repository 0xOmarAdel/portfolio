type Props = {
  title: string;
};

const ProjectTitle: React.FC<Props> = ({ title }) => {
  return <p className="text-2xl font-semibold">{title}</p>;
};

export default ProjectTitle;
