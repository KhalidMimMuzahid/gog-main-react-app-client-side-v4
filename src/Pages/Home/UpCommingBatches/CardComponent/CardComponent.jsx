import React from "react";
import hourGlass from "../../../../assets/icons/Duration.svg";
import Clock from "../../../../assets/icons/Clock.svg";
import Graduation from "../../../../assets/icons/Graduation cap.svg";
import prduct from "../../../../assets/icons/User Trusted Product.svg";

function CardComponent({info}) {
  return (
    <div className="flex flex-col items-start w-full bg-[#D1FFD0] rounded-2xl text-[#101010] dark:text-white dark:bg-gradient-to-br from-[#222C26] to-[#121313]">
      <div className="p-[40px]">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-2xl font-semibold">
            <h4>{info?.heading}</h4>
          </div>
          <h4 className="rounded-full px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500  text-[16px] font-[400] text-[#FFFFFF] text-center">
            {info?.pricing}
          </h4>
        </div>
        <div className="mt-[32px]">
          <p className="text-md font-normal font-poppins text-base leading-6 tracking-normal text-justify dark:text-[#8A8F98]">
            {info?.desc}{" "}
          </p>
        </div>
        <div className="mt-[32px]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <img src={hourGlass} alt="Hour glass image" />
              <p className="flex gap-10">
                <span>Class Timings</span> -<span>{info?.timing}</span>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img src={Clock} alt="clock image" />
              <p className="flex gap-10">
                <span className="relative">
                  <span className="invisible">
                    Class Timings
                  </span>
                  <span className="absolute left-0">Duration</span>
                </span>{" "}
                -<span>{info?.duration}</span>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img src={Graduation} alt="Hour glass image" />
              <p className="flex gap-10">
              <span className="relative">
                  <span className="invisible">
                    Class Timings
                  </span>
                  <span className="absolute left-0">Eligibility</span>
                </span>{" "} -<span>{info?.eligibility}</span>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img src={prduct} alt="Hour glass image" />
              <p className="flex gap-10">
                Guided by a team of individuals from the IITians
              </p>
            </div>
          </div>
        </div>
        <div className="my-[32px]  border border-green-400 border-opacity-75"></div>

        <div className="flex justify-between">
          <div className="flex gap-10">
            <img src={Clock} alt="clock image" />
            <div>
              <p className="text-[#101010] dark:text-white text-[18px]">Hurry up</p>{" "}
              <p className="text-[#4BA25D] font-medium text-[18px]">
                Limited Seat
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="">
              <button type="button" className="py-2 px-4 border border-[#101010] dark:border-white rounded-full">
                Know More
              </button>
            </div>
            <div className="float-right">
              <button type="button" className="py-2 px-4 border border-[#00A3FF] rounded-full bg-[#00A3FF] text-white">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
