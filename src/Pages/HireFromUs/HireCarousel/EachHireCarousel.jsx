import React from "react";

function EachHireCarousel({ item, setPopUpIndex, index }) {
  return (
    <div className={`${item?.color} min-w-full md:min-w-[520px] p-[25px] md:p-[40px] rounded-2xl cursor-pointer`} onClick={() => setPopUpIndex(index)}>
      <div className="text-[#101010] flex flex-col gap-10">
        <p className="text-[12px] md:text-[14px] text-justify">{item?.desc?.substring(0, 310)}.......</p>
        <div className="flex justify-between gap-2 md:gap-5 items-center">
          <div className="flex items-center gap-2 md:gap-5">
            <img src={item?.img} alt="person image" />
            <div>
              <p className="text-[#4BA25D] font-medium">{item?.name}</p>
              <p className="font-medium text-[14px] md:text-base">{item?.position}</p>
            </div>
          </div>
          <img src={item?.companyLogo} alt="company logo" />
        </div>
      </div>
    </div>
  );
}

export default EachHireCarousel;
