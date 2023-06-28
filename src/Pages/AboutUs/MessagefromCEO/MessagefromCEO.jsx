import React, { useContext } from "react";
import bgLight from "../../../assets/AboutUs/bgLight.svg";
import bgDark from "../../../assets/AboutUs/bgDark2.svg";
import { UIContext } from "../../../contexts/UIProvider/UIProvider";

const OurMission = () => {
  const { theme } = useContext(UIContext);
  const backgroundImage =
    theme === "dark" ? `url(${bgDark})` : `url(${bgLight})`;

  return (
    <div className="relative mx-[20px] md:w-[80%] md:mx-auto mt-[64px] bg-[#D1FFD0] dark:bg-[#1A1B1F] rounded-[20px] overflow-hidden">
      <div
        className="h-full w-full absolute z-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage }}
      >
      </div>
      <div className="relative z-20  pt-[40px]">
        <div className=" flex  justify-center">
          <h1 className="mb-[40px] font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
            Message from CEO
          </h1>
        </div>
        <p className="px-[30px] text-justify text-[15px] md:twxt-[15px] dark:text-[white] text-[#101010] ">
          At our LMS, we are dedicated to breaking down barriers and making
          education accessible and affordable for everyone. Our mission is to
          truly democratize higher education, ensuring that individuals from all
          walks of life can access the knowledge and skills they need to thrive.
          We believe in assisting individuals in developing fulfilling careers
          by providing comprehensive learning opportunities that align with
          industry demands. Join us on this transformative journey and unlock a
          world of possibilities for your personal and professional growth.
        </p>

        <div className="flex justify-center py-[40px]">
          <button className=" bg-[#00A3FF]  rounded-[20px] py-[8px] px-[16px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
