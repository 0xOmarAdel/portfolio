import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  icon: React.ReactNode;
  index: number;
}

const SingleSkill = ({ icon: Icon, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
      className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
    >
      <div className="mx-3 sm:mx-5 mb-6 sm:mb-10 py-9 flex flex-row justify-center border border-violet-700 border-opacity-60 rounded-md text-4xl sm:text-5xl text-white">
        {Icon}
      </div>
    </motion.div>
  );
};

export default SingleSkill;
