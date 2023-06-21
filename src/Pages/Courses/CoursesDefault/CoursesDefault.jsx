import React from "react";
import CoursesHero from "./CoursesHero/CoursesHero";
import SchoolChamp from "./SchoolChamp/SchoolChamp";
import CodingBees from "./CodingBees/CodingBees";
import EngineeringNerds from "./EngineeringNerds/EngineeringNerds";
import IndustrialCourses from "./IndustrialCourses/IndustrialCourses";
import SDEInfo from "../../Home/SDEInfo/SDEInfo"

const CoursesDefault = () => {
  return (
    <div className="px-[30px] md:px-[115px] dark:text-white">
      <CoursesHero />
      <SchoolChamp />
      <CodingBees />
      <EngineeringNerds />
      <IndustrialCourses />
      <SDEInfo />
    </div>
  );
};

export default CoursesDefault;
