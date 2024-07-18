"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div className="w-[315px] h-[250px] xl:w-[400px] xl:h-[430px] absolute">
          <Image
            src="/assets/pho.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[320px] xl:w-[406px] h-[300px] xl:h-[550px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/200/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
