import React, { useContext } from "react";
import { BsPatchCheck } from "react-icons/bs";
import style from "../sdeInfo.module.css";
import { UIContext } from "../../../../contexts/UIProvider/UIProvider";

function SDEInfoCarouselComponent({ item }) {
  const { theme } = useContext(UIContext);
  return (
    <div className="w-full flex-shrink-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-medium leading-relaxed text-[#101010] dark:text-[#37ED81]">
            {item?.heading}
          </h2>
          <div className="flex flex-col gap-10 w-full mt-20 lg:mt-32">
            {item?.info.map((point, index) => (
              <div
                className="flex gap-4 items-center text-[#101010] dark:text-white"
                key={index}
              >
                <BsPatchCheck className="text-2xl" />
                <p className="md:font-medium text-base md:text-lg w-full">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <h2 className={`${style.gradient_text} text-2xl font-medium`}>
            {item?.subHeading}
          </h2>
          <p className="text-[#101010] dark:text-white mt-10 md:text-xl font-normal dark:font-thin">
            {item?.desc}
          </p>
          <div className="flex justify-center">
            <img
              src={theme === "light" ? item?.lightSVG : item?.darkSVG}
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SDEInfoCarouselComponent;
