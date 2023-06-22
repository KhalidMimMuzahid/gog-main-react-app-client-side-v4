import React from "react";
import star from "../../../assets/someBG/star.svg";
import circle from "../../../assets/someBG/circle.svg";
import rectangle from "../../../assets/someBG/rectangle.svg";
import polygon from "../../../assets/someBG/polygon.svg";

const ExploreCourses = ({ info }) => {
  return (
    <div className="relative rounded-3xl my-[70px] md:my-[65px] p-6 md:p-10 lg:p-16 text-[#101010] dark:text-white bg-white shadow-md shadow-[#19B85140] dark:bg-[#1C202A] dark:shadow-none">
      <img src={star} className="w-[20%] md:w-[15%] lg:w-[10%] absolute left-0 bottom-0" />
      <img src={rectangle} className="w-[20%] md:w-[15%] lg:w-[10%] absolute top-0 left-1/4" />
      <img src={polygon} className="w-[20%] md:w-[15%] lg:w-[10%] absolute bottom-0 right-1/4" />
      <img src={circle} className="w-[20%] md:w-[15%] lg:w-[10%] absolute top-0 right-0" />
      <div className="text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <div className="col-span-1 lg:col-span-10 z-10">
            <p className="text-[20px] md:text-[36px] lg:text-[48px] font-medium pb-6 md:pb-10">
              "Explore Our Diverse Range of{" "}
              <span className="text-[#905BEC] leading-relaxed">Courses</span>!"
            </p>
            <p className="w-full text-sm md:text-base">
              "Expand Your Horizons, Acquire In-Demand Skills, and Shape Your
              Future Today!"
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end w-full z-10">
            <button
              type="button"
              className="text-sm md:text-xl rounded-full bg-[#00A3FF] text-white py-2 px-4 w-full lg:w-auto hover:bg-gradient-to-r hover:from-[#00A3FF] hover:to-[#905BEC]"
            >
              Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
