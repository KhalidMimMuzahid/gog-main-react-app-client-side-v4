import React from "react";
import refer from "../../../assets/Landing/referAndEarn.svg";
import { Link } from "react-router-dom";

function ReferAndEarnCard() {
  return (
    <div className="text-[#101010] dark:text-white my-20 md:my-32 bg-gradient-to-r from-[#E1FFE800] via-[#E1FFE8] to-[#E1FFE800] dark:from[#1A211F00] dark:via-[#1A211F] dark:to-[#1A211F00] p-8 md:p-12">
      <div className="flex justify-center gap-10 lg:gap-20 items-center flex-wrap">
        <img src={refer} alt="refer and earn" />
        <h1 className="text-[20px] lg:text-[30px] font-medium">
          You will be eligible for a{" "}
          <span className="text-[#37ED81]">
            <span className="text-[26px] lg:text-[36px] font-semibold">15%</span><br /> referral
            voucher
          </span>{" "}
          per successful referral.
        </h1>

        <Link to="/refer-earn" className="flex flex-grow md:flex-grow-0"><button
          type="button"
          className="capitalize bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white py-2.5 px-4 rounded-full duration-200 lg:text-base text-sm flex-grow md:flex-grow-0"
        >
          Refer Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ReferAndEarnCard;
