import React from "react";
import engineeringNerds1 from "../../../../assets/coursesLanding/engineeringNerds1.svg";
import engineeringNerds2 from "../../../../assets/coursesLanding/engineeringNerds2.svg";
import EachCourseCard from "../EachCourseCard/EachCourseCard";

const data = [
  {
    image: engineeringNerds1,
    title: "Electrical Engineering",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: engineeringNerds2,
    title: "Mechanical Engineering",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
];

function EngineeringNerds() {
  return (
    <div className="my-[30px] md:my-[65px] md:mx-[50px]">
      <h1 className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC] text-[24px] font-medium mb-[40px] text-center">
        ENGINEERING NERDS
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-x-36">
        {data.map((item, index) => (
          <EachCourseCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default EngineeringNerds;
