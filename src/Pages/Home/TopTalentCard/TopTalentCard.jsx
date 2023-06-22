import React from "react";
import star from "../../../assets/someBG/star.svg";
import circle from "../../../assets/someBG/circle.svg";
import rectangle from "../../../assets/someBG/rectangle.svg";
import polygon from "../../../assets/someBG/polygon.svg";

function TopTalentCard() {
  return (
    <div className="relative rounded-3xl my-[70px] p-6 md:p-10 lg:p-16 text-[#101010] dark:text-white bg-white shadow-md shadow-[#19B85140] dark:bg-[#1C202A] dark:shadow-none">
      <img
        src={star}
        className="w-[20%] md:w-[15%] lg:w-[10%] absolute left-0 bottom-0"
      />
      <img
        src={rectangle}
        className="w-[20%] md:w-[15%] lg:w-[10%] absolute top-0 left-1/4"
      />
      <img
        src={polygon}
        className="w-[20%] md:w-[15%] lg:w-[10%] absolute bottom-0 right-1/4"
      />
      <img
        src={circle}
        className="w-[20%] md:w-[15%] lg:w-[10%] absolute top-0 right-0"
      />
      <div className="text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <div className="col-span-1 lg:col-span-10 z-10">
            <p className="text-xl md:text-4xl lg:text-5xl font-medium pb-6 md:pb-10 leading-relaxed">
              "Unlock Top Talent: Discover Your Perfect Learning Partner!"
            </p>
            <p className="w-full text-sm md:text-base">
              "Transform Your Passion into a Profession: Apply Now and Unleash
              Your Potential!"
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end w-full z-10">
            <button
              type="button"
              className="text-sm md:text-xl rounded-full bg-[#00A3FF] text-white py-2 px-4 w-full lg:w-auto hover:bg-gradient-to-r hover:from-[#00A3FF] hover:to-[#905BEC]"
            >
              Hire from us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTalentCard;
