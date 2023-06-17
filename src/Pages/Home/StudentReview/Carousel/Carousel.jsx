import React from "react";
import EachCarouselSection from "./EachCarouselSection/EachCarouselSection";

function Carousel({data}) {
  return (
    <div className="my-10 flex flex-col justify-between gap-6 items-center">
      <div className="carousel carousel-center w-[60%] md:w-[90%] sm:w-[70%]">
        {data.map((item, index) => (
          <div id={item?.id} className="carousel-item w-full" key={index}>
            <EachCarouselSection item={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data.map((item, index) => (
          <a href={`#${item?.id}`} className="btn btn-xs rounded-full bg-[#4BA25D]" key={index}>
            <span className="">1</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
