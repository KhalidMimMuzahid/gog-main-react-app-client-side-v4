import React from "react";
import backgroundImage from "../../../assets/someBG/01.svg";

const ExploreCourses = () => {
  return (
    <div
      className=" border h-64 sm:h-96 relative m-[65px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className=" text-2xl ">
        <div className="flex justify-between items-center">
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            provident?
          </div>
          <div>button</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
