import React from "react";
import { BsPatchCheck } from "react-icons/bs";

const info = [
    "Highly popular online coding courses embraced by college students and professionals alike.",
    "Get jobs upto ₹ 40LPA on completing the course",
    "Gain Practical, Career-Boosting Skills from Industry Professionals.",
    "Acquire In-Demand Skills and Stay Ahead in a Rapidly Evolving World.",
    "Enhance Your Knowledge, Boost Your Resume, and Open Doors to Exciting Opportunities."
]

function HeroInfoComponent() {
  return (
    <div className="col-span-1 lg:col-span-8">
      <h1 className="text-center md:text-left text-[25px] md:text-[48px] font-medium text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC]">"Embark on Your Career with the Accelerator Program"</h1>
      <div className="flex flex-col gap-10 w-full lg:w-[80%] mt-16">
        {info.map((point, index) => (
          <div
            className="flex gap-4 items-center text-[#101010] dark:text-white"
            key={index}
          >
            <BsPatchCheck className="text-2xl text-[#37ED81]" />
            <p className="text-xs sm:text-sm md:text-lg w-full">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroInfoComponent;
