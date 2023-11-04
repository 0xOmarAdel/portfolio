import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  slideInFromLeftVariants,
  slideInFromRightVariants,
  slideInFromTopVariants,
  opacityVariants,
} from "../../utils/motion";
import mainIconsDark from "../../assets/mainIconsDark.svg";
import waveAnimation from "../../assets/waveAnimation.json";
import arrowAnimation from "../../assets/arrowAnimation.json";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full mt-40 flex flex-row items-center justify-center z-20"
    >
      <div className="h-full w-full flex flex-col justify-cente">
        <motion.div
          variants={slideInFromTopVariants(100, 0.5, 0.2)}
          className="-ml-8 flex flex-row items-center"
        >
          <Lottie animationData={waveAnimation} style={{ width: "120px" }} />
          <h1 className="text-6xl font-bold">Hey there!</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeftVariants(100, 0.5, 0.5)}
          className="text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          I'M{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-700">
            OMAR ADEL
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeftVariants(100, 0.5, 0.8)}
          className="max-w-2xl my-6 text-xl text-gray-400 leading-8"
        >
          Experienced Front-End Web Developer specializing in React.js, adept
          with popular UI frameworks/libraries, committed to crafting dynamic
          and user-centric web experiences.
        </motion.p>
        <motion.div className="relative w-fit">
          <motion.a
            variants={slideInFromLeftVariants(100, 0.5, 1)}
            href="#about"
            className="py-2 px-10 block button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
          <motion.div variants={opacityVariants(0.5, 1.3)}>
            <Lottie
              animationData={arrowAnimation}
              loop={1}
              style={{ width: "80px" }}
              className="absolute bottom-0 left-1/2 translate-y-full -translate-x-1/4 rotate-12"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRightVariants(100, 0.5, 0.8)}
        className="w-full h-full hidden lg:flex lg:justify-center lg:items-center"
      >
        <motion.img
          src={mainIconsDark}
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
