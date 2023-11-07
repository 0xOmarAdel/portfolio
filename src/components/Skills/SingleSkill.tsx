import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  icon: React.ReactNode;
  text: string;
  index: number;
}

const SingleSkill = ({ icon: Icon, text, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const hoverStartHandler = () => {
      setIsFlipped(true);
  };

  const hoverEndHandler = () => {
    setTimeout(() => {
        setIsFlipped(false);
    }, 1500);
  };

  const animationDelay = 0.2;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flip-card basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 relative h-full w-full"
    >
      <motion.div
        className="flip-card-inner w-22 h-28 sm:h-36 mx-3 sm:mx-5 mb-6 sm:mb-10 cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onHoverStart={hoverStartHandler}
        onHoverEnd={hoverEndHandler}
      >
        <div className="flip-card-front w-full h-full flex flex-row items-center justify-center border-[2px] border-violet-600 border-opacity-60 rounded-md text-4xl sm:text-5xl text-white">
          {Icon}
        </div>
        <div className="flip-card-back w-full h-full flex flex-row items-center justify-center bg-violet-600 rounded-md text-xl sm:text-2xl text-white">
          {text}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SingleSkill;
