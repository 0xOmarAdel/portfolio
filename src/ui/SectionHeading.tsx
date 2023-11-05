type Props = {
  text: string;
  gradient: string;
};

const SectionHeading: React.FC<Props> = ({ text, gradient }) => {
  return (
    <div className="text-4xl md:text-5xl text-white font-bold text-center">
      {text}{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-700">
        {gradient}
      </span>
    </div>
  );
};

export default SectionHeading;
