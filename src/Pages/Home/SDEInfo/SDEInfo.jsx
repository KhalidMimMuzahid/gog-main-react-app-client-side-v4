import React, { useContext } from "react";
import { BsPatchCheck } from "react-icons/bs";
import lightSVG from "../../../assets/SDEInfo/light.svg";
import darkSVG from "../../../assets/SDEInfo/dark.svg";

import style from "./sdeInfo.module.css";
import { UIContext } from "../../../contexts/UIProvider/UIProvider";

const points = [
  "10LPA: Average CTC at entry level placement.",
  "Remarkable 70% increase in tech team headcount in the past year.",
  "Projected surge of over 3 million software development jobs in the coming year.",
  "Expected decline of 25% in campus recruitment.",
];

function SDEInfo() {
  const { theme } = useContext(UIContext);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 pt-[21px] pb-[65px] px-[30px] md:px-[65px] gap-20 items-center">
      <div className="lg:col-span-7">
        <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-medium leading-relaxed text-[#101010] dark:text-[#37ED81]">
          Software Development offers a promising and stable career path with
          substantial growth opportunities and the potential for high earnings.
        </h2>
        <div className="flex flex-col gap-10 w-full mt-20 lg:mt-32">
          {points.map((point, index) => (
            <div
              className="flex gap-4 items-center text-[#101010] dark:text-white"
              key={index}
            >
              <BsPatchCheck className="text-2xl" />
              <p className="md:font-medium text-base md:text-lg w-full">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5">
        <h2 className={`${style.gradient_text} text-2xl font-medium`}>
          What Software Developers are Earning
        </h2>
        <p className="text-[#101010] dark:text-white mt-10 md:text-xl font-normal dark:font-thin">
          These are the average salaries you could be earning as a software
          developer in India. Source: Glassdoor.com
        </p>
        <div className="flex justify-center">
          <img src={theme === "light" ? lightSVG : darkSVG} className="mt-5" />
        </div>
      </div>
    </div>
  );
}

export default SDEInfo;
