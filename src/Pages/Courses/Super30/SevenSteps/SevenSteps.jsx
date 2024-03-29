import React from 'react'
import apply from "../../../../assets/Seven Step/apply.svg";
import clock from "../../../../assets/Seven Step/Clock.svg";
import code from "../../../../assets/Seven Step/code.svg";
import job from "../../../../assets/Seven Step/Job.svg";
import fees from "../../../../assets/Seven Step/fees.svg";
import refund from "../../../../assets/Seven Step/refund.svg";
import super30 from "../../../../assets/Seven Step/super30.svg";
import selected from "../../../../assets/Seven Step/selected.svg";

const SevenSteps = () => {
  return (
      <div>
          <div className='my-[80px] col-span-full flex flex-col gap-[28px]'>
        <h2 className='text-center text-[25px] md:text-[45px] font-semibold dark:text-white'>
          Secure your Dream Job with these{" "}
          <span className='text-[#4BA25D]'>7 Simple Steps</span>
        </h2>
        <div className='w-fulll p-4 rounded-[40px] bg-[#E1FFE8] dark:bg-[#1C1F29] flex items-center justify-center gap-[30px]'>
          <img className='w-[30px]' src={clock} alt='' />
          <p className='text-[14px] md:text-[20px] font-medium dark:text-white'>
            Attend 5 Day Free Pre Course
          </p>
        </div>
        <div className='w-fulll p-4 rounded-[40px] bg-[#E1FFE8] dark:bg-[#1C1F29] flex items-center justify-center gap-[30px]'>
          <img className='w-[20px]' src={apply} alt='' />
          <p className='text-[14px] md:text-[20px] font-medium dark:text-white'>
            Apply for free Pre-course
          </p>
        </div>
        <div className='w-fulll p-4 rounded-[40px] bg-[#E1FFE8] dark:bg-[#1C1F29] flex items-center justify-center gap-[30px]'>
          <img className='w-[30px]' src={super30} alt='' />
          <p className='text-[14px] md:text-[20px] font-medium dark:text-white'>
            Clear Super 30 Job Entrance Exam
          </p>
        </div>
        <div className='w-fulll p-4 rounded-[40px] bg-[#E1FFE8] dark:bg-[#1C1F29] flex items-center justify-center gap-[30px]'>
          <img className='w-[30px]' src={selected} alt='' />
          <p className='text-[14px] md:text-[20px] font-medium dark:text-white'>
            Get Selected in Super 30
          </p>
        </div>
        <div className='w-fulll p-4 rounded-[40px] bg-[#E1FFE8] dark:bg-[#1C1F29] flex items-center justify-center gap-[30px]'>
          <img className='w-[30px]' src={fees} alt='' />
          <p className='text-[14px] md:text-[20px] font-medium dark:text-white'>
            Pay Fees
          </p>
        </div>
        <div className='w-fulll p-4 rounded-[40px] bg-[#E1FFE8] dark:bg-[#1C1F29] flex items-center justify-center gap-[30px]'>
          <img className='w-[30px]' src={code} alt='' />
          <p className='text-[14px] md:text-[20px] font-medium dark:text-white'>
            Months Coding Commando Training
          </p>
        </div>
        <div className='col-span-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 lg:gap-[120px]'>
          <button className='flex items-center justify-center gap-7 p-3  rounded-[40px] w-full bg-[#D1FFD0] text-[14px] md:text-[20px] font-medium dark:bg-[#1C1F29] dark:text-white'>
            <img className='w-[30px]' src={job} alt='' />
            <p>Get Placed</p>
          </button>
          <button className='flex items-center justify-center gap-7 p-3 rounded-[40px] w-full bg-[#D1FFD0] text-[14px] md:text-[20px] font-medium dark:bg-[#1C1F29] dark:text-white'>
            <img className='w-[30px]' src={refund} alt='' />
            <p>If not Placed,100% Fee Refund</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SevenSteps