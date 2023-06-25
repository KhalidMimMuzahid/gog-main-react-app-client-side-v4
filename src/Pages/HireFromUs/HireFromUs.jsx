import React from "react";
import HireFromUsLanding from "./HireFromUsLanding/HireFromUsLanding";
import HireTalentCard from "./HireTalentCard/HireTalentCard";
import StudentPlaced from "../Home/StudentPlaced/StudentPlaced";
import PerfectFit from "./PerfectFit/PerfectFit";
import GraduateBestFit from "./GradutateBestFit/GraduateBestFit";


const HireFromUs = () => {
  return (
    <div className="px-[20px] py-[30px] md:px-[65px] md:py-[70px] dark:text-white">
      <HireFromUsLanding />
      <HireTalentCard />

      {/* @sojib-sudo */}
      <StudentPlaced showHeading={false}/>
      <PerfectFit/>
      <GraduateBestFit/>
      
      {/* @sojib-sudo */}
    </div>
  );
};

export default HireFromUs;
