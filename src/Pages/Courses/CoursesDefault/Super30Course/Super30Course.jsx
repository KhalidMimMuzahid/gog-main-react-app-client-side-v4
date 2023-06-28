import React from "react";
import super30_1 from "../../../../assets/coursesLanding/super30_1.svg";
import super30_2 from "../../../../assets/coursesLanding/super30_2.svg";
import EachCourseCard from "../EachCourseCard/EachCourseCard";

const data = [
  {
    image: super30_1,
    title: "Full Stack Web Developer",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding",
  },
  {
    image: super30_2,
    title: "Full Stack Data Scientist",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding",
  },
];

function Super30Course() {
  return (
    <div className="my-[30px] md:my-[65px] md:mx-[50px]">
      <h1 className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC] text-[24px] font-medium mb-[40px] text-center">
        SUPER 30
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-x-36">
        {data.map((item, index) => (
          <EachCourseCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Super30Course;
