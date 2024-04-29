import { FaBriefcase } from "react-icons/fa6";
import { experience } from "../../data/text";

const AboutExperience = () => {
  return (
    <div className="flex flex-col gap-6">
      {experience.map((e) => (
        <div
          key={e.company}
          className="flex flex-row justify-center gap-4 xl:justify-start"
        >
          <div className="relative">
            <div className="flex items-center justify-center p-2 translate-y-2 rounded-md w-9 h-9 bg-gradient-to-r from-violet-400 to-violet-700">
              <FaBriefcase className="text-lg" />
            </div>
            <div className="absolute top-2 left-1/2 -z-10 h-[calc(100%-0.5rem)] w-[3px] bg-gradient-to-r from-violet-400 to-violet-700 rounded-bl-full rounded-br-full -translate-x-1/2"></div>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-semibold md:text-xl">{e.title}</h3>
            <p className="mt-1">
              {e.company}{" "}
              <span className="text-gray-400">
                ({e.location.type}) - {e.location.city}, {e.location.country}
              </span>
            </p>
            <p className="mt-0.5 text-sm text-gray-400">
              {e.started} – {e.left ? e.left : "Present"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutExperience;
