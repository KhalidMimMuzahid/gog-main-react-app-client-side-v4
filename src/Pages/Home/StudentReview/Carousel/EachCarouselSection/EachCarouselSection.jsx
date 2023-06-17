import React from "react";
import style from "./eachCarouselSection.module.css";

function EachCarouselSection({ item }) {
  return (
    <div className="rounded-xl bg-white mx-10">
      <div className={`${style.triangle_gradient} relative m-8`}>
        <div>
          <h1 className="font-semibold text-xl text-[#4BA25D] text-center">
            {item?.heading}
          </h1>
          <p className="text-sm text-justify my-5 md:w-[60%] w-full">{item?.description}</p>
          <p className="text-[#00A3FF] text-lg font-medium">{item?.name}</p>
          <p className="text-sm my-2 h-12 md:h-auto">{item?.position}</p>
          <img src={item?.img} />
        </div>
        <img src={item?.personImg} className="absolute bottom-0 right-0 h-32 md:h-52" />
      </div>
    </div>
  );
}

export default EachCarouselSection;
