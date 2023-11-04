export const slideInFromLeftVariants = (
  initial: number,
  duration = 0.5,
  delay = 0
) => {
  return {
    hidden: { x: -initial, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
      },
    },
  };
};

export const slideInFromRightVariants = (
  initial: number,
  duration = 0.5,
  delay = 0
) => {
  return {
    hidden: { x: initial, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
      },
    },
  };
};

export const slideInFromBottomVariants = (
  initial: number,
  duration = 0.5,
  delay = 0
) => {
  return {
    hidden: { y: initial, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration,
        delay,
      },
    },
  };
};

export const slideInFromTopVariants = (
  initial: number,
  duration = 0.5,
  delay = 0
) => {
  return {
    hidden: { y: -initial, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
      },
    },
  };
};

export const opacityVariants = (duration = 0.5, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: "easeInOut",
      },
    },
  };
};

export const scaleVariants = (initial: number, duration = 0.5, delay = 0) => {
  return {
    hidden: {
      scale: initial,
    },
    visible: {
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeInOut",
      },
    },
  };
};
