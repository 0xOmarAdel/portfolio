import { motion } from "framer-motion";
import { slideInFromBottomVariants } from "../../utils/motion";
import { useInView } from "react-intersection-observer";
import contactAnimation from "../../assets/contactAnimation.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";

const ContactImage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current!.play();
      animationRef.current!.setSpeed(0.7);
    }
  }, [inView]);

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottomVariants(50, 0.5, 0.5)}
      ref={ref}
      className="order-1 xl:order-2 shrink-0 w-full mx-auto xl:mx-0"
    >
      <Lottie
        lottieRef={animationRef}
        animationData={contactAnimation}
        autoplay={false}
        loop={true}
        style={{ width: "100%" }}
      />
    </motion.div>
  );
};

export default ContactImage;
