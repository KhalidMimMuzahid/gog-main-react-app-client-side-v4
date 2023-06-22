import React from "react";
import CoursesHero from "./CoursesHero/CoursesHero";
import SchoolChamp from "./SchoolChamp/SchoolChamp";
import CodingBees from "./CodingBees/CodingBees";
import EngineeringNerds from "./EngineeringNerds/EngineeringNerds";
import IndustrialCourses from "./IndustrialCourses/IndustrialCourses";
import SDEInfo from "../../Home/SDEInfo/SDEInfo"
import CourseDetails from "./CourseDetails/CourseDetails";

const CoursesDefault = () => {
  return (
    <div className="px-[30px] md:px-[115px] dark:text-white">
      <CoursesHero />
      <SchoolChamp />
      <CodingBees />
      <EngineeringNerds />
      <IndustrialCourses />
      <SDEInfo />
      <CourseDetails />
    </div>
  );
};

export default CoursesDefault;
