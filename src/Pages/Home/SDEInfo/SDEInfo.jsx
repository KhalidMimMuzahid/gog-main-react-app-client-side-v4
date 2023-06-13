import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import lightSVG from "../../../assets/SDEInfo/light.svg"
import darkSVG from "../../../assets/SDEInfo/dark.svg"

import style from "./sdeInfo.module.css"

const points = [
  "10LPA: Average CTC at entry level placement.",
  "Remarkable 70% increase in tech team headcount in the past year.",
  "Projected surge of over 3 million software development jobs in the coming year.",
  "Expected decline of 25% in campus recruitment.",
];

function SDEInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 pt-[21px] pb-[65px] px-[65px] gap-20 items-center">
      <div className="md:col-span-7">
        <h2 className="text-4xl font-medium leading-relaxed text-[#101010] dark:text-[#37ED81]">
          Software Development offers a promising and stable career path with
          substantial growth opportunities and the potential for high earnings.
        </h2>
        <div className="flex flex-col gap-10 w-full mt-32">
          {points.map((point, index) => (
            <div className="flex gap-4 items-center text-[#101010] dark:text-white" key={index}>
                <BsPatchCheck className="text-2xl" />
                <p className="font-medium text-lg w-full">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-5">
        <h2 className={`${style.gradient_text} text-2xl font-medium`}>What Software Developers are Earning</h2>
        <p className="text-[#101010] dark:text-white mt-10 text-xl font-normal dark:font-thin">These are the average salaries you could be earning as a software developer in India. Source: Glassdoor.com</p>
        <img src={lightSVG} className="mt-5" />
      </div>
    </div>
  );
}

export default SDEInfo;
