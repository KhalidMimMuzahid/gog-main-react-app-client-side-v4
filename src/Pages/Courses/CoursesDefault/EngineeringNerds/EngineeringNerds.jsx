import React from "react";
import schoolChamp from "../../../../assets/coursesLanding/schoolChamps.svg";
import EachCourseCard from "../EachCourseCard/EachCourseCard";

const data = [
  {
    image: schoolChamp,
    title: "Electrical Engineering",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
  },
  {
    image: schoolChamp,
    title: "Mechanical Engineering",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
  },
];

function EngineeringNerds() {
  return (
    <div className="my-[30px] md:my-[65px] md:mx-[50px]">
      <h1 className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC] text-[24px] font-medium mb-[40px] text-center lg:text-left">
        ENGINEERING NERDS
      </h1>
      <div className="flex justify-center lg:justify-between items-center flex-wrap gap-10">
        {data.map((item, index) => (
          <EachCourseCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default EngineeringNerds;
