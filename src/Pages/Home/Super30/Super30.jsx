import React from "react";
import bg from "../../../assets/super-30-card/bg.svg";
const Super30 = () => {
  return (
    <div
      className='w-11/12 h-full mx-auto flex p-20'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2 className='text-[48px] font-semibold'>
          "Join our prestigious <span className='text-[#3DA5BD]'>Super 30</span>{" "}
          <br /> program!"
        </h2>
        <p className='text-[20px] font-normal'>
          "Discover New Possibilities, Resolve Queries, and Collaborate with Our
          Expert Team"
        </p>
      </div>
      <div className='grid items-center'>
        <button className='bg-[#00A3FF] px-[20px] py-[10px] rounded-[30px] text-white'>
          Super 30
        </button>
      </div>
    </div>
  );
};

export default Super30;
