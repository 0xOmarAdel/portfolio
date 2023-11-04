import { motion } from "framer-motion";
import mail from "../../assets/mail.svg";
import { slideInFromBottomVariants } from "../../utils/motion";
import { useInView } from "react-intersection-observer";

const ContactImage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.img
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottomVariants(50, 0.5, 0.5)}
      src={mail}
      alt=""
      className="order-1 lg:order-2"
      ref={ref}
    />
  );
};

export default ContactImage;
