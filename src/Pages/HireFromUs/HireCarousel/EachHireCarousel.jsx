import React from "react";

function EachHireCarousel({ item }) {
  return (
    <div className={`${item.color} min-w-[520px] p-[40px] rounded-2xl`}>
      <div className="text-[#101010] flex flex-col gap-10">
        <p className="text-[14px] text-justify">{item?.desc}</p>
        <div className="flex justify-between gap-5 items-center">
          <div className="flex items-center gap-5">
            <img src={item?.img} alt="person image" />
            <div>
              <p className="text-[#4BA25D] font-medium">{item?.name}</p>
              <p className="font-medium">{item?.position}</p>
            </div>
          </div>
          <img src={item?.companyLogo} alt="company logo" />
        </div>
      </div>
    </div>
  );
}

export default EachHireCarousel;
