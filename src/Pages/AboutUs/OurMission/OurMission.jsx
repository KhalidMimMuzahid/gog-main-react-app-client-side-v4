import React from "react";

const OurMission = () => {
  return (
    <div className="mx-[20px] md:w-[80%] md:mx-auto  mt-[64px] bg-[#E1FFE8] dark:bg-[#1A1B1F] rounded-[20px] pt-[40px]">
      <div className=" flex  justify-center">
        <h1 className="mb-[40px] font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
          Our Mission
        </h1>
      </div>
      <p className="px-[30px] text-justify text-[15px] md:twxt-[15px] dark:text-[white] text-[#101010] ">
        At our LMS, we are dedicated to breaking down barriers and making
        education accessible and affordable for everyone. Our mission is to
        truly democratize higher education, ensuring that individuals from all
        walks of life can access the knowledge and skills they need to thrive.
        We believe in assisting individuals in developing fulfilling careers by
        providing comprehensive learning opportunities that align with industry
        demands. Join us on this transformative journey and unlock a world of
        possibilities for your personal and professional growth.
      </p>

      <div className="flex justify-center py-[40px]">
        <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default OurMission;
