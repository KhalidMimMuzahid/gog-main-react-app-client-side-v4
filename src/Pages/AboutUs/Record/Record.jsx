import React from "react";

const Record = () => {
  return (
    <div className="mt-[117px] rounded-[20px] md:w-[80%] mx-auto bg-[#FFF] dark:bg-[#2E3934] p-[40px]">
      <div className="flex justify-items-center justify-evenly gap-5 text-center">
        <div className="flex flex-col justify-evenly items-center justify-items-center">
          <h1 className="text-[#4BA25D] lg:text-[36px] md:text-[24px] text-[15px] font-[600]">
            2021
          </h1>
          <p className="text-[#4BA25D] lg:text-[16px] md:text-[15px] text-[12px] ">
            YEAR FOUNDED
          </p>
        </div>
        <div className="flex flex-col justify-evenly items-center justify-items-center">
          <h1 className="text-[#4BA25D] lg:text-[36px] md:text-[24px] text-[15px] font-[600]">
            200+
          </h1>
          <p className="text-[#4BA25D] lg:text-[16px] md:text-[15px] text-[12px] ">
            STUDENT ENROLLED
          </p>
        </div>
        <div className="flex flex-col justify-evenly items-center justify-items-center">
          <h1 className="text-[#4BA25D] lg:text-[36px] md:text-[24px] text-[15px] font-[600]">
            96%
          </h1>
          <p className="text-[#4BA25D] lg:text-[16px] md:text-[15px] text-[12px] ">
            PLACEMENT RATE
          </p>
        </div>
        <div className="flex flex-col justify-evenly items-center justify-items-center">
          <h1 className="text-[#4BA25D] lg:text-[36px] md:text-[24px] text-[15px] font-[600]">
            50+
          </h1>
          <p className="text-[#4BA25D] lg:text-[16px] md:text-[15px] text-[12px]">
            HIRING PARTNERS
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" my-[32px] md:w-[80%] w-[100%] border border-green-400 border-opacity-75"></div>
      </div>
      <p className="text-[#4BA25D]  text-center lg:text-[16px] text-[15px]">
        ADDRESS
      </p>
      {/* <p className='text-[#4BA25D]  text-center lg:text-[16px] text-[15px]'>394/1,1st B Cross Road,7th Block,Koramangla,Bengaluru-560030</p> */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=394/1,1st+B+Cross+Road,7th+Block,Koramangla,Bengaluru-560030"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-[#4BA25D] text-center lg:text-[16px] text-[15px]">
          394/1, 1st B Cross Road, 7th Block, Koramangla, Bengaluru-560030
        </p>
      </a>
    </div>
  );
};

export default Record;
