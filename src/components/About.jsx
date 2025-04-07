import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfo.about} Learn more about my{" "}
        <a
          href={navigationPaths.projects}
          className="text-blue-500 hover:underline"
        >
          projects
        </a>{" "}
        or explore my{" "}
        <a
          href={navigationPaths.skills}
          className="text-blue-500 hover:underline"
        >
          technical skills
        </a>
        . I specialize in tools like{" "}
        <a
          href="https://www.powerbi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Power BI
        </a>{" "}
        and{" "}
        <a
          href="https://www.snowflake.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Snowflake
        </a>
        , which help businesses make data-driven decisions. You can also{" "}
        <a
          href={navigationPaths.contact}
          className="text-blue-500 hover:underline"
        >
          contact me
        </a>{" "}
        for collaboration opportunities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <footer className="mt-10">
        <p className="text-secondary text-[15px]">
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/vaibhav-vesmaker-5368841b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>{" "}
          or view my{" "}
          <a
            href="https://github.com/vaibhavvesmaker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          . Learn more about{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            React.js
          </a>{" "}
          and other technologies I use.
        </p>
      </footer>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);