import React from "react";
import schoolChamp from "../../../../assets/coursesLanding/schoolChamps.svg";
import EachCourseCard from "../../EachCourseCard/EachCourseCard";

const data = [
  {
    image: schoolChamp,
    title: "Champs of Basic Coding",
    time: "288+ hoours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 1199",
    prevPrice: "₹ 2999",
  },
  {
    image: schoolChamp,
    title: "Champs of Advance Coding",
    time: "288+ hoours",
    projects: "10+ Projects",
    assignments: "100+ Assignments",
    rating: "4.5",
    price: "₹ 1199",
    prevPrice: "₹ 2999",
  },
];

function SchoolChamp() {
  return (
    <div className="my-[30px] md:my-[65px] md:mx-[50px]">
      <h1>SCHOOL CHAMP</h1>
      <div className="flex justify-between items-center flex-wrap">
        {data.map((item, index) => (
          <EachCourseCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SchoolChamp;
