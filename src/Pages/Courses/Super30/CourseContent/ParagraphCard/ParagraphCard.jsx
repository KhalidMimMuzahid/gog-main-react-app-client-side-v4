import React from 'react';

const ParagraphCard = ({slb}) => {
    const {heading, subHeading} = slb;
    return (
        <>
            <p className='mb-[16px] dark:text-[white] text-[#101010]'> <span className=' dark:text-[white] text-[#101010] font-[600] md:text-[16px] text-[15px]'>{heading} </span>: {subHeading} </p>
        </>
    );
};

export default ParagraphCard;