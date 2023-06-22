import React from "react";
import ParagraphCard from "./ParagraphCard/ParagraphCard";

const CourseContent = () => {
  const syllabuses1 = [
    {
      heading: "Coding Mathematics",
      subHeading:
        "Introduction to basic mathematical concepts  like GCD, LCM, Prime numbers, factorial, etc.",
    },
    {
      heading: "Start with Analytical Excel",
      subHeading:
        "Introduction to Excel. Learn to analyze data and basic concepts of excel.",
    },
    {
      heading: "Python Programming",
      subHeading:
        "Python Programming : Introduction to Basic concepts of Python. Learn to use python interactively.",
    },
    {
      heading: "Enter the world of Tableau",
      subHeading:
        "Introduction to Tableau and learn to use basic features of Tableau.",
    },
    {
      heading: "Begin with SQL",
      subHeading:
        "Learn everything you need to know to get started with SQL for data science.",
    },
    {
      heading: "Python Programming",
      subHeading:
        "Introduction to Basic concepts of Python. Learn to use python interactively.",
    },
  ];

  const syllabuses2 = [
    {
      heading: "Coding Mathematics",
      subHeading:
        "Learn basic mathematical concepts  like GCD, LCM, Prime numbers, factorial, etc.",
    },
    {
      heading: "Intro to programming language",
      subHeading:
        "Learn the fundamentals of programming like variables, loops,  operators, functions, and many more.",
    },
    {
      heading: "Begin with Java and DSA",
      subHeading:
        "Introduction to Java. Learn the concepts of DSA such as arrays, sorting, searching, string, etc.",
    },
    {
      heading: "Intro to programming language",
      subHeading:
        "Learn the fundamentals of programming like variables, loops,  operators, functions, and many more.",
    },
    {
      heading: "Begin with SQL",
      subHeading:
        "Learn everything you need to know to get started with SQL for data science.",
    },
    {
      heading: "HTML, CSS, JS",
      subHeading: "Learn to use html and css and introduction to JS.",
    },
  ];

  return (
    <div className="md:py-[40px] p-[0px]">
      <h4 className="md:mb-[40px] mb-[30px] md:text-[30px] text-[24px] text-center md:text-left text-[#37ED81] font-[500]">
        Course Content
      </h4>
      <h6 className="mb-[16px]  text-[#4BA25D] text-[16px] md:text-[18px] font-[600] ">
        Syllabus for data science
      </h6>
      {syllabuses1.map((slb, i) => (
        <ParagraphCard key={i} slb={slb} />
      ))}


      <h6 className="mt-[40px] mb-[16px]  text-[#4BA25D] text-[16px] md:text-[18px] font-[600] ">
      Syllabus for web development
      </h6>
      {syllabuses2.map((slb, i) => (
        <ParagraphCard key={i} slb={slb} />
      ))}
    </div>
  );
};

export default CourseContent;
