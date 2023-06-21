import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const info = [
  {
    heading: "Electrical Engineering",
    pricing: "₹3999",
    desc: "Electrical engineering is a field of engineering that deals with the study and application of electricity, electronics,and electromagnetism. Electrical engineers work in a very wide range of industries & the skills required are likewise variable.",
    timing: "Flexible time",
    duration: "36 weeks",
    eligibility: "Engineering branches",
  },

  {
    heading: "Mechanical Engineering",
    pricing: "₹3999",
    desc: "Mechanical engineering is a branch of engineering that deals with the design, manufacturing, and maintenance of mechanical systems.Using principles motion,energy,force ensuring designs safely,efficiently,and reliably.",
    timing: "Flexible time",
    duration: "36 weeks",
    eligibility: "Engineering branches",
  },
];

const EngineeringNerds = () => {
  return (
    <div className="mt-[80px] md:mt-[120px] px-[30px] md:px-[65px]">
      <h2 className="text-[25px] md:text-[36px] font-medium text-center text-transparent bg-clip-text text-gradient bg-gradient-to-r from-green-500 to-blue-500 mb-[24px]">
        UPCOMING{" "}
        <span className="text-[#4BA25D] font-bold">ENGINEERING NERDS</span>{" "}
        BATCHES
      </h2>
      <p className="text-center leading-27 text-[15px] md:text-[18px] font-[500] dark:text-white">
        We Provide Job Assistance Engineering Courses for Graduate and
        Undergraduate, Engineering Folks.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[80px]">
        <CardComponent info={info[0]} />
        <CardComponent info={info[1]} />
      </div>
    </div>
  );
};

export default EngineeringNerds;
