import Lottie from "lottie-react";
import { motion } from "framer-motion";
import downloadAnimation from "../../assets/downloadAnimation.json";
import portfolio from "../../assets/Omar_Adel_Resume.pdf";

const AboutOverview = () => {
  return (
    <>
      <p className="text-xl text-gray-300 leading-8 tracking-wide">
        Experienced front-end web developer skilled in HTML, CSS, Bootstrap,
        Tailwind CSS, JavaScript, TypeScript, React, and Redux Toolkit.
        Passionate about creating visually appealing, user-friendly websites.
        Strong problem-solving abilities and a keen eye for design. Constantly
        learning and staying up-to-date with the latest trends. Collaborative
        team player committed to delivering high-quality projects.
      </p>
      <motion.a
        whileTap={{ scale: 0.95 }}
        href={portfolio}
        download
        className="w-fit mt-5 py-2 px-10 flex flex-row items-center gap-1 border border-violet-800 rounded-sm text-lg text-gray-200 font-semibold transition duration-200 hover:bg-violet-800 hover:text-white"
      >
        <Lottie animationData={downloadAnimation} style={{ width: "20px" }} />
        Download Resume
      </motion.a>
    </>
  );
};

export default AboutOverview;
