import React from "react";
import { BsClipboard2, BsClock, BsLaptop, BsStarHalf } from "react-icons/bs";

function EachCourseCard({ item }) {
  return (
    <div className="rounded-xl dark:bg-[#22362A]">
      <div className="max-w-[470px]">
        <img src={item?.image} className="w-full rounded-t-xl" />
        <div className="p-10">
          <h1 className="text-[24px] mb-5">{item?.title}</h1>
          <div className="flex flex-wrap justify-between gap-5 w-full">
            <div className="flex items-center gap-3">
              <BsClock className="text-[#37ED81] text-2xl" />
              <p>{item?.time}</p>
            </div>
            <div className="flex items-center gap-3">
              <BsLaptop className="text-[#37ED81] text-2xl" />
              <p>{item?.time}</p>
            </div>
            <div className="flex items-center gap-3">
              <BsClipboard2 className="text-[#37ED81] text-2xl" />
              <p>{item?.time}</p>
            </div>
            <div className="flex items-center gap-3">
              <BsStarHalf className="text-[#37ED81] text-2xl" />
              <p>{item?.time}</p>
            </div>
          </div>
          <h1 className="mt-8 text-[24px]">
            {item?.price}{" "}
            <s className="text-[18px] text-[#8A8F98] ml-3">{item?.prevPrice}</s>
          </h1>
          <div className="flex justify-between items-center mt-7 gap-5">
            <button
              type="button"
              className="py-2 px-4 border border-[#101010] hover:border-2 dark:border-white rounded-full flex-grow"
            >
              Know More
            </button>
            <button
              type="button"
              className="py-2 px-4 border border-[#00A3FF] rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white flex-grow"
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
