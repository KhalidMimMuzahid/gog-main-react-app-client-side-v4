import React from "react";

const CoursesPageHero = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2  gap-10 grid-cols-1 ">
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h5 className="md:text-[20] text-[24px] font-[500] bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
            Welcome to SCHOOL CHAMP
          </h5>
          <h4 className="mt-[24px] font-[500] dark:text-[white] text-[#101010] md:text-[36px] text-[24px]">
            Champs of Basic Coding
          </h4>
          <p className="my-[24px]  md:text-[20px]  text-[15px] text-[#101010] dark:text-[white] font-[400]">
            BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family
            of general-purpose, high-level programming languages designed for
            ease of use.Computer Programming Including Programming Concepts,
            Programming Languages.
          </p>
          <div className="flex md:justify-start justify-center	">
            <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mt-[24px] order-1 md:order-2 h-[360px] dark:text-[white] dark:bg-slate-900 bg-[#D1FFD0] rounded-[40px] py-[30px]  pl-[30px] flex items-center">
          Card Element - Champs of Basic Coding
        </div>
      </div>
    </div>
  );
};

export default CoursesPageHero;
