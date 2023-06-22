import React from "react";
import { useState } from "react";
import {
    BsBuildings,
  BsChatLeftDots,
  BsClipboard2Check,
  BsClock,
  BsGlobe2,
  BsHourglassSplit,
  BsLaptop,
  BsPeople,
  BsPhoneFlip,
  BsRocket,
} from "react-icons/bs";

const data = [
  {
    icon: <BsHourglassSplit color="#37ED81" className="text-3xl" />,
    title: "Time commitment",
    content: "2 hours every day",
  },
  {
    icon: <BsClock color="#37ED81" className="text-3xl" />,
    title: "Flexible Hours",
    content: "Mon to Sun",
  },
  {
    icon: <BsGlobe2 color="#37ED81" className="text-3xl" />,
    title: "Course Language",
    content: "Eng + Hindi",
  },
  {
    icon: <BsRocket color="#37ED81" className="text-3xl" />,
    title: "Learn",
    content: "Every Thing From Scratch",
  },
  {
    icon: <BsLaptop color="#37ED81" className="text-3xl" />,
    title: "100+ Live Projects",
    content: "2 hours every day",
  },
  {
    icon: <BsClipboard2Check color="#37ED81" className="text-3xl" />,
    title: "100+ Assignments",
    content: "2 hours every day",
  },
  {
    icon: <BsPeople color="#37ED81" className="text-3xl" />,
    title: "Live Mock Interviews",
    content: "",
  },
];

const data2 = [
  {
    icon: <BsBuildings color="#37ED81" className="text-3xl" />,
    title: "Education",
    content: "All Degrees & Branches",
  },
  {
    icon: <BsPhoneFlip color="#37ED81" className="text-3xl" />,
    title: "Technical Know-How",
    content: "No pre-requisites",
  },
  {
    icon: <BsLaptop color="#37ED81" className="text-3xl" />,
    title: "Hardware",
    content: "A laptop and stable internet connection",
  },
  {
    icon: <BsChatLeftDots color="#37ED81" className="text-3xl" />,
    title: "Communication Skills",
    content: "Basic English - speaking, reading and writing",
  },
];

function CourseDetails() {
  const [selected, setSelected] = useState({data: data, bool: true});
  return (
    <div className="my-20">
      <div className="flex flex-col">
        <div className="flex rounded-3xl gap-1">
          <button
            type="button"
            onClick={() => setSelected({data: data, bool: true})}
            className="w-1/2 bg-[#D1FFD0] dark:bg-[#2E3934] p-5 rounded-tl-3xl"
          >
            <p
              className={`${
                selected?.bool ? "text-black dark:text-[#37ED81]" : "text-[#8A8F98]"
              } font-medium lg:text-[20px]`}
            >
              Basic Details
            </p>
          </button>
          <button
            type="button"
            onClick={() => setSelected({data: data2, bool: false})}
            className="w-1/2 bg-[#D1FFD0] dark:bg-[#2E3934] p-5 rounded-tr-3xl"
          >
            <p
              className={`${
                !selected?.bool ? "text-black dark:text-[#37ED81]" : "text-[#8A8F98]"
              } font-medium lg:text-[20px]`}
            >
              Eligibility Requirements
            </p>
          </button>
        </div>
        <div className="bg-white dark:bg-[#202925] py-10 px-5 md:px-1  lg:px-10 lg:py-20 w-full rounded-b-3xl">
          <div className="flex justify-center items-center flex-wrap gap-12">
            {selected?.data.map((item, index) => (
              <div className={`flex items-center ${selected?.bool ? "w-[80%] md:w-1/3 lg:w-1/4" : "w-[80%] md:w-1/3"} gap-5`} key={index}>
                {item?.icon}
                <div className="flex flex-col gap-2 w-full">
                  <p className="lg:text-[20px] font-medium">{item?.title}</p>
                  <p className="text-sm lg:text-base">{item?.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
