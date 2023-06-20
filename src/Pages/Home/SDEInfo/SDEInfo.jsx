import React from "react";
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
  return (
    <div className="flex items-center justify-between gap-12 pt-[21px] pb-[65px] px-[30px] md:px-[65px]">
      <button type="button">
        <BsArrowLeftCircle className="text-3xl text-[#37ED81]" />
      </button>

      <div className="overflow-hidden w-[80vw]">
        <motion.div
          animate={{ x: `-${0}%` }}
          className="flex items-center gap-10"
        >
          {data.map((item, index) => (
            <SDEInfoCarouselComponent item={item} key={index} />
          ))}
        </motion.div>
      </div>

      <button type="button">
        <BsArrowRightCircle className="text-3xl text-[#37ED81]" />
      </button>
    </div>
  );
}

export default SDEInfo;
