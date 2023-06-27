import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowUpCircleFill } from "react-icons/bs";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.a
      href="#homeHero"
      className={`fixed z-50 right-0 bottom-0 m-3 md:m-6 lg:m-10 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      } duration-300`}
      animate={{
        y: [-2, 2, -2],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <BsArrowUpCircleFill className="text-[#37ED81] text-2xl lg:text-3xl" />
    </motion.a>
  );
}

export default ScrollButton;
