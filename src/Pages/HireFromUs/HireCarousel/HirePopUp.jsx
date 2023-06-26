import React from "react";
import { BsX } from "react-icons/bs";

function HirePopUp({ item, setPopUpIndex }) {
  return (
    <div
      className={`${item?.color2} max-w-[880px] p-[25px] md:p-[40px] rounded-2xl relative`}
    >
      <button type="button" className="absolute top-0 right-0 m-1.5 md:m-3">
        <BsX color="black" size={25} onClick={() => setPopUpIndex(-1)} />
      </button>
      <div className="text-[#101010] flex flex-col gap-10">
        <p className="text-[12px] md:text-[16px] text-justify">{item?.desc}</p>
        <div className="flex justify-between gap-2 md:gap-5 items-center">
          <div className="flex items-center gap-2 md:gap-5">
            <img src={item?.img} alt="person image" />
            <div>
              <p className="text-[#4BA25D] font-medium">{item?.name}</p>
              <p className="font-medium text-[14px] md:text-base">
                {item?.position}
              </p>
            </div>
          </div>
          <img src={item?.companyLogo} alt="company logo" />
        </div>
      </div>
    </div>
  );
}

export default HirePopUp;
