import { Variants } from "framer-motion";

export const StairAnimate: Variants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

export const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
