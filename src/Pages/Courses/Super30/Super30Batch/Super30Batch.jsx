import React from "react";

function Super30Batch() {

  

  return (
    <div className="mt-[80px]">
      <div className="grid md:grid-cols-2  gap-10 grid-cols-1">
        <div className="order-2 md:order-1 ">
          <h6 className=" text-[20px] font-[500] text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
            Welcome to Super 30
          </h6>
          <h2 className="my-[24px] font-[500] md:text-[36px] text-[25px] text-[#37ED81] md:text-left text-center ">
            Full Stack Web Development
          </h2>
          <p className="mb-[24px] md:text-[20px]  text-[15px] text-[#101010] dark:text-[white] font-[400]">A Full Stack Web Development Program is a comprehensive training program that covers all the essential skills and knowledge required for a web developer to work effectively in a modern web development organization. It typically includes training in both front-end and back-end web development. Front-end web development involves creating the user-</p>
          <div className="flex md:justify-start justify-center	"> 
          <button  className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">Apply for free Pre-course</button>
          </div>


        </div>
        <div className="order-1 md:order-2 h-[360px] bg-[#D1FFD0] rounded-[40px] py-[30px]  pl-[30px] ">
          Card Element
        </div>
      </div>
    </div>
  );
}

export default Super30Batch;
