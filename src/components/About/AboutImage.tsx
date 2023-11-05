import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../../utils/motion";
import workAnimation from "../../assets/workAnimation.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

const AboutImage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current!.play();
    }
  }, [inView]);

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={opacityVariants(1)}
      ref={ref}
      className="order-1 xl:order-2 shrink-0 max-w-lg mx-auto xl:mx-0"
    >
      <Lottie
        lottieRef={animationRef}
        animationData={workAnimation}
        initialSegment={[0, 143]}
        autoplay={false}
        loop={false}
        onComplete={() => {
          animationRef.current!.pause();
        }}
      />
    </motion.div>
  );
};

export default AboutImage;
