import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import {
  navLinks,
  navigationPaths,
  personalInfo,
  publicUrls,
} from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-[#FF5733] shadow-lg" : "bg-[#C70039]"
      } ${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-20 transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to={navigationPaths.home}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            {personalInfo.name} &nbsp;
            <span className="lg:block hidden">| {personalInfo.role}</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer hover:text-white relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              {/* Hover underline animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* Resume Link */}
          <li
            className={`text-secondary text-[18px] font-medium cursor-pointer hover:text-white relative group`}
          >
            <a
              href={publicUrls.resume}
              download="Vaibhav_Vesmaker_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 black-gradient mx-4 my-2 p-6 rounded-xl z-10 min-w-[140px]`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[18px] font-medium cursor-pointer hover:text-white`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Resume Link */}
              <li
                className={`text-secondary text-[18px] font-medium cursor-pointer hover:text-white`}
              >
                <a
                  href={publicUrls.resume}
                  download="Vaibhav_Vesmaker_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;