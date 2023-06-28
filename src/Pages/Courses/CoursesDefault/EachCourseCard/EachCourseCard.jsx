import React from "react";
import { BsClipboard2, BsClock, BsLaptop, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

function EachCourseCard({ item }) {
  return (
    <div className="rounded-[20px] hover:bg-gradient-to-br from-[#37ED81] to-[#00A3FF] p-0.5">
      <div className="rounded-[20px] bg-[#F8FFF9] dark:bg-[#22362A] shadow-lg dark:shadow-none">
        <div className="max-w-[470px]">
          <img src={item?.image} className="w-full rounded-t-[20px]" />
          <div className="p-7 md:p-10">
            <h1 className="text-[20px] md:text-[24px] mb-5 font-medium">
              {item?.title}
            </h1>
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
              <s className="text-[14px] md:text-[18px] text-[#8A8F98] ml-3">
                {item?.prevPrice}
              </s>
            </h1>
            <div className="flex justify-between items-center mt-7 gap-5">
              <Link to="/courses/champs-of-basic-coding" className="flex-grow">
                <div className="hover:bg-gradient-to-r hover:from-[#00a3ff] hover:to-[#905bec] lg:pt-[1.7px] pt-[1.5px] p-[1.5px] xl:px-[1.7px] rounded-full [&>div]:hover:border-[#F8FFF900] w-full">
                  <div className="py-2 px-4 border dark:border-white border-black rounded-full bg-[#F8FFF9] dark:bg-[#22362A] text-center">
                    Know More
                  </div>
                </div>
              </Link>
              <Link
                to="/courses/champs-of-basic-coding"
                className="py-2 px-4 border border-[#00A3FF] hover:border-[#00A3FF00] rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white flex-grow text-sm md:text-base text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachCourseCard;
