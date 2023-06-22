import React from "react";
import { BsClipboard2, BsClock, BsLaptop, BsStarHalf } from "react-icons/bs";

function EachCourseCard({ item }) {
  return (
    <div className="rounded-[40px] bg-[#D1FFD0] dark:bg-[#22362A] from-[#D1FFD0] to-[#BBE7FF] shadow-md dark:shadow-none">
      <div className="max-w-[470px]">
        <img src={item?.image} className="w-full rounded-t-[40px]" />
        <div className="p-7 md:p-10">
          <h1 className="text-[20px] md:text-[24px] mb-5 font-medium">{item?.title}</h1>
          <div className="flex justify-between w-full gap-3">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-3">
                <BsClock className="text-[#37ED81] text-xl md:text-2xl" />
                <p className="text-sm md:text-base">{item?.time}</p>
              </div>
              <div className="flex items-center gap-3">
                <BsLaptop className="text-[#37ED81] text-xl md:text-2xl" />
                <p className="text-sm md:text-base">{item?.projects}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-3">
                <BsClipboard2 className="text-[#37ED81] text-xl md:text-2xl" />
                <p className="text-sm md:text-base">{item?.assignments}</p>
              </div>
              <div className="flex items-center gap-3">
                <BsStarHalf className="text-[#37ED81] text-xl md:text-2xl" />
                <p className="text-sm md:text-base">{item?.rating}</p>
              </div>
            </div>
          </div>
          <h1 className="mt-8 text-[20px] md:text-[24px] font-medium">
            {item?.price}{" "}
            <s className="text-[14px] md:text-[18px] text-[#8A8F98] ml-3">{item?.prevPrice}</s>
          </h1>
          <div className="flex justify-between items-center mt-7 gap-5">
            <button
              type="button"
              className="py-2 px-4 border border-[#101010] hover:border-2 dark:border-white rounded-full flex-grow text-sm md:text-base"
            >
              Know More
            </button>
            <button
              type="button"
              className="py-2 px-4 border border-[#00A3FF] rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white flex-grow text-sm md:text-base"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachCourseCard;
