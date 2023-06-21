import React, { useState } from "react";

function Super30Batch() {
  const [showFSWD, setShowFWWD] = useState(true);

  return (
    <div className="mt-[80px]">
      <div className="flex flex-row gap-[4px] justify-center">
        <button
          onClick={() => setShowFWWD(true)}
          className={`w-full ${showFSWD ? "text-[#101010] dark:text-[white]" : "text-[#8A8F98] "}   md:font-[600] font-[400] md:text-[24px] text-[15px] dark:bg-slate-950  py-[20px] bg-[#D1FFD0] rounded-tr-none rounded-tl-[20px]`}
        >
          Full Stack Web Development
        </button>
        <button
          onClick={() => setShowFWWD(false)}
          className={`w-full ${!showFSWD ? "text-[#101010] dark:text-[white]" : "text-[#8A8F98]"}   md:font-[600] font-[400] md:text-[24px] text-[15px] dark:bg-slate-950  py-[20px] bg-[#D1FFD0] rounded-tl-none rounded-tr-[20px]`}
        >
          Full Stack Data Scientist
        </button>
      </div>

      {showFSWD && (
        <div className="grid md:grid-cols-2  gap-10 grid-cols-1 ">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <p className="my-[24px]  md:text-[20px]  text-[15px] text-[#101010] dark:text-[white] font-[400]">
              A Full Stack Web Development Program is a comprehensive training
              program that covers all the essential skills and knowledge
              required for a web developer to work effectively in a modern web
              development organization. It typically includes training in both
              front-end and back-end web development. Front-end web development
              involves creating the user-
            </p>
            <div className="flex md:justify-start justify-center	">
              <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
                Apply for free Pre-course
              </button>
            </div>
          </div>
          <div className="mt-[24px] order-1 md:order-2 h-[360px] dark:text-[white] dark:bg-slate-900 bg-[#D1FFD0] rounded-[40px] py-[30px]  pl-[30px] flex items-center">
            Card Element - Full Stack Web Development
          </div>
        </div>
      )}


      {/* start full stack data Science  */}

      {!showFSWD && (
        <div className="grid md:grid-cols-2  gap-10 grid-cols-1 ">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <p className="my-[24px]  md:text-[20px]  text-[15px] text-[#101010] dark:text-[white] font-[400]">
            A Full Stack Data Science Program is a comprehensive training program that covers all the essential skills and knowledge required for a data scientist to work effectively in a modern data-driven organization. It typically includes training in programming, statistics, data visualization, data engineering, machine learning, and deep learning. 
            </p>
            <div className="flex md:justify-start justify-center	">
              <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
                Apply for free Pre-course
              </button>
            </div>
          </div>
          <div className="mt-[24px] order-1 md:order-2 h-[360px] dark:text-[white] dark:bg-slate-900 bg-[#D1FFD0] rounded-[40px] py-[30px]  pl-[30px] flex items-center">
            Card Element - Full Stack Data Science
          </div>
        </div>
      )}


    </div>
  );
}

export default Super30Batch;
