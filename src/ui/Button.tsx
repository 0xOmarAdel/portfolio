import Lottie from "lottie-react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  href: string;
  download?: boolean;
  lottieAnimation: object;
  lottieAnimationClasses?: string;
};

const Button: React.FC<Props> = ({
  text,
  href,
  download,
  lottieAnimation,
  lottieAnimationClasses,
}) => {
  return (
    <motion.div
      variants={{
        hover: {},
      }}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className="w-fit h-fit p-0.5 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full"
    >
      <motion.a
        variants={{
          hover: {},
        }}
        href={href}
        download={download || false}
        className="relative h-[50px] w-full pl-5 pr-3 py-3 bg-[#040018] flex flex-row items-center gap-6 rounded-full overflow-hidden"
      >
        <motion.span
          initial={{ x: 0 }}
          variants={{
            hover: { x: 6 },
          }}
          className="relative z-20 text-gray-200 font-medium"
        >
          {text}
        </motion.span>
        <motion.div
          initial={{ x: 0 }}
          variants={{
            hover: { x: -12 },
          }}
          className="relative z-30 w-[22px]"
        >
          <Lottie
            animationData={lottieAnimation}
            className={lottieAnimationClasses}
          />
        </motion.div>
        <motion.div
          variants={{
            hover: { width: "100%" },
          }}
          className="absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-r from-violet-500 to-violet-700 rounded-tl-full rounded-bl-full"
        ></motion.div>
      </motion.a>
    </motion.div>
  );
};

export default Button;
