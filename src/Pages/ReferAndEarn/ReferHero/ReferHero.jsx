import React from "react";
import referHeroImg from "../../../assets/someBG/referHeroImg.svg";
//referHeroImg.svg

const ReferHero = () => {
  return (
    <div className="mt-[64px] grid items-center justify-items-end grid-cols-1 md:grid-cols-2 p-[40px] bg-[#E1FFE8] dark:bg-[#1A211F] rounded-[40px] ">
      <div>
        <div className="lg:text-[48px] md:text-[30px] text-[24px] font-[600] text-[#101010] dark:text-[white] ">
          <span className="text-[#4BA25D]">"</span>Unlock{" "}
          <span className="text-[#37ED81]">Rewards</span> and Spread Knowledge
          <span className="text-[#4BA25D]">"</span> <br />
          <span className="lg:text-[24px] md:text-[18px] text-[15px] font-[500]">
            Join Our <span className="text-[#37ED81]">Referral</span> Program
            Today!
          </span>
        </div>
        <div className="flex md:justify-start justify-center pt-[40px]">
          <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
            Refer Now
          </button>
        </div>
      </div>
      <img src={referHeroImg} alt="refer hero img " />
    </div>
  );
};

export default ReferHero;
