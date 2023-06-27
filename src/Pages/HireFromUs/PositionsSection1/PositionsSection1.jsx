import React, { useState } from "react";

const data1 = [
  [
    "Web Programmer",
    "Web Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Data Scientist",
    "Android Programmer",
    "Mobile Developer",
    "Full Stack Engineer",
    "UI Developer",
    "Front-End Developer",
    "Programmer",
    "UI Engineer",
    "App Developer",
  ],
  [
    "Business Analyst",
    "Database Administrator",
    "Product Analyst",
    "Data Analyst",
    "Product Manager",
    "Database Developer",
    "Data Engineer",
    "Business Analytics Manager",
    "Consultant",
    "Business developer",
    "Web Analyst",
    "Risk Analyst",
    "Marketing analyst",
  ],
];

function PositionsSection1() {
  const [element, setElement] = useState(0);
  return (
    <div className="my-[80px]">
      <div className="max-w-[1310px] mx-auto">
        <h1 className="text-[24px] md:text-[36px] font-medium text-center text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#4BA25D] via-[#3DA5BD] to-[#905BEC] mb-[80px]">
          Right Candidates for the Right Position
        </h1>
        <div className="flex justify-center gap-5 lg:gap-10 border lg:border-2 border-[#37ED81] p-2 rounded-[28px] lg:rounded-full flex-wrap">
          <button
            type="button"
            onClick={() => setElement(0)}
            className={`duration-200 py-3 px-6 font-medium text-[16px] lg:text-[20px] flex-grow rounded-full hover:bg-[#37ED81] ${
              element === 0 && "bg-[#37ED81]"
            }`}
          >
            Web Development
          </button>
          <button
            type="button"
            onClick={() => setElement(1)}
            className={`duration-200 py-3 px-6 font-medium text-[16px] lg:text-[20px] flex-grow rounded-full hover:bg-[#37ED81] ${
              element === 1 && "bg-[#37ED81]"
            }`}
          >
            Data Analytics
          </button>
        </div>
        <div className="flex justify-center py-[40px] md:p-[40px] lg:p-[80px] gap-5 lg:gap-10 flex-wrap">
          {data1[element].map((item, index) => (
            <p key={index} className="text-[12px] sm:text-[14px] lg:text-base shadow-md border dark:border-0 dark:bg-[#1C202A] px-6 py-3.5 rounded-full font-medium ">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PositionsSection1;
