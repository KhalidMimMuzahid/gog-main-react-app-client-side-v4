import React from "react";
import rectangle from "../../../assets/someBG/rectangle.svg";
import polygon from "../../../assets/someBG/polygon.svg";
import bg from "../../../assets/super-30-card/bg.svg";

const Super30 = () => {
  return (
    <>
      <div className="relative rounded-3xl m-[30px] md:m-[65px] p-10 lg:p-16 text-[#101010] dark:text-white bg-white shadow-md shadow-[#19B85140] dark:bg-[#1C202A] dark:shadow-none">
        <img
          src={rectangle}
          className="w-[20%] md:w-[15%] lg:w-[10%] absolute top-0 left-1/4"
        />
        <img
          src={polygon}
          className="w-[20%] md:w-[15%] lg:w-[10%] absolute bottom-0 right-1/4"
        />
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
            <div className="col-span-1 lg:col-span-10 z-10">
              <p className="text-xl md:text-4xl lg:text-5xl font-medium pb-10 leading-relaxed">
                "Join our prestigious
                <span className="text-[#3DA5BD] leading-relaxed"> Super 30</span> program!"
              </p>
              <p className="w-full text-sm md:text-base">
                "Discover New Possibilities, Resolve Queries, and Collaborate
                with Our Expert Team"
              </p>
            </div>
            <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end w-full z-10">
              <button
                type="button"
                className="text-sm md:text-xl rounded-full bg-[#00A3FF] text-white py-2 px-4"
              >
                Super 30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Super30;
