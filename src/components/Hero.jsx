import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import personalPhoto from "../assets/vv_photo.png"; // Import the image

const Hero = () => {
  return (
    
    <section className="relative w-full h-screen bg-white mx-auto">
      {/* <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            line_linked: { enable: false },
            opacity: { value: 0.5 },
          },
        }}
      /> */}
      {/* Hero Content */}
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        {/* Left Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#581845] animate-pulse" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#900C3F] to-[#581845]" />
        </div>

        {/* Hero Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-[#900C3F]`}>
            Hi, I'm{" "}
            <motion.span
              className="text-[#581845]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {personalInfo.name}
            </motion.span>
            <motion.span
              className="text-[#]"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              !
            </motion.span>
          </h1>
          <motion.p
            className={`${styles.heroSubText} text-[#581845] mt-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Innovative {personalInfo.role}, <br className="sm:block hidden" /> */}
            Solving the whys in your business—turning questions<br></br> into actionable insights.
          </motion.p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Right Side: Personal Image */}
      <motion.div
        className="absolute top-[170px] right-10 w-[350px] h-[590px] rounded-lg overflow-hidden shadow-lg bg-gray-100 flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={personalPhoto} // Use the imported image
          alt="Vaibhav Vesmaker"
          className="w-full h-full object-cover"
          style={{
            objectFit: "cover", // Ensures the image fills the container
            objectPosition: "center 10%", // Focuses on the left mid to bottom part
          }}
        />
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#900C3F] flex justify-center items-start p-2"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#900C3F] mb-1"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;