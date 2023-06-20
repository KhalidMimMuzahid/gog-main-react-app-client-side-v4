import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import SDEInfoCarouselComponent from "./SDEInfoCarouselComponent/SDEInfoCarouselComponent";
import lightSVG from "../../../assets/SDEInfo/light.svg";
import darkSVG from "../../../assets/SDEInfo/dark.svg";
import lightSVG2 from "../../../assets/SDEInfo/light2.svg";
import darkSVG2 from "../../../assets/SDEInfo/dark2.svg";
import { motion } from "framer-motion";

const data = [
  {
    heading:
      "Software Development offers a promising career path with high growth potential and earnings.",
    subHeading: "What Software Developers are Earning",
    desc: "These are the average salaries you could be earning as a software developer in India. Source: Glassdoor.com",
    info: [
      "10LPA: Average CTC at entry level placement.",
      "Remarkable 70% increase in tech team headcount in the past year.",
      "Projected surge of over 3 million software development jobs in the coming year.",
      "Expected decline of 25% in campus recruitment.",
    ],
    lightSVG,
    darkSVG,
  },
  {
    heading:
      "Electrical and Mechanical engineering offers a promising career path with high growth potential and earnings.",
    subHeading: "What Electrical & Mechanical Engineer are Earning",
    desc: "These are the average salaries you could be earning as an Engineer in India. Source: Glassdoor.com",
    info: [
      "10LPA: Average CTC at entry level placement.",
      "Remarkable 70% increase in tech team headcount in the past year.",
      "Projected surge of over 3 million software development jobs in the coming year.",
      "Expected decline of 25% in campus recruitment.",
    ],
    lightSVG: lightSVG2,
    darkSVG: darkSVG2,
  },
];

function SDEInfo() {
  const [index, setIndex] = useState(0);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      update && setIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [update]);

  return (
    <>
      <div
        className="flex items-center justify-center gap-12 pt-[21px] pb-[65px] px-[30px] md:px-[65px]"
        onMouseEnter={() => setUpdate(false)}
        onMouseLeave={() => setUpdate(true)}
      >
        <button
          type="button"
          onClick={() => setIndex((prev) => prev != 0 && --prev)}
          className="hidden lg:inline-block"
        >
          <BsArrowLeftCircle className="text-3xl text-[#37ED81]" />
        </button>

        <div className="overflow-hidden w-full">
          <motion.div
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            animate={{ x: `-${index * 100}%` }}
            className="flex items-center"
          >
            {data.map((item, index) => (
              <SDEInfoCarouselComponent item={item} key={index} />
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => setIndex((prev) => prev != data.length - 1 && ++prev)}
          className="hidden lg:inline-block"
        >
          <BsArrowRightCircle className="text-3xl text-[#37ED81]" />
        </button>
      </div>
      <div className="my-5 flex gap-7 justify-center">
        {data.map((item, indexHere) => (
          <div
            className={`h-[10px] w-[10px] ${
              index === indexHere ? "bg-[#4BA25D]" : "bg-[#a0ffb3]"
            } rounded-full`}
            key={indexHere}
          ></div>
        ))}
      </div>
    </>
  );
}

export default SDEInfo;
