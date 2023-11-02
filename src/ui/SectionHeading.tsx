const SectionHeading = ({ text, gradient }) => {
  return (
    <div className="text-5xl text-white font-bold text-center">
      {text}{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-700">
        {gradient}
      </span>
    </div>
  );
};

export default SectionHeading;
