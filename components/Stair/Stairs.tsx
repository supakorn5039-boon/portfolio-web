import React from "react";
import { motion } from "framer-motion";
import { reverseIndex, StairAnimate } from "./StairAnimate";

export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={StairAnimate}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}
