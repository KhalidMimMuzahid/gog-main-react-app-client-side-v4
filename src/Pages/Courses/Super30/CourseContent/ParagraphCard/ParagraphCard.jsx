import React from 'react';

const ParagraphCard = ({slb}) => {
    const {heading, subHeading} = slb;
    return (
        <>
            <p> <span className='text-[#101010] text-[700] '>{heading}</span> </p>
        </>
    );
};

export default ParagraphCard;