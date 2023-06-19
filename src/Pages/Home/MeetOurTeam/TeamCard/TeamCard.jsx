import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamCard = ({ team }) => {
  const { img, name, designation, institute, icon, body } = team;

  const [displayblock, setDisplayBlock] = useState(false);
  

  return (
    <div onMouseEnter={() => setDisplayBlock(true)} onMouseLeave={() => setDisplayBlock(false)} className="relative overflow-hidden md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]">
      <div>
        <img className="" src={img} alt="instractor image" />
      </div>
      <motion.div animate={{y: `${displayblock ?  '0%' : '100%'}`}} className="bg-gradient-to-b dark:bg-gradient-to-b dark:from-[#B4F6B300] from-[#B4F6B300] dark:to-[#1C202A] to-[#A8F2A7] absolute  bottom-0 rounded-[20px] ">
        { displayblock===true && <p className="m-[20px]  md:text-[16px] text-[12px] text-[#101010] font-[400] dark:text-[White] ">{body}</p>}
      </motion.div>
      {displayblock===false && <div className=" flex flex-col justify-between h-full dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
        <div>
          <h4 className=" font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">{name}</h4>
          <h6 className="md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]">
            {designation}
          </h6>
        </div>
        <div className="pb-[22px]">
          <p className=" font-[400] md:text-[18px] text-[12px] dark:text-[White] text-[#101010]">
            {institute[0]}, <br /> {institute[1]}
          </p>
          <div className=" pt-[8px] flex flex-row justify-between">
            <div>
              <img src={icon[0]} alt="IIT logo" />
            </div>
            <div >
              <img className="dark:bg-white" src={icon[1]} alt="Linkedin logo" />
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default TeamCard;
