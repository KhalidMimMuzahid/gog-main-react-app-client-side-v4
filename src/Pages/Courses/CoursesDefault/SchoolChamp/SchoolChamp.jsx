import React from "react";
import schoolChamp from "../../../../assets/coursesLanding/schoolChamps.svg";
import schoolChamp2 from "../../../../assets/coursesLanding/schoolChamps2.svg";
import EachCourseCard from "../EachCourseCard/EachCourseCard";

const data = [
  {
    image: schoolChamp,
    title: "Champs of Basic Coding",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 1199",
    prevPrice: "₹ 2999",
    link: "champs-of-basic-coding"
  },
  {
    image: schoolChamp2,
    title: "Champs of Advance Coding",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 1199",
    prevPrice: "₹ 2999",
    link: "champs-of-basic-coding"
  },
];

function SchoolChamp() {
  return (
    <div className="my-[30px] md:my-[65px] md:mx-[50px]">
      <h1 className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC] text-[24px] font-medium mb-[40px] text-center">SCHOOL CHAMP</h1>
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-x-36">
        {data.map((item, index) => (
          <EachCourseCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SchoolChamp;
