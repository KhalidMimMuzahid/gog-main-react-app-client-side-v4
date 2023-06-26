import React from "react";
import Heading from "./Heading/Heading";
import AboutUsInfo from "./AboutUsInfo/AboutUsInfo";
import OurMission from "./OurMission/OurMission";
import OurCalture from "./OurCalture /OurCalture";
import StudentPlaced from "../Home/StudentPlaced/StudentPlaced";
import Record from "./Record/Record";

const AboutUs = () => {
  return (
    <div>
      <Heading />
      <AboutUsInfo />
      <OurMission />
      <div className="mt-[64px] mb-[24px] bg-[#D1FFD0] dark:bg-[#1A2C27] rounded-tl-[20px] rounded-[20px]">
        <OurCalture />
        <Record />
        <div className="py-[120px]">
          <StudentPlaced showHeading={true} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
