import React from "react";
import HireStudentCarousel from "./HireStudentCarousel/HireStudentCarousel";

function HireFromUsLanding() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 lg:gap-[10%] items-center">
      <div className="flex flex-col gap-10">
        <h1 className="text-[24px] md:text-[30px] lg:text-[48px] font-semibold capitalize text-center lg:text-left">
          Hire Tech <span className="text-[#37ED81]">Talent</span> That Delivers
        </h1>
        <p className="text-[14px] md:text-[18px] lg:text-[20px] font-normal lg:font-medium text-center lg:text-left">
          Effortlessly hire pre-vetted{" "}
          talent with Geeks of grukul.
          Are you ready to make your next remote hire?
        </p>
        <div className="flex lg:justify-normal justify-center">
          <button
            type="button"
            className="capitalize bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white py-2.5 px-6 rounded-full duration-200 lg:text-base text-sm"
          >
            Hire Talent
          </button>
        </div>
      </div>
      <div>
        <HireStudentCarousel />
      </div>
    </div>
  );
}

export default HireFromUsLanding;
