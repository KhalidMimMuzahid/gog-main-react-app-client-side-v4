import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const info = [
  {
    heading: "Full Stack Data Analytics",
    pricing: "₹3999/month",
    desc: "Become a skilled Full Stack Data Analyst with our comprehensive course, equipping you to gather, analyze, & visualize data for informed decision making in any industry. Join us to gain the power of data & drive business success.",
    timing: "Flexible time",
    duration: "24 weeks",
    eligibility: "All degrees & branches",
  },
  {
    heading: "Full Stack Web Development",
    pricing: "₹3999/month",
    desc: "Become a skilled Full Stack Web Developer with our comprehensive course, covering both front-end and back-end development, and unlock endless opportunities in the web development industry.",
    timing: "Flexible time",
    duration: "24 weeks",
    eligibility: "All degrees & branches",
  }
]

const CodingBees = () => {
  return (
    <div className="mt-[120px] px-[65px]">
      <h2 className="text-4xl font-medium text-center text-transparent bg-clip-text text-gradient bg-gradient-to-r from-green-500 to-blue-500 mb-[24px]">
        UPCOMING <span className="text-[#4BA25D] font-bold">CODING BEES</span>{" "}
        BATCHES
      </h2>
      <p className="text-center leading-27 text-[18px] font-[500] dark:text-white">
        We provide Job Assistance Tech courses for Graduates and Under Graduates
        Student and Professionals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[80px]">
        <CardComponent info={info[0]} />
        <CardComponent info={info[1]} />
      </div>
    </div>
  );
};

export default CodingBees;
