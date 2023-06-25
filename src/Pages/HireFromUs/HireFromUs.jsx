import React from "react";
import HireFromUsLanding from "./HireFromUsLanding/HireFromUsLanding";
import HireTalentCard from "./HireTalentCard/HireTalentCard";
import StudentPlaced from "../Home/StudentPlaced/StudentPlaced";
import PerfectFit from "./PerfectFit/PerfectFit";
import GraduateBestFit from "./GradutateBestFit/GraduateBestFit";
import PositionsSection1 from "./PositionsSection1/PositionsSection1";
import PositionsSection2 from "./PositionsSection2/PositionsSection2";
import HireCarousel from "./HireCarousel/HireCarousel";


const HireFromUs = () => {
  return (
    <div className="px-[20px] py-[30px] md:px-[65px] md:py-[70px] dark:text-white">
      <HireFromUsLanding />
      <HireTalentCard />
      <PositionsSection1 />
      <PositionsSection2 />
      <HireCarousel />

      {/* @sojib-sudo */}
      <StudentPlaced showHeading={false}/>
      <PerfectFit/>
      <GraduateBestFit/>
      
      {/* @sojib-sudo */}
    </div>
  );
};

export default HireFromUs;
