import React from "react";
import mission from "../../../assets/someBG/mission.svg";

const OurCalture = () => {
  return (
    <div className="mx-[20px] md:w-[80%] md:mx-auto  mt-[64px] ">
      <div className=" grid md:grid-cols-2 grid-cols-1 md:justify-items-end justify-items-center  items-center">
        <div>
          <div className=" flex  md:justify-start justify-center">
            <h1 className="my-[40px]   font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
              Our Calture
            </h1>
          </div>
          <p className="mb-[40px] dark:text-[white] text-justify">
            Our commitment is to make education accessible and affordable to
            all. Geeks of Gurukul has been founded with a mission to solve the
            problem of learning outcomes. We encourage a culture of creativity,
            collaboration and continuous learning, and empower our talented team
            to develop solutions for future-oriented growth. We constantly push
            the boundaries of the possible. Thus, exploring emerging
            technologies and looking forward to future trends.
          </p>
          <div className="flex justify-center pb-[40px] md:justify-start">
            <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
              Join Us
            </button>
          </div>
        </div>

        <div>
          <img src={mission} alt="Mission image" />
        </div>
      </div>
    </div>
  );
};

export default OurCalture;
