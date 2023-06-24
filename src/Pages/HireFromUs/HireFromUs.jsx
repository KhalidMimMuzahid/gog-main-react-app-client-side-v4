import React from "react";
import HireFromUsLanding from "./HireFromUsLanding/HireFromUsLanding";
import StudentPlaced from "../Home/StudentPlaced/StudentPlaced";

const HireFromUs = () => {
  return (
    <div className="p-[20px] md:px-[65px] md:py-[90px] dark:text-white">
      <HireFromUsLanding />

      {/* @sojib-sudo */}
      <StudentPlaced showHeading={0}/>
      
      {/* @sojib-sudo */}
    </div>
  );
};

export default HireFromUs;
