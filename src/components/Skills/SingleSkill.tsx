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
      className="h-full px-24 py-9 border border-violet-700 border-opacity-60 rounded-md text-5xl text-white"
    >
      {Icon}
    </motion.div>
  );
};

export default SingleSkill;
