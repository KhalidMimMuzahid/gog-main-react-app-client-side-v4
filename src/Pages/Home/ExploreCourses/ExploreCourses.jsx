import React from "react";
import star from "../../../assets/someBG/star.svg";
import circle from "../../../assets/someBG/circle.svg";
import rectangle from "../../../assets/someBG/rectangle.svg";
import polygon from "../../../assets/someBG/polygon.svg";

const ExploreCourses = ({ info }) => {
  return (
    <div className="relative rounded-3xl m-[65px] p-16 text-[#101010] dark:text-white bg-white shadow-md shadow-[#19B85140] dark:bg-[#1C202A] dark:shadow-none">
      <img src={star} className="absolute left-0 bottom-0" />
      <img src={rectangle} className="absolute top-0 left-1/4" />
      <img src={polygon} className="absolute bottom-0 right-1/4" />
      <img src={circle} className="absolute top-0 right-0" />
      <div className="relative z-10">
        <div className="w-full grid grid-cols-12 items-center gap-10 flex-wrap">
          <div className="col-span-12 lg:col-span-10">
            <p className="text-5xl font-semibold pb-10 leading-relaxed">
              "Explore Our Diverse Range of{" "}
              <span className="text-[#905BEC]">Courses</span>!"
            </p>
            <p>
              "Expand Your Horizons, Acquire In-Demand Skills, and Shape Your
              Future Today!"
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 flex justify-center lg:justify-end">
            <button
              type="button"
              className="text-xl rounded-full bg-[#00A3FF] text-white py-2 px-4"
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
