import { FaGraduationCap } from "react-icons/fa6";

const AboutEducation = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="relative">
        <div className="h-fit p-2 rounded-md bg-gradient-to-r from-violet-500 to-purple-800 translate-y-2">
          <FaGraduationCap className="text-xl" />
        </div>
        <div className="absolute top-2 left-1/2 -z-10 h-[calc(100%-0.5rem)] w-[3px] bg-purple-500 rounded-bl-full rounded-br-full -translate-x-1/2"></div>
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-xl font-semibold">
          Bachelor's degree from the Computer Science & Statistics Department
        </h3>
        <h4>Faculty of Science Ain Shams University</h4>
        <p className="text-sm text-gray-400">Sep 2019 – Jun 2023</p>
      </div>
    </div>
  );
};

export default AboutEducation;
