import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, position, reviews, logo } = review;
  return (
    <div className='p-5 max-w-[340px] rounded-[8px] bg-[#E1FFE8] dark:bg-[#1C202A] dark:text-white'>
      <div className='flex items-start gap-3'>
        <div className="w-full">
          <img className="w-[40px]" src={img} alt='' />
        </div>
        <div className='flex flex-col gap-2'>
          <div>
            <p className="font-medium">{name}</p>
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#4BA25D]">{position}</p>
          </div>
          <div>
            <p className="text-justify">{reviews}</p>
          </div>
          <div className="w-full mt-5">
            <img src={logo} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
