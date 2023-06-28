import React from "react";
import CoursesHero from "./CoursesHero/CoursesHero";
import SchoolChamp from "./SchoolChamp/SchoolChamp";
import CodingBees from "./CodingBees/CodingBees";
import EngineeringNerds from "./EngineeringNerds/EngineeringNerds";
import IndustrialCourses from "./IndustrialCourses/IndustrialCourses";
import SDEInfo from "../../Home/SDEInfo/SDEInfo"
import CourseDetails from "./CourseDetails/CourseDetails";
import Super30Course from "./Super30Course/Super30Course";

const CoursesDefault = () => {
  return (
    <div className="px-[20px] md:px-[115px] dark:text-white">
      <CoursesHero />
      <Super30Course />
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
