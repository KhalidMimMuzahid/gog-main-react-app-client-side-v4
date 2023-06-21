import React from "react";
import CoursesHero from "./CoursesHero/CoursesHero";
import SchoolChamp from "./SchoolChamp/SchoolChamp";
import CodingBees from "../CodingBees/CodingBees";
import EngineeringNerds from "../EngineeringNerds/EngineeringNerds";

const CoursesDefault = () => {
  return (
    <div className="px-[30px] md:px-[115px] dark:text-white">
      <CoursesHero />
      <SchoolChamp />
      <CodingBees />
      <EngineeringNerds />
    </div>
  );
};

export default CoursesDefault;
