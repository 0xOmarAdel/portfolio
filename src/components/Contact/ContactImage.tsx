import { motion } from "framer-motion";
import mail from "../../assets/mail.svg";
import { slideInFromBottomVariants } from "../../utils/motion";

type Props = {
  inView: boolean;
};

const ContactImage: React.FC<Props> = ({ inView }) => {
  return (
    <motion.img
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottomVariants(50, 0.5, 0.5)}
      src={mail}
      alt=""
      className="order-1 lg:order-2 z-50"
    />
  );
};

export default ContactImage;
