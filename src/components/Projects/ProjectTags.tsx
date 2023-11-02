type Props = {
  tags: string[];
};

const ProjectTags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="mt-3 flex flex-row flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="glass px-3 py-0.5 text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
