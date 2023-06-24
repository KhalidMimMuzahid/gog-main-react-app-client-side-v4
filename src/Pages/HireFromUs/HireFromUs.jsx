import React from "react";
import HireFromUsLanding from "./HireFromUsLanding/HireFromUsLanding";
import HireTalentCard from "./HireTalentCard/HireTalentCard";
import StudentPlaced from "../Home/StudentPlaced/StudentPlaced";
import PerfectFit from "./PerfectFit/PerfectFit";


const HireFromUs = () => {
  return (
    <div className="px-[20px] py-[30px] md:px-[65px] md:py-[70px] dark:text-white">
      <HireFromUsLanding />
      <HireTalentCard />

      {/* @sojib-sudo */}
      <StudentPlaced showHeading={0}/>
      <PerfectFit/>
      
      {/* @sojib-sudo */}
    </div>
  );
};

export default HireFromUs;
