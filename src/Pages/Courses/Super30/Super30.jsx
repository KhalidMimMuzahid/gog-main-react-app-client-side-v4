import React from "react";
import Super30Hero from "./Super30Hero/Super30Hero";
import Super30Batch from "./Super30Batch/Super30Batch";
import ProgramOverview from "./ProgramOverview/ProgramOverview";
import CourseLayout from "./CourseLayout/CourseLayout";
import CourseContent from "./CourseContent/CourseContent";
import Super30Benifit from "./Super30Benifit/Super30Benifit";

import CourseStructure from "./CourseStructure/CourseStructure";

import WhatsIncluded from "./WhatsIncluded/WhatsIncluded";
import JobRole from "./JobRole/JobRole";
import FAQ from "./FAQ/FAQ";

import MeetOurTeam from "../../Home/MeetOurTeam/MeetOurTeam";
import Instructor from "./Instructor/Instructor";

import BookFreeDemo from "./BookFreeDemo/BookFreeDemo";
import StudentStories from "./StudentStories/StudentStories";



const Super30 = () => {
  return (
    <div className='px-[20px] md:px-[65px]'>
      {/* Sarwar */}
      <Super30Hero />
      <Super30Benifit />
      {/* Sarwar */}
      
      
      {/* Sojib */}
      <Super30Batch />

      <ProgramOverview/>
      <CourseLayout/>
      <CourseContent/>
      <CourseStructure/>
      <Instructor/>
      <div className="md:px-[40px]"><MeetOurTeam showHeading={false}/></div>
      <StudentStories/>

      {/* Sojib */}

      {/* Sarwar */}
      <WhatsIncluded />
      <JobRole />
      <FAQ />
      <BookFreeDemo/>
      {/* Sarwar */}
    </div>
  );
};

export default Super30;
