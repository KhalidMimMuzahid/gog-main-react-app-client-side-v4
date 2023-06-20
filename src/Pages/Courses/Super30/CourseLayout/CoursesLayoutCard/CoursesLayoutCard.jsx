import React from "react";

const CoursesLayoutCard = ({course}) => {
    const {img, title, duration} = course;
  return (
    <div class="flex gap-[25px] flex-row-2">
      <div class=" my-auto text-[#4BA25D] text-[30px]">
        { img}
      </div>
      <div class="flex flex-col">
        <div className="text-[#101010] dark:text-[white] font-[500] md:text-[20px] text-[18px]">
          {title}
        </div>
        <div className="text-[#101010] dark:text-[white] font-[400] md:text-[16px] text-[15px]">
          {duration}
        </div>
      </div>
    </div>
  );
};

export default CoursesLayoutCard;
