import React from "react";

import CardComponent from "../CardComponent/CardComponent";

const info = [
  {
    heading: "Champs of Basic Coding",
    pricing: "₹1199/month",
    desc: "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use.Computer Programming Including Programming Concepts, Programming Languages.",
    timing: "Flexible time",
    duration: "24 weeks",
    eligibility: "School Students",
  },

  {
    heading: "Champs of Advance Coding",
    pricing: "₹1199/month",
    desc: "Students learn the fundamentals of programming through creating interactive stories, designing animations, & creating advance-games,mobile apps.Computer Programming Including Programming Concepts, Programming Languages.",
    timing: "Flexible time",
    duration: "24 weeks",
    eligibility: "School Students",
  },
];

const SchoolChamp = () => {
  return (
    <div className="mt-[80px] md:mt-[120px] md:px-[65px] px-[30px]">
      <h2 className="text-[25px] md:text-[36px] font-medium text-center text-transparent bg-clip-text text-gradient bg-gradient-to-r from-green-500 to-blue-500 mb-[24px]">
        UPCOMING <span className="text-[#4BA25D] font-bold">SCHOOL CHAMP</span>{" "}
        BATCHES
      </h2>
      <p className="text-center leading-27 text-[15px] md:text-[18px] font-[500] dark:text-white">
        We have courses for students from class 6th to 12th where they will
        learn to code in flexible time.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[80px]">
        <CardComponent info={info[0]} />
        <CardComponent info={info[1]} />
      </div>
    </div>
  );
};

export default SchoolChamp;
