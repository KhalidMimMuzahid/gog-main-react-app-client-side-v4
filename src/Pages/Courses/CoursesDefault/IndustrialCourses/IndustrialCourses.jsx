import React from "react";
import schoolChamp from "../../../../assets/coursesLanding/schoolChamps.svg";
import EachCourseCard from "../EachCourseCard/EachCourseCard";

const data = [
  {
    image: schoolChamp,
    title: "Python",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: schoolChamp,
    title: "DSA",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: schoolChamp,
    title: "SQL",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: schoolChamp,
    title: "Data Visualization",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: schoolChamp,
    title: "Machine Learning",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: schoolChamp,
    title: "Artificial Intelligence",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
];

function IndustrialCourses() {
  return (
    <div className="my-[30px] md:my-[65px] md:mx-[50px]">
      <h1 className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC] text-[24px] font-medium mb-[40px] text-center">
        INDUSTRIAL COURSES
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-36">
        {data.map((item, index) => (
          <EachCourseCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default IndustrialCourses;
