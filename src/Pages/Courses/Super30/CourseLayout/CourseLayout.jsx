import React from "react";
import Assignment from "../../../../assets/icons/s30PageIcons/Assignment.svg";
import Calendar from "../../../../assets/icons/s30PageIcons/Calendar.svg";
import Clock from "../../../../assets/icons/s30PageIcons/Clock.svg";
import Course from "../../../../assets/icons/s30PageIcons/Course.svg";
import Group from "../../../../assets/icons/s30PageIcons/Group.svg";
import Hardware from "../../../../assets/icons/s30PageIcons/Hardware.svg";
import LiveMock from "../../../../assets/icons/s30PageIcons/Live Mock Interviews.svg";
import Projects from "../../../../assets/icons/s30PageIcons/Projects.svg";
import CoursesLayoutCard from "./CoursesLayoutCard/CoursesLayoutCard";

import { BsCalendarDate, BsClipboardMinus, BsBriefcase, BsLaptop, BsClock, BsCodeSlash, BsPeople, BsGlobe2 } from "react-icons/bs";

const CourseLayout = () => {
  const coursesLayout = [
    {
      img: <BsCalendarDate/>,
      title: "Duration",
      duration: "24 weeks",
    },
    {
      img: <BsClipboardMinus/>,
      title: "100+ Assignments",
      duration: "2 hours every day",
    },
    {
      img: <BsLaptop/>,
      title: "Online",
      duration: "Class mode",
    },
    {
      img: <BsClock/>,
      title: "Flexible Hours",
      duration: "Mon to Sun",
    },
    {
      img: <BsCodeSlash/>,
      title: "100+ Live Projects",
      duration: "2 hours every day",
    },
    {
      img: <BsBriefcase/>,
      title: "100% Placement",
      duration: "Assurance",
    },
    {
      img: <BsPeople/>,
      title: "Live Mock Interviews",
      duration: "",
    },
    {
      img: <BsGlobe2/>,
      title: "Course Language",
      duration: "Eng + Hindi",
    },
  ];

  return (
    <div className="md:p-[40px] p-[0px] my-[40px]">
      <h4 className="mb-[40px] md:text-[30px] text-[24px] text-center md:text-left text-[#37ED81] font-[500]">
        Course Layout
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-2">
        {coursesLayout.map((course, i) => <CoursesLayoutCard
            key={i}
            course={course}
        />)}
        
      </div>
    </div>
  );
};

export default CourseLayout;
