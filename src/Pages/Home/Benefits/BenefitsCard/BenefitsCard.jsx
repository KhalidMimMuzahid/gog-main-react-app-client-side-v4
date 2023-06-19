import React from 'react';


const BenefitsCard = ({ each }) => {
  const { title, body, thambnail } = each;


  return (
    <div className={`md:h-[200px] group overflow-hidden bg-[#D1FFD0] dark:bg-[#222C26] text-center md:mx-[80px]  md:text-left rounded-2xl flex flex-col md:flex-row items-center px-[20px] md:py-[40px] py-[20px] md:gap-[40px] gap-[30px] border-2 border-transparent hover:border-gradient-red-blue hover:border-opacity-100`}>
      <div>
        <img style={{ minWidth: '166px' }} src={thambnail} alt="images for benefits" />
      </div>
      <div className={``}>
        <h4 className="font-[600] dark:text-[#FFFFFF] text-[#101010] mb-[20px] md:mb-[24px] group-hover:text-xl transition-all duration-300">
          {title}
        </h4>
        <p className={`font-[500] md:text-[16px] text-[14px] dark:text-[#8A8F98] text-[#101010]  group-hover:text-xl transition-all duration-300`}>
          {body}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
