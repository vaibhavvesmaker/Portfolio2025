import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  // Arrow animation variants
  const arrowVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (direction) => ({
      opacity: 1,
      scale: 1,
      x: direction.x,
      y: direction.y,
      transition: {
        duration: 2, // Duration for outward motion
        ease: "easeInOut",
        repeat: Infinity, // Loop the animation
        repeatType: "reverse", // Reverse the animation to return to the original position
      },
    }),
  };

  // Directions for arrows
  const directions = [
    { x: 500, y: -500 }, // Top-right
    { x: -500, y: -500 }, // Top-left
    { x: 500, y: 500 }, // Bottom-right
    { x: -500, y: 500 }, // Bottom-left
    { x: 700, y: 0 }, // Far-right
    { x: -700, y: 0 }, // Far-left
    { x: 0, y: -700 }, // Far-up
    { x: 0, y: 700 }, // Far-down
    { x: 300, y: -700 }, // Diagonal top-right
    { x: -300, y: -700 }, // Diagonal top-left
    { x: 300, y: 700 }, // Diagonal bottom-right
    { x: -300, y: 700 }, // Diagonal bottom-left
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="fixed left-4 bottom-4 lg:flex hidden justify-center items-center"
    >
      {/* Animated Arrows */}
      <div className="absolute inset-0 flex justify-center items-center">
        {directions.map((direction, index) => (
          <motion.div
            key={index}
            className="triangle"
            variants={arrowVariants}
            initial="initial"
            animate="animate"
            custom={direction} // Pass direction as custom prop
          ></motion.div>
        ))}
      </div>

      {/* Hire Me Button */}
      <div className="w-24 h-24 relative">
        <div className="border-t-4 border-red-500 border-solid rounded-full animate-spin absolute inset-0"></div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex justify-center items-center absolute left-4 top-4 green-pink-gradient w-16 h-16 rounded-full"
          target="_blank"
        >
          <span className="text-white text-[14px] p-1 font-bold">Hire Me</span>
        </a>
      </div>
    </motion.div>
  );
};

export default HireMe;