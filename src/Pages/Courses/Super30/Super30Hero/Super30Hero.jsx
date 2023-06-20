import React from "react";
import heroBg from "../../../../assets/Super-30-Hero/hero-bg.svg";
import heroImg from "../../../../assets/Super-30-Hero/hero-image.svg";
function Super30Hero() {
  return (
    <div className='w-[90vw] mx-auto grid grid-cols-12'>
      <div className='col-span-full md:col-span-7'>
        <div className='font-medium text-[25px] md:text-[30px] dark:text-white'>
          <h2>
            Don't wait! Time is running out, so hurry up <br /> and seize this
            opportunity to accelerate <br /> your{" "}
            <span className='text-[#37ED81]'>learning journey!</span>
          </h2>
        </div>
        <div className='my-10'>
          <p className="text-transparent text-[20px] font-semibold bg-clip-text text-gradient bg-gradient-to-r from-[#4BA25D] via-[#3DA5BD] to-[#905BEC]">Enrollment for <span className="text-black text-[30px] dark:text-white">Super 30</span></p>
          <p className="text-[20px] font-medium dark:text-white">Job Guarantee Batch</p>
        </div>
        <div className='flex flex-col gap-10 md:flex-row items-center md:gap-14'>
          <button className="text-white px-8 py-4 bg-[#37ED81] rounded-[30px]">Full Stack Web Development</button>
          <button className="text-white px-8 py-4 bg-[#37ED81] rounded-[30px]">Full Stack Data Science</button>
        </div>
      </div>
      <div className='col-span-full md:col-span-5 w-full my-8'>
        <div className='w-full relative flex items-center justify-center'>
          <img className='w-full' src={heroBg} alt='hero-bg' />

          <img
            className='w-[60%] md:w-[75%%] absolute bottom-1'
            src={heroImg}
            alt='hero-image'
          />
        </div>
      </div>
      <div className="my-[80px] col-span-full">
        <h2 className="text-center text-[25px] md:text-[45px] font-semibold dark:text-white">Secure your Dream Job with these <span className="text-[#4BA25D]">7 Simple Steps</span></h2>
        <div className="w-fulll p-4 rounded-[40px] bg-[#E1FFE8] flex items-center justify-center"></div>
        <div className="w-fulll p-4 rounded-[40px] bg-[#E1FFE8] flex items-center justify-center"></div>
        <div className="w-fulll p-4 rounded-[40px] bg-[#E1FFE8] flex items-center justify-center"></div>
        <div className="w-fulll p-4 rounded-[40px] bg-[#E1FFE8] flex items-center justify-center"></div>
        <div className="w-fulll p-4 rounded-[40px] bg-[#E1FFE8] flex items-center justify-center"></div>
        <div className="w-fulll p-4 rounded-[40px] bg-[#E1FFE8] flex items-center justify-center"></div>
      </div>
    </div>
  );
}

export default Super30Hero;
