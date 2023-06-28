import React from "react";

const JobRole = () => {
  return (
    <div className='my-5 md:my-10 p-5 md:p-10'>
      <h3 className='font-medium text-center md:text-left dark:text-white'>
        <span className='text-[25px] md:text-[30px] text-[#37ED81]'>
          Job role
        </span>{" "}
        (Upon completion)
      </h3>
      <div className='my-5 md:my-10 flex flex-col items-center gap-3 md:gap-6 font-normal text-sm'>
        <div className="w-full flex gap-3 md:gap-6">
        <button className='w-full dark:text-white px-3 md:px-6 py-1.5 md:py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>
          MERN stack Developer
        </button>
        <button className='w-full dark:text-white px-3 md:px-6 py-1.5 md:py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>
          Full stack Developer
        </button>
        </div>
        <div className="w-full flex gap-3 md:gap-6">
        <button className='w-full dark:text-white px-3 md:px-6 py-1.5 md:py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>
          Backend Developer
        </button>
        <button className='w-full dark:text-white px-3 md:px-6 py-1.5 md:py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>
          Frontend Developer
        </button>
        </div>
        <button className='w-full dark:text-white px-3 md:px-6 py-1.5 md:py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>
          React Developer
        </button>
      </div>
    </div>
  );
};

export default JobRole;
