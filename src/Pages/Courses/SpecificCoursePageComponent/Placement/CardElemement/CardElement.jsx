import React from 'react';

const CardElement = ({element}) => {

    const {img, body} =  element;

    return (
        <div className='flex gap-[24px] flex-col justify-center items-center w-[180px] '>
            <div className='md:p-[10px] dark:bg-[#1A211F] bg-[#E1FFE8] rounded-[100%]'>
                <img className='w-[40px] ' src={img} alt="Spets Images" />
            </div>
            <div className=' h-[54px] text-center'>
                <p className='md:px-[10px] px-[10px]'>{body}</p>
            </div>
        </div>
    );
};

export default CardElement;