import React from "react";
import python from "../../../../assets/coursesLanding/python.svg";
import dsa from "../../../../assets/coursesLanding/dsa.svg";
import java from "../../../../assets/coursesLanding/java.svg";
import cyber from "../../../../assets/coursesLanding/cyber.svg";
import dv from "../../../../assets/coursesLanding/dv.svg";
import ml from "../../../../assets/coursesLanding/ml.svg";
import ai from "../../../../assets/coursesLanding/ai.svg";
import EachCourseCard from "../EachCourseCard/EachCourseCard";

const data = [
  {
    image: python,
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
    image: dsa,
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
    image: ml,
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
    image: java,
    title: "Java Programming",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: cyber,
    title: "Cyber Security",
    time: "288+ hours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 3999",
    prevPrice: "₹ 5999",
    link: "champs-of-basic-coding"
  },
  {
    image: dv,
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
    image: ml,
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
    image: ai,
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
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-x-36">
        {data.map((item, index) => (
          <EachCourseCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default IndustrialCourses;
