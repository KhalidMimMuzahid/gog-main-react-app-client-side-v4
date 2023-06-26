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
    "Fullstack Developer",
    "React Developer",
    "Node Developer",
    "Fullstack Engineer",
    "Software Development Engineer (SDE)",
    "Frontend Developer",
    "Backend Engineer",
    "Web Developer",
    "UI Developer",
    "Web Developer",
    "Programmer",
    "UI Engineer",
    "App Developer",
  ],
  [
    "Power System Engineer",
    "Control System Engineer",
    "Electrical Design Engineer Developer",
    "FSCADA Engineer",
    "PCB Design Engineer",
    "Software Engineer",
    "Service & Site Engineer",
  ],
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
];

const buttons = [
  "School champ",
  "Coding bees",
  "Engineering nerds",
  "Industrial",
];

function PositionsSection2() {
  const [element, setElement] = useState(0);
  return (
    <div className="my-[80px]">
      <div className="max-w-[1310px] mx-auto">
        <div className="flex justify-center gap-5 lg:gap-10 lg:border-2 border-[#37ED81] p-2 lg:rounded-full flex-wrap">
          {buttons.map((btn, index) => (
            <button
              type="button"
              onClick={() => setElement(index)}
              key={index}
              className={`duration-200 py-3 px-6 font-medium text-[16px] lg:text-[20px] flex-grow rounded-full hover:bg-[#37ED81] ${
                element === index && "bg-[#37ED81]"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="flex justify-center py-[40px] md:p-[40px] lg:p-[80px] gap-5 lg:gap-10 flex-wrap">
          {data1[element].map((item, index) => (
            <p key={index} className="text-[12px] sm:text-[14px] lg:text-base bg-[#D1FFD0] px-6 py-3 rounded-full font-medium text-[#101010]">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PositionsSection2;
