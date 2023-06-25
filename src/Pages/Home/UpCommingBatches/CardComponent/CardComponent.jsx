import React from "react";
import hourGlass from "../../../../assets/icons/Duration.svg";
import Clock from "../../../../assets/icons/Clock.svg";
import Graduation from "../../../../assets/icons/Graduation cap.svg";
import prduct from "../../../../assets/icons/User Trusted Product.svg";
import style from "./cardComponent.module.css";

function CardComponent({ info }) {
  return (
    <div className={`${style.border_gradient} rounded-2xl flex`}>
      <div className="flex flex-col items-start w-full bg-[#D1FFD0] rounded-2xl text-[#101010] dark:text-white dark:bg-gradient-to-br from-[#222C26] to-[#121313]">
        <div className="md:p-[40px] p-[30px]">
          <div className="flex justify-between items-center gap-5 flex-wrap">
            <div className="text-xl md:text-2xl font-semibold">
              <h4>{info?.heading}</h4>
            </div>
            <h4 className="rounded-full px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500  text-[16px] font-[400] text-[#FFFFFF] text-center text-sm md:text-base">
              {info?.pricing}
            </h4>
          </div>
          <div className="mt-[32px]">
            <p className="text-sm md:text-base font-normal font-poppins leading-6 tracking-normal text-justify dark:text-[#8A8F98]">
              {info?.desc}{" "}
            </p>
          </div>
          <div className="mt-[32px]">
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <div className="flex items-center gap-6">
                <img src={hourGlass} alt="Hour glass image" />
                <p className="flex gap-3 md:gap-10">
                  <span>Class Timings</span>-<span>{info?.timing}</span>
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img src={Clock} alt="clock image" />
                <p className="flex gap-3 md:gap-10">
                  <span className="relative">
                    <span className="invisible">Class Timings</span>
                    <span className="absolute left-0">Duration</span>
                  </span>
                  -<span>{info?.duration}</span>
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img src={Graduation} alt="Hour glass image" />
                <p className="flex gap-3 md:gap-10 items-center">
                  <span className="relative">
                    <span className="invisible hidden sm:inline-block">
                      Class Timings
                    </span>
                    <span className="sm:absolute left-0">Eligibility</span>
                  </span>
                  -<span>{info?.eligibility}</span>
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img src={prduct} alt="Hour glass image" />
                <p className="flex gap-3 md:gap-10">
                  Guided by a team of individuals from the IITians
                </p>
              </div>
            </div>
          </div>
          <div className="my-[32px]  border border-green-400 border-opacity-75"></div>

          <div className="flex justify-between text-sm md:text-base flex-wrap gap-5">
            <div className="flex gap-5">
              <img src={Clock} alt="clock image" />
              <div>
                <p className="text-[#101010] dark:text-white">Hurry up</p>{" "}
                <p className="text-[#4BA25D] font-medium">Limited Seat</p>
              </div>
            </div>
            <div className="flex w-full md:w-auto justify-center gap-5">
              <div className="">
                <div className="hover:bg-gradient-to-r hover:from-[#00a3ff] hover:to-[#905bec] lg:pt-[1.7px] pt-[1.5px] pb-[1.5px] pl-[1.5px] pr-[1.5px] xl:pr-[1.7px] rounded-full dark:[&>a]:border-white [&>button]:hover:border-[hsl(60,100%,3%)]">
                  <button
                    type="button"
                    className="py-2 px-4 border dark:border-white border-black rounded-full bg-[#D1FFD0] dark:bg-[#121313]"
                  >
                    Know More
                  </button>
                </div>
              </div>
              <div className="float-right">
                <button
                  type="button"
                  className="py-2 px-4 border border-[#00A3FF] rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
