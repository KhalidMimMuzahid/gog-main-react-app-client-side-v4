import React from "react";
import tempImg from "../../../assets/Landing/tempImage.png";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-[21px] pb-[65px] px-[30px] md:px-[65px] items-center gap-10 mt-5">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-[#101010] dark:text-white text-4xl lg:text-5xl font-black">
          Build Your Career with
        </h1>
        <div className="relative">
          <div className="text-[#37ED81] text-4xl lg:text-5xl font-black my-6">
            <div className="absolute inset-0 mt-6">
              <Typewriter
                options={{
                  strings: ["India's Best Gurukul"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* This element is only to give predefined height for typewritter */}
            <p className="invisible">India's Best Gurukul</p>
          </div>
        </div>
        <p className="text-[#8A8F98] font-medium md:text-base text-sm">
          Get trained for top tech jobs by industry experts and (IIT/IIM Alumni)
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            type="button"
            className="mt-10 capitalize bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white py-2.5 px-4 rounded-full duration-200 lg:text-base text-sm"
          >
            apply now
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={tempImg} />
      </div>
    </div>
  );
}

export default Landing;
