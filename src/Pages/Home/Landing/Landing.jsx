import React from "react";
import tempImg from "../../../assets/Landing/tempImage.png";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-[21px] pb-[65px] px-[65px] items-center">
      <div>
        <h1 className="text-[#101010] dark:text-white text-5xl font-black">
          Build Your Career with
        </h1>
        <h1 className="text-[#37ED81] text-5xl font-black my-6">
          <Typewriter
            options={{
              strings: ["India's Best Gurukul"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-[#8A8F98] font-medium">
          Get trained for top tech jobs by industry experts and (IIT/IIM Alumni)
        </p>
        <button
          type="button"
          className="mt-10 capitalize bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] text-white py-2.5 px-4 rounded-full duration-200"
        >
          apply now
        </button>
      </div>
      <div className="flex justify-end">
        <img src={tempImg} />
      </div>
    </div>
  );
}

export default Landing;
