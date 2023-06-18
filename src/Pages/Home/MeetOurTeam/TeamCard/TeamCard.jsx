import React from "react";

const TeamCard = ({ team }) => {
  const { img, name, designation, institute, icon, body } = team;

  return (
    <div className="mx-[20px] flex flex-col justify-between items-center bg-[#D1FFD0] w-[280px] h-[409px] rounded-[20px]">
      <div>
        <img src={img} alt="instractor image" />
      </div>
      <div className=" flex flex-col justify-between h-full  bg-[#E1FFE8] grow w-full px-[40px] pt-[20px] rounded-[20px]">
        <div>
          <h4 className=" font-[500] text-[24px] text-[#101010]">{name}</h4>
          <h6 className="mb-[20px] font-[400] text-[18px] text-[#19B851]">
            {designation}
          </h6>
        </div>
        <div className="pb-[22px]">
          <p className=" font-[400] text-[18px] text-[#101010]">
            {institute[0]}, <br /> {institute[1]}
          </p>
          <div className="pt-[8px] flex flex-row justify-between">
            <div>
              <img src={icon[0]} alt="IIT logo" />
            </div>
            <div>
              <img src={icon[1]} alt="Linkedin logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
