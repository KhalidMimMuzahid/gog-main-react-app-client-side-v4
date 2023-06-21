import React from "react";
import Super30Hero from "./Super30Hero/Super30Hero";
import Super30Batch from "./Super30Batch/Super30Batch";
import ProgramOverview from "./ProgramOverview/ProgramOverview";
import CourseLayout from "./CourseLayout/CourseLayout";
import CourseContent from "./CourseContent/CourseContent";
import Super30Benifit from "./Super30Benifit/Super30Benifit";
import CourseStructure from "./CourseStructure/CourseStructure";

const Super30 = () => {
  return (
    <div className="px-[30px] md:px-[65px]">
      {/* Sarwar */}
      <Super30Hero />
      <Super30Benifit/>
      {/* Sarwar */}
      
      
      {/* Sojib */}
      <Super30Batch />
      <ProgramOverview/>
      <CourseLayout/>
      <CourseContent/>
      <CourseStructure/>
      {/* Sojib */}


      {/* Sarwar */}
      {/* Create your components from here @Sarwarhridoy4 */}
      {/* Sarwar */}
    </div>
  );
};

export default Super30;
