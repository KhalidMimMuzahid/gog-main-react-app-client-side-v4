import React from 'react';

const BenefitsCard = ({each}) => {
    const {title, body, thambnail} = each;

    

    return (
        <div className=" bg-[#D1FFD0] text-center mx-[80px] md:text-left rounded-2xl flex flex-col md:flex-row  items-center px-[20px] py-[40px] gap-[40px] ">
            <div><img src={thambnail} alt="images for benefits" /></div>
            <div>
                <h4 className='font-[600] text-[18px] text-[#101010] mb-[24px]'>{title}</h4>
                <p className='font-[500] text-[16px] text-[#101010] mb-[24px]'>{body}</p>
            </div>
        </div>
    );
};

export default BenefitsCard;