import React, { useContext, useEffect, useState } from "react";
import person1 from "../../../assets/HireFromUs/Carousel/person1.svg";
import person2 from "../../../assets/HireFromUs/Carousel/person2.svg";
import person3 from "../../../assets/HireFromUs/Carousel/person3.svg";
import company1 from "../../../assets/HireFromUs/Carousel/company1.svg";
import company2 from "../../../assets/HireFromUs/Carousel/company2.svg";
import company3 from "../../../assets/HireFromUs/Carousel/company3.svg";
import EachHireCarousel from "./EachHireCarousel";

import { motion } from "framer-motion";
import { UIContext } from "../../../contexts/UIProvider/UIProvider";
import HirePopUp from "./HirePopUp";

const data = [
  {
    desc: "There are many platforms that bolster an individual's \"knowledge\" to show up to work and just do their tasks. But with Masai, it is quite evident that the individuals are given a well-rounded education into the different aspects besides programming that go into software engineering. The college curriculum while focusing on the theoretical aspects of programming hasn't really evolved to keep pace with the practical aspects of software engineering. Companies too can benefit significantly by sourcing developers from Masai as they have good familiarity with the tools and processes that go into building software solutions. The dominant trait amongst Masai graduates has mostly been to focus on gaining more knowledge.",
    img: person1,
    name: "Aarav",
    position: "CTO and Co-Founder",
    companyLogo: company1,
    color: "bg-[#E1FFE8]",
    color2: "bg-[#E1FFE8E0]",
  },
  {
    desc: "We were looking to hire entry-level developers and Masai more than delivered. Our selection rate from Masai's candidates is higher than other avenues of hiring and the process was completed in two days flat. The offer to joining ratio with Masai candidates was 100% which is awesome! The developers had a good foundation of the technologies they need to work with and could hit the ground running. We wholeheartedly recommend Masai to companies looking to hire entry-level developers quickly.",
    img: person2,
    name: "Kavya",
    position: "CTO and Co-Founder",
    companyLogo: company2,
    color: "bg-[#D1EFFF]",
    color2: "bg-[#D1EFFFE0]",
  },
  {
    desc: "Hiring experience with Masai is a wow. All the candidates we interviewed were equally talented, selection wasn't easy. Masai training has made college and background irrelevant because once any student goes through the training the outcome is always good. We have also found that the students are trained even on soft skills, this covers the 360 degree needs of today's corporates or startups. In addition, Masai's one offer per candidate policy ensures students join once the offer is rolled out. Overall, we are confident that Masai is the new destination for quality and timely hiring.",
    img: person3,
    name: "Sanjana",
    position: "CTO and Co-Founder",
    companyLogo: company3,
    color: "bg-[#DFCDFF]",
    color2: "bg-[#DFCDFFE0]",
  },
  {
    desc: "There are many platforms that bolster an individual's \"knowledge\" to show up to work and just do their tasks. But with Masai, it is quite evident that the individuals are given a well-rounded education into the different aspects besides programming that go into software engineering. The college curriculum while focusing on the theoretical aspects of programming hasn't really evolved to keep pace with the practical aspects of software engineering. Companies too can benefit significantly by sourcing developers from Masai as they have good familiarity with the tools and processes that go into building software solutions. The dominant trait amongst Masai graduates has mostly been to focus on gaining more knowledge.",
    img: person1,
    name: "Aarav",
    position: "CTO and Co-Founder",
    companyLogo: company1,
    color: "bg-[#E1FFE8]",
    color2: "bg-[#E1FFE8E0]",
  },
  {
    desc: "We were looking to hire entry-level developers and Masai more than delivered. Our selection rate from Masai's candidates is higher than other avenues of hiring and the process was completed in two days flat. The offer to joining ratio with Masai candidates was 100% which is awesome! The developers had a good foundation of the technologies they need to work with and could hit the ground running. We wholeheartedly recommend Masai to companies looking to hire entry-level developers quickly.",
    img: person2,
    name: "Kavya",
    position: "CTO and Co-Founder",
    companyLogo: company2,
    color: "bg-[#D1EFFF]",
    color2: "bg-[#D1EFFFE0]",
  },
  {
    desc: "Hiring experience with Masai is a wow. All the candidates we interviewed were equally talented, selection wasn't easy. Masai training has made college and background irrelevant because once any student goes through the training the outcome is always good. We have also found that the students are trained even on soft skills, this covers the 360 degree needs of today's corporates or startups. In addition, Masai's one offer per candidate policy ensures students join once the offer is rolled out. Overall, we are confident that Masai is the new destination for quality and timely hiring.",
    img: person3,
    name: "Sanjana",
    position: "CTO and Co-Founder",
    companyLogo: company3,
    color: "bg-[#DFCDFF]",
    color2: "bg-[#DFCDFFE0]",
  },
];

function HireCarousel() {
  const [index, setIndex] = useState(0);
  const [stop, setStop] = useState(false);
  const { screenSize } = useContext(UIContext);
  const [popUpIndex, setPopUpIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      !stop &&
        setIndex((prev) =>
          screenSize >= 768
            ? prev >= data.length - 2
              ? 0
              : prev + 1
            : prev >= data.length - 1
            ? 0
            : prev + 1
        );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [stop]);

  return (
    <div className="mb-[80px]">
      <h1 className="text-[24px] md:text-[36px] font-medium text-center text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#4BA25D] via-[#3DA5BD] to-[#905BEC] mb-[80px]">
        What companies are saying
      </h1>
      <div className="w-full">
        <div
          className="max-w-[1310px] mx-auto overflow-x-hidden"
          onMouseEnter={() => setStop(true)}
          onMouseLeave={() => setStop(false)}
        >
          <motion.div
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex md:gap-[70px]"
            animate={{
              x: `-${
                screenSize >= 768 ? index * 590 + "px" : index * 100 + "%"
              }`,
            }}
          >
            {data.map((item, index) => (
              <EachHireCarousel item={item} key={index} setPopUpIndex={setPopUpIndex} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mt-8 flex gap-7 justify-center">
        {data.map((item, indexHere) => (
          <button
            type="button"
            className={`h-[10px] w-[10px] ${
              index === indexHere ? "bg-[#4BA25D]" : "bg-[#a0ffb3]"
            } rounded-full`}
            key={indexHere}
          ></button>
        ))}
      </div>

      <div className={`fixed z-50 top-0 left-0 w-full h-full bg-[#10101075] flex justify-center items-center ${popUpIndex === -1 ? "hidden" : "block" } p-[30px]`}>
        <HirePopUp item={data[popUpIndex]} setPopUpIndex={setPopUpIndex} />
      </div>
    </div>
  );
}

export default HireCarousel;
