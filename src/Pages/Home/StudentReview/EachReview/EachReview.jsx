import React from "react";
import style from "./eachReview.module.css";

function EachReview({ item, index, active, setActive, setShouldUpdate }) {
  const handleMouseEnter = () => {
    if (index !== active) {
      setShouldUpdate(false);
      setActive(index);
    }
  };

  return (
    <div
      className={`${
        style.triangle_gradient
      } relative pt-5 px-5 ${
        index === active ? "w-[400px]" : "w-[240px]"
      } h-[800px]  duration-300 overflow-hidden dark:bg-[#191C1E] border border-[#37ED81] hover:cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShouldUpdate(true)}
    >
      <h1
        className={`${
          index === active ? "text-3xl" : "text-xl"
        } font-semibold text-[#4BA25D] leading-relaxed text-center`}
      >
        {item?.heading}
      </h1>
      {index === active && (
        <>
          <p className="font-medium text-sm text-justify mt-[54px]">
            {item?.description}
          </p>{" "}
          <div className="mt-10">
            <p className="text-[#00A3FF] font-semibold text-lg">{item?.name}</p>
            <p className="font-medium my-3">{item?.position}</p>
            {item?.img && <img src={item.img} alt={item?.heading} />}
          </div>
        </>
      )}

      {item?.img && (
        <img
          src={item.personImg}
          alt={item?.heading}
          className="absolute bottom-0 right-0"
        />
      )}
    </div>
  );
}

export default EachReview;
