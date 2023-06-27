import React from "react";
import referral from "../../../assets/someBG/referral.svg";

const Referral = () => {
  return (
    <div className="mt-[64px] grid gap-[20px] items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-[40px] bg-[#E1FFE8] dark:bg-[#1A211F] rounded-[40px] ">
      <img src={referral} alt="refer hero img " />
      <div className="md:text-[30px]  text-[24px] font-[500] text-[#101010] dark:text-[white] ">
        <h6>You will be eligible for a <span className="text-[#4BA25D]">15% referral voucher</span> per successful referral.</h6>
      </div>
      <div className="flex md:justify-start justify-start lg:justify-center ">
        <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default Referral;
