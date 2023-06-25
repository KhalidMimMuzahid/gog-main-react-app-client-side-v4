import React from "react";

const Hero = () => {
  return (
    <div className='w-full mx-auto text-center'>
      <h1 className='text-[36px] md:text-[72px] font-semibold text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#4BA25D] via-[#3DA5BD] to-[#905BEC]'>
        Wall of Love
      </h1>
      <p className='text-[20px] dark:text-white font-normal'>
        Our extraordinary alumni can testify to the effectiveness of our mission
        in
      </p>
      <p className='text-[20px] dark:text-white font-normal'>
        achieving your success like no one else can.
      </p>
    </div>
  );
};

export default Hero;
