import React from "react";

const CoursesLayoutCard = ({ course }) => {
  const { img, title, duration } = course;
  return (
    <div className='flex md:gap-[25px] gap-[15px] flex-row-2  items-center'>
      <div className=' my-auto text-[#4BA25D] text-[30px] md:text-[30px] lg:text-[30px]'>
        {img}
      </div>
      <div className='flex flex-col  '>
        <div className='text-[#101010] dark:text-[white] font-[500]  md:text-[20px] text-[15px]'>
          {title}
        </div>
        <div className='text-[#101010] dark:text-[white] font-[400] md:text-[16px] text-[12px]'>
          {duration}
        </div>
      </div>
    </div>
  );
};

export default CoursesLayoutCard;
