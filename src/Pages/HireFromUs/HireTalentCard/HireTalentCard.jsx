import React from "react";
import companyLogoGroup from "../../../assets/HireFromUs/companyLogoGroup.svg";

function HireTalentCard() {
  return (
    <div className="p-[20px] sm:p-[30px] md:p-[40px] bg-gradient-to-r from-[#D1FFD0] to-[#BBE7FF] text-[#101010] mt-[80px] rounded-3xl text-center md:text-left">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="lg:text-[36px] text-[24px] font-medium">
            Take your business to new heights with high-demand tech skills
          </h1>
          <p className="text-[14px] md:text-[18px]">
            We match high qualified talent based on the skills you are looking
            for.
          </p>
          <div className="flex md:justify-normal justify-center">
            <button
              type="button"
              className="capitalize bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white py-2.5 px-6 rounded-full duration-200 lg:text-base text-sm"
            >
              Hire Talent
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
            <img src={companyLogoGroup} alt="company logos" />
        </div>
      </div>
    </div>
  );
}

export default HireTalentCard;
