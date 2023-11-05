import Lottie from "lottie-react";
import { motion } from "framer-motion";
import downloadAnimation from "../../assets/downloadAnimation.json";
import portfolio from "../../assets/Omar_Adel_Resume.pdf";
import { aboutText } from "../../data/text";

const AboutOverview = () => {
  return (
    <>
      <p className="text-base md:text-lg lg:text-xl text-gray-300 text-center xl:text-start !leading-8 tracking-wider">
        {aboutText}
      </p>
      <motion.a
        whileTap={{ scale: 0.95 }}
        href={portfolio}
        download
        className="w-fit mx-auto xl:mx-0 mt-5 py-2 px-10 flex flex-row items-center gap-1 border border-violet-800 rounded-sm text-lg text-gray-200 font-semibold transition duration-200 hover:bg-violet-800 hover:text-white"
      >
        <Lottie animationData={downloadAnimation} style={{ width: "20px" }} />
        Download Resume
      </motion.a>
    </>
  );
};

export default AboutOverview;
