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
import { name, heroText } from "../../data/text";
import arrowDownAnimation from "../../assets/arrowDownAnimation.json";
import Button from "../../ui/Button";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-40 w-full grid grid-cols-8 items-center justify-center translate-y-[15%] lg:translate-y-0"
    >
      <div className="col-span-8 lg:col-span-5 h-full w-full flex flex-col justify-center">
        <motion.div
          variants={slideInFromTopVariants(100, 0.5, 0.2)}
          className="sm:-ml-20 lg:-ml-8 flex flex-row items-center justify-center lg:justify-start text-center lg:text-left"
        >
          <div className="hidden sm:block translate-x-4 lg:translate-x-0 scale-[0.8] lg:scale-100">
            <Lottie animationData={waveAnimation} style={{ width: "120px" }} />
          </div>
          <h1 className="text-5xl lg:text-6xl text-gray-100 font-bold">
            Hey there!
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeftVariants(100, 0.5, 0.5)}
          className="mt-5 sm:mt-0 text-5xl lg:text-6xl font-bold text-gray-100 w-full lg:w-auto h-auto flex flex-col sm:flex-row justify-center lg:justify-start gap-4 text-center lg:text-left"
        >
          I'M
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-700 uppercase">
            {name}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeftVariants(100, 0.5, 0.8)}
          className="max-w-2xl my-6 mx-auto lg:mx-0 text-xl text-gray-400 leading-8 text-center lg:text-left"
        >
          {heroText}
        </motion.p>
        <motion.div className="relative w-full lg:w-fit flex flex-row justify-center">
          <motion.div variants={slideInFromLeftVariants(100, 0.5, 1)}>
            <Button
              text="Learn More"
              href="#about"
              lottieAnimation={arrowDownAnimation}
              lottieAnimationClasses="scale-[1.6]"
            />
          </motion.div>
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
        className="col-span-3 w-full h-full hidden lg:flex lg:justify-center lg:items-center"
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
