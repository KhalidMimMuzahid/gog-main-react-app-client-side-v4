import React from "react";
import hourGlass from "../../../../assets/icons/Duration.svg";
import Clock from "../../../../assets/icons/Clock.svg";
import Graduation from "../../../../assets/icons/Graduation cap.svg";
import prduct from "../../../../assets/icons/User Trusted Product.svg";

const SchoolChamp = () => {
  return (
    <div className="mt-[120px]">
      <h2 className="text-[36px] font-[700] text-center	text-transparent bg-clip-text text-gradient bg-gradient-to-r from-green-500 to-blue-500">
        UPCOMING <span className="text-[#4BA25D]">SCHOOL CHAMP</span> BATCHES
      </h2>
      <p className="text-center leading-27 text-[18px] font-[500]">
        We have courses for students from class 6th to 12th where they will
        learn to code in flexible time.
      </p>
      <div className="px-[65px] grid grid-cols-1 md:grid-cols-2 gap-10 mt-[80px]">
        <div className="flex flex-col items-start   w-625  bg-green-200 rounded-2xl">
          <div className="p-[40px]">
            <div className="grid grid-cols-4  content-evenly content-between">
              <div className="text-[24px]  col-span-3 font-[600] text-gray-900">
                <h4>Champs of Basic Coding</h4>
              </div>
              <div className="">
                <h4 className=" float-right h-29 w-120 left-425 top-7 rounded-[16px] p-1 bg-gradient-to-r from-green-500 to-blue-500  text-[16px] font-[400] text-[#FFFFFF] text-center">
                  ₹ 1199/month
                </h4>
              </div>
            </div>
            <div className="mt-[32px]">
                <p className="text-md font-normal font-poppins text-base leading-6 tracking-normal text-justify">BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use.Computer Programming Including Programming Concepts, Programming Languages.</p>
            </div>
            <div className="mt-[32px]">
                <div className="flex flex-col">
                    <div className="flex items-center gap-[25px]">
                        <img  src={hourGlass} alt="Hour glass image" />
                        <p className="flex gap-10"><span>Class Timings</span> <span>-</span> <span>Flexible time</span></p>
                    </div>
                    <div className="flex items-center gap-[25px]">
                        <img  src={Clock} alt="clock image" />
                        <p className="flex gap-10"><span>Duration</span> <span className="pl-[42px]" >-</span> <span>24 weeks</span></p>
                    </div>
                    <div className="flex items-center gap-[25px]">
                        <img src={Graduation} alt="Hour glass image" />
                        <p className="flex gap-10"><span>Eligibility</span> <span className="pl-[42px]">-</span> <span>School Students</span></p>
                    </div>
                    <div className="flex items-center gap-[25px]">
                        <img src={prduct} alt="Hour glass image" />
                        <p className="flex gap-10">Guided by a team of individuals from the IITians</p>
                    </div>
                </div>
            </div>
            <div className="my-[32px]">
              <hr className="bg-green-500 border-2 text-green-500 divide-green-500" />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-10">
                <img  src={Clock} alt="clock image" />
                <div><p className="text-[#101010] font-[400] text-[18px]">Hurry up</p> <p className="text-[#4BA25D] font-[600] text-[18px]">Limited Seat</p></div>
              </div>
              <div className="flex gap-5 ">
                <div className="float-right"><button className="btn btn-outline rounded-full text-[16px] font-[500] eading-[24px]">Know More</button></div>
                <div className="float-right"><button className="btn btn-info rounded-full text-[white] text-[16px] font-[500] eading-[24px]">Know More</button></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start   w-625  bg-green-200 rounded-2xl">
          <div className="p-[40px]">
            <div className="grid grid-cols-4  content-evenly content-between">
              <div className="text-[24px]  col-span-3 font-[600] text-gray-900">
                <h4>Champs of Advance Coding</h4>
              </div>
              <div className="">
                <h4 className=" float-right h-29 w-120 left-425 top-7 rounded-[16px] p-1 bg-gradient-to-r from-green-500 to-blue-500  text-[16px] font-[400] text-[#FFFFFF] text-center">
                  ₹ 1199/month
                </h4>
              </div>
            </div>
            <div className="mt-[32px]">
                <p className="text-md font-normal font-poppins text-base leading-6 tracking-normal text-justify">Students learn the fundamentals of programming through creating interactive stories, designing animations, & creating advance-games,mobile apps.Computer Programming Including Programming Concepts, Programming Languages.</p>
            </div>
            <div className="mt-[32px]">
                <div className="flex flex-col">
                    <div className="flex items-center gap-[25px]">
                        <img  src={hourGlass} alt="Hour glass image" />
                        <p className="flex gap-10"><span>Class Timings</span> <span>-</span> <span>Flexible time</span></p>
                    </div>
                    <div className="flex items-center gap-[25px]">
                        <img  src={Clock} alt="clock image" />
                        <p className="flex gap-10"><span>Duration</span> <span className="pl-[42px]" >-</span> <span>24 weeks</span></p>
                    </div>
                    <div className="flex items-center gap-[25px]">
                        <img src={Graduation} alt="Hour glass image" />
                        <p className="flex gap-10"><span>Eligibility</span> <span className="pl-[42px]">-</span> <span>School Students</span></p>
                    </div>
                    <div className="flex items-center gap-[25px]">
                        <img src={prduct} alt="Hour glass image" />
                        <p className="flex gap-10">Guided by a team of individuals from the IITians</p>
                    </div>
                </div>
            </div>
            <div className="my-[32px]">
              <hr className="bg-green-500 border-2 text-green-500 divide-green-500" />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-10">
                <img  src={Clock} alt="clock image" />
                <div><p className="text-[#101010] font-[400] text-[18px]">Hurry up</p> <p className="text-[#4BA25D] font-[600] text-[18px]">Limited Seat</p></div>
              </div>
              <div className="flex gap-5 ">
                <div className="float-right"><button className="btn btn-outline rounded-full text-[16px] font-[500] eading-[24px]">Know More</button></div>
                <div className="float-right"><button className="btn btn-info rounded-full text-[white] text-[16px] font-[500] eading-[24px]">Know More</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolChamp;
